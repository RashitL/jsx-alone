// adapted from https://github.com/CompuIves/codesandbox-client/blob/196301c919dd032dccc08cbeb48cf8722eadd36b/packages/app/src/app/components/CodeEditor/Monaco/workers/syntax-highlighter.js


import { registerStyle } from '../style/styles';
import * as monaco from 'monaco-editor'
import { CodeWorkerResponse, registerWorkerListener, postMessage } from '../codeWorkerManager';
import { getMonacoInstance } from './monaco';

let listenerAdded = false
let lastJsxDecorations: string[] = []
let jsxSyntaxHighlightEventListenerCalled = false

registerWorkerListener(dispatchSyntaxHighlight)
function dispatchSyntaxHighlight({ data }: { data: CodeWorkerResponse }) {
  const editor = getMonacoInstance()! //TODO
  const model = editor.getModel();
  if (model && model.getVersionId() !== data.version) {
    return;
  }
  const decorations: monaco.editor.IModelDeltaDecoration[] = data.jsxSyntaxHighLight.classifications.map((classification: any) => {
    const inlineClassName = classification.type
      ? `${classification.kind} ${classification.type}-of-${classification.parentKind}`
      : classification.kind
    return {
      range: new monaco.Range(classification.startLine, classification.start, classification.endLine, classification.end),
      options: {
        // Some class names to help us add some color to the JSX code
        inlineClassName
      }
    }
  })

  // console.log(decorations.map(d=>d.options.inlineClassName).filter((d,i,a)=>i===a.indexOf(d)));

  lastJsxDecorations = editor.deltaDecorations(lastJsxDecorations, decorations)

  // if (!jsxSyntaxHighlightEventListenerCalled) {
  //   editor.getModel()!.setValue(editor.getModel()!.getValue())
  //   jsxSyntaxHighlightEventListenerCalled = true
  // }
}


export function jsxSyntaxHighlightInstall(editor: monaco.editor.IStandaloneCodeEditor) {

    const lightStyles = `
.JsxText {
  color: #5c6773;
}
.JsxExpression {  /* the braces {} in an jsx expression */
  color:  #009900
}
.JsxAttribute.JsxText { /* the = in an attribute decl */
  pink
}
.JsxOpeningElement,
.JsxClosingElement {
  color: #888811;
}
.JsxSelfClosingElement,
.tagName-of-JsxOpeningElement,
.tagName-of-JsxClosingElement,
.tagName-of-JsxSelfClosingElement {
  color: #41a6d9;
}
.name-of-JsxAttribute {
  color: #f08c36;
}
    `

    const darkStyles = `
.JsxText {
  color: #8a97b3;
}
.JsxExpression {  /* the braces {} in an jsx expression */
  color:  #00bb00
}
.JsxAttribute.JsxText { /* the = in an attribute decl */
  pink
}
.JsxOpeningElement,
.JsxClosingElement {
  color: #cccc88;
}
.JsxSelfClosingElement,
.tagName-of-JsxOpeningElement,
.tagName-of-JsxClosingElement,
.tagName-of-JsxSelfClosingElement {
  color: #8dc5d5;
}
.name-of-JsxAttribute {
  color: #f08c36;
}
    `

    registerStyle(lightStyles.split('\n').map(l => l.trim().startsWith('.') ? '.vs ' + l : l).join('\n'))

    registerStyle(darkStyles.split('\n').map(l => l.trim().startsWith('.') ? '.vs-dark ' + l : l).join('\n'))

  }
