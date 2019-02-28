(function () {function sb(e){return(sb="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b={};function A(e){for(var $ in e)b.hasOwnProperty($)||(b[$]=e[$])}var c={};function tb(e){return e.prototype&&e.prototype.render};var ub=tb;function vb(e){return ga(e)||K(e)}c.isJSXAloneComponent=ub;var wb=vb;function K(e){return e&&e.setAttribute}c.isNode=wb;var xb=K;function ga(e){return e&&e.content&&!K(e)}c.isElementLike=xb;var yb=ga;c.isTextNodeLike=yb;var zb=function(){return function(e){this.content=e}}(),Ab=zb;c.AbstractTextNodeLike=Ab;var Bb=function(){function e(e){this.tag=e,this.attrs={},this.children=[]}return e.prototype.setAttribute=function(e,t){this.attrs[e]=t},e.prototype.appendChild=function(e){this.children.push(e),K(e)&&(e.parentElement=this)},e}(),Cb=Bb;c.AbstractElementLike=Cb;var u={},Db=u&&u.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();;var ha=function(){function t(t){this.props=t}return t.prototype.childrenAsArray=function(){return Array.isArray(this.props.children)?this.props.children:[this.props.children]},t.prototype.childrenElementsAsArray=function(){return this.childrenAsArray().filter(function(t){return c.isElementLike(t)})},t.prototype.firstChildElement=function(){return this.childrenAsArray().find(function(t){return!0})},t}(),Eb=ha;u.ElementClass=Eb;var Fb=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Db(e,t),e}(ha),Gb=Fb;u.AbstractElementClass=Gb;var q={};function ia(e){return(ia="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var T=q&&q.__assign||function(){return(T=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var $ in r=arguments[t])Object.prototype.hasOwnProperty.call(r,$)&&(e[$]=r[$]);return e}).apply(this,arguments)};;var Hb=!1;function ja(e){if(Hb)throw e;console.error(e)}var Ib=ja;function Jb(e){var r=e.impl,t=e.textNodeImpl,n=e.onElementReady,$=e.onElementCreated;return function(e,o){void 0===o&&(o={});for(var a,i,l=[],p=2;p<arguments.length;p++)l[p-2]=arguments[p];return"string"==typeof e?a=new r(e):(c.isJSXAloneComponent(e)?(i=new e(T({},o,{children:l})),a=i.render()):a=void 0!==ia(e.prototype)?new e(T({},o,{children:l})):e(T({},o,{children:l})),o={}),$&&$({elementLike:a,elementClassInstance:i}),Object.keys(o||{}).forEach(function(e){var r=o[e],t=ia(r);"string"===t||"number"===t?a.setAttribute(e,r):"function"===t?a.setAttribute(e,r):!1===r||(!0===r?a.setAttribute(e,e):"dangerouslySetInnerHTML"===e&&r?a.dangerouslySetInnerHTML(r.__html):a.setAttribute(e,r))}),"string"==typeof e&&l.filter(function(e){return e}).forEach(function(r){c.isNode(r)?a.appendChild(r):Array.isArray(r)?r.forEach(function(r){"string"==typeof r?a.appendChild(new t(r)):c.isNode(r)?a.appendChild(r):ja("Child is not a node or string: "+r+" , tag: "+e)}):a.appendChild(new t(r))}),n&&n({elementLike:a}),a}}q.debug=Ib;var Kb=Jb;q.createCreateElement=Kb;var Lb=null;q.AbstractJSXAlone=Lb;1,A(c),A(u),A(q);var Mb=c.AbstractTextNodeLike;b.AbstractTextNodeLike=Mb;var Nb=c.AbstractElementLike;var B={};;var ka=function($){return b.AbstractJSXAlone.createElement("span",null,$.children)};function Ob($){var r=$.children();return console.log(r),r?b.AbstractJSXAlone.createElement(ka,null,r):null}B.Fragment=ka;var Pb=Ob;function Qb($){var r=Array.isArray($.children)?$.children[0]:$.children,e=$.c,R=$.p;return Sb(e)?r.apply(null,(R?[R]:[]).concat([e])):null}B.Js=Pb;var Rb=Qb;function Sb($){return!!$}B.If=Rb;var d={},Tb=d&&d.__assign||function(){return(Tb=Object.assign||function(r){for(var $,t=1,e=arguments.length;t<e;t++)for(var n in $=arguments[t])Object.prototype.hasOwnProperty.call($,n)&&(r[n]=$[n]);return r}).apply(this,arguments)};function Ub(r,$){if(void 0===$&&($="Throwing on undefined value"),!r)throw new Error($);return r};var Vb=Ub;function la(r,$){for(var t=[],e=0;e<r;e++)t.push(void 0===$?e:$);return t}d.checkThrow=Vb;var Wb=la;function ma(r,$){return la(r,$).join("")}d.array=Wb;var Xb=ma;function Yb(r,$){return void 0===r&&(r=1),void 0===$&&($=2),ma(r*$," ")}d.repeat=Xb;var Zb=Yb;function $b(r,$,t){return r.split($,t).join($).length}d.indent=Zb;var _b=$b;function ac(r,$){return void 0===$&&($=" "),r.replace(/\s+/gm,$).trim()}d.getPosition=_b;var bc=ac;function na(r,$){return Math.floor(Math.random()*$)+r}d.removeWhites=bc;var cc=na;function dc(r){return r[na(0,r.length)]}d.randomIntBetween=cc;var ec=dc;function fc(r,$){void 0===$&&($={minutes:!1,seconds:!0,ms:!0});var t=($=Tb({minutes:!1,seconds:!0,ms:!0},$)).seconds&&Math.floor(r/1e3),e=$.minutes&&t&&Math.floor(t/60),n=$.ms&&Math.floor(r%1e3||r);return(e?e+" minutes ":"")+(t?t+" seconds ":"")+(n?n+" ms ":"")}d.randomItem=ec;var gc=fc;function hc(r){return""+Object.keys(r).map(function($){return $+": "+r[$]}).join("; ")}d.printMs=gc;var ic=hc;d.printStyleHtmlAttribute=ic;b.AbstractElementLike=Nb,A(B),A(d);var i={};;var jc={firstName:function(){return b.randomItem(oa)},lastName:function(){return b.randomItem(oa)}};i.names=jc;var kc={integer:function(e,a){return b.randomIntBetween(e,a)}};i.numbers=kc;var oa=["William","Jack","Oliver","Joshua","Thomas","Lachlan","Cooper","Noah","Ethan","Lucas","James","Samuel","Jacob","Liam","Alexander","Benjamin","Max","Isaac","Daniel","Riley","Ryan","Xavier","Harry","Jayden","Nicholas","Harrison","Levi","Luke","Adam","Henry","Aiden","Dylan","Oscar","Michael","Jackson","Logan"];var C={};;var lc={peopleCount:100,friendsCount:5};function mc(e){return{people:oc(e)}}C.MODEL_CONFIG=lc;var nc=mc;function oc(e){return b.array(e.peopleCount).map(function(e){return{name:i.names.firstName()+" "+i.names.firstName()+" "+i.names.lastName()+" "+i.names.lastName(),age:i.numbers.integer(0,100),friends:[]}}).map(function($,r,a){return $.friends=b.array(i.numbers.integer(Math.trunc(e.friendsCount/2),e.friendsCount)).map(function(e){return a[i.numbers.integer(0,a.length-1)]}),$})}C.buildModel=nc;var D={};function pa(e){for(var $ in e)D.hasOwnProperty($)||(D[$]=e[$])}var j={};function E(e){for(var $ in e)j.hasOwnProperty($)||(j[$]=e[$])}var m={};function pc(e){return e.prototype&&e.prototype.render};var qa=pc;function qc(e){return sa(e)||L(e)}m.isJSXAloneComponent=qa;var U=qc;function L(e){return e&&e.setAttribute}m.isNode=U;var ra=L;function sa(e){return e&&e.content&&!L(e)}m.isElementLike=ra;var rc=sa;m.isTextNodeLike=rc;var sc=function(){return function(e){this.content=e}}(),ta=sc;m.AbstractTextNodeLike=ta;var tc=function(){function e(e){this.tag=e,this.attrs={},this.children=[]}return e.prototype.setAttribute=function(e,t){this.attrs[e]=t},e.prototype.appendChild=function(e){this.children.push(e),L(e)&&(e.parentElement=this)},e}(),ua=tc;m.AbstractElementLike=ua;var v={},uc=v&&v.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();;var va=function(){function t(t){this.props=t}return t.prototype.childrenAsArray=function(){return Array.isArray(this.props.children)?this.props.children:[this.props.children]},t.prototype.childrenElementsAsArray=function(){return this.childrenAsArray().filter(function(t){return ra(t)})},t.prototype.firstChildElement=function(){return this.childrenAsArray().find(function(t){return!0})},t}(),vc=va;v.ElementClass=vc;var wc=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return uc(e,t),e}(va),xc=wc;v.AbstractElementClass=xc;var r={};function wa(e){return(wa="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var V=r&&r.__assign||function(){return(V=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var $ in t=arguments[r])Object.prototype.hasOwnProperty.call(t,$)&&(e[$]=t[$]);return e}).apply(this,arguments)};;var yc=!1;function xa(e){if(yc)throw e;console.error(e)}var zc=xa;function Ac(e){var t=e.impl,r=e.textNodeImpl,n=e.onElementReady,$=e.onElementCreated;return function(e,o){void 0===o&&(o={});for(var a,i,l=[],p=2;p<arguments.length;p++)l[p-2]=arguments[p];return"string"==typeof e?a=new t(e):(qa(e)?(i=new e(V({},o,{children:l})),a=i.render()):a=void 0!==wa(e.prototype)?new e(V({},o,{children:l})):e(V({},o,{children:l})),o={}),$&&$({elementLike:a,elementClassInstance:i}),Object.keys(o||{}).forEach(function(e){var t=o[e],r=wa(t);"string"===r||"number"===r?a.setAttribute(e,t):"function"===r?a.setAttribute(e,t):!1===t||(!0===t?a.setAttribute(e,e):"dangerouslySetInnerHTML"===e&&t?a.dangerouslySetInnerHTML(t.__html):a.setAttribute(e,t))}),"string"==typeof e&&l.filter(function(e){return e}).forEach(function(t){U(t)?a.appendChild(t):Array.isArray(t)?t.forEach(function(t){"string"==typeof t?a.appendChild(new r(t)):U(t)?a.appendChild(t):xa("Child is not a node or string: "+t+" , tag: "+e)}):a.appendChild(new r(t))}),n&&n({elementLike:a}),a}}r.debug=zc;var Bc=Ac;r.createCreateElement=Bc;var Cc=null;r.AbstractJSXAlone=Cc;1,E(m),E(v),E(r);var ya=ta;j.AbstractTextNodeLike=ya;var za=ua;var F={};;var Aa=function($){return j.AbstractJSXAlone.createElement("span",null,$.children)};function Dc($){var r=$.children();return console.log(r),r?j.AbstractJSXAlone.createElement(Aa,null,r):null}F.Fragment=Aa;var Ec=Dc;function Fc($){var r=Array.isArray($.children)?$.children[0]:$.children,e=$.c,t=$.p;return Hc(e)?r.apply(null,(t?[t]:[]).concat([e])):null}F.Js=Ec;var Gc=Fc;function Hc($){return!!$}F.If=Gc;var e={},Ic=e&&e.__assign||function(){return(Ic=Object.assign||function(r){for(var $,t=1,e=arguments.length;t<e;t++)for(var n in $=arguments[t])Object.prototype.hasOwnProperty.call($,n)&&(r[n]=$[n]);return r}).apply(this,arguments)};function Jc(r,$){if(void 0===$&&($="Throwing on undefined value"),!r)throw new Error($);return r};var Kc=Jc;function Ba(r,$){for(var t=[],e=0;e<r;e++)t.push(void 0===$?e:$);return t}e.checkThrow=Kc;var Lc=Ba;function Ca(r,$){return Ba(r,$).join("")}e.array=Lc;var Mc=Ca;function Nc(r,$){return void 0===r&&(r=1),void 0===$&&($=2),Ca(r*$," ")}e.repeat=Mc;var Oc=Nc;function Pc(r,$,t){return r.split($,t).join($).length}e.indent=Oc;var Qc=Pc;function Rc(r,$){return void 0===$&&($=" "),r.replace(/\s+/gm,$).trim()}e.getPosition=Qc;var Sc=Rc;function Da(r,$){return Math.floor(Math.random()*$)+r}e.removeWhites=Sc;var Tc=Da;function Uc(r){return r[Da(0,r.length)]}e.randomIntBetween=Tc;var Vc=Uc;function Wc(r,$){void 0===$&&($={minutes:!1,seconds:!0,ms:!0});var t=($=Ic({minutes:!1,seconds:!0,ms:!0},$)).seconds&&Math.floor(r/1e3),e=$.minutes&&t&&Math.floor(t/60),n=$.ms&&Math.floor(r%1e3||r);return(e?e+" minutes ":"")+(t?t+" seconds ":"")+(n?n+" ms ":"")}e.randomItem=Vc;var Xc=Wc;function Yc(r){return""+Object.keys(r).map(function($){return $+": "+r[$]}).join("; ")}e.printMs=Xc;var Zc=Yc;e.printStyleHtmlAttribute=Zc;j.AbstractElementLike=za,E(F),E(e);var Ea={};;var W={indentLevel:0,indentTabSize:2,indent:!0};Ea.defaultRenderConfig=W;var Fa={};function $c(e){for(var n=(e.indentLevel||0)*(e.indentTabSize||0),$=[],t=0;t<n;t++)$.push(" ");return $.join("")};var X=$c;Fa.indent=X;var k={},Y=k&&k.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),Ga=k&&k.__assign||function(){return(Ga=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};;var _c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Y(t,e),t.prototype.render=function(e){var t=this;void 0===e&&(e=W);var r=e.indent?"\n":"",n=this.innerHtml||""+r+X(Ga({},e,{indentLevel:(e.indentLevel||0)+1}))+this.children.map(function(t){return""+t.render(Ga({},e,{indentLevel:(e.indentLevel||0)+1}))}).join("")+r+X(e);return"<"+this.tag+Object.keys(this.attrs).map(function(e){return" "+bd(e,t.attrs[e])}).join("")+">"+n+"</"+this.tag+">"},t.prototype.dangerouslySetInnerHTML=function(e){this.innerHtml=e},t}(za),ad=_c;function bd(e,t){return"style"===e?t=j.printStyleHtmlAttribute(t):"className"===e?e="class":"function"==typeof t&&(t="("+t.toString()+").apply(_this=this,arguments)"),e+"=\""+(t=t.replace(/\"/gim,"&quot;"))+"\""}k.ElementLikeImpl=ad;var cd=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Y(t,e),t.prototype.render=function(e){return""+this.content},t}(ya),dd=cd;k.TextNodeLikeImpl=dd;var ed=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Y(t,e),t}(j.ElementClass),fd=ed;k.ElementClass=fd;var Z={};;var gd={impl:k.ElementLikeImpl,textNodeImpl:k.TextNodeLikeImpl},hd={createElement:j.createCreateElement(gd),render:function(e,$){return void 0===$&&($=W),""+e.render($)}},Ha=hd;Z.JSXAlone=Ha;var M={};;var id=function(e){function r(r){return e.renderConfig&&e.renderConfig.indent?j.indent(r):""}return Ha.createElement("style",null,Object.keys(e.classes).map(function(t){return r(1)+"."+t+(e.classes[t]&&e.classes[t].selectorPostfix?e.classes[t].selectorPostfix:"")+" {"+Object.keys(e.classes[t]).filter(function(e){return"selectorPostfix"!==e}).map(function(n){return"\n"+r(2)+function(e){for(var r;r=/([A-Z])/.exec(e);)e=e.substring(0,r.index)+"-"+r[1].toLowerCase()+e.substring(r.index+1,e.length);return e}(n)+": "+e.classes[t][n]+";"}).join("")+"\n}"}).join("\n"))};function jd(e){var r={};return Object.keys(e).forEach(function(e){r[e]=e}),{styles:e,classes:r}}M.Style=id;var kd=jd;M.Styles=kd;1,pa(Z),pa(M);var ld=k.ElementClass;D.ElementClass=ld;var Ia={};;function md(){return D.JSXAlone}var $=md;Ia.getJSXAlone=$;var w={},nd=w&&w.__extends||function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),od=w&&w.__assign||function(){return(od=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var $ in n=arguments[t])Object.prototype.hasOwnProperty.call(n,$)&&(e[$]=n[$]);return e}).apply(this,arguments)};;var a=$(),pd=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return nd(n,e),n.prototype.render=function(){var e=this;return a.createElement("div",null,a.createElement("h1",null,"Lots of people to print"),a.createElement(b.If,{c:"undefined"!=typeof window},function(){return a.createElement("div",null,a.createElement("p",null,"People count: ",a.createElement("input",{id:"peopleCount",value:e.props.peopleCount+"",type:"number"})),a.createElement("p",null,"Friends count: ",a.createElement("input",{id:"friendsCount",value:e.props.friendsCount+"",type:"number"})),a.createElement("button",{onClick:function(e){var n=document.querySelector("#peopleCount").valueAsNumber,t=document.querySelector("#friendsCount").valueAsNumber;window.renderAppLotsOfPeople({peopleCount:n,friendsCount:t})}},"Render!"),a.createElement("h4",null,"Timings"),a.createElement("ul",null,a.createElement("li",null,"onload: ",a.createElement("strong",{id:"timings_onload"})),a.createElement("li",null,"buildModel: ",a.createElement("strong",{id:"timings_buildModel"})),a.createElement("li",null,"JSXAlone.createElement: ",a.createElement("strong",{id:"timings_JSXAloneCreateElement"})),a.createElement("li",null,"JSXAlone.render: ",a.createElement("strong",{id:"timings_JSXAloneRender"}))))}),a.createElement(sd,{people:this.props.people}))},n}(b.AbstractElementClass),Ja=pd;w.App=Ja;var qd=function(e){return a.createElement("button",{"data-name":e.name,onClick:function(e){alert(("\nNo context here that's why we need to do the following: \nName: \""+e.currentTarget.getAttribute("data-name")+"\"\n").trim())}},e.children)},rd=function(e){return a.createElement("tr",{id:encodeURIComponent(e.name)},a.createElement("td",null,e.name),a.createElement("td",null,e.age),a.createElement("td",null,a.createElement("ul",null,e.friends.map(function(e){return a.createElement("li",null,a.createElement("a",{href:"#"+e.name},e.name))}))),a.createElement("td",null,a.createElement(qd,{name:e.name},"Edit")))},sd=function(e){return a.createElement("table",{className:"person"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Age"),a.createElement("th",null,"Friends"),a.createElement("th",null,"Actions"))),a.createElement("tbody",null,e.people.map(function(e){return a.createElement(rd,od({},e))})))};var N={},td=N&&N.__assign||function(){return(td=Object.assign||function(r){for(var e,$=1,n=arguments.length;$<n;$++)for(var o in e=arguments[$])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}).apply(this,arguments)};;var Ka=$();function La(r,e){void 0===e&&(e=C.MODEL_CONFIG),ud=r;var $=Date.now();console.time("buildModel");var n=C.buildModel(e),o=Date.now()-$;console.timeEnd("buildModel");var a=Date.now();console.time("JSXAlone.createElement");var l=Ka.createElement("div",{id:"jsx-alone-sample-project-code"},Ka.createElement(Ja,td({},n,e)),";"),p=Date.now()-a;return console.timeEnd("JSXAlone.createElement"),r(l,{buildModelT:o,JSXAloneCreateElementT:p}),l}var ud,Ma=La;N.renderApp=Ma,"undefined"!=typeof window&&(window.renderAppLotsOfPeople=function(r){return La(ud,r)});var O={};function vd(e){for(var p in e)O.hasOwnProperty(p)||(O[p]=e[p])};var Na=Ma;O.lotsOfPeople=Na,vd(i);var G={};function Oa(e){for(var t in e)G.hasOwnProperty(t)||(G[t]=e[t])}var l={};function H(e){for(var $ in e)l.hasOwnProperty($)||(l[$]=e[$])}var n={};function wd(e){return e.prototype&&e.prototype.render};var Pa=wd;function xd(e){return Ra(e)||P(e)}n.isJSXAloneComponent=Pa;var _=xd;function P(e){return e&&e.setAttribute}n.isNode=_;var Qa=P;function Ra(e){return e&&e.content&&!P(e)}n.isElementLike=Qa;var yd=Ra;n.isTextNodeLike=yd;var zd=function(){return function(e){this.content=e}}(),Sa=zd;n.AbstractTextNodeLike=Sa;var Ad=function(){function e(e){this.tag=e,this.attrs={},this.children=[]}return e.prototype.setAttribute=function(e,t){this.attrs[e]=t},e.prototype.appendChild=function(e){this.children.push(e),P(e)&&(e.parentElement=this)},e}(),Ta=Ad;n.AbstractElementLike=Ta;var x={},Bd=x&&x.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();;var Ua=function(){function t(t){this.props=t}return t.prototype.childrenAsArray=function(){return Array.isArray(this.props.children)?this.props.children:[this.props.children]},t.prototype.childrenElementsAsArray=function(){return this.childrenAsArray().filter(function(t){return Qa(t)})},t.prototype.firstChildElement=function(){return this.childrenAsArray().find(function(t){return!0})},t}(),Cd=Ua;x.ElementClass=Cd;var Dd=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Bd(e,t),e}(Ua),Ed=Dd;x.AbstractElementClass=Ed;var s={};function Va(e){return(Va="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var aa=s&&s.__assign||function(){return(aa=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var $ in t=arguments[r])Object.prototype.hasOwnProperty.call(t,$)&&(e[$]=t[$]);return e}).apply(this,arguments)};;var Fd=!1;function Wa(e){if(Fd)throw e;console.error(e)}var Gd=Wa;function Hd(e){var t=e.impl,r=e.textNodeImpl,n=e.onElementReady,$=e.onElementCreated;return function(e,o){void 0===o&&(o={});for(var a,i,l=[],p=2;p<arguments.length;p++)l[p-2]=arguments[p];return"string"==typeof e?a=new t(e):(Pa(e)?(i=new e(aa({},o,{children:l})),a=i.render()):a=void 0!==Va(e.prototype)?new e(aa({},o,{children:l})):e(aa({},o,{children:l})),o={}),$&&$({elementLike:a,elementClassInstance:i}),Object.keys(o||{}).forEach(function(e){var t=o[e],r=Va(t);"string"===r||"number"===r?a.setAttribute(e,t):"function"===r?a.setAttribute(e,t):!1===t||(!0===t?a.setAttribute(e,e):"dangerouslySetInnerHTML"===e&&t?a.dangerouslySetInnerHTML(t.__html):a.setAttribute(e,t))}),"string"==typeof e&&l.filter(function(e){return e}).forEach(function(t){_(t)?a.appendChild(t):Array.isArray(t)?t.forEach(function(t){"string"==typeof t?a.appendChild(new r(t)):_(t)?a.appendChild(t):Wa("Child is not a node or string: "+t+" , tag: "+e)}):a.appendChild(new r(t))}),n&&n({elementLike:a}),a}}s.debug=Gd;var Id=Hd;s.createCreateElement=Id;var Jd=null;s.AbstractJSXAlone=Jd;1,H(n),H(x),H(s);var Xa=Sa;l.AbstractTextNodeLike=Xa;var Ya=Ta;var I={};;var Za=function(r){return l.AbstractJSXAlone.createElement("span",null,r.children)};function Kd(r){var $=r.children();return console.log($),$?l.AbstractJSXAlone.createElement(Za,null,$):null}I.Fragment=Za;var Ld=Kd;function Md(r){var $=Array.isArray(r.children)?r.children[0]:r.children,e=r.c,t=r.p;return Od(e)?$.apply(null,(t?[t]:[]).concat([e])):null}I.Js=Ld;var Nd=Md;function Od(r){return!!r}I.If=Nd;var f={},Pd=f&&f.__assign||function(){return(Pd=Object.assign||function(r){for(var $,t=1,e=arguments.length;t<e;t++)for(var n in $=arguments[t])Object.prototype.hasOwnProperty.call($,n)&&(r[n]=$[n]);return r}).apply(this,arguments)};function Qd(r,$){if(void 0===$&&($="Throwing on undefined value"),!r)throw new Error($);return r};var Rd=Qd;function $a(r,$){for(var t=[],e=0;e<r;e++)t.push(void 0===$?e:$);return t}f.checkThrow=Rd;var Sd=$a;function _a(r,$){return $a(r,$).join("")}f.array=Sd;var Td=_a;function Ud(r,$){return void 0===r&&(r=1),void 0===$&&($=2),_a(r*$," ")}f.repeat=Td;var Vd=Ud;function Wd(r,$,t){return r.split($,t).join($).length}f.indent=Vd;var Xd=Wd;function Yd(r,$){return void 0===$&&($=" "),r.replace(/\s+/gm,$).trim()}f.getPosition=Xd;var Zd=Yd;function ab(r,$){return Math.floor(Math.random()*$)+r}f.removeWhites=Zd;var $d=ab;function _d(r){return r[ab(0,r.length)]}f.randomIntBetween=$d;var ae=_d;function be(r,$){void 0===$&&($={minutes:!1,seconds:!0,ms:!0});var t=($=Pd({minutes:!1,seconds:!0,ms:!0},$)).seconds&&Math.floor(r/1e3),e=$.minutes&&t&&Math.floor(t/60),n=$.ms&&Math.floor(r%1e3||r);return(e?e+" minutes ":"")+(t?t+" seconds ":"")+(n?n+" ms ":"")}f.randomItem=ae;var ce=be;function de(r){return""+Object.keys(r).map(function($){return $+": "+r[$]}).join("; ")}f.printMs=ce;var ee=de;f.printStyleHtmlAttribute=ee;l.AbstractElementLike=Ya,H(I),H(f);var bb={};;var ba={indentLevel:0,indentTabSize:2,indent:!0};bb.defaultRenderConfig=ba;var Q={};function fe(e){for(var n=(e.indentLevel||0)*(e.indentTabSize||0),$=[],t=0;t<n;t++)$.push(" ");return $.join("")};var ge=fe;Q.indent=ge;var o={},ca=o&&o.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),cb=o&&o.__assign||function(){return(cb=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var $ in t=arguments[r])Object.prototype.hasOwnProperty.call(t,$)&&(e[$]=t[$]);return e}).apply(this,arguments)};;var he=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return ca(t,e),t.prototype.render=function(e){var t=this;void 0===e&&(e=ba);var r=e.indent?"\n":"",n=this.innerHtml||""+r+Q.indent(cb({},e,{indentLevel:(e.indentLevel||0)+1}))+this.children.map(function(t){return""+t.render(cb({},e,{indentLevel:(e.indentLevel||0)+1}))}).join("")+r+Q.indent(e);return"<"+this.tag+Object.keys(this.attrs).map(function(e){return" "+ie(e,t.attrs[e])}).join("")+">"+n+"</"+this.tag+">"},t.prototype.dangerouslySetInnerHTML=function(e){this.innerHtml=e},t}(Ya),db=he;function ie(e,t){return"style"===e?t=l.printStyleHtmlAttribute(t):"className"===e?e="class":"function"==typeof t&&(t="("+t.toString()+").apply(_this=this,arguments)"),e+"=\""+(t=t.replace(/\"/gim,"&quot;"))+"\""}o.ElementLikeImpl=db;var je=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return ca(t,e),t.prototype.render=function(e){return""+this.content},t}(Xa),eb=je;o.TextNodeLikeImpl=eb;var ke=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return ca(t,e),t}(l.ElementClass),fb=ke;o.ElementClass=fb;var da={};;var le={impl:db,textNodeImpl:eb},me={createElement:l.createCreateElement(le),render:function(e,$){return void 0===$&&($=ba),""+e.render($)}},gb=me;da.JSXAlone=gb;var R={};;var ne=function(e){function r(r){return e.renderConfig&&e.renderConfig.indent?l.indent(r):""}return gb.createElement("style",null,Object.keys(e.classes).map(function(t){return r(1)+"."+t+(e.classes[t]&&e.classes[t].selectorPostfix?e.classes[t].selectorPostfix:"")+" {"+Object.keys(e.classes[t]).filter(function(e){return"selectorPostfix"!==e}).map(function(o){return"\n"+r(2)+function(e){for(var r;r=/([A-Z])/.exec(e);)e=e.substring(0,r.index)+"-"+r[1].toLowerCase()+e.substring(r.index+1,e.length);return e}(o)+": "+e.classes[t][o]+";"}).join("")+"\n}"}).join("\n"))};function oe(e){var r={};return Object.keys(e).forEach(function(e){r[e]=e}),{styles:e,classes:r}}R.Style=ne;var pe=oe;R.Styles=pe;1,Oa(da),Oa(R);var qe=fb;G.ElementClass=qe;var g={};function J(e){for(var $ in e)g.hasOwnProperty($)||(g[$]=e[$])}var p={};function re(t){return t.prototype&&t.prototype.render};var hb=re;function se(t){return jb(t)||S(t)}p.isJSXAloneComponent=hb;var ea=se;function S(t){return t&&t.setAttribute}p.isNode=ea;var ib=S;function jb(t){return t&&t.content&&!S(t)}p.isElementLike=ib;var te=jb;p.isTextNodeLike=te;var ue=function(){return function(t){this.content=t}}(),kb=ue;p.AbstractTextNodeLike=kb;var ve=function(){function t(t){this.tag=t,this.attrs={},this.children=[]}return t.prototype.setAttribute=function(t,e){this.attrs[t]=e},t.prototype.appendChild=function(t){this.children.push(t),S(t)&&(t.parentElement=this)},t}(),lb=ve;p.AbstractElementLike=lb;var y={},we=y&&y.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();;var mb=function(){function t(t){this.props=t}return t.prototype.childrenAsArray=function(){return Array.isArray(this.props.children)?this.props.children:[this.props.children]},t.prototype.childrenElementsAsArray=function(){return this.childrenAsArray().filter(function(t){return ib(t)})},t.prototype.firstChildElement=function(){return this.childrenAsArray().find(function(t){return!0})},t}(),xe=mb;y.ElementClass=xe;var ye=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return we(e,t),e}(mb),ze=ye;y.AbstractElementClass=ze;var t={};function nb(e){return(nb="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var fa=t&&t.__assign||function(){return(fa=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var $ in t=arguments[r])Object.prototype.hasOwnProperty.call(t,$)&&(e[$]=t[$]);return e}).apply(this,arguments)};;var Ae=!1;function ob(e){if(Ae)throw e;console.error(e)}var Be=ob;function Ce(e){var t=e.impl,r=e.textNodeImpl,n=e.onElementReady,$=e.onElementCreated;return function(e,o){void 0===o&&(o={});for(var c,a,i=[],l=2;l<arguments.length;l++)i[l-2]=arguments[l];return"string"==typeof e?c=new t(e):(hb(e)?(a=new e(fa({},o,{children:i})),c=a.render()):c=void 0!==nb(e.prototype)?new e(fa({},o,{children:i})):e(fa({},o,{children:i})),o={}),$&&$({elementLike:c,elementClassInstance:a}),Object.keys(o||{}).forEach(function(e){var t=o[e],r=nb(t);"string"===r||"number"===r?c.setAttribute(e,t):"function"===r?c.setAttribute(e,t):!1===t||(!0===t?c.setAttribute(e,e):"dangerouslySetInnerHTML"===e&&t?c.dangerouslySetInnerHTML(t.__html):c.setAttribute(e,t))}),"string"==typeof e&&i.filter(function(e){return e}).forEach(function(t){ea(t)?c.appendChild(t):Array.isArray(t)?t.forEach(function(t){"string"==typeof t?c.appendChild(new r(t)):ea(t)?c.appendChild(t):ob("Child is not a node or string: "+t+" , tag: "+e)}):c.appendChild(new r(t))}),n&&n({elementLike:c}),c}}t.debug=Be;var De=Ce;t.createCreateElement=De;var Ee=null;t.AbstractJSXAlone=Ee;1,J(p),J(y),J(t);var Fe=kb;g.AbstractTextNodeLike=Fe;var Ge=lb;var z={};;var He=function($){return g.AbstractJSXAlone.createElement("span",null,$.children)};function Ie($){var r=$.children();return console.log(r),r?g.AbstractJSXAlone.createElement(z.Fragment,null,r):null}z.Fragment=He;var Je=Ie;function Ke($){var r=Array.isArray($.children)?$.children[0]:$.children,e=$.c,t=$.p;return Me(e)?r.apply(null,(t?[t]:[]).concat([e])):null}z.Js=Je;var Le=Ke;function Me($){return!!$}z.If=Le;var h={},Ne=h&&h.__assign||function(){return(Ne=Object.assign||function(r){for(var $,t=1,e=arguments.length;t<e;t++)for(var n in $=arguments[t])Object.prototype.hasOwnProperty.call($,n)&&(r[n]=$[n]);return r}).apply(this,arguments)};function Oe(r,$){if(void 0===$&&($="Throwing on undefined value"),!r)throw new Error($);return r};var Pe=Oe;function pb(r,$){for(var t=[],e=0;e<r;e++)t.push(void 0===$?e:$);return t}h.checkThrow=Pe;var Qe=pb;function qb(r,$){return pb(r,$).join("")}h.array=Qe;var Re=qb;function Se(r,$){return void 0===r&&(r=1),void 0===$&&($=2),qb(r*$," ")}h.repeat=Re;var Te=Se;function Ue(r,$,t){return r.split($,t).join($).length}h.indent=Te;var Ve=Ue;function We(r,$){return void 0===$&&($=" "),r.replace(/\s+/gm,$).trim()}h.getPosition=Ve;var Xe=We;function rb(r,$){return Math.floor(Math.random()*$)+r}h.removeWhites=Xe;var Ye=rb;function Ze(r){return r[rb(0,r.length)]}h.randomIntBetween=Ye;var $e=Ze;function _e(r,$){void 0===$&&($={minutes:!1,seconds:!0,ms:!0});var t=($=Ne({minutes:!1,seconds:!0,ms:!0},$)).seconds&&Math.floor(r/1e3),e=$.minutes&&t&&Math.floor(t/60),n=$.ms&&Math.floor(r%1e3||r);return(e?e+" minutes ":"")+(t?t+" seconds ":"")+(n?n+" ms ":"")}h.randomItem=$e;var af=_e;function bf(r){return""+Object.keys(r).map(function($){return $+": "+r[$]}).join("; ")}h.printMs=af;var cf=bf;h.printStyleHtmlAttribute=cf;g.AbstractElementLike=Ge,J(z),J(h);var df=function(e,n){var t=Date.now();console.time("onload"),window.onload=function(){console.timeEnd("onload");var e=Date.now()-t;document.getElementById("timings_onload").innerHTML=g.printMs(e),document.getElementById("timings_buildModel").innerHTML=g.printMs(n.buildModelT),document.getElementById("timings_JSXAloneCreateElement").innerHTML=g.printMs(n.JSXAloneCreateElementT),document.getElementById("timings_JSXAloneRender").innerHTML=g.printMs(d)};var o=Date.now();console.time("JSXAlone.render()");var r=G.JSXAlone.render(e,{indent:!1,indentTabSize:0,indentLevel:0});console.log(sb(r)),console.timeEnd("JSXAlone.render()");var d=Date.now()-o,i=document.getElementById("jsx-alone-sample-project-code");i&&i.remove(),(i=document.createElement("dir")).setAttribute("id","jsx-alone-sample-project-code"),i.innerHTML=r,document.body.appendChild(i),document.getElementById("timings_onload").innerHTML="N/E",document.getElementById("timings_buildModel").innerHTML=g.printMs(n.buildModelT),document.getElementById("timings_JSXAloneCreateElement").innerHTML=g.printMs(n.JSXAloneCreateElementT),document.getElementById("timings_JSXAloneRender").innerHTML=g.printMs(d)};Na(df);})();