import { AbstractElementClass, AbstractElementLike, AbstractTextNodeLike } from 'jsx-alone-core';
import { defaultRenderConfig, ElementLikeImplRenderConfig } from './config';
import { indent } from './util';

export class ElementLikeImpl extends AbstractElementLike<string> {
  
  private innerHtml: string | undefined

  render(config: ElementLikeImplRenderConfig = defaultRenderConfig): string {
    const newLine = config.indent ? `\n` : ``
    const content =
      this.innerHtml ||
      `${newLine}${indent({ ...config, indentLevel: (config.indentLevel || 0) + 1 })}${this.children
        .map(c => `${c.render({ ...config, indentLevel: (config.indentLevel || 0) + 1 })}`)
        .join('')}${newLine}${indent(config)}`
    return `<${this.tag}${Object.keys(this.attrs)
      .map(a => ` ${a}="${this.attrs[a]}"`)
      .join('')}>${content}</${this.tag}>`
  }

  dangerouslySetInnerHTML(s: string): void {
    this.innerHtml = s
  }
}

export class TextNodeLikeImpl extends AbstractTextNodeLike<string> {
  constructor(content:string){
    super(content)
  }
  render(config: ElementLikeImplRenderConfig = defaultRenderConfig): string {
    return `${this.content}`
  }
}

export abstract class ElementClass<P = {}> extends AbstractElementClass<string, P> {}
