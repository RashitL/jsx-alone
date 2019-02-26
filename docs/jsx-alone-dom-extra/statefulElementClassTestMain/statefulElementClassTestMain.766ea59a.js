parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"dHmX":[function(require,module,exports) {
"use strict";var t=this&&this.__assign||function(){return(t=Object.assign||function(t){for(var r,n=1,e=arguments.length;n<e;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)};function r(t,r){if(void 0===r&&(r="Throwing on undefined value"),!t)throw new Error(r);return t}function n(t,r){for(var n=[],e=0;e<t;e++)n.push(void 0===r?e:r);return n}function e(t,r){return n(t,r).join("")}function o(t,r){return void 0===t&&(t=1),void 0===r&&(r=2),e(t*r," ")}function s(t,r,n){return t.split(r,n).join(r).length}function i(t,r){return void 0===r&&(r=" "),t.replace(/\s+/gm,r).trim()}function u(t,r){return Math.floor(Math.random()*r)+t}function a(t){return t[u(0,t.length)]}function c(r,n){void 0===n&&(n={minutes:!1,seconds:!0,ms:!0});var e=(n=t({minutes:!1,seconds:!0,ms:!0},n)).seconds&&Math.floor(r/1e3),o=n.minutes&&e&&Math.floor(e/60),s=n.ms&&Math.floor(r%1e3||r);return(o?o+" minutes ":"")+(e?e+" seconds ":"")+(s?s+" ms ":"")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkThrow=r,exports.array=n,exports.repeat=e,exports.indent=o,exports.getPosition=s,exports.removeWhites=i,exports.randomIntBetween=u,exports.randomItem=a,exports.printMs=c;
},{}],"Urqt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./util");function e(t){return t.prototype&&t.prototype.render}function n(t){return i(t)||r(t)}function r(t){return t&&t.setAttribute}function i(t){return t&&t.content&&!r(t)}exports.isJSXAloneComponent=e,exports.isNode=n,exports.isElementLike=r,exports.isTextNodeLike=i;var o=function(){return function(t){this.content=t}}();exports.AbstractTextNodeLike=o;var s=function(){function e(t){this.tag=t,this.attrs={},this.children=[]}return e.prototype.setAttribute=function(t,e){this.attrs[t]=e},e.prototype.appendChild=function(t){this.children.push(t),r(t)&&(t.parentElement=this)},e.prototype.findDescendant=function(t){var e;return this.children.some(function(n){return r(n)&&(e=t(n)?n:n.findDescendant(t)),!!e}),e},e.prototype.findAscendant=function(t){if(this.parentElement)return t(this.parentElement)?this.parentElement:this.parentElement.findAscendant(t)},e.prototype.getAscendants=function(){return this.parentElement?this.parentElement.getAscendants().concat([this.parentElement]):[]},e.prototype.getRootAscendant=function(){var e=this.parentElement?this.findAscendant(function(t){return r(t)&&!t.parentElement}):this;return t.checkThrow(e,"No root ascendant found in element like tree!")},e.prototype.getSiblings=function(){var t=this;return this.parentElement?this.parentElement.children.filter(function(e){return e!==t}):[]},e.prototype.findSibling=function(t){return this.getSiblings().find(t)},e.prototype.find=function(t){return this.getRootAscendant().findDescendant(t)},e}();exports.AbstractElementLike=s;
},{"./util":"dHmX"}],"qWxh":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(r,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])})(r,n)};return function(r,n){function e(){this.constructor=r}t(r,n),r.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}();Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./elementImpl"),n=function(){function t(t){this.props=t}return t.prototype.childrenAsArray=function(){return Array.isArray(this.props.children)?this.props.children:[this.props.children]},t.prototype.childrenElementsAsArray=function(){return this.childrenAsArray().filter(function(t){return r.isElementLike(t)})},t.prototype.firstChildElement=function(){return this.childrenAsArray().find(function(t){return!0})},t}();exports.ElementClass=n;var e=function(r){function n(){return null!==r&&r.apply(this,arguments)||this}return t(n,r),n}(n);exports.AbstractElementClass=e;
},{"./elementImpl":"Urqt"}],"Nzec":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e=this&&this.__assign||function(){return(e=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("./elementImpl"),r=!1;function o(t){if(r)throw t;console.error(t)}function i(r){var i=r.impl,s=r.textNodeImpl,l=r.escapeAttributes,a=r.functionAttributes,u=r.onElementReady,p=r.onElementCreated;return function(r,c){void 0===c&&(c={});for(var f,y,b=[],d=2;d<arguments.length;d++)b[d-2]=arguments[d];"string"==typeof r?f=new i(r):(n.isJSXAloneComponent(r)?(y=new r(e({},c,{children:b})),f=y.render()):f=r(e({},c,{children:b})),c={}),p&&p({elementLike:f,elementClassInstance:y});var h=function(e){if(e&&c.hasOwnProperty(e)){var n=c[e];if("boolean"==typeof n)!0===n&&f.setAttribute(e,e);else if("function"==typeof n)if(a&&"preserve"!==a){var r="toString-this"===a?"_this = __this__ = this; ("+n.toString()+").apply(_this, arguments)":n.toString(),i=l?l(r):r;f.setAttribute(e,i)}else f.setAttribute(e,n);else!1!==n&&null!=n?"className"===e?"string"==typeof n?f.setAttribute("class",n):Array.isArray(n)&&n.length&&"string"==typeof n[0]?f.setAttribute("class",n.join(" ")):o("unrecognized className value "+t(n)+" "+n):f.setAttribute(e,n.toString()):"object"===t(n)?"style"===e?f.setAttribute("style",""+Object.keys(n).map(function(t){return t+": "+n[t]}).join("; ")):"dangerouslySetInnerHTML"===e&&n&&"string"==typeof n.__html?f.dangerouslySetInnerHTML(n.__html):o('unrecognized object attribute "'+e+'" - the only object attribute supported is "style"'):o('unrecognized attribute "'+e+'" with type '+t(n))}};for(var g in c)h(g);return"string"==typeof r&&b.filter(function(t){return t}).forEach(function(t){n.isNode(t)?f.appendChild(t):Array.isArray(t)?t.forEach(function(t){"string"==typeof t?f.appendChild(new s(t)):n.isNode(t)?f.appendChild(t):o("Child is not a node or string: "+t+" , tag: "+r)}):f.appendChild(new s(t))}),u&&u({elementLike:f}),f}}exports.debug=o,exports.createCreateElement=i,exports.AbstractJSXAlone=null;
},{"./elementImpl":"Urqt"}],"h+Y6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require(".");function r(r){var n=r.children();return console.log(n),n?e.AbstractJSXAlone.createElement(exports.Fragment,null,n):null}function n(e){var r=Array.isArray(e.children)?e.children[0]:e.children,n=e.c,l=e.p;return t(n)?r.apply(null,(l?[l]:[]).concat([n])):null}function t(e){return!!e}exports.Fragment=function(r){return e.AbstractJSXAlone.createElement("span",null,r.children)},exports.Js=r,exports.If=n;
},{".":"6FnY"}],"6FnY":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./elementImpl")),e(require("./elementClass")),e(require("./createElement"));var r=require("./elementImpl");exports.AbstractTextNodeLike=r.AbstractTextNodeLike,exports.AbstractElementLike=r.AbstractElementLike,e(require("./misc")),e(require("./util"));
},{"./elementImpl":"Urqt","./elementClass":"qWxh","./createElement":"Nzec","./misc":"h+Y6","./util":"dHmX"}],"vmAk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./util");function e(t){return t.prototype&&t.prototype.render}function n(t){return i(t)||r(t)}function r(t){return t&&t.setAttribute}function i(t){return t&&t.content&&!r(t)}exports.isJSXAloneComponent=e,exports.isNode=n,exports.isElementLike=r,exports.isTextNodeLike=i;var o=function(){return function(t){this.content=t}}();exports.AbstractTextNodeLike=o;var s=function(){function e(t){this.tag=t,this.attrs={},this.children=[]}return e.prototype.setAttribute=function(t,e){this.attrs[t]=e},e.prototype.appendChild=function(t){this.children.push(t),r(t)&&(t.parentElement=this)},e.prototype.findDescendant=function(t){var e;return this.children.some(function(n){return r(n)&&(e=t(n)?n:n.findDescendant(t)),!!e}),e},e.prototype.findAscendant=function(t){if(this.parentElement)return t(this.parentElement)?this.parentElement:this.parentElement.findAscendant(t)},e.prototype.getAscendants=function(){return this.parentElement?this.parentElement.getAscendants().concat([this.parentElement]):[]},e.prototype.getRootAscendant=function(){var e=this.parentElement?this.findAscendant(function(t){return r(t)&&!t.parentElement}):this;return t.checkThrow(e,"No root ascendant found in element like tree!")},e.prototype.getSiblings=function(){var t=this;return this.parentElement?this.parentElement.children.filter(function(e){return e!==t}):[]},e.prototype.findSibling=function(t){return this.getSiblings().find(t)},e.prototype.find=function(t){return this.getRootAscendant().findDescendant(t)},e}();exports.AbstractElementLike=s;
},{"./util":"dHmX"}],"0Bvz":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(r,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])})(r,n)};return function(r,n){function e(){this.constructor=r}t(r,n),r.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}();Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./elementImpl"),n=function(){function t(t){this.props=t}return t.prototype.childrenAsArray=function(){return Array.isArray(this.props.children)?this.props.children:[this.props.children]},t.prototype.childrenElementsAsArray=function(){return this.childrenAsArray().filter(function(t){return r.isElementLike(t)})},t.prototype.firstChildElement=function(){return this.childrenAsArray().find(function(t){return!0})},t}();exports.ElementClass=n;var e=function(r){function n(){return null!==r&&r.apply(this,arguments)||this}return t(n,r),n}(n);exports.AbstractElementClass=e;
},{"./elementImpl":"vmAk"}],"fbNL":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e=this&&this.__assign||function(){return(e=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("./elementImpl"),r=!1;function o(t){if(r)throw t;console.error(t)}function i(r){var i=r.impl,s=r.textNodeImpl,l=r.escapeAttributes,a=r.functionAttributes,u=r.onElementReady,p=r.onElementCreated;return function(r,c){void 0===c&&(c={});for(var f,y,b=[],d=2;d<arguments.length;d++)b[d-2]=arguments[d];"string"==typeof r?f=new i(r):(n.isJSXAloneComponent(r)?(y=new r(e({},c,{children:b})),f=y.render()):f=r(e({},c,{children:b})),c={}),p&&p({elementLike:f,elementClassInstance:y});var h=function(e){if(e&&c.hasOwnProperty(e)){var n=c[e];if("boolean"==typeof n)!0===n&&f.setAttribute(e,e);else if("function"==typeof n)if(a&&"preserve"!==a){var r="toString-this"===a?"_this = __this__ = this; ("+n.toString()+").apply(_this, arguments)":n.toString(),i=l?l(r):r;f.setAttribute(e,i)}else f.setAttribute(e,n);else!1!==n&&null!=n?"className"===e?"string"==typeof n?f.setAttribute("class",n):Array.isArray(n)&&n.length&&"string"==typeof n[0]?f.setAttribute("class",n.join(" ")):o("unrecognized className value "+t(n)+" "+n):f.setAttribute(e,n.toString()):"object"===t(n)?"style"===e?f.setAttribute("style",""+Object.keys(n).map(function(t){return t+": "+n[t]}).join("; ")):"dangerouslySetInnerHTML"===e&&n&&"string"==typeof n.__html?f.dangerouslySetInnerHTML(n.__html):o('unrecognized object attribute "'+e+'" - the only object attribute supported is "style"'):o('unrecognized attribute "'+e+'" with type '+t(n))}};for(var g in c)h(g);return"string"==typeof r&&b.filter(function(t){return t}).forEach(function(t){n.isNode(t)?f.appendChild(t):Array.isArray(t)?t.forEach(function(t){"string"==typeof t?f.appendChild(new s(t)):n.isNode(t)?f.appendChild(t):o("Child is not a node or string: "+t+" , tag: "+r)}):f.appendChild(new s(t))}),u&&u({elementLike:f}),f}}exports.debug=o,exports.createCreateElement=i,exports.AbstractJSXAlone=null;
},{"./elementImpl":"vmAk"}],"k98/":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require(".");function r(r){var n=r.children();return console.log(n),n?e.AbstractJSXAlone.createElement(exports.Fragment,null,n):null}function n(e){var r=Array.isArray(e.children)?e.children[0]:e.children,n=e.c,l=e.p;return t(n)?r.apply(null,(l?[l]:[]).concat([n])):null}function t(e){return!!e}exports.Fragment=function(r){return e.AbstractJSXAlone.createElement("span",null,r.children)},exports.Js=r,exports.If=n;
},{".":"BB47"}],"BB47":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./elementImpl")),e(require("./elementClass")),e(require("./createElement"));var r=require("./elementImpl");exports.AbstractTextNodeLike=r.AbstractTextNodeLike,exports.AbstractElementLike=r.AbstractElementLike,e(require("./misc")),e(require("./util"));
},{"./elementImpl":"vmAk","./elementClass":"0Bvz","./createElement":"fbNL","./misc":"k98/","./util":"dHmX"}],"gNvY":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),e=this&&this.__assign||function(){return(e=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("jsx-alone-core"),r=function(n){function r(){return null!==n&&n.apply(this,arguments)||this}return t(r,n),r.prototype.render=function(t){var n=this;void 0===t&&(t={});var r=document.createElement(this.tag);return Object.keys(this.attrs).forEach(function(e){var i=n.attrs[e];t.handleAttribute&&t.handleAttribute({config:t,el:r,attribute:e,value:i,elementLike:n})||("function"==typeof i?r.setAttribute(e,i.toString()):r.setAttribute(e,i+""))}),this._innerHtml&&(r.innerHTML=this._innerHtml),this.children.forEach(function(i){t.handleChildRender&&t.handleChildRender({config:t,parent:r,child:i,elementLike:n})||i.render(e({},t,{parent:r}))}),t.parent&&t.parent.appendChild(r),t.handleAfterRender&&t.handleAfterRender({config:t,el:r,elementLike:this}),r},r.prototype.dangerouslySetInnerHTML=function(t){this._innerHtml=t},r}(n.AbstractElementLike);exports.ElementLikeImpl=r;var i=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),n.prototype.render=function(t){void 0===t&&(t={});var e=document.createTextNode(this.content);return t.parent&&t.parent.appendChild(e),e},n}(n.AbstractTextNodeLike);exports.TextNodeLikeImpl=i;var o=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),n.prototype.setContainerEl=function(t){},n}(n.ElementClass);exports.ElementClass=o;
},{"jsx-alone-core":"BB47"}],"S0OW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("jsx-alone-core"),r=require("./elementImpl");exports.createCreateElementConfig={impl:r.ElementLikeImpl,textNodeImpl:r.TextNodeLikeImpl,functionAttributes:"preserve"};var t={createElement:e.createCreateElement(exports.createCreateElementConfig),render:function(e,r){return void 0===r&&(r={}),e.render({config:r})}};exports.JSXAlone=t;
},{"jsx-alone-core":"BB47","./elementImpl":"gNvY"}],"MNUJ":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./createElement")),e(require("./elementImpl"));
},{"./createElement":"S0OW","./elementImpl":"gNvY"}],"Q4+2":[function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("jsx-alone-core"),n=require("jsx-alone-dom");function r(t,n){var r={handleAttribute:function(e){var t=e.value,r=e.el,s=e.attribute,l=e.elementLike;if("function"==typeof t&&!n.dontAddEventListeners){var i=a(l,n.initialContext).functionAttributeContext,o=i?t.bind(i):t;return r.addEventListener(s.substring(2,s.length).toLowerCase(),o),l.attrs[s]=void 0,!0}return!1},handleChildRender:function(t){var l=t.child,i=t.parent,o=a(t.elementLike,n.initialContext),c=o.functionAttributeContext,u=o.elementClassInstance;return c&&s(l)&&(l._originalElementClassInstance=l._elementClassInstance,l._elementClassInstance=u||l._elementClassInstance),l.render(e({},t,r,{parent:i})),!0},handleAfterRender:function(e){var n=e.el,r=e.elementLike,a=r._originalElementClassInstance||r._elementClassInstance||t._elementClassInstance;return a&&a.setContainerEl&&a.setContainerEl(n),r._elementClassInstance=void 0,r._originalElementClassInstance=void 0,!0}};return r;function a(e,n){var r=e.parentElement&&e._elementClassInstance||t._elementClassInstance;return{functionAttributeContext:r||n,elementClassInstance:r}}}exports.ElementClass=n.ElementClass,exports.createCreateConfig=e({},n.createCreateElementConfig,{impl:n.ElementLikeImpl,textNodeImpl:n.TextNodeLikeImpl,functionAttributes:"preserve",onElementCreated:function(e){var t=e.elementLike,n=e.elementClassInstance;n&&(t._elementClassInstance=n)}});var a={createElement:t.createCreateElement(exports.createCreateConfig),render:function(t,n){void 0===n&&(n={});var a=t;return a.render(e({},n,r(a,{initialContext:n.initialContext||this})))}};function s(e){return t.isElementLike(e)}exports.JSXAlone=a;
},{"jsx-alone-core":"6FnY","jsx-alone-dom":"MNUJ"}],"NGqN":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),e=this&&this.__assign||function(){return(e=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("."),r=function(r){function a(t){var n=r.call(this,t)||this;return n.state={},n.containerEl=void 0,n.state=e({},t),n}return t(a,r),a.prototype.setState=function(t){var r;this.state=e({},this.state,t);var a={start:0,end:0};document.activeElement&&(r=i(document.activeElement),a={start:document.activeElement.selectionStart||0,end:document.activeElement.selectionEnd||0,direction:document.activeElement.selectionDirection||void 0});var c=this.render(),u=n.JSXAlone.render(c,{initialContext:this});if(this.containerEl.parentElement.replaceChild(u,this.containerEl),this.containerEl=u,r){var s=o(r+"");s&&a&&(s.focus(),s.setSelectionRange&&s.setSelectionRange(a.start,a.end,a.direction))}},a.prototype.setContainerEl=function(t){this.containerEl=t},a}(n.ElementClass);function i(t){if("string"==typeof t)return document.evaluate(t,document,null,0,null)+"";if(!t||1!=t.nodeType)return"";if(t.id)return"//*[@id='"+t.id+"']";if(t.parentNode){var e=Array.from(t.parentNode.children).filter(function(e){return e.tagName==t.tagName});return i(t.parentNode)+"/"+(t.tagName||"").toLowerCase()+(e.length>1?"["+(e.indexOf(t)+1)+"]":"")}}function o(t,e){var n=document.evaluate(t,document,null,0,null);if(!e)return n.iterateNext();try{for(var r=void 0,i=void 0;(r=n.iterateNext())&&!e(r);)i=r;return i}catch(o){alert("Error: Document tree modified during iteration "+o)}}exports.StatefulElementClass=r;
},{".":"l36I"}],"l36I":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./createElement")),e(require("./StatefulElementClass"));
},{"./createElement":"Q4+2","./StatefulElementClass":"NGqN"}],"YIO9":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var t=require("..");function n(){var e=document.createElement("div");document.body.appendChild(e);var n=t.JSXAlone.render(t.JSXAlone.createElement(a,{people:[{name:"seba"},{name:"lau"}]}),{parent:e,initialContext:this});return e.appendChild(n),e}exports.statefulElementClassTestRenderApp=n;var r=function(n){function r(){return null!==n&&n.apply(this,arguments)||this}return e(r,n),r.prototype.render=function(){var e=this;return t.JSXAlone.createElement("div",{className:"Repeater"},"Write something:",t.JSXAlone.createElement("input",{value:this.state.value,onKeyUp:function(t){e.setState({value:t.currentTarget.value})}}),t.JSXAlone.createElement("br",null),"Will be repeated: ",t.JSXAlone.createElement("span",null,this.state.value)," ")},r}(t.StatefulElementClass),a=function(n){function a(){return null!==n&&n.apply(this,arguments)||this}return e(a,n),a.prototype.render=function(){var e=this;return t.JSXAlone.createElement("div",{className:"App"},t.JSXAlone.createElement("button",{id:"add",onClick:function(t){return e.setState({people:e.state.people.concat([{name:"random name "+Math.random()}])})}},"add"),t.JSXAlone.createElement("ul",null,this.state.people.map(function(n){return t.JSXAlone.createElement("li",{"data-id":n.name},t.JSXAlone.createElement(r,{value:n.name}),t.JSXAlone.createElement("button",{className:"remove",onClick:function(t){e.setState({people:e.state.people.filter(function(e){return e.name!==n.name})})}},"remove"))})))},a}(t.StatefulElementClass);
},{"..":"l36I"}],"Yf8H":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./statefulElementClassTestRenderApp");e.statefulElementClassTestRenderApp();
},{"./statefulElementClassTestRenderApp":"YIO9"}]},{},["Yf8H"], null)
//# sourceMappingURL=statefulElementClassTestMain.766ea59a.map