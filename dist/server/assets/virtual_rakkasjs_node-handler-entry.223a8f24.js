import { createListener } from "rakkasjs/node-adapter";
var __create$1 = Object.create;
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$1 = Object.getOwnPropertyNames;
var __getProtoOf$1 = Object.getPrototypeOf;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp$1(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames$1(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, copyDefault, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames$1(module))
      if (!__hasOwnProp$1.call(target, key) && (copyDefault || key !== "default"))
        __defProp$1(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc$1(module, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module, isNodeMode) => {
  return __reExport(__markAsModule(__defProp$1(module != null ? __create$1(__getProtoOf$1(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};
const clientManifest = {
  "virtual:rakkasjs:client-entry": {
    file: "assets/rakkasClientEntry.b9d1bfe0.js",
    src: "virtual:rakkasjs:client-entry",
    isEntry: true,
    dynamicImports: [
      "virtual:rakkasjs:client-page-routes"
    ]
  },
  "virtual:rakkasjs:client-page-routes": {
    file: "assets/virtual_rakkasjs_client-page-routes.377fca3f.js",
    src: "virtual:rakkasjs:client-page-routes",
    isDynamicEntry: true,
    imports: [
      "virtual:rakkasjs:client-entry"
    ],
    dynamicImports: [
      "src/routes/index.page.tsx"
    ]
  },
  "src/routes/index.page.tsx": {
    file: "assets/index.page.f14fd476.js",
    src: "src/routes/index.page.tsx",
    isDynamicEntry: true,
    imports: [
      "virtual:rakkasjs:client-entry"
    ]
  }
};
var require_react_production_min = __commonJS({
  "node_modules/react/cjs/react.production.min.js"(exports) {
    var l2 = Symbol.for("react.element");
    var n = Symbol.for("react.portal");
    var p2 = Symbol.for("react.fragment");
    var q2 = Symbol.for("react.strict_mode");
    var r = Symbol.for("react.profiler");
    var t2 = Symbol.for("react.provider");
    var u2 = Symbol.for("react.context");
    var v2 = Symbol.for("react.forward_ref");
    var w2 = Symbol.for("react.suspense");
    var x2 = Symbol.for("react.memo");
    var y2 = Symbol.for("react.lazy");
    var z2 = Symbol.iterator;
    function A2(a2) {
      if (a2 === null || typeof a2 !== "object")
        return null;
      a2 = z2 && a2[z2] || a2["@@iterator"];
      return typeof a2 === "function" ? a2 : null;
    }
    var B2 = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C2 = Object.assign;
    var D2 = {};
    function E2(a2, b2, e2) {
      this.props = a2;
      this.context = b2;
      this.refs = D2;
      this.updater = e2 || B2;
    }
    E2.prototype.isReactComponent = {};
    E2.prototype.setState = function(a2, b2) {
      if (typeof a2 !== "object" && typeof a2 !== "function" && a2 != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a2, b2, "setState");
    };
    E2.prototype.forceUpdate = function(a2) {
      this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
    };
    function F2() {
    }
    F2.prototype = E2.prototype;
    function G2(a2, b2, e2) {
      this.props = a2;
      this.context = b2;
      this.refs = D2;
      this.updater = e2 || B2;
    }
    var H2 = G2.prototype = new F2();
    H2.constructor = G2;
    C2(H2, E2.prototype);
    H2.isPureReactComponent = true;
    var I2 = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K2 = { current: null };
    var L2 = { key: true, ref: true, __self: true, __source: true };
    function M2(a2, b2, e2) {
      var d2, c2 = {}, k2 = null, h2 = null;
      if (b2 != null)
        for (d2 in b2.ref !== void 0 && (h2 = b2.ref), b2.key !== void 0 && (k2 = "" + b2.key), b2)
          J.call(b2, d2) && !L2.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
      var g2 = arguments.length - 2;
      if (g2 === 1)
        c2.children = e2;
      else if (1 < g2) {
        for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
          f2[m2] = arguments[m2 + 2];
        c2.children = f2;
      }
      if (a2 && a2.defaultProps)
        for (d2 in g2 = a2.defaultProps, g2)
          c2[d2] === void 0 && (c2[d2] = g2[d2]);
      return { $$typeof: l2, type: a2, key: k2, ref: h2, props: c2, _owner: K2.current };
    }
    function N2(a2, b2) {
      return { $$typeof: l2, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
    }
    function O2(a2) {
      return typeof a2 === "object" && a2 !== null && a2.$$typeof === l2;
    }
    function escape(a2) {
      var b2 = { "=": "=0", ":": "=2" };
      return "$" + a2.replace(/[=:]/g, function(a3) {
        return b2[a3];
      });
    }
    var P2 = /\/+/g;
    function Q(a2, b2) {
      return typeof a2 === "object" && a2 !== null && a2.key != null ? escape("" + a2.key) : b2.toString(36);
    }
    function R2(a2, b2, e2, d2, c2) {
      var k2 = typeof a2;
      if (k2 === "undefined" || k2 === "boolean")
        a2 = null;
      var h2 = false;
      if (a2 === null)
        h2 = true;
      else
        switch (k2) {
          case "string":
          case "number":
            h2 = true;
            break;
          case "object":
            switch (a2.$$typeof) {
              case l2:
              case n:
                h2 = true;
            }
        }
      if (h2)
        return h2 = a2, c2 = c2(h2), a2 = d2 === "" ? "." + Q(h2, 0) : d2, I2(c2) ? (e2 = "", a2 != null && (e2 = a2.replace(P2, "$&/") + "/"), R2(c2, b2, e2, "", function(a3) {
          return a3;
        })) : c2 != null && (O2(c2) && (c2 = N2(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P2, "$&/") + "/") + a2)), b2.push(c2)), 1;
      h2 = 0;
      d2 = d2 === "" ? "." : d2 + ":";
      if (I2(a2))
        for (var g2 = 0; g2 < a2.length; g2++) {
          k2 = a2[g2];
          var f2 = d2 + Q(k2, g2);
          h2 += R2(k2, b2, e2, f2, c2);
        }
      else if (f2 = A2(a2), typeof f2 === "function")
        for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; )
          k2 = k2.value, f2 = d2 + Q(k2, g2++), h2 += R2(k2, b2, e2, f2, c2);
      else if (k2 === "object")
        throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + (b2 === "[object Object]" ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
      return h2;
    }
    function S2(a2, b2, e2) {
      if (a2 == null)
        return a2;
      var d2 = [], c2 = 0;
      R2(a2, d2, "", "", function(a3) {
        return b2.call(e2, a3, c2++);
      });
      return d2;
    }
    function T2(a2) {
      if (a2._status === -1) {
        var b2 = a2._result;
        b2 = b2();
        b2.then(function(b3) {
          if (a2._status === 0 || a2._status === -1)
            a2._status = 1, a2._result = b3;
        }, function(b3) {
          if (a2._status === 0 || a2._status === -1)
            a2._status = 2, a2._result = b3;
        });
        a2._status === -1 && (a2._status = 0, a2._result = b2);
      }
      if (a2._status === 1)
        return a2._result.default;
      throw a2._result;
    }
    var U2 = { current: null };
    var V = { transition: null };
    var W2 = { ReactCurrentDispatcher: U2, ReactCurrentBatchConfig: V, ReactCurrentOwner: K2 };
    exports.Children = { map: S2, forEach: function(a2, b2, e2) {
      S2(a2, function() {
        b2.apply(this, arguments);
      }, e2);
    }, count: function(a2) {
      var b2 = 0;
      S2(a2, function() {
        b2++;
      });
      return b2;
    }, toArray: function(a2) {
      return S2(a2, function(a3) {
        return a3;
      }) || [];
    }, only: function(a2) {
      if (!O2(a2))
        throw Error("React.Children.only expected to receive a single React element child.");
      return a2;
    } };
    exports.Component = E2;
    exports.Fragment = p2;
    exports.Profiler = r;
    exports.PureComponent = G2;
    exports.StrictMode = q2;
    exports.Suspense = w2;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W2;
    exports.cloneElement = function(a2, b2, e2) {
      if (a2 === null || a2 === void 0)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
      var d2 = C2({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
      if (b2 != null) {
        b2.ref !== void 0 && (k2 = b2.ref, h2 = K2.current);
        b2.key !== void 0 && (c2 = "" + b2.key);
        if (a2.type && a2.type.defaultProps)
          var g2 = a2.type.defaultProps;
        for (f2 in b2)
          J.call(b2, f2) && !L2.hasOwnProperty(f2) && (d2[f2] = b2[f2] === void 0 && g2 !== void 0 ? g2[f2] : b2[f2]);
      }
      var f2 = arguments.length - 2;
      if (f2 === 1)
        d2.children = e2;
      else if (1 < f2) {
        g2 = Array(f2);
        for (var m2 = 0; m2 < f2; m2++)
          g2[m2] = arguments[m2 + 2];
        d2.children = g2;
      }
      return { $$typeof: l2, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
    };
    exports.createContext = function(a2) {
      a2 = { $$typeof: u2, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a2.Provider = { $$typeof: t2, _context: a2 };
      return a2.Consumer = a2;
    };
    exports.createElement = M2;
    exports.createFactory = function(a2) {
      var b2 = M2.bind(null, a2);
      b2.type = a2;
      return b2;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a2) {
      return { $$typeof: v2, render: a2 };
    };
    exports.isValidElement = O2;
    exports.lazy = function(a2) {
      return { $$typeof: y2, _payload: { _status: -1, _result: a2 }, _init: T2 };
    };
    exports.memo = function(a2, b2) {
      return { $$typeof: x2, type: a2, compare: b2 === void 0 ? null : b2 };
    };
    exports.startTransition = function(a2) {
      var b2 = V.transition;
      V.transition = {};
      try {
        a2();
      } finally {
        V.transition = b2;
      }
    };
    exports.unstable_act = function() {
      throw Error("act(...) is not supported in production builds of React.");
    };
    exports.useCallback = function(a2, b2) {
      return U2.current.useCallback(a2, b2);
    };
    exports.useContext = function(a2) {
      return U2.current.useContext(a2);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(a2) {
      return U2.current.useDeferredValue(a2);
    };
    exports.useEffect = function(a2, b2) {
      return U2.current.useEffect(a2, b2);
    };
    exports.useId = function() {
      return U2.current.useId();
    };
    exports.useImperativeHandle = function(a2, b2, e2) {
      return U2.current.useImperativeHandle(a2, b2, e2);
    };
    exports.useInsertionEffect = function(a2, b2) {
      return U2.current.useInsertionEffect(a2, b2);
    };
    exports.useLayoutEffect = function(a2, b2) {
      return U2.current.useLayoutEffect(a2, b2);
    };
    exports.useMemo = function(a2, b2) {
      return U2.current.useMemo(a2, b2);
    };
    exports.useReducer = function(a2, b2, e2) {
      return U2.current.useReducer(a2, b2, e2);
    };
    exports.useRef = function(a2) {
      return U2.current.useRef(a2);
    };
    exports.useState = function(a2) {
      return U2.current.useState(a2);
    };
    exports.useSyncExternalStore = function(a2, b2, e2) {
      return U2.current.useSyncExternalStore(a2, b2, e2);
    };
    exports.useTransition = function() {
      return U2.current.useTransition();
    };
    exports.version = "18.1.0";
  }
});
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    {
      module.exports = require_react_production_min();
    }
  }
});
var require_react_dom_server_legacy_browser_production_min = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server-legacy.browser.production.min.js"(exports) {
    var aa = require_react();
    function k2(a2) {
      for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
        b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
      return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var ba = false;
    function m2(a2, b2) {
      ba && (ba = false, b2[0] !== "<" && a2.push("<!-- -->"));
      return b2 === "<!-- -->" ? ba = true : a2.push(b2);
    }
    var q2 = Object.prototype.hasOwnProperty;
    var ca = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var da = {};
    var ea = {};
    function fa(a2) {
      if (q2.call(ea, a2))
        return true;
      if (q2.call(da, a2))
        return false;
      if (ca.test(a2))
        return ea[a2] = true;
      da[a2] = true;
      return false;
    }
    function r(a2, b2, c2, d2, f2, e2, g2) {
      this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
      this.attributeName = d2;
      this.attributeNamespace = f2;
      this.mustUseProperty = c2;
      this.propertyName = a2;
      this.type = b2;
      this.sanitizeURL = e2;
      this.removeEmptyString = g2;
    }
    var t2 = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
      t2[a2] = new r(a2, 0, false, a2, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
      var b2 = a2[0];
      t2[b2] = new r(b2, 1, false, a2[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
      t2[a2] = new r(a2, 2, false, a2.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
      t2[a2] = new r(a2, 2, false, a2, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
      t2[a2] = new r(a2, 3, false, a2.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a2) {
      t2[a2] = new r(a2, 3, true, a2, null, false, false);
    });
    ["capture", "download"].forEach(function(a2) {
      t2[a2] = new r(a2, 4, false, a2, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a2) {
      t2[a2] = new r(a2, 6, false, a2, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a2) {
      t2[a2] = new r(a2, 5, false, a2.toLowerCase(), null, false, false);
    });
    var ha = /[\-:]([a-z])/g;
    function ia(a2) {
      return a2[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
      var b2 = a2.replace(ha, ia);
      t2[b2] = new r(b2, 1, false, a2, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
      var b2 = a2.replace(ha, ia);
      t2[b2] = new r(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
      var b2 = a2.replace(ha, ia);
      t2[b2] = new r(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a2) {
      t2[a2] = new r(a2, 1, false, a2.toLowerCase(), null, false, false);
    });
    t2.xlinkHref = new r("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a2) {
      t2[a2] = new r(a2, 1, false, a2.toLowerCase(), null, true, true);
    });
    var u2 = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var ja = ["Webkit", "ms", "Moz", "O"];
    Object.keys(u2).forEach(function(a2) {
      ja.forEach(function(b2) {
        b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
        u2[b2] = u2[a2];
      });
    });
    var ka = /["'&<>]/;
    function v2(a2) {
      if (typeof a2 === "boolean" || typeof a2 === "number")
        return "" + a2;
      a2 = "" + a2;
      var b2 = ka.exec(a2);
      if (b2) {
        var c2 = "", d2, f2 = 0;
        for (d2 = b2.index; d2 < a2.length; d2++) {
          switch (a2.charCodeAt(d2)) {
            case 34:
              b2 = "&quot;";
              break;
            case 38:
              b2 = "&amp;";
              break;
            case 39:
              b2 = "&#x27;";
              break;
            case 60:
              b2 = "&lt;";
              break;
            case 62:
              b2 = "&gt;";
              break;
            default:
              continue;
          }
          f2 !== d2 && (c2 += a2.substring(f2, d2));
          f2 = d2 + 1;
          c2 += b2;
        }
        a2 = f2 !== d2 ? c2 + a2.substring(f2, d2) : c2;
      }
      return a2;
    }
    var la = /([A-Z])/g;
    var ma = /^ms-/;
    var na = Array.isArray;
    function w2(a2, b2) {
      return { insertionMode: a2, selectedValue: b2 };
    }
    function oa(a2, b2, c2) {
      switch (b2) {
        case "select":
          return w2(1, c2.value != null ? c2.value : c2.defaultValue);
        case "svg":
          return w2(2, null);
        case "math":
          return w2(3, null);
        case "foreignObject":
          return w2(1, null);
        case "table":
          return w2(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return w2(5, null);
        case "colgroup":
          return w2(7, null);
        case "tr":
          return w2(6, null);
      }
      return 4 <= a2.insertionMode || a2.insertionMode === 0 ? w2(1, null) : a2;
    }
    function pa(a2, b2) {
      b2 !== "" && a2.push(v2(b2), "<!-- -->");
    }
    var qa = /* @__PURE__ */ new Map();
    function ra(a2, b2, c2) {
      if (typeof c2 !== "object")
        throw Error(k2(62));
      b2 = true;
      for (var d2 in c2)
        if (q2.call(c2, d2)) {
          var f2 = c2[d2];
          if (f2 != null && typeof f2 !== "boolean" && f2 !== "") {
            if (d2.indexOf("--") === 0) {
              var e2 = v2(d2);
              f2 = v2(("" + f2).trim());
            } else {
              e2 = d2;
              var g2 = qa.get(e2);
              g2 !== void 0 ? e2 = g2 : (g2 = v2(e2.replace(la, "-$1").toLowerCase().replace(ma, "-ms-")), qa.set(e2, g2), e2 = g2);
              f2 = typeof f2 === "number" ? f2 === 0 || q2.call(u2, d2) ? "" + f2 : f2 + "px" : v2(("" + f2).trim());
            }
            b2 ? (b2 = false, a2.push(' style="', e2, ":", f2)) : a2.push(";", e2, ":", f2);
          }
        }
      b2 || a2.push('"');
    }
    function y2(a2, b2, c2, d2) {
      switch (c2) {
        case "style":
          ra(a2, b2, d2);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (!(2 < c2.length) || c2[0] !== "o" && c2[0] !== "O" || c2[1] !== "n" && c2[1] !== "N") {
        if (b2 = t2.hasOwnProperty(c2) ? t2[c2] : null, b2 !== null) {
          switch (typeof d2) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!b2.acceptsBooleans)
                return;
          }
          c2 = b2.attributeName;
          switch (b2.type) {
            case 3:
              d2 && a2.push(" ", c2, '=""');
              break;
            case 4:
              d2 === true ? a2.push(" ", c2, '=""') : d2 !== false && a2.push(" ", c2, '="', v2(d2), '"');
              break;
            case 5:
              isNaN(d2) || a2.push(" ", c2, '="', v2(d2), '"');
              break;
            case 6:
              !isNaN(d2) && 1 <= d2 && a2.push(" ", c2, '="', v2(d2), '"');
              break;
            default:
              b2.sanitizeURL && (d2 = "" + d2), a2.push(" ", c2, '="', v2(d2), '"');
          }
        } else if (fa(c2)) {
          switch (typeof d2) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (b2 = c2.toLowerCase().slice(0, 5), b2 !== "data-" && b2 !== "aria-")
                return;
          }
          a2.push(" ", c2, '="', v2(d2), '"');
        }
      }
    }
    function A2(a2, b2, c2) {
      if (b2 != null) {
        if (c2 != null)
          throw Error(k2(60));
        if (typeof b2 !== "object" || !("__html" in b2))
          throw Error(k2(61));
        b2 = b2.__html;
        b2 !== null && b2 !== void 0 && a2.push("" + b2);
      }
    }
    function sa(a2) {
      var b2 = "";
      aa.Children.forEach(a2, function(a3) {
        a3 != null && (b2 += a3);
      });
      return b2;
    }
    function ta(a2, b2, c2, d2) {
      a2.push(B2(c2));
      var f2 = c2 = null, e2;
      for (e2 in b2)
        if (q2.call(b2, e2)) {
          var g2 = b2[e2];
          if (g2 != null)
            switch (e2) {
              case "children":
                c2 = g2;
                break;
              case "dangerouslySetInnerHTML":
                f2 = g2;
                break;
              default:
                y2(a2, d2, e2, g2);
            }
        }
      a2.push(">");
      A2(a2, f2, c2);
      return typeof c2 === "string" ? (a2.push(v2(c2)), null) : c2;
    }
    var ua = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var va = /* @__PURE__ */ new Map();
    function B2(a2) {
      var b2 = va.get(a2);
      if (b2 === void 0) {
        if (!ua.test(a2))
          throw Error(k2(65, a2));
        b2 = "<" + a2;
        va.set(a2, b2);
      }
      return b2;
    }
    function wa(a2, b2, c2, d2, f2) {
      switch (b2) {
        case "select":
          a2.push(B2("select"));
          var e2 = null, g2 = null;
          for (n in c2)
            if (q2.call(c2, n)) {
              var h2 = c2[n];
              if (h2 != null)
                switch (n) {
                  case "children":
                    e2 = h2;
                    break;
                  case "dangerouslySetInnerHTML":
                    g2 = h2;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    y2(a2, d2, n, h2);
                }
            }
          a2.push(">");
          A2(a2, g2, e2);
          return e2;
        case "option":
          g2 = f2.selectedValue;
          a2.push(B2("option"));
          var l2 = h2 = null, p2 = null;
          var n = null;
          for (e2 in c2)
            if (q2.call(c2, e2) && (b2 = c2[e2], b2 != null))
              switch (e2) {
                case "children":
                  h2 = b2;
                  break;
                case "selected":
                  p2 = b2;
                  break;
                case "dangerouslySetInnerHTML":
                  n = b2;
                  break;
                case "value":
                  l2 = b2;
                default:
                  y2(a2, d2, e2, b2);
              }
          if (g2 != null)
            if (c2 = l2 !== null ? "" + l2 : sa(h2), na(g2))
              for (d2 = 0; d2 < g2.length; d2++) {
                if ("" + g2[d2] === c2) {
                  a2.push(' selected=""');
                  break;
                }
              }
            else
              "" + g2 === c2 && a2.push(' selected=""');
          else
            p2 && a2.push(' selected=""');
          a2.push(">");
          A2(a2, n, h2);
          return h2;
        case "textarea":
          a2.push(B2("textarea"));
          n = g2 = e2 = null;
          for (h2 in c2)
            if (q2.call(c2, h2) && (l2 = c2[h2], l2 != null))
              switch (h2) {
                case "children":
                  n = l2;
                  break;
                case "value":
                  e2 = l2;
                  break;
                case "defaultValue":
                  g2 = l2;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(k2(91));
                default:
                  y2(a2, d2, h2, l2);
              }
          e2 === null && g2 !== null && (e2 = g2);
          a2.push(">");
          if (n != null) {
            if (e2 != null)
              throw Error(k2(92));
            if (na(n) && 1 < n.length)
              throw Error(k2(93));
            e2 = "" + n;
          }
          typeof e2 === "string" && e2[0] === "\n" && a2.push("\n");
          e2 !== null && a2.push(v2("" + e2));
          return null;
        case "input":
          a2.push(B2("input"));
          l2 = n = h2 = e2 = null;
          for (g2 in c2)
            if (q2.call(c2, g2) && (p2 = c2[g2], p2 != null))
              switch (g2) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(k2(399, "input"));
                case "defaultChecked":
                  l2 = p2;
                  break;
                case "defaultValue":
                  h2 = p2;
                  break;
                case "checked":
                  n = p2;
                  break;
                case "value":
                  e2 = p2;
                  break;
                default:
                  y2(a2, d2, g2, p2);
              }
          n !== null ? y2(a2, d2, "checked", n) : l2 !== null && y2(a2, d2, "checked", l2);
          e2 !== null ? y2(a2, d2, "value", e2) : h2 !== null && y2(a2, d2, "value", h2);
          a2.push("/>");
          return null;
        case "menuitem":
          a2.push(B2("menuitem"));
          for (var z2 in c2)
            if (q2.call(c2, z2) && (e2 = c2[z2], e2 != null))
              switch (z2) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(k2(400));
                default:
                  y2(a2, d2, z2, e2);
              }
          a2.push(">");
          return null;
        case "listing":
        case "pre":
          a2.push(B2(b2));
          g2 = e2 = null;
          for (l2 in c2)
            if (q2.call(c2, l2) && (h2 = c2[l2], h2 != null))
              switch (l2) {
                case "children":
                  e2 = h2;
                  break;
                case "dangerouslySetInnerHTML":
                  g2 = h2;
                  break;
                default:
                  y2(a2, d2, l2, h2);
              }
          a2.push(">");
          if (g2 != null) {
            if (e2 != null)
              throw Error(k2(60));
            if (typeof g2 !== "object" || !("__html" in g2))
              throw Error(k2(61));
            c2 = g2.__html;
            c2 !== null && c2 !== void 0 && (typeof c2 === "string" && 0 < c2.length && c2[0] === "\n" ? a2.push("\n", c2) : a2.push("" + c2));
          }
          typeof e2 === "string" && e2[0] === "\n" && a2.push("\n");
          return e2;
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          a2.push(B2(b2));
          for (var C2 in c2)
            if (q2.call(c2, C2) && (e2 = c2[C2], e2 != null))
              switch (C2) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(k2(399, b2));
                default:
                  y2(a2, d2, C2, e2);
              }
          a2.push("/>");
          return null;
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return ta(a2, c2, b2, d2);
        case "html":
          return f2.insertionMode === 0 && a2.push("<!DOCTYPE html>"), ta(a2, c2, b2, d2);
        default:
          if (b2.indexOf("-") === -1 && typeof c2.is !== "string")
            return ta(a2, c2, b2, d2);
          a2.push(B2(b2));
          g2 = e2 = null;
          for (p2 in c2)
            if (q2.call(c2, p2) && (h2 = c2[p2], h2 != null))
              switch (p2) {
                case "children":
                  e2 = h2;
                  break;
                case "dangerouslySetInnerHTML":
                  g2 = h2;
                  break;
                case "style":
                  ra(a2, d2, h2);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                  break;
                default:
                  fa(p2) && typeof h2 !== "function" && typeof h2 !== "symbol" && a2.push(" ", p2, '="', v2(h2), '"');
              }
          a2.push(">");
          A2(a2, g2, e2);
          return e2;
      }
    }
    function xa(a2, b2, c2) {
      m2(a2, '<!--$?--><template id="');
      if (c2 === null)
        throw Error(k2(395));
      m2(a2, c2);
      return m2(a2, '"></template>');
    }
    function ya(a2, b2, c2, d2) {
      switch (c2.insertionMode) {
        case 0:
        case 1:
          return m2(a2, '<div hidden id="'), m2(a2, b2.segmentPrefix), b2 = d2.toString(16), m2(a2, b2), m2(a2, '">');
        case 2:
          return m2(a2, '<svg aria-hidden="true" style="display:none" id="'), m2(a2, b2.segmentPrefix), b2 = d2.toString(16), m2(a2, b2), m2(a2, '">');
        case 3:
          return m2(a2, '<math aria-hidden="true" style="display:none" id="'), m2(a2, b2.segmentPrefix), b2 = d2.toString(16), m2(a2, b2), m2(a2, '">');
        case 4:
          return m2(a2, '<table hidden id="'), m2(a2, b2.segmentPrefix), b2 = d2.toString(16), m2(a2, b2), m2(a2, '">');
        case 5:
          return m2(a2, '<table hidden><tbody id="'), m2(a2, b2.segmentPrefix), b2 = d2.toString(16), m2(a2, b2), m2(a2, '">');
        case 6:
          return m2(a2, '<table hidden><tr id="'), m2(a2, b2.segmentPrefix), b2 = d2.toString(16), m2(a2, b2), m2(a2, '">');
        case 7:
          return m2(a2, '<table hidden><colgroup id="'), m2(a2, b2.segmentPrefix), b2 = d2.toString(16), m2(a2, b2), m2(a2, '">');
        default:
          throw Error(k2(397));
      }
    }
    function za(a2, b2) {
      switch (b2.insertionMode) {
        case 0:
        case 1:
          return m2(a2, "</div>");
        case 2:
          return m2(a2, "</svg>");
        case 3:
          return m2(a2, "</math>");
        case 4:
          return m2(a2, "</table>");
        case 5:
          return m2(a2, "</tbody></table>");
        case 6:
          return m2(a2, "</tr></table>");
        case 7:
          return m2(a2, "</colgroup></table>");
        default:
          throw Error(k2(397));
      }
    }
    function Aa(a2, b2) {
      b2 = b2 === void 0 ? "" : b2;
      return { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: b2 + "P:", segmentPrefix: b2 + "S:", boundaryPrefix: b2 + "B:", idPrefix: b2, nextSuspenseID: 0, sentCompleteSegmentFunction: false, sentCompleteBoundaryFunction: false, sentClientRenderFunction: false, generateStaticMarkup: a2 };
    }
    var D2 = Object.assign;
    var Ba = Symbol.for("react.element");
    var Ca = Symbol.for("react.portal");
    var Da = Symbol.for("react.fragment");
    var Ea = Symbol.for("react.strict_mode");
    var Fa = Symbol.for("react.profiler");
    var Ga = Symbol.for("react.provider");
    var Ha = Symbol.for("react.context");
    var Ia = Symbol.for("react.forward_ref");
    var Ja = Symbol.for("react.suspense");
    var Ka = Symbol.for("react.suspense_list");
    var La = Symbol.for("react.memo");
    var Ma = Symbol.for("react.lazy");
    var Na = Symbol.for("react.scope");
    var Oa = Symbol.for("react.debug_trace_mode");
    var Pa = Symbol.for("react.legacy_hidden");
    var Qa = Symbol.for("react.default_value");
    var Ra = Symbol.iterator;
    function Sa(a2) {
      if (a2 == null)
        return null;
      if (typeof a2 === "function")
        return a2.displayName || a2.name || null;
      if (typeof a2 === "string")
        return a2;
      switch (a2) {
        case Da:
          return "Fragment";
        case Ca:
          return "Portal";
        case Fa:
          return "Profiler";
        case Ea:
          return "StrictMode";
        case Ja:
          return "Suspense";
        case Ka:
          return "SuspenseList";
      }
      if (typeof a2 === "object")
        switch (a2.$$typeof) {
          case Ha:
            return (a2.displayName || "Context") + ".Consumer";
          case Ga:
            return (a2._context.displayName || "Context") + ".Provider";
          case Ia:
            var b2 = a2.render;
            a2 = a2.displayName;
            a2 || (a2 = b2.displayName || b2.name || "", a2 = a2 !== "" ? "ForwardRef(" + a2 + ")" : "ForwardRef");
            return a2;
          case La:
            return b2 = a2.displayName || null, b2 !== null ? b2 : Sa(a2.type) || "Memo";
          case Ma:
            b2 = a2._payload;
            a2 = a2._init;
            try {
              return Sa(a2(b2));
            } catch (c2) {
            }
        }
      return null;
    }
    var Ta = {};
    function Ua(a2, b2) {
      a2 = a2.contextTypes;
      if (!a2)
        return Ta;
      var c2 = {}, d2;
      for (d2 in a2)
        c2[d2] = b2[d2];
      return c2;
    }
    var E2 = null;
    function F2(a2, b2) {
      if (a2 !== b2) {
        a2.context._currentValue2 = a2.parentValue;
        a2 = a2.parent;
        var c2 = b2.parent;
        if (a2 === null) {
          if (c2 !== null)
            throw Error(k2(401));
        } else {
          if (c2 === null)
            throw Error(k2(401));
          F2(a2, c2);
        }
        b2.context._currentValue2 = b2.value;
      }
    }
    function Va(a2) {
      a2.context._currentValue2 = a2.parentValue;
      a2 = a2.parent;
      a2 !== null && Va(a2);
    }
    function Wa(a2) {
      var b2 = a2.parent;
      b2 !== null && Wa(b2);
      a2.context._currentValue2 = a2.value;
    }
    function Xa(a2, b2) {
      a2.context._currentValue2 = a2.parentValue;
      a2 = a2.parent;
      if (a2 === null)
        throw Error(k2(402));
      a2.depth === b2.depth ? F2(a2, b2) : Xa(a2, b2);
    }
    function Ya(a2, b2) {
      var c2 = b2.parent;
      if (c2 === null)
        throw Error(k2(402));
      a2.depth === c2.depth ? F2(a2, c2) : Ya(a2, c2);
      b2.context._currentValue2 = b2.value;
    }
    function G2(a2) {
      var b2 = E2;
      b2 !== a2 && (b2 === null ? Wa(a2) : a2 === null ? Va(b2) : b2.depth === a2.depth ? F2(b2, a2) : b2.depth > a2.depth ? Xa(b2, a2) : Ya(b2, a2), E2 = a2);
    }
    var Za = { isMounted: function() {
      return false;
    }, enqueueSetState: function(a2, b2) {
      a2 = a2._reactInternals;
      a2.queue !== null && a2.queue.push(b2);
    }, enqueueReplaceState: function(a2, b2) {
      a2 = a2._reactInternals;
      a2.replace = true;
      a2.queue = [b2];
    }, enqueueForceUpdate: function() {
    } };
    function $a(a2, b2, c2, d2) {
      var f2 = a2.state !== void 0 ? a2.state : null;
      a2.updater = Za;
      a2.props = c2;
      a2.state = f2;
      var e2 = { queue: [], replace: false };
      a2._reactInternals = e2;
      var g2 = b2.contextType;
      a2.context = typeof g2 === "object" && g2 !== null ? g2._currentValue2 : d2;
      g2 = b2.getDerivedStateFromProps;
      typeof g2 === "function" && (g2 = g2(c2, f2), f2 = g2 === null || g2 === void 0 ? f2 : D2({}, f2, g2), a2.state = f2);
      if (typeof b2.getDerivedStateFromProps !== "function" && typeof a2.getSnapshotBeforeUpdate !== "function" && (typeof a2.UNSAFE_componentWillMount === "function" || typeof a2.componentWillMount === "function"))
        if (b2 = a2.state, typeof a2.componentWillMount === "function" && a2.componentWillMount(), typeof a2.UNSAFE_componentWillMount === "function" && a2.UNSAFE_componentWillMount(), b2 !== a2.state && Za.enqueueReplaceState(a2, a2.state, null), e2.queue !== null && 0 < e2.queue.length)
          if (b2 = e2.queue, g2 = e2.replace, e2.queue = null, e2.replace = false, g2 && b2.length === 1)
            a2.state = b2[0];
          else {
            e2 = g2 ? b2[0] : a2.state;
            f2 = true;
            for (g2 = g2 ? 1 : 0; g2 < b2.length; g2++) {
              var h2 = b2[g2];
              h2 = typeof h2 === "function" ? h2.call(a2, e2, c2, d2) : h2;
              h2 != null && (f2 ? (f2 = false, e2 = D2({}, e2, h2)) : D2(e2, h2));
            }
            a2.state = e2;
          }
        else
          e2.queue = null;
    }
    var ab = { id: 1, overflow: "" };
    function bb(a2, b2, c2) {
      var d2 = a2.id;
      a2 = a2.overflow;
      var f2 = 32 - H2(d2) - 1;
      d2 &= ~(1 << f2);
      c2 += 1;
      var e2 = 32 - H2(b2) + f2;
      if (30 < e2) {
        var g2 = f2 - f2 % 5;
        e2 = (d2 & (1 << g2) - 1).toString(32);
        d2 >>= g2;
        f2 -= g2;
        return { id: 1 << 32 - H2(b2) + f2 | c2 << f2 | d2, overflow: e2 + a2 };
      }
      return { id: 1 << e2 | c2 << f2 | d2, overflow: a2 };
    }
    var H2 = Math.clz32 ? Math.clz32 : cb;
    var db = Math.log;
    var eb = Math.LN2;
    function cb(a2) {
      a2 >>>= 0;
      return a2 === 0 ? 32 : 31 - (db(a2) / eb | 0) | 0;
    }
    function fb(a2, b2) {
      return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
    }
    var gb = typeof Object.is === "function" ? Object.is : fb;
    var I2 = null;
    var hb = null;
    var J = null;
    var K2 = null;
    var L2 = false;
    var M2 = false;
    var N2 = 0;
    var O2 = null;
    var P2 = 0;
    function Q() {
      if (I2 === null)
        throw Error(k2(321));
      return I2;
    }
    function ib() {
      if (0 < P2)
        throw Error(k2(312));
      return { memoizedState: null, queue: null, next: null };
    }
    function jb() {
      K2 === null ? J === null ? (L2 = false, J = K2 = ib()) : (L2 = true, K2 = J) : K2.next === null ? (L2 = false, K2 = K2.next = ib()) : (L2 = true, K2 = K2.next);
      return K2;
    }
    function kb() {
      hb = I2 = null;
      M2 = false;
      J = null;
      P2 = 0;
      K2 = O2 = null;
    }
    function lb(a2, b2) {
      return typeof b2 === "function" ? b2(a2) : b2;
    }
    function mb(a2, b2, c2) {
      I2 = Q();
      K2 = jb();
      if (L2) {
        var d2 = K2.queue;
        b2 = d2.dispatch;
        if (O2 !== null && (c2 = O2.get(d2), c2 !== void 0)) {
          O2.delete(d2);
          d2 = K2.memoizedState;
          do
            d2 = a2(d2, c2.action), c2 = c2.next;
          while (c2 !== null);
          K2.memoizedState = d2;
          return [d2, b2];
        }
        return [K2.memoizedState, b2];
      }
      a2 = a2 === lb ? typeof b2 === "function" ? b2() : b2 : c2 !== void 0 ? c2(b2) : b2;
      K2.memoizedState = a2;
      a2 = K2.queue = { last: null, dispatch: null };
      a2 = a2.dispatch = nb.bind(null, I2, a2);
      return [K2.memoizedState, a2];
    }
    function ob(a2, b2) {
      I2 = Q();
      K2 = jb();
      b2 = b2 === void 0 ? null : b2;
      if (K2 !== null) {
        var c2 = K2.memoizedState;
        if (c2 !== null && b2 !== null) {
          var d2 = c2[1];
          a:
            if (d2 === null)
              d2 = false;
            else {
              for (var f2 = 0; f2 < d2.length && f2 < b2.length; f2++)
                if (!gb(b2[f2], d2[f2])) {
                  d2 = false;
                  break a;
                }
              d2 = true;
            }
          if (d2)
            return c2[0];
        }
      }
      a2 = a2();
      K2.memoizedState = [a2, b2];
      return a2;
    }
    function nb(a2, b2, c2) {
      if (25 <= P2)
        throw Error(k2(301));
      if (a2 === I2)
        if (M2 = true, a2 = { action: c2, next: null }, O2 === null && (O2 = /* @__PURE__ */ new Map()), c2 = O2.get(b2), c2 === void 0)
          O2.set(b2, a2);
        else {
          for (b2 = c2; b2.next !== null; )
            b2 = b2.next;
          b2.next = a2;
        }
    }
    function pb() {
      throw Error(k2(394));
    }
    function R2() {
    }
    var qb = { readContext: function(a2) {
      return a2._currentValue2;
    }, useContext: function(a2) {
      Q();
      return a2._currentValue2;
    }, useMemo: ob, useReducer: mb, useRef: function(a2) {
      I2 = Q();
      K2 = jb();
      var b2 = K2.memoizedState;
      return b2 === null ? (a2 = { current: a2 }, K2.memoizedState = a2) : b2;
    }, useState: function(a2) {
      return mb(lb, a2);
    }, useInsertionEffect: R2, useLayoutEffect: function() {
    }, useCallback: function(a2, b2) {
      return ob(function() {
        return a2;
      }, b2);
    }, useImperativeHandle: R2, useEffect: R2, useDebugValue: R2, useDeferredValue: function(a2) {
      Q();
      return a2;
    }, useTransition: function() {
      Q();
      return [
        false,
        pb
      ];
    }, useId: function() {
      var a2 = hb.treeContext;
      var b2 = a2.overflow;
      a2 = a2.id;
      a2 = (a2 & ~(1 << 32 - H2(a2) - 1)).toString(32) + b2;
      var c2 = S2;
      if (c2 === null)
        throw Error(k2(404));
      b2 = N2++;
      a2 = ":" + c2.idPrefix + "R" + a2;
      0 < b2 && (a2 += "H" + b2.toString(32));
      return a2 + ":";
    }, useMutableSource: function(a2, b2) {
      Q();
      return b2(a2._source);
    }, useSyncExternalStore: function(a2, b2, c2) {
      if (c2 === void 0)
        throw Error(k2(407));
      return c2();
    } };
    var S2 = null;
    var rb = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
    function sb(a2) {
      console.error(a2);
    }
    function T2() {
    }
    function tb(a2, b2, c2, d2, f2, e2, g2, h2, l2) {
      var p2 = [], n = /* @__PURE__ */ new Set();
      b2 = { destination: null, responseState: b2, progressiveChunkSize: d2 === void 0 ? 12800 : d2, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: n, pingedTasks: p2, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: f2 === void 0 ? sb : f2, onAllReady: e2 === void 0 ? T2 : e2, onShellReady: g2 === void 0 ? T2 : g2, onShellError: h2 === void 0 ? T2 : h2, onFatalError: l2 === void 0 ? T2 : l2 };
      c2 = U2(b2, 0, null, c2);
      c2.parentFlushed = true;
      a2 = ub(b2, a2, null, c2, n, Ta, null, ab);
      p2.push(a2);
      return b2;
    }
    function ub(a2, b2, c2, d2, f2, e2, g2, h2) {
      a2.allPendingTasks++;
      c2 === null ? a2.pendingRootTasks++ : c2.pendingTasks++;
      var l2 = { node: b2, ping: function() {
        var b3 = a2.pingedTasks;
        b3.push(l2);
        b3.length === 1 && vb(a2);
      }, blockedBoundary: c2, blockedSegment: d2, abortSet: f2, legacyContext: e2, context: g2, treeContext: h2 };
      f2.add(l2);
      return l2;
    }
    function U2(a2, b2, c2, d2) {
      return { status: 0, id: -1, index: b2, parentFlushed: false, chunks: [], children: [], formatContext: d2, boundary: c2 };
    }
    function V(a2, b2) {
      a2 = a2.onError;
      a2(b2);
    }
    function W2(a2, b2) {
      var c2 = a2.onShellError;
      c2(b2);
      c2 = a2.onFatalError;
      c2(b2);
      a2.destination !== null ? (a2.status = 2, a2.destination.destroy(b2)) : (a2.status = 1, a2.fatalError = b2);
    }
    function wb(a2, b2, c2, d2, f2) {
      I2 = {};
      hb = b2;
      N2 = 0;
      for (a2 = c2(d2, f2); M2; )
        M2 = false, N2 = 0, P2 += 1, K2 = null, a2 = c2(d2, f2);
      kb();
      return a2;
    }
    function xb(a2, b2, c2, d2) {
      var f2 = c2.render(), e2 = d2.childContextTypes;
      if (e2 !== null && e2 !== void 0) {
        var g2 = b2.legacyContext;
        if (typeof c2.getChildContext !== "function")
          d2 = g2;
        else {
          c2 = c2.getChildContext();
          for (var h2 in c2)
            if (!(h2 in e2))
              throw Error(k2(108, Sa(d2) || "Unknown", h2));
          d2 = D2({}, g2, c2);
        }
        b2.legacyContext = d2;
        X(a2, b2, f2);
        b2.legacyContext = g2;
      } else
        X(a2, b2, f2);
    }
    function yb(a2, b2) {
      if (a2 && a2.defaultProps) {
        b2 = D2({}, b2);
        a2 = a2.defaultProps;
        for (var c2 in a2)
          b2[c2] === void 0 && (b2[c2] = a2[c2]);
        return b2;
      }
      return b2;
    }
    function zb(a2, b2, c2, d2, f2) {
      if (typeof c2 === "function")
        if (c2.prototype && c2.prototype.isReactComponent) {
          f2 = Ua(c2, b2.legacyContext);
          var e2 = c2.contextType;
          e2 = new c2(d2, typeof e2 === "object" && e2 !== null ? e2._currentValue2 : f2);
          $a(e2, c2, d2, f2);
          xb(a2, b2, e2, c2);
        } else {
          e2 = Ua(c2, b2.legacyContext);
          f2 = wb(a2, b2, c2, d2, e2);
          var g2 = N2 !== 0;
          if (typeof f2 === "object" && f2 !== null && typeof f2.render === "function" && f2.$$typeof === void 0)
            $a(f2, c2, d2, e2), xb(a2, b2, f2, c2);
          else if (g2) {
            d2 = b2.treeContext;
            b2.treeContext = bb(d2, 1, 0);
            try {
              X(a2, b2, f2);
            } finally {
              b2.treeContext = d2;
            }
          } else
            X(a2, b2, f2);
        }
      else if (typeof c2 === "string")
        switch (f2 = b2.blockedSegment, e2 = wa(f2.chunks, c2, d2, a2.responseState, f2.formatContext), g2 = f2.formatContext, f2.formatContext = oa(g2, c2, d2), Ab(a2, b2, e2), f2.formatContext = g2, c2) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            f2.chunks.push("</", c2, ">");
        }
      else {
        switch (c2) {
          case Pa:
          case Oa:
          case Ea:
          case Fa:
          case Da:
            X(a2, b2, d2.children);
            return;
          case Ka:
            X(a2, b2, d2.children);
            return;
          case Na:
            throw Error(k2(343));
          case Ja:
            a: {
              c2 = b2.blockedBoundary;
              f2 = b2.blockedSegment;
              e2 = d2.fallback;
              d2 = d2.children;
              g2 = /* @__PURE__ */ new Set();
              var h2 = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g2 }, l2 = U2(a2, f2.chunks.length, h2, f2.formatContext);
              f2.children.push(l2);
              var p2 = U2(a2, 0, null, f2.formatContext);
              p2.parentFlushed = true;
              b2.blockedBoundary = h2;
              b2.blockedSegment = p2;
              try {
                if (Ab(a2, b2, d2), p2.status = 1, Y2(h2, p2), h2.pendingTasks === 0)
                  break a;
              } catch (n) {
                p2.status = 4, V(a2, n), h2.forceClientRender = true;
              } finally {
                b2.blockedBoundary = c2, b2.blockedSegment = f2;
              }
              b2 = ub(a2, e2, c2, l2, g2, b2.legacyContext, b2.context, b2.treeContext);
              a2.pingedTasks.push(b2);
            }
            return;
        }
        if (typeof c2 === "object" && c2 !== null)
          switch (c2.$$typeof) {
            case Ia:
              d2 = wb(a2, b2, c2.render, d2, f2);
              if (N2 !== 0) {
                c2 = b2.treeContext;
                b2.treeContext = bb(c2, 1, 0);
                try {
                  X(a2, b2, d2);
                } finally {
                  b2.treeContext = c2;
                }
              } else
                X(a2, b2, d2);
              return;
            case La:
              c2 = c2.type;
              d2 = yb(c2, d2);
              zb(a2, b2, c2, d2, f2);
              return;
            case Ga:
              f2 = d2.children;
              c2 = c2._context;
              d2 = d2.value;
              e2 = c2._currentValue2;
              c2._currentValue2 = d2;
              g2 = E2;
              E2 = d2 = { parent: g2, depth: g2 === null ? 0 : g2.depth + 1, context: c2, parentValue: e2, value: d2 };
              b2.context = d2;
              X(a2, b2, f2);
              a2 = E2;
              if (a2 === null)
                throw Error(k2(403));
              d2 = a2.parentValue;
              a2.context._currentValue2 = d2 === Qa ? a2.context._defaultValue : d2;
              a2 = E2 = a2.parent;
              b2.context = a2;
              return;
            case Ha:
              d2 = d2.children;
              d2 = d2(c2._currentValue2);
              X(a2, b2, d2);
              return;
            case Ma:
              f2 = c2._init;
              c2 = f2(c2._payload);
              d2 = yb(c2, d2);
              zb(a2, b2, c2, d2, void 0);
              return;
          }
        throw Error(k2(130, c2 == null ? c2 : typeof c2, ""));
      }
    }
    function X(a2, b2, c2) {
      b2.node = c2;
      if (typeof c2 === "object" && c2 !== null) {
        switch (c2.$$typeof) {
          case Ba:
            zb(a2, b2, c2.type, c2.props, c2.ref);
            return;
          case Ca:
            throw Error(k2(257));
          case Ma:
            var d2 = c2._init;
            c2 = d2(c2._payload);
            X(a2, b2, c2);
            return;
        }
        if (na(c2)) {
          Bb(a2, b2, c2);
          return;
        }
        c2 === null || typeof c2 !== "object" ? d2 = null : (d2 = Ra && c2[Ra] || c2["@@iterator"], d2 = typeof d2 === "function" ? d2 : null);
        if (d2 && (d2 = d2.call(c2))) {
          c2 = d2.next();
          if (!c2.done) {
            var f2 = [];
            do
              f2.push(c2.value), c2 = d2.next();
            while (!c2.done);
            Bb(a2, b2, f2);
          }
          return;
        }
        a2 = Object.prototype.toString.call(c2);
        throw Error(k2(31, a2 === "[object Object]" ? "object with keys {" + Object.keys(c2).join(", ") + "}" : a2));
      }
      typeof c2 === "string" ? (b2 = b2.blockedSegment.chunks, a2.responseState.generateStaticMarkup ? b2.push(v2(c2)) : pa(b2, c2)) : typeof c2 === "number" && (b2 = b2.blockedSegment.chunks, c2 = "" + c2, a2.responseState.generateStaticMarkup ? b2.push(v2(c2)) : pa(b2, c2));
    }
    function Bb(a2, b2, c2) {
      for (var d2 = c2.length, f2 = 0; f2 < d2; f2++) {
        var e2 = b2.treeContext;
        b2.treeContext = bb(e2, d2, f2);
        try {
          Ab(a2, b2, c2[f2]);
        } finally {
          b2.treeContext = e2;
        }
      }
    }
    function Ab(a2, b2, c2) {
      var d2 = b2.blockedSegment.formatContext, f2 = b2.legacyContext, e2 = b2.context;
      try {
        return X(a2, b2, c2);
      } catch (l2) {
        if (kb(), typeof l2 === "object" && l2 !== null && typeof l2.then === "function") {
          c2 = l2;
          var g2 = b2.blockedSegment, h2 = U2(a2, g2.chunks.length, null, g2.formatContext);
          g2.children.push(h2);
          a2 = ub(a2, b2.node, b2.blockedBoundary, h2, b2.abortSet, b2.legacyContext, b2.context, b2.treeContext).ping;
          c2.then(a2, a2);
          b2.blockedSegment.formatContext = d2;
          b2.legacyContext = f2;
          b2.context = e2;
          G2(e2);
        } else
          throw b2.blockedSegment.formatContext = d2, b2.legacyContext = f2, b2.context = e2, G2(e2), l2;
      }
    }
    function Cb(a2) {
      var b2 = a2.blockedBoundary;
      a2 = a2.blockedSegment;
      a2.status = 3;
      Db(this, b2, a2);
    }
    function Eb(a2) {
      var b2 = a2.blockedBoundary;
      a2.blockedSegment.status = 3;
      b2 === null ? (this.allPendingTasks--, this.status !== 2 && (this.status = 2, this.destination !== null && this.destination.push(null))) : (b2.pendingTasks--, b2.forceClientRender || (b2.forceClientRender = true, b2.parentFlushed && this.clientRenderedBoundaries.push(b2)), b2.fallbackAbortableTasks.forEach(Eb, this), b2.fallbackAbortableTasks.clear(), this.allPendingTasks--, this.allPendingTasks === 0 && (a2 = this.onAllReady, a2()));
    }
    function Y2(a2, b2) {
      if (b2.chunks.length === 0 && b2.children.length === 1 && b2.children[0].boundary === null) {
        var c2 = b2.children[0];
        c2.id = b2.id;
        c2.parentFlushed = true;
        c2.status === 1 && Y2(a2, c2);
      } else
        a2.completedSegments.push(b2);
    }
    function Db(a2, b2, c2) {
      if (b2 === null) {
        if (c2.parentFlushed) {
          if (a2.completedRootSegment !== null)
            throw Error(k2(389));
          a2.completedRootSegment = c2;
        }
        a2.pendingRootTasks--;
        a2.pendingRootTasks === 0 && (a2.onShellError = T2, b2 = a2.onShellReady, b2());
      } else
        b2.pendingTasks--, b2.forceClientRender || (b2.pendingTasks === 0 ? (c2.parentFlushed && c2.status === 1 && Y2(b2, c2), b2.parentFlushed && a2.completedBoundaries.push(b2), b2.fallbackAbortableTasks.forEach(Cb, a2), b2.fallbackAbortableTasks.clear()) : c2.parentFlushed && c2.status === 1 && (Y2(b2, c2), b2.completedSegments.length === 1 && b2.parentFlushed && a2.partialBoundaries.push(b2)));
      a2.allPendingTasks--;
      a2.allPendingTasks === 0 && (a2 = a2.onAllReady, a2());
    }
    function vb(a2) {
      if (a2.status !== 2) {
        var b2 = E2, c2 = rb.current;
        rb.current = qb;
        var d2 = S2;
        S2 = a2.responseState;
        try {
          var f2 = a2.pingedTasks, e2;
          for (e2 = 0; e2 < f2.length; e2++) {
            var g2 = f2[e2];
            var h2 = a2, l2 = g2.blockedSegment;
            if (l2.status === 0) {
              G2(g2.context);
              try {
                X(h2, g2, g2.node), g2.abortSet.delete(g2), l2.status = 1, Db(h2, g2.blockedBoundary, l2);
              } catch (x2) {
                if (kb(), typeof x2 === "object" && x2 !== null && typeof x2.then === "function") {
                  var p2 = g2.ping;
                  x2.then(p2, p2);
                } else {
                  g2.abortSet.delete(g2);
                  l2.status = 4;
                  var n = g2.blockedBoundary, z2 = x2;
                  V(h2, z2);
                  n === null ? W2(h2, z2) : (n.pendingTasks--, n.forceClientRender || (n.forceClientRender = true, n.parentFlushed && h2.clientRenderedBoundaries.push(n)));
                  h2.allPendingTasks--;
                  if (h2.allPendingTasks === 0) {
                    var C2 = h2.onAllReady;
                    C2();
                  }
                }
              } finally {
              }
            }
          }
          f2.splice(0, e2);
          a2.destination !== null && Fb(a2, a2.destination);
        } catch (x2) {
          V(a2, x2), W2(a2, x2);
        } finally {
          S2 = d2, rb.current = c2, c2 === qb && G2(b2);
        }
      }
    }
    function Z(a2, b2, c2) {
      c2.parentFlushed = true;
      switch (c2.status) {
        case 0:
          var d2 = c2.id = a2.nextSegmentId++;
          a2 = a2.responseState;
          m2(b2, '<template id="');
          m2(b2, a2.placeholderPrefix);
          a2 = d2.toString(16);
          m2(b2, a2);
          return m2(b2, '"></template>');
        case 1:
          c2.status = 2;
          var f2 = true;
          d2 = c2.chunks;
          var e2 = 0;
          c2 = c2.children;
          for (var g2 = 0; g2 < c2.length; g2++) {
            for (f2 = c2[g2]; e2 < f2.index; e2++)
              m2(b2, d2[e2]);
            f2 = Gb(a2, b2, f2);
          }
          for (; e2 < d2.length - 1; e2++)
            m2(b2, d2[e2]);
          e2 < d2.length && (f2 = m2(b2, d2[e2]));
          return f2;
        default:
          throw Error(k2(390));
      }
    }
    function Gb(a2, b2, c2) {
      var d2 = c2.boundary;
      if (d2 === null)
        return Z(a2, b2, c2);
      d2.parentFlushed = true;
      if (d2.forceClientRender)
        return a2.responseState.generateStaticMarkup || m2(b2, "<!--$!-->"), Z(a2, b2, c2), a2 = a2.responseState.generateStaticMarkup ? true : m2(b2, "<!--/$-->"), a2;
      if (0 < d2.pendingTasks) {
        d2.rootSegmentID = a2.nextSegmentId++;
        0 < d2.completedSegments.length && a2.partialBoundaries.push(d2);
        var f2 = a2.responseState;
        var e2 = f2.nextSuspenseID++;
        f2 = f2.boundaryPrefix + e2.toString(16);
        d2 = d2.id = f2;
        xa(b2, a2.responseState, d2);
        Z(a2, b2, c2);
        return m2(b2, "<!--/$-->");
      }
      if (d2.byteSize > a2.progressiveChunkSize)
        return d2.rootSegmentID = a2.nextSegmentId++, a2.completedBoundaries.push(d2), xa(b2, a2.responseState, d2.id), Z(a2, b2, c2), m2(b2, "<!--/$-->");
      a2.responseState.generateStaticMarkup || m2(b2, "<!--$-->");
      c2 = d2.completedSegments;
      if (c2.length !== 1)
        throw Error(k2(391));
      Gb(a2, b2, c2[0]);
      a2 = a2.responseState.generateStaticMarkup ? true : m2(b2, "<!--/$-->");
      return a2;
    }
    function Hb(a2, b2, c2) {
      ya(b2, a2.responseState, c2.formatContext, c2.id);
      Gb(a2, b2, c2);
      return za(b2, c2.formatContext);
    }
    function Ib(a2, b2, c2) {
      for (var d2 = c2.completedSegments, f2 = 0; f2 < d2.length; f2++)
        Jb(a2, b2, c2, d2[f2]);
      d2.length = 0;
      a2 = a2.responseState;
      d2 = c2.id;
      c2 = c2.rootSegmentID;
      m2(b2, a2.startInlineScript);
      a2.sentCompleteBoundaryFunction ? m2(b2, '$RC("') : (a2.sentCompleteBoundaryFunction = true, m2(b2, 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'));
      if (d2 === null)
        throw Error(k2(395));
      c2 = c2.toString(16);
      m2(b2, d2);
      m2(b2, '","');
      m2(b2, a2.segmentPrefix);
      m2(b2, c2);
      return m2(b2, '")<\/script>');
    }
    function Jb(a2, b2, c2, d2) {
      if (d2.status === 2)
        return true;
      var f2 = d2.id;
      if (f2 === -1) {
        if ((d2.id = c2.rootSegmentID) === -1)
          throw Error(k2(392));
        return Hb(a2, b2, d2);
      }
      Hb(a2, b2, d2);
      a2 = a2.responseState;
      m2(b2, a2.startInlineScript);
      a2.sentCompleteSegmentFunction ? m2(b2, '$RS("') : (a2.sentCompleteSegmentFunction = true, m2(b2, 'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'));
      m2(b2, a2.segmentPrefix);
      f2 = f2.toString(16);
      m2(b2, f2);
      m2(b2, '","');
      m2(b2, a2.placeholderPrefix);
      m2(b2, f2);
      return m2(b2, '")<\/script>');
    }
    function Fb(a2, b2) {
      try {
        var c2 = a2.completedRootSegment;
        if (c2 !== null && a2.pendingRootTasks === 0) {
          Gb(a2, b2, c2);
          a2.completedRootSegment = null;
          var d2 = a2.responseState.bootstrapChunks;
          for (c2 = 0; c2 < d2.length - 1; c2++)
            m2(b2, d2[c2]);
          c2 < d2.length && m2(b2, d2[c2]);
        }
        var f2 = a2.clientRenderedBoundaries, e2;
        for (e2 = 0; e2 < f2.length; e2++) {
          d2 = b2;
          var g2 = a2.responseState, h2 = f2[e2].id;
          m2(d2, g2.startInlineScript);
          g2.sentClientRenderFunction ? m2(d2, '$RX("') : (g2.sentClientRenderFunction = true, m2(d2, 'function $RX(a){if(a=document.getElementById(a))a=a.previousSibling,a.data="$!",a._reactRetry&&a._reactRetry()};$RX("'));
          if (h2 === null)
            throw Error(k2(395));
          m2(d2, h2);
          if (!m2(d2, '")<\/script>')) {
            a2.destination = null;
            e2++;
            f2.splice(0, e2);
            return;
          }
        }
        f2.splice(0, e2);
        var l2 = a2.completedBoundaries;
        for (e2 = 0; e2 < l2.length; e2++)
          if (!Ib(a2, b2, l2[e2])) {
            a2.destination = null;
            e2++;
            l2.splice(0, e2);
            return;
          }
        l2.splice(0, e2);
        var p2 = a2.partialBoundaries;
        for (e2 = 0; e2 < p2.length; e2++) {
          var n = p2[e2];
          a: {
            f2 = a2;
            g2 = b2;
            var z2 = n.completedSegments;
            for (h2 = 0; h2 < z2.length; h2++)
              if (!Jb(f2, g2, n, z2[h2])) {
                h2++;
                z2.splice(0, h2);
                var C2 = false;
                break a;
              }
            z2.splice(0, h2);
            C2 = true;
          }
          if (!C2) {
            a2.destination = null;
            e2++;
            p2.splice(0, e2);
            return;
          }
        }
        p2.splice(0, e2);
        var x2 = a2.completedBoundaries;
        for (e2 = 0; e2 < x2.length; e2++)
          if (!Ib(a2, b2, x2[e2])) {
            a2.destination = null;
            e2++;
            x2.splice(0, e2);
            return;
          }
        x2.splice(0, e2);
      } finally {
        a2.allPendingTasks === 0 && a2.pingedTasks.length === 0 && a2.clientRenderedBoundaries.length === 0 && a2.completedBoundaries.length === 0 && b2.push(null);
      }
    }
    function Kb(a2) {
      try {
        var b2 = a2.abortableTasks;
        b2.forEach(Eb, a2);
        b2.clear();
        a2.destination !== null && Fb(a2, a2.destination);
      } catch (c2) {
        V(a2, c2), W2(a2, c2);
      }
    }
    function Lb() {
    }
    function Mb(a2, b2, c2) {
      var d2 = false, f2 = null, e2 = "", g2 = { push: function(a3) {
        a3 !== null && (e2 += a3);
        return true;
      }, destroy: function(a3) {
        d2 = true;
        f2 = a3;
      } }, h2 = false;
      a2 = tb(a2, Aa(c2, b2 ? b2.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, Infinity, Lb, void 0, function() {
        h2 = true;
      }, void 0, void 0);
      vb(a2);
      Kb(a2);
      if (a2.status === 1)
        a2.status = 2, g2.destroy(a2.fatalError);
      else if (a2.status !== 2 && a2.destination === null) {
        a2.destination = g2;
        try {
          Fb(a2, g2);
        } catch (l2) {
          V(a2, l2), W2(a2, l2);
        }
      }
      if (d2)
        throw f2;
      if (!h2)
        throw Error(k2(426));
      return e2;
    }
    exports.renderToNodeStream = function() {
      throw Error(k2(207));
    };
    exports.renderToStaticMarkup = function(a2, b2) {
      return Mb(a2, b2, true);
    };
    exports.renderToStaticNodeStream = function() {
      throw Error(k2(208));
    };
    exports.renderToString = function(a2, b2) {
      return Mb(a2, b2, false);
    };
    exports.version = "18.1.0";
  }
});
var require_react_dom_server_browser_production_min = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server.browser.production.min.js"(exports) {
    var aa = require_react();
    function k2(a2) {
      for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
        b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
      return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var l2 = null;
    var n = 0;
    function p2(a2, b2) {
      if (b2.length !== 0)
        if (512 < b2.length)
          0 < n && (a2.enqueue(new Uint8Array(l2.buffer, 0, n)), l2 = new Uint8Array(512), n = 0), a2.enqueue(b2);
        else {
          var c2 = l2.length - n;
          c2 < b2.length && (c2 === 0 ? a2.enqueue(l2) : (l2.set(b2.subarray(0, c2), n), a2.enqueue(l2), b2 = b2.subarray(c2)), l2 = new Uint8Array(512), n = 0);
          l2.set(b2, n);
          n += b2.length;
        }
    }
    function t2(a2, b2) {
      p2(a2, b2);
      return true;
    }
    function ba(a2) {
      l2 && 0 < n && (a2.enqueue(new Uint8Array(l2.buffer, 0, n)), l2 = null, n = 0);
    }
    var ca = new TextEncoder();
    function u2(a2) {
      return ca.encode(a2);
    }
    function v2(a2) {
      return ca.encode(a2);
    }
    function da(a2, b2) {
      typeof a2.error === "function" ? a2.error(b2) : a2.close();
    }
    var w2 = Object.prototype.hasOwnProperty;
    var ea = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var fa = {};
    var ha = {};
    function ia(a2) {
      if (w2.call(ha, a2))
        return true;
      if (w2.call(fa, a2))
        return false;
      if (ea.test(a2))
        return ha[a2] = true;
      fa[a2] = true;
      return false;
    }
    function x2(a2, b2, c2, d2, f2, e2, g2) {
      this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
      this.attributeName = d2;
      this.attributeNamespace = f2;
      this.mustUseProperty = c2;
      this.propertyName = a2;
      this.type = b2;
      this.sanitizeURL = e2;
      this.removeEmptyString = g2;
    }
    var y2 = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
      y2[a2] = new x2(a2, 0, false, a2, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
      var b2 = a2[0];
      y2[b2] = new x2(b2, 1, false, a2[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
      y2[a2] = new x2(a2, 2, false, a2.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
      y2[a2] = new x2(a2, 2, false, a2, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
      y2[a2] = new x2(a2, 3, false, a2.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a2) {
      y2[a2] = new x2(a2, 3, true, a2, null, false, false);
    });
    ["capture", "download"].forEach(function(a2) {
      y2[a2] = new x2(a2, 4, false, a2, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a2) {
      y2[a2] = new x2(a2, 6, false, a2, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a2) {
      y2[a2] = new x2(a2, 5, false, a2.toLowerCase(), null, false, false);
    });
    var ja = /[\-:]([a-z])/g;
    function ka(a2) {
      return a2[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
      var b2 = a2.replace(ja, ka);
      y2[b2] = new x2(b2, 1, false, a2, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
      var b2 = a2.replace(ja, ka);
      y2[b2] = new x2(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
      var b2 = a2.replace(ja, ka);
      y2[b2] = new x2(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a2) {
      y2[a2] = new x2(a2, 1, false, a2.toLowerCase(), null, false, false);
    });
    y2.xlinkHref = new x2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a2) {
      y2[a2] = new x2(a2, 1, false, a2.toLowerCase(), null, true, true);
    });
    var z2 = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var la = ["Webkit", "ms", "Moz", "O"];
    Object.keys(z2).forEach(function(a2) {
      la.forEach(function(b2) {
        b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
        z2[b2] = z2[a2];
      });
    });
    var ma = /["'&<>]/;
    function A2(a2) {
      if (typeof a2 === "boolean" || typeof a2 === "number")
        return "" + a2;
      a2 = "" + a2;
      var b2 = ma.exec(a2);
      if (b2) {
        var c2 = "", d2, f2 = 0;
        for (d2 = b2.index; d2 < a2.length; d2++) {
          switch (a2.charCodeAt(d2)) {
            case 34:
              b2 = "&quot;";
              break;
            case 38:
              b2 = "&amp;";
              break;
            case 39:
              b2 = "&#x27;";
              break;
            case 60:
              b2 = "&lt;";
              break;
            case 62:
              b2 = "&gt;";
              break;
            default:
              continue;
          }
          f2 !== d2 && (c2 += a2.substring(f2, d2));
          f2 = d2 + 1;
          c2 += b2;
        }
        a2 = f2 !== d2 ? c2 + a2.substring(f2, d2) : c2;
      }
      return a2;
    }
    var na = /([A-Z])/g;
    var oa = /^ms-/;
    var pa = Array.isArray;
    var qa = v2("<script>");
    var ra = v2("<\/script>");
    var sa = v2('<script src="');
    var ta = v2('<script type="module" src="');
    var ua = v2('" async=""><\/script>');
    var va = /(<\/|<)(s)(cript)/gi;
    function wa(a2, b2, c2, d2) {
      return "" + b2 + (c2 === "s" ? "\\u0073" : "\\u0053") + d2;
    }
    function xa(a2, b2, c2, d2, f2) {
      a2 = a2 === void 0 ? "" : a2;
      b2 = b2 === void 0 ? qa : v2('<script nonce="' + A2(b2) + '">');
      var e2 = [];
      c2 !== void 0 && e2.push(b2, u2(("" + c2).replace(va, wa)), ra);
      if (d2 !== void 0)
        for (c2 = 0; c2 < d2.length; c2++)
          e2.push(sa, u2(A2(d2[c2])), ua);
      if (f2 !== void 0)
        for (d2 = 0; d2 < f2.length; d2++)
          e2.push(ta, u2(A2(f2[d2])), ua);
      return { bootstrapChunks: e2, startInlineScript: b2, placeholderPrefix: v2(a2 + "P:"), segmentPrefix: v2(a2 + "S:"), boundaryPrefix: a2 + "B:", idPrefix: a2, nextSuspenseID: 0, sentCompleteSegmentFunction: false, sentCompleteBoundaryFunction: false, sentClientRenderFunction: false };
    }
    function B2(a2, b2) {
      return { insertionMode: a2, selectedValue: b2 };
    }
    function ya(a2) {
      return B2(a2 === "http://www.w3.org/2000/svg" ? 2 : a2 === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
    }
    function za(a2, b2, c2) {
      switch (b2) {
        case "select":
          return B2(1, c2.value != null ? c2.value : c2.defaultValue);
        case "svg":
          return B2(2, null);
        case "math":
          return B2(3, null);
        case "foreignObject":
          return B2(1, null);
        case "table":
          return B2(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return B2(5, null);
        case "colgroup":
          return B2(7, null);
        case "tr":
          return B2(6, null);
      }
      return 4 <= a2.insertionMode || a2.insertionMode === 0 ? B2(1, null) : a2;
    }
    var Aa = v2("<!-- -->");
    var Ba = /* @__PURE__ */ new Map();
    var Ca = v2(' style="');
    var Da = v2(":");
    var Ea = v2(";");
    function Fa(a2, b2, c2) {
      if (typeof c2 !== "object")
        throw Error(k2(62));
      b2 = true;
      for (var d2 in c2)
        if (w2.call(c2, d2)) {
          var f2 = c2[d2];
          if (f2 != null && typeof f2 !== "boolean" && f2 !== "") {
            if (d2.indexOf("--") === 0) {
              var e2 = u2(A2(d2));
              f2 = u2(A2(("" + f2).trim()));
            } else {
              e2 = d2;
              var g2 = Ba.get(e2);
              g2 !== void 0 ? e2 = g2 : (g2 = v2(A2(e2.replace(na, "-$1").toLowerCase().replace(oa, "-ms-"))), Ba.set(e2, g2), e2 = g2);
              f2 = typeof f2 === "number" ? f2 === 0 || w2.call(z2, d2) ? u2("" + f2) : u2(f2 + "px") : u2(A2(("" + f2).trim()));
            }
            b2 ? (b2 = false, a2.push(Ca, e2, Da, f2)) : a2.push(Ea, e2, Da, f2);
          }
        }
      b2 || a2.push(D2);
    }
    var G2 = v2(" ");
    var H2 = v2('="');
    var D2 = v2('"');
    var Ga = v2('=""');
    function I2(a2, b2, c2, d2) {
      switch (c2) {
        case "style":
          Fa(a2, b2, d2);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (!(2 < c2.length) || c2[0] !== "o" && c2[0] !== "O" || c2[1] !== "n" && c2[1] !== "N") {
        if (b2 = y2.hasOwnProperty(c2) ? y2[c2] : null, b2 !== null) {
          switch (typeof d2) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!b2.acceptsBooleans)
                return;
          }
          c2 = u2(b2.attributeName);
          switch (b2.type) {
            case 3:
              d2 && a2.push(G2, c2, Ga);
              break;
            case 4:
              d2 === true ? a2.push(G2, c2, Ga) : d2 !== false && a2.push(G2, c2, H2, u2(A2(d2)), D2);
              break;
            case 5:
              isNaN(d2) || a2.push(G2, c2, H2, u2(A2(d2)), D2);
              break;
            case 6:
              !isNaN(d2) && 1 <= d2 && a2.push(G2, c2, H2, u2(A2(d2)), D2);
              break;
            default:
              b2.sanitizeURL && (d2 = "" + d2), a2.push(G2, c2, H2, u2(A2(d2)), D2);
          }
        } else if (ia(c2)) {
          switch (typeof d2) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (b2 = c2.toLowerCase().slice(0, 5), b2 !== "data-" && b2 !== "aria-")
                return;
          }
          a2.push(G2, u2(c2), H2, u2(A2(d2)), D2);
        }
      }
    }
    var J = v2(">");
    var Ha = v2("/>");
    function K2(a2, b2, c2) {
      if (b2 != null) {
        if (c2 != null)
          throw Error(k2(60));
        if (typeof b2 !== "object" || !("__html" in b2))
          throw Error(k2(61));
        b2 = b2.__html;
        b2 !== null && b2 !== void 0 && a2.push(u2("" + b2));
      }
    }
    function Ia(a2) {
      var b2 = "";
      aa.Children.forEach(a2, function(a3) {
        a3 != null && (b2 += a3);
      });
      return b2;
    }
    var Ja = v2(' selected=""');
    function Ka(a2, b2, c2, d2) {
      a2.push(L2(c2));
      var f2 = c2 = null, e2;
      for (e2 in b2)
        if (w2.call(b2, e2)) {
          var g2 = b2[e2];
          if (g2 != null)
            switch (e2) {
              case "children":
                c2 = g2;
                break;
              case "dangerouslySetInnerHTML":
                f2 = g2;
                break;
              default:
                I2(a2, d2, e2, g2);
            }
        }
      a2.push(J);
      K2(a2, f2, c2);
      return typeof c2 === "string" ? (a2.push(u2(A2(c2))), null) : c2;
    }
    var La = v2("\n");
    var Ma = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var Na = /* @__PURE__ */ new Map();
    function L2(a2) {
      var b2 = Na.get(a2);
      if (b2 === void 0) {
        if (!Ma.test(a2))
          throw Error(k2(65, a2));
        b2 = v2("<" + a2);
        Na.set(a2, b2);
      }
      return b2;
    }
    var Oa = v2("<!DOCTYPE html>");
    function Pa(a2, b2, c2, d2, f2) {
      switch (b2) {
        case "select":
          a2.push(L2("select"));
          var e2 = null, g2 = null;
          for (r in c2)
            if (w2.call(c2, r)) {
              var h2 = c2[r];
              if (h2 != null)
                switch (r) {
                  case "children":
                    e2 = h2;
                    break;
                  case "dangerouslySetInnerHTML":
                    g2 = h2;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    I2(a2, d2, r, h2);
                }
            }
          a2.push(J);
          K2(a2, g2, e2);
          return e2;
        case "option":
          g2 = f2.selectedValue;
          a2.push(L2("option"));
          var m2 = h2 = null, q2 = null;
          var r = null;
          for (e2 in c2)
            if (w2.call(c2, e2) && (b2 = c2[e2], b2 != null))
              switch (e2) {
                case "children":
                  h2 = b2;
                  break;
                case "selected":
                  q2 = b2;
                  break;
                case "dangerouslySetInnerHTML":
                  r = b2;
                  break;
                case "value":
                  m2 = b2;
                default:
                  I2(a2, d2, e2, b2);
              }
          if (g2 != null)
            if (c2 = m2 !== null ? "" + m2 : Ia(h2), pa(g2))
              for (d2 = 0; d2 < g2.length; d2++) {
                if ("" + g2[d2] === c2) {
                  a2.push(Ja);
                  break;
                }
              }
            else
              "" + g2 === c2 && a2.push(Ja);
          else
            q2 && a2.push(Ja);
          a2.push(J);
          K2(a2, r, h2);
          return h2;
        case "textarea":
          a2.push(L2("textarea"));
          r = g2 = e2 = null;
          for (h2 in c2)
            if (w2.call(c2, h2) && (m2 = c2[h2], m2 != null))
              switch (h2) {
                case "children":
                  r = m2;
                  break;
                case "value":
                  e2 = m2;
                  break;
                case "defaultValue":
                  g2 = m2;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(k2(91));
                default:
                  I2(a2, d2, h2, m2);
              }
          e2 === null && g2 !== null && (e2 = g2);
          a2.push(J);
          if (r != null) {
            if (e2 != null)
              throw Error(k2(92));
            if (pa(r) && 1 < r.length)
              throw Error(k2(93));
            e2 = "" + r;
          }
          typeof e2 === "string" && e2[0] === "\n" && a2.push(La);
          e2 !== null && a2.push(u2(A2("" + e2)));
          return null;
        case "input":
          a2.push(L2("input"));
          m2 = r = h2 = e2 = null;
          for (g2 in c2)
            if (w2.call(c2, g2) && (q2 = c2[g2], q2 != null))
              switch (g2) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(k2(399, "input"));
                case "defaultChecked":
                  m2 = q2;
                  break;
                case "defaultValue":
                  h2 = q2;
                  break;
                case "checked":
                  r = q2;
                  break;
                case "value":
                  e2 = q2;
                  break;
                default:
                  I2(a2, d2, g2, q2);
              }
          r !== null ? I2(a2, d2, "checked", r) : m2 !== null && I2(a2, d2, "checked", m2);
          e2 !== null ? I2(a2, d2, "value", e2) : h2 !== null && I2(a2, d2, "value", h2);
          a2.push(Ha);
          return null;
        case "menuitem":
          a2.push(L2("menuitem"));
          for (var E2 in c2)
            if (w2.call(c2, E2) && (e2 = c2[E2], e2 != null))
              switch (E2) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(k2(400));
                default:
                  I2(a2, d2, E2, e2);
              }
          a2.push(J);
          return null;
        case "listing":
        case "pre":
          a2.push(L2(b2));
          g2 = e2 = null;
          for (m2 in c2)
            if (w2.call(c2, m2) && (h2 = c2[m2], h2 != null))
              switch (m2) {
                case "children":
                  e2 = h2;
                  break;
                case "dangerouslySetInnerHTML":
                  g2 = h2;
                  break;
                default:
                  I2(a2, d2, m2, h2);
              }
          a2.push(J);
          if (g2 != null) {
            if (e2 != null)
              throw Error(k2(60));
            if (typeof g2 !== "object" || !("__html" in g2))
              throw Error(k2(61));
            c2 = g2.__html;
            c2 !== null && c2 !== void 0 && (typeof c2 === "string" && 0 < c2.length && c2[0] === "\n" ? a2.push(La, u2(c2)) : a2.push(u2("" + c2)));
          }
          typeof e2 === "string" && e2[0] === "\n" && a2.push(La);
          return e2;
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          a2.push(L2(b2));
          for (var F2 in c2)
            if (w2.call(c2, F2) && (e2 = c2[F2], e2 != null))
              switch (F2) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(k2(399, b2));
                default:
                  I2(a2, d2, F2, e2);
              }
          a2.push(Ha);
          return null;
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Ka(a2, c2, b2, d2);
        case "html":
          return f2.insertionMode === 0 && a2.push(Oa), Ka(a2, c2, b2, d2);
        default:
          if (b2.indexOf("-") === -1 && typeof c2.is !== "string")
            return Ka(a2, c2, b2, d2);
          a2.push(L2(b2));
          g2 = e2 = null;
          for (q2 in c2)
            if (w2.call(c2, q2) && (h2 = c2[q2], h2 != null))
              switch (q2) {
                case "children":
                  e2 = h2;
                  break;
                case "dangerouslySetInnerHTML":
                  g2 = h2;
                  break;
                case "style":
                  Fa(a2, d2, h2);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                  break;
                default:
                  ia(q2) && typeof h2 !== "function" && typeof h2 !== "symbol" && a2.push(G2, u2(q2), H2, u2(A2(h2)), D2);
              }
          a2.push(J);
          K2(a2, g2, e2);
          return e2;
      }
    }
    var Qa = v2("</");
    var Ra = v2(">");
    var Sa = v2('<template id="');
    var Ta = v2('"></template>');
    var Ua = v2("<!--$-->");
    var Va = v2('<!--$?--><template id="');
    var Wa = v2('"></template>');
    var Xa = v2("<!--$!-->");
    var Ya = v2("<!--/$-->");
    function Za(a2, b2, c2) {
      p2(a2, Va);
      if (c2 === null)
        throw Error(k2(395));
      p2(a2, c2);
      return t2(a2, Wa);
    }
    var $a = v2('<div hidden id="');
    var ab = v2('">');
    var bb = v2("</div>");
    var cb = v2('<svg aria-hidden="true" style="display:none" id="');
    var db = v2('">');
    var eb = v2("</svg>");
    var fb = v2('<math aria-hidden="true" style="display:none" id="');
    var gb = v2('">');
    var hb = v2("</math>");
    var ib = v2('<table hidden id="');
    var jb = v2('">');
    var kb = v2("</table>");
    var lb = v2('<table hidden><tbody id="');
    var mb = v2('">');
    var nb = v2("</tbody></table>");
    var ob = v2('<table hidden><tr id="');
    var pb = v2('">');
    var qb = v2("</tr></table>");
    var rb = v2('<table hidden><colgroup id="');
    var sb = v2('">');
    var tb = v2("</colgroup></table>");
    function ub(a2, b2, c2, d2) {
      switch (c2.insertionMode) {
        case 0:
        case 1:
          return p2(a2, $a), p2(a2, b2.segmentPrefix), p2(a2, u2(d2.toString(16))), t2(a2, ab);
        case 2:
          return p2(a2, cb), p2(a2, b2.segmentPrefix), p2(a2, u2(d2.toString(16))), t2(a2, db);
        case 3:
          return p2(a2, fb), p2(a2, b2.segmentPrefix), p2(a2, u2(d2.toString(16))), t2(a2, gb);
        case 4:
          return p2(a2, ib), p2(a2, b2.segmentPrefix), p2(a2, u2(d2.toString(16))), t2(a2, jb);
        case 5:
          return p2(a2, lb), p2(a2, b2.segmentPrefix), p2(a2, u2(d2.toString(16))), t2(a2, mb);
        case 6:
          return p2(a2, ob), p2(a2, b2.segmentPrefix), p2(a2, u2(d2.toString(16))), t2(a2, pb);
        case 7:
          return p2(a2, rb), p2(a2, b2.segmentPrefix), p2(a2, u2(d2.toString(16))), t2(a2, sb);
        default:
          throw Error(k2(397));
      }
    }
    function vb(a2, b2) {
      switch (b2.insertionMode) {
        case 0:
        case 1:
          return t2(a2, bb);
        case 2:
          return t2(a2, eb);
        case 3:
          return t2(a2, hb);
        case 4:
          return t2(a2, kb);
        case 5:
          return t2(a2, nb);
        case 6:
          return t2(a2, qb);
        case 7:
          return t2(a2, tb);
        default:
          throw Error(k2(397));
      }
    }
    var wb = v2('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("');
    var xb = v2('$RS("');
    var yb = v2('","');
    var zb = v2('")<\/script>');
    var Ab = v2('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("');
    var Bb = v2('$RC("');
    var Cb = v2('","');
    var Db = v2('")<\/script>');
    var Eb = v2('function $RX(a){if(a=document.getElementById(a))a=a.previousSibling,a.data="$!",a._reactRetry&&a._reactRetry()};$RX("');
    var Fb = v2('$RX("');
    var Gb = v2('")<\/script>');
    var M2 = Object.assign;
    var Hb = Symbol.for("react.element");
    var Ib = Symbol.for("react.portal");
    var Jb = Symbol.for("react.fragment");
    var Kb = Symbol.for("react.strict_mode");
    var Lb = Symbol.for("react.profiler");
    var Mb = Symbol.for("react.provider");
    var Nb = Symbol.for("react.context");
    var Ob = Symbol.for("react.forward_ref");
    var Pb = Symbol.for("react.suspense");
    var Qb = Symbol.for("react.suspense_list");
    var Rb = Symbol.for("react.memo");
    var Sb = Symbol.for("react.lazy");
    var Tb = Symbol.for("react.scope");
    var Ub = Symbol.for("react.debug_trace_mode");
    var Vb = Symbol.for("react.legacy_hidden");
    var Wb = Symbol.for("react.default_value");
    var Xb = Symbol.iterator;
    function Yb(a2) {
      if (a2 == null)
        return null;
      if (typeof a2 === "function")
        return a2.displayName || a2.name || null;
      if (typeof a2 === "string")
        return a2;
      switch (a2) {
        case Jb:
          return "Fragment";
        case Ib:
          return "Portal";
        case Lb:
          return "Profiler";
        case Kb:
          return "StrictMode";
        case Pb:
          return "Suspense";
        case Qb:
          return "SuspenseList";
      }
      if (typeof a2 === "object")
        switch (a2.$$typeof) {
          case Nb:
            return (a2.displayName || "Context") + ".Consumer";
          case Mb:
            return (a2._context.displayName || "Context") + ".Provider";
          case Ob:
            var b2 = a2.render;
            a2 = a2.displayName;
            a2 || (a2 = b2.displayName || b2.name || "", a2 = a2 !== "" ? "ForwardRef(" + a2 + ")" : "ForwardRef");
            return a2;
          case Rb:
            return b2 = a2.displayName || null, b2 !== null ? b2 : Yb(a2.type) || "Memo";
          case Sb:
            b2 = a2._payload;
            a2 = a2._init;
            try {
              return Yb(a2(b2));
            } catch (c2) {
            }
        }
      return null;
    }
    var Zb = {};
    function $b(a2, b2) {
      a2 = a2.contextTypes;
      if (!a2)
        return Zb;
      var c2 = {}, d2;
      for (d2 in a2)
        c2[d2] = b2[d2];
      return c2;
    }
    var N2 = null;
    function O2(a2, b2) {
      if (a2 !== b2) {
        a2.context._currentValue = a2.parentValue;
        a2 = a2.parent;
        var c2 = b2.parent;
        if (a2 === null) {
          if (c2 !== null)
            throw Error(k2(401));
        } else {
          if (c2 === null)
            throw Error(k2(401));
          O2(a2, c2);
        }
        b2.context._currentValue = b2.value;
      }
    }
    function ac(a2) {
      a2.context._currentValue = a2.parentValue;
      a2 = a2.parent;
      a2 !== null && ac(a2);
    }
    function bc(a2) {
      var b2 = a2.parent;
      b2 !== null && bc(b2);
      a2.context._currentValue = a2.value;
    }
    function cc(a2, b2) {
      a2.context._currentValue = a2.parentValue;
      a2 = a2.parent;
      if (a2 === null)
        throw Error(k2(402));
      a2.depth === b2.depth ? O2(a2, b2) : cc(a2, b2);
    }
    function dc(a2, b2) {
      var c2 = b2.parent;
      if (c2 === null)
        throw Error(k2(402));
      a2.depth === c2.depth ? O2(a2, c2) : dc(a2, c2);
      b2.context._currentValue = b2.value;
    }
    function P2(a2) {
      var b2 = N2;
      b2 !== a2 && (b2 === null ? bc(a2) : a2 === null ? ac(b2) : b2.depth === a2.depth ? O2(b2, a2) : b2.depth > a2.depth ? cc(b2, a2) : dc(b2, a2), N2 = a2);
    }
    var ec = { isMounted: function() {
      return false;
    }, enqueueSetState: function(a2, b2) {
      a2 = a2._reactInternals;
      a2.queue !== null && a2.queue.push(b2);
    }, enqueueReplaceState: function(a2, b2) {
      a2 = a2._reactInternals;
      a2.replace = true;
      a2.queue = [b2];
    }, enqueueForceUpdate: function() {
    } };
    function fc(a2, b2, c2, d2) {
      var f2 = a2.state !== void 0 ? a2.state : null;
      a2.updater = ec;
      a2.props = c2;
      a2.state = f2;
      var e2 = { queue: [], replace: false };
      a2._reactInternals = e2;
      var g2 = b2.contextType;
      a2.context = typeof g2 === "object" && g2 !== null ? g2._currentValue : d2;
      g2 = b2.getDerivedStateFromProps;
      typeof g2 === "function" && (g2 = g2(c2, f2), f2 = g2 === null || g2 === void 0 ? f2 : M2({}, f2, g2), a2.state = f2);
      if (typeof b2.getDerivedStateFromProps !== "function" && typeof a2.getSnapshotBeforeUpdate !== "function" && (typeof a2.UNSAFE_componentWillMount === "function" || typeof a2.componentWillMount === "function"))
        if (b2 = a2.state, typeof a2.componentWillMount === "function" && a2.componentWillMount(), typeof a2.UNSAFE_componentWillMount === "function" && a2.UNSAFE_componentWillMount(), b2 !== a2.state && ec.enqueueReplaceState(a2, a2.state, null), e2.queue !== null && 0 < e2.queue.length)
          if (b2 = e2.queue, g2 = e2.replace, e2.queue = null, e2.replace = false, g2 && b2.length === 1)
            a2.state = b2[0];
          else {
            e2 = g2 ? b2[0] : a2.state;
            f2 = true;
            for (g2 = g2 ? 1 : 0; g2 < b2.length; g2++) {
              var h2 = b2[g2];
              h2 = typeof h2 === "function" ? h2.call(a2, e2, c2, d2) : h2;
              h2 != null && (f2 ? (f2 = false, e2 = M2({}, e2, h2)) : M2(e2, h2));
            }
            a2.state = e2;
          }
        else
          e2.queue = null;
    }
    var gc = { id: 1, overflow: "" };
    function hc(a2, b2, c2) {
      var d2 = a2.id;
      a2 = a2.overflow;
      var f2 = 32 - Q(d2) - 1;
      d2 &= ~(1 << f2);
      c2 += 1;
      var e2 = 32 - Q(b2) + f2;
      if (30 < e2) {
        var g2 = f2 - f2 % 5;
        e2 = (d2 & (1 << g2) - 1).toString(32);
        d2 >>= g2;
        f2 -= g2;
        return { id: 1 << 32 - Q(b2) + f2 | c2 << f2 | d2, overflow: e2 + a2 };
      }
      return { id: 1 << e2 | c2 << f2 | d2, overflow: a2 };
    }
    var Q = Math.clz32 ? Math.clz32 : ic;
    var jc = Math.log;
    var kc = Math.LN2;
    function ic(a2) {
      a2 >>>= 0;
      return a2 === 0 ? 32 : 31 - (jc(a2) / kc | 0) | 0;
    }
    function lc(a2, b2) {
      return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
    }
    var mc = typeof Object.is === "function" ? Object.is : lc;
    var R2 = null;
    var nc = null;
    var oc = null;
    var S2 = null;
    var T2 = false;
    var pc = false;
    var U2 = 0;
    var V = null;
    var qc = 0;
    function W2() {
      if (R2 === null)
        throw Error(k2(321));
      return R2;
    }
    function rc() {
      if (0 < qc)
        throw Error(k2(312));
      return { memoizedState: null, queue: null, next: null };
    }
    function sc() {
      S2 === null ? oc === null ? (T2 = false, oc = S2 = rc()) : (T2 = true, S2 = oc) : S2.next === null ? (T2 = false, S2 = S2.next = rc()) : (T2 = true, S2 = S2.next);
      return S2;
    }
    function tc() {
      nc = R2 = null;
      pc = false;
      oc = null;
      qc = 0;
      S2 = V = null;
    }
    function uc(a2, b2) {
      return typeof b2 === "function" ? b2(a2) : b2;
    }
    function vc(a2, b2, c2) {
      R2 = W2();
      S2 = sc();
      if (T2) {
        var d2 = S2.queue;
        b2 = d2.dispatch;
        if (V !== null && (c2 = V.get(d2), c2 !== void 0)) {
          V.delete(d2);
          d2 = S2.memoizedState;
          do
            d2 = a2(d2, c2.action), c2 = c2.next;
          while (c2 !== null);
          S2.memoizedState = d2;
          return [d2, b2];
        }
        return [S2.memoizedState, b2];
      }
      a2 = a2 === uc ? typeof b2 === "function" ? b2() : b2 : c2 !== void 0 ? c2(b2) : b2;
      S2.memoizedState = a2;
      a2 = S2.queue = { last: null, dispatch: null };
      a2 = a2.dispatch = wc.bind(null, R2, a2);
      return [S2.memoizedState, a2];
    }
    function xc(a2, b2) {
      R2 = W2();
      S2 = sc();
      b2 = b2 === void 0 ? null : b2;
      if (S2 !== null) {
        var c2 = S2.memoizedState;
        if (c2 !== null && b2 !== null) {
          var d2 = c2[1];
          a:
            if (d2 === null)
              d2 = false;
            else {
              for (var f2 = 0; f2 < d2.length && f2 < b2.length; f2++)
                if (!mc(b2[f2], d2[f2])) {
                  d2 = false;
                  break a;
                }
              d2 = true;
            }
          if (d2)
            return c2[0];
        }
      }
      a2 = a2();
      S2.memoizedState = [a2, b2];
      return a2;
    }
    function wc(a2, b2, c2) {
      if (25 <= qc)
        throw Error(k2(301));
      if (a2 === R2)
        if (pc = true, a2 = { action: c2, next: null }, V === null && (V = /* @__PURE__ */ new Map()), c2 = V.get(b2), c2 === void 0)
          V.set(b2, a2);
        else {
          for (b2 = c2; b2.next !== null; )
            b2 = b2.next;
          b2.next = a2;
        }
    }
    function yc() {
      throw Error(k2(394));
    }
    function zc() {
    }
    var Bc = { readContext: function(a2) {
      return a2._currentValue;
    }, useContext: function(a2) {
      W2();
      return a2._currentValue;
    }, useMemo: xc, useReducer: vc, useRef: function(a2) {
      R2 = W2();
      S2 = sc();
      var b2 = S2.memoizedState;
      return b2 === null ? (a2 = { current: a2 }, S2.memoizedState = a2) : b2;
    }, useState: function(a2) {
      return vc(uc, a2);
    }, useInsertionEffect: zc, useLayoutEffect: function() {
    }, useCallback: function(a2, b2) {
      return xc(function() {
        return a2;
      }, b2);
    }, useImperativeHandle: zc, useEffect: zc, useDebugValue: zc, useDeferredValue: function(a2) {
      W2();
      return a2;
    }, useTransition: function() {
      W2();
      return [false, yc];
    }, useId: function() {
      var a2 = nc.treeContext;
      var b2 = a2.overflow;
      a2 = a2.id;
      a2 = (a2 & ~(1 << 32 - Q(a2) - 1)).toString(32) + b2;
      var c2 = Ac;
      if (c2 === null)
        throw Error(k2(404));
      b2 = U2++;
      a2 = ":" + c2.idPrefix + "R" + a2;
      0 < b2 && (a2 += "H" + b2.toString(32));
      return a2 + ":";
    }, useMutableSource: function(a2, b2) {
      W2();
      return b2(a2._source);
    }, useSyncExternalStore: function(a2, b2, c2) {
      if (c2 === void 0)
        throw Error(k2(407));
      return c2();
    } };
    var Ac = null;
    var Cc = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
    function Dc(a2) {
      console.error(a2);
    }
    function X() {
    }
    function Ec(a2, b2, c2, d2, f2, e2, g2, h2, m2) {
      var q2 = [], r = /* @__PURE__ */ new Set();
      b2 = { destination: null, responseState: b2, progressiveChunkSize: d2 === void 0 ? 12800 : d2, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: r, pingedTasks: q2, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: f2 === void 0 ? Dc : f2, onAllReady: e2 === void 0 ? X : e2, onShellReady: g2 === void 0 ? X : g2, onShellError: h2 === void 0 ? X : h2, onFatalError: m2 === void 0 ? X : m2 };
      c2 = Fc(b2, 0, null, c2);
      c2.parentFlushed = true;
      a2 = Gc(b2, a2, null, c2, r, Zb, null, gc);
      q2.push(a2);
      return b2;
    }
    function Gc(a2, b2, c2, d2, f2, e2, g2, h2) {
      a2.allPendingTasks++;
      c2 === null ? a2.pendingRootTasks++ : c2.pendingTasks++;
      var m2 = { node: b2, ping: function() {
        var b3 = a2.pingedTasks;
        b3.push(m2);
        b3.length === 1 && Hc(a2);
      }, blockedBoundary: c2, blockedSegment: d2, abortSet: f2, legacyContext: e2, context: g2, treeContext: h2 };
      f2.add(m2);
      return m2;
    }
    function Fc(a2, b2, c2, d2) {
      return { status: 0, id: -1, index: b2, parentFlushed: false, chunks: [], children: [], formatContext: d2, boundary: c2 };
    }
    function Y2(a2, b2) {
      a2 = a2.onError;
      a2(b2);
    }
    function Ic(a2, b2) {
      var c2 = a2.onShellError;
      c2(b2);
      c2 = a2.onFatalError;
      c2(b2);
      a2.destination !== null ? (a2.status = 2, da(a2.destination, b2)) : (a2.status = 1, a2.fatalError = b2);
    }
    function Jc(a2, b2, c2, d2, f2) {
      R2 = {};
      nc = b2;
      U2 = 0;
      for (a2 = c2(d2, f2); pc; )
        pc = false, U2 = 0, qc += 1, S2 = null, a2 = c2(d2, f2);
      tc();
      return a2;
    }
    function Kc(a2, b2, c2, d2) {
      var f2 = c2.render(), e2 = d2.childContextTypes;
      if (e2 !== null && e2 !== void 0) {
        var g2 = b2.legacyContext;
        if (typeof c2.getChildContext !== "function")
          d2 = g2;
        else {
          c2 = c2.getChildContext();
          for (var h2 in c2)
            if (!(h2 in e2))
              throw Error(k2(108, Yb(d2) || "Unknown", h2));
          d2 = M2({}, g2, c2);
        }
        b2.legacyContext = d2;
        Z(a2, b2, f2);
        b2.legacyContext = g2;
      } else
        Z(a2, b2, f2);
    }
    function Lc(a2, b2) {
      if (a2 && a2.defaultProps) {
        b2 = M2({}, b2);
        a2 = a2.defaultProps;
        for (var c2 in a2)
          b2[c2] === void 0 && (b2[c2] = a2[c2]);
        return b2;
      }
      return b2;
    }
    function Mc(a2, b2, c2, d2, f2) {
      if (typeof c2 === "function")
        if (c2.prototype && c2.prototype.isReactComponent) {
          f2 = $b(c2, b2.legacyContext);
          var e2 = c2.contextType;
          e2 = new c2(d2, typeof e2 === "object" && e2 !== null ? e2._currentValue : f2);
          fc(e2, c2, d2, f2);
          Kc(a2, b2, e2, c2);
        } else {
          e2 = $b(c2, b2.legacyContext);
          f2 = Jc(a2, b2, c2, d2, e2);
          var g2 = U2 !== 0;
          if (typeof f2 === "object" && f2 !== null && typeof f2.render === "function" && f2.$$typeof === void 0)
            fc(f2, c2, d2, e2), Kc(a2, b2, f2, c2);
          else if (g2) {
            d2 = b2.treeContext;
            b2.treeContext = hc(d2, 1, 0);
            try {
              Z(a2, b2, f2);
            } finally {
              b2.treeContext = d2;
            }
          } else
            Z(a2, b2, f2);
        }
      else if (typeof c2 === "string")
        switch (f2 = b2.blockedSegment, e2 = Pa(f2.chunks, c2, d2, a2.responseState, f2.formatContext), g2 = f2.formatContext, f2.formatContext = za(g2, c2, d2), Nc(a2, b2, e2), f2.formatContext = g2, c2) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            f2.chunks.push(Qa, u2(c2), Ra);
        }
      else {
        switch (c2) {
          case Vb:
          case Ub:
          case Kb:
          case Lb:
          case Jb:
            Z(a2, b2, d2.children);
            return;
          case Qb:
            Z(a2, b2, d2.children);
            return;
          case Tb:
            throw Error(k2(343));
          case Pb:
            a: {
              c2 = b2.blockedBoundary;
              f2 = b2.blockedSegment;
              e2 = d2.fallback;
              d2 = d2.children;
              g2 = /* @__PURE__ */ new Set();
              var h2 = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g2 }, m2 = Fc(a2, f2.chunks.length, h2, f2.formatContext);
              f2.children.push(m2);
              var q2 = Fc(a2, 0, null, f2.formatContext);
              q2.parentFlushed = true;
              b2.blockedBoundary = h2;
              b2.blockedSegment = q2;
              try {
                if (Nc(a2, b2, d2), q2.status = 1, Oc(h2, q2), h2.pendingTasks === 0)
                  break a;
              } catch (r) {
                q2.status = 4, Y2(a2, r), h2.forceClientRender = true;
              } finally {
                b2.blockedBoundary = c2, b2.blockedSegment = f2;
              }
              b2 = Gc(a2, e2, c2, m2, g2, b2.legacyContext, b2.context, b2.treeContext);
              a2.pingedTasks.push(b2);
            }
            return;
        }
        if (typeof c2 === "object" && c2 !== null)
          switch (c2.$$typeof) {
            case Ob:
              d2 = Jc(a2, b2, c2.render, d2, f2);
              if (U2 !== 0) {
                c2 = b2.treeContext;
                b2.treeContext = hc(c2, 1, 0);
                try {
                  Z(a2, b2, d2);
                } finally {
                  b2.treeContext = c2;
                }
              } else
                Z(a2, b2, d2);
              return;
            case Rb:
              c2 = c2.type;
              d2 = Lc(c2, d2);
              Mc(a2, b2, c2, d2, f2);
              return;
            case Mb:
              f2 = d2.children;
              c2 = c2._context;
              d2 = d2.value;
              e2 = c2._currentValue;
              c2._currentValue = d2;
              g2 = N2;
              N2 = d2 = { parent: g2, depth: g2 === null ? 0 : g2.depth + 1, context: c2, parentValue: e2, value: d2 };
              b2.context = d2;
              Z(a2, b2, f2);
              a2 = N2;
              if (a2 === null)
                throw Error(k2(403));
              d2 = a2.parentValue;
              a2.context._currentValue = d2 === Wb ? a2.context._defaultValue : d2;
              a2 = N2 = a2.parent;
              b2.context = a2;
              return;
            case Nb:
              d2 = d2.children;
              d2 = d2(c2._currentValue);
              Z(a2, b2, d2);
              return;
            case Sb:
              f2 = c2._init;
              c2 = f2(c2._payload);
              d2 = Lc(c2, d2);
              Mc(a2, b2, c2, d2, void 0);
              return;
          }
        throw Error(k2(130, c2 == null ? c2 : typeof c2, ""));
      }
    }
    function Z(a2, b2, c2) {
      b2.node = c2;
      if (typeof c2 === "object" && c2 !== null) {
        switch (c2.$$typeof) {
          case Hb:
            Mc(a2, b2, c2.type, c2.props, c2.ref);
            return;
          case Ib:
            throw Error(k2(257));
          case Sb:
            var d2 = c2._init;
            c2 = d2(c2._payload);
            Z(a2, b2, c2);
            return;
        }
        if (pa(c2)) {
          Pc(a2, b2, c2);
          return;
        }
        c2 === null || typeof c2 !== "object" ? d2 = null : (d2 = Xb && c2[Xb] || c2["@@iterator"], d2 = typeof d2 === "function" ? d2 : null);
        if (d2 && (d2 = d2.call(c2))) {
          c2 = d2.next();
          if (!c2.done) {
            var f2 = [];
            do
              f2.push(c2.value), c2 = d2.next();
            while (!c2.done);
            Pc(a2, b2, f2);
          }
          return;
        }
        b2 = Object.prototype.toString.call(c2);
        throw Error(k2(31, b2 === "[object Object]" ? "object with keys {" + Object.keys(c2).join(", ") + "}" : b2));
      }
      typeof c2 === "string" ? c2 !== "" && b2.blockedSegment.chunks.push(u2(A2(c2)), Aa) : typeof c2 === "number" && (a2 = "" + c2, a2 !== "" && b2.blockedSegment.chunks.push(u2(A2(a2)), Aa));
    }
    function Pc(a2, b2, c2) {
      for (var d2 = c2.length, f2 = 0; f2 < d2; f2++) {
        var e2 = b2.treeContext;
        b2.treeContext = hc(e2, d2, f2);
        try {
          Nc(a2, b2, c2[f2]);
        } finally {
          b2.treeContext = e2;
        }
      }
    }
    function Nc(a2, b2, c2) {
      var d2 = b2.blockedSegment.formatContext, f2 = b2.legacyContext, e2 = b2.context;
      try {
        return Z(a2, b2, c2);
      } catch (m2) {
        if (tc(), typeof m2 === "object" && m2 !== null && typeof m2.then === "function") {
          c2 = m2;
          var g2 = b2.blockedSegment, h2 = Fc(a2, g2.chunks.length, null, g2.formatContext);
          g2.children.push(h2);
          a2 = Gc(a2, b2.node, b2.blockedBoundary, h2, b2.abortSet, b2.legacyContext, b2.context, b2.treeContext).ping;
          c2.then(a2, a2);
          b2.blockedSegment.formatContext = d2;
          b2.legacyContext = f2;
          b2.context = e2;
          P2(e2);
        } else
          throw b2.blockedSegment.formatContext = d2, b2.legacyContext = f2, b2.context = e2, P2(e2), m2;
      }
    }
    function Qc(a2) {
      var b2 = a2.blockedBoundary;
      a2 = a2.blockedSegment;
      a2.status = 3;
      Rc(this, b2, a2);
    }
    function Sc(a2) {
      var b2 = a2.blockedBoundary;
      a2.blockedSegment.status = 3;
      b2 === null ? (this.allPendingTasks--, this.status !== 2 && (this.status = 2, this.destination !== null && this.destination.close())) : (b2.pendingTasks--, b2.forceClientRender || (b2.forceClientRender = true, b2.parentFlushed && this.clientRenderedBoundaries.push(b2)), b2.fallbackAbortableTasks.forEach(Sc, this), b2.fallbackAbortableTasks.clear(), this.allPendingTasks--, this.allPendingTasks === 0 && (a2 = this.onAllReady, a2()));
    }
    function Oc(a2, b2) {
      if (b2.chunks.length === 0 && b2.children.length === 1 && b2.children[0].boundary === null) {
        var c2 = b2.children[0];
        c2.id = b2.id;
        c2.parentFlushed = true;
        c2.status === 1 && Oc(a2, c2);
      } else
        a2.completedSegments.push(b2);
    }
    function Rc(a2, b2, c2) {
      if (b2 === null) {
        if (c2.parentFlushed) {
          if (a2.completedRootSegment !== null)
            throw Error(k2(389));
          a2.completedRootSegment = c2;
        }
        a2.pendingRootTasks--;
        a2.pendingRootTasks === 0 && (a2.onShellError = X, b2 = a2.onShellReady, b2());
      } else
        b2.pendingTasks--, b2.forceClientRender || (b2.pendingTasks === 0 ? (c2.parentFlushed && c2.status === 1 && Oc(b2, c2), b2.parentFlushed && a2.completedBoundaries.push(b2), b2.fallbackAbortableTasks.forEach(Qc, a2), b2.fallbackAbortableTasks.clear()) : c2.parentFlushed && c2.status === 1 && (Oc(b2, c2), b2.completedSegments.length === 1 && b2.parentFlushed && a2.partialBoundaries.push(b2)));
      a2.allPendingTasks--;
      a2.allPendingTasks === 0 && (a2 = a2.onAllReady, a2());
    }
    function Hc(a2) {
      if (a2.status !== 2) {
        var b2 = N2, c2 = Cc.current;
        Cc.current = Bc;
        var d2 = Ac;
        Ac = a2.responseState;
        try {
          var f2 = a2.pingedTasks, e2;
          for (e2 = 0; e2 < f2.length; e2++) {
            var g2 = f2[e2];
            var h2 = a2, m2 = g2.blockedSegment;
            if (m2.status === 0) {
              P2(g2.context);
              try {
                Z(h2, g2, g2.node), g2.abortSet.delete(g2), m2.status = 1, Rc(h2, g2.blockedBoundary, m2);
              } catch (C2) {
                if (tc(), typeof C2 === "object" && C2 !== null && typeof C2.then === "function") {
                  var q2 = g2.ping;
                  C2.then(q2, q2);
                } else {
                  g2.abortSet.delete(g2);
                  m2.status = 4;
                  var r = g2.blockedBoundary, E2 = C2;
                  Y2(h2, E2);
                  r === null ? Ic(h2, E2) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = true, r.parentFlushed && h2.clientRenderedBoundaries.push(r)));
                  h2.allPendingTasks--;
                  if (h2.allPendingTasks === 0) {
                    var F2 = h2.onAllReady;
                    F2();
                  }
                }
              } finally {
              }
            }
          }
          f2.splice(0, e2);
          a2.destination !== null && Tc(a2, a2.destination);
        } catch (C2) {
          Y2(a2, C2), Ic(a2, C2);
        } finally {
          Ac = d2, Cc.current = c2, c2 === Bc && P2(b2);
        }
      }
    }
    function Uc(a2, b2, c2) {
      c2.parentFlushed = true;
      switch (c2.status) {
        case 0:
          var d2 = c2.id = a2.nextSegmentId++;
          a2 = a2.responseState;
          p2(b2, Sa);
          p2(b2, a2.placeholderPrefix);
          a2 = u2(d2.toString(16));
          p2(b2, a2);
          return t2(b2, Ta);
        case 1:
          c2.status = 2;
          var f2 = true;
          d2 = c2.chunks;
          var e2 = 0;
          c2 = c2.children;
          for (var g2 = 0; g2 < c2.length; g2++) {
            for (f2 = c2[g2]; e2 < f2.index; e2++)
              p2(b2, d2[e2]);
            f2 = Vc(a2, b2, f2);
          }
          for (; e2 < d2.length - 1; e2++)
            p2(b2, d2[e2]);
          e2 < d2.length && (f2 = t2(b2, d2[e2]));
          return f2;
        default:
          throw Error(k2(390));
      }
    }
    function Vc(a2, b2, c2) {
      var d2 = c2.boundary;
      if (d2 === null)
        return Uc(a2, b2, c2);
      d2.parentFlushed = true;
      if (d2.forceClientRender)
        t2(b2, Xa), Uc(a2, b2, c2);
      else if (0 < d2.pendingTasks) {
        d2.rootSegmentID = a2.nextSegmentId++;
        0 < d2.completedSegments.length && a2.partialBoundaries.push(d2);
        var f2 = a2.responseState;
        var e2 = f2.nextSuspenseID++;
        f2 = v2(f2.boundaryPrefix + e2.toString(16));
        d2 = d2.id = f2;
        Za(b2, a2.responseState, d2);
        Uc(a2, b2, c2);
      } else if (d2.byteSize > a2.progressiveChunkSize)
        d2.rootSegmentID = a2.nextSegmentId++, a2.completedBoundaries.push(d2), Za(b2, a2.responseState, d2.id), Uc(a2, b2, c2);
      else {
        t2(b2, Ua);
        c2 = d2.completedSegments;
        if (c2.length !== 1)
          throw Error(k2(391));
        Vc(a2, b2, c2[0]);
      }
      return t2(b2, Ya);
    }
    function Wc(a2, b2, c2) {
      ub(b2, a2.responseState, c2.formatContext, c2.id);
      Vc(a2, b2, c2);
      return vb(b2, c2.formatContext);
    }
    function Xc(a2, b2, c2) {
      for (var d2 = c2.completedSegments, f2 = 0; f2 < d2.length; f2++)
        Yc(a2, b2, c2, d2[f2]);
      d2.length = 0;
      a2 = a2.responseState;
      d2 = c2.id;
      c2 = c2.rootSegmentID;
      p2(b2, a2.startInlineScript);
      a2.sentCompleteBoundaryFunction ? p2(b2, Bb) : (a2.sentCompleteBoundaryFunction = true, p2(b2, Ab));
      if (d2 === null)
        throw Error(k2(395));
      c2 = u2(c2.toString(16));
      p2(b2, d2);
      p2(b2, Cb);
      p2(b2, a2.segmentPrefix);
      p2(b2, c2);
      return t2(b2, Db);
    }
    function Yc(a2, b2, c2, d2) {
      if (d2.status === 2)
        return true;
      var f2 = d2.id;
      if (f2 === -1) {
        if ((d2.id = c2.rootSegmentID) === -1)
          throw Error(k2(392));
        return Wc(a2, b2, d2);
      }
      Wc(a2, b2, d2);
      a2 = a2.responseState;
      p2(b2, a2.startInlineScript);
      a2.sentCompleteSegmentFunction ? p2(b2, xb) : (a2.sentCompleteSegmentFunction = true, p2(b2, wb));
      p2(b2, a2.segmentPrefix);
      f2 = u2(f2.toString(16));
      p2(b2, f2);
      p2(b2, yb);
      p2(b2, a2.placeholderPrefix);
      p2(b2, f2);
      return t2(b2, zb);
    }
    function Tc(a2, b2) {
      l2 = new Uint8Array(512);
      n = 0;
      try {
        var c2 = a2.completedRootSegment;
        if (c2 !== null && a2.pendingRootTasks === 0) {
          Vc(a2, b2, c2);
          a2.completedRootSegment = null;
          var d2 = a2.responseState.bootstrapChunks;
          for (c2 = 0; c2 < d2.length - 1; c2++)
            p2(b2, d2[c2]);
          c2 < d2.length && t2(b2, d2[c2]);
        }
        var f2 = a2.clientRenderedBoundaries, e2;
        for (e2 = 0; e2 < f2.length; e2++) {
          d2 = b2;
          var g2 = a2.responseState, h2 = f2[e2].id;
          p2(d2, g2.startInlineScript);
          g2.sentClientRenderFunction ? p2(d2, Fb) : (g2.sentClientRenderFunction = true, p2(d2, Eb));
          if (h2 === null)
            throw Error(k2(395));
          p2(d2, h2);
          if (!t2(d2, Gb))
            ;
        }
        f2.splice(0, e2);
        var m2 = a2.completedBoundaries;
        for (e2 = 0; e2 < m2.length; e2++)
          if (!Xc(a2, b2, m2[e2]))
            ;
        m2.splice(0, e2);
        ba(b2);
        l2 = new Uint8Array(512);
        n = 0;
        var q2 = a2.partialBoundaries;
        for (e2 = 0; e2 < q2.length; e2++) {
          var r = q2[e2];
          a: {
            f2 = a2;
            g2 = b2;
            var E2 = r.completedSegments;
            for (h2 = 0; h2 < E2.length; h2++)
              if (!Yc(f2, g2, r, E2[h2])) {
                h2++;
                E2.splice(0, h2);
                var F2 = false;
                break a;
              }
            E2.splice(0, h2);
            F2 = true;
          }
          if (!F2) {
            a2.destination = null;
            e2++;
            q2.splice(0, e2);
            return;
          }
        }
        q2.splice(0, e2);
        var C2 = a2.completedBoundaries;
        for (e2 = 0; e2 < C2.length; e2++)
          if (!Xc(a2, b2, C2[e2]))
            ;
        C2.splice(0, e2);
      } finally {
        ba(b2), a2.allPendingTasks === 0 && a2.pingedTasks.length === 0 && a2.clientRenderedBoundaries.length === 0 && a2.completedBoundaries.length === 0 && b2.close();
      }
    }
    function Zc(a2) {
      try {
        var b2 = a2.abortableTasks;
        b2.forEach(Sc, a2);
        b2.clear();
        a2.destination !== null && Tc(a2, a2.destination);
      } catch (c2) {
        Y2(a2, c2), Ic(a2, c2);
      }
    }
    exports.renderToReadableStream = function(a2, b2) {
      return new Promise(function(c2, d2) {
        var f2, e2, g2 = new Promise(function(a3, b3) {
          e2 = a3;
          f2 = b3;
        }), h2 = Ec(a2, xa(b2 ? b2.identifierPrefix : void 0, b2 ? b2.nonce : void 0, b2 ? b2.bootstrapScriptContent : void 0, b2 ? b2.bootstrapScripts : void 0, b2 ? b2.bootstrapModules : void 0), ya(b2 ? b2.namespaceURI : void 0), b2 ? b2.progressiveChunkSize : void 0, b2 ? b2.onError : void 0, e2, function() {
          var a3 = new ReadableStream({ type: "bytes", pull: function(a4) {
            if (h2.status === 1)
              h2.status = 2, da(a4, h2.fatalError);
            else if (h2.status !== 2 && h2.destination === null) {
              h2.destination = a4;
              try {
                Tc(h2, a4);
              } catch (F2) {
                Y2(h2, F2), Ic(h2, F2);
              }
            }
          }, cancel: function() {
            Zc(h2);
          } });
          a3.allReady = g2;
          c2(a3);
        }, function(a3) {
          g2.catch(function() {
          });
          d2(a3);
        }, f2);
        if (b2 && b2.signal) {
          var m2 = b2.signal, q2 = function() {
            Zc(h2);
            m2.removeEventListener("abort", q2);
          };
          m2.addEventListener("abort", q2);
        }
        Hc(h2);
      });
    };
    exports.version = "18.1.0";
  }
});
var require_server_browser = __commonJS({
  "node_modules/react-dom/server.browser.js"(exports) {
    var l2;
    var s2;
    {
      l2 = require_react_dom_server_legacy_browser_production_min();
      s2 = require_react_dom_server_browser_production_min();
    }
    exports.version = l2.version;
    exports.renderToString = l2.renderToString;
    exports.renderToStaticMarkup = l2.renderToStaticMarkup;
    exports.renderToNodeStream = l2.renderToNodeStream;
    exports.renderToStaticNodeStream = l2.renderToStaticNodeStream;
    exports.renderToReadableStream = s2.renderToReadableStream;
  }
});
var import_react = __toESM(require_react(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_react3 = __toESM(require_react(), 1);
function compose(...handlerStack) {
  const handlers = handlerStack.flat();
  let next;
  const composed = handlers.reduceRight((prev, current) => async (request, context) => {
    const result = await runHandlerInSequence(request, context, current, prev);
    if (result) {
      return result;
    }
    return context.next();
  }, async () => next());
  return async (request, context) => {
    next = context.next;
    return composed(request, context);
  };
}
async function runHandler(handler, request, context) {
  try {
    const response = handler(request, context);
    if (response && "toResponse" in response) {
      return response.toResponse();
    }
    return response;
  } catch (error) {
    if (error instanceof Response) {
      return error;
    } else if ("toResponse" in error) {
      return error.toResponse();
    } else if (context.handleError) {
      return context.handleError(error);
    } else {
      console.error(error);
      return new Response("Internal Server Error", { status: 500 });
    }
  }
}
async function runHandlerInSequence(request, context, handler, next) {
  context.next = async () => next(request, context);
  return runHandler(handler, request, context);
}
var import_react4 = __toESM(require_react(), 1);
var import_server = __toESM(require_server_browser(), 1);
var import_react5 = __toESM(require_react(), 1);
var import_react6 = __toESM(require_react(), 1);
var import_react7 = __toESM(require_react(), 1);
var import_react8 = __toESM(require_react(), 1);
var import_react9 = __toESM(require_react(), 1);
var import_react10 = __toESM(require_react(), 1);
var import_react11 = __toESM(require_react(), 1);
var import_react12 = __toESM(require_react(), 1);
var React10 = __toESM(require_react(), 1);
__toESM(require_react(), 1);
__toESM(require_react(), 1);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS2 = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var require_ReactPropTypesSecret = __commonJS2({
  "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});
var require_factoryWithThrowingShims = __commonJS2({
  "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js"(exports, module) {
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    function emptyFunction() {
    }
    function emptyFunctionWithReset() {
    }
    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    module.exports = function() {
      function shim(props, propName, componentName, location2, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          return;
        }
        var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        err.name = "Invariant Violation";
        throw err;
      }
      shim.isRequired = shim;
      function getShim() {
        return shim;
      }
      var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});
var require_prop_types = __commonJS2({
  "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"(exports, module) {
    {
      module.exports = require_factoryWithThrowingShims()();
    }
  }
});
var require_react_fast_compare = __commonJS2({
  "../../node_modules/.pnpm/react-fast-compare@3.2.0/node_modules/react-fast-compare/index.js"(exports, module) {
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a2, b2) {
      if (a2 === b2)
        return true;
      if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
        if (a2.constructor !== b2.constructor)
          return false;
        var length, i2, keys;
        if (Array.isArray(a2)) {
          length = a2.length;
          if (length != b2.length)
            return false;
          for (i2 = length; i2-- !== 0; )
            if (!equal(a2[i2], b2[i2]))
              return false;
          return true;
        }
        var it;
        if (hasMap && a2 instanceof Map && b2 instanceof Map) {
          if (a2.size !== b2.size)
            return false;
          it = a2.entries();
          while (!(i2 = it.next()).done)
            if (!b2.has(i2.value[0]))
              return false;
          it = a2.entries();
          while (!(i2 = it.next()).done)
            if (!equal(i2.value[1], b2.get(i2.value[0])))
              return false;
          return true;
        }
        if (hasSet && a2 instanceof Set && b2 instanceof Set) {
          if (a2.size !== b2.size)
            return false;
          it = a2.entries();
          while (!(i2 = it.next()).done)
            if (!b2.has(i2.value[0]))
              return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a2) && ArrayBuffer.isView(b2)) {
          length = a2.length;
          if (length != b2.length)
            return false;
          for (i2 = length; i2-- !== 0; )
            if (a2[i2] !== b2[i2])
              return false;
          return true;
        }
        if (a2.constructor === RegExp)
          return a2.source === b2.source && a2.flags === b2.flags;
        if (a2.valueOf !== Object.prototype.valueOf)
          return a2.valueOf() === b2.valueOf();
        if (a2.toString !== Object.prototype.toString)
          return a2.toString() === b2.toString();
        keys = Object.keys(a2);
        length = keys.length;
        if (length !== Object.keys(b2).length)
          return false;
        for (i2 = length; i2-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b2, keys[i2]))
            return false;
        if (hasElementType && a2 instanceof Element)
          return false;
        for (i2 = length; i2-- !== 0; ) {
          if ((keys[i2] === "_owner" || keys[i2] === "__v" || keys[i2] === "__o") && a2.$$typeof) {
            continue;
          }
          if (!equal(a2[keys[i2]], b2[keys[i2]]))
            return false;
        }
        return true;
      }
      return a2 !== a2 && b2 !== b2;
    }
    module.exports = function isEqual(a2, b2) {
      try {
        return equal(a2, b2);
      } catch (error) {
        if ((error.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error;
      }
    };
  }
});
var require_invariant = __commonJS2({
  "../../node_modules/.pnpm/invariant@2.2.4/node_modules/invariant/invariant.js"(exports, module) {
    var invariant = function(condition, format, a2, b2, c2, d2, e2, f2) {
      if (!condition) {
        var error;
        if (format === void 0) {
          error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        } else {
          var args = [a2, b2, c2, d2, e2, f2];
          var argIndex = 0;
          error = new Error(format.replace(/%s/g, function() {
            return args[argIndex++];
          }));
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    module.exports = invariant;
  }
});
var require_shallowequal = __commonJS2({
  "../../node_modules/.pnpm/shallowequal@1.1.0/node_modules/shallowequal/index.js"(exports, module) {
    module.exports = function shallowEqual(objA, objB, compare, compareContext) {
      var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
      if (ret !== void 0) {
        return !!ret;
      }
      if (objA === objB) {
        return true;
      }
      if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
      }
      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) {
        return false;
      }
      var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
      for (var idx = 0; idx < keysA.length; idx++) {
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
          return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) {
          return false;
        }
      }
      return true;
    };
  }
});
var require_isbot_fast = __commonJS2({
  "../../node_modules/.pnpm/isbot-fast@1.2.0/node_modules/isbot-fast/index.js"(exports, module) {
    var bots = [
      "bot",
      "check",
      "cloud",
      "crawler",
      "download",
      "monitor",
      "preview",
      "scan",
      "spider",
      "google",
      "qwantify",
      "yahoo",
      "facebookexternalhit",
      "flipboard",
      "tumblr",
      "vkshare",
      "whatsapp",
      "curl",
      "perl",
      "python",
      "wget",
      "heritrix",
      "ia_archiver"
    ];
    var createRegex = () => new RegExp(`(${bots.join("|")})`, "i");
    var isBotRegex = createRegex();
    module.exports = (userAgent) => isBotRegex.test(userAgent);
    module.exports.extend = (additionalBots) => {
      bots = [...new Set(bots.concat(additionalBots))];
      isBotRegex = createRegex();
    };
  }
});
var import_prop_types = __toESM2(require_prop_types());
var import_react_fast_compare = __toESM2(require_react_fast_compare());
var import_invariant = __toESM2(require_invariant());
var import_shallowequal = __toESM2(require_shallowequal());
function a() {
  return a = Object.assign || function(t2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2)
        Object.prototype.hasOwnProperty.call(r2, n2) && (t2[n2] = r2[n2]);
    }
    return t2;
  }, a.apply(this, arguments);
}
function s(t2, e2) {
  t2.prototype = Object.create(e2.prototype), t2.prototype.constructor = t2, c(t2, e2);
}
function c(t2, e2) {
  return c = Object.setPrototypeOf || function(t3, e3) {
    return t3.__proto__ = e3, t3;
  }, c(t2, e2);
}
function u(t2, e2) {
  if (t2 == null)
    return {};
  var r2, n2, i2 = {}, o2 = Object.keys(t2);
  for (n2 = 0; n2 < o2.length; n2++)
    e2.indexOf(r2 = o2[n2]) >= 0 || (i2[r2] = t2[r2]);
  return i2;
}
var l = { BASE: "base", BODY: "body", HEAD: "head", HTML: "html", LINK: "link", META: "meta", NOSCRIPT: "noscript", SCRIPT: "script", STYLE: "style", TITLE: "title", FRAGMENT: "Symbol(react.fragment)" };
var p = { rel: ["amphtml", "canonical", "alternate"] };
var f = { type: ["application/ld+json"] };
var d = { charset: "", name: ["robots", "description"], property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"] };
var h = Object.keys(l).map(function(t2) {
  return l[t2];
});
var m = { accesskey: "accessKey", charset: "charSet", class: "className", contenteditable: "contentEditable", contextmenu: "contextMenu", "http-equiv": "httpEquiv", itemprop: "itemProp", tabindex: "tabIndex" };
var y = Object.keys(m).reduce(function(t2, e2) {
  return t2[m[e2]] = e2, t2;
}, {});
var T = function(t2, e2) {
  for (var r2 = t2.length - 1; r2 >= 0; r2 -= 1) {
    var n2 = t2[r2];
    if (Object.prototype.hasOwnProperty.call(n2, e2))
      return n2[e2];
  }
  return null;
};
var g = function(t2) {
  var e2 = T(t2, l.TITLE), r2 = T(t2, "titleTemplate");
  if (Array.isArray(e2) && (e2 = e2.join("")), r2 && e2)
    return r2.replace(/%s/g, function() {
      return e2;
    });
  var n2 = T(t2, "defaultTitle");
  return e2 || n2 || void 0;
};
var b = function(t2) {
  return T(t2, "onChangeClientState") || function() {
  };
};
var v = function(t2, e2) {
  return e2.filter(function(e3) {
    return e3[t2] !== void 0;
  }).map(function(e3) {
    return e3[t2];
  }).reduce(function(t3, e3) {
    return a({}, t3, e3);
  }, {});
};
var A = function(t2, e2) {
  return e2.filter(function(t3) {
    return t3[l.BASE] !== void 0;
  }).map(function(t3) {
    return t3[l.BASE];
  }).reverse().reduce(function(e3, r2) {
    if (!e3.length)
      for (var n2 = Object.keys(r2), i2 = 0; i2 < n2.length; i2 += 1) {
        var o2 = n2[i2].toLowerCase();
        if (t2.indexOf(o2) !== -1 && r2[o2])
          return e3.concat(r2);
      }
    return e3;
  }, []);
};
var C = function(t2, e2, r2) {
  var n2 = {};
  return r2.filter(function(e3) {
    return !!Array.isArray(e3[t2]) || (e3[t2] !== void 0 && console && typeof console.warn == "function" && console.warn("Helmet: " + t2 + ' should be of type "Array". Instead found type "' + typeof e3[t2] + '"'), false);
  }).map(function(e3) {
    return e3[t2];
  }).reverse().reduce(function(t3, r3) {
    var i2 = {};
    r3.filter(function(t4) {
      for (var r4, o3 = Object.keys(t4), a2 = 0; a2 < o3.length; a2 += 1) {
        var s3 = o3[a2], c3 = s3.toLowerCase();
        e2.indexOf(c3) === -1 || r4 === "rel" && t4[r4].toLowerCase() === "canonical" || c3 === "rel" && t4[c3].toLowerCase() === "stylesheet" || (r4 = c3), e2.indexOf(s3) === -1 || s3 !== "innerHTML" && s3 !== "cssText" && s3 !== "itemprop" || (r4 = s3);
      }
      if (!r4 || !t4[r4])
        return false;
      var u3 = t4[r4].toLowerCase();
      return n2[r4] || (n2[r4] = {}), i2[r4] || (i2[r4] = {}), !n2[r4][u3] && (i2[r4][u3] = true, true);
    }).reverse().forEach(function(e3) {
      return t3.push(e3);
    });
    for (var o2 = Object.keys(i2), s2 = 0; s2 < o2.length; s2 += 1) {
      var c2 = o2[s2], u2 = a({}, n2[c2], i2[c2]);
      n2[c2] = u2;
    }
    return t3;
  }, []).reverse();
};
var O = function(t2, e2) {
  if (Array.isArray(t2) && t2.length) {
    for (var r2 = 0; r2 < t2.length; r2 += 1)
      if (t2[r2][e2])
        return true;
  }
  return false;
};
var S = function(t2) {
  return Array.isArray(t2) ? t2.join("") : t2;
};
var E = function(t2, e2) {
  return Array.isArray(t2) ? t2.reduce(function(t3, r2) {
    return function(t4, e3) {
      for (var r3 = Object.keys(t4), n2 = 0; n2 < r3.length; n2 += 1)
        if (e3[r3[n2]] && e3[r3[n2]].includes(t4[r3[n2]]))
          return true;
      return false;
    }(r2, e2) ? t3.priority.push(r2) : t3.default.push(r2), t3;
  }, { priority: [], default: [] }) : { default: t2 };
};
var I = function(t2, e2) {
  var r2;
  return a({}, t2, ((r2 = {})[e2] = void 0, r2));
};
var P = [l.NOSCRIPT, l.SCRIPT, l.STYLE];
var w = function(t2, e2) {
  return e2 === void 0 && (e2 = true), e2 === false ? String(t2) : String(t2).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var x = function(t2) {
  return Object.keys(t2).reduce(function(e2, r2) {
    var n2 = t2[r2] !== void 0 ? r2 + '="' + t2[r2] + '"' : "" + r2;
    return e2 ? e2 + " " + n2 : n2;
  }, "");
};
var L = function(t2, e2) {
  return e2 === void 0 && (e2 = {}), Object.keys(t2).reduce(function(e3, r2) {
    return e3[m[r2] || r2] = t2[r2], e3;
  }, e2);
};
var j = function(e2, r2) {
  return r2.map(function(r3, n2) {
    var i2, o2 = ((i2 = { key: n2 })["data-rh"] = true, i2);
    return Object.keys(r3).forEach(function(t2) {
      var e3 = m[t2] || t2;
      e3 === "innerHTML" || e3 === "cssText" ? o2.dangerouslySetInnerHTML = { __html: r3.innerHTML || r3.cssText } : o2[e3] = r3[t2];
    }), import_react.default.createElement(e2, o2);
  });
};
var M = function(e2, r2, n2) {
  switch (e2) {
    case l.TITLE:
      return { toComponent: function() {
        return n3 = r2.titleAttributes, (i2 = { key: e3 = r2.title })["data-rh"] = true, o2 = L(n3, i2), [import_react.default.createElement(l.TITLE, o2, e3)];
        var e3, n3, i2, o2;
      }, toString: function() {
        return function(t2, e3, r3, n3) {
          var i2 = x(r3), o2 = S(e3);
          return i2 ? "<" + t2 + ' data-rh="true" ' + i2 + ">" + w(o2, n3) + "</" + t2 + ">" : "<" + t2 + ' data-rh="true">' + w(o2, n3) + "</" + t2 + ">";
        }(e2, r2.title, r2.titleAttributes, n2);
      } };
    case "bodyAttributes":
    case "htmlAttributes":
      return { toComponent: function() {
        return L(r2);
      }, toString: function() {
        return x(r2);
      } };
    default:
      return { toComponent: function() {
        return j(e2, r2);
      }, toString: function() {
        return function(t2, e3, r3) {
          return e3.reduce(function(e4, n3) {
            var i2 = Object.keys(n3).filter(function(t3) {
              return !(t3 === "innerHTML" || t3 === "cssText");
            }).reduce(function(t3, e5) {
              var i3 = n3[e5] === void 0 ? e5 : e5 + '="' + w(n3[e5], r3) + '"';
              return t3 ? t3 + " " + i3 : i3;
            }, ""), o2 = n3.innerHTML || n3.cssText || "", a2 = P.indexOf(t2) === -1;
            return e4 + "<" + t2 + ' data-rh="true" ' + i2 + (a2 ? "/>" : ">" + o2 + "</" + t2 + ">");
          }, "");
        }(e2, r2, n2);
      } };
  }
};
var k = function(t2) {
  var e2 = t2.baseTag, r2 = t2.bodyAttributes, n2 = t2.encode, i2 = t2.htmlAttributes, o2 = t2.noscriptTags, a2 = t2.styleTags, s2 = t2.title, c2 = s2 === void 0 ? "" : s2, u2 = t2.titleAttributes, h2 = t2.linkTags, m2 = t2.metaTags, y2 = t2.scriptTags, T2 = { toComponent: function() {
  }, toString: function() {
    return "";
  } };
  if (t2.prioritizeSeoTags) {
    var g2 = function(t3) {
      var e3 = t3.linkTags, r3 = t3.scriptTags, n3 = t3.encode, i3 = E(t3.metaTags, d), o3 = E(e3, p), a3 = E(r3, f);
      return { priorityMethods: { toComponent: function() {
        return [].concat(j(l.META, i3.priority), j(l.LINK, o3.priority), j(l.SCRIPT, a3.priority));
      }, toString: function() {
        return M(l.META, i3.priority, n3) + " " + M(l.LINK, o3.priority, n3) + " " + M(l.SCRIPT, a3.priority, n3);
      } }, metaTags: i3.default, linkTags: o3.default, scriptTags: a3.default };
    }(t2);
    T2 = g2.priorityMethods, h2 = g2.linkTags, m2 = g2.metaTags, y2 = g2.scriptTags;
  }
  return { priority: T2, base: M(l.BASE, e2, n2), bodyAttributes: M("bodyAttributes", r2, n2), htmlAttributes: M("htmlAttributes", i2, n2), link: M(l.LINK, h2, n2), meta: M(l.META, m2, n2), noscript: M(l.NOSCRIPT, o2, n2), script: M(l.SCRIPT, y2, n2), style: M(l.STYLE, a2, n2), title: M(l.TITLE, { title: c2, titleAttributes: u2 }, n2) };
};
var H = [];
var N = function(t2, e2) {
  var r2 = this;
  e2 === void 0 && (e2 = typeof document != "undefined"), this.instances = [], this.value = { setHelmet: function(t3) {
    r2.context.helmet = t3;
  }, helmetInstances: { get: function() {
    return r2.canUseDOM ? H : r2.instances;
  }, add: function(t3) {
    (r2.canUseDOM ? H : r2.instances).push(t3);
  }, remove: function(t3) {
    var e3 = (r2.canUseDOM ? H : r2.instances).indexOf(t3);
    (r2.canUseDOM ? H : r2.instances).splice(e3, 1);
  } } }, this.context = t2, this.canUseDOM = e2, e2 || (t2.helmet = k({ baseTag: [], bodyAttributes: {}, encodeSpecialCharacters: true, htmlAttributes: {}, linkTags: [], metaTags: [], noscriptTags: [], scriptTags: [], styleTags: [], title: "", titleAttributes: {} }));
};
var R = import_react.default.createContext({});
var D = import_prop_types.default.shape({ setHelmet: import_prop_types.default.func, helmetInstances: import_prop_types.default.shape({ get: import_prop_types.default.func, add: import_prop_types.default.func, remove: import_prop_types.default.func }) });
var U = typeof document != "undefined";
var q = /* @__PURE__ */ function(e2) {
  function r2(t2) {
    var n2;
    return (n2 = e2.call(this, t2) || this).helmetData = new N(n2.props.context, r2.canUseDOM), n2;
  }
  return s(r2, e2), r2.prototype.render = function() {
    return import_react.default.createElement(R.Provider, { value: this.helmetData.value }, this.props.children);
  }, r2;
}(import_react.Component);
q.canUseDOM = U, q.propTypes = { context: import_prop_types.default.shape({ helmet: import_prop_types.default.shape() }), children: import_prop_types.default.node.isRequired }, q.defaultProps = { context: {} }, q.displayName = "HelmetProvider";
var Y = function(t2, e2) {
  var r2, n2 = document.head || document.querySelector(l.HEAD), i2 = n2.querySelectorAll(t2 + "[data-rh]"), o2 = [].slice.call(i2), a2 = [];
  return e2 && e2.length && e2.forEach(function(e3) {
    var n3 = document.createElement(t2);
    for (var i3 in e3)
      Object.prototype.hasOwnProperty.call(e3, i3) && (i3 === "innerHTML" ? n3.innerHTML = e3.innerHTML : i3 === "cssText" ? n3.styleSheet ? n3.styleSheet.cssText = e3.cssText : n3.appendChild(document.createTextNode(e3.cssText)) : n3.setAttribute(i3, e3[i3] === void 0 ? "" : e3[i3]));
    n3.setAttribute("data-rh", "true"), o2.some(function(t3, e4) {
      return r2 = e4, n3.isEqualNode(t3);
    }) ? o2.splice(r2, 1) : a2.push(n3);
  }), o2.forEach(function(t3) {
    return t3.parentNode.removeChild(t3);
  }), a2.forEach(function(t3) {
    return n2.appendChild(t3);
  }), { oldTags: o2, newTags: a2 };
};
var B = function(t2, e2) {
  var r2 = document.getElementsByTagName(t2)[0];
  if (r2) {
    for (var n2 = r2.getAttribute("data-rh"), i2 = n2 ? n2.split(",") : [], o2 = [].concat(i2), a2 = Object.keys(e2), s2 = 0; s2 < a2.length; s2 += 1) {
      var c2 = a2[s2], u2 = e2[c2] || "";
      r2.getAttribute(c2) !== u2 && r2.setAttribute(c2, u2), i2.indexOf(c2) === -1 && i2.push(c2);
      var l2 = o2.indexOf(c2);
      l2 !== -1 && o2.splice(l2, 1);
    }
    for (var p2 = o2.length - 1; p2 >= 0; p2 -= 1)
      r2.removeAttribute(o2[p2]);
    i2.length === o2.length ? r2.removeAttribute("data-rh") : r2.getAttribute("data-rh") !== a2.join(",") && r2.setAttribute("data-rh", a2.join(","));
  }
};
var K = function(t2, e2) {
  var r2 = t2.baseTag, n2 = t2.htmlAttributes, i2 = t2.linkTags, o2 = t2.metaTags, a2 = t2.noscriptTags, s2 = t2.onChangeClientState, c2 = t2.scriptTags, u2 = t2.styleTags, p2 = t2.title, f2 = t2.titleAttributes;
  B(l.BODY, t2.bodyAttributes), B(l.HTML, n2), function(t3, e3) {
    t3 !== void 0 && document.title !== t3 && (document.title = S(t3)), B(l.TITLE, e3);
  }(p2, f2);
  var d2 = { baseTag: Y(l.BASE, r2), linkTags: Y(l.LINK, i2), metaTags: Y(l.META, o2), noscriptTags: Y(l.NOSCRIPT, a2), scriptTags: Y(l.SCRIPT, c2), styleTags: Y(l.STYLE, u2) }, h2 = {}, m2 = {};
  Object.keys(d2).forEach(function(t3) {
    var e3 = d2[t3], r3 = e3.newTags, n3 = e3.oldTags;
    r3.length && (h2[t3] = r3), n3.length && (m2[t3] = d2[t3].oldTags);
  }), e2 && e2(), s2(t2, h2, m2);
};
var _ = null;
var z = /* @__PURE__ */ function(t2) {
  function e2() {
    for (var e3, r3 = arguments.length, n2 = new Array(r3), i2 = 0; i2 < r3; i2++)
      n2[i2] = arguments[i2];
    return (e3 = t2.call.apply(t2, [this].concat(n2)) || this).rendered = false, e3;
  }
  s(e2, t2);
  var r2 = e2.prototype;
  return r2.shouldComponentUpdate = function(t3) {
    return !(0, import_shallowequal.default)(t3, this.props);
  }, r2.componentDidUpdate = function() {
    this.emitChange();
  }, r2.componentWillUnmount = function() {
    this.props.context.helmetInstances.remove(this), this.emitChange();
  }, r2.emitChange = function() {
    var t3, e3, r3 = this.props.context, n2 = r3.setHelmet, i2 = null, o2 = (t3 = r3.helmetInstances.get().map(function(t4) {
      var e4 = a({}, t4.props);
      return delete e4.context, e4;
    }), { baseTag: A(["href"], t3), bodyAttributes: v("bodyAttributes", t3), defer: T(t3, "defer"), encode: T(t3, "encodeSpecialCharacters"), htmlAttributes: v("htmlAttributes", t3), linkTags: C(l.LINK, ["rel", "href"], t3), metaTags: C(l.META, ["name", "charset", "http-equiv", "property", "itemprop"], t3), noscriptTags: C(l.NOSCRIPT, ["innerHTML"], t3), onChangeClientState: b(t3), scriptTags: C(l.SCRIPT, ["src", "innerHTML"], t3), styleTags: C(l.STYLE, ["cssText"], t3), title: g(t3), titleAttributes: v("titleAttributes", t3), prioritizeSeoTags: O(t3, "prioritizeSeoTags") });
    q.canUseDOM ? (e3 = o2, _ && cancelAnimationFrame(_), e3.defer ? _ = requestAnimationFrame(function() {
      K(e3, function() {
        _ = null;
      });
    }) : (K(e3), _ = null)) : k && (i2 = k(o2)), n2(i2);
  }, r2.init = function() {
    this.rendered || (this.rendered = true, this.props.context.helmetInstances.add(this), this.emitChange());
  }, r2.render = function() {
    return this.init(), null;
  }, e2;
}(import_react.Component);
z.propTypes = { context: D.isRequired }, z.displayName = "HelmetDispatcher";
var F = ["children"];
var G = ["children"];
var W = /* @__PURE__ */ function(e2) {
  function r2() {
    return e2.apply(this, arguments) || this;
  }
  s(r2, e2);
  var o2 = r2.prototype;
  return o2.shouldComponentUpdate = function(t2) {
    return !(0, import_react_fast_compare.default)(I(this.props, "helmetData"), I(t2, "helmetData"));
  }, o2.mapNestedChildrenToProps = function(t2, e3) {
    if (!e3)
      return null;
    switch (t2.type) {
      case l.SCRIPT:
      case l.NOSCRIPT:
        return { innerHTML: e3 };
      case l.STYLE:
        return { cssText: e3 };
      default:
        throw new Error("<" + t2.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    }
  }, o2.flattenArrayTypeChildren = function(t2) {
    var e3, r3 = t2.child, n2 = t2.arrayTypeChildren;
    return a({}, n2, ((e3 = {})[r3.type] = [].concat(n2[r3.type] || [], [a({}, t2.newChildProps, this.mapNestedChildrenToProps(r3, t2.nestedChildren))]), e3));
  }, o2.mapObjectTypeChildren = function(t2) {
    var e3, r3, n2 = t2.child, i2 = t2.newProps, o3 = t2.newChildProps, s2 = t2.nestedChildren;
    switch (n2.type) {
      case l.TITLE:
        return a({}, i2, ((e3 = {})[n2.type] = s2, e3.titleAttributes = a({}, o3), e3));
      case l.BODY:
        return a({}, i2, { bodyAttributes: a({}, o3) });
      case l.HTML:
        return a({}, i2, { htmlAttributes: a({}, o3) });
      default:
        return a({}, i2, ((r3 = {})[n2.type] = a({}, o3), r3));
    }
  }, o2.mapArrayTypeChildrenToProps = function(t2, e3) {
    var r3 = a({}, e3);
    return Object.keys(t2).forEach(function(e4) {
      var n2;
      r3 = a({}, r3, ((n2 = {})[e4] = t2[e4], n2));
    }), r3;
  }, o2.warnOnInvalidChildren = function(t2, e3) {
    return (0, import_invariant.default)(h.some(function(e4) {
      return t2.type === e4;
    }), typeof t2.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : "Only elements types " + h.join(", ") + " are allowed. Helmet does not support rendering <" + t2.type + "> elements. Refer to our API for more information."), (0, import_invariant.default)(!e3 || typeof e3 == "string" || Array.isArray(e3) && !e3.some(function(t3) {
      return typeof t3 != "string";
    }), "Helmet expects a string as a child of <" + t2.type + ">. Did you forget to wrap your children in braces? ( <" + t2.type + ">{``}</" + t2.type + "> ) Refer to our API for more information."), true;
  }, o2.mapChildrenToProps = function(e3, r3) {
    var n2 = this, i2 = {};
    return import_react.default.Children.forEach(e3, function(t2) {
      if (t2 && t2.props) {
        var e4 = t2.props, o3 = e4.children, a2 = u(e4, F), s2 = Object.keys(a2).reduce(function(t3, e5) {
          return t3[y[e5] || e5] = a2[e5], t3;
        }, {}), c2 = t2.type;
        switch (typeof c2 == "symbol" ? c2 = c2.toString() : n2.warnOnInvalidChildren(t2, o3), c2) {
          case l.FRAGMENT:
            r3 = n2.mapChildrenToProps(o3, r3);
            break;
          case l.LINK:
          case l.META:
          case l.NOSCRIPT:
          case l.SCRIPT:
          case l.STYLE:
            i2 = n2.flattenArrayTypeChildren({ child: t2, arrayTypeChildren: i2, newChildProps: s2, nestedChildren: o3 });
            break;
          default:
            r3 = n2.mapObjectTypeChildren({ child: t2, newProps: r3, newChildProps: s2, nestedChildren: o3 });
        }
      }
    }), this.mapArrayTypeChildrenToProps(i2, r3);
  }, o2.render = function() {
    var e3 = this.props, r3 = e3.children, n2 = u(e3, G), i2 = a({}, n2), o3 = n2.helmetData;
    return r3 && (i2 = this.mapChildrenToProps(r3, i2)), !o3 || o3 instanceof N || (o3 = new N(o3.context, o3.instances)), o3 ? /* @__PURE__ */ import_react.default.createElement(z, a({}, i2, { context: o3.value, helmetData: void 0 })) : /* @__PURE__ */ import_react.default.createElement(R.Consumer, null, function(e4) {
      return import_react.default.createElement(z, a({}, i2, { context: e4 }));
    });
  }, r2;
}(import_react.Component);
W.propTypes = { base: import_prop_types.default.object, bodyAttributes: import_prop_types.default.object, children: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.node), import_prop_types.default.node]), defaultTitle: import_prop_types.default.string, defer: import_prop_types.default.bool, encodeSpecialCharacters: import_prop_types.default.bool, htmlAttributes: import_prop_types.default.object, link: import_prop_types.default.arrayOf(import_prop_types.default.object), meta: import_prop_types.default.arrayOf(import_prop_types.default.object), noscript: import_prop_types.default.arrayOf(import_prop_types.default.object), onChangeClientState: import_prop_types.default.func, script: import_prop_types.default.arrayOf(import_prop_types.default.object), style: import_prop_types.default.arrayOf(import_prop_types.default.object), title: import_prop_types.default.string, titleAttributes: import_prop_types.default.object, titleTemplate: import_prop_types.default.string, prioritizeSeoTags: import_prop_types.default.bool, helmetData: import_prop_types.default.object }, W.defaultProps = { defer: true, encodeSpecialCharacters: true, prioritizeSeoTags: false }, W.displayName = "Helmet";
async function renderApiRoute(req, ctx) {
  const apiRoutes = await import("./virtual_rakkasjs_api-routes.0a71bd76.js");
  for (const [regex, importers] of apiRoutes.default) {
    const match = regex.exec(ctx.url.pathname);
    if (!match)
      continue;
    ctx.params = match.groups || {};
    const [endpointImporter, ...middlewareImporters] = importers;
    let endpoint = await endpointImporter();
    if (endpoint.default)
      endpoint = endpoint.default;
    let method = req.method.toLowerCase();
    if (method === "delete")
      method = "del";
    const endpointHandler = endpoint[method] || endpoint.all;
    if (!endpointHandler)
      return null;
    const middlewares = await Promise.all(middlewareImporters.map((importer) => importer().then((module) => module.default)));
    const handler = compose(...middlewares, endpointHandler, ctx.next);
    return handler(req, ctx);
  }
}
var lastRenderedId;
var navigationPromise;
var navigationResolve;
function useLocation() {
  const staticLocation = (0, import_react6.useContext)(LocationContext);
  const currentLocation = (0, import_react6.useSyncExternalStore)(subscribeToLocation, getLocationSnapshot, (0, import_react6.useCallback)(() => staticLocation, [staticLocation]));
  const deferredLocation = (0, import_react6.useDeferredValue)(currentLocation);
  (0, import_react6.useEffect)(() => {
    base.href = deferredLocation;
    lastRenderedId = history.state.id;
    restoreScrollPosition();
    navigationResolve == null ? void 0 : navigationResolve();
    navigationPromise = void 0;
    navigationResolve = void 0;
  }, [deferredLocation]);
  const current = (0, import_react6.useMemo)(() => new URL(deferredLocation), [deferredLocation]);
  const pending = (0, import_react6.useMemo)(() => currentLocation === deferredLocation ? void 0 : new URL(currentLocation), [currentLocation, deferredLocation]);
  return {
    current,
    pending
  };
}
function restoreScrollPosition() {
  var _a;
  const scrollPosition = sessionStorage.getItem(`rakkas:${(_a = history.state) == null ? void 0 : _a.id}`);
  if (scrollPosition) {
    const { x: x2, y: y2 } = JSON.parse(scrollPosition);
    scrollTo(x2, y2);
  } else {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView();
      }
    } else {
      scrollTo(0, 0);
    }
  }
}
async function navigate(to, options) {
  const url = new URL(to, location.href);
  if (url.origin !== location.origin) {
    location.href = url.href;
    return new Promise(() => {
    });
  }
  const { replace, data } = options || {};
  const id = createUniqueId();
  if (replace) {
    history.replaceState({ id, data, index: history.state.index }, "", to);
  } else {
    const index = nextIndex++;
    history.pushState({ id, data, index }, "", to);
  }
  navigationPromise = navigationPromise || new Promise((resolve) => {
    navigationResolve = resolve;
  });
  handleNavigation();
  return navigationPromise.then(() => url.href === location.href);
}
if (typeof window !== "undefined") {
  window.navigate = navigate;
}
var LocationContext = (0, import_react6.createContext)(void 0);
var locationChangeListeners = /* @__PURE__ */ new Set();
function subscribeToLocation(onStoreChange) {
  locationChangeListeners.add(onStoreChange);
  return () => locationChangeListeners.delete(onStoreChange);
}
function getLocationSnapshot() {
  return location.href;
}
var base;
async function handleNavigation() {
  const scrollPosition = { x: scrollX, y: scrollY };
  sessionStorage.setItem(`rakkas:${lastRenderedId}`, JSON.stringify(scrollPosition));
  locationChangeListeners.forEach((listener) => listener());
}
function createUniqueId() {
  return Math.random().toString(36).slice(2, 9);
}
var nextIndex = 0;
var Link = (0, import_react6.forwardRef)((_a, ref) => {
  var _b = _a, {
    onClick,
    historyState,
    noScroll,
    replaceState,
    onNavigationStart
  } = _b, props = __objRest(_b, [
    "onClick",
    "historyState",
    "noScroll",
    "replaceState",
    "onNavigationStart"
  ]);
  return /* @__PURE__ */ import_react6.default.createElement("a", __spreadProps(__spreadValues({}, props), {
    ref,
    onClick: (e2) => {
      onClick == null ? void 0 : onClick(e2);
      if (!shouldHandleClick(e2)) {
        return;
      }
      onNavigationStart == null ? void 0 : onNavigationStart();
      navigate(e2.currentTarget.href, {
        data: historyState,
        replace: replaceState,
        scroll: !noScroll
      });
      e2.preventDefault();
    }
  }));
});
Link.displayName = "Link";
var StyledLink = (0, import_react6.forwardRef)((_a, ref) => {
  var _b = _a, {
    activeClass,
    pendingClass,
    pendingStyle,
    activeStyle,
    onCompareUrls = defaultCompareUrls,
    onNavigationStart,
    className,
    style
  } = _b, props = __objRest(_b, [
    "activeClass",
    "pendingClass",
    "pendingStyle",
    "activeStyle",
    "onCompareUrls",
    "onNavigationStart",
    "className",
    "style"
  ]);
  const [navigating, setNavigating] = (0, import_react6.useState)(false);
  const { current, pending } = useLocation();
  const hasPending = !!pending;
  (0, import_react6.useEffect)(() => {
    if (!hasPending) {
      setNavigating(false);
    }
  }, [hasPending]);
  const classNames = className ? [className] : [];
  if (props.href !== void 0 && (activeClass || pendingClass || activeStyle || pendingStyle)) {
    const url = new URL(props.href, current);
    if (navigating) {
      if (pendingClass)
        classNames.push(pendingClass);
      if (pendingStyle)
        style = __spreadValues(__spreadValues({}, style), pendingStyle);
    }
    if (current && onCompareUrls(new URL(current), url)) {
      if (activeClass)
        classNames.push(activeClass);
      if (activeStyle)
        style = __spreadValues(__spreadValues({}, style), activeStyle);
    }
  }
  return /* @__PURE__ */ import_react6.default.createElement(Link, __spreadProps(__spreadValues({}, props), {
    ref,
    className: classNames.join(" ") || void 0,
    style,
    onNavigationStart: () => {
      setNavigating(true);
      onNavigationStart == null ? void 0 : onNavigationStart();
    }
  }));
});
StyledLink.displayName = "StyledLink";
function defaultCompareUrls(a2, b2) {
  return a2.href === b2.href;
}
function shouldHandleClick(e2) {
  const t2 = e2.currentTarget;
  return (t2 instanceof HTMLAnchorElement || t2 instanceof SVGAElement || t2 instanceof HTMLAreaElement) && !e2.defaultPrevented && t2.href !== void 0 && e2.button === 0 && !e2.shiftKey && !e2.altKey && !e2.ctrlKey && (!t2.target || t2.target === "_self") && !t2.hasAttribute("download") && !t2.relList.contains("external");
}
function findRoute(routes, path) {
  for (const route of routes) {
    const re = route[0];
    const match = path.match(re);
    if (!match)
      continue;
    return {
      route,
      params: match.groups || {}
    };
  }
}
function App() {
  const { current: url } = useLocation();
  const lastRoute = (0, import_react5.useContext)(RouteContext);
  if (!lastRoute.last || lastRoute.last.pathname !== url.pathname) {
    throw loadRoute(url, lastRoute.found).then((route) => {
      var _a;
      lastRoute.last = route;
      (_a = lastRoute.onRendered) == null ? void 0 : _a.call(lastRoute);
    }).catch((err) => {
      console.error(err);
    });
  }
  const app = lastRoute.last.app;
  return app;
}
var RouteContext = (0, import_react5.createContext)({});
async function loadRoute(url, lastFound) {
  let found = lastFound;
  if (!found) {
    const routes = (await import("./virtual_rakkasjs_client-page-routes.a69dd7f3.js")).default;
    found = findRoute(routes, url.pathname);
    if (!found) {
      throw new Error("Page not found");
    }
  }
  const importers = found.route[1];
  const promises = importers.map(async (importer) => importer());
  const modules = await Promise.all(promises);
  const components = modules.map((m2) => m2.default || (({ children }) => children));
  const app = components.reduce((prev, Component2) => /* @__PURE__ */ import_react5.default.createElement(Component2, {
    children: prev,
    url,
    params: found.params
  }), null);
  return {
    pathname: url.pathname,
    app
  };
}
var import_isbot_fast = __toESM2(require_isbot_fast(), 1);
var ResponseContext = (0, import_react7.createContext)(() => void 0);
var createServerHooks = () => {
  const helmetContext = {};
  return {
    wrapApp: (app) => {
      return /* @__PURE__ */ import_react8.default.createElement(q, {
        context: helmetContext
      }, app);
    },
    emitToDocumentHead() {
      const { helmet } = helmetContext;
      return helmet.title.toString() + helmet.meta.toString() + helmet.base.toString() + helmet.link.toString() + helmet.style.toString() + helmet.script.toString() + helmet.noscript.toString();
    }
  };
};
var server_hooks_default = createServerHooks;
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key) {
            return walk(thing[key]);
          });
      }
    }
  }
  walk(value);
  var names = /* @__PURE__ */ new Map();
  Array.from(counts).filter(function(entry) {
    return entry[1] > 1;
  }).sort(function(a2, b2) {
    return b2[1] - a2[1];
  }).forEach(function(entry, i2) {
    names.set(entry[0], getName(i2));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify2(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v2, i2) {
          return i2 in thing ? stringify2(v2) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify2).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key) {
          return safeKey(key) + ":" + stringify2(thing[key]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify2(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify2(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v2, i2) {
            statements_1.push(name + "[" + i2 + "]=" + stringify2(v2));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v2) {
            return "add(" + stringify2(v2) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k2 = _a[0], v2 = _a[1];
            return "set(" + stringify2(k2) + ", " + stringify2(v2) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key) {
            statements_1.push("" + name + safeProp(key) + "=" + stringify2(thing[key]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c2) {
  return escaped[c2] || c2;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i2 = 0; i2 < str.length; i2 += 1) {
    var char = str.charAt(i2);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i2 + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i2];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
var devalue_esm_default = devalue;
var createServerHooks2 = () => {
  const cache = {
    _items: /* @__PURE__ */ Object.create(null),
    _newItems: /* @__PURE__ */ Object.create(null),
    _hasNewItems: false,
    _errorItems: /* @__PURE__ */ Object.create(null),
    _getNewItems() {
      const items = this._newItems;
      this._newItems = /* @__PURE__ */ Object.create(null);
      this._hasNewItems = false;
      return items;
    },
    has(key) {
      return key in this._items;
    },
    get(key) {
      if (key in this._errorItems) {
        throw this._errorItems[key];
      }
      if (!this.has(key)) {
        return void 0;
      }
      const content = this._items[key];
      const result = content instanceof Promise ? { promise: content } : { value: content };
      return result;
    },
    set(key, valueOrPromise) {
      this._items[key] = valueOrPromise;
      if (valueOrPromise instanceof Promise) {
        valueOrPromise.then((value) => {
          this._items[key] = this._newItems[key] = value;
          this._hasNewItems = true;
        }, (error) => {
          delete this._items[key];
          this._errorItems[key] = error;
        });
      } else {
        this._newItems[key] = valueOrPromise;
        this._hasNewItems = true;
      }
    },
    subscribe() {
      throw new Error("Cannot subscribe on the server");
    }
  };
  return {
    wrapApp: (app) => {
      return /* @__PURE__ */ import_react9.default.createElement(QueryCacheContext.Provider, {
        value: cache
      }, app);
    },
    emitToDocumentHead() {
      const newItemsString = devalue_esm_default(cache._getNewItems());
      return `<script>$RSC=${newItemsString}<\/script>`;
    },
    emitBeforeSsrChunk() {
      if (cache._hasNewItems) {
        const newItemsString = devalue_esm_default(cache._getNewItems());
        return `<script>Object.assign($RSC,${newItemsString})<\/script>`;
      }
    }
  };
};
var server_hooks_default2 = createServerHooks2;
var types = [
  ts({
    is: (val) => val === void 0,
    match: (str) => str === "!undefined",
    serialize: () => "!undefined",
    deserialize: () => void 0
  }),
  ts({
    is: (val) => val === Infinity,
    match: (str) => str === "!Infinity",
    serialize: () => "!Infinity",
    deserialize: () => Infinity
  }),
  ts({
    is: (val) => val === -Infinity,
    match: (str) => str === "!-Infinity",
    serialize: () => "!-Infinity",
    deserialize: () => -Infinity
  }),
  ts({
    is: (val) => typeof val === "number" && isNaN(val),
    match: (str) => str === "!NaN",
    serialize: () => "!NaN",
    deserialize: () => NaN
  }),
  ts({
    is: (val) => val instanceof Date,
    match: (str) => str.startsWith("!Date:"),
    serialize: (val) => "!Date:" + val.toISOString(),
    deserialize: (str) => new Date(str.slice("!Date:".length))
  }),
  ts({
    is: (val) => typeof val === "bigint",
    match: (str) => str.startsWith("!BigInt:"),
    serialize: (val) => "!BigInt:" + val.toString(),
    deserialize: (str) => {
      if (typeof BigInt === "undefined") {
        throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");
      }
      return BigInt(str.slice("!BigInt:".length));
    }
  }),
  ts({
    is: (val) => val instanceof RegExp,
    match: (str) => str.startsWith("!RegExp:"),
    serialize: (val) => "!RegExp:" + val.toString(),
    deserialize: (str) => {
      str = str.slice("!RegExp:".length);
      const args = str.match(/\/(.*)\/(.*)?/);
      const pattern = args[1];
      const flags = args[2];
      return new RegExp(pattern, flags);
    }
  }),
  ts({
    is: (val) => val instanceof Map,
    match: (str) => str.startsWith("!Map:"),
    serialize: (val, serializer) => "!Map:" + serializer(Array.from(val.entries())),
    deserialize: (str, deserializer) => new Map(deserializer(str.slice("!Map:".length)))
  }),
  ts({
    is: (val) => val instanceof Set,
    match: (str) => str.startsWith("!Set:"),
    serialize: (val, serializer) => "!Set:" + serializer(Array.from(val.values())),
    deserialize: (str, deserializer) => new Set(deserializer(str.slice("!Set:".length)))
  }),
  ts({
    is: (val) => typeof val === "string" && val.startsWith("!"),
    match: (str) => str.startsWith("!"),
    serialize: (val) => "!" + val,
    deserialize: (str) => str.slice(1)
  })
];
function ts(t2) {
  return t2;
}
function stringify(value, { forbidReactElements, space, valueName = "value" } = {}) {
  const path = [];
  const serializer = (val) => JSON.stringify(val, replacer, space);
  return serializer(value);
  function replacer(key, value2) {
    if (key !== "") {
      path.push(key);
    }
    if (forbidReactElements && isReactElement(value2)) {
      throw new Error(genErrMsg("React element"));
    }
    if (isFunction(value2)) {
      const functionName = value2.name;
      throw new Error(genErrMsg("function", path.length === 0 ? functionName : void 0));
    }
    const valueOriginal = this[key];
    for (const { is, serialize } of types.slice().reverse()) {
      if (is(valueOriginal)) {
        return serialize(valueOriginal, serializer);
      }
    }
    return value2;
  }
  function genErrMsg(valueType, valName) {
    const name = valName ? " `" + valName + "`" : "";
    const location2 = path.length === 0 ? "" : ` ${name ? "at " : ""}\`${valueName}[${path.map((p2) => `'${p2}'`).join("][")}]\``;
    const fallback = name === "" && location2 === "" ? ` ${valueName}` : "";
    return `Cannot serialize${name}${location2}${fallback} because it is a ${valueType}. Serializer: https://github.com/brillout/json-s`;
  }
}
function isReactElement(value) {
  return typeof value === "object" && value !== null && String(value["$$typeof"]) === "Symbol(react.element)";
}
function isFunction(thing) {
  return thing instanceof Function || typeof thing === "function";
}
function parse(str) {
  const value = JSON.parse(str);
  return modifier(value);
}
function modifier(value) {
  if (typeof value === "string") {
    return reviver(value);
  }
  if (typeof value === "object" && value !== null) {
    Object.entries(value).forEach(([key, val]) => {
      value[key] = modifier(val);
    });
  }
  return value;
}
function reviver(value) {
  for (const { match, deserialize } of types) {
    if (match(value)) {
      return deserialize(value, parse);
    }
  }
  return value;
}
var createServerHooks3 = (req, ctx) => {
  return {
    async handleRequest() {
      if (!ctx.url.pathname.startsWith("/_data/development/"))
        return void 0;
      const [, , , moduleId, counter, ...closure] = ctx.url.pathname.split("/").map((s2) => decodeURIComponent(s2));
      const closureContents = closure.map(parse);
      const manifest = await import("./virtual_rakkasjs_run-server-side_manifest.51334cf8.js");
      const importer = manifest.default[moduleId];
      if (!importer)
        return;
      const module = await importer();
      if (!module.$runServerSide$)
        return;
      const fn = module.$runServerSide$[Number(counter)];
      const result = await fn(closureContents, {});
      return new Response(devalue_esm_default(result));
    }
  };
};
var server_hooks_default3 = createServerHooks3;
var createClientSideNavigationServerHooks = (request, ctx) => ({
  wrapApp(app) {
    return /* @__PURE__ */ import_react10.default.createElement(LocationContext.Provider, {
      value: ctx.url.href
    }, app);
  }
});
var server_hooks_default4 = createClientSideNavigationServerHooks;
var serverHooks = [
  server_hooks_default4,
  createIsomorphicFetchHooks,
  server_hooks_default2,
  server_hooks_default,
  server_hooks_default3
];
var feature_server_hooks_default = serverHooks;
async function renderPageRoute(req, ctx) {
  var _a2;
  var _a, _b, _c, _d, _e;
  ctx.locals = {};
  const hooksObjects = feature_server_hooks_default.map((fn) => fn(req, ctx));
  for (const hooks of hooksObjects) {
    if (hooks.handleRequest) {
      const response = await hooks.handleRequest();
      if (response) {
        return response;
      }
    }
  }
  const routes = (await import("./virtual_rakkasjs_server-page-routes.48bd38ce.js")).default;
  const found = findRoute(routes, ctx.url.pathname);
  if (!found)
    return;
  let redirected;
  let status = void 0;
  const headers = new Headers({
    "Content-Type": "text/html; charset=utf-8"
  });
  function updateHeaders(props) {
    redirected = redirected != null ? redirected : props.redirect;
    status = status != null ? status : props.status;
    if (props.headers) {
      for (const [key, value] of Object.entries(props.headers)) {
        const values = Array.isArray(value) ? value : [value];
        for (const v2 of values) {
          headers.append(key, v2);
        }
      }
    }
  }
  let app = /* @__PURE__ */ import_react4.default.createElement(App, null);
  for (const hooks of hooksObjects) {
    if (hooks.wrapApp) {
      app = hooks.wrapApp(app);
    }
  }
  let resolveRenderPromise;
  const renderPromise = new Promise((resolve) => resolveRenderPromise = resolve);
  app = /* @__PURE__ */ import_react4.default.createElement("div", {
    id: "root"
  }, /* @__PURE__ */ import_react4.default.createElement(ResponseContext.Provider, {
    value: updateHeaders
  }, /* @__PURE__ */ import_react4.default.createElement(RouteContext.Provider, {
    value: {
      onRendered() {
        resolveRenderPromise();
      },
      found
    }
  }, /* @__PURE__ */ import_react4.default.createElement(import_react4.Suspense, null, app))));
  const moduleIds = found.route[2];
  let cssOutput = "";
  {
    const moduleSet = new Set(moduleIds);
    const cssSet = /* @__PURE__ */ new Set();
    for (const moduleId of moduleSet) {
      const manifestEntry = (_a = clientManifest) == null ? void 0 : _a[moduleId];
      if (!manifestEntry)
        continue;
      (_b = manifestEntry.imports) == null ? void 0 : _b.forEach((id) => moduleSet.add(id));
      (_c = manifestEntry.dynamicImports) == null ? void 0 : _c.forEach((id) => moduleSet.add(id));
      (_d = manifestEntry.css) == null ? void 0 : _d.forEach((id) => cssSet.add(id));
    }
    for (const cssFile of cssSet) {
      cssOutput += `<link rel="stylesheet" href=${escapeHtml("/" + cssFile)}>`;
    }
  }
  let scriptPath = "virtual:rakkasjs:client-entry";
  {
    scriptPath = (_a2 = (_e = clientManifest[scriptPath]) == null ? void 0 : _e.file) != null ? _a2 : scriptPath;
  }
  const reactStream = await (0, import_server.renderToReadableStream)(/* @__PURE__ */ import_react4.default.createElement(import_react4.StrictMode, null, app), {
    bootstrapModules: ["/" + scriptPath],
    onError(error) {
      console.error(error);
    }
  });
  await renderPromise.catch((error) => console.error(error));
  const userAgent = req.headers.get("user-agent");
  if (userAgent && (0, import_isbot_fast.default)(userAgent)) {
    await reactStream.allReady;
  } else {
    await Promise.resolve();
  }
  if (redirected) {
    return new Response(redirectBody(headers.get("location")), {
      status,
      headers
    });
  }
  let head = `<!DOCTYPE html><html><head>` + cssOutput + `<meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><meta http-equiv="X-UA-Compatible" content="ie=edge" />`;
  for (const hooks of hooksObjects) {
    if (hooks.emitToDocumentHead) {
      head += hooks.emitToDocumentHead();
    }
  }
  head += `</head><body>`;
  const textEncoder = new TextEncoder();
  const wrapperStream = new ReadableStream({
    start(controller) {
      controller.enqueue(textEncoder.encode(head));
    },
    async pull(controller) {
      for await (const chunk of reactStream) {
        for (const hooks of hooksObjects) {
          if (hooks.emitBeforeSsrChunk) {
            const text = hooks.emitBeforeSsrChunk();
            if (text) {
              controller.enqueue(textEncoder.encode(text));
            }
          }
        }
        controller.enqueue(chunk);
      }
      controller.enqueue(textEncoder.encode("</body></html>"));
      controller.close();
    }
  });
  return new Response(wrapperStream, { status, headers });
}
function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function redirectBody(href) {
  const escaped2 = escapeHtml(href);
  return `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${escaped2}"></head><body><a href="${escaped2}">${escaped2}</a></body></html>`;
}
async function hattipHandler(req, ctx) {
  ctx.url = new URL(req.url);
  ctx.locals = {};
  const handlers = [renderApiRoute, renderPageRoute];
  for (const handler of handlers) {
    const response = await handler(req, ctx);
    if (response)
      return response;
  }
  return null;
}
function createIsomorphicFetchHooks(request, ctx) {
  ctx.fetch = async (input, init) => {
    let url;
    if (!(input instanceof Request)) {
      url = new URL(input, ctx.url);
      input = url.href;
    }
    const newRequest = new Request(input, init);
    url = url || new URL(newRequest.url, ctx.url);
    const sameOrigin = url.origin === ctx.url.origin;
    const includeCredentials = newRequest.credentials === "include" || newRequest.credentials === "same-origin" && sameOrigin;
    if (includeCredentials) {
      const cookie = request.headers.get("cookie");
      if (cookie !== null) {
        newRequest.headers.set("cookie", cookie);
      }
      const authorization = request.headers.get("authorization");
      if (authorization !== null) {
        newRequest.headers.set("authorization", authorization);
      }
    } else {
      newRequest.headers.delete("cookie");
      newRequest.headers.delete("authorization");
    }
    let response;
    if (sameOrigin) {
      response = await runHandler(hattipHandler, newRequest, {
        ip: ctx.ip,
        waitUntil: ctx.waitUntil,
        next: () => fetch(newRequest)
      });
    }
    return response != null ? response : fetch(newRequest);
  };
  return {
    wrapApp: (app) => /* @__PURE__ */ import_react3.default.createElement(IsomorphicFetchContext.Provider, {
      value: ctx.fetch
    }, app)
  };
}
var IsomorphicFetchContext = (0, import_react3.createContext)(void 0);
var QueryCacheContext = (0, import_react2.createContext)(void 0);
var DEFAULT_CACHE_TIME = 5 * 60 * 1e3;
var DEFAULT_STALE_TIME = 100;
function useQuery(key, fn, options = {}) {
  const result = useQueryBase(key, fn, options);
  useRefetch(result, options);
  return result;
}
function useQueryBase(key, fn, options = {}) {
  var _a;
  const { cacheTime = DEFAULT_CACHE_TIME, staleTime = DEFAULT_STALE_TIME } = options;
  const cache = (0, import_react2.useContext)(QueryCacheContext);
  const item = (0, import_react2.useSyncExternalStore)((onStoreChange) => {
    if (key !== void 0) {
      return cache.subscribe(key, () => {
        onStoreChange();
      });
    } else {
      return () => {
      };
    }
  }, () => key === void 0 ? void 0 : cache.get(key), () => key === void 0 ? void 0 : cache.get(key));
  const fetchFn = (0, import_react2.useContext)(IsomorphicFetchContext) || ((...args) => fetch(...args));
  const ctx = { fetch: fetchFn };
  (0, import_react2.useEffect)(() => {
    const item2 = key ? cache.get(key) : void 0;
    if (item2 === void 0) {
      return;
    }
    item2.hydrated = false;
  }, [key]);
  if (key === void 0) {
    return;
  }
  function refetch() {
    const item2 = cache.get(key);
    if (!(item2 == null ? void 0 : item2.promise)) {
      cache.set(key, fn(ctx), cacheTime);
    }
  }
  if (item && "value" in item) {
    return {
      data: item.value,
      isRefetching: !!item.promise,
      refetch,
      dataUpdatedAt: item.date
    };
  }
  if (item == null ? void 0 : item.promise) {
    throw item.promise;
  }
  const result = fn(ctx);
  cache.set(key, result, cacheTime);
  if (result instanceof Promise) {
    throw result;
  }
  return {
    data: result,
    refetch,
    isRefetching: false,
    dataUpdatedAt: (_a = item == null ? void 0 : item.date) != null ? _a : Date.now()
  };
}
function useRefetch(queryResult, options) {
  const {
    refetchOnWindowFocus = true,
    refetchInterval = false,
    refetchIntervalInBackground = false,
    staleTime = DEFAULT_STALE_TIME
  } = options;
  (0, import_react2.useEffect)(() => {
    if (!queryResult || !refetchOnWindowFocus)
      return;
    function handleVisibilityChange() {
      if (document.visibilityState === "visible" && (refetchOnWindowFocus === "always" || staleTime <= Date.now() - queryResult.dataUpdatedAt)) {
        queryResult.refetch();
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleVisibilityChange);
    };
  }, [refetchOnWindowFocus, queryResult]);
  (0, import_react2.useEffect)(() => {
    if (!refetchInterval || !queryResult)
      return;
    const id = setInterval(() => {
      if (refetchIntervalInBackground || document.visibilityState === "visible") {
        queryResult.refetch();
      }
    }, refetchInterval);
    return () => {
      clearInterval(id);
    };
  }, [refetchInterval, refetchIntervalInBackground, queryResult]);
}
function useSSQImpl(desc) {
  const [moduleId, counter, closure] = desc;
  const context = (0, import_react11.useContext)(ServerSideContextContext);
  const stringified = closure.map((x2) => stringify(x2));
  const key = `$ss:${moduleId}:${counter}:${stringified}`;
  return useQuery(key, () => desc[3](closure, context));
}
var useServerSideQuery = useSSQImpl;
var ServerSideContextContext = (0, import_react11.createContext)(void 0);
(0, import_react12.createContext)(void 0);
function _setPrototypeOf(o2, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
    o3.__proto__ = p3;
    return o3;
  };
  return _setPrototypeOf(o2, p2);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
var changedArray = function changedArray2(a2, b2) {
  if (a2 === void 0) {
    a2 = [];
  }
  if (b2 === void 0) {
    b2 = [];
  }
  return a2.length !== b2.length || a2.some(function(item, index) {
    return !Object.is(item, b2[index]);
  });
};
var initialState = {
  error: null
};
/* @__PURE__ */ (function(_React$Component) {
  _inheritsLoose(ErrorBoundary3, _React$Component);
  function ErrorBoundary3() {
    var _this;
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
    _this.state = initialState;
    _this.resetErrorBoundary = function() {
      var _this$props;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      _this.props.onReset == null ? void 0 : (_this$props = _this.props).onReset.apply(_this$props, args);
      _this.reset();
    };
    return _this;
  }
  ErrorBoundary3.getDerivedStateFromError = function getDerivedStateFromError(error) {
    return {
      error
    };
  };
  var _proto = ErrorBoundary3.prototype;
  _proto.reset = function reset() {
    this.setState(initialState);
  };
  _proto.componentDidCatch = function componentDidCatch(error, info) {
    var _this$props$onError, _this$props2;
    (_this$props$onError = (_this$props2 = this.props).onError) == null ? void 0 : _this$props$onError.call(_this$props2, error, info);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var error = this.state.error;
    var resetKeys = this.props.resetKeys;
    if (error !== null && prevState.error !== null && changedArray(prevProps.resetKeys, resetKeys)) {
      var _this$props$onResetKe, _this$props3;
      (_this$props$onResetKe = (_this$props3 = this.props).onResetKeysChange) == null ? void 0 : _this$props$onResetKe.call(_this$props3, prevProps.resetKeys, resetKeys);
      this.reset();
    }
  };
  _proto.render = function render() {
    var error = this.state.error;
    var _this$props4 = this.props, fallbackRender = _this$props4.fallbackRender, FallbackComponent = _this$props4.FallbackComponent, fallback = _this$props4.fallback;
    if (error !== null) {
      var _props = {
        error,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (/* @__PURE__ */ React10.isValidElement(fallback)) {
        return fallback;
      } else if (typeof fallbackRender === "function") {
        return fallbackRender(_props);
      } else if (FallbackComponent) {
        return /* @__PURE__ */ React10.createElement(FallbackComponent, _props);
      } else {
        throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
      }
    }
    return this.props.children;
  };
  return ErrorBoundary3;
})(React10.Component);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const virtual_rakkasjs_nodeHandlerEntry = createListener(hattipHandler);
const virtual_rakkasjs_nodeHandlerEntry$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: virtual_rakkasjs_nodeHandlerEntry
}, Symbol.toStringTag, { value: "Module" }));
export { W, useServerSideQuery as u, virtual_rakkasjs_nodeHandlerEntry$1 as v };
