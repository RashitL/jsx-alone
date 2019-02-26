// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"8yB0":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

function checkThrow(r, msg) {
  if (msg === void 0) {
    msg = 'Throwing on undefined value';
  }

  if (!r) {
    throw new Error(msg);
  }

  return r;
}

exports.checkThrow = checkThrow; // export function tryTo<F extends (...args: any[]) => any>(f: F): ReturnType<F> | undefined {
//   try {
//     return f()
//   } catch (error) {
//   }
// }

function array(n, sample) {
  var a = [];

  for (var i = 0; i < n; i++) {
    a.push(typeof sample === 'undefined' ? i : sample);
  }

  return a;
}

exports.array = array;

function repeat(n, s) {
  return array(n, s).join('');
}

exports.repeat = repeat;

function indent(i, tabSize) {
  if (i === void 0) {
    i = 1;
  }

  if (tabSize === void 0) {
    tabSize = 2;
  }

  return repeat(i * tabSize, ' ');
}

exports.indent = indent;

function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}

exports.getPosition = getPosition;

function removeWhites(s, replaceWith) {
  if (replaceWith === void 0) {
    replaceWith = ' ';
  }

  return s.replace(/\s+/gm, replaceWith).trim();
}

exports.removeWhites = removeWhites;

function randomIntBetween(a, b) {
  return Math.floor(Math.random() * b) + a;
}

exports.randomIntBetween = randomIntBetween;

function randomItem(array) {
  return array[randomIntBetween(0, array.length)];
}

exports.randomItem = randomItem;

function printMs(ms, config) {
  if (config === void 0) {
    config = {
      minutes: false,
      seconds: true,
      ms: true
    };
  }

  config = __assign({
    minutes: false,
    seconds: true,
    ms: true
  }, config);
  var seconds = config.seconds && Math.floor(ms / 1000);
  var minutes = config.minutes && seconds && Math.floor(seconds / 60);
  var milliseconds = config.ms && Math.floor(ms % 1000 || ms);
  return "" + (minutes ? minutes + " minutes " : '') + (seconds ? seconds + " seconds " : '') + (milliseconds ? milliseconds + " ms " : '');
}

exports.printMs = printMs;
},{}],"3p56":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var util_1 = require("./util");

function isJSXAloneComponent(c) {
  return c.prototype && c.prototype.render;
}

exports.isJSXAloneComponent = isJSXAloneComponent;

function isNode(n) {
  return isTextNodeLike(n) || isElementLike(n);
}

exports.isNode = isNode;

function isElementLike(n) {
  return n && n.setAttribute;
}

exports.isElementLike = isElementLike;

function isTextNodeLike(n) {
  return n && n.content && !isElementLike(n);
}

exports.isTextNodeLike = isTextNodeLike;

var AbstractTextNodeLike =
/** @class */
function () {
  function AbstractTextNodeLike(content) {
    this.content = content;
  }

  return AbstractTextNodeLike;
}();

exports.AbstractTextNodeLike = AbstractTextNodeLike;

var AbstractElementLike =
/** @class */
function () {
  function AbstractElementLike(tag) {
    this.tag = tag;
    this.attrs = {};
    this.children = [];
  }

  AbstractElementLike.prototype.setAttribute = function (name, value) {
    this.attrs[name] = value;
  };

  AbstractElementLike.prototype.appendChild = function (c) {
    this.children.push(c);

    if (isElementLike(c)) {
      c.parentElement = this;
    }
  };

  AbstractElementLike.prototype.findDescendant = function (p) {
    var found;
    this.children.some(function (c) {
      if (isElementLike(c)) {
        if (p(c)) {
          found = c;
        } else {
          found = c.findDescendant(p);
        }
      }

      return !!found;
    });
    return found;
  };

  AbstractElementLike.prototype.findAscendant = function (p) {
    if (this.parentElement) {
      if (p(this.parentElement)) {
        return this.parentElement;
      }

      return this.parentElement.findAscendant(p);
    }
  };

  AbstractElementLike.prototype.getAscendants = function () {
    return this.parentElement ? this.parentElement.getAscendants().concat([this.parentElement]) : [];
  };

  AbstractElementLike.prototype.getRootAscendant = function () {
    var r = this.parentElement ? this.findAscendant(function (n) {
      return isElementLike(n) && !n.parentElement;
    }) : this;
    return util_1.checkThrow(r, 'No root ascendant found in element like tree!');
  };

  AbstractElementLike.prototype.getSiblings = function () {
    var _this = this;

    if (this.parentElement) {
      return this.parentElement.children.filter(function (c) {
        return c !== _this;
      });
    }

    return [];
  };

  AbstractElementLike.prototype.findSibling = function (p) {
    return this.getSiblings().find(p);
  };

  AbstractElementLike.prototype.find = function (p) {
    // TODO: this should start searching in the near children, sibling and parents, and only after that look on far nodes
    return this.getRootAscendant().findDescendant(p);
  };

  return AbstractElementLike;
}();

exports.AbstractElementLike = AbstractElementLike;
},{"./util":"8yB0"}],"+nOU":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var elementImpl_1 = require("./elementImpl");
/**
 * A Class able to render() JSX. Similar to React.Component but only supporting properties, without state, context, ref, did/will methods, etc.
 */


var ElementClass =
/** @class */
function () {
  function ElementClass(props) {
    this.props = props;
  }

  ElementClass.prototype.childrenAsArray = function () {
    return Array.isArray(this.props.children) ? this.props.children : [this.props.children];
  };

  ElementClass.prototype.childrenElementsAsArray = function () {
    return this.childrenAsArray().filter(function (c) {
      return elementImpl_1.isElementLike(c);
    });
  };

  ElementClass.prototype.firstChildElement = function () {
    return this.childrenAsArray().find(function (e) {
      return true;
    });
  };

  return ElementClass;
}();

exports.ElementClass = ElementClass;

var AbstractElementClass =
/** @class */
function (_super) {
  __extends(AbstractElementClass, _super);

  function AbstractElementClass() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return AbstractElementClass;
}(ElementClass);

exports.AbstractElementClass = AbstractElementClass;
},{"./elementImpl":"3p56"}],"rCe5":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var elementImpl_1 = require("./elementImpl");

var throwOnUnrecognized = false;

function debug(err) {
  if (throwOnUnrecognized) {
    throw err;
  } else {
    console.error(err);
  }
}

exports.debug = debug;

function createCreateElement(config) {
  var impl = config.impl,
      textNodeImpl = config.textNodeImpl,
      escapeAttributes = config.escapeAttributes,
      functionAttributes = config.functionAttributes,
      onElementReady = config.onElementReady,
      onElementCreate = config.onElementCreate;
  return function createElement(tag, attrs) {
    if (attrs === void 0) {
      attrs = {};
    }

    var children = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      children[_i - 2] = arguments[_i];
    }

    var element;
    var elementClassInstance;

    if (typeof tag === 'string') {
      element = new impl(tag);
    } else {
      if (elementImpl_1.isJSXAloneComponent(tag)) {
        elementClassInstance = new tag(__assign({}, attrs, {
          children: children
        }));
        element = elementClassInstance.render();
      } else {
        element = tag(__assign({}, attrs, {
          children: children
        })); //TODO: expose function element context
      }

      attrs = {};
    }

    if (onElementCreate) {
      onElementCreate({
        elementLike: element,
        elementClassInstance: elementClassInstance
      });
    }

    var _loop_1 = function _loop_1(name_1) {
      if (name_1 && attrs.hasOwnProperty(name_1)) {
        var value_1 = attrs[name_1];

        if (typeof value_1 === 'boolean') {
          if (value_1 === true) {
            element.setAttribute(name_1, name_1);
          }
        } else if (typeof value_1 === 'function') {
          if (!functionAttributes || functionAttributes === 'preserve') {
            element.setAttribute(name_1, value_1);
          } else {
            var code = functionAttributes === 'toString-this' ? "_this = __this__ = this; (" + value_1.toString() + ").apply(_this, arguments)" : value_1.toString();
            var escaped = escapeAttributes ? escapeAttributes(code) : code;
            element.setAttribute(name_1, escaped);
          }
        } else if (value_1 !== false && value_1 != null) {
          if (name_1 === 'className') {
            if (typeof value_1 === 'string') {
              element.setAttribute('class', value_1);
            } else if (Array.isArray(value_1) && value_1.length && typeof value_1[0] === 'string') {
              element.setAttribute('class', value_1.join(' '));
            } else {
              debug("unrecognized className value " + _typeof(value_1) + " " + value_1);
            }
          } else {
            element.setAttribute(name_1, value_1.toString());
          }
        } else if (_typeof(value_1) === 'object') {
          if (name_1 === 'style') {
            element.setAttribute('style', "" + Object.keys(value_1).map(function (p) {
              return p + ": " + value_1[p];
            }).join('; '));
          } else if (name_1 === 'dangerouslySetInnerHTML' && value_1 && typeof value_1.__html === 'string') {
            element.dangerouslySetInnerHTML(value_1.__html);
          } else {
            debug("unrecognized object attribute \"" + name_1 + "\" - the only object attribute supported is \"style\"");
          }
        } else {
          debug("unrecognized attribute \"" + name_1 + "\" with type " + _typeof(value_1));
        }
      }
    };

    for (var name_1 in attrs) {
      _loop_1(name_1);
    }

    if (typeof tag === 'string') {
      // don't render children for function or classes since they are responsible of render their own children
      children.filter(function (c) {
        return c;
      }).forEach(function (child) {
        if (elementImpl_1.isNode(child)) {
          element.appendChild(child);
        } else if (Array.isArray(child)) {
          child.forEach(function (c) {
            if (typeof c === 'string') {
              element.appendChild(new textNodeImpl(c));
            } else if (elementImpl_1.isNode(c)) {
              element.appendChild(c);
            } else {
              debug("Child is not a node or string: " + c + " , tag: " + tag);
            }
          });
        } else {
          element.appendChild(new textNodeImpl(child));
        }
      });
    }

    if (onElementReady) {
      element = onElementReady(element);
    }

    return element;
  };
}

exports.createCreateElement = createCreateElement;
exports.AbstractJSXAlone = null;
},{"./elementImpl":"3p56"}],"URgR":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import { AbstractJSXAlone as  } from './createElement';

var _1 = require("."); // export type Props = { children: Children }
// TODO: like React.Fragment


exports.Fragment = function (props) {
  return _1.AbstractJSXAlone.createElement("span", null, props.children);
};

function Js(props) {
  var r = props.children();
  console.log(r);
  return r ? _1.AbstractJSXAlone.createElement(exports.Fragment, null, r) : null;
}

exports.Js = Js;
/** if as statement. children need to be in a function and the function accepts a parameter which value is given condition `c` but casted to NotFalsy<C> so there's no need of type guards in the body. Example:
```
<If c={type}>{type =>
  <select multiple={true}>{names[type].map(c =>
      <option value={c.id}>{c.label}</option>)}
  </select>
</If>
```

No error thrown on second line because parameter type is not falsy but keep the original type (excluding falsy values)

Other example:

```
export class ErrorComponent extends React.Component<ErrorOptions> {
  public render() {
    return <div>
      <If c={this.props.error}>{error =>
        <React.Fragment>
          <h2>Error</h2>
          <If c={typeof error === 'string'}>{e =>
            <h3>{e}</h3>}
          </If>
          <If c={typeof error === 'object'}>{e =>
            <React.Fragment>
              <h5>{error!.name}</h5>
              <p>{error!.message}</p>
              <If c={error.stack}>{e =>
                <ul>
                  {e.split('\n').map(e =>
                    <li>{e}</li>)}
                </ul>}
              </If>
            </React.Fragment>}
          </If>
          <If c={this.props.responseText}>{responseText =>
            <iframe css={{ border: 0, width: '100%', height: '400px' }} srcDoc={responseText}>
            </iframe>}
          </If>
        </React.Fragment>}
      </If>
    </div>
  }
}

```
*/

function If(props) {
  //TODO: issue in dom implementation, children is an array 
  var f = Array.isArray(props.children) ? props.children[0] : props.children;
  var c = props.c,
      p = props.p;
  if (isNotFalsy(c)) return f.apply(null, (p ? [p] : []).concat([c]));else {
    return null;
  }
}

exports.If = If;

function isNotFalsy(a) {
  return !!a;
}
},{".":"USgY"}],"USgY":[function(require,module,exports) {
"use strict";

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

__export(require("./elementImpl"));

__export(require("./elementClass"));

__export(require("./createElement"));

var elementImpl_1 = require("./elementImpl");

exports.AbstractTextNodeLike = elementImpl_1.AbstractTextNodeLike;
exports.AbstractElementLike = elementImpl_1.AbstractElementLike;

__export(require("./misc"));

__export(require("./util"));
},{"./elementImpl":"3p56","./elementClass":"+nOU","./createElement":"rCe5","./misc":"URgR","./util":"8yB0"}],"/5mC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsx_alone_core_1 = require("jsx-alone-core");

exports.names = {
  firstName: function firstName() {
    return jsx_alone_core_1.randomItem(firstNames);
  },
  lastName: function lastName() {
    return jsx_alone_core_1.randomItem(firstNames);
  }
};
exports.numbers = {
  integer: function integer(min, max) {
    return jsx_alone_core_1.randomIntBetween(min, max);
  }
};
var firstNames = ["William", "Jack", "Oliver", "Joshua", "Thomas", "Lachlan", "Cooper", "Noah", "Ethan", "Lucas", "James", "Samuel", "Jacob", "Liam", "Alexander", "Benjamin", "Max", "Isaac", "Daniel", "Riley", "Ryan", "Xavier", "Harry", "Jayden", "Nicholas", "Harrison", "Levi", "Luke", "Adam", "Henry", "Aiden", "Dylan", "Oscar", "Michael", "Jackson", "Logan"];
},{"jsx-alone-core":"USgY"}],"45O1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var util_1 = require("../util");

var jsx_alone_core_1 = require("jsx-alone-core");

exports.MODEL_CONFIG = {
  peopleCount: 100,
  friendsCount: 5
};

function buildModel(config) {
  return {
    people: makePeople(config)
  };
}

exports.buildModel = buildModel;

function makePeople(config) {
  return jsx_alone_core_1.array(config.peopleCount).map(function (i) {
    return {
      name: util_1.names.firstName() + " " + util_1.names.firstName() + " " + util_1.names.lastName() + " " + util_1.names.lastName(),
      age: util_1.numbers.integer(0, 100),
      friends: []
    };
  }).map(function (p, i, a) {
    p.friends = jsx_alone_core_1.array(util_1.numbers.integer(Math.trunc(config.friendsCount / 2), config.friendsCount)).map(function (i) {
      return a[util_1.numbers.integer(0, a.length - 1)];
    });
    return p;
  });
}
},{"../util":"/5mC","jsx-alone-core":"USgY"}],"k0NB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var util_1 = require("./util");

function isJSXAloneComponent(c) {
  return c.prototype && c.prototype.render;
}

exports.isJSXAloneComponent = isJSXAloneComponent;

function isNode(n) {
  return isTextNodeLike(n) || isElementLike(n);
}

exports.isNode = isNode;

function isElementLike(n) {
  return n && n.setAttribute;
}

exports.isElementLike = isElementLike;

function isTextNodeLike(n) {
  return n && n.content && !isElementLike(n);
}

exports.isTextNodeLike = isTextNodeLike;

var AbstractTextNodeLike =
/** @class */
function () {
  function AbstractTextNodeLike(content) {
    this.content = content;
  }

  return AbstractTextNodeLike;
}();

exports.AbstractTextNodeLike = AbstractTextNodeLike;

var AbstractElementLike =
/** @class */
function () {
  function AbstractElementLike(tag) {
    this.tag = tag;
    this.attrs = {};
    this.children = [];
  }

  AbstractElementLike.prototype.setAttribute = function (name, value) {
    this.attrs[name] = value;
  };

  AbstractElementLike.prototype.appendChild = function (c) {
    this.children.push(c);

    if (isElementLike(c)) {
      c.parentElement = this;
    }
  };

  AbstractElementLike.prototype.findDescendant = function (p) {
    var found;
    this.children.some(function (c) {
      if (isElementLike(c)) {
        if (p(c)) {
          found = c;
        } else {
          found = c.findDescendant(p);
        }
      }

      return !!found;
    });
    return found;
  };

  AbstractElementLike.prototype.findAscendant = function (p) {
    if (this.parentElement) {
      if (p(this.parentElement)) {
        return this.parentElement;
      }

      return this.parentElement.findAscendant(p);
    }
  };

  AbstractElementLike.prototype.getAscendants = function () {
    return this.parentElement ? this.parentElement.getAscendants().concat([this.parentElement]) : [];
  };

  AbstractElementLike.prototype.getRootAscendant = function () {
    var r = this.parentElement ? this.findAscendant(function (n) {
      return isElementLike(n) && !n.parentElement;
    }) : this;
    return util_1.checkThrow(r, 'No root ascendant found in element like tree!');
  };

  AbstractElementLike.prototype.getSiblings = function () {
    var _this = this;

    if (this.parentElement) {
      return this.parentElement.children.filter(function (c) {
        return c !== _this;
      });
    }

    return [];
  };

  AbstractElementLike.prototype.findSibling = function (p) {
    return this.getSiblings().find(p);
  };

  AbstractElementLike.prototype.find = function (p) {
    // TODO: this should start searching in the near children, sibling and parents, and only after that look on far nodes
    return this.getRootAscendant().findDescendant(p);
  };

  return AbstractElementLike;
}();

exports.AbstractElementLike = AbstractElementLike;
},{"./util":"8yB0"}],"U/x1":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var elementImpl_1 = require("./elementImpl");
/**
 * A Class able to render() JSX. Similar to React.Component but only supporting properties, without state, context, ref, did/will methods, etc.
 */


var ElementClass =
/** @class */
function () {
  function ElementClass(props) {
    this.props = props;
  }

  ElementClass.prototype.childrenAsArray = function () {
    return Array.isArray(this.props.children) ? this.props.children : [this.props.children];
  };

  ElementClass.prototype.childrenElementsAsArray = function () {
    return this.childrenAsArray().filter(function (c) {
      return elementImpl_1.isElementLike(c);
    });
  };

  ElementClass.prototype.firstChildElement = function () {
    return this.childrenAsArray().find(function (e) {
      return true;
    });
  };

  return ElementClass;
}();

exports.ElementClass = ElementClass;

var AbstractElementClass =
/** @class */
function (_super) {
  __extends(AbstractElementClass, _super);

  function AbstractElementClass() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return AbstractElementClass;
}(ElementClass);

exports.AbstractElementClass = AbstractElementClass;
},{"./elementImpl":"k0NB"}],"/Hzm":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var elementImpl_1 = require("./elementImpl");

var throwOnUnrecognized = false;

function debug(err) {
  if (throwOnUnrecognized) {
    throw err;
  } else {
    console.error(err);
  }
}

exports.debug = debug;

function createCreateElement(config) {
  var impl = config.impl,
      textNodeImpl = config.textNodeImpl,
      escapeAttributes = config.escapeAttributes,
      functionAttributes = config.functionAttributes,
      onElementReady = config.onElementReady,
      onElementCreate = config.onElementCreate;
  return function createElement(tag, attrs) {
    if (attrs === void 0) {
      attrs = {};
    }

    var children = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      children[_i - 2] = arguments[_i];
    }

    var element;
    var elementClassInstance;

    if (typeof tag === 'string') {
      element = new impl(tag);
    } else {
      if (elementImpl_1.isJSXAloneComponent(tag)) {
        elementClassInstance = new tag(__assign({}, attrs, {
          children: children
        }));
        element = elementClassInstance.render();
      } else {
        element = tag(__assign({}, attrs, {
          children: children
        })); //TODO: expose function element context
      }

      attrs = {};
    }

    if (onElementCreate) {
      onElementCreate({
        elementLike: element,
        elementClassInstance: elementClassInstance
      });
    }

    var _loop_1 = function _loop_1(name_1) {
      if (name_1 && attrs.hasOwnProperty(name_1)) {
        var value_1 = attrs[name_1];

        if (typeof value_1 === 'boolean') {
          if (value_1 === true) {
            element.setAttribute(name_1, name_1);
          }
        } else if (typeof value_1 === 'function') {
          if (!functionAttributes || functionAttributes === 'preserve') {
            element.setAttribute(name_1, value_1);
          } else {
            var code = functionAttributes === 'toString-this' ? "_this = __this__ = this; (" + value_1.toString() + ").apply(_this, arguments)" : value_1.toString();
            var escaped = escapeAttributes ? escapeAttributes(code) : code;
            element.setAttribute(name_1, escaped);
          }
        } else if (value_1 !== false && value_1 != null) {
          if (name_1 === 'className') {
            if (typeof value_1 === 'string') {
              element.setAttribute('class', value_1);
            } else if (Array.isArray(value_1) && value_1.length && typeof value_1[0] === 'string') {
              element.setAttribute('class', value_1.join(' '));
            } else {
              debug("unrecognized className value " + _typeof(value_1) + " " + value_1);
            }
          } else {
            element.setAttribute(name_1, value_1.toString());
          }
        } else if (_typeof(value_1) === 'object') {
          if (name_1 === 'style') {
            element.setAttribute('style', "" + Object.keys(value_1).map(function (p) {
              return p + ": " + value_1[p];
            }).join('; '));
          } else if (name_1 === 'dangerouslySetInnerHTML' && value_1 && typeof value_1.__html === 'string') {
            element.dangerouslySetInnerHTML(value_1.__html);
          } else {
            debug("unrecognized object attribute \"" + name_1 + "\" - the only object attribute supported is \"style\"");
          }
        } else {
          debug("unrecognized attribute \"" + name_1 + "\" with type " + _typeof(value_1));
        }
      }
    };

    for (var name_1 in attrs) {
      _loop_1(name_1);
    }

    if (typeof tag === 'string') {
      // don't render children for function or classes since they are responsible of render their own children
      children.filter(function (c) {
        return c;
      }).forEach(function (child) {
        if (elementImpl_1.isNode(child)) {
          element.appendChild(child);
        } else if (Array.isArray(child)) {
          child.forEach(function (c) {
            if (typeof c === 'string') {
              element.appendChild(new textNodeImpl(c));
            } else if (elementImpl_1.isNode(c)) {
              element.appendChild(c);
            } else {
              debug("Child is not a node or string: " + c + " , tag: " + tag);
            }
          });
        } else {
          element.appendChild(new textNodeImpl(child));
        }
      });
    }

    if (onElementReady) {
      element = onElementReady(element);
    }

    return element;
  };
}

exports.createCreateElement = createCreateElement;
exports.AbstractJSXAlone = null;
},{"./elementImpl":"k0NB"}],"TuGG":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import { AbstractJSXAlone as  } from './createElement';

var _1 = require("."); // export type Props = { children: Children }
// TODO: like React.Fragment


exports.Fragment = function (props) {
  return _1.AbstractJSXAlone.createElement("span", null, props.children);
};

function Js(props) {
  var r = props.children();
  console.log(r);
  return r ? _1.AbstractJSXAlone.createElement(exports.Fragment, null, r) : null;
}

exports.Js = Js;
/** if as statement. children need to be in a function and the function accepts a parameter which value is given condition `c` but casted to NotFalsy<C> so there's no need of type guards in the body. Example:
```
<If c={type}>{type =>
  <select multiple={true}>{names[type].map(c =>
      <option value={c.id}>{c.label}</option>)}
  </select>
</If>
```

No error thrown on second line because parameter type is not falsy but keep the original type (excluding falsy values)

Other example:

```
export class ErrorComponent extends React.Component<ErrorOptions> {
  public render() {
    return <div>
      <If c={this.props.error}>{error =>
        <React.Fragment>
          <h2>Error</h2>
          <If c={typeof error === 'string'}>{e =>
            <h3>{e}</h3>}
          </If>
          <If c={typeof error === 'object'}>{e =>
            <React.Fragment>
              <h5>{error!.name}</h5>
              <p>{error!.message}</p>
              <If c={error.stack}>{e =>
                <ul>
                  {e.split('\n').map(e =>
                    <li>{e}</li>)}
                </ul>}
              </If>
            </React.Fragment>}
          </If>
          <If c={this.props.responseText}>{responseText =>
            <iframe css={{ border: 0, width: '100%', height: '400px' }} srcDoc={responseText}>
            </iframe>}
          </If>
        </React.Fragment>}
      </If>
    </div>
  }
}

```
*/

function If(props) {
  //TODO: issue in dom implementation, children is an array 
  var f = Array.isArray(props.children) ? props.children[0] : props.children;
  var c = props.c,
      p = props.p;
  if (isNotFalsy(c)) return f.apply(null, (p ? [p] : []).concat([c]));else {
    return null;
  }
}

exports.If = If;

function isNotFalsy(a) {
  return !!a;
}
},{".":"dIAC"}],"dIAC":[function(require,module,exports) {
"use strict";

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

__export(require("./elementImpl"));

__export(require("./elementClass"));

__export(require("./createElement"));

var elementImpl_1 = require("./elementImpl");

exports.AbstractTextNodeLike = elementImpl_1.AbstractTextNodeLike;
exports.AbstractElementLike = elementImpl_1.AbstractElementLike;

__export(require("./misc"));

__export(require("./util"));
},{"./elementImpl":"k0NB","./elementClass":"U/x1","./createElement":"/Hzm","./misc":"TuGG","./util":"8yB0"}],"KmFW":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_alone_core_1 = require("jsx-alone-core");
var ElementLikeImpl = /** @class */ (function (_super) {
    __extends(ElementLikeImpl, _super);
    function ElementLikeImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementLikeImpl.prototype.render = function (config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        var el = document.createElement(this.tag);
        // this is the context in which  function attributes of this and descendants will be evaluated. It's set up by createCreateElementConfig see below.
        var elementClassInstance = (this.parentElement && this.parentElement._elementClassInstance) || this._elementClassInstance;
        Object.keys(this.attrs).forEach(function (attribute) {
            var value = _this.attrs[attribute];
            if (typeof value === 'function') {
                var fn = elementClassInstance ? value.bind(elementClassInstance) : value;
                el.addEventListener(attribute.substring(2, attribute.length).toLowerCase(), fn);
                _this.attrs[attribute] = undefined;
            }
            else {
                el.setAttribute(attribute, value);
            }
        });
        if (this._innerHtml) {
            el.innerHTML = this._innerHtml;
        }
        this.children.forEach(function (c) {
            if (elementClassInstance) {
                ;
                c._elementClassInstance = elementClassInstance || c._elementClassInstance;
            }
            c.render(__assign({}, config, { parent: el }));
        });
        if (config.parent) {
            config.parent.appendChild(el);
        }
        this._elementClassInstance = undefined;
        return el;
    };
    ElementLikeImpl.prototype.dangerouslySetInnerHTML = function (s) {
        this._innerHtml = s;
    };
    return ElementLikeImpl;
}(jsx_alone_core_1.AbstractElementLike));
exports.ElementLikeImpl = ElementLikeImpl;
var TextNodeLikeImpl = /** @class */ (function (_super) {
    __extends(TextNodeLikeImpl, _super);
    function TextNodeLikeImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextNodeLikeImpl.prototype.render = function (config) {
        if (config === void 0) { config = {}; }
        var text = document.createTextNode(this.content);
        if (config.parent) {
            config.parent.appendChild(text);
        }
        return text;
    };
    return TextNodeLikeImpl;
}(jsx_alone_core_1.AbstractTextNodeLike));
exports.TextNodeLikeImpl = TextNodeLikeImpl;
var ElementClass = /** @class */ (function (_super) {
    __extends(ElementClass, _super);
    function ElementClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ElementClass;
}(jsx_alone_core_1.ElementClass));
exports.ElementClass = ElementClass;
exports.createCreateElementConfig = {
    impl: ElementLikeImpl,
    textNodeImpl: TextNodeLikeImpl,
    functionAttributes: 'preserve',
    onElementCreate: function (_a) {
        var elementLike = _a.elementLike, elementClassInstance = _a.elementClassInstance;
        if (elementClassInstance) {
            elementLike._elementClassInstance = elementClassInstance;
        }
    }
};

},{"jsx-alone-core":"dIAC"}],"Hbm/":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_alone_core_1 = require("jsx-alone-core");
var elementImpl_1 = require("./elementImpl");
var Module = {
    createElement: jsx_alone_core_1.createCreateElement(elementImpl_1.createCreateElementConfig),
    render: function (el, config) {
        return el.render(config);
    }
};
exports.JSXAlone = Module;

},{"jsx-alone-core":"dIAC","./elementImpl":"KmFW"}],"jxZo":[function(require,module,exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./createElement"));
var elementImpl_1 = require("./elementImpl");
exports.ElementClass = elementImpl_1.ElementClass;

},{"./createElement":"Hbm/","./elementImpl":"KmFW"}],"JVGL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsx_alone_dom_1 = require("jsx-alone-dom");

function getJSXAlone() {
  return jsx_alone_dom_1.JSXAlone;
}

exports.getJSXAlone = getJSXAlone;
},{"jsx-alone-dom":"jxZo"}],"IAey":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsx_alone_core_1 = require("jsx-alone-core");

var impl_1 = require("../impl");

var JSXAlone = impl_1.getJSXAlone();

var App =
/** @class */
function (_super) {
  __extends(App, _super);

  function App() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  App.prototype.render = function () {
    var _this = this;

    return JSXAlone.createElement("div", null, JSXAlone.createElement("h1", null, "Lots of people to print"), JSXAlone.createElement(jsx_alone_core_1.If, {
      c: typeof window !== 'undefined'
    }, function () {
      return JSXAlone.createElement("div", null, JSXAlone.createElement("p", null, "People count: ", JSXAlone.createElement("input", {
        id: "peopleCount",
        value: _this.props.peopleCount + '',
        type: "number"
      })), JSXAlone.createElement("p", null, "Friends count: ", JSXAlone.createElement("input", {
        id: "friendsCount",
        value: _this.props.friendsCount + '',
        type: "number"
      })), JSXAlone.createElement("button", {
        onClick: function onClick(e) {
          var peopleCount = document.querySelector('#peopleCount').valueAsNumber;
          var friendsCount = document.querySelector('#friendsCount').valueAsNumber;
          window.renderAppLotsOfPeople({
            peopleCount: peopleCount,
            friendsCount: friendsCount
          });
        }
      }, "Render!"), JSXAlone.createElement("h4", null, "Timings"), JSXAlone.createElement("ul", null, JSXAlone.createElement("li", null, "onload: ", JSXAlone.createElement("strong", {
        id: "timings_onload"
      })), JSXAlone.createElement("li", null, "buildModel: ", JSXAlone.createElement("strong", {
        id: "timings_buildModel"
      })), JSXAlone.createElement("li", null, "JSXAlone.createElement: ", JSXAlone.createElement("strong", {
        id: "timings_JSXAloneCreateElement"
      })), JSXAlone.createElement("li", null, "JSXAlone.render: ", JSXAlone.createElement("strong", {
        id: "timings_JSXAloneRender"
      }))));
    }), JSXAlone.createElement(People, {
      people: this.props.people
    }));
  };

  return App;
}(jsx_alone_core_1.AbstractElementClass);

exports.App = App;

var EditButton = function EditButton(props) {
  return JSXAlone.createElement("button", {
    "data-name": props.name,
    onClick: function onClick(e) {
      alert(("\nNo context here that's why we need to do the following: \nName: \"" + e.currentTarget.getAttribute('data-name') + "\"\n").trim()); // debugger
    }
  }, props.children);
};

var Person = function Person(props) {
  return JSXAlone.createElement("tr", {
    id: encodeURIComponent(props.name)
  }, JSXAlone.createElement("td", null, props.name), JSXAlone.createElement("td", null, props.age), JSXAlone.createElement("td", null, JSXAlone.createElement("ul", null, props.friends.map(function (f) {
    return JSXAlone.createElement("li", null, JSXAlone.createElement("a", {
      href: "#" + f.name
    }, f.name));
  }))), JSXAlone.createElement("td", null, JSXAlone.createElement(EditButton, {
    name: props.name
  }, "Edit")));
};

var People = function People(props) {
  return JSXAlone.createElement("table", {
    className: "person"
  }, JSXAlone.createElement("thead", null, JSXAlone.createElement("tr", null, JSXAlone.createElement("th", null, "Name"), JSXAlone.createElement("th", null, "Age"), JSXAlone.createElement("th", null, "Friends"), JSXAlone.createElement("th", null, "Actions"))), JSXAlone.createElement("tbody", null, props.people.map(function (p) {
    return JSXAlone.createElement(Person, __assign({}, p));
  })));
};
},{"jsx-alone-core":"USgY","../impl":"JVGL"}],"z8rF":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var model_1 = require("./model");

var App_1 = require("./App");

var model_2 = require("./model");

var impl_1 = require("../impl");

var JSXAlone = impl_1.getJSXAlone();

function renderApp(renderer, config) {
  if (config === void 0) {
    config = model_2.MODEL_CONFIG;
  }

  renderer_ = renderer; // buildModel

  var buildModelT0 = Date.now();
  console.time('buildModel');
  var model = model_1.buildModel(config);
  var buildModelT = Date.now() - buildModelT0;
  console.timeEnd('buildModel'); // createElement - declaring the JSX element here will end up in code calling JSXAlone.createElement

  var JSXAloneCreateElementT0 = Date.now();
  console.time('JSXAlone.createElement');
  var app = JSXAlone.createElement("div", {
    id: "jsx-alone-sample-project-code"
  }, JSXAlone.createElement(App_1.App, __assign({}, model, config)), ";");
  var JSXAloneCreateElementT = Date.now() - JSXAloneCreateElementT0;
  console.timeEnd('JSXAlone.createElement');
  renderer(app, {
    buildModelT: buildModelT,
    JSXAloneCreateElementT: JSXAloneCreateElementT
  });
  return app;
}

exports.renderApp = renderApp;
var renderer_;

if (typeof window !== 'undefined') {
  // (window as any).renderAppLotsOfPeople = renderApp
  window.renderAppLotsOfPeople = function (config) {
    return renderApp(renderer_, config);
  };
}
},{"./model":"45O1","./App":"IAey","../impl":"JVGL"}],"wC2p":[function(require,module,exports) {
"use strict";

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var renderApp_1 = require("./lotsOfPeople/renderApp");

exports.lotsOfPeople = renderApp_1.renderApp;

__export(require("./util"));
},{"./lotsOfPeople/renderApp":"z8rF","./util":"/5mC"}],"vmAk":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var util_1 = require("./util");

function isJSXAloneComponent(c) {
  return c.prototype && c.prototype.render;
}

exports.isJSXAloneComponent = isJSXAloneComponent;

function isNode(n) {
  return isTextNodeLike(n) || isElementLike(n);
}

exports.isNode = isNode;

function isElementLike(n) {
  return n && n.setAttribute;
}

exports.isElementLike = isElementLike;

function isTextNodeLike(n) {
  return n && n.content && !isElementLike(n);
}

exports.isTextNodeLike = isTextNodeLike;

var AbstractTextNodeLike =
/** @class */
function () {
  function AbstractTextNodeLike(content) {
    this.content = content;
  }

  return AbstractTextNodeLike;
}();

exports.AbstractTextNodeLike = AbstractTextNodeLike;

var AbstractElementLike =
/** @class */
function () {
  function AbstractElementLike(tag) {
    this.tag = tag;
    this.attrs = {};
    this.children = [];
  }

  AbstractElementLike.prototype.setAttribute = function (name, value) {
    this.attrs[name] = value;
  };

  AbstractElementLike.prototype.appendChild = function (c) {
    this.children.push(c);

    if (isElementLike(c)) {
      c.parentElement = this;
    }
  };

  AbstractElementLike.prototype.findDescendant = function (p) {
    var found;
    this.children.some(function (c) {
      if (isElementLike(c)) {
        if (p(c)) {
          found = c;
        } else {
          found = c.findDescendant(p);
        }
      }

      return !!found;
    });
    return found;
  };

  AbstractElementLike.prototype.findAscendant = function (p) {
    if (this.parentElement) {
      if (p(this.parentElement)) {
        return this.parentElement;
      }

      return this.parentElement.findAscendant(p);
    }
  };

  AbstractElementLike.prototype.getAscendants = function () {
    return this.parentElement ? this.parentElement.getAscendants().concat([this.parentElement]) : [];
  };

  AbstractElementLike.prototype.getRootAscendant = function () {
    var r = this.parentElement ? this.findAscendant(function (n) {
      return isElementLike(n) && !n.parentElement;
    }) : this;
    return util_1.checkThrow(r, 'No root ascendant found in element like tree!');
  };

  AbstractElementLike.prototype.getSiblings = function () {
    var _this = this;

    if (this.parentElement) {
      return this.parentElement.children.filter(function (c) {
        return c !== _this;
      });
    }

    return [];
  };

  AbstractElementLike.prototype.findSibling = function (p) {
    return this.getSiblings().find(p);
  };

  AbstractElementLike.prototype.find = function (p) {
    // TODO: this should start searching in the near children, sibling and parents, and only after that look on far nodes
    return this.getRootAscendant().findDescendant(p);
  };

  return AbstractElementLike;
}();

exports.AbstractElementLike = AbstractElementLike;
},{"./util":"8yB0"}],"0Bvz":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var elementImpl_1 = require("./elementImpl");
/**
 * A Class able to render() JSX. Similar to React.Component but only supporting properties, without state, context, ref, did/will methods, etc.
 */


var ElementClass =
/** @class */
function () {
  function ElementClass(props) {
    this.props = props;
  }

  ElementClass.prototype.childrenAsArray = function () {
    return Array.isArray(this.props.children) ? this.props.children : [this.props.children];
  };

  ElementClass.prototype.childrenElementsAsArray = function () {
    return this.childrenAsArray().filter(function (c) {
      return elementImpl_1.isElementLike(c);
    });
  };

  ElementClass.prototype.firstChildElement = function () {
    return this.childrenAsArray().find(function (e) {
      return true;
    });
  };

  return ElementClass;
}();

exports.ElementClass = ElementClass;

var AbstractElementClass =
/** @class */
function (_super) {
  __extends(AbstractElementClass, _super);

  function AbstractElementClass() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return AbstractElementClass;
}(ElementClass);

exports.AbstractElementClass = AbstractElementClass;
},{"./elementImpl":"vmAk"}],"fbNL":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var elementImpl_1 = require("./elementImpl");

var throwOnUnrecognized = false;

function debug(err) {
  if (throwOnUnrecognized) {
    throw err;
  } else {
    console.error(err);
  }
}

exports.debug = debug;

function createCreateElement(config) {
  var impl = config.impl,
      textNodeImpl = config.textNodeImpl,
      escapeAttributes = config.escapeAttributes,
      functionAttributes = config.functionAttributes,
      onElementReady = config.onElementReady,
      onElementCreate = config.onElementCreate;
  return function createElement(tag, attrs) {
    if (attrs === void 0) {
      attrs = {};
    }

    var children = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      children[_i - 2] = arguments[_i];
    }

    var element;
    var elementClassInstance;

    if (typeof tag === 'string') {
      element = new impl(tag);
    } else {
      if (elementImpl_1.isJSXAloneComponent(tag)) {
        elementClassInstance = new tag(__assign({}, attrs, {
          children: children
        }));
        element = elementClassInstance.render();
      } else {
        element = tag(__assign({}, attrs, {
          children: children
        })); //TODO: expose function element context
      }

      attrs = {};
    }

    if (onElementCreate) {
      onElementCreate({
        elementLike: element,
        elementClassInstance: elementClassInstance
      });
    }

    var _loop_1 = function _loop_1(name_1) {
      if (name_1 && attrs.hasOwnProperty(name_1)) {
        var value_1 = attrs[name_1];

        if (typeof value_1 === 'boolean') {
          if (value_1 === true) {
            element.setAttribute(name_1, name_1);
          }
        } else if (typeof value_1 === 'function') {
          if (!functionAttributes || functionAttributes === 'preserve') {
            element.setAttribute(name_1, value_1);
          } else {
            var code = functionAttributes === 'toString-this' ? "_this = __this__ = this; (" + value_1.toString() + ").apply(_this, arguments)" : value_1.toString();
            var escaped = escapeAttributes ? escapeAttributes(code) : code;
            element.setAttribute(name_1, escaped);
          }
        } else if (value_1 !== false && value_1 != null) {
          if (name_1 === 'className') {
            if (typeof value_1 === 'string') {
              element.setAttribute('class', value_1);
            } else if (Array.isArray(value_1) && value_1.length && typeof value_1[0] === 'string') {
              element.setAttribute('class', value_1.join(' '));
            } else {
              debug("unrecognized className value " + _typeof(value_1) + " " + value_1);
            }
          } else {
            element.setAttribute(name_1, value_1.toString());
          }
        } else if (_typeof(value_1) === 'object') {
          if (name_1 === 'style') {
            element.setAttribute('style', "" + Object.keys(value_1).map(function (p) {
              return p + ": " + value_1[p];
            }).join('; '));
          } else if (name_1 === 'dangerouslySetInnerHTML' && value_1 && typeof value_1.__html === 'string') {
            element.dangerouslySetInnerHTML(value_1.__html);
          } else {
            debug("unrecognized object attribute \"" + name_1 + "\" - the only object attribute supported is \"style\"");
          }
        } else {
          debug("unrecognized attribute \"" + name_1 + "\" with type " + _typeof(value_1));
        }
      }
    };

    for (var name_1 in attrs) {
      _loop_1(name_1);
    }

    if (typeof tag === 'string') {
      // don't render children for function or classes since they are responsible of render their own children
      children.filter(function (c) {
        return c;
      }).forEach(function (child) {
        if (elementImpl_1.isNode(child)) {
          element.appendChild(child);
        } else if (Array.isArray(child)) {
          child.forEach(function (c) {
            if (typeof c === 'string') {
              element.appendChild(new textNodeImpl(c));
            } else if (elementImpl_1.isNode(c)) {
              element.appendChild(c);
            } else {
              debug("Child is not a node or string: " + c + " , tag: " + tag);
            }
          });
        } else {
          element.appendChild(new textNodeImpl(child));
        }
      });
    }

    if (onElementReady) {
      element = onElementReady(element);
    }

    return element;
  };
}

exports.createCreateElement = createCreateElement;
exports.AbstractJSXAlone = null;
},{"./elementImpl":"vmAk"}],"k98/":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import { AbstractJSXAlone as  } from './createElement';

var _1 = require("."); // export type Props = { children: Children }
// TODO: like React.Fragment


exports.Fragment = function (props) {
  return _1.AbstractJSXAlone.createElement("span", null, props.children);
};

function Js(props) {
  var r = props.children();
  console.log(r);
  return r ? _1.AbstractJSXAlone.createElement(exports.Fragment, null, r) : null;
}

exports.Js = Js;
/** if as statement. children need to be in a function and the function accepts a parameter which value is given condition `c` but casted to NotFalsy<C> so there's no need of type guards in the body. Example:
```
<If c={type}>{type =>
  <select multiple={true}>{names[type].map(c =>
      <option value={c.id}>{c.label}</option>)}
  </select>
</If>
```

No error thrown on second line because parameter type is not falsy but keep the original type (excluding falsy values)

Other example:

```
export class ErrorComponent extends React.Component<ErrorOptions> {
  public render() {
    return <div>
      <If c={this.props.error}>{error =>
        <React.Fragment>
          <h2>Error</h2>
          <If c={typeof error === 'string'}>{e =>
            <h3>{e}</h3>}
          </If>
          <If c={typeof error === 'object'}>{e =>
            <React.Fragment>
              <h5>{error!.name}</h5>
              <p>{error!.message}</p>
              <If c={error.stack}>{e =>
                <ul>
                  {e.split('\n').map(e =>
                    <li>{e}</li>)}
                </ul>}
              </If>
            </React.Fragment>}
          </If>
          <If c={this.props.responseText}>{responseText =>
            <iframe css={{ border: 0, width: '100%', height: '400px' }} srcDoc={responseText}>
            </iframe>}
          </If>
        </React.Fragment>}
      </If>
    </div>
  }
}

```
*/

function If(props) {
  //TODO: issue in dom implementation, children is an array 
  var f = Array.isArray(props.children) ? props.children[0] : props.children;
  var c = props.c,
      p = props.p;
  if (isNotFalsy(c)) return f.apply(null, (p ? [p] : []).concat([c]));else {
    return null;
  }
}

exports.If = If;

function isNotFalsy(a) {
  return !!a;
}
},{".":"BB47"}],"BB47":[function(require,module,exports) {
"use strict";

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

__export(require("./elementImpl"));

__export(require("./elementClass"));

__export(require("./createElement"));

var elementImpl_1 = require("./elementImpl");

exports.AbstractTextNodeLike = elementImpl_1.AbstractTextNodeLike;
exports.AbstractElementLike = elementImpl_1.AbstractElementLike;

__export(require("./misc"));

__export(require("./util"));
},{"./elementImpl":"vmAk","./elementClass":"0Bvz","./createElement":"fbNL","./misc":"k98/","./util":"8yB0"}],"gNvY":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_alone_core_1 = require("jsx-alone-core");
var ElementLikeImpl = /** @class */ (function (_super) {
    __extends(ElementLikeImpl, _super);
    function ElementLikeImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementLikeImpl.prototype.render = function (config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        var el = document.createElement(this.tag);
        // this is the context in which  function attributes of this and descendants will be evaluated. It's set up by createCreateElementConfig see below.
        var elementClassInstance = (this.parentElement && this.parentElement._elementClassInstance) || this._elementClassInstance;
        Object.keys(this.attrs).forEach(function (attribute) {
            var value = _this.attrs[attribute];
            if (typeof value === 'function') {
                var fn = elementClassInstance ? value.bind(elementClassInstance) : value;
                el.addEventListener(attribute.substring(2, attribute.length).toLowerCase(), fn);
                _this.attrs[attribute] = undefined;
            }
            else {
                el.setAttribute(attribute, value);
            }
        });
        if (this._innerHtml) {
            el.innerHTML = this._innerHtml;
        }
        this.children.forEach(function (c) {
            if (elementClassInstance) {
                ;
                c._elementClassInstance = elementClassInstance || c._elementClassInstance;
            }
            c.render(__assign({}, config, { parent: el }));
        });
        if (config.parent) {
            config.parent.appendChild(el);
        }
        this._elementClassInstance = undefined;
        return el;
    };
    ElementLikeImpl.prototype.dangerouslySetInnerHTML = function (s) {
        this._innerHtml = s;
    };
    return ElementLikeImpl;
}(jsx_alone_core_1.AbstractElementLike));
exports.ElementLikeImpl = ElementLikeImpl;
var TextNodeLikeImpl = /** @class */ (function (_super) {
    __extends(TextNodeLikeImpl, _super);
    function TextNodeLikeImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextNodeLikeImpl.prototype.render = function (config) {
        if (config === void 0) { config = {}; }
        var text = document.createTextNode(this.content);
        if (config.parent) {
            config.parent.appendChild(text);
        }
        return text;
    };
    return TextNodeLikeImpl;
}(jsx_alone_core_1.AbstractTextNodeLike));
exports.TextNodeLikeImpl = TextNodeLikeImpl;
var ElementClass = /** @class */ (function (_super) {
    __extends(ElementClass, _super);
    function ElementClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ElementClass;
}(jsx_alone_core_1.ElementClass));
exports.ElementClass = ElementClass;
exports.createCreateElementConfig = {
    impl: ElementLikeImpl,
    textNodeImpl: TextNodeLikeImpl,
    functionAttributes: 'preserve',
    onElementCreate: function (_a) {
        var elementLike = _a.elementLike, elementClassInstance = _a.elementClassInstance;
        if (elementClassInstance) {
            elementLike._elementClassInstance = elementClassInstance;
        }
    }
};

},{"jsx-alone-core":"BB47"}],"S0OW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_alone_core_1 = require("jsx-alone-core");
var elementImpl_1 = require("./elementImpl");
var Module = {
    createElement: jsx_alone_core_1.createCreateElement(elementImpl_1.createCreateElementConfig),
    render: function (el, config) {
        return el.render(config);
    }
};
exports.JSXAlone = Module;

},{"jsx-alone-core":"BB47","./elementImpl":"gNvY"}],"MNUJ":[function(require,module,exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./createElement"));
var elementImpl_1 = require("./elementImpl");
exports.ElementClass = elementImpl_1.ElementClass;

},{"./createElement":"S0OW","./elementImpl":"gNvY"}],"Urqt":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var util_1 = require("./util");

function isJSXAloneComponent(c) {
  return c.prototype && c.prototype.render;
}

exports.isJSXAloneComponent = isJSXAloneComponent;

function isNode(n) {
  return isTextNodeLike(n) || isElementLike(n);
}

exports.isNode = isNode;

function isElementLike(n) {
  return n && n.setAttribute;
}

exports.isElementLike = isElementLike;

function isTextNodeLike(n) {
  return n && n.content && !isElementLike(n);
}

exports.isTextNodeLike = isTextNodeLike;

var AbstractTextNodeLike =
/** @class */
function () {
  function AbstractTextNodeLike(content) {
    this.content = content;
  }

  return AbstractTextNodeLike;
}();

exports.AbstractTextNodeLike = AbstractTextNodeLike;

var AbstractElementLike =
/** @class */
function () {
  function AbstractElementLike(tag) {
    this.tag = tag;
    this.attrs = {};
    this.children = [];
  }

  AbstractElementLike.prototype.setAttribute = function (name, value) {
    this.attrs[name] = value;
  };

  AbstractElementLike.prototype.appendChild = function (c) {
    this.children.push(c);

    if (isElementLike(c)) {
      c.parentElement = this;
    }
  };

  AbstractElementLike.prototype.findDescendant = function (p) {
    var found;
    this.children.some(function (c) {
      if (isElementLike(c)) {
        if (p(c)) {
          found = c;
        } else {
          found = c.findDescendant(p);
        }
      }

      return !!found;
    });
    return found;
  };

  AbstractElementLike.prototype.findAscendant = function (p) {
    if (this.parentElement) {
      if (p(this.parentElement)) {
        return this.parentElement;
      }

      return this.parentElement.findAscendant(p);
    }
  };

  AbstractElementLike.prototype.getAscendants = function () {
    return this.parentElement ? this.parentElement.getAscendants().concat([this.parentElement]) : [];
  };

  AbstractElementLike.prototype.getRootAscendant = function () {
    var r = this.parentElement ? this.findAscendant(function (n) {
      return isElementLike(n) && !n.parentElement;
    }) : this;
    return util_1.checkThrow(r, 'No root ascendant found in element like tree!');
  };

  AbstractElementLike.prototype.getSiblings = function () {
    var _this = this;

    if (this.parentElement) {
      return this.parentElement.children.filter(function (c) {
        return c !== _this;
      });
    }

    return [];
  };

  AbstractElementLike.prototype.findSibling = function (p) {
    return this.getSiblings().find(p);
  };

  AbstractElementLike.prototype.find = function (p) {
    // TODO: this should start searching in the near children, sibling and parents, and only after that look on far nodes
    return this.getRootAscendant().findDescendant(p);
  };

  return AbstractElementLike;
}();

exports.AbstractElementLike = AbstractElementLike;
},{"./util":"8yB0"}],"qWxh":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var elementImpl_1 = require("./elementImpl");
/**
 * A Class able to render() JSX. Similar to React.Component but only supporting properties, without state, context, ref, did/will methods, etc.
 */


var ElementClass =
/** @class */
function () {
  function ElementClass(props) {
    this.props = props;
  }

  ElementClass.prototype.childrenAsArray = function () {
    return Array.isArray(this.props.children) ? this.props.children : [this.props.children];
  };

  ElementClass.prototype.childrenElementsAsArray = function () {
    return this.childrenAsArray().filter(function (c) {
      return elementImpl_1.isElementLike(c);
    });
  };

  ElementClass.prototype.firstChildElement = function () {
    return this.childrenAsArray().find(function (e) {
      return true;
    });
  };

  return ElementClass;
}();

exports.ElementClass = ElementClass;

var AbstractElementClass =
/** @class */
function (_super) {
  __extends(AbstractElementClass, _super);

  function AbstractElementClass() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return AbstractElementClass;
}(ElementClass);

exports.AbstractElementClass = AbstractElementClass;
},{"./elementImpl":"Urqt"}],"Nzec":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var elementImpl_1 = require("./elementImpl");

var throwOnUnrecognized = false;

function debug(err) {
  if (throwOnUnrecognized) {
    throw err;
  } else {
    console.error(err);
  }
}

exports.debug = debug;

function createCreateElement(config) {
  var impl = config.impl,
      textNodeImpl = config.textNodeImpl,
      escapeAttributes = config.escapeAttributes,
      functionAttributes = config.functionAttributes,
      onElementReady = config.onElementReady,
      onElementCreate = config.onElementCreate;
  return function createElement(tag, attrs) {
    if (attrs === void 0) {
      attrs = {};
    }

    var children = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      children[_i - 2] = arguments[_i];
    }

    var element;
    var elementClassInstance;

    if (typeof tag === 'string') {
      element = new impl(tag);
    } else {
      if (elementImpl_1.isJSXAloneComponent(tag)) {
        elementClassInstance = new tag(__assign({}, attrs, {
          children: children
        }));
        element = elementClassInstance.render();
      } else {
        element = tag(__assign({}, attrs, {
          children: children
        })); //TODO: expose function element context
      }

      attrs = {};
    }

    if (onElementCreate) {
      onElementCreate({
        elementLike: element,
        elementClassInstance: elementClassInstance
      });
    }

    var _loop_1 = function _loop_1(name_1) {
      if (name_1 && attrs.hasOwnProperty(name_1)) {
        var value_1 = attrs[name_1];

        if (typeof value_1 === 'boolean') {
          if (value_1 === true) {
            element.setAttribute(name_1, name_1);
          }
        } else if (typeof value_1 === 'function') {
          if (!functionAttributes || functionAttributes === 'preserve') {
            element.setAttribute(name_1, value_1);
          } else {
            var code = functionAttributes === 'toString-this' ? "_this = __this__ = this; (" + value_1.toString() + ").apply(_this, arguments)" : value_1.toString();
            var escaped = escapeAttributes ? escapeAttributes(code) : code;
            element.setAttribute(name_1, escaped);
          }
        } else if (value_1 !== false && value_1 != null) {
          if (name_1 === 'className') {
            if (typeof value_1 === 'string') {
              element.setAttribute('class', value_1);
            } else if (Array.isArray(value_1) && value_1.length && typeof value_1[0] === 'string') {
              element.setAttribute('class', value_1.join(' '));
            } else {
              debug("unrecognized className value " + _typeof(value_1) + " " + value_1);
            }
          } else {
            element.setAttribute(name_1, value_1.toString());
          }
        } else if (_typeof(value_1) === 'object') {
          if (name_1 === 'style') {
            element.setAttribute('style', "" + Object.keys(value_1).map(function (p) {
              return p + ": " + value_1[p];
            }).join('; '));
          } else if (name_1 === 'dangerouslySetInnerHTML' && value_1 && typeof value_1.__html === 'string') {
            element.dangerouslySetInnerHTML(value_1.__html);
          } else {
            debug("unrecognized object attribute \"" + name_1 + "\" - the only object attribute supported is \"style\"");
          }
        } else {
          debug("unrecognized attribute \"" + name_1 + "\" with type " + _typeof(value_1));
        }
      }
    };

    for (var name_1 in attrs) {
      _loop_1(name_1);
    }

    if (typeof tag === 'string') {
      // don't render children for function or classes since they are responsible of render their own children
      children.filter(function (c) {
        return c;
      }).forEach(function (child) {
        if (elementImpl_1.isNode(child)) {
          element.appendChild(child);
        } else if (Array.isArray(child)) {
          child.forEach(function (c) {
            if (typeof c === 'string') {
              element.appendChild(new textNodeImpl(c));
            } else if (elementImpl_1.isNode(c)) {
              element.appendChild(c);
            } else {
              debug("Child is not a node or string: " + c + " , tag: " + tag);
            }
          });
        } else {
          element.appendChild(new textNodeImpl(child));
        }
      });
    }

    if (onElementReady) {
      element = onElementReady(element);
    }

    return element;
  };
}

exports.createCreateElement = createCreateElement;
exports.AbstractJSXAlone = null;
},{"./elementImpl":"Urqt"}],"h+Y6":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import { AbstractJSXAlone as  } from './createElement';

var _1 = require("."); // export type Props = { children: Children }
// TODO: like React.Fragment


exports.Fragment = function (props) {
  return _1.AbstractJSXAlone.createElement("span", null, props.children);
};

function Js(props) {
  var r = props.children();
  console.log(r);
  return r ? _1.AbstractJSXAlone.createElement(exports.Fragment, null, r) : null;
}

exports.Js = Js;
/** if as statement. children need to be in a function and the function accepts a parameter which value is given condition `c` but casted to NotFalsy<C> so there's no need of type guards in the body. Example:
```
<If c={type}>{type =>
  <select multiple={true}>{names[type].map(c =>
      <option value={c.id}>{c.label}</option>)}
  </select>
</If>
```

No error thrown on second line because parameter type is not falsy but keep the original type (excluding falsy values)

Other example:

```
export class ErrorComponent extends React.Component<ErrorOptions> {
  public render() {
    return <div>
      <If c={this.props.error}>{error =>
        <React.Fragment>
          <h2>Error</h2>
          <If c={typeof error === 'string'}>{e =>
            <h3>{e}</h3>}
          </If>
          <If c={typeof error === 'object'}>{e =>
            <React.Fragment>
              <h5>{error!.name}</h5>
              <p>{error!.message}</p>
              <If c={error.stack}>{e =>
                <ul>
                  {e.split('\n').map(e =>
                    <li>{e}</li>)}
                </ul>}
              </If>
            </React.Fragment>}
          </If>
          <If c={this.props.responseText}>{responseText =>
            <iframe css={{ border: 0, width: '100%', height: '400px' }} srcDoc={responseText}>
            </iframe>}
          </If>
        </React.Fragment>}
      </If>
    </div>
  }
}

```
*/

function If(props) {
  //TODO: issue in dom implementation, children is an array 
  var f = Array.isArray(props.children) ? props.children[0] : props.children;
  var c = props.c,
      p = props.p;
  if (isNotFalsy(c)) return f.apply(null, (p ? [p] : []).concat([c]));else {
    return null;
  }
}

exports.If = If;

function isNotFalsy(a) {
  return !!a;
}
},{".":"6FnY"}],"6FnY":[function(require,module,exports) {
"use strict";

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

__export(require("./elementImpl"));

__export(require("./elementClass"));

__export(require("./createElement"));

var elementImpl_1 = require("./elementImpl");

exports.AbstractTextNodeLike = elementImpl_1.AbstractTextNodeLike;
exports.AbstractElementLike = elementImpl_1.AbstractElementLike;

__export(require("./misc"));

__export(require("./util"));
},{"./elementImpl":"Urqt","./elementClass":"qWxh","./createElement":"Nzec","./misc":"h+Y6","./util":"8yB0"}],"7W7v":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsx_alone_dom_1 = require("jsx-alone-dom");

var jsx_alone_core_1 = require("jsx-alone-core");

exports.lotsOfPeopleRenderer = function (app, config) {
  // measures onload
  var onloadT0 = Date.now();
  console.time('onload');

  window.onload = function () {
    console.timeEnd('onload');
    var onloadT = Date.now() - onloadT0;
    document.getElementById('timings_onload').innerHTML = jsx_alone_core_1.printMs(onloadT);
    document.getElementById('timings_buildModel').innerHTML = jsx_alone_core_1.printMs(config.buildModelT);
    document.getElementById('timings_JSXAloneCreateElement').innerHTML = jsx_alone_core_1.printMs(config.JSXAloneCreateElementT);
    document.getElementById('timings_JSXAloneRender').innerHTML = jsx_alone_core_1.printMs(JSXAloneRenderT);
  }; // measures render


  var JSXAloneRenderT0 = Date.now();
  console.time('JSXAlone.render()');
  var el = jsx_alone_dom_1.JSXAlone.render(app);
  console.timeEnd('JSXAlone.render()');
  var JSXAloneRenderT = Date.now() - JSXAloneRenderT0; // measures appendChild TODO: timing

  var root = document.getElementById('jsx-alone-sample-project-code');

  if (root) {
    root.remove();
  }

  root = document.createElement('dir');
  root.setAttribute('id', 'jsx-alone-sample-project-code');
  root.appendChild(el);
  document.body.appendChild(root);
  document.getElementById('timings_onload').innerHTML = 'N/E';
  document.getElementById('timings_buildModel').innerHTML = jsx_alone_core_1.printMs(config.buildModelT);
  document.getElementById('timings_JSXAloneCreateElement').innerHTML = jsx_alone_core_1.printMs(config.JSXAloneCreateElementT);
  document.getElementById('timings_JSXAloneRender').innerHTML = jsx_alone_core_1.printMs(JSXAloneRenderT);
  return {
    el: root,
    JSXAloneRenderT: JSXAloneRenderT
  };
};
},{"jsx-alone-dom":"MNUJ","jsx-alone-core":"6FnY"}],"wdqJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsx_alone_sample_project_code_1 = require("jsx-alone-sample-project-code");

var lotsOfPeopleRenderer_1 = require("./lotsOfPeopleRenderer");

jsx_alone_sample_project_code_1.lotsOfPeople(lotsOfPeopleRenderer_1.lotsOfPeopleRenderer);
},{"jsx-alone-sample-project-code":"wC2p","./lotsOfPeopleRenderer":"7W7v"}]},{},["wdqJ"], null)
//# sourceMappingURL=main.186cb047.map