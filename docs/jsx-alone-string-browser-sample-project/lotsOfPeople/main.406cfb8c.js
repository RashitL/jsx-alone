parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"3p56":[function(require,module,exports) {
function t(t){return t.prototype&&t.prototype.render}function e(t){return r(t)||n(t)}function n(t){return t&&t.setAttribute}function r(t){return t&&t.content&&!n(t)}1,exports.isElementClassConstructor=t,exports.isNode=e,exports.isElementLike=n,exports.isTextNodeLike=r;var o=function(){return function(t){this.content=t}}();exports.AbstractTextNodeLike=o;var i=function(){function t(t){this.tag=t,this.attrs={},this.children=[]}return t.prototype.setAttribute=function(t,e){this.attrs[t]=e},t.prototype.appendChild=function(t){this.children.push(t),n(t)&&(t.parentElement=this)},t}();exports.AbstractElementLike=i;
},{}],"+nOU":[function(require,module,exports) {
var t=this&&this.__extends||function(){var t=function(n,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})(n,r)};return function(n,r){function e(){this.constructor=n}t(n,r),n.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}}();;var n=function(){return function(t){this.props=t}}();exports.ElementClass=n;var r=function(n){function r(){return null!==n&&n.apply(this,arguments)||this}return t(r,n),r}(n);exports.AbstractElementClass=r;
},{}],"rCe5":[function(require,module,exports) {
function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t=this&&this.__assign||function(){return(t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};;var n=require("./elementImpl"),r=!1;function o(e){if(r)throw e;console.error(e)}function i(r){var o=r.impl,i=r.textNodeImpl,l=r.onElementReady,s=r.onElementCreated;return function(r,u){void 0===u&&(u={});for(var a,c,f=[],p=2;p<arguments.length;p++)f[p-2]=arguments[p];u=u||{};var y="string"==typeof r;return y?a=new o(r):n.isElementClassConstructor(r)?(c=new r(t({},u,{children:f})),a=c.render()):a=r(t({},u,{children:f})),s&&s({elementLike:a,elementClassInstance:c,attrs:u}),u=y?u:{},Object.keys(u).forEach(function(t){var n=u[t],r=e(n);"string"===r||"number"===r?a.setAttribute(t,n):"function"===r?a.setAttribute(t,n):!1===n||(!0===n?a.setAttribute(t,t):"dangerouslySetInnerHTML"===t&&n?a.dangerouslySetInnerHTML(n.__html):a.setAttribute(t,n))}),y&&f.filter(function(e){return e}).forEach(function(e){n.isNode(e)?a.appendChild(e):Array.isArray(e)?e.forEach(function(e){n.isNode(e)?a.appendChild(e):a.appendChild(new i(e))}):a.appendChild(new i(e))}),l&&l({elementLike:a}),a}}exports.debug=o,exports.createCreateElement=i,exports.AbstractJSXAlone=null;
},{"./elementImpl":"3p56"}],"URgR":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3];;var n=require(".");function r(e){var r=e.children();return console.log(r),r?n.AbstractJSXAlone.createElement(exports.Fragment,null,r):null}function t(e){var n=Array.isArray(e.children)?e.children[0]:e.children,r=e.c,t=e.p;return l(r)?n.apply(null,(t?[t]:[]).concat([r])):null}function l(e){return!!e}function o(){return"undefined"==typeof window&&"undefined"==typeof document?e:window}function u(e){o().JSXAlone=e}exports.Fragment=function(e){return n.AbstractJSXAlone.createElement("span",null,e.children)},exports.Js=r,exports.If=t,exports.getGlobal=o,exports.installJSXAloneAsGlobal=u;
},{".":"USgY"}],"8yB0":[function(require,module,exports) {
var t=this&&this.__assign||function(){return(t=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};function n(t,n){if(void 0===n&&(n="Throwing on undefined value"),!t)throw new Error(n);return t}function r(t,n){for(var r=[],e=0;e<t;e++)r.push(void 0===n?e:n);return r}function e(t,n){return r(t,n).join("")}function o(t,n){return void 0===t&&(t=1),void 0===n&&(n=2),e(t*n," ")}function i(t,n,r){return t.split(n,r).join(n).length}function s(t,n){return void 0===n&&(n=" "),t.replace(/\s+/gm,n).trim()}function u(t,n){return Math.floor(Math.random()*n)+t}function a(t){return t[u(0,t.length)]}function c(n,r){void 0===r&&(r={minutes:!1,seconds:!0,ms:!0});var e=(r=t({minutes:!1,seconds:!0,ms:!0},r)).seconds&&Math.floor(n/1e3),o=r.minutes&&e&&Math.floor(e/60),i=r.ms&&Math.floor(n%1e3||n);return(o?o+" minutes ":"")+(e?e+" seconds ":"")+(i?i+" ms ":"")}function p(t){return""+Object.keys(t).map(function(n){return n+": "+t[n]}).join("; ")}1,exports.checkThrow=n,exports.array=r,exports.repeat=e,exports.indent=o,exports.getPosition=i,exports.removeWhites=s,exports.randomIntBetween=u,exports.randomItem=a,exports.printMs=c,exports.printStyleHtmlAttribute=p;var f=0;function d(t){return void 0===t&&(t="_"),t+f++}exports.unique=d;
},{}],"SgzN":[function(require,module,exports) {
;var e=require(".");function n(e){var n={};return Object.keys(e).forEach(function(e){n[e]=e}),{styles:e,classes:n}}exports.Style=function(n){function s(s){return n.renderConfig&&n.renderConfig.indent?e.indent(s):""}return JSXAlone.createElement("style",null,Object.keys(n.classes).map(function(e){return s(1)+"."+e+(n.classes[e]&&n.classes[e].selectorPostfix?n.classes[e].selectorPostfix:"")+" {"+Object.keys(n.classes[e]).filter(function(e){return"selectorPostfix"!==e}).map(function(t){return"\n"+s(2)+function(e){for(var n;n=/([A-Z])/.exec(e);)e=e.substring(0,n.index)+"-"+n[1].toLowerCase()+e.substring(n.index+1,e.length);return e}(t)+": "+n.classes[e][t]+";"}).join("")+"\n}"}).join("\n"))},exports.Styles=n;
},{".":"USgY"}],"USgY":[function(require,module,exports) {
function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}1,e(require("./elementImpl")),e(require("./elementClass")),e(require("./createElement"));var r=require("./elementImpl");exports.AbstractTextNodeLike=r.AbstractTextNodeLike,exports.AbstractElementLike=r.AbstractElementLike,e(require("./misc")),e(require("./util")),e(require("./style"));
},{"./elementImpl":"3p56","./elementClass":"+nOU","./createElement":"rCe5","./misc":"URgR","./util":"8yB0","./style":"SgzN"}],"/5mC":[function(require,module,exports) {
;var e=require("jsx-alone-core");exports.names={firstName:function(){return e.randomItem(a)},lastName:function(){return e.randomItem(a)}},exports.numbers={integer:function(a,n){return e.randomIntBetween(a,n)}};var a=["William","Jack","Oliver","Joshua","Thomas","Lachlan","Cooper","Noah","Ethan","Lucas","James","Samuel","Jacob","Liam","Alexander","Benjamin","Max","Isaac","Daniel","Riley","Ryan","Xavier","Harry","Jayden","Nicholas","Harrison","Levi","Luke","Adam","Henry","Aiden","Dylan","Oscar","Michael","Jackson","Logan"];
},{"jsx-alone-core":"USgY"}],"45O1":[function(require,module,exports) {
;var e=require("../util"),n=require("jsx-alone-core");function r(e){return{people:t(e)}}function t(r){return n.array(r.peopleCount).map(function(n){return{name:e.names.firstName()+" "+e.names.firstName()+" "+e.names.lastName()+" "+e.names.lastName(),age:e.numbers.integer(0,100),friends:[]}}).map(function(t,u,a){return t.friends=n.array(e.numbers.integer(Math.trunc(r.friendsCount/2),r.friendsCount)).map(function(n){return a[e.numbers.integer(0,a.length-1)]}),t})}exports.MODEL_CONFIG={peopleCount:100,friendsCount:5},exports.buildModel=r;
},{"../util":"/5mC","jsx-alone-core":"USgY"}],"IAey":[function(require,module,exports) {
var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),t=this&&this.__assign||function(){return(t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)};;var n=require("jsx-alone-core");function r(r){var l=function(t){function l(){return null!==t&&t.apply(this,arguments)||this}return e(l,t),l.prototype.render=function(){var e=this;return r.createElement("div",null,r.createElement("h1",null,"Lots of people to print"),r.createElement(n.If,{c:"undefined"!=typeof window},function(){return r.createElement("div",null,r.createElement("p",null,"People count: ",r.createElement("input",{id:"peopleCount",value:e.props.peopleCount+"",type:"number"})),r.createElement("p",null,"Friends count: ",r.createElement("input",{id:"friendsCount",value:e.props.friendsCount+"",type:"number"})),r.createElement("button",{onClick:function(e){var t=document.querySelector("#peopleCount").valueAsNumber,n=document.querySelector("#friendsCount").valueAsNumber;window.renderAppLotsOfPeople({peopleCount:t,friendsCount:n})}},"Render!"),r.createElement("h4",null,"Timings"),r.createElement("ul",null,r.createElement("li",null,"onload: ",r.createElement("strong",{id:"timings_onload"})),r.createElement("li",null,"buildModel: ",r.createElement("strong",{id:"timings_buildModel"})),r.createElement("li",null,"JSXAlone.createElement: ",r.createElement("strong",{id:"timings_JSXAloneCreateElement"})),r.createElement("li",null,"JSXAlone.render: ",r.createElement("strong",{id:"timings_JSXAloneRender"}))))}),r.createElement(a,{people:this.props.people}))},l}(n.AbstractElementClass),o=function(e){return r.createElement("button",{"data-name":e.name,onClick:function(e){alert(("\n  No context here that's why we need to do the following: \n  Name: \""+e.currentTarget.getAttribute("data-name")+'"\n  ').trim())}},e.children)},u=function(e){return r.createElement("tr",{id:encodeURIComponent(e.name)},r.createElement("td",null,e.name),r.createElement("td",null,e.age),r.createElement("td",null,r.createElement("ul",null,e.friends.map(function(e){return r.createElement("li",null,r.createElement("a",{href:"#"+e.name},e.name))}))),r.createElement("td",null,r.createElement(o,{name:e.name},"Edit")))},a=function(e){return r.createElement("table",{className:"person"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Age"),r.createElement("th",null,"Friends"),r.createElement("th",null,"Actions"))),r.createElement("tbody",null,e.people.map(function(e){return r.createElement(u,t({},e))})))};return l}exports.getApp=r;
},{"jsx-alone-core":"USgY"}],"z8rF":[function(require,module,exports) {
var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var o,r=1,t=arguments.length;r<t;r++)for(var n in o=arguments[r])Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);return e}).apply(this,arguments)};;var o,r=require("./model"),t=require("./model"),n=require("jsx-alone-core"),l=require("./App");function i(a,d,p){void 0===d&&(d=t.MODEL_CONFIG),o=a,"undefined"!=typeof window&&(n.getGlobal().renderAppLotsOfPeople=function(e){return i(o,e,p)});var c=Date.now();console.time("buildModel");var s=r.buildModel(d),u=Date.now()-c;console.timeEnd("buildModel");var m=Date.now();console.time("JSXAlone.createElement");var v=l.getApp(p),f=p.createElement("div",{id:"jsx-alone-sample-project-code"},p.createElement(v,e({},s,d)),";"),b=Date.now()-m;return console.timeEnd("JSXAlone.createElement"),a(f,{buildModelT:u,JSXAloneCreateElementT:b}),f}exports.renderApp=i;
},{"./model":"45O1","jsx-alone-core":"USgY","./App":"IAey"}],"wC2p":[function(require,module,exports) {
function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])};var r=require("./lotsOfPeople/renderApp");exports.lotsOfPeople=r.renderApp,e(require("./util"));
},{"./lotsOfPeople/renderApp":"z8rF","./util":"/5mC"}],"MFEV":[function(require,module,exports) {
function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t=this&&this.__assign||function(){return(t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};;var n=require("./elementImpl"),r=!1;function o(e){if(r)throw e;console.error(e)}function i(r){var o=r.impl,i=r.textNodeImpl,l=r.onElementReady,s=r.onElementCreated;return function(r,u){void 0===u&&(u={});for(var a,c,f=[],p=2;p<arguments.length;p++)f[p-2]=arguments[p];u=u||{};var y="string"==typeof r;return y?a=new o(r):n.isElementClassConstructor(r)?(c=new r(t({},u,{children:f})),a=c.render()):a=r(t({},u,{children:f})),s&&s({elementLike:a,elementClassInstance:c,attrs:u}),u=y?u:{},Object.keys(u).forEach(function(t){var n=u[t],r=e(n);"string"===r||"number"===r?a.setAttribute(t,n):"function"===r?a.setAttribute(t,n):!1===n||(!0===n?a.setAttribute(t,t):"dangerouslySetInnerHTML"===t&&n?a.dangerouslySetInnerHTML(n.__html):a.setAttribute(t,n))}),y&&f.filter(function(e){return e}).forEach(function(e){n.isNode(e)?a.appendChild(e):Array.isArray(e)?e.forEach(function(e){n.isNode(e)?a.appendChild(e):a.appendChild(new i(e))}):a.appendChild(new i(e))}),l&&l({elementLike:a}),a}}exports.debug=o,exports.createCreateElement=i,exports.AbstractJSXAlone=null;
},{"./elementImpl":"3p56"}],"TXrL":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3];;var n=require(".");function r(e){var r=e.children();return console.log(r),r?n.AbstractJSXAlone.createElement(exports.Fragment,null,r):null}function t(e){var n=Array.isArray(e.children)?e.children[0]:e.children,r=e.c,t=e.p;return l(r)?n.apply(null,(t?[t]:[]).concat([r])):null}function l(e){return!!e}function o(){return"undefined"==typeof window&&"undefined"==typeof document?e:window}function u(e){o().JSXAlone=e}exports.Fragment=function(e){return n.AbstractJSXAlone.createElement("span",null,e.children)},exports.Js=r,exports.If=t,exports.getGlobal=o,exports.installJSXAloneAsGlobal=u;
},{".":"HpCL"}],"v3QE":[function(require,module,exports) {
;var e=require(".");function n(e){var n={};return Object.keys(e).forEach(function(e){n[e]=e}),{styles:e,classes:n}}exports.Style=function(n){function s(s){return n.renderConfig&&n.renderConfig.indent?e.indent(s):""}return JSXAlone.createElement("style",null,Object.keys(n.classes).map(function(e){return s(1)+"."+e+(n.classes[e]&&n.classes[e].selectorPostfix?n.classes[e].selectorPostfix:"")+" {"+Object.keys(n.classes[e]).filter(function(e){return"selectorPostfix"!==e}).map(function(t){return"\n"+s(2)+function(e){for(var n;n=/([A-Z])/.exec(e);)e=e.substring(0,n.index)+"-"+n[1].toLowerCase()+e.substring(n.index+1,e.length);return e}(t)+": "+n.classes[e][t]+";"}).join("")+"\n}"}).join("\n"))},exports.Styles=n;
},{".":"HpCL"}],"HpCL":[function(require,module,exports) {
function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}1,e(require("./elementImpl")),e(require("./elementClass")),e(require("./createElement"));var r=require("./elementImpl");exports.AbstractTextNodeLike=r.AbstractTextNodeLike,exports.AbstractElementLike=r.AbstractElementLike,e(require("./misc")),e(require("./util")),e(require("./style"));
},{"./elementImpl":"3p56","./elementClass":"+nOU","./createElement":"MFEV","./misc":"TXrL","./util":"8yB0","./style":"v3QE"}],"kPUO":[function(require,module,exports) {
1,exports.defaultRenderConfig={indentLevel:0,indentTabSize:2,indent:!0};
},{}],"232K":[function(require,module,exports) {
function e(e){for(var n=(e.indentLevel||0)*(e.indentTabSize||0),t=[],r=0;r<n;r++)t.push(" ");return t.join("")}1,exports.indent=e;
},{}],"Y5I1":[function(require,module,exports) {
var t=this&&this.__extends||function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t}).apply(this,arguments)};;var e=require("jsx-alone-core"),r=require("./config"),i=require("./util"),o=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return t(o,e),o.prototype.render=function(t){var e=this;void 0===t&&(t=r.defaultRenderConfig);var o=t.indent?"\n":"",u=this.innerHtml||""+o+i.indent(n({},t,{indentLevel:(t.indentLevel||0)+1}))+this.children.map(function(e){return""+e.render(n({},t,{indentLevel:(t.indentLevel||0)+1}))}).join("")+o+i.indent(t);return"<"+this.tag+Object.keys(this.attrs).map(function(t){return" "+s(t,e.attrs[t])}).join("")+">"+u+"</"+this.tag+">"},o.prototype.dangerouslySetInnerHTML=function(t){this.innerHtml=t},o}(e.AbstractElementLike);function s(t,n){return"style"===t?n=e.printStyleHtmlAttribute(n):"className"===t?t="class":"function"==typeof n&&(n="("+n.toString()+").apply(_this=this,arguments)"),t+'="'+(n=n.replace(/\"/gim,"&quot;"))+'"'}exports.ElementLikeImpl=o;var u=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return t(e,n),e.prototype.render=function(t){return""+this.content},e}(e.AbstractTextNodeLike);exports.TextNodeLikeImpl=u;var l=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return t(e,n),e}(e.ElementClass);exports.ElementClass=l;
},{"jsx-alone-core":"HpCL","./config":"kPUO","./util":"232K"}],"PHuq":[function(require,module,exports) {
;var e=require("jsx-alone-core"),r=require("./config"),t=require("./elementImpl"),n={impl:t.ElementLikeImpl,textNodeImpl:t.TextNodeLikeImpl},l={createElement:e.createCreateElement(n),render:function(e,t){return void 0===t&&(t=r.defaultRenderConfig),""+e.render(t)}};exports.JSXAlone=l;
},{"jsx-alone-core":"HpCL","./config":"kPUO","./elementImpl":"Y5I1"}],"idtX":[function(require,module,exports) {
function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}1,e(require("./createElement"));var r=require("./elementImpl");exports.ElementClass=r.ElementClass;
},{"./createElement":"PHuq","./elementImpl":"Y5I1"}],"Nzec":[function(require,module,exports) {
function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t=this&&this.__assign||function(){return(t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};;var n=require("./elementImpl"),r=!1;function o(e){if(r)throw e;console.error(e)}function i(r){var o=r.impl,i=r.textNodeImpl,l=r.onElementReady,s=r.onElementCreated;return function(r,u){void 0===u&&(u={});for(var a,c,f=[],p=2;p<arguments.length;p++)f[p-2]=arguments[p];u=u||{};var y="string"==typeof r;return y?a=new o(r):n.isElementClassConstructor(r)?(c=new r(t({},u,{children:f})),a=c.render()):a=r(t({},u,{children:f})),s&&s({elementLike:a,elementClassInstance:c,attrs:u}),u=y?u:{},Object.keys(u).forEach(function(t){var n=u[t],r=e(n);"string"===r||"number"===r?a.setAttribute(t,n):"function"===r?a.setAttribute(t,n):!1===n||(!0===n?a.setAttribute(t,t):"dangerouslySetInnerHTML"===t&&n?a.dangerouslySetInnerHTML(n.__html):a.setAttribute(t,n))}),y&&f.filter(function(e){return e}).forEach(function(e){n.isNode(e)?a.appendChild(e):Array.isArray(e)?e.forEach(function(e){n.isNode(e)?a.appendChild(e):a.appendChild(new i(e))}):a.appendChild(new i(e))}),l&&l({elementLike:a}),a}}exports.debug=o,exports.createCreateElement=i,exports.AbstractJSXAlone=null;
},{"./elementImpl":"3p56"}],"h+Y6":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3];;var n=require(".");function r(e){var r=e.children();return console.log(r),r?n.AbstractJSXAlone.createElement(exports.Fragment,null,r):null}function t(e){var n=Array.isArray(e.children)?e.children[0]:e.children,r=e.c,t=e.p;return l(r)?n.apply(null,(t?[t]:[]).concat([r])):null}function l(e){return!!e}function o(){return"undefined"==typeof window&&"undefined"==typeof document?e:window}function u(e){o().JSXAlone=e}exports.Fragment=function(e){return n.AbstractJSXAlone.createElement("span",null,e.children)},exports.Js=r,exports.If=t,exports.getGlobal=o,exports.installJSXAloneAsGlobal=u;
},{".":"6FnY"}],"lkGg":[function(require,module,exports) {
;var e=require(".");function n(e){var n={};return Object.keys(e).forEach(function(e){n[e]=e}),{styles:e,classes:n}}exports.Style=function(n){function s(s){return n.renderConfig&&n.renderConfig.indent?e.indent(s):""}return JSXAlone.createElement("style",null,Object.keys(n.classes).map(function(e){return s(1)+"."+e+(n.classes[e]&&n.classes[e].selectorPostfix?n.classes[e].selectorPostfix:"")+" {"+Object.keys(n.classes[e]).filter(function(e){return"selectorPostfix"!==e}).map(function(t){return"\n"+s(2)+function(e){for(var n;n=/([A-Z])/.exec(e);)e=e.substring(0,n.index)+"-"+n[1].toLowerCase()+e.substring(n.index+1,e.length);return e}(t)+": "+n.classes[e][t]+";"}).join("")+"\n}"}).join("\n"))},exports.Styles=n;
},{".":"6FnY"}],"6FnY":[function(require,module,exports) {
function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}1,e(require("./elementImpl")),e(require("./elementClass")),e(require("./createElement"));var r=require("./elementImpl");exports.AbstractTextNodeLike=r.AbstractTextNodeLike,exports.AbstractElementLike=r.AbstractElementLike,e(require("./misc")),e(require("./util")),e(require("./style"));
},{"./elementImpl":"3p56","./elementClass":"+nOU","./createElement":"Nzec","./misc":"h+Y6","./util":"8yB0","./style":"lkGg"}],"wdqJ":[function(require,module,exports) {
"use strict";function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}exports.__esModule=!0;var n=require("jsx-alone-sample-project-code"),t=require("jsx-alone-string"),o=require("jsx-alone-core"),i=function(n,i){var l=Date.now();console.time("onload"),window.onload=function(){console.timeEnd("onload");var e=Date.now()-l;document.getElementById("timings_onload").innerHTML=o.printMs(e),document.getElementById("timings_buildModel").innerHTML=o.printMs(i.buildModelT),document.getElementById("timings_JSXAloneCreateElement").innerHTML=o.printMs(i.JSXAloneCreateElementT),document.getElementById("timings_JSXAloneRender").innerHTML=o.printMs(m)};var r=Date.now();console.time("JSXAlone.render()");var d=t.JSXAlone.render(n,{indent:!1,indentTabSize:0,indentLevel:0});console.log(e(d)),console.timeEnd("JSXAlone.render()");var m=Date.now()-r,s=document.getElementById("jsx-alone-sample-project-code");s&&s.remove(),(s=document.createElement("dir")).setAttribute("id","jsx-alone-sample-project-code"),s.innerHTML=d,document.body.appendChild(s),document.getElementById("timings_onload").innerHTML="N/E",document.getElementById("timings_buildModel").innerHTML=o.printMs(i.buildModelT),document.getElementById("timings_JSXAloneCreateElement").innerHTML=o.printMs(i.JSXAloneCreateElementT),document.getElementById("timings_JSXAloneRender").innerHTML=o.printMs(m)};n.lotsOfPeople(i,void 0,t.JSXAlone);
},{"jsx-alone-sample-project-code":"wC2p","jsx-alone-string":"idtX","jsx-alone-core":"6FnY"}]},{},["wdqJ"], null)
//# sourceMappingURL=main.406cfb8c.map