import { lotsOfPeople, Renderer, LotsOfPeopleRendererConfig } from 'jsx-alone-sample-project-code'
import { JSXAlone } from 'jsx-alone-string'
import { printMs } from 'jsx-alone-core'

const renderer: Renderer = (app: JSX.Element, config: LotsOfPeopleRendererConfig) => {
  // measures onload
  const onloadT0 = Date.now()
  console.time('onload')
  window.onload = () => {
    console.timeEnd('onload')
    const onloadT = Date.now() - onloadT0
    document.getElementById('timings_onload')!.innerHTML = printMs(onloadT)
    document.getElementById('timings_buildModel')!.innerHTML = printMs(config.buildModelT)
    document.getElementById('timings_JSXAloneCreateElement')!.innerHTML = printMs(config.JSXAloneCreateElementT)
    document.getElementById('timings_JSXAloneRender')!.innerHTML = printMs(JSXAloneRenderT)
  }

  // measures render
  const JSXAloneRenderT0 = Date.now()
  console.time('JSXAlone.render()')
  const s = JSXAlone.render(app, {indent: false, indentTabSize: 0, indentLevel: 0})
  console.log(typeof s)

  console.timeEnd('JSXAlone.render()')
  const JSXAloneRenderT = Date.now() - JSXAloneRenderT0

  // measures appendChild TODO: timing
  let root = document.getElementById('jsx-alone-sample-project-code')
  if (root) {
    root.remove()
  }
  root = document.createElement('dir')
  root.setAttribute('id', 'jsx-alone-sample-project-code')
  root.innerHTML = s
  // setInnerHTML(root, s)
  document.body.appendChild(root)

  document.getElementById('timings_onload')!.innerHTML = 'N/E'
  document.getElementById('timings_buildModel')!.innerHTML = printMs(config.buildModelT)
  document.getElementById('timings_JSXAloneCreateElement')!.innerHTML = printMs(config.JSXAloneCreateElementT)
  document.getElementById('timings_JSXAloneRender')!.innerHTML = printMs(JSXAloneRenderT)

}

lotsOfPeople(renderer, undefined, JSXAlone)

// /** sets innerHTML and calls children scripts if any */
// export function setInnerHTML(elm: HTMLElement, html: string) {
//   elm.innerHTML = html;
//   elm.querySelectorAll("script").forEach(function (el) {
//     let newEl = document.createElement("script");
//     el.getAttributeNames().forEach(function (attrName) {
//       newEl.setAttribute(attrName, el.getAttribute(attrName)!)
//     });
//     newEl.appendChild(document.createTextNode(el.innerHTML));
//     el.parentNode!.replaceChild(newEl, el);
//   })
// }
