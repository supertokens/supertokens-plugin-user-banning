'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var PLUGIN_ID = "supertokens-plugin-user-banning";

var jsxRuntimeExports = {};
var jsxRuntime = {
  get exports(){ return jsxRuntimeExports; },
  set exports(v){ jsxRuntimeExports = v; },
};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var reactJsxRuntime_development = {};

var reactExports = {};
var react = {
  get exports(){ return reactExports; },
  set exports(v){ reactExports = v; },
};

var react_production = {};

/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production;

function requireReact_production () {
	if (hasRequiredReact_production) return react_production;
	hasRequiredReact_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
	  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	  REACT_MEMO_TYPE = Symbol.for("react.memo"),
	  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
	  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
	  maybeIterable =
	    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
	    maybeIterable["@@iterator"];
	  return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
	    isMounted: function () {
	      return !1;
	    },
	    enqueueForceUpdate: function () {},
	    enqueueReplaceState: function () {},
	    enqueueSetState: function () {}
	  },
	  assign = Object.assign,
	  emptyObject = {};
	function Component(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function (partialState, callback) {
	  if (
	    "object" !== typeof partialState &&
	    "function" !== typeof partialState &&
	    null != partialState
	  )
	    throw Error(
	      "takes an object of state variables to update or a function which returns an object of state variables."
	    );
	  this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
	pureComponentPrototype.constructor = PureComponent;
	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = !0;
	var isArrayImpl = Array.isArray,
	  ReactSharedInternals = { H: null, A: null, T: null, S: null },
	  hasOwnProperty = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, self, source, owner, props) {
	  self = props.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== self ? self : null,
	    props: props
	  };
	}
	function cloneAndReplaceKey(oldElement, newKey) {
	  return ReactElement(
	    oldElement.type,
	    newKey,
	    void 0,
	    void 0,
	    void 0,
	    oldElement.props
	  );
	}
	function isValidElement(object) {
	  return (
	    "object" === typeof object &&
	    null !== object &&
	    object.$$typeof === REACT_ELEMENT_TYPE
	  );
	}
	function escape(key) {
	  var escaperLookup = { "=": "=0", ":": "=2" };
	  return (
	    "$" +
	    key.replace(/[=:]/g, function (match) {
	      return escaperLookup[match];
	    })
	  );
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
	  return "object" === typeof element && null !== element && null != element.key
	    ? escape("" + element.key)
	    : index.toString(36);
	}
	function noop$1() {}
	function resolveThenable(thenable) {
	  switch (thenable.status) {
	    case "fulfilled":
	      return thenable.value;
	    case "rejected":
	      throw thenable.reason;
	    default:
	      switch (
	        ("string" === typeof thenable.status
	          ? thenable.then(noop$1, noop$1)
	          : ((thenable.status = "pending"),
	            thenable.then(
	              function (fulfilledValue) {
	                "pending" === thenable.status &&
	                  ((thenable.status = "fulfilled"),
	                  (thenable.value = fulfilledValue));
	              },
	              function (error) {
	                "pending" === thenable.status &&
	                  ((thenable.status = "rejected"), (thenable.reason = error));
	              }
	            )),
	        thenable.status)
	      ) {
	        case "fulfilled":
	          return thenable.value;
	        case "rejected":
	          throw thenable.reason;
	      }
	  }
	  throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
	  var type = typeof children;
	  if ("undefined" === type || "boolean" === type) children = null;
	  var invokeCallback = !1;
	  if (null === children) invokeCallback = !0;
	  else
	    switch (type) {
	      case "bigint":
	      case "string":
	      case "number":
	        invokeCallback = !0;
	        break;
	      case "object":
	        switch (children.$$typeof) {
	          case REACT_ELEMENT_TYPE:
	          case REACT_PORTAL_TYPE:
	            invokeCallback = !0;
	            break;
	          case REACT_LAZY_TYPE:
	            return (
	              (invokeCallback = children._init),
	              mapIntoArray(
	                invokeCallback(children._payload),
	                array,
	                escapedPrefix,
	                nameSoFar,
	                callback
	              )
	            );
	        }
	    }
	  if (invokeCallback)
	    return (
	      (callback = callback(children)),
	      (invokeCallback =
	        "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar),
	      isArrayImpl(callback)
	        ? ((escapedPrefix = ""),
	          null != invokeCallback &&
	            (escapedPrefix =
	              invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
	          mapIntoArray(callback, array, escapedPrefix, "", function (c) {
	            return c;
	          }))
	        : null != callback &&
	          (isValidElement(callback) &&
	            (callback = cloneAndReplaceKey(
	              callback,
	              escapedPrefix +
	                (null == callback.key ||
	                (children && children.key === callback.key)
	                  ? ""
	                  : ("" + callback.key).replace(
	                      userProvidedKeyEscapeRegex,
	                      "$&/"
	                    ) + "/") +
	                invokeCallback
	            )),
	          array.push(callback)),
	      1
	    );
	  invokeCallback = 0;
	  var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
	  if (isArrayImpl(children))
	    for (var i = 0; i < children.length; i++)
	      (nameSoFar = children[i]),
	        (type = nextNamePrefix + getElementKey(nameSoFar, i)),
	        (invokeCallback += mapIntoArray(
	          nameSoFar,
	          array,
	          escapedPrefix,
	          type,
	          callback
	        ));
	  else if (((i = getIteratorFn(children)), "function" === typeof i))
	    for (
	      children = i.call(children), i = 0;
	      !(nameSoFar = children.next()).done;

	    )
	      (nameSoFar = nameSoFar.value),
	        (type = nextNamePrefix + getElementKey(nameSoFar, i++)),
	        (invokeCallback += mapIntoArray(
	          nameSoFar,
	          array,
	          escapedPrefix,
	          type,
	          callback
	        ));
	  else if ("object" === type) {
	    if ("function" === typeof children.then)
	      return mapIntoArray(
	        resolveThenable(children),
	        array,
	        escapedPrefix,
	        nameSoFar,
	        callback
	      );
	    array = String(children);
	    throw Error(
	      "Objects are not valid as a React child (found: " +
	        ("[object Object]" === array
	          ? "object with keys {" + Object.keys(children).join(", ") + "}"
	          : array) +
	        "). If you meant to render a collection of children, use an array instead."
	    );
	  }
	  return invokeCallback;
	}
	function mapChildren(children, func, context) {
	  if (null == children) return children;
	  var result = [],
	    count = 0;
	  mapIntoArray(children, result, "", "", function (child) {
	    return func.call(context, child, count++);
	  });
	  return result;
	}
	function lazyInitializer(payload) {
	  if (-1 === payload._status) {
	    var ctor = payload._result;
	    ctor = ctor();
	    ctor.then(
	      function (moduleObject) {
	        if (0 === payload._status || -1 === payload._status)
	          (payload._status = 1), (payload._result = moduleObject);
	      },
	      function (error) {
	        if (0 === payload._status || -1 === payload._status)
	          (payload._status = 2), (payload._result = error);
	      }
	    );
	    -1 === payload._status && ((payload._status = 0), (payload._result = ctor));
	  }
	  if (1 === payload._status) return payload._result.default;
	  throw payload._result;
	}
	var reportGlobalError =
	  "function" === typeof reportError
	    ? reportError
	    : function (error) {
	        if (
	          "object" === typeof window &&
	          "function" === typeof window.ErrorEvent
	        ) {
	          var event = new window.ErrorEvent("error", {
	            bubbles: !0,
	            cancelable: !0,
	            message:
	              "object" === typeof error &&
	              null !== error &&
	              "string" === typeof error.message
	                ? String(error.message)
	                : String(error),
	            error: error
	          });
	          if (!window.dispatchEvent(event)) return;
	        } else if (
	          "object" === typeof process &&
	          "function" === typeof process.emit
	        ) {
	          process.emit("uncaughtException", error);
	          return;
	        }
	        console.error(error);
	      };
	function noop() {}
	react_production.Children = {
	  map: mapChildren,
	  forEach: function (children, forEachFunc, forEachContext) {
	    mapChildren(
	      children,
	      function () {
	        forEachFunc.apply(this, arguments);
	      },
	      forEachContext
	    );
	  },
	  count: function (children) {
	    var n = 0;
	    mapChildren(children, function () {
	      n++;
	    });
	    return n;
	  },
	  toArray: function (children) {
	    return (
	      mapChildren(children, function (child) {
	        return child;
	      }) || []
	    );
	  },
	  only: function (children) {
	    if (!isValidElement(children))
	      throw Error(
	        "React.Children.only expected to receive a single React element child."
	      );
	    return children;
	  }
	};
	react_production.Component = Component;
	react_production.Fragment = REACT_FRAGMENT_TYPE;
	react_production.Profiler = REACT_PROFILER_TYPE;
	react_production.PureComponent = PureComponent;
	react_production.StrictMode = REACT_STRICT_MODE_TYPE;
	react_production.Suspense = REACT_SUSPENSE_TYPE;
	react_production.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
	  ReactSharedInternals;
	react_production.act = function () {
	  throw Error("act(...) is not supported in production builds of React.");
	};
	react_production.cache = function (fn) {
	  return function () {
	    return fn.apply(null, arguments);
	  };
	};
	react_production.cloneElement = function (element, config, children) {
	  if (null === element || void 0 === element)
	    throw Error(
	      "The argument must be a React element, but you passed " + element + "."
	    );
	  var props = assign({}, element.props),
	    key = element.key,
	    owner = void 0;
	  if (null != config)
	    for (propName in (void 0 !== config.ref && (owner = void 0),
	    void 0 !== config.key && (key = "" + config.key),
	    config))
	      !hasOwnProperty.call(config, propName) ||
	        "key" === propName ||
	        "__self" === propName ||
	        "__source" === propName ||
	        ("ref" === propName && void 0 === config.ref) ||
	        (props[propName] = config[propName]);
	  var propName = arguments.length - 2;
	  if (1 === propName) props.children = children;
	  else if (1 < propName) {
	    for (var childArray = Array(propName), i = 0; i < propName; i++)
	      childArray[i] = arguments[i + 2];
	    props.children = childArray;
	  }
	  return ReactElement(element.type, key, void 0, void 0, owner, props);
	};
	react_production.createContext = function (defaultValue) {
	  defaultValue = {
	    $$typeof: REACT_CONTEXT_TYPE,
	    _currentValue: defaultValue,
	    _currentValue2: defaultValue,
	    _threadCount: 0,
	    Provider: null,
	    Consumer: null
	  };
	  defaultValue.Provider = defaultValue;
	  defaultValue.Consumer = {
	    $$typeof: REACT_CONSUMER_TYPE,
	    _context: defaultValue
	  };
	  return defaultValue;
	};
	react_production.createElement = function (type, config, children) {
	  var propName,
	    props = {},
	    key = null;
	  if (null != config)
	    for (propName in (void 0 !== config.key && (key = "" + config.key), config))
	      hasOwnProperty.call(config, propName) &&
	        "key" !== propName &&
	        "__self" !== propName &&
	        "__source" !== propName &&
	        (props[propName] = config[propName]);
	  var childrenLength = arguments.length - 2;
	  if (1 === childrenLength) props.children = children;
	  else if (1 < childrenLength) {
	    for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
	      childArray[i] = arguments[i + 2];
	    props.children = childArray;
	  }
	  if (type && type.defaultProps)
	    for (propName in ((childrenLength = type.defaultProps), childrenLength))
	      void 0 === props[propName] &&
	        (props[propName] = childrenLength[propName]);
	  return ReactElement(type, key, void 0, void 0, null, props);
	};
	react_production.createRef = function () {
	  return { current: null };
	};
	react_production.forwardRef = function (render) {
	  return { $$typeof: REACT_FORWARD_REF_TYPE, render: render };
	};
	react_production.isValidElement = isValidElement;
	react_production.lazy = function (ctor) {
	  return {
	    $$typeof: REACT_LAZY_TYPE,
	    _payload: { _status: -1, _result: ctor },
	    _init: lazyInitializer
	  };
	};
	react_production.memo = function (type, compare) {
	  return {
	    $$typeof: REACT_MEMO_TYPE,
	    type: type,
	    compare: void 0 === compare ? null : compare
	  };
	};
	react_production.startTransition = function (scope) {
	  var prevTransition = ReactSharedInternals.T,
	    currentTransition = {};
	  ReactSharedInternals.T = currentTransition;
	  try {
	    var returnValue = scope(),
	      onStartTransitionFinish = ReactSharedInternals.S;
	    null !== onStartTransitionFinish &&
	      onStartTransitionFinish(currentTransition, returnValue);
	    "object" === typeof returnValue &&
	      null !== returnValue &&
	      "function" === typeof returnValue.then &&
	      returnValue.then(noop, reportGlobalError);
	  } catch (error) {
	    reportGlobalError(error);
	  } finally {
	    ReactSharedInternals.T = prevTransition;
	  }
	};
	react_production.unstable_useCacheRefresh = function () {
	  return ReactSharedInternals.H.useCacheRefresh();
	};
	react_production.use = function (usable) {
	  return ReactSharedInternals.H.use(usable);
	};
	react_production.useActionState = function (action, initialState, permalink) {
	  return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	react_production.useCallback = function (callback, deps) {
	  return ReactSharedInternals.H.useCallback(callback, deps);
	};
	react_production.useContext = function (Context) {
	  return ReactSharedInternals.H.useContext(Context);
	};
	react_production.useDebugValue = function () {};
	react_production.useDeferredValue = function (value, initialValue) {
	  return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	react_production.useEffect = function (create, deps) {
	  return ReactSharedInternals.H.useEffect(create, deps);
	};
	react_production.useId = function () {
	  return ReactSharedInternals.H.useId();
	};
	react_production.useImperativeHandle = function (ref, create, deps) {
	  return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	react_production.useInsertionEffect = function (create, deps) {
	  return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	react_production.useLayoutEffect = function (create, deps) {
	  return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	react_production.useMemo = function (create, deps) {
	  return ReactSharedInternals.H.useMemo(create, deps);
	};
	react_production.useOptimistic = function (passthrough, reducer) {
	  return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	react_production.useReducer = function (reducer, initialArg, init) {
	  return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	react_production.useRef = function (initialValue) {
	  return ReactSharedInternals.H.useRef(initialValue);
	};
	react_production.useState = function (initialState) {
	  return ReactSharedInternals.H.useState(initialState);
	};
	react_production.useSyncExternalStore = function (
	  subscribe,
	  getSnapshot,
	  getServerSnapshot
	) {
	  return ReactSharedInternals.H.useSyncExternalStore(
	    subscribe,
	    getSnapshot,
	    getServerSnapshot
	  );
	};
	react_production.useTransition = function () {
	  return ReactSharedInternals.H.useTransition();
	};
	react_production.version = "19.0.0";
	return react_production;
}

var react_developmentExports = {};
var react_development = {
  get exports(){ return react_developmentExports; },
  set exports(v){ react_developmentExports = v; },
};

/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_development;

function requireReact_development () {
	if (hasRequiredReact_development) return react_developmentExports;
	hasRequiredReact_development = 1;
	(function (module, exports) {
		"production" !== process.env.NODE_ENV &&
		  (function () {
		    function defineDeprecationWarning(methodName, info) {
		      Object.defineProperty(Component.prototype, methodName, {
		        get: function () {
		          console.warn(
		            "%s(...) is deprecated in plain JavaScript React classes. %s",
		            info[0],
		            info[1]
		          );
		        }
		      });
		    }
		    function getIteratorFn(maybeIterable) {
		      if (null === maybeIterable || "object" !== typeof maybeIterable)
		        return null;
		      maybeIterable =
		        (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
		        maybeIterable["@@iterator"];
		      return "function" === typeof maybeIterable ? maybeIterable : null;
		    }
		    function warnNoop(publicInstance, callerName) {
		      publicInstance =
		        ((publicInstance = publicInstance.constructor) &&
		          (publicInstance.displayName || publicInstance.name)) ||
		        "ReactClass";
		      var warningKey = publicInstance + "." + callerName;
		      didWarnStateUpdateForUnmountedComponent[warningKey] ||
		        (console.error(
		          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
		          callerName,
		          publicInstance
		        ),
		        (didWarnStateUpdateForUnmountedComponent[warningKey] = !0));
		    }
		    function Component(props, context, updater) {
		      this.props = props;
		      this.context = context;
		      this.refs = emptyObject;
		      this.updater = updater || ReactNoopUpdateQueue;
		    }
		    function ComponentDummy() {}
		    function PureComponent(props, context, updater) {
		      this.props = props;
		      this.context = context;
		      this.refs = emptyObject;
		      this.updater = updater || ReactNoopUpdateQueue;
		    }
		    function testStringCoercion(value) {
		      return "" + value;
		    }
		    function checkKeyStringCoercion(value) {
		      try {
		        testStringCoercion(value);
		        var JSCompiler_inline_result = !1;
		      } catch (e) {
		        JSCompiler_inline_result = !0;
		      }
		      if (JSCompiler_inline_result) {
		        JSCompiler_inline_result = console;
		        var JSCompiler_temp_const = JSCompiler_inline_result.error;
		        var JSCompiler_inline_result$jscomp$0 =
		          ("function" === typeof Symbol &&
		            Symbol.toStringTag &&
		            value[Symbol.toStringTag]) ||
		          value.constructor.name ||
		          "Object";
		        JSCompiler_temp_const.call(
		          JSCompiler_inline_result,
		          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
		          JSCompiler_inline_result$jscomp$0
		        );
		        return testStringCoercion(value);
		      }
		    }
		    function getComponentNameFromType(type) {
		      if (null == type) return null;
		      if ("function" === typeof type)
		        return type.$$typeof === REACT_CLIENT_REFERENCE$2
		          ? null
		          : type.displayName || type.name || null;
		      if ("string" === typeof type) return type;
		      switch (type) {
		        case REACT_FRAGMENT_TYPE:
		          return "Fragment";
		        case REACT_PORTAL_TYPE:
		          return "Portal";
		        case REACT_PROFILER_TYPE:
		          return "Profiler";
		        case REACT_STRICT_MODE_TYPE:
		          return "StrictMode";
		        case REACT_SUSPENSE_TYPE:
		          return "Suspense";
		        case REACT_SUSPENSE_LIST_TYPE:
		          return "SuspenseList";
		      }
		      if ("object" === typeof type)
		        switch (
		          ("number" === typeof type.tag &&
		            console.error(
		              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
		            ),
		          type.$$typeof)
		        ) {
		          case REACT_CONTEXT_TYPE:
		            return (type.displayName || "Context") + ".Provider";
		          case REACT_CONSUMER_TYPE:
		            return (type._context.displayName || "Context") + ".Consumer";
		          case REACT_FORWARD_REF_TYPE:
		            var innerType = type.render;
		            type = type.displayName;
		            type ||
		              ((type = innerType.displayName || innerType.name || ""),
		              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
		            return type;
		          case REACT_MEMO_TYPE:
		            return (
		              (innerType = type.displayName || null),
		              null !== innerType
		                ? innerType
		                : getComponentNameFromType(type.type) || "Memo"
		            );
		          case REACT_LAZY_TYPE:
		            innerType = type._payload;
		            type = type._init;
		            try {
		              return getComponentNameFromType(type(innerType));
		            } catch (x) {}
		        }
		      return null;
		    }
		    function isValidElementType(type) {
		      return "string" === typeof type ||
		        "function" === typeof type ||
		        type === REACT_FRAGMENT_TYPE ||
		        type === REACT_PROFILER_TYPE ||
		        type === REACT_STRICT_MODE_TYPE ||
		        type === REACT_SUSPENSE_TYPE ||
		        type === REACT_SUSPENSE_LIST_TYPE ||
		        type === REACT_OFFSCREEN_TYPE ||
		        ("object" === typeof type &&
		          null !== type &&
		          (type.$$typeof === REACT_LAZY_TYPE ||
		            type.$$typeof === REACT_MEMO_TYPE ||
		            type.$$typeof === REACT_CONTEXT_TYPE ||
		            type.$$typeof === REACT_CONSUMER_TYPE ||
		            type.$$typeof === REACT_FORWARD_REF_TYPE ||
		            type.$$typeof === REACT_CLIENT_REFERENCE$1 ||
		            void 0 !== type.getModuleId))
		        ? !0
		        : !1;
		    }
		    function disabledLog() {}
		    function disableLogs() {
		      if (0 === disabledDepth) {
		        prevLog = console.log;
		        prevInfo = console.info;
		        prevWarn = console.warn;
		        prevError = console.error;
		        prevGroup = console.group;
		        prevGroupCollapsed = console.groupCollapsed;
		        prevGroupEnd = console.groupEnd;
		        var props = {
		          configurable: !0,
		          enumerable: !0,
		          value: disabledLog,
		          writable: !0
		        };
		        Object.defineProperties(console, {
		          info: props,
		          log: props,
		          warn: props,
		          error: props,
		          group: props,
		          groupCollapsed: props,
		          groupEnd: props
		        });
		      }
		      disabledDepth++;
		    }
		    function reenableLogs() {
		      disabledDepth--;
		      if (0 === disabledDepth) {
		        var props = { configurable: !0, enumerable: !0, writable: !0 };
		        Object.defineProperties(console, {
		          log: assign({}, props, { value: prevLog }),
		          info: assign({}, props, { value: prevInfo }),
		          warn: assign({}, props, { value: prevWarn }),
		          error: assign({}, props, { value: prevError }),
		          group: assign({}, props, { value: prevGroup }),
		          groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
		          groupEnd: assign({}, props, { value: prevGroupEnd })
		        });
		      }
		      0 > disabledDepth &&
		        console.error(
		          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
		        );
		    }
		    function describeBuiltInComponentFrame(name) {
		      if (void 0 === prefix)
		        try {
		          throw Error();
		        } catch (x) {
		          var match = x.stack.trim().match(/\n( *(at )?)/);
		          prefix = (match && match[1]) || "";
		          suffix =
		            -1 < x.stack.indexOf("\n    at")
		              ? " (<anonymous>)"
		              : -1 < x.stack.indexOf("@")
		                ? "@unknown:0:0"
		                : "";
		        }
		      return "\n" + prefix + name + suffix;
		    }
		    function describeNativeComponentFrame(fn, construct) {
		      if (!fn || reentry) return "";
		      var frame = componentFrameCache.get(fn);
		      if (void 0 !== frame) return frame;
		      reentry = !0;
		      frame = Error.prepareStackTrace;
		      Error.prepareStackTrace = void 0;
		      var previousDispatcher = null;
		      previousDispatcher = ReactSharedInternals.H;
		      ReactSharedInternals.H = null;
		      disableLogs();
		      try {
		        var RunInRootFrame = {
		          DetermineComponentFrameRoot: function () {
		            try {
		              if (construct) {
		                var Fake = function () {
		                  throw Error();
		                };
		                Object.defineProperty(Fake.prototype, "props", {
		                  set: function () {
		                    throw Error();
		                  }
		                });
		                if ("object" === typeof Reflect && Reflect.construct) {
		                  try {
		                    Reflect.construct(Fake, []);
		                  } catch (x) {
		                    var control = x;
		                  }
		                  Reflect.construct(fn, [], Fake);
		                } else {
		                  try {
		                    Fake.call();
		                  } catch (x$0) {
		                    control = x$0;
		                  }
		                  fn.call(Fake.prototype);
		                }
		              } else {
		                try {
		                  throw Error();
		                } catch (x$1) {
		                  control = x$1;
		                }
		                (Fake = fn()) &&
		                  "function" === typeof Fake.catch &&
		                  Fake.catch(function () {});
		              }
		            } catch (sample) {
		              if (sample && control && "string" === typeof sample.stack)
		                return [sample.stack, control.stack];
		            }
		            return [null, null];
		          }
		        };
		        RunInRootFrame.DetermineComponentFrameRoot.displayName =
		          "DetermineComponentFrameRoot";
		        var namePropDescriptor = Object.getOwnPropertyDescriptor(
		          RunInRootFrame.DetermineComponentFrameRoot,
		          "name"
		        );
		        namePropDescriptor &&
		          namePropDescriptor.configurable &&
		          Object.defineProperty(
		            RunInRootFrame.DetermineComponentFrameRoot,
		            "name",
		            { value: "DetermineComponentFrameRoot" }
		          );
		        var _RunInRootFrame$Deter =
		            RunInRootFrame.DetermineComponentFrameRoot(),
		          sampleStack = _RunInRootFrame$Deter[0],
		          controlStack = _RunInRootFrame$Deter[1];
		        if (sampleStack && controlStack) {
		          var sampleLines = sampleStack.split("\n"),
		            controlLines = controlStack.split("\n");
		          for (
		            _RunInRootFrame$Deter = namePropDescriptor = 0;
		            namePropDescriptor < sampleLines.length &&
		            !sampleLines[namePropDescriptor].includes(
		              "DetermineComponentFrameRoot"
		            );

		          )
		            namePropDescriptor++;
		          for (
		            ;
		            _RunInRootFrame$Deter < controlLines.length &&
		            !controlLines[_RunInRootFrame$Deter].includes(
		              "DetermineComponentFrameRoot"
		            );

		          )
		            _RunInRootFrame$Deter++;
		          if (
		            namePropDescriptor === sampleLines.length ||
		            _RunInRootFrame$Deter === controlLines.length
		          )
		            for (
		              namePropDescriptor = sampleLines.length - 1,
		                _RunInRootFrame$Deter = controlLines.length - 1;
		              1 <= namePropDescriptor &&
		              0 <= _RunInRootFrame$Deter &&
		              sampleLines[namePropDescriptor] !==
		                controlLines[_RunInRootFrame$Deter];

		            )
		              _RunInRootFrame$Deter--;
		          for (
		            ;
		            1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter;
		            namePropDescriptor--, _RunInRootFrame$Deter--
		          )
		            if (
		              sampleLines[namePropDescriptor] !==
		              controlLines[_RunInRootFrame$Deter]
		            ) {
		              if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
		                do
		                  if (
		                    (namePropDescriptor--,
		                    _RunInRootFrame$Deter--,
		                    0 > _RunInRootFrame$Deter ||
		                      sampleLines[namePropDescriptor] !==
		                        controlLines[_RunInRootFrame$Deter])
		                  ) {
		                    var _frame =
		                      "\n" +
		                      sampleLines[namePropDescriptor].replace(
		                        " at new ",
		                        " at "
		                      );
		                    fn.displayName &&
		                      _frame.includes("<anonymous>") &&
		                      (_frame = _frame.replace("<anonymous>", fn.displayName));
		                    "function" === typeof fn &&
		                      componentFrameCache.set(fn, _frame);
		                    return _frame;
		                  }
		                while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
		              }
		              break;
		            }
		        }
		      } finally {
		        (reentry = !1),
		          (ReactSharedInternals.H = previousDispatcher),
		          reenableLogs(),
		          (Error.prepareStackTrace = frame);
		      }
		      sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "")
		        ? describeBuiltInComponentFrame(sampleLines)
		        : "";
		      "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
		      return sampleLines;
		    }
		    function describeUnknownElementTypeFrameInDEV(type) {
		      if (null == type) return "";
		      if ("function" === typeof type) {
		        var prototype = type.prototype;
		        return describeNativeComponentFrame(
		          type,
		          !(!prototype || !prototype.isReactComponent)
		        );
		      }
		      if ("string" === typeof type) return describeBuiltInComponentFrame(type);
		      switch (type) {
		        case REACT_SUSPENSE_TYPE:
		          return describeBuiltInComponentFrame("Suspense");
		        case REACT_SUSPENSE_LIST_TYPE:
		          return describeBuiltInComponentFrame("SuspenseList");
		      }
		      if ("object" === typeof type)
		        switch (type.$$typeof) {
		          case REACT_FORWARD_REF_TYPE:
		            return (type = describeNativeComponentFrame(type.render, !1)), type;
		          case REACT_MEMO_TYPE:
		            return describeUnknownElementTypeFrameInDEV(type.type);
		          case REACT_LAZY_TYPE:
		            prototype = type._payload;
		            type = type._init;
		            try {
		              return describeUnknownElementTypeFrameInDEV(type(prototype));
		            } catch (x) {}
		        }
		      return "";
		    }
		    function getOwner() {
		      var dispatcher = ReactSharedInternals.A;
		      return null === dispatcher ? null : dispatcher.getOwner();
		    }
		    function hasValidKey(config) {
		      if (hasOwnProperty.call(config, "key")) {
		        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
		        if (getter && getter.isReactWarning) return !1;
		      }
		      return void 0 !== config.key;
		    }
		    function defineKeyPropWarningGetter(props, displayName) {
		      function warnAboutAccessingKey() {
		        specialPropKeyWarningShown ||
		          ((specialPropKeyWarningShown = !0),
		          console.error(
		            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
		            displayName
		          ));
		      }
		      warnAboutAccessingKey.isReactWarning = !0;
		      Object.defineProperty(props, "key", {
		        get: warnAboutAccessingKey,
		        configurable: !0
		      });
		    }
		    function elementRefGetterWithDeprecationWarning() {
		      var componentName = getComponentNameFromType(this.type);
		      didWarnAboutElementRef[componentName] ||
		        ((didWarnAboutElementRef[componentName] = !0),
		        console.error(
		          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
		        ));
		      componentName = this.props.ref;
		      return void 0 !== componentName ? componentName : null;
		    }
		    function ReactElement(type, key, self, source, owner, props) {
		      self = props.ref;
		      type = {
		        $$typeof: REACT_ELEMENT_TYPE,
		        type: type,
		        key: key,
		        props: props,
		        _owner: owner
		      };
		      null !== (void 0 !== self ? self : null)
		        ? Object.defineProperty(type, "ref", {
		            enumerable: !1,
		            get: elementRefGetterWithDeprecationWarning
		          })
		        : Object.defineProperty(type, "ref", { enumerable: !1, value: null });
		      type._store = {};
		      Object.defineProperty(type._store, "validated", {
		        configurable: !1,
		        enumerable: !1,
		        writable: !0,
		        value: 0
		      });
		      Object.defineProperty(type, "_debugInfo", {
		        configurable: !1,
		        enumerable: !1,
		        writable: !0,
		        value: null
		      });
		      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
		      return type;
		    }
		    function cloneAndReplaceKey(oldElement, newKey) {
		      newKey = ReactElement(
		        oldElement.type,
		        newKey,
		        void 0,
		        void 0,
		        oldElement._owner,
		        oldElement.props
		      );
		      newKey._store.validated = oldElement._store.validated;
		      return newKey;
		    }
		    function validateChildKeys(node, parentType) {
		      if (
		        "object" === typeof node &&
		        node &&
		        node.$$typeof !== REACT_CLIENT_REFERENCE
		      )
		        if (isArrayImpl(node))
		          for (var i = 0; i < node.length; i++) {
		            var child = node[i];
		            isValidElement(child) && validateExplicitKey(child, parentType);
		          }
		        else if (isValidElement(node))
		          node._store && (node._store.validated = 1);
		        else if (
		          ((i = getIteratorFn(node)),
		          "function" === typeof i &&
		            i !== node.entries &&
		            ((i = i.call(node)), i !== node))
		        )
		          for (; !(node = i.next()).done; )
		            isValidElement(node.value) &&
		              validateExplicitKey(node.value, parentType);
		    }
		    function isValidElement(object) {
		      return (
		        "object" === typeof object &&
		        null !== object &&
		        object.$$typeof === REACT_ELEMENT_TYPE
		      );
		    }
		    function validateExplicitKey(element, parentType) {
		      if (
		        element._store &&
		        !element._store.validated &&
		        null == element.key &&
		        ((element._store.validated = 1),
		        (parentType = getCurrentComponentErrorInfo(parentType)),
		        !ownerHasKeyUseWarning[parentType])
		      ) {
		        ownerHasKeyUseWarning[parentType] = !0;
		        var childOwner = "";
		        element &&
		          null != element._owner &&
		          element._owner !== getOwner() &&
		          ((childOwner = null),
		          "number" === typeof element._owner.tag
		            ? (childOwner = getComponentNameFromType(element._owner.type))
		            : "string" === typeof element._owner.name &&
		              (childOwner = element._owner.name),
		          (childOwner = " It was passed a child from " + childOwner + "."));
		        var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
		        ReactSharedInternals.getCurrentStack = function () {
		          var stack = describeUnknownElementTypeFrameInDEV(element.type);
		          prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
		          return stack;
		        };
		        console.error(
		          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
		          parentType,
		          childOwner
		        );
		        ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
		      }
		    }
		    function getCurrentComponentErrorInfo(parentType) {
		      var info = "",
		        owner = getOwner();
		      owner &&
		        (owner = getComponentNameFromType(owner.type)) &&
		        (info = "\n\nCheck the render method of `" + owner + "`.");
		      info ||
		        ((parentType = getComponentNameFromType(parentType)) &&
		          (info =
		            "\n\nCheck the top-level render call using <" + parentType + ">."));
		      return info;
		    }
		    function escape(key) {
		      var escaperLookup = { "=": "=0", ":": "=2" };
		      return (
		        "$" +
		        key.replace(/[=:]/g, function (match) {
		          return escaperLookup[match];
		        })
		      );
		    }
		    function getElementKey(element, index) {
		      return "object" === typeof element &&
		        null !== element &&
		        null != element.key
		        ? (checkKeyStringCoercion(element.key), escape("" + element.key))
		        : index.toString(36);
		    }
		    function noop$1() {}
		    function resolveThenable(thenable) {
		      switch (thenable.status) {
		        case "fulfilled":
		          return thenable.value;
		        case "rejected":
		          throw thenable.reason;
		        default:
		          switch (
		            ("string" === typeof thenable.status
		              ? thenable.then(noop$1, noop$1)
		              : ((thenable.status = "pending"),
		                thenable.then(
		                  function (fulfilledValue) {
		                    "pending" === thenable.status &&
		                      ((thenable.status = "fulfilled"),
		                      (thenable.value = fulfilledValue));
		                  },
		                  function (error) {
		                    "pending" === thenable.status &&
		                      ((thenable.status = "rejected"),
		                      (thenable.reason = error));
		                  }
		                )),
		            thenable.status)
		          ) {
		            case "fulfilled":
		              return thenable.value;
		            case "rejected":
		              throw thenable.reason;
		          }
		      }
		      throw thenable;
		    }
		    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		      var type = typeof children;
		      if ("undefined" === type || "boolean" === type) children = null;
		      var invokeCallback = !1;
		      if (null === children) invokeCallback = !0;
		      else
		        switch (type) {
		          case "bigint":
		          case "string":
		          case "number":
		            invokeCallback = !0;
		            break;
		          case "object":
		            switch (children.$$typeof) {
		              case REACT_ELEMENT_TYPE:
		              case REACT_PORTAL_TYPE:
		                invokeCallback = !0;
		                break;
		              case REACT_LAZY_TYPE:
		                return (
		                  (invokeCallback = children._init),
		                  mapIntoArray(
		                    invokeCallback(children._payload),
		                    array,
		                    escapedPrefix,
		                    nameSoFar,
		                    callback
		                  )
		                );
		            }
		        }
		      if (invokeCallback) {
		        invokeCallback = children;
		        callback = callback(invokeCallback);
		        var childKey =
		          "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
		        isArrayImpl(callback)
		          ? ((escapedPrefix = ""),
		            null != childKey &&
		              (escapedPrefix =
		                childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
		            mapIntoArray(callback, array, escapedPrefix, "", function (c) {
		              return c;
		            }))
		          : null != callback &&
		            (isValidElement(callback) &&
		              (null != callback.key &&
		                ((invokeCallback && invokeCallback.key === callback.key) ||
		                  checkKeyStringCoercion(callback.key)),
		              (escapedPrefix = cloneAndReplaceKey(
		                callback,
		                escapedPrefix +
		                  (null == callback.key ||
		                  (invokeCallback && invokeCallback.key === callback.key)
		                    ? ""
		                    : ("" + callback.key).replace(
		                        userProvidedKeyEscapeRegex,
		                        "$&/"
		                      ) + "/") +
		                  childKey
		              )),
		              "" !== nameSoFar &&
		                null != invokeCallback &&
		                isValidElement(invokeCallback) &&
		                null == invokeCallback.key &&
		                invokeCallback._store &&
		                !invokeCallback._store.validated &&
		                (escapedPrefix._store.validated = 2),
		              (callback = escapedPrefix)),
		            array.push(callback));
		        return 1;
		      }
		      invokeCallback = 0;
		      childKey = "" === nameSoFar ? "." : nameSoFar + ":";
		      if (isArrayImpl(children))
		        for (var i = 0; i < children.length; i++)
		          (nameSoFar = children[i]),
		            (type = childKey + getElementKey(nameSoFar, i)),
		            (invokeCallback += mapIntoArray(
		              nameSoFar,
		              array,
		              escapedPrefix,
		              type,
		              callback
		            ));
		      else if (((i = getIteratorFn(children)), "function" === typeof i))
		        for (
		          i === children.entries &&
		            (didWarnAboutMaps ||
		              console.warn(
		                "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
		              ),
		            (didWarnAboutMaps = !0)),
		            children = i.call(children),
		            i = 0;
		          !(nameSoFar = children.next()).done;

		        )
		          (nameSoFar = nameSoFar.value),
		            (type = childKey + getElementKey(nameSoFar, i++)),
		            (invokeCallback += mapIntoArray(
		              nameSoFar,
		              array,
		              escapedPrefix,
		              type,
		              callback
		            ));
		      else if ("object" === type) {
		        if ("function" === typeof children.then)
		          return mapIntoArray(
		            resolveThenable(children),
		            array,
		            escapedPrefix,
		            nameSoFar,
		            callback
		          );
		        array = String(children);
		        throw Error(
		          "Objects are not valid as a React child (found: " +
		            ("[object Object]" === array
		              ? "object with keys {" + Object.keys(children).join(", ") + "}"
		              : array) +
		            "). If you meant to render a collection of children, use an array instead."
		        );
		      }
		      return invokeCallback;
		    }
		    function mapChildren(children, func, context) {
		      if (null == children) return children;
		      var result = [],
		        count = 0;
		      mapIntoArray(children, result, "", "", function (child) {
		        return func.call(context, child, count++);
		      });
		      return result;
		    }
		    function lazyInitializer(payload) {
		      if (-1 === payload._status) {
		        var ctor = payload._result;
		        ctor = ctor();
		        ctor.then(
		          function (moduleObject) {
		            if (0 === payload._status || -1 === payload._status)
		              (payload._status = 1), (payload._result = moduleObject);
		          },
		          function (error) {
		            if (0 === payload._status || -1 === payload._status)
		              (payload._status = 2), (payload._result = error);
		          }
		        );
		        -1 === payload._status &&
		          ((payload._status = 0), (payload._result = ctor));
		      }
		      if (1 === payload._status)
		        return (
		          (ctor = payload._result),
		          void 0 === ctor &&
		            console.error(
		              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
		              ctor
		            ),
		          "default" in ctor ||
		            console.error(
		              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
		              ctor
		            ),
		          ctor.default
		        );
		      throw payload._result;
		    }
		    function resolveDispatcher() {
		      var dispatcher = ReactSharedInternals.H;
		      null === dispatcher &&
		        console.error(
		          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
		        );
		      return dispatcher;
		    }
		    function noop() {}
		    function enqueueTask(task) {
		      if (null === enqueueTaskImpl)
		        try {
		          var requireString = ("require" + Math.random()).slice(0, 7);
		          enqueueTaskImpl = (module && module[requireString]).call(
		            module,
		            "timers"
		          ).setImmediate;
		        } catch (_err) {
		          enqueueTaskImpl = function (callback) {
		            !1 === didWarnAboutMessageChannel &&
		              ((didWarnAboutMessageChannel = !0),
		              "undefined" === typeof MessageChannel &&
		                console.error(
		                  "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
		                ));
		            var channel = new MessageChannel();
		            channel.port1.onmessage = callback;
		            channel.port2.postMessage(void 0);
		          };
		        }
		      return enqueueTaskImpl(task);
		    }
		    function aggregateErrors(errors) {
		      return 1 < errors.length && "function" === typeof AggregateError
		        ? new AggregateError(errors)
		        : errors[0];
		    }
		    function popActScope(prevActQueue, prevActScopeDepth) {
		      prevActScopeDepth !== actScopeDepth - 1 &&
		        console.error(
		          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
		        );
		      actScopeDepth = prevActScopeDepth;
		    }
		    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
		      var queue = ReactSharedInternals.actQueue;
		      if (null !== queue)
		        if (0 !== queue.length)
		          try {
		            flushActQueue(queue);
		            enqueueTask(function () {
		              return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            });
		            return;
		          } catch (error) {
		            ReactSharedInternals.thrownErrors.push(error);
		          }
		        else ReactSharedInternals.actQueue = null;
		      0 < ReactSharedInternals.thrownErrors.length
		        ? ((queue = aggregateErrors(ReactSharedInternals.thrownErrors)),
		          (ReactSharedInternals.thrownErrors.length = 0),
		          reject(queue))
		        : resolve(returnValue);
		    }
		    function flushActQueue(queue) {
		      if (!isFlushing) {
		        isFlushing = !0;
		        var i = 0;
		        try {
		          for (; i < queue.length; i++) {
		            var callback = queue[i];
		            do {
		              ReactSharedInternals.didUsePromise = !1;
		              var continuation = callback(!1);
		              if (null !== continuation) {
		                if (ReactSharedInternals.didUsePromise) {
		                  queue[i] = callback;
		                  queue.splice(0, i);
		                  return;
		                }
		                callback = continuation;
		              } else break;
		            } while (1);
		          }
		          queue.length = 0;
		        } catch (error) {
		          queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
		        } finally {
		          isFlushing = !1;
		        }
		      }
		    }
		    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
		      "function" ===
		        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
		      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
		      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
		      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
		      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
		      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
		    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
		      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
		      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
		      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
		      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
		      REACT_MEMO_TYPE = Symbol.for("react.memo"),
		      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
		      REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"),
		      MAYBE_ITERATOR_SYMBOL = Symbol.iterator,
		      didWarnStateUpdateForUnmountedComponent = {},
		      ReactNoopUpdateQueue = {
		        isMounted: function () {
		          return !1;
		        },
		        enqueueForceUpdate: function (publicInstance) {
		          warnNoop(publicInstance, "forceUpdate");
		        },
		        enqueueReplaceState: function (publicInstance) {
		          warnNoop(publicInstance, "replaceState");
		        },
		        enqueueSetState: function (publicInstance) {
		          warnNoop(publicInstance, "setState");
		        }
		      },
		      assign = Object.assign,
		      emptyObject = {};
		    Object.freeze(emptyObject);
		    Component.prototype.isReactComponent = {};
		    Component.prototype.setState = function (partialState, callback) {
		      if (
		        "object" !== typeof partialState &&
		        "function" !== typeof partialState &&
		        null != partialState
		      )
		        throw Error(
		          "takes an object of state variables to update or a function which returns an object of state variables."
		        );
		      this.updater.enqueueSetState(this, partialState, callback, "setState");
		    };
		    Component.prototype.forceUpdate = function (callback) {
		      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
		    };
		    var deprecatedAPIs = {
		        isMounted: [
		          "isMounted",
		          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
		        ],
		        replaceState: [
		          "replaceState",
		          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
		        ]
		      },
		      fnName;
		    for (fnName in deprecatedAPIs)
		      deprecatedAPIs.hasOwnProperty(fnName) &&
		        defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
		    ComponentDummy.prototype = Component.prototype;
		    deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
		    deprecatedAPIs.constructor = PureComponent;
		    assign(deprecatedAPIs, Component.prototype);
		    deprecatedAPIs.isPureReactComponent = !0;
		    var isArrayImpl = Array.isArray,
		      REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"),
		      ReactSharedInternals = {
		        H: null,
		        A: null,
		        T: null,
		        S: null,
		        actQueue: null,
		        isBatchingLegacy: !1,
		        didScheduleLegacyUpdate: !1,
		        didUsePromise: !1,
		        thrownErrors: [],
		        getCurrentStack: null
		      },
		      hasOwnProperty = Object.prototype.hasOwnProperty,
		      REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"),
		      disabledDepth = 0,
		      prevLog,
		      prevInfo,
		      prevWarn,
		      prevError,
		      prevGroup,
		      prevGroupCollapsed,
		      prevGroupEnd;
		    disabledLog.__reactDisabledLog = !0;
		    var prefix,
		      suffix,
		      reentry = !1;
		    var componentFrameCache = new (
		      "function" === typeof WeakMap ? WeakMap : Map
		    )();
		    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
		      specialPropKeyWarningShown,
		      didWarnAboutOldJSXRuntime;
		    var didWarnAboutElementRef = {};
		    var ownerHasKeyUseWarning = {},
		      didWarnAboutMaps = !1,
		      userProvidedKeyEscapeRegex = /\/+/g,
		      reportGlobalError =
		        "function" === typeof reportError
		          ? reportError
		          : function (error) {
		              if (
		                "object" === typeof window &&
		                "function" === typeof window.ErrorEvent
		              ) {
		                var event = new window.ErrorEvent("error", {
		                  bubbles: !0,
		                  cancelable: !0,
		                  message:
		                    "object" === typeof error &&
		                    null !== error &&
		                    "string" === typeof error.message
		                      ? String(error.message)
		                      : String(error),
		                  error: error
		                });
		                if (!window.dispatchEvent(event)) return;
		              } else if (
		                "object" === typeof process &&
		                "function" === typeof process.emit
		              ) {
		                process.emit("uncaughtException", error);
		                return;
		              }
		              console.error(error);
		            },
		      didWarnAboutMessageChannel = !1,
		      enqueueTaskImpl = null,
		      actScopeDepth = 0,
		      didWarnNoAwaitAct = !1,
		      isFlushing = !1,
		      queueSeveralMicrotasks =
		        "function" === typeof queueMicrotask
		          ? function (callback) {
		              queueMicrotask(function () {
		                return queueMicrotask(callback);
		              });
		            }
		          : enqueueTask;
		    exports.Children = {
		      map: mapChildren,
		      forEach: function (children, forEachFunc, forEachContext) {
		        mapChildren(
		          children,
		          function () {
		            forEachFunc.apply(this, arguments);
		          },
		          forEachContext
		        );
		      },
		      count: function (children) {
		        var n = 0;
		        mapChildren(children, function () {
		          n++;
		        });
		        return n;
		      },
		      toArray: function (children) {
		        return (
		          mapChildren(children, function (child) {
		            return child;
		          }) || []
		        );
		      },
		      only: function (children) {
		        if (!isValidElement(children))
		          throw Error(
		            "React.Children.only expected to receive a single React element child."
		          );
		        return children;
		      }
		    };
		    exports.Component = Component;
		    exports.Fragment = REACT_FRAGMENT_TYPE;
		    exports.Profiler = REACT_PROFILER_TYPE;
		    exports.PureComponent = PureComponent;
		    exports.StrictMode = REACT_STRICT_MODE_TYPE;
		    exports.Suspense = REACT_SUSPENSE_TYPE;
		    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
		      ReactSharedInternals;
		    exports.act = function (callback) {
		      var prevActQueue = ReactSharedInternals.actQueue,
		        prevActScopeDepth = actScopeDepth;
		      actScopeDepth++;
		      var queue = (ReactSharedInternals.actQueue =
		          null !== prevActQueue ? prevActQueue : []),
		        didAwaitActCall = !1;
		      try {
		        var result = callback();
		      } catch (error) {
		        ReactSharedInternals.thrownErrors.push(error);
		      }
		      if (0 < ReactSharedInternals.thrownErrors.length)
		        throw (
		          (popActScope(prevActQueue, prevActScopeDepth),
		          (callback = aggregateErrors(ReactSharedInternals.thrownErrors)),
		          (ReactSharedInternals.thrownErrors.length = 0),
		          callback)
		        );
		      if (
		        null !== result &&
		        "object" === typeof result &&
		        "function" === typeof result.then
		      ) {
		        var thenable = result;
		        queueSeveralMicrotasks(function () {
		          didAwaitActCall ||
		            didWarnNoAwaitAct ||
		            ((didWarnNoAwaitAct = !0),
		            console.error(
		              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
		            ));
		        });
		        return {
		          then: function (resolve, reject) {
		            didAwaitActCall = !0;
		            thenable.then(
		              function (returnValue) {
		                popActScope(prevActQueue, prevActScopeDepth);
		                if (0 === prevActScopeDepth) {
		                  try {
		                    flushActQueue(queue),
		                      enqueueTask(function () {
		                        return recursivelyFlushAsyncActWork(
		                          returnValue,
		                          resolve,
		                          reject
		                        );
		                      });
		                  } catch (error$2) {
		                    ReactSharedInternals.thrownErrors.push(error$2);
		                  }
		                  if (0 < ReactSharedInternals.thrownErrors.length) {
		                    var _thrownError = aggregateErrors(
		                      ReactSharedInternals.thrownErrors
		                    );
		                    ReactSharedInternals.thrownErrors.length = 0;
		                    reject(_thrownError);
		                  }
		                } else resolve(returnValue);
		              },
		              function (error) {
		                popActScope(prevActQueue, prevActScopeDepth);
		                0 < ReactSharedInternals.thrownErrors.length
		                  ? ((error = aggregateErrors(
		                      ReactSharedInternals.thrownErrors
		                    )),
		                    (ReactSharedInternals.thrownErrors.length = 0),
		                    reject(error))
		                  : reject(error);
		              }
		            );
		          }
		        };
		      }
		      var returnValue$jscomp$0 = result;
		      popActScope(prevActQueue, prevActScopeDepth);
		      0 === prevActScopeDepth &&
		        (flushActQueue(queue),
		        0 !== queue.length &&
		          queueSeveralMicrotasks(function () {
		            didAwaitActCall ||
		              didWarnNoAwaitAct ||
		              ((didWarnNoAwaitAct = !0),
		              console.error(
		                "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
		              ));
		          }),
		        (ReactSharedInternals.actQueue = null));
		      if (0 < ReactSharedInternals.thrownErrors.length)
		        throw (
		          ((callback = aggregateErrors(ReactSharedInternals.thrownErrors)),
		          (ReactSharedInternals.thrownErrors.length = 0),
		          callback)
		        );
		      return {
		        then: function (resolve, reject) {
		          didAwaitActCall = !0;
		          0 === prevActScopeDepth
		            ? ((ReactSharedInternals.actQueue = queue),
		              enqueueTask(function () {
		                return recursivelyFlushAsyncActWork(
		                  returnValue$jscomp$0,
		                  resolve,
		                  reject
		                );
		              }))
		            : resolve(returnValue$jscomp$0);
		        }
		      };
		    };
		    exports.cache = function (fn) {
		      return function () {
		        return fn.apply(null, arguments);
		      };
		    };
		    exports.cloneElement = function (element, config, children) {
		      if (null === element || void 0 === element)
		        throw Error(
		          "The argument must be a React element, but you passed " +
		            element +
		            "."
		        );
		      var props = assign({}, element.props),
		        key = element.key,
		        owner = element._owner;
		      if (null != config) {
		        var JSCompiler_inline_result;
		        a: {
		          if (
		            hasOwnProperty.call(config, "ref") &&
		            (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
		              config,
		              "ref"
		            ).get) &&
		            JSCompiler_inline_result.isReactWarning
		          ) {
		            JSCompiler_inline_result = !1;
		            break a;
		          }
		          JSCompiler_inline_result = void 0 !== config.ref;
		        }
		        JSCompiler_inline_result && (owner = getOwner());
		        hasValidKey(config) &&
		          (checkKeyStringCoercion(config.key), (key = "" + config.key));
		        for (propName in config)
		          !hasOwnProperty.call(config, propName) ||
		            "key" === propName ||
		            "__self" === propName ||
		            "__source" === propName ||
		            ("ref" === propName && void 0 === config.ref) ||
		            (props[propName] = config[propName]);
		      }
		      var propName = arguments.length - 2;
		      if (1 === propName) props.children = children;
		      else if (1 < propName) {
		        JSCompiler_inline_result = Array(propName);
		        for (var i = 0; i < propName; i++)
		          JSCompiler_inline_result[i] = arguments[i + 2];
		        props.children = JSCompiler_inline_result;
		      }
		      props = ReactElement(element.type, key, void 0, void 0, owner, props);
		      for (key = 2; key < arguments.length; key++)
		        validateChildKeys(arguments[key], props.type);
		      return props;
		    };
		    exports.createContext = function (defaultValue) {
		      defaultValue = {
		        $$typeof: REACT_CONTEXT_TYPE,
		        _currentValue: defaultValue,
		        _currentValue2: defaultValue,
		        _threadCount: 0,
		        Provider: null,
		        Consumer: null
		      };
		      defaultValue.Provider = defaultValue;
		      defaultValue.Consumer = {
		        $$typeof: REACT_CONSUMER_TYPE,
		        _context: defaultValue
		      };
		      defaultValue._currentRenderer = null;
		      defaultValue._currentRenderer2 = null;
		      return defaultValue;
		    };
		    exports.createElement = function (type, config, children) {
		      if (isValidElementType(type))
		        for (var i = 2; i < arguments.length; i++)
		          validateChildKeys(arguments[i], type);
		      else {
		        i = "";
		        if (
		          void 0 === type ||
		          ("object" === typeof type &&
		            null !== type &&
		            0 === Object.keys(type).length)
		        )
		          i +=
		            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
		        if (null === type) var typeString = "null";
		        else
		          isArrayImpl(type)
		            ? (typeString = "array")
		            : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE
		              ? ((typeString =
		                  "<" +
		                  (getComponentNameFromType(type.type) || "Unknown") +
		                  " />"),
		                (i =
		                  " Did you accidentally export a JSX literal instead of a component?"))
		              : (typeString = typeof type);
		        console.error(
		          "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
		          typeString,
		          i
		        );
		      }
		      var propName;
		      i = {};
		      typeString = null;
		      if (null != config)
		        for (propName in (didWarnAboutOldJSXRuntime ||
		          !("__self" in config) ||
		          "key" in config ||
		          ((didWarnAboutOldJSXRuntime = !0),
		          console.warn(
		            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
		          )),
		        hasValidKey(config) &&
		          (checkKeyStringCoercion(config.key), (typeString = "" + config.key)),
		        config))
		          hasOwnProperty.call(config, propName) &&
		            "key" !== propName &&
		            "__self" !== propName &&
		            "__source" !== propName &&
		            (i[propName] = config[propName]);
		      var childrenLength = arguments.length - 2;
		      if (1 === childrenLength) i.children = children;
		      else if (1 < childrenLength) {
		        for (
		          var childArray = Array(childrenLength), _i = 0;
		          _i < childrenLength;
		          _i++
		        )
		          childArray[_i] = arguments[_i + 2];
		        Object.freeze && Object.freeze(childArray);
		        i.children = childArray;
		      }
		      if (type && type.defaultProps)
		        for (propName in ((childrenLength = type.defaultProps), childrenLength))
		          void 0 === i[propName] && (i[propName] = childrenLength[propName]);
		      typeString &&
		        defineKeyPropWarningGetter(
		          i,
		          "function" === typeof type
		            ? type.displayName || type.name || "Unknown"
		            : type
		        );
		      return ReactElement(type, typeString, void 0, void 0, getOwner(), i);
		    };
		    exports.createRef = function () {
		      var refObject = { current: null };
		      Object.seal(refObject);
		      return refObject;
		    };
		    exports.forwardRef = function (render) {
		      null != render && render.$$typeof === REACT_MEMO_TYPE
		        ? console.error(
		            "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
		          )
		        : "function" !== typeof render
		          ? console.error(
		              "forwardRef requires a render function but was given %s.",
		              null === render ? "null" : typeof render
		            )
		          : 0 !== render.length &&
		            2 !== render.length &&
		            console.error(
		              "forwardRef render functions accept exactly two parameters: props and ref. %s",
		              1 === render.length
		                ? "Did you forget to use the ref parameter?"
		                : "Any additional parameter will be undefined."
		            );
		      null != render &&
		        null != render.defaultProps &&
		        console.error(
		          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
		        );
		      var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render: render },
		        ownName;
		      Object.defineProperty(elementType, "displayName", {
		        enumerable: !1,
		        configurable: !0,
		        get: function () {
		          return ownName;
		        },
		        set: function (name) {
		          ownName = name;
		          render.name ||
		            render.displayName ||
		            (Object.defineProperty(render, "name", { value: name }),
		            (render.displayName = name));
		        }
		      });
		      return elementType;
		    };
		    exports.isValidElement = isValidElement;
		    exports.lazy = function (ctor) {
		      return {
		        $$typeof: REACT_LAZY_TYPE,
		        _payload: { _status: -1, _result: ctor },
		        _init: lazyInitializer
		      };
		    };
		    exports.memo = function (type, compare) {
		      isValidElementType(type) ||
		        console.error(
		          "memo: The first argument must be a component. Instead received: %s",
		          null === type ? "null" : typeof type
		        );
		      compare = {
		        $$typeof: REACT_MEMO_TYPE,
		        type: type,
		        compare: void 0 === compare ? null : compare
		      };
		      var ownName;
		      Object.defineProperty(compare, "displayName", {
		        enumerable: !1,
		        configurable: !0,
		        get: function () {
		          return ownName;
		        },
		        set: function (name) {
		          ownName = name;
		          type.name ||
		            type.displayName ||
		            (Object.defineProperty(type, "name", { value: name }),
		            (type.displayName = name));
		        }
		      });
		      return compare;
		    };
		    exports.startTransition = function (scope) {
		      var prevTransition = ReactSharedInternals.T,
		        currentTransition = {};
		      ReactSharedInternals.T = currentTransition;
		      currentTransition._updatedFibers = new Set();
		      try {
		        var returnValue = scope(),
		          onStartTransitionFinish = ReactSharedInternals.S;
		        null !== onStartTransitionFinish &&
		          onStartTransitionFinish(currentTransition, returnValue);
		        "object" === typeof returnValue &&
		          null !== returnValue &&
		          "function" === typeof returnValue.then &&
		          returnValue.then(noop, reportGlobalError);
		      } catch (error) {
		        reportGlobalError(error);
		      } finally {
		        null === prevTransition &&
		          currentTransition._updatedFibers &&
		          ((scope = currentTransition._updatedFibers.size),
		          currentTransition._updatedFibers.clear(),
		          10 < scope &&
		            console.warn(
		              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
		            )),
		          (ReactSharedInternals.T = prevTransition);
		      }
		    };
		    exports.unstable_useCacheRefresh = function () {
		      return resolveDispatcher().useCacheRefresh();
		    };
		    exports.use = function (usable) {
		      return resolveDispatcher().use(usable);
		    };
		    exports.useActionState = function (action, initialState, permalink) {
		      return resolveDispatcher().useActionState(
		        action,
		        initialState,
		        permalink
		      );
		    };
		    exports.useCallback = function (callback, deps) {
		      return resolveDispatcher().useCallback(callback, deps);
		    };
		    exports.useContext = function (Context) {
		      var dispatcher = resolveDispatcher();
		      Context.$$typeof === REACT_CONSUMER_TYPE &&
		        console.error(
		          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
		        );
		      return dispatcher.useContext(Context);
		    };
		    exports.useDebugValue = function (value, formatterFn) {
		      return resolveDispatcher().useDebugValue(value, formatterFn);
		    };
		    exports.useDeferredValue = function (value, initialValue) {
		      return resolveDispatcher().useDeferredValue(value, initialValue);
		    };
		    exports.useEffect = function (create, deps) {
		      return resolveDispatcher().useEffect(create, deps);
		    };
		    exports.useId = function () {
		      return resolveDispatcher().useId();
		    };
		    exports.useImperativeHandle = function (ref, create, deps) {
		      return resolveDispatcher().useImperativeHandle(ref, create, deps);
		    };
		    exports.useInsertionEffect = function (create, deps) {
		      return resolveDispatcher().useInsertionEffect(create, deps);
		    };
		    exports.useLayoutEffect = function (create, deps) {
		      return resolveDispatcher().useLayoutEffect(create, deps);
		    };
		    exports.useMemo = function (create, deps) {
		      return resolveDispatcher().useMemo(create, deps);
		    };
		    exports.useOptimistic = function (passthrough, reducer) {
		      return resolveDispatcher().useOptimistic(passthrough, reducer);
		    };
		    exports.useReducer = function (reducer, initialArg, init) {
		      return resolveDispatcher().useReducer(reducer, initialArg, init);
		    };
		    exports.useRef = function (initialValue) {
		      return resolveDispatcher().useRef(initialValue);
		    };
		    exports.useState = function (initialState) {
		      return resolveDispatcher().useState(initialState);
		    };
		    exports.useSyncExternalStore = function (
		      subscribe,
		      getSnapshot,
		      getServerSnapshot
		    ) {
		      return resolveDispatcher().useSyncExternalStore(
		        subscribe,
		        getSnapshot,
		        getServerSnapshot
		      );
		    };
		    exports.useTransition = function () {
		      return resolveDispatcher().useTransition();
		    };
		    exports.version = "19.0.0";
		    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
		      "function" ===
		        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
		      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
		  })();
} (react_development, react_developmentExports));
	return react_developmentExports;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReact_production();
	} else {
	  module.exports = requireReact_development();
	}
} (react));

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;
	"production" !== process.env.NODE_ENV &&
	  (function () {
	    function getComponentNameFromType(type) {
	      if (null == type) return null;
	      if ("function" === typeof type)
	        return type.$$typeof === REACT_CLIENT_REFERENCE$2
	          ? null
	          : type.displayName || type.name || null;
	      if ("string" === typeof type) return type;
	      switch (type) {
	        case REACT_FRAGMENT_TYPE:
	          return "Fragment";
	        case REACT_PORTAL_TYPE:
	          return "Portal";
	        case REACT_PROFILER_TYPE:
	          return "Profiler";
	        case REACT_STRICT_MODE_TYPE:
	          return "StrictMode";
	        case REACT_SUSPENSE_TYPE:
	          return "Suspense";
	        case REACT_SUSPENSE_LIST_TYPE:
	          return "SuspenseList";
	      }
	      if ("object" === typeof type)
	        switch (
	          ("number" === typeof type.tag &&
	            console.error(
	              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
	            ),
	          type.$$typeof)
	        ) {
	          case REACT_CONTEXT_TYPE:
	            return (type.displayName || "Context") + ".Provider";
	          case REACT_CONSUMER_TYPE:
	            return (type._context.displayName || "Context") + ".Consumer";
	          case REACT_FORWARD_REF_TYPE:
	            var innerType = type.render;
	            type = type.displayName;
	            type ||
	              ((type = innerType.displayName || innerType.name || ""),
	              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
	            return type;
	          case REACT_MEMO_TYPE:
	            return (
	              (innerType = type.displayName || null),
	              null !== innerType
	                ? innerType
	                : getComponentNameFromType(type.type) || "Memo"
	            );
	          case REACT_LAZY_TYPE:
	            innerType = type._payload;
	            type = type._init;
	            try {
	              return getComponentNameFromType(type(innerType));
	            } catch (x) {}
	        }
	      return null;
	    }
	    function testStringCoercion(value) {
	      return "" + value;
	    }
	    function checkKeyStringCoercion(value) {
	      try {
	        testStringCoercion(value);
	        var JSCompiler_inline_result = !1;
	      } catch (e) {
	        JSCompiler_inline_result = !0;
	      }
	      if (JSCompiler_inline_result) {
	        JSCompiler_inline_result = console;
	        var JSCompiler_temp_const = JSCompiler_inline_result.error;
	        var JSCompiler_inline_result$jscomp$0 =
	          ("function" === typeof Symbol &&
	            Symbol.toStringTag &&
	            value[Symbol.toStringTag]) ||
	          value.constructor.name ||
	          "Object";
	        JSCompiler_temp_const.call(
	          JSCompiler_inline_result,
	          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
	          JSCompiler_inline_result$jscomp$0
	        );
	        return testStringCoercion(value);
	      }
	    }
	    function disabledLog() {}
	    function disableLogs() {
	      if (0 === disabledDepth) {
	        prevLog = console.log;
	        prevInfo = console.info;
	        prevWarn = console.warn;
	        prevError = console.error;
	        prevGroup = console.group;
	        prevGroupCollapsed = console.groupCollapsed;
	        prevGroupEnd = console.groupEnd;
	        var props = {
	          configurable: !0,
	          enumerable: !0,
	          value: disabledLog,
	          writable: !0
	        };
	        Object.defineProperties(console, {
	          info: props,
	          log: props,
	          warn: props,
	          error: props,
	          group: props,
	          groupCollapsed: props,
	          groupEnd: props
	        });
	      }
	      disabledDepth++;
	    }
	    function reenableLogs() {
	      disabledDepth--;
	      if (0 === disabledDepth) {
	        var props = { configurable: !0, enumerable: !0, writable: !0 };
	        Object.defineProperties(console, {
	          log: assign({}, props, { value: prevLog }),
	          info: assign({}, props, { value: prevInfo }),
	          warn: assign({}, props, { value: prevWarn }),
	          error: assign({}, props, { value: prevError }),
	          group: assign({}, props, { value: prevGroup }),
	          groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
	          groupEnd: assign({}, props, { value: prevGroupEnd })
	        });
	      }
	      0 > disabledDepth &&
	        console.error(
	          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
	        );
	    }
	    function describeBuiltInComponentFrame(name) {
	      if (void 0 === prefix)
	        try {
	          throw Error();
	        } catch (x) {
	          var match = x.stack.trim().match(/\n( *(at )?)/);
	          prefix = (match && match[1]) || "";
	          suffix =
	            -1 < x.stack.indexOf("\n    at")
	              ? " (<anonymous>)"
	              : -1 < x.stack.indexOf("@")
	                ? "@unknown:0:0"
	                : "";
	        }
	      return "\n" + prefix + name + suffix;
	    }
	    function describeNativeComponentFrame(fn, construct) {
	      if (!fn || reentry) return "";
	      var frame = componentFrameCache.get(fn);
	      if (void 0 !== frame) return frame;
	      reentry = !0;
	      frame = Error.prepareStackTrace;
	      Error.prepareStackTrace = void 0;
	      var previousDispatcher = null;
	      previousDispatcher = ReactSharedInternals.H;
	      ReactSharedInternals.H = null;
	      disableLogs();
	      try {
	        var RunInRootFrame = {
	          DetermineComponentFrameRoot: function () {
	            try {
	              if (construct) {
	                var Fake = function () {
	                  throw Error();
	                };
	                Object.defineProperty(Fake.prototype, "props", {
	                  set: function () {
	                    throw Error();
	                  }
	                });
	                if ("object" === typeof Reflect && Reflect.construct) {
	                  try {
	                    Reflect.construct(Fake, []);
	                  } catch (x) {
	                    var control = x;
	                  }
	                  Reflect.construct(fn, [], Fake);
	                } else {
	                  try {
	                    Fake.call();
	                  } catch (x$0) {
	                    control = x$0;
	                  }
	                  fn.call(Fake.prototype);
	                }
	              } else {
	                try {
	                  throw Error();
	                } catch (x$1) {
	                  control = x$1;
	                }
	                (Fake = fn()) &&
	                  "function" === typeof Fake.catch &&
	                  Fake.catch(function () {});
	              }
	            } catch (sample) {
	              if (sample && control && "string" === typeof sample.stack)
	                return [sample.stack, control.stack];
	            }
	            return [null, null];
	          }
	        };
	        RunInRootFrame.DetermineComponentFrameRoot.displayName =
	          "DetermineComponentFrameRoot";
	        var namePropDescriptor = Object.getOwnPropertyDescriptor(
	          RunInRootFrame.DetermineComponentFrameRoot,
	          "name"
	        );
	        namePropDescriptor &&
	          namePropDescriptor.configurable &&
	          Object.defineProperty(
	            RunInRootFrame.DetermineComponentFrameRoot,
	            "name",
	            { value: "DetermineComponentFrameRoot" }
	          );
	        var _RunInRootFrame$Deter =
	            RunInRootFrame.DetermineComponentFrameRoot(),
	          sampleStack = _RunInRootFrame$Deter[0],
	          controlStack = _RunInRootFrame$Deter[1];
	        if (sampleStack && controlStack) {
	          var sampleLines = sampleStack.split("\n"),
	            controlLines = controlStack.split("\n");
	          for (
	            _RunInRootFrame$Deter = namePropDescriptor = 0;
	            namePropDescriptor < sampleLines.length &&
	            !sampleLines[namePropDescriptor].includes(
	              "DetermineComponentFrameRoot"
	            );

	          )
	            namePropDescriptor++;
	          for (
	            ;
	            _RunInRootFrame$Deter < controlLines.length &&
	            !controlLines[_RunInRootFrame$Deter].includes(
	              "DetermineComponentFrameRoot"
	            );

	          )
	            _RunInRootFrame$Deter++;
	          if (
	            namePropDescriptor === sampleLines.length ||
	            _RunInRootFrame$Deter === controlLines.length
	          )
	            for (
	              namePropDescriptor = sampleLines.length - 1,
	                _RunInRootFrame$Deter = controlLines.length - 1;
	              1 <= namePropDescriptor &&
	              0 <= _RunInRootFrame$Deter &&
	              sampleLines[namePropDescriptor] !==
	                controlLines[_RunInRootFrame$Deter];

	            )
	              _RunInRootFrame$Deter--;
	          for (
	            ;
	            1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter;
	            namePropDescriptor--, _RunInRootFrame$Deter--
	          )
	            if (
	              sampleLines[namePropDescriptor] !==
	              controlLines[_RunInRootFrame$Deter]
	            ) {
	              if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
	                do
	                  if (
	                    (namePropDescriptor--,
	                    _RunInRootFrame$Deter--,
	                    0 > _RunInRootFrame$Deter ||
	                      sampleLines[namePropDescriptor] !==
	                        controlLines[_RunInRootFrame$Deter])
	                  ) {
	                    var _frame =
	                      "\n" +
	                      sampleLines[namePropDescriptor].replace(
	                        " at new ",
	                        " at "
	                      );
	                    fn.displayName &&
	                      _frame.includes("<anonymous>") &&
	                      (_frame = _frame.replace("<anonymous>", fn.displayName));
	                    "function" === typeof fn &&
	                      componentFrameCache.set(fn, _frame);
	                    return _frame;
	                  }
	                while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
	              }
	              break;
	            }
	        }
	      } finally {
	        (reentry = !1),
	          (ReactSharedInternals.H = previousDispatcher),
	          reenableLogs(),
	          (Error.prepareStackTrace = frame);
	      }
	      sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "")
	        ? describeBuiltInComponentFrame(sampleLines)
	        : "";
	      "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
	      return sampleLines;
	    }
	    function describeUnknownElementTypeFrameInDEV(type) {
	      if (null == type) return "";
	      if ("function" === typeof type) {
	        var prototype = type.prototype;
	        return describeNativeComponentFrame(
	          type,
	          !(!prototype || !prototype.isReactComponent)
	        );
	      }
	      if ("string" === typeof type) return describeBuiltInComponentFrame(type);
	      switch (type) {
	        case REACT_SUSPENSE_TYPE:
	          return describeBuiltInComponentFrame("Suspense");
	        case REACT_SUSPENSE_LIST_TYPE:
	          return describeBuiltInComponentFrame("SuspenseList");
	      }
	      if ("object" === typeof type)
	        switch (type.$$typeof) {
	          case REACT_FORWARD_REF_TYPE:
	            return (type = describeNativeComponentFrame(type.render, !1)), type;
	          case REACT_MEMO_TYPE:
	            return describeUnknownElementTypeFrameInDEV(type.type);
	          case REACT_LAZY_TYPE:
	            prototype = type._payload;
	            type = type._init;
	            try {
	              return describeUnknownElementTypeFrameInDEV(type(prototype));
	            } catch (x) {}
	        }
	      return "";
	    }
	    function getOwner() {
	      var dispatcher = ReactSharedInternals.A;
	      return null === dispatcher ? null : dispatcher.getOwner();
	    }
	    function hasValidKey(config) {
	      if (hasOwnProperty.call(config, "key")) {
	        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
	        if (getter && getter.isReactWarning) return !1;
	      }
	      return void 0 !== config.key;
	    }
	    function defineKeyPropWarningGetter(props, displayName) {
	      function warnAboutAccessingKey() {
	        specialPropKeyWarningShown ||
	          ((specialPropKeyWarningShown = !0),
	          console.error(
	            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
	            displayName
	          ));
	      }
	      warnAboutAccessingKey.isReactWarning = !0;
	      Object.defineProperty(props, "key", {
	        get: warnAboutAccessingKey,
	        configurable: !0
	      });
	    }
	    function elementRefGetterWithDeprecationWarning() {
	      var componentName = getComponentNameFromType(this.type);
	      didWarnAboutElementRef[componentName] ||
	        ((didWarnAboutElementRef[componentName] = !0),
	        console.error(
	          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
	        ));
	      componentName = this.props.ref;
	      return void 0 !== componentName ? componentName : null;
	    }
	    function ReactElement(type, key, self, source, owner, props) {
	      self = props.ref;
	      type = {
	        $$typeof: REACT_ELEMENT_TYPE,
	        type: type,
	        key: key,
	        props: props,
	        _owner: owner
	      };
	      null !== (void 0 !== self ? self : null)
	        ? Object.defineProperty(type, "ref", {
	            enumerable: !1,
	            get: elementRefGetterWithDeprecationWarning
	          })
	        : Object.defineProperty(type, "ref", { enumerable: !1, value: null });
	      type._store = {};
	      Object.defineProperty(type._store, "validated", {
	        configurable: !1,
	        enumerable: !1,
	        writable: !0,
	        value: 0
	      });
	      Object.defineProperty(type, "_debugInfo", {
	        configurable: !1,
	        enumerable: !1,
	        writable: !0,
	        value: null
	      });
	      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
	      return type;
	    }
	    function jsxDEVImpl(
	      type,
	      config,
	      maybeKey,
	      isStaticChildren,
	      source,
	      self
	    ) {
	      if (
	        "string" === typeof type ||
	        "function" === typeof type ||
	        type === REACT_FRAGMENT_TYPE ||
	        type === REACT_PROFILER_TYPE ||
	        type === REACT_STRICT_MODE_TYPE ||
	        type === REACT_SUSPENSE_TYPE ||
	        type === REACT_SUSPENSE_LIST_TYPE ||
	        type === REACT_OFFSCREEN_TYPE ||
	        ("object" === typeof type &&
	          null !== type &&
	          (type.$$typeof === REACT_LAZY_TYPE ||
	            type.$$typeof === REACT_MEMO_TYPE ||
	            type.$$typeof === REACT_CONTEXT_TYPE ||
	            type.$$typeof === REACT_CONSUMER_TYPE ||
	            type.$$typeof === REACT_FORWARD_REF_TYPE ||
	            type.$$typeof === REACT_CLIENT_REFERENCE$1 ||
	            void 0 !== type.getModuleId))
	      ) {
	        var children = config.children;
	        if (void 0 !== children)
	          if (isStaticChildren)
	            if (isArrayImpl(children)) {
	              for (
	                isStaticChildren = 0;
	                isStaticChildren < children.length;
	                isStaticChildren++
	              )
	                validateChildKeys(children[isStaticChildren], type);
	              Object.freeze && Object.freeze(children);
	            } else
	              console.error(
	                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
	              );
	          else validateChildKeys(children, type);
	      } else {
	        children = "";
	        if (
	          void 0 === type ||
	          ("object" === typeof type &&
	            null !== type &&
	            0 === Object.keys(type).length)
	        )
	          children +=
	            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
	        null === type
	          ? (isStaticChildren = "null")
	          : isArrayImpl(type)
	            ? (isStaticChildren = "array")
	            : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE
	              ? ((isStaticChildren =
	                  "<" +
	                  (getComponentNameFromType(type.type) || "Unknown") +
	                  " />"),
	                (children =
	                  " Did you accidentally export a JSX literal instead of a component?"))
	              : (isStaticChildren = typeof type);
	        console.error(
	          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
	          isStaticChildren,
	          children
	        );
	      }
	      if (hasOwnProperty.call(config, "key")) {
	        children = getComponentNameFromType(type);
	        var keys = Object.keys(config).filter(function (k) {
	          return "key" !== k;
	        });
	        isStaticChildren =
	          0 < keys.length
	            ? "{key: someKey, " + keys.join(": ..., ") + ": ...}"
	            : "{key: someKey}";
	        didWarnAboutKeySpread[children + isStaticChildren] ||
	          ((keys =
	            0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}"),
	          console.error(
	            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
	            isStaticChildren,
	            children,
	            keys,
	            children
	          ),
	          (didWarnAboutKeySpread[children + isStaticChildren] = !0));
	      }
	      children = null;
	      void 0 !== maybeKey &&
	        (checkKeyStringCoercion(maybeKey), (children = "" + maybeKey));
	      hasValidKey(config) &&
	        (checkKeyStringCoercion(config.key), (children = "" + config.key));
	      if ("key" in config) {
	        maybeKey = {};
	        for (var propName in config)
	          "key" !== propName && (maybeKey[propName] = config[propName]);
	      } else maybeKey = config;
	      children &&
	        defineKeyPropWarningGetter(
	          maybeKey,
	          "function" === typeof type
	            ? type.displayName || type.name || "Unknown"
	            : type
	        );
	      return ReactElement(type, children, self, source, getOwner(), maybeKey);
	    }
	    function validateChildKeys(node, parentType) {
	      if (
	        "object" === typeof node &&
	        node &&
	        node.$$typeof !== REACT_CLIENT_REFERENCE
	      )
	        if (isArrayImpl(node))
	          for (var i = 0; i < node.length; i++) {
	            var child = node[i];
	            isValidElement(child) && validateExplicitKey(child, parentType);
	          }
	        else if (isValidElement(node))
	          node._store && (node._store.validated = 1);
	        else if (
	          (null === node || "object" !== typeof node
	            ? (i = null)
	            : ((i =
	                (MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL]) ||
	                node["@@iterator"]),
	              (i = "function" === typeof i ? i : null)),
	          "function" === typeof i &&
	            i !== node.entries &&
	            ((i = i.call(node)), i !== node))
	        )
	          for (; !(node = i.next()).done; )
	            isValidElement(node.value) &&
	              validateExplicitKey(node.value, parentType);
	    }
	    function isValidElement(object) {
	      return (
	        "object" === typeof object &&
	        null !== object &&
	        object.$$typeof === REACT_ELEMENT_TYPE
	      );
	    }
	    function validateExplicitKey(element, parentType) {
	      if (
	        element._store &&
	        !element._store.validated &&
	        null == element.key &&
	        ((element._store.validated = 1),
	        (parentType = getCurrentComponentErrorInfo(parentType)),
	        !ownerHasKeyUseWarning[parentType])
	      ) {
	        ownerHasKeyUseWarning[parentType] = !0;
	        var childOwner = "";
	        element &&
	          null != element._owner &&
	          element._owner !== getOwner() &&
	          ((childOwner = null),
	          "number" === typeof element._owner.tag
	            ? (childOwner = getComponentNameFromType(element._owner.type))
	            : "string" === typeof element._owner.name &&
	              (childOwner = element._owner.name),
	          (childOwner = " It was passed a child from " + childOwner + "."));
	        var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
	        ReactSharedInternals.getCurrentStack = function () {
	          var stack = describeUnknownElementTypeFrameInDEV(element.type);
	          prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
	          return stack;
	        };
	        console.error(
	          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
	          parentType,
	          childOwner
	        );
	        ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
	      }
	    }
	    function getCurrentComponentErrorInfo(parentType) {
	      var info = "",
	        owner = getOwner();
	      owner &&
	        (owner = getComponentNameFromType(owner.type)) &&
	        (info = "\n\nCheck the render method of `" + owner + "`.");
	      info ||
	        ((parentType = getComponentNameFromType(parentType)) &&
	          (info =
	            "\n\nCheck the top-level render call using <" + parentType + ">."));
	      return info;
	    }
	    var React = reactExports,
	      REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	      REACT_MEMO_TYPE = Symbol.for("react.memo"),
	      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	      REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"),
	      MAYBE_ITERATOR_SYMBOL = Symbol.iterator,
	      REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"),
	      ReactSharedInternals =
	        React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	      hasOwnProperty = Object.prototype.hasOwnProperty,
	      assign = Object.assign,
	      REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"),
	      isArrayImpl = Array.isArray,
	      disabledDepth = 0,
	      prevLog,
	      prevInfo,
	      prevWarn,
	      prevError,
	      prevGroup,
	      prevGroupCollapsed,
	      prevGroupEnd;
	    disabledLog.__reactDisabledLog = !0;
	    var prefix,
	      suffix,
	      reentry = !1;
	    var componentFrameCache = new (
	      "function" === typeof WeakMap ? WeakMap : Map
	    )();
	    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
	      specialPropKeyWarningShown;
	    var didWarnAboutElementRef = {};
	    var didWarnAboutKeySpread = {},
	      ownerHasKeyUseWarning = {};
	    reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	    reactJsxRuntime_development.jsx = function (type, config, maybeKey, source, self) {
	      return jsxDEVImpl(type, config, maybeKey, !1, source, self);
	    };
	    reactJsxRuntime_development.jsxs = function (type, config, maybeKey, source, self) {
	      return jsxDEVImpl(type, config, maybeKey, !0, source, self);
	    };
	  })();
	return reactJsxRuntime_development;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReactJsxRuntime_production();
	} else {
	  module.exports = requireReactJsxRuntime_development();
	}
} (jsxRuntime));

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var post = function (basePath) { return function (path_1, body_1, _a) { return __awaiter(void 0, [path_1, body_1, _a], void 0, function (path, body, _b) {
    var queryParams, url, credentials, response, error_1, newError, payload, error, newError, payload;
    var withSession = _b.withSession, params = _b.params;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                queryParams = params
                    ? "?".concat(new URLSearchParams(params).toString())
                    : "";
                url = "".concat(basePath).concat(path).concat(queryParams);
                credentials = {};
                if (withSession) {
                    credentials.credentials = "include";
                }
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, fetch(url, __assign(__assign({}, credentials), { method: "POST", headers: {
                            "Content-type": "application/json",
                            Accept: "application/json",
                        }, body: JSON.stringify(body) }))];
            case 2:
                response = _c.sent();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _c.sent();
                newError = new Error("Fetch failed: ".concat(error_1));
                payload = error_1;
                try {
                    payload = JSON.parse(error_1);
                }
                catch (e) { }
                // @ts-ignore
                newError.payload = payload;
                throw newError;
            case 4:
                if (!!response.ok) return [3 /*break*/, 6];
                return [4 /*yield*/, response.text()];
            case 5:
                error = _c.sent();
                newError = new Error("Fetch failed: ".concat(error));
                payload = error;
                try {
                    payload = JSON.parse(error);
                }
                catch (e) { }
                // @ts-ignore
                newError.payload = payload;
                throw newError;
            case 6: return [2 /*return*/, response.json()];
        }
    });
}); }; };
var get = function (basePath) { return function (path_1, _a) { return __awaiter(void 0, [path_1, _a], void 0, function (path, _b) {
    var queryParams, url, credentials, response, error_2, newError, payload, error, newError, payload;
    var withSession = _b.withSession, params = _b.params;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                queryParams = params
                    ? "?".concat(new URLSearchParams(params).toString())
                    : "";
                url = "".concat(basePath).concat(path).concat(queryParams);
                credentials = {};
                if (withSession) {
                    credentials.credentials = "include";
                }
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, fetch(url, __assign(__assign({}, credentials), { method: "GET", headers: {
                            "Content-type": "application/json",
                            Accept: "application/json",
                        } }))];
            case 2:
                response = _c.sent();
                return [3 /*break*/, 4];
            case 3:
                error_2 = _c.sent();
                newError = new Error("Fetch failed: ".concat(error_2));
                payload = error_2;
                try {
                    payload = JSON.parse(error_2);
                }
                catch (e) { }
                // @ts-ignore
                newError.payload = payload;
                throw newError;
            case 4:
                if (!!response.ok) return [3 /*break*/, 6];
                return [4 /*yield*/, response.text()];
            case 5:
                error = _c.sent();
                newError = new Error("Fetch failed: ".concat(error));
                payload = error;
                try {
                    payload = JSON.parse(error);
                }
                catch (e) { }
                // @ts-ignore
                newError.payload = payload;
                throw newError;
            case 6: return [2 /*return*/, response.json()];
        }
    });
}); }; };
var getQuerier = function (basePath) {
    return { get: get(basePath), post: post(basePath) };
};
var useQuerier = function (basePath) {
    var querier = reactExports.useMemo(function () { return getQuerier(basePath); }, [basePath]);
    return querier;
};

var styles = ".supertokens-plugin-user-banning .container {\n  margin: 12px auto;\n  margin-top: 26px;\n  margin-bottom: 26px;\n  width: 420px;\n  text-align: center;\n  border-radius: 8px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.16);\n  background-color: rgb(255, 255, 255);\n}\n\n.supertokens-plugin-user-banning .row {\n  margin: 0 auto;\n  width: 76%;\n  padding-top: 30px;\n  padding-bottom: 10px;\n}\n\n.supertokens-plugin-user-banning .headerTitle {\n  font-size: 24px;\n  line-height: 27.6px;\n  letter-spacing: 0.58px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: rgb(0, 0, 0);\n}\n\n.supertokens-plugin-user-banning .divider {\n  margin-top: 1.5em;\n  margin-bottom: 1.5em;\n  border-bottom: 0.3px solid #dddddd;\n  align-items: center;\n  padding-bottom: 5px;\n}\n\n.supertokens-plugin-user-banning .formRow {\n  display: flex;\n  flex-direction: column;\n  padding-top: 0px;\n  padding-bottom: 20px;\n}\n\n.supertokens-plugin-user-banning .formRow .label {\n  text-align: left;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 24px;\n  color: rgb(0, 0, 0);\n}\n\n.supertokens-plugin-user-banning .formRow .inputContainer {\n  margin-top: 6px;\n}\n\n.supertokens-plugin-user-banning .formRow .inputWrapper {\n  box-sizing: border-box;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  background-color: rgb(250, 250, 250);\n  height: 34px;\n  border-radius: 6px;\n  border: 1px solid rgb(224, 224, 224);\n}\n\n.supertokens-plugin-user-banning .formRow input {\n  box-sizing: border-box;\n  padding-left: 15px;\n  filter: none;\n  color: rgb(0, 0, 0);\n  background-color: transparent;\n  border-radius: 6px;\n  font-size: 14px;\n  border: none;\n  padding-right: 25px;\n  letter-spacing: 1.2px;\n  flex: 9 1 75%;\n  width: 75%;\n  height: 32px;\n  -webkit-text-fill-color: rgb(0, 0, 0);\n}\n\n.supertokens-plugin-user-banning .formRow input:focus {\n  border: none;\n  outline: none;\n}\n\n.supertokens-plugin-user-banning .button {\n  font-family: \"Arial\", sans-serif;\n  background-color: rgb(28, 34, 42);\n  color: rgb(255, 255, 255);\n  width: 100%;\n  height: 34px;\n  font-weight: 600;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 6px;\n  border-color: rgb(45, 54, 68);\n  background-position: center;\n  transition: all 0.4s;\n  background-size: 12000%;\n  cursor: pointer;\n}\n\n.supertokens-plugin-user-banning .button:disabled {\n  border: none;\n  cursor: no-drop;\n  opacity: 0.7;\n}\n\n.generalError {\n  background: rgb(255, 241, 235);\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  margin-top: 24px;\n  padding-left: 18px;\n  padding-right: 18px;\n  letter-spacing: 0.2px;\n  font-size: 14px;\n  border-radius: 8px;\n  color: rgb(255, 23, 23);\n  animation: swing-in-top-fwd 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;\n  word-wrap: break-word;\n}\n";

var getErrorMessage = function (error) {
    if (typeof error.payload.message === "string") {
        return error.payload.message;
    }
    else if (typeof (error === null || error === void 0 ? void 0 : error.message) === "string") {
        return error.message;
    }
    else if (error) {
        try {
            return "Unknown error: " + JSON.stringify(error);
        }
        catch (e) {
            return "Unknown error";
        }
    }
    return;
};

var ThemeBase = function (_a) {
    var children = _a.children, userStyles = _a.userStyles;
    return (jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [children, jsxRuntimeExports.jsx("style", { children: userStyles.join("\n") })] }));
};

// todo: feedback: it would be useful to be able to use the supertokens components (buttons, inputs, boxes, cards, forms, etc).
function BanUserPage() {
    var _a = reactExports.useState(), error = _a[0], setError = _a[1];
    var _b = reactExports.useState("public"), tenantId = _b[0], setTenantId = _b[1];
    var _c = reactExports.useState(), email = _c[0], setEmail = _c[1];
    var _d = reactExports.useState(null), banStatus = _d[0], setBanStatus = _d[1];
    var props = { apiDomain: "http://localhost:3001" };
    var querier = useQuerier(props.apiDomain);
    var scheduleErrorReset = reactExports.useCallback(function () {
        setTimeout(function () {
            setError(undefined);
        }, 10000);
    }, []);
    var onError = reactExports.useCallback(function (error) {
        setError(getErrorMessage(error));
        scheduleErrorReset();
    }, [scheduleErrorReset]);
    var getBanStatus = reactExports.useCallback(function (email) {
        return querier
            .get("/plugin/supertokens-plugin-user-banning/ban", {
            withSession: true,
            params: { tenantId: tenantId, email: email },
        })
            .then(function (res) {
            setError(undefined);
            setBanStatus(res.banned);
        })
            .catch(onError);
    }, [querier, tenantId]);
    var updateBanStatus = reactExports.useCallback(function (isBanned) {
        return querier
            .post("/plugin/supertokens-plugin-user-banning/ban", {
            email: email,
            isBanned: isBanned,
        }, {
            withSession: true,
            params: { tenantId: tenantId },
        })
            .then(function () {
            setError(undefined);
            setBanStatus(isBanned);
        })
            .catch(onError);
    }, [querier, tenantId, email]);
    var onCheckStatus = reactExports.useCallback(function (e) {
        e.preventDefault();
        if (!email) {
            setError("Email is required");
            return;
        }
        getBanStatus(email);
    }, [getBanStatus, email]);
    var onBanUser = reactExports.useCallback(function (e) {
        e.preventDefault();
        updateBanStatus(true);
    }, [updateBanStatus, email]);
    var onUnbanUser = reactExports.useCallback(function (e) {
        e.preventDefault();
        if (!email) {
            setError("Email is required");
            return;
        }
        updateBanStatus(false);
    }, [updateBanStatus, email]);
    return (jsxRuntimeExports.jsx(ThemeBase, { userStyles: [styles], children: jsxRuntimeExports.jsx("div", { className: "supertokens-plugin-user-banning", children: jsxRuntimeExports.jsx("div", { className: "container", children: jsxRuntimeExports.jsxs("div", { className: "row", children: [jsxRuntimeExports.jsx("div", { className: "headerTitle", children: "Ban User" }), jsxRuntimeExports.jsx("p", { children: "This page is used to ban and unban users. It is useful for preventing users from accessing your application." }), jsxRuntimeExports.jsx("div", { className: "divider" }), !!error && jsxRuntimeExports.jsx("div", { className: "generalError", children: error }), jsxRuntimeExports.jsxs("form", { noValidate: true, children: [jsxRuntimeExports.jsxs("div", { className: "formRow", children: [jsxRuntimeExports.jsx("div", { className: "label", children: "Tenant ID" }), jsxRuntimeExports.jsx("div", { className: "inputContainer", children: jsxRuntimeExports.jsx("div", { className: "inputWrapper", children: jsxRuntimeExports.jsx("input", { type: "text", value: tenantId, autoComplete: "on", placeholder: "Tenant ID", onChange: function (e) { return setTenantId(e.target.value); } }) }) })] }), jsxRuntimeExports.jsxs("div", { className: "formRow", children: [jsxRuntimeExports.jsx("div", { className: "label", children: "User Email" }), jsxRuntimeExports.jsx("div", { className: "inputContainer", children: jsxRuntimeExports.jsx("div", { className: "inputWrapper", children: jsxRuntimeExports.jsx("input", { type: "email", value: email, disabled: !tenantId, autoComplete: "on", placeholder: "User Email", onChange: function (e) { return setEmail(e.target.value); } }) }) })] }), jsxRuntimeExports.jsx("div", { className: "formRow", children: jsxRuntimeExports.jsxs("button", { className: "button", onClick: onCheckStatus, disabled: !(!!tenantId && !!email), children: ["Check Status (", typeof banStatus === "boolean" ? (banStatus ? (jsxRuntimeExports.jsx("span", { style: { color: "red" }, children: "Banned" })) : (jsxRuntimeExports.jsx("span", { style: { color: "green" }, children: "Not Banned" }))) : (" - "), ")"] }) }), typeof banStatus === "boolean" && (jsxRuntimeExports.jsxs("div", { className: "formRow", style: { flexDirection: "row" }, children: [jsxRuntimeExports.jsx("button", { className: "button", disabled: banStatus, onClick: onBanUser, style: { marginRight: "20px" }, children: "Ban" }), jsxRuntimeExports.jsx("button", { className: "button", disabled: !banStatus, onClick: onUnbanUser, children: "Unban" })] }))] })] }) }) }) }));
}

// todo: feedback: need some util for calling the custom plugin api
var init = function (_) {
    return {
        id: PLUGIN_ID,
        routeHandlers: [
            {
                path: "/admin/ban-user",
                // todo: feedback: it would be useful for the handler to have access to the st instance config, otherwise it's not possible to get the base path
                handler: BanUserPage,
            },
        ],
        overrideMap: {
            emailpassword: {},
        },
    };
};

var index = { init: init };

exports.PLUGIN_ID = PLUGIN_ID;
exports.default = index;
exports.init = init;
