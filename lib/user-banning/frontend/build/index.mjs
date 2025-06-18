import Pe, { useMemo as pr, Fragment as vr, useState as V, useCallback as F } from "react";
const gr = "supertokens-plugin-user-banning";
var J = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function hr() {
  if (ke) return U;
  ke = 1;
  var u = Pe, p = Symbol.for("react.element"), v = Symbol.for("react.fragment"), x = Object.prototype.hasOwnProperty, k = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(h, i, d) {
    var l, m = {}, S = null, O = null;
    d !== void 0 && (S = "" + d), i.key !== void 0 && (S = "" + i.key), i.ref !== void 0 && (O = i.ref);
    for (l in i) x.call(i, l) && !E.hasOwnProperty(l) && (m[l] = i[l]);
    if (h && h.defaultProps) for (l in i = h.defaultProps, i) m[l] === void 0 && (m[l] = i[l]);
    return { $$typeof: p, type: h, key: S, ref: O, props: m, _owner: k.current };
  }
  return U.Fragment = v, U.jsx = j, U.jsxs = j, U;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function br() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var u = Pe, p = Symbol.for("react.element"), v = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), h = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), Y = Symbol.iterator, z = "@@iterator";
    function G(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Y && e[Y] || e[z];
      return typeof r == "function" ? r : null;
    }
    var g = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++)
          n[t - 1] = arguments[t];
        De("error", e, n);
      }
    }
    function De(e, r, n) {
      {
        var t = g.ReactDebugCurrentFrame, s = t.getStackAddendum();
        s !== "" && (r += "%s", n = n.concat([s]));
        var f = n.map(function(o) {
          return String(o);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Fe = !1, Ne = !1, Ae = !1, $e = !1, Ie = !1, te;
    te = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === x || e === E || Ie || e === k || e === d || e === l || $e || e === O || Fe || Ne || Ae || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === m || e.$$typeof === j || e.$$typeof === h || e.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function We(e, r, n) {
      var t = e.displayName;
      if (t)
        return t;
      var s = r.displayName || r.name || "";
      return s !== "" ? n + "(" + s + ")" : n;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case x:
          return "Fragment";
        case v:
          return "Portal";
        case E:
          return "Profiler";
        case k:
          return "StrictMode";
        case d:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var r = e;
            return ae(r) + ".Consumer";
          case j:
            var n = e;
            return ae(n._context) + ".Provider";
          case i:
            return We(e, e.render, "ForwardRef");
          case m:
            var t = e.displayName || null;
            return t !== null ? t : C(e.type) || "Memo";
          case S: {
            var s = e, f = s._payload, o = s._init;
            try {
              return C(o(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, $ = 0, oe, ie, se, ue, le, ce, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ye() {
      {
        if ($ === 0) {
          oe = console.log, ie = console.info, se = console.warn, ue = console.error, le = console.group, ce = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        $++;
      }
    }
    function Le() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: oe
            }),
            info: P({}, e, {
              value: ie
            }),
            warn: P({}, e, {
              value: se
            }),
            error: P({}, e, {
              value: ue
            }),
            group: P({}, e, {
              value: le
            }),
            groupCollapsed: P({}, e, {
              value: ce
            }),
            groupEnd: P({}, e, {
              value: fe
            })
          });
        }
        $ < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = g.ReactCurrentDispatcher, X;
    function L(e, r, n) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (s) {
            var t = s.stack.trim().match(/\n( *(at )?)/);
            X = t && t[1] || "";
          }
        return `
` + X + e;
      }
    }
    var H = !1, M;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Me();
    }
    function pe(e, r) {
      if (!e || H)
        return "";
      {
        var n = M.get(e);
        if (n !== void 0)
          return n;
      }
      var t;
      H = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = K.current, K.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (_) {
              t = _;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (_) {
              t = _;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            t = _;
          }
          e();
        }
      } catch (_) {
        if (_ && t && typeof _.stack == "string") {
          for (var a = _.stack.split(`
`), w = t.stack.split(`
`), b = a.length - 1, y = w.length - 1; b >= 1 && y >= 0 && a[b] !== w[y]; )
            y--;
          for (; b >= 1 && y >= 0; b--, y--)
            if (a[b] !== w[y]) {
              if (b !== 1 || y !== 1)
                do
                  if (b--, y--, y < 0 || a[b] !== w[y]) {
                    var T = `
` + a[b].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, T), T;
                  }
                while (b >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        H = !1, K.current = f, Le(), Error.prepareStackTrace = s;
      }
      var A = e ? e.displayName || e.name : "", D = A ? L(A) : "";
      return typeof e == "function" && M.set(e, D), D;
    }
    function qe(e, r, n) {
      return pe(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Be(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case d:
          return L("Suspense");
        case l:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            return qe(e.render);
          case m:
            return q(e.type, r, n);
          case S: {
            var t = e, s = t._payload, f = t._init;
            try {
              return q(f(s), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, ve = {}, ge = g.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, n = q(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(n);
      } else
        ge.setExtraStackFrame(null);
    }
    function Ve(e, r, n, t, s) {
      {
        var f = Function.call.bind(I);
        for (var o in e)
          if (f(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var w = Error((t || "React class") + ": " + n + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              a = e[o](r, o, t, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              a = b;
            }
            a && !(a instanceof Error) && (B(s), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", t || "React class", n, o, typeof a), B(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, B(s), R("Failed %s type: %s", n, a.message), B(null));
          }
      }
    }
    var Je = Array.isArray;
    function Q(e) {
      return Je(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function Ge(e) {
      try {
        return he(e), !1;
      } catch {
        return !0;
      }
    }
    function he(e) {
      return "" + e;
    }
    function be(e) {
      if (Ge(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), he(e);
    }
    var me = g.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, xe;
    function Xe(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      typeof e.ref == "string" && me.current;
    }
    function Ze(e, r) {
      {
        var n = function() {
          ye || (ye = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var n = function() {
          xe || (xe = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, n, t, s, f, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: o,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: t
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, n, t, s) {
      {
        var f, o = {}, a = null, w = null;
        n !== void 0 && (be(n), a = "" + n), He(r) && (be(r.key), a = "" + r.key), Xe(r) && (w = r.ref, Qe(r, s));
        for (f in r)
          I.call(r, f) && !Ke.hasOwnProperty(f) && (o[f] = r[f]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (f in b)
            o[f] === void 0 && (o[f] = b[f]);
        }
        if (a || w) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, y), w && er(o, y);
        }
        return rr(e, a, w, s, t, me.current, o);
      }
    }
    var Z = g.ReactCurrentOwner, Ee = g.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, n = q(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(n);
      } else
        Ee.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    function Re() {
      {
        if (Z.current) {
          var e = C(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var we = {};
    function ar(e) {
      {
        var r = Re();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = ar(r);
        if (we[n])
          return;
        we[n] = !0;
        var t = "";
        e && e._owner && e._owner !== Z.current && (t = " It was passed a child from " + C(e._owner.type) + "."), N(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, t), N(null);
      }
    }
    function je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var n = 0; n < e.length; n++) {
            var t = e[n];
            re(t) && _e(t, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = G(e);
          if (typeof s == "function" && s !== e.entries)
            for (var f = s.call(e), o; !(o = f.next()).done; )
              re(o.value) && _e(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          n = r.propTypes;
        else
          return;
        if (n) {
          var t = C(r);
          Ve(n, e.props, "prop", t, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var s = C(r);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var t = r[n];
          if (t !== "children" && t !== "key") {
            N(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", t), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    var Se = {};
    function Te(e, r, n, t, s, f) {
      {
        var o = Ue(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = tr();
          w ? a += w : a += Re();
          var b;
          e === null ? b = "null" : Q(e) ? b = "array" : e !== void 0 && e.$$typeof === p ? (b = "<" + (C(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, a);
        }
        var y = nr(e, r, n, s, f);
        if (y == null)
          return y;
        if (o) {
          var T = r.children;
          if (T !== void 0)
            if (t)
              if (Q(T)) {
                for (var A = 0; A < T.length; A++)
                  je(T[A], e);
                Object.freeze && Object.freeze(T);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              je(T, e);
        }
        if (I.call(r, "key")) {
          var D = C(e), _ = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), ne = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Se[D + ne]) {
            var fr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ne, D, fr, D), Se[D + ne] = !0;
          }
        }
        return e === x ? ir(y) : or(y), y;
      }
    }
    function sr(e, r, n) {
      return Te(e, r, n, !0);
    }
    function ur(e, r, n) {
      return Te(e, r, n, !1);
    }
    var lr = ur, cr = sr;
    W.Fragment = x, W.jsx = lr, W.jsxs = cr;
  }()), W;
}
var Ce;
function mr() {
  return Ce || (Ce = 1, process.env.NODE_ENV === "production" ? J.exports = hr() : J.exports = br()), J.exports;
}
var c = mr();
const yr = (u) => async (p, v, { withSession: x, params: k }) => {
  const E = k ? `?${new URLSearchParams(k).toString()}` : "", j = `${u}${p}${E}`, h = {};
  x && (h.credentials = "include");
  let i;
  try {
    i = await fetch(j, {
      ...h,
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(v)
    });
  } catch (d) {
    const l = new Error(`Fetch failed: ${d}`);
    let m = d;
    try {
      m = JSON.parse(d);
    } catch {
    }
    throw l.payload = m, l;
  }
  if (!i.ok) {
    const d = await i.text(), l = new Error(`Fetch failed: ${d}`);
    let m = d;
    try {
      m = JSON.parse(d);
    } catch {
    }
    throw l.payload = m, l;
  }
  return i.json();
}, xr = (u) => async (p, { withSession: v, params: x }) => {
  const k = x ? `?${new URLSearchParams(x).toString()}` : "", E = `${u}${p}${k}`, j = {};
  v && (j.credentials = "include");
  let h;
  try {
    h = await fetch(E, {
      ...j,
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    });
  } catch (i) {
    const d = new Error(`Fetch failed: ${i}`);
    let l = i;
    try {
      l = JSON.parse(i);
    } catch {
    }
    throw d.payload = l, d;
  }
  if (!h.ok) {
    const i = await h.text(), d = new Error(`Fetch failed: ${i}`);
    let l = i;
    try {
      l = JSON.parse(i);
    } catch {
    }
    throw d.payload = l, d;
  }
  return h.json();
}, Er = (u) => ({ get: xr(u), post: yr(u) }), Rr = (u) => pr(() => Er(u), [u]), wr = ".supertokens-plugin-user-banning .container{margin:26px auto;width:420px;text-align:center;border-radius:8px;box-shadow:1px 1px 10px #00000029;background-color:#fff}.supertokens-plugin-user-banning .row{margin:0 auto;width:76%;padding-top:30px;padding-bottom:10px}.supertokens-plugin-user-banning .headerTitle{font-size:24px;line-height:27.6px;letter-spacing:.58px;font-weight:700;margin-bottom:20px;color:#000}.supertokens-plugin-user-banning .divider{margin-top:1.5em;margin-bottom:1.5em;border-bottom:.3px solid #dddddd;align-items:center;padding-bottom:5px}.supertokens-plugin-user-banning .formRow{display:flex;flex-direction:column;padding-top:0;padding-bottom:20px}.supertokens-plugin-user-banning .formRow .label{text-align:left;font-weight:700;font-size:12px;line-height:24px;color:#000}.supertokens-plugin-user-banning .formRow .inputContainer{margin-top:6px}.supertokens-plugin-user-banning .formRow .inputWrapper{box-sizing:border-box;width:100%;display:flex;align-items:center;background-color:#fafafa;height:34px;border-radius:6px;border:1px solid rgb(224,224,224)}.supertokens-plugin-user-banning .formRow input{box-sizing:border-box;padding-left:15px;filter:none;color:#000;background-color:transparent;border-radius:6px;font-size:14px;border:none;padding-right:25px;letter-spacing:1.2px;flex:9 1 75%;width:75%;height:32px;-webkit-text-fill-color:rgb(0,0,0)}.supertokens-plugin-user-banning .formRow input:focus{border:none;outline:none}.supertokens-plugin-user-banning .button{font-family:Arial,sans-serif;background-color:#1c222a;color:#fff;width:100%;height:34px;font-weight:600;border-width:1px;border-style:solid;border-radius:6px;border-color:#2d3644;background-position:center;transition:all .4s;background-size:12000%;cursor:pointer}.supertokens-plugin-user-banning .button:disabled{border:none;cursor:no-drop;opacity:.7}.generalError{background:#fff1eb;margin-bottom:10px;margin-top:24px;padding:10px 18px;letter-spacing:.2px;font-size:14px;border-radius:8px;color:#ff1717;animation:swing-in-top-fwd 1s cubic-bezier(.175,.885,.32,1.275) both;word-wrap:break-word}", _r = (u) => {
  if (typeof u.payload.message == "string")
    return u.payload.message;
  if (typeof (u == null ? void 0 : u.message) == "string")
    return u.message;
  if (u)
    try {
      return "Unknown error: " + JSON.stringify(u);
    } catch {
      return "Unknown error";
    }
}, jr = ({ children: u, userStyles: p }) => /* @__PURE__ */ c.jsxs(vr, { children: [
  u,
  /* @__PURE__ */ c.jsx("style", { children: p.join(`
`) })
] });
function Sr(u) {
  const [p, v] = V(), [x, k] = V("public"), [E, j] = V(), [h, i] = V(null), d = Rr(u.apiDomain), l = F(() => {
    setTimeout(() => {
      v(void 0);
    }, 1e4);
  }, []), m = F(
    (g) => {
      v(_r(g)), l();
    },
    [l]
  ), S = F(
    (g) => d.get("/plugin/supertokens-plugin-user-banning/ban", {
      withSession: !0,
      params: { tenantId: x, email: g }
    }).then((R) => {
      v(void 0), i(R.banned);
    }).catch(m),
    [d, x]
  ), O = F(
    (g) => d.post(
      "/plugin/supertokens-plugin-user-banning/ban",
      {
        email: E,
        isBanned: g
      },
      {
        withSession: !0,
        params: { tenantId: x }
      }
    ).then(() => {
      v(void 0), i(g);
    }).catch(m),
    [d, x, E]
  ), Y = F(
    (g) => {
      if (g.preventDefault(), !E) {
        v("Email is required");
        return;
      }
      S(E);
    },
    [S, E]
  ), z = F(
    (g) => {
      g.preventDefault(), O(!0);
    },
    [O, E]
  ), G = F(
    (g) => {
      if (g.preventDefault(), !E) {
        v("Email is required");
        return;
      }
      O(!1);
    },
    [O, E]
  );
  return /* @__PURE__ */ c.jsx(jr, { userStyles: [wr], children: /* @__PURE__ */ c.jsx("div", { className: "supertokens-plugin-user-banning", children: /* @__PURE__ */ c.jsx("div", { className: "container", children: /* @__PURE__ */ c.jsxs("div", { className: "row", children: [
    /* @__PURE__ */ c.jsx("div", { className: "headerTitle", children: "Ban User" }),
    /* @__PURE__ */ c.jsx("p", { children: "This page is used to ban and unban users. It is useful for preventing users from accessing your application." }),
    /* @__PURE__ */ c.jsx("div", { className: "divider" }),
    !!p && /* @__PURE__ */ c.jsx("div", { className: "generalError", children: p }),
    /* @__PURE__ */ c.jsxs("form", { noValidate: !0, children: [
      /* @__PURE__ */ c.jsxs("div", { className: "formRow", children: [
        /* @__PURE__ */ c.jsx("div", { className: "label", children: "Tenant ID" }),
        /* @__PURE__ */ c.jsx("div", { className: "inputContainer", children: /* @__PURE__ */ c.jsx("div", { className: "inputWrapper", children: /* @__PURE__ */ c.jsx(
          "input",
          {
            type: "text",
            value: x,
            autoComplete: "on",
            placeholder: "Tenant ID",
            onChange: (g) => k(g.target.value)
          }
        ) }) })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "formRow", children: [
        /* @__PURE__ */ c.jsx("div", { className: "label", children: "User Email" }),
        /* @__PURE__ */ c.jsx("div", { className: "inputContainer", children: /* @__PURE__ */ c.jsx("div", { className: "inputWrapper", children: /* @__PURE__ */ c.jsx(
          "input",
          {
            type: "email",
            value: E,
            disabled: !x,
            autoComplete: "on",
            placeholder: "User Email",
            onChange: (g) => j(g.target.value)
          }
        ) }) })
      ] }),
      /* @__PURE__ */ c.jsx("div", { className: "formRow", children: /* @__PURE__ */ c.jsxs("button", { className: "button", onClick: Y, disabled: !(x && E), children: [
        "Check Status (",
        typeof h == "boolean" ? h ? /* @__PURE__ */ c.jsx("span", { style: { color: "red" }, children: "Banned" }) : /* @__PURE__ */ c.jsx("span", { style: { color: "green" }, children: "Not Banned" }) : " - ",
        ")"
      ] }) }),
      typeof h == "boolean" && /* @__PURE__ */ c.jsxs("div", { className: "formRow", style: { flexDirection: "row" }, children: [
        /* @__PURE__ */ c.jsx("button", { className: "button", disabled: h, onClick: z, style: { marginRight: "20px" }, children: "Ban" }),
        /* @__PURE__ */ c.jsx("button", { className: "button", disabled: !h, onClick: G, children: "Unban" })
      ] })
    ] })
  ] }) }) }) });
}
const Tr = ({ apiDomain: u }) => ({
  id: gr,
  routeHandlers: [
    {
      path: "/admin/ban-user",
      // todo: feedback: it would be useful for the handler to have access to the st instance config, otherwise it's not possible to get the base path
      handler: () => Sr.call(null, { apiDomain: u })
    }
  ],
  overrideMap: {
    emailpassword: {
      functions(p) {
        return {
          ...p,
          signUp(v) {
            return console.log("signUp", v), p.signUp(v);
          },
          signIn: async (v) => (console.log("signIn", v), p.signIn(v))
        };
      }
    },
    session: {
      recipeInitRequired: !0,
      functions: (p) => ({
        ...p,
        signOut(v) {
          return console.log("signOut", v), p.signOut(v);
        }
      })
    }
  }
}), Or = { init: Tr };
export {
  gr as PLUGIN_ID,
  Or as default,
  Tr as init
};
