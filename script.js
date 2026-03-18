(function() {
	const c = document.createElement("link").relList;
	if (c && c.supports && c.supports("modulepreload")) return;
	for (const h of document.querySelectorAll('link[rel="modulepreload"]')) d(h);
	new MutationObserver(h => {
		for (const S of h)
			if (S.type === "childList")
				for (const M of S.addedNodes) M.tagName === "LINK" && M.rel === "modulepreload" && d(M)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function o(h) {
		const S = {};
		return h.integrity && (S.integrity = h.integrity), h.referrerPolicy && (S.referrerPolicy = h.referrerPolicy), h.crossOrigin === "use-credentials" ? S.credentials = "include" : h.crossOrigin === "anonymous" ? S.credentials = "omit" : S.credentials = "same-origin", S
	}

	function d(h) {
		if (h.ep) return;
		h.ep = !0;
		const S = o(h);
		fetch(h.href, S)
	}
})();

function f0(f) {
	return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f
}
var Ac = {
		exports: {}
	},
	Un = {};
var Zd;

function mx() {
	if (Zd) return Un;
	Zd = 1;
	var f = Symbol.for("react.transitional.element"),
		c = Symbol.for("react.fragment");

	function o(d, h, S) {
		var M = null;
		if (S !== void 0 && (M = "" + S), h.key !== void 0 && (M = "" + h.key), "key" in h) {
			S = {};
			for (var A in h) A !== "key" && (S[A] = h[A])
		} else S = h;
		return h = S.ref, {
			$$typeof: f,
			type: d,
			key: M,
			ref: h !== void 0 ? h : null,
			props: S
		}
	}
	return Un.Fragment = c, Un.jsx = o, Un.jsxs = o, Un
}
var Vd;

function hx() {
	return Vd || (Vd = 1, Ac.exports = mx()), Ac.exports
}
var u = hx(),
	Tc = {
		exports: {}
	},
	W = {};

var Kd;

function xx() {
	if (Kd) return W;
	Kd = 1;
	var f = Symbol.for("react.transitional.element"),
		c = Symbol.for("react.portal"),
		o = Symbol.for("react.fragment"),
		d = Symbol.for("react.strict_mode"),
		h = Symbol.for("react.profiler"),
		S = Symbol.for("react.consumer"),
		M = Symbol.for("react.context"),
		A = Symbol.for("react.forward_ref"),
		E = Symbol.for("react.suspense"),
		v = Symbol.for("react.memo"),
		C = Symbol.for("react.lazy"),
		U = Symbol.for("react.activity"),
		X = Symbol.iterator;

	function J(x) {
		return x === null || typeof x != "object" ? null : (x = X && x[X] || x["@@iterator"], typeof x == "function" ? x : null)
	}
	var V = {
			isMounted: function() {
				return !1
			},
			enqueueForceUpdate: function() {},
			enqueueReplaceState: function() {},
			enqueueSetState: function() {}
		},
		K = Object.assign,
		pe = {};

	function ge(x, _, R) {
		this.props = x, this.context = _, this.refs = pe, this.updater = R || V
	}
	ge.prototype.isReactComponent = {}, ge.prototype.setState = function(x, _) {
		if (typeof x != "object" && typeof x != "function" && x != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, x, _, "setState")
	}, ge.prototype.forceUpdate = function(x) {
		this.updater.enqueueForceUpdate(this, x, "forceUpdate")
	};

	function me() {}
	me.prototype = ge.prototype;

	function ue(x, _, R) {
		this.props = x, this.context = _, this.refs = pe, this.updater = R || V
	}
	var Te = ue.prototype = new me;
	Te.constructor = ue, K(Te, ge.prototype), Te.isPureReactComponent = !0;
	var Ee = Array.isArray;

	function _e() {}
	var $ = {
			H: null,
			A: null,
			T: null,
			S: null
		},
		Me = Object.prototype.hasOwnProperty;

	function Le(x, _, R) {
		var B = R.ref;
		return {
			$$typeof: f,
			type: x,
			key: _,
			ref: B !== void 0 ? B : null,
			props: R
		}
	}

	function Qe(x, _) {
		return Le(x.type, _, x.props)
	}

	function vt(x) {
		return typeof x == "object" && x !== null && x.$$typeof === f
	}

	function qe(x) {
		var _ = {
			"=": "=0",
			":": "=2"
		};
		return "$" + x.replace(/[=:]/g, function(R) {
			return _[R]
		})
	}
	var Yt = /\/+/g;

	function pt(x, _) {
		return typeof x == "object" && x !== null && x.key != null ? qe("" + x.key) : _.toString(36)
	}

	function et(x) {
		switch (x.status) {
			case "fulfilled":
				return x.value;
			case "rejected":
				throw x.reason;
			default:
				switch (typeof x.status == "string" ? x.then(_e, _e) : (x.status = "pending", x.then(function(_) {
						x.status === "pending" && (x.status = "fulfilled", x.value = _)
					}, function(_) {
						x.status === "pending" && (x.status = "rejected", x.reason = _)
					})), x.status) {
					case "fulfilled":
						return x.value;
					case "rejected":
						throw x.reason
				}
		}
		throw x
	}

	function j(x, _, R, B, F) {
		var ee = typeof x;
		(ee === "undefined" || ee === "boolean") && (x = null);
		var fe = !1;
		if (x === null) fe = !0;
		else switch (ee) {
			case "bigint":
			case "string":
			case "number":
				fe = !0;
				break;
			case "object":
				switch (x.$$typeof) {
					case f:
					case c:
						fe = !0;
						break;
					case C:
						return fe = x._init, j(fe(x._payload), _, R, B, F)
				}
		}
		if (fe) return F = F(x), fe = B === "" ? "." + pt(x, 0) : B, Ee(F) ? (R = "", fe != null && (R = fe.replace(Yt, "$&/") + "/"), j(F, _, R, "", function(Xa) {
			return Xa
		})) : F != null && (vt(F) && (F = Qe(F, R + (F.key == null || x && x.key === F.key ? "" : ("" + F.key).replace(Yt, "$&/") + "/") + fe)), _.push(F)), 1;
		fe = 0;
		var Ie = B === "" ? "." : B + ":";
		if (Ee(x))
			for (var we = 0; we < x.length; we++) B = x[we], ee = Ie + pt(B, we), fe += j(B, _, R, ee, F);
		else if (we = J(x), typeof we == "function")
			for (x = we.call(x), we = 0; !(B = x.next()).done;) B = B.value, ee = Ie + pt(B, we++), fe += j(B, _, R, ee, F);
		else if (ee === "object") {
			if (typeof x.then == "function") return j(et(x), _, R, B, F);
			throw _ = String(x), Error("Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead.")
		}
		return fe
	}

	function D(x, _, R) {
		if (x == null) return x;
		var B = [],
			F = 0;
		return j(x, B, "", "", function(ee) {
			return _.call(R, ee, F++)
		}), B
	}

	function H(x) {
		if (x._status === -1) {
			var _ = x._result;
			_ = _(), _.then(function(R) {
				(x._status === 0 || x._status === -1) && (x._status = 1, x._result = R)
			}, function(R) {
				(x._status === 0 || x._status === -1) && (x._status = 2, x._result = R)
			}), x._status === -1 && (x._status = 0, x._result = _)
		}
		if (x._status === 1) return x._result.default;
		throw x._result
	}
	var Z = typeof reportError == "function" ? reportError : function(x) {
			if (typeof window == "object" && typeof window.ErrorEvent == "function") {
				var _ = new window.ErrorEvent("error", {
					bubbles: !0,
					cancelable: !0,
					message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
					error: x
				});
				if (!window.dispatchEvent(_)) return
			} else if (typeof process == "object" && typeof process.emit == "function") {
				process.emit("uncaughtException", x);
				return
			}
			console.error(x)
		},
		k = {
			map: D,
			forEach: function(x, _, R) {
				D(x, function() {
					_.apply(this, arguments)
				}, R)
			},
			count: function(x) {
				var _ = 0;
				return D(x, function() {
					_++
				}), _
			},
			toArray: function(x) {
				return D(x, function(_) {
					return _
				}) || []
			},
			only: function(x) {
				if (!vt(x)) throw Error("React.Children.only expected to receive a single React element child.");
				return x
			}
		};
	return W.Activity = U, W.Children = k, W.Component = ge, W.Fragment = o, W.Profiler = h, W.PureComponent = ue, W.StrictMode = d, W.Suspense = E, W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, W.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(x) {
			return $.H.useMemoCache(x)
		}
	}, W.cache = function(x) {
		return function() {
			return x.apply(null, arguments)
		}
	}, W.cacheSignal = function() {
		return null
	}, W.cloneElement = function(x, _, R) {
		if (x == null) throw Error("The argument must be a React element, but you passed " + x + ".");
		var B = K({}, x.props),
			F = x.key;
		if (_ != null)
			for (ee in _.key !== void 0 && (F = "" + _.key), _) !Me.call(_, ee) || ee === "key" || ee === "__self" || ee === "__source" || ee === "ref" && _.ref === void 0 || (B[ee] = _[ee]);
		var ee = arguments.length - 2;
		if (ee === 1) B.children = R;
		else if (1 < ee) {
			for (var fe = Array(ee), Ie = 0; Ie < ee; Ie++) fe[Ie] = arguments[Ie + 2];
			B.children = fe
		}
		return Le(x.type, F, B)
	}, W.createContext = function(x) {
		return x = {
			$$typeof: M,
			_currentValue: x,
			_currentValue2: x,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, x.Provider = x, x.Consumer = {
			$$typeof: S,
			_context: x
		}, x
	}, W.createElement = function(x, _, R) {
		var B, F = {},
			ee = null;
		if (_ != null)
			for (B in _.key !== void 0 && (ee = "" + _.key), _) Me.call(_, B) && B !== "key" && B !== "__self" && B !== "__source" && (F[B] = _[B]);
		var fe = arguments.length - 2;
		if (fe === 1) F.children = R;
		else if (1 < fe) {
			for (var Ie = Array(fe), we = 0; we < fe; we++) Ie[we] = arguments[we + 2];
			F.children = Ie
		}
		if (x && x.defaultProps)
			for (B in fe = x.defaultProps, fe) F[B] === void 0 && (F[B] = fe[B]);
		return Le(x, ee, F)
	}, W.createRef = function() {
		return {
			current: null
		}
	}, W.forwardRef = function(x) {
		return {
			$$typeof: A,
			render: x
		}
	}, W.isValidElement = vt, W.lazy = function(x) {
		return {
			$$typeof: C,
			_payload: {
				_status: -1,
				_result: x
			},
			_init: H
		}
	}, W.memo = function(x, _) {
		return {
			$$typeof: v,
			type: x,
			compare: _ === void 0 ? null : _
		}
	}, W.startTransition = function(x) {
		var _ = $.T,
			R = {};
		$.T = R;
		try {
			var B = x(),
				F = $.S;
			F !== null && F(R, B), typeof B == "object" && B !== null && typeof B.then == "function" && B.then(_e, Z)
		} catch (ee) {
			Z(ee)
		} finally {
			_ !== null && R.types !== null && (_.types = R.types), $.T = _
		}
	}, W.unstable_useCacheRefresh = function() {
		return $.H.useCacheRefresh()
	}, W.use = function(x) {
		return $.H.use(x)
	}, W.useActionState = function(x, _, R) {
		return $.H.useActionState(x, _, R)
	}, W.useCallback = function(x, _) {
		return $.H.useCallback(x, _)
	}, W.useContext = function(x) {
		return $.H.useContext(x)
	}, W.useDebugValue = function() {}, W.useDeferredValue = function(x, _) {
		return $.H.useDeferredValue(x, _)
	}, W.useEffect = function(x, _) {
		return $.H.useEffect(x, _)
	}, W.useEffectEvent = function(x) {
		return $.H.useEffectEvent(x)
	}, W.useId = function() {
		return $.H.useId()
	}, W.useImperativeHandle = function(x, _, R) {
		return $.H.useImperativeHandle(x, _, R)
	}, W.useInsertionEffect = function(x, _) {
		return $.H.useInsertionEffect(x, _)
	}, W.useLayoutEffect = function(x, _) {
		return $.H.useLayoutEffect(x, _)
	}, W.useMemo = function(x, _) {
		return $.H.useMemo(x, _)
	}, W.useOptimistic = function(x, _) {
		return $.H.useOptimistic(x, _)
	}, W.useReducer = function(x, _, R) {
		return $.H.useReducer(x, _, R)
	}, W.useRef = function(x) {
		return $.H.useRef(x)
	}, W.useState = function(x) {
		return $.H.useState(x)
	}, W.useSyncExternalStore = function(x, _, R) {
		return $.H.useSyncExternalStore(x, _, R)
	}, W.useTransition = function() {
		return $.H.useTransition()
	}, W.version = "19.2.4", W
}
var Jd;

function qc() {
	return Jd || (Jd = 1, Tc.exports = xx()), Tc.exports
}
var L = qc();
const Ml = f0(L);
var _c = {
		exports: {}
	},
	Cn = {},
	Mc = {
		exports: {}
	},
	wc = {};
var kd;

function yx() {
	return kd || (kd = 1, (function(f) {
		function c(j, D) {
			var H = j.length;
			j.push(D);
			e: for (; 0 < H;) {
				var Z = H - 1 >>> 1,
					k = j[Z];
				if (0 < h(k, D)) j[Z] = D, j[H] = k, H = Z;
				else break e
			}
		}

		function o(j) {
			return j.length === 0 ? null : j[0]
		}

		function d(j) {
			if (j.length === 0) return null;
			var D = j[0],
				H = j.pop();
			if (H !== D) {
				j[0] = H;
				e: for (var Z = 0, k = j.length, x = k >>> 1; Z < x;) {
					var _ = 2 * (Z + 1) - 1,
						R = j[_],
						B = _ + 1,
						F = j[B];
					if (0 > h(R, H)) B < k && 0 > h(F, R) ? (j[Z] = F, j[B] = H, Z = B) : (j[Z] = R, j[_] = H, Z = _);
					else if (B < k && 0 > h(F, H)) j[Z] = F, j[B] = H, Z = B;
					else break e
				}
			}
			return D
		}

		function h(j, D) {
			var H = j.sortIndex - D.sortIndex;
			return H !== 0 ? H : j.id - D.id
		}
		if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
			var S = performance;
			f.unstable_now = function() {
				return S.now()
			}
		} else {
			var M = Date,
				A = M.now();
			f.unstable_now = function() {
				return M.now() - A
			}
		}
		var E = [],
			v = [],
			C = 1,
			U = null,
			X = 3,
			J = !1,
			V = !1,
			K = !1,
			pe = !1,
			ge = typeof setTimeout == "function" ? setTimeout : null,
			me = typeof clearTimeout == "function" ? clearTimeout : null,
			ue = typeof setImmediate < "u" ? setImmediate : null;

		function Te(j) {
			for (var D = o(v); D !== null;) {
				if (D.callback === null) d(v);
				else if (D.startTime <= j) d(v), D.sortIndex = D.expirationTime, c(E, D);
				else break;
				D = o(v)
			}
		}

		function Ee(j) {
			if (K = !1, Te(j), !V)
				if (o(E) !== null) V = !0, _e || (_e = !0, qe());
				else {
					var D = o(v);
					D !== null && et(Ee, D.startTime - j)
				}
		}
		var _e = !1,
			$ = -1,
			Me = 5,
			Le = -1;

		function Qe() {
			return pe ? !0 : !(f.unstable_now() - Le < Me)
		}

		function vt() {
			if (pe = !1, _e) {
				var j = f.unstable_now();
				Le = j;
				var D = !0;
				try {
					e: {
						V = !1,
						K && (K = !1, me($), $ = -1),
						J = !0;
						var H = X;
						try {
							t: {
								for (Te(j), U = o(E); U !== null && !(U.expirationTime > j && Qe());) {
									var Z = U.callback;
									if (typeof Z == "function") {
										U.callback = null, X = U.priorityLevel;
										var k = Z(U.expirationTime <= j);
										if (j = f.unstable_now(), typeof k == "function") {
											U.callback = k, Te(j), D = !0;
											break t
										}
										U === o(E) && d(E), Te(j)
									} else d(E);
									U = o(E)
								}
								if (U !== null) D = !0;
								else {
									var x = o(v);
									x !== null && et(Ee, x.startTime - j), D = !1
								}
							}
							break e
						}
						finally {
							U = null, X = H, J = !1
						}
						D = void 0
					}
				}
				finally {
					D ? qe() : _e = !1
				}
			}
		}
		var qe;
		if (typeof ue == "function") qe = function() {
			ue(vt)
		};
		else if (typeof MessageChannel < "u") {
			var Yt = new MessageChannel,
				pt = Yt.port2;
			Yt.port1.onmessage = vt, qe = function() {
				pt.postMessage(null)
			}
		} else qe = function() {
			ge(vt, 0)
		};

		function et(j, D) {
			$ = ge(function() {
				j(f.unstable_now())
			}, D)
		}
		f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(j) {
			j.callback = null
		}, f.unstable_forceFrameRate = function(j) {
			0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Me = 0 < j ? Math.floor(1e3 / j) : 5
		}, f.unstable_getCurrentPriorityLevel = function() {
			return X
		}, f.unstable_next = function(j) {
			switch (X) {
				case 1:
				case 2:
				case 3:
					var D = 3;
					break;
				default:
					D = X
			}
			var H = X;
			X = D;
			try {
				return j()
			} finally {
				X = H
			}
		}, f.unstable_requestPaint = function() {
			pe = !0
		}, f.unstable_runWithPriority = function(j, D) {
			switch (j) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					j = 3
			}
			var H = X;
			X = j;
			try {
				return D()
			} finally {
				X = H
			}
		}, f.unstable_scheduleCallback = function(j, D, H) {
			var Z = f.unstable_now();
			switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? Z + H : Z) : H = Z, j) {
				case 1:
					var k = -1;
					break;
				case 2:
					k = 250;
					break;
				case 5:
					k = 1073741823;
					break;
				case 4:
					k = 1e4;
					break;
				default:
					k = 5e3
			}
			return k = H + k, j = {
				id: C++,
				callback: D,
				priorityLevel: j,
				startTime: H,
				expirationTime: k,
				sortIndex: -1
			}, H > Z ? (j.sortIndex = H, c(v, j), o(E) === null && j === o(v) && (K ? (me($), $ = -1) : K = !0, et(Ee, H - Z))) : (j.sortIndex = k, c(E, j), V || J || (V = !0, _e || (_e = !0, qe()))), j
		}, f.unstable_shouldYield = Qe, f.unstable_wrapCallback = function(j) {
			var D = X;
			return function() {
				var H = X;
				X = D;
				try {
					return j.apply(this, arguments)
				} finally {
					X = H
				}
			}
		}
	})(wc)), wc
}
var $d;

function gx() {
	return $d || ($d = 1, Mc.exports = yx()), Mc.exports
}
var Oc = {
		exports: {}
	},
	We = {};

var Wd;

function vx() {
	if (Wd) return We;
	Wd = 1;
	var f = qc();

	function c(E) {
		var v = "https://react.dev/errors/" + E;
		if (1 < arguments.length) {
			v += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var C = 2; C < arguments.length; C++) v += "&args[]=" + encodeURIComponent(arguments[C])
		}
		return "Minified React error #" + E + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	}

	function o() {}
	var d = {
			d: {
				f: o,
				r: function() {
					throw Error(c(522))
				},
				D: o,
				C: o,
				L: o,
				m: o,
				X: o,
				S: o,
				M: o
			},
			p: 0,
			findDOMNode: null
		},
		h = Symbol.for("react.portal");

	function S(E, v, C) {
		var U = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: h,
			key: U == null ? null : "" + U,
			children: E,
			containerInfo: v,
			implementation: C
		}
	}
	var M = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

	function A(E, v) {
		if (E === "font") return "";
		if (typeof v == "string") return v === "use-credentials" ? v : ""
	}
	return We.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d, We.createPortal = function(E, v) {
		var C = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11) throw Error(c(299));
		return S(E, v, null, C)
	}, We.flushSync = function(E) {
		var v = M.T,
			C = d.p;
		try {
			if (M.T = null, d.p = 2, E) return E()
		} finally {
			M.T = v, d.p = C, d.d.f()
		}
	}, We.preconnect = function(E, v) {
		typeof E == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, d.d.C(E, v))
	}, We.prefetchDNS = function(E) {
		typeof E == "string" && d.d.D(E)
	}, We.preinit = function(E, v) {
		if (typeof E == "string" && v && typeof v.as == "string") {
			var C = v.as,
				U = A(C, v.crossOrigin),
				X = typeof v.integrity == "string" ? v.integrity : void 0,
				J = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
			C === "style" ? d.d.S(E, typeof v.precedence == "string" ? v.precedence : void 0, {
				crossOrigin: U,
				integrity: X,
				fetchPriority: J
			}) : C === "script" && d.d.X(E, {
				crossOrigin: U,
				integrity: X,
				fetchPriority: J,
				nonce: typeof v.nonce == "string" ? v.nonce : void 0
			})
		}
	}, We.preinitModule = function(E, v) {
		if (typeof E == "string")
			if (typeof v == "object" && v !== null) {
				if (v.as == null || v.as === "script") {
					var C = A(v.as, v.crossOrigin);
					d.d.M(E, {
						crossOrigin: C,
						integrity: typeof v.integrity == "string" ? v.integrity : void 0,
						nonce: typeof v.nonce == "string" ? v.nonce : void 0
					})
				}
			} else v == null && d.d.M(E)
	}, We.preload = function(E, v) {
		if (typeof E == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
			var C = v.as,
				U = A(C, v.crossOrigin);
			d.d.L(E, C, {
				crossOrigin: U,
				integrity: typeof v.integrity == "string" ? v.integrity : void 0,
				nonce: typeof v.nonce == "string" ? v.nonce : void 0,
				type: typeof v.type == "string" ? v.type : void 0,
				fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
				referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
				imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
				imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
				media: typeof v.media == "string" ? v.media : void 0
			})
		}
	}, We.preloadModule = function(E, v) {
		if (typeof E == "string")
			if (v) {
				var C = A(v.as, v.crossOrigin);
				d.d.m(E, {
					as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
					crossOrigin: C,
					integrity: typeof v.integrity == "string" ? v.integrity : void 0
				})
			} else d.d.m(E)
	}, We.requestFormReset = function(E) {
		d.d.r(E)
	}, We.unstable_batchedUpdates = function(E, v) {
		return E(v)
	}, We.useFormState = function(E, v, C) {
		return M.H.useFormState(E, v, C)
	}, We.useFormStatus = function() {
		return M.H.useHostTransitionStatus()
	}, We.version = "19.2.4", We
}
var Fd;

function px() {
	if (Fd) return Oc.exports;
	Fd = 1;

	function f() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)
		} catch (c) {
			console.error(c)
		}
	}
	return f(), Oc.exports = vx(), Oc.exports
}

var Id;

function bx() {
	if (Id) return Cn;
	Id = 1;
	var f = gx(),
		c = qc(),
		o = px();

	function d(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var l = 2; l < arguments.length; l++) t += "&args[]=" + encodeURIComponent(arguments[l])
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	}

	function h(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
	}

	function S(e) {
		var t = e,
			l = e;
		if (e.alternate)
			for (; t.return;) t = t.return;
		else {
			e = t;
			do t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return; while (e)
		}
		return t.tag === 3 ? l : null
	}

	function M(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
		}
		return null
	}

	function A(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
		}
		return null
	}

	function E(e) {
		if (S(e) !== e) throw Error(d(188))
	}

	function v(e) {
		var t = e.alternate;
		if (!t) {
			if (t = S(e), t === null) throw Error(d(188));
			return t !== e ? null : e
		}
		for (var l = e, a = t;;) {
			var n = l.return;
			if (n === null) break;
			var i = n.alternate;
			if (i === null) {
				if (a = n.return, a !== null) {
					l = a;
					continue
				}
				break
			}
			if (n.child === i.child) {
				for (i = n.child; i;) {
					if (i === l) return E(n), e;
					if (i === a) return E(n), t;
					i = i.sibling
				}
				throw Error(d(188))
			}
			if (l.return !== a.return) l = n, a = i;
			else {
				for (var s = !1, r = n.child; r;) {
					if (r === l) {
						s = !0, l = n, a = i;
						break
					}
					if (r === a) {
						s = !0, a = n, l = i;
						break
					}
					r = r.sibling
				}
				if (!s) {
					for (r = i.child; r;) {
						if (r === l) {
							s = !0, l = i, a = n;
							break
						}
						if (r === a) {
							s = !0, a = i, l = n;
							break
						}
						r = r.sibling
					}
					if (!s) throw Error(d(189))
				}
			}
			if (l.alternate !== a) throw Error(d(190))
		}
		if (l.tag !== 3) throw Error(d(188));
		return l.stateNode.current === l ? e : t
	}

	function C(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = C(e), t !== null) return t;
			e = e.sibling
		}
		return null
	}
	var U = Object.assign,
		X = Symbol.for("react.element"),
		J = Symbol.for("react.transitional.element"),
		V = Symbol.for("react.portal"),
		K = Symbol.for("react.fragment"),
		pe = Symbol.for("react.strict_mode"),
		ge = Symbol.for("react.profiler"),
		me = Symbol.for("react.consumer"),
		ue = Symbol.for("react.context"),
		Te = Symbol.for("react.forward_ref"),
		Ee = Symbol.for("react.suspense"),
		_e = Symbol.for("react.suspense_list"),
		$ = Symbol.for("react.memo"),
		Me = Symbol.for("react.lazy"),
		Le = Symbol.for("react.activity"),
		Qe = Symbol.for("react.memo_cache_sentinel"),
		vt = Symbol.iterator;

	function qe(e) {
		return e === null || typeof e != "object" ? null : (e = vt && e[vt] || e["@@iterator"], typeof e == "function" ? e : null)
	}
	var Yt = Symbol.for("react.client.reference");

	function pt(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === Yt ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case K:
				return "Fragment";
			case ge:
				return "Profiler";
			case pe:
				return "StrictMode";
			case Ee:
				return "Suspense";
			case _e:
				return "SuspenseList";
			case Le:
				return "Activity"
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case V:
				return "Portal";
			case ue:
				return e.displayName || "Context";
			case me:
				return (e._context.displayName || "Context") + ".Consumer";
			case Te:
				var t = e.render;
				return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
			case $:
				return t = e.displayName || null, t !== null ? t : pt(e.type) || "Memo";
			case Me:
				t = e._payload, e = e._init;
				try {
					return pt(e(t))
				} catch {}
		}
		return null
	}
	var et = Array.isArray,
		j = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		D = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		H = {
			pending: !1,
			data: null,
			method: null,
			action: null
		},
		Z = [],
		k = -1;

	function x(e) {
		return {
			current: e
		}
	}

	function _(e) {
		0 > k || (e.current = Z[k], Z[k] = null, k--)
	}

	function R(e, t) {
		k++, Z[k] = e.current, e.current = t
	}
	var B = x(null),
		F = x(null),
		ee = x(null),
		fe = x(null);

	function Ie(e, t) {
		switch (R(ee, t), R(F, e), R(B, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? md(e) : 0;
				break;
			default:
				if (e = t.tagName, t = t.namespaceURI) t = md(t), e = hd(t, e);
				else switch (e) {
					case "svg":
						e = 1;
						break;
					case "math":
						e = 2;
						break;
					default:
						e = 0
				}
		}
		_(B), R(B, e)
	}

	function we() {
		_(B), _(F), _(ee)
	}

	function Xa(e) {
		e.memoizedState !== null && R(fe, e);
		var t = B.current,
			l = hd(t, e.type);
		t !== l && (R(F, e), R(B, l))
	}

	function qn(e) {
		F.current === e && (_(B), _(F)), fe.current === e && (_(fe), wn._currentValue = H)
	}
	var cu, Gc;

	function wl(e) {
		if (cu === void 0) try {
			throw Error()
		} catch (l) {
			var t = l.stack.trim().match(/\n( *(at )?)/);
			cu = t && t[1] || "", Gc = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
		}
		return `
` + cu + e + Gc
	}
	var ru = !1;

	function fu(e, t) {
		if (!e || ru) return "";
		ru = !0;
		var l = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var a = {
				DetermineComponentFrameRoot: function() {
					try {
						if (t) {
							var O = function() {
								throw Error()
							};
							if (Object.defineProperty(O.prototype, "props", {
									set: function() {
										throw Error()
									}
								}), typeof Reflect == "object" && Reflect.construct) {
								try {
									Reflect.construct(O, [])
								} catch (z) {
									var N = z
								}
								Reflect.construct(e, [], O)
							} else {
								try {
									O.call()
								} catch (z) {
									N = z
								}
								e.call(O.prototype)
							}
						} else {
							try {
								throw Error()
							} catch (z) {
								N = z
							}(O = e()) && typeof O.catch == "function" && O.catch(function() {})
						}
					} catch (z) {
						if (z && N && typeof z.stack == "string") return [z.stack, N.stack]
					}
					return [null, null]
				}
			};
			a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
			n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
				value: "DetermineComponentFrameRoot"
			});
			var i = a.DetermineComponentFrameRoot(),
				s = i[0],
				r = i[1];
			if (s && r) {
				var m = s.split(`
`),
					b = r.split(`
`);
				for (n = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot");) a++;
				for (; n < b.length && !b[n].includes("DetermineComponentFrameRoot");) n++;
				if (a === m.length || n === b.length)
					for (a = m.length - 1, n = b.length - 1; 1 <= a && 0 <= n && m[a] !== b[n];) n--;
				for (; 1 <= a && 0 <= n; a--, n--)
					if (m[a] !== b[n]) {
						if (a !== 1 || n !== 1)
							do
								if (a--, n--, 0 > n || m[a] !== b[n]) {
									var T = `
` + m[a].replace(" at new ", " at ");
									return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), T
								} while (1 <= a && 0 <= n);
						break
					}
			}
		} finally {
			ru = !1, Error.prepareStackTrace = l
		}
		return (l = e ? e.displayName || e.name : "") ? wl(l) : ""
	}

	function Z0(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5:
				return wl(e.type);
			case 16:
				return wl("Lazy");
			case 13:
				return e.child !== t && t !== null ? wl("Suspense Fallback") : wl("Suspense");
			case 19:
				return wl("SuspenseList");
			case 0:
			case 15:
				return fu(e.type, !1);
			case 11:
				return fu(e.type.render, !1);
			case 1:
				return fu(e.type, !0);
			case 31:
				return wl("Activity");
			default:
				return ""
		}
	}

	function Lc(e) {
		try {
			var t = "",
				l = null;
			do t += Z0(e, l), l = e, e = e.return; while (e);
			return t
		} catch (a) {
			return `
Error generating stack: ` + a.message + `
` + a.stack
		}
	}
	var ou = Object.prototype.hasOwnProperty,
		du = f.unstable_scheduleCallback,
		mu = f.unstable_cancelCallback,
		V0 = f.unstable_shouldYield,
		K0 = f.unstable_requestPaint,
		ct = f.unstable_now,
		J0 = f.unstable_getCurrentPriorityLevel,
		Qc = f.unstable_ImmediatePriority,
		Zc = f.unstable_UserBlockingPriority,
		Yn = f.unstable_NormalPriority,
		k0 = f.unstable_LowPriority,
		Vc = f.unstable_IdlePriority,
		$0 = f.log,
		W0 = f.unstable_setDisableYieldValue,
		Ga = null,
		rt = null;

	function nl(e) {
		if (typeof $0 == "function" && W0(e), rt && typeof rt.setStrictMode == "function") try {
			rt.setStrictMode(Ga, e)
		} catch {}
	}
	var ft = Math.clz32 ? Math.clz32 : P0,
		F0 = Math.log,
		I0 = Math.LN2;

	function P0(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (F0(e) / I0 | 0) | 0
	}
	var Xn = 256,
		Gn = 262144,
		Ln = 4194304;

	function Ol(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
				return 64;
			case 128:
				return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
				return e & 261888;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return e & 62914560;
			case 67108864:
				return 67108864;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 0;
			default:
				return e
		}
	}

	function Qn(e, t, l) {
		var a = e.pendingLanes;
		if (a === 0) return 0;
		var n = 0,
			i = e.suspendedLanes,
			s = e.pingedLanes;
		e = e.warmLanes;
		var r = a & 134217727;
		return r !== 0 ? (a = r & ~i, a !== 0 ? n = Ol(a) : (s &= r, s !== 0 ? n = Ol(s) : l || (l = r & ~e, l !== 0 && (n = Ol(l))))) : (r = a & ~i, r !== 0 ? n = Ol(r) : s !== 0 ? n = Ol(s) : l || (l = a & ~e, l !== 0 && (n = Ol(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & i) === 0 && (i = n & -n, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : n
	}

	function La(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
	}

	function em(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64:
				return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1
		}
	}

	function Kc() {
		var e = Ln;
		return Ln <<= 1, (Ln & 62914560) === 0 && (Ln = 4194304), e
	}

	function hu(e) {
		for (var t = [], l = 0; 31 > l; l++) t.push(e);
		return t
	}

	function Qa(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
	}

	function tm(e, t, l, a, n, i) {
		var s = e.pendingLanes;
		e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
		var r = e.entanglements,
			m = e.expirationTimes,
			b = e.hiddenUpdates;
		for (l = s & ~l; 0 < l;) {
			var T = 31 - ft(l),
				O = 1 << T;
			r[T] = 0, m[T] = -1;
			var N = b[T];
			if (N !== null)
				for (b[T] = null, T = 0; T < N.length; T++) {
					var z = N[T];
					z !== null && (z.lane &= -536870913)
				}
			l &= ~O
		}
		a !== 0 && Jc(e, a, 0), i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(s & ~t))
	}

	function Jc(e, t, l) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var a = 31 - ft(t);
		e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930
	}

	function kc(e, t) {
		var l = e.entangledLanes |= t;
		for (e = e.entanglements; l;) {
			var a = 31 - ft(l),
				n = 1 << a;
			n & t | e[a] & t && (e[a] |= t), l &= ~n
		}
	}

	function $c(e, t) {
		var l = t & -t;
		return l = (l & 42) !== 0 ? 1 : xu(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
	}

	function xu(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default:
				e = 0
		}
		return e
	}

	function yu(e) {
		return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
	}

	function Wc() {
		var e = D.p;
		return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Bd(e.type))
	}

	function Fc(e, t) {
		var l = D.p;
		try {
			return D.p = e, t()
		} finally {
			D.p = l
		}
	}
	var il = Math.random().toString(36).slice(2),
		Ze = "__reactFiber$" + il,
		tt = "__reactProps$" + il,
		Fl = "__reactContainer$" + il,
		gu = "__reactEvents$" + il,
		lm = "__reactListeners$" + il,
		am = "__reactHandles$" + il,
		Ic = "__reactResources$" + il,
		Za = "__reactMarker$" + il;

	function vu(e) {
		delete e[Ze], delete e[tt], delete e[gu], delete e[lm], delete e[am]
	}

	function Il(e) {
		var t = e[Ze];
		if (t) return t;
		for (var l = e.parentNode; l;) {
			if (t = l[Fl] || l[Ze]) {
				if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
					for (e = Sd(e); e !== null;) {
						if (l = e[Ze]) return l;
						e = Sd(e)
					}
				return t
			}
			e = l, l = e.parentNode
		}
		return null
	}

	function Pl(e) {
		if (e = e[Ze] || e[Fl]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e
		}
		return null
	}

	function Va(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(d(33))
	}

	function ea(e) {
		var t = e[Ic];
		return t || (t = e[Ic] = {
			hoistableStyles: new Map,
			hoistableScripts: new Map
		}), t
	}

	function Ye(e) {
		e[Za] = !0
	}
	var Pc = new Set,
		er = {};

	function Dl(e, t) {
		ta(e, t), ta(e + "Capture", t)
	}

	function ta(e, t) {
		for (er[e] = t, e = 0; e < t.length; e++) Pc.add(t[e])
	}
	var nm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
		tr = {},
		lr = {};

	function im(e) {
		return ou.call(lr, e) ? !0 : ou.call(tr, e) ? !1 : nm.test(e) ? lr[e] = !0 : (tr[e] = !0, !1)
	}

	function Zn(e, t, l) {
		if (im(t))
			if (l === null) e.removeAttribute(t);
			else {
				switch (typeof l) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var a = t.toLowerCase().slice(0, 5);
						if (a !== "data-" && a !== "aria-") {
							e.removeAttribute(t);
							return
						}
				}
				e.setAttribute(t, "" + l)
			}
	}

	function Vn(e, t, l) {
		if (l === null) e.removeAttribute(t);
		else {
			switch (typeof l) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return
			}
			e.setAttribute(t, "" + l)
		}
	}

	function Xt(e, t, l, a) {
		if (a === null) e.removeAttribute(l);
		else {
			switch (typeof a) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(l);
					return
			}
			e.setAttributeNS(t, l, "" + a)
		}
	}

	function bt(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined":
				return e;
			case "object":
				return e;
			default:
				return ""
		}
	}

	function ar(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
	}

	function um(e, t, l) {
		var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
			var n = a.get,
				i = a.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return n.call(this)
				},
				set: function(s) {
					l = "" + s, i.call(this, s)
				}
			}), Object.defineProperty(e, t, {
				enumerable: a.enumerable
			}), {
				getValue: function() {
					return l
				},
				setValue: function(s) {
					l = "" + s
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t]
				}
			}
		}
	}

	function pu(e) {
		if (!e._valueTracker) {
			var t = ar(e) ? "checked" : "value";
			e._valueTracker = um(e, t, "" + e[t])
		}
	}

	function nr(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var l = t.getValue(),
			a = "";
		return e && (a = ar(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1
	}

	function Kn(e) {
		if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
		try {
			return e.activeElement || e.body
		} catch {
			return e.body
		}
	}
	var sm = /[\n"\\]/g;

	function St(e) {
		return e.replace(sm, function(t) {
			return "\\" + t.charCodeAt(0).toString(16) + " "
		})
	}

	function bu(e, t, l, a, n, i, s, r) {
		e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + bt(t)) : e.value !== "" + bt(t) && (e.value = "" + bt(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? Su(e, s, bt(t)) : l != null ? Su(e, s, bt(l)) : a != null && e.removeAttribute("value"), n == null && i != null && (e.defaultChecked = !!i), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? e.name = "" + bt(r) : e.removeAttribute("name")
	}

	function ir(e, t, l, a, n, i, s, r) {
		if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
			if (!(i !== "submit" && i !== "reset" || t != null)) {
				pu(e);
				return
			}
			l = l != null ? "" + bt(l) : "", t = t != null ? "" + bt(t) : l, r || t === e.value || (e.value = t), e.defaultValue = t
		}
		a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = r ? e.checked : !!a, e.defaultChecked = !!a, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), pu(e)
	}

	function Su(e, t, l) {
		t === "number" && Kn(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l)
	}

	function la(e, t, l, a) {
		if (e = e.options, t) {
			t = {};
			for (var n = 0; n < l.length; n++) t["$" + l[n]] = !0;
			for (l = 0; l < e.length; l++) n = t.hasOwnProperty("$" + e[l].value), e[l].selected !== n && (e[l].selected = n), n && a && (e[l].defaultSelected = !0)
		} else {
			for (l = "" + bt(l), t = null, n = 0; n < e.length; n++) {
				if (e[n].value === l) {
					e[n].selected = !0, a && (e[n].defaultSelected = !0);
					return
				}
				t !== null || e[n].disabled || (t = e[n])
			}
			t !== null && (t.selected = !0)
		}
	}

	function ur(e, t, l) {
		if (t != null && (t = "" + bt(t), t !== e.value && (e.value = t), l == null)) {
			e.defaultValue !== t && (e.defaultValue = t);
			return
		}
		e.defaultValue = l != null ? "" + bt(l) : ""
	}

	function sr(e, t, l, a) {
		if (t == null) {
			if (a != null) {
				if (l != null) throw Error(d(92));
				if (et(a)) {
					if (1 < a.length) throw Error(d(93));
					a = a[0]
				}
				l = a
			}
			l == null && (l = ""), t = l
		}
		l = bt(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), pu(e)
	}

	function aa(e, t) {
		if (t) {
			var l = e.firstChild;
			if (l && l === e.lastChild && l.nodeType === 3) {
				l.nodeValue = t;
				return
			}
		}
		e.textContent = t
	}
	var cm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

	function cr(e, t, l) {
		var a = t.indexOf("--") === 0;
		l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || cm.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px"
	}

	function rr(e, t, l) {
		if (t != null && typeof t != "object") throw Error(d(62));
		if (e = e.style, l != null) {
			for (var a in l) !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
			for (var n in t) a = t[n], t.hasOwnProperty(n) && l[n] !== a && cr(e, n, a)
		} else
			for (var i in t) t.hasOwnProperty(i) && cr(e, i, t[i])
	}

	function ju(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph":
				return !1;
			default:
				return !0
		}
	}
	var rm = new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"]
		]),
		fm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

	function Jn(e) {
		return fm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
	}

	function Gt() {}
	var Nu = null;

	function Eu(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
	}
	var na = null,
		ia = null;

	function fr(e) {
		var t = Pl(e);
		if (t && (e = t.stateNode)) {
			var l = e[tt] || null;
			e: switch (e = t.stateNode, t.type) {
				case "input":
					if (bu(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
						for (l = e; l.parentNode;) l = l.parentNode;
						for (l = l.querySelectorAll('input[name="' + St("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++) {
							var a = l[t];
							if (a !== e && a.form === e.form) {
								var n = a[tt] || null;
								if (!n) throw Error(d(90));
								bu(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
							}
						}
						for (t = 0; t < l.length; t++) a = l[t], a.form === e.form && nr(a)
					}
					break e;
				case "textarea":
					ur(e, l.value, l.defaultValue);
					break e;
				case "select":
					t = l.value, t != null && la(e, !!l.multiple, t, !1)
			}
		}
	}
	var zu = !1;

	function or(e, t, l) {
		if (zu) return e(t, l);
		zu = !0;
		try {
			var a = e(t);
			return a
		} finally {
			if (zu = !1, (na !== null || ia !== null) && (Ui(), na && (t = na, e = ia, ia = na = null, fr(t), e)))
				for (t = 0; t < e.length; t++) fr(e[t])
		}
	}

	function Ka(e, t) {
		var l = e.stateNode;
		if (l === null) return null;
		var a = l[tt] || null;
		if (a === null) return null;
		l = a[t];
		e: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
				break e;
			default:
				e = !1
		}
		if (e) return null;
		if (l && typeof l != "function") throw Error(d(231, t, typeof l));
		return l
	}
	var Lt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
		Au = !1;
	if (Lt) try {
		var Ja = {};
		Object.defineProperty(Ja, "passive", {
			get: function() {
				Au = !0
			}
		}), window.addEventListener("test", Ja, Ja), window.removeEventListener("test", Ja, Ja)
	} catch {
		Au = !1
	}
	var ul = null,
		Tu = null,
		kn = null;

	function dr() {
		if (kn) return kn;
		var e, t = Tu,
			l = t.length,
			a, n = "value" in ul ? ul.value : ul.textContent,
			i = n.length;
		for (e = 0; e < l && t[e] === n[e]; e++);
		var s = l - e;
		for (a = 1; a <= s && t[l - a] === n[i - a]; a++);
		return kn = n.slice(e, 1 < a ? 1 - a : void 0)
	}

	function $n(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
	}

	function Wn() {
		return !0
	}

	function mr() {
		return !1
	}

	function lt(e) {
		function t(l, a, n, i, s) {
			this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = i, this.target = s, this.currentTarget = null;
			for (var r in e) e.hasOwnProperty(r) && (l = e[r], this[r] = l ? l(i) : i[r]);
			return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Wn : mr, this.isPropagationStopped = mr, this
		}
		return U(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var l = this.nativeEvent;
				l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Wn)
			},
			stopPropagation: function() {
				var l = this.nativeEvent;
				l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Wn)
			},
			persist: function() {},
			isPersistent: Wn
		}), t
	}
	var Rl = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function(e) {
				return e.timeStamp || Date.now()
			},
			defaultPrevented: 0,
			isTrusted: 0
		},
		Fn = lt(Rl),
		ka = U({}, Rl, {
			view: 0,
			detail: 0
		}),
		om = lt(ka),
		_u, Mu, $a, In = U({}, ka, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: Ou,
			button: 0,
			buttons: 0,
			relatedTarget: function(e) {
				return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
			},
			movementX: function(e) {
				return "movementX" in e ? e.movementX : (e !== $a && ($a && e.type === "mousemove" ? (_u = e.screenX - $a.screenX, Mu = e.screenY - $a.screenY) : Mu = _u = 0, $a = e), _u)
			},
			movementY: function(e) {
				return "movementY" in e ? e.movementY : Mu
			}
		}),
		hr = lt(In),
		dm = U({}, In, {
			dataTransfer: 0
		}),
		mm = lt(dm),
		hm = U({}, ka, {
			relatedTarget: 0
		}),
		wu = lt(hm),
		xm = U({}, Rl, {
			animationName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		}),
		ym = lt(xm),
		gm = U({}, Rl, {
			clipboardData: function(e) {
				return "clipboardData" in e ? e.clipboardData : window.clipboardData
			}
		}),
		vm = lt(gm),
		pm = U({}, Rl, {
			data: 0
		}),
		xr = lt(pm),
		bm = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified"
		},
		Sm = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta"
		},
		jm = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey"
		};

	function Nm(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = jm[e]) ? !!t[e] : !1
	}

	function Ou() {
		return Nm
	}
	var Em = U({}, ka, {
			key: function(e) {
				if (e.key) {
					var t = bm[e.key] || e.key;
					if (t !== "Unidentified") return t
				}
				return e.type === "keypress" ? (e = $n(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Sm[e.keyCode] || "Unidentified" : ""
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: Ou,
			charCode: function(e) {
				return e.type === "keypress" ? $n(e) : 0
			},
			keyCode: function(e) {
				return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
			},
			which: function(e) {
				return e.type === "keypress" ? $n(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
			}
		}),
		zm = lt(Em),
		Am = U({}, In, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0
		}),
		yr = lt(Am),
		Tm = U({}, ka, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: Ou
		}),
		_m = lt(Tm),
		Mm = U({}, Rl, {
			propertyName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		}),
		wm = lt(Mm),
		Om = U({}, In, {
			deltaX: function(e) {
				return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
			},
			deltaY: function(e) {
				return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
			},
			deltaZ: 0,
			deltaMode: 0
		}),
		Dm = lt(Om),
		Rm = U({}, Rl, {
			newState: 0,
			oldState: 0
		}),
		Um = lt(Rm),
		Cm = [9, 13, 27, 32],
		Du = Lt && "CompositionEvent" in window,
		Wa = null;
	Lt && "documentMode" in document && (Wa = document.documentMode);
	var Hm = Lt && "TextEvent" in window && !Wa,
		gr = Lt && (!Du || Wa && 8 < Wa && 11 >= Wa),
		vr = " ",
		pr = !1;

	function br(e, t) {
		switch (e) {
			case "keyup":
				return Cm.indexOf(t.keyCode) !== -1;
			case "keydown":
				return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout":
				return !0;
			default:
				return !1
		}
	}

	function Sr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
	}
	var ua = !1;

	function Bm(e, t) {
		switch (e) {
			case "compositionend":
				return Sr(t);
			case "keypress":
				return t.which !== 32 ? null : (pr = !0, vr);
			case "textInput":
				return e = t.data, e === vr && pr ? null : e;
			default:
				return null
		}
	}

	function qm(e, t) {
		if (ua) return e === "compositionend" || !Du && br(e, t) ? (e = dr(), kn = Tu = ul = null, ua = !1, e) : null;
		switch (e) {
			case "paste":
				return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which)
				}
				return null;
			case "compositionend":
				return gr && t.locale !== "ko" ? null : t.data;
			default:
				return null
		}
	}
	var Ym = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};

	function jr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!Ym[e.type] : t === "textarea"
	}

	function Nr(e, t, l, a) {
		na ? ia ? ia.push(a) : ia = [a] : na = a, t = Gi(t, "onChange"), 0 < t.length && (l = new Fn("onChange", "change", null, l, a), e.push({
			event: l,
			listeners: t
		}))
	}
	var Fa = null,
		Ia = null;

	function Xm(e) {
		sd(e, 0)
	}

	function Pn(e) {
		var t = Va(e);
		if (nr(t)) return e
	}

	function Er(e, t) {
		if (e === "change") return t
	}
	var zr = !1;
	if (Lt) {
		var Ru;
		if (Lt) {
			var Uu = "oninput" in document;
			if (!Uu) {
				var Ar = document.createElement("div");
				Ar.setAttribute("oninput", "return;"), Uu = typeof Ar.oninput == "function"
			}
			Ru = Uu
		} else Ru = !1;
		zr = Ru && (!document.documentMode || 9 < document.documentMode)
	}

	function Tr() {
		Fa && (Fa.detachEvent("onpropertychange", _r), Ia = Fa = null)
	}

	function _r(e) {
		if (e.propertyName === "value" && Pn(Ia)) {
			var t = [];
			Nr(t, Ia, e, Eu(e)), or(Xm, t)
		}
	}

	function Gm(e, t, l) {
		e === "focusin" ? (Tr(), Fa = t, Ia = l, Fa.attachEvent("onpropertychange", _r)) : e === "focusout" && Tr()
	}

	function Lm(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return Pn(Ia)
	}

	function Qm(e, t) {
		if (e === "click") return Pn(t)
	}

	function Zm(e, t) {
		if (e === "input" || e === "change") return Pn(t)
	}

	function Vm(e, t) {
		return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
	}
	var ot = typeof Object.is == "function" ? Object.is : Vm;

	function Pa(e, t) {
		if (ot(e, t)) return !0;
		if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
		var l = Object.keys(e),
			a = Object.keys(t);
		if (l.length !== a.length) return !1;
		for (a = 0; a < l.length; a++) {
			var n = l[a];
			if (!ou.call(t, n) || !ot(e[n], t[n])) return !1
		}
		return !0
	}

	function Mr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e
	}

	function wr(e, t) {
		var l = Mr(e);
		e = 0;
		for (var a; l;) {
			if (l.nodeType === 3) {
				if (a = e + l.textContent.length, e <= t && a >= t) return {
					node: l,
					offset: t - e
				};
				e = a
			}
			e: {
				for (; l;) {
					if (l.nextSibling) {
						l = l.nextSibling;
						break e
					}
					l = l.parentNode
				}
				l = void 0
			}
			l = Mr(l)
		}
	}

	function Or(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Or(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
	}

	function Dr(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Kn(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var l = typeof t.contentWindow.location.href == "string"
			} catch {
				l = !1
			}
			if (l) e = t.contentWindow;
			else break;
			t = Kn(e.document)
		}
		return t
	}

	function Cu(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
	}
	var Km = Lt && "documentMode" in document && 11 >= document.documentMode,
		sa = null,
		Hu = null,
		en = null,
		Bu = !1;

	function Rr(e, t, l) {
		var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
		Bu || sa == null || sa !== Kn(a) || (a = sa, "selectionStart" in a && Cu(a) ? a = {
			start: a.selectionStart,
			end: a.selectionEnd
		} : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
			anchorNode: a.anchorNode,
			anchorOffset: a.anchorOffset,
			focusNode: a.focusNode,
			focusOffset: a.focusOffset
		}), en && Pa(en, a) || (en = a, a = Gi(Hu, "onSelect"), 0 < a.length && (t = new Fn("onSelect", "select", null, t, l), e.push({
			event: t,
			listeners: a
		}), t.target = sa)))
	}

	function Ul(e, t) {
		var l = {};
		return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l
	}
	var ca = {
			animationend: Ul("Animation", "AnimationEnd"),
			animationiteration: Ul("Animation", "AnimationIteration"),
			animationstart: Ul("Animation", "AnimationStart"),
			transitionrun: Ul("Transition", "TransitionRun"),
			transitionstart: Ul("Transition", "TransitionStart"),
			transitioncancel: Ul("Transition", "TransitionCancel"),
			transitionend: Ul("Transition", "TransitionEnd")
		},
		qu = {},
		Ur = {};
	Lt && (Ur = document.createElement("div").style, "AnimationEvent" in window || (delete ca.animationend.animation, delete ca.animationiteration.animation, delete ca.animationstart.animation), "TransitionEvent" in window || delete ca.transitionend.transition);

	function Cl(e) {
		if (qu[e]) return qu[e];
		if (!ca[e]) return e;
		var t = ca[e],
			l;
		for (l in t)
			if (t.hasOwnProperty(l) && l in Ur) return qu[e] = t[l];
		return e
	}
	var Cr = Cl("animationend"),
		Hr = Cl("animationiteration"),
		Br = Cl("animationstart"),
		Jm = Cl("transitionrun"),
		km = Cl("transitionstart"),
		$m = Cl("transitioncancel"),
		qr = Cl("transitionend"),
		Yr = new Map,
		Yu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	Yu.push("scrollEnd");

	function wt(e, t) {
		Yr.set(e, t), Dl(t, [e])
	}
	var ei = typeof reportError == "function" ? reportError : function(e) {
			if (typeof window == "object" && typeof window.ErrorEvent == "function") {
				var t = new window.ErrorEvent("error", {
					bubbles: !0,
					cancelable: !0,
					message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
					error: e
				});
				if (!window.dispatchEvent(t)) return
			} else if (typeof process == "object" && typeof process.emit == "function") {
				process.emit("uncaughtException", e);
				return
			}
			console.error(e)
		},
		jt = [],
		ra = 0,
		Xu = 0;

	function ti() {
		for (var e = ra, t = Xu = ra = 0; t < e;) {
			var l = jt[t];
			jt[t++] = null;
			var a = jt[t];
			jt[t++] = null;
			var n = jt[t];
			jt[t++] = null;
			var i = jt[t];
			if (jt[t++] = null, a !== null && n !== null) {
				var s = a.pending;
				s === null ? n.next = n : (n.next = s.next, s.next = n), a.pending = n
			}
			i !== 0 && Xr(l, n, i)
		}
	}

	function li(e, t, l, a) {
		jt[ra++] = e, jt[ra++] = t, jt[ra++] = l, jt[ra++] = a, Xu |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a)
	}

	function Gu(e, t, l, a) {
		return li(e, t, l, a), ai(e)
	}

	function Hl(e, t) {
		return li(e, null, null, t), ai(e)
	}

	function Xr(e, t, l) {
		e.lanes |= l;
		var a = e.alternate;
		a !== null && (a.lanes |= l);
		for (var n = !1, i = e.return; i !== null;) i.childLanes |= l, a = i.alternate, a !== null && (a.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (n = !0)), e = i, i = i.return;
		return e.tag === 3 ? (i = e.stateNode, n && t !== null && (n = 31 - ft(l), e = i.hiddenUpdates, a = e[n], a === null ? e[n] = [t] : a.push(t), t.lane = l | 536870912), i) : null
	}

	function ai(e) {
		if (50 < Nn) throw Nn = 0, Ws = null, Error(d(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null
	}
	var fa = {};

	function Wm(e, t, l, a) {
		this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
	}

	function dt(e, t, l, a) {
		return new Wm(e, t, l, a)
	}

	function Lu(e) {
		return e = e.prototype, !(!e || !e.isReactComponent)
	}

	function Qt(e, t) {
		var l = e.alternate;
		return l === null ? (l = dt(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l
	}

	function Gr(e, t) {
		e.flags &= 65011714;
		var l = e.alternate;
		return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e
	}

	function ni(e, t, l, a, n, i) {
		var s = 0;
		if (a = e, typeof e == "function") Lu(e) && (s = 1);
		else if (typeof e == "string") s = tx(e, l, B.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else e: switch (e) {
			case Le:
				return e = dt(31, l, t, n), e.elementType = Le, e.lanes = i, e;
			case K:
				return Bl(l.children, n, i, t);
			case pe:
				s = 8, n |= 24;
				break;
			case ge:
				return e = dt(12, l, t, n | 2), e.elementType = ge, e.lanes = i, e;
			case Ee:
				return e = dt(13, l, t, n), e.elementType = Ee, e.lanes = i, e;
			case _e:
				return e = dt(19, l, t, n), e.elementType = _e, e.lanes = i, e;
			default:
				if (typeof e == "object" && e !== null) switch (e.$$typeof) {
					case ue:
						s = 10;
						break e;
					case me:
						s = 9;
						break e;
					case Te:
						s = 11;
						break e;
					case $:
						s = 14;
						break e;
					case Me:
						s = 16, a = null;
						break e
				}
				s = 29, l = Error(d(130, e === null ? "null" : typeof e, "")), a = null
		}
		return t = dt(s, l, t, n), t.elementType = e, t.type = a, t.lanes = i, t
	}

	function Bl(e, t, l, a) {
		return e = dt(7, e, a, t), e.lanes = l, e
	}

	function Qu(e, t, l) {
		return e = dt(6, e, null, t), e.lanes = l, e
	}

	function Lr(e) {
		var t = dt(18, null, null, 0);
		return t.stateNode = e, t
	}

	function Zu(e, t, l) {
		return t = dt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t
	}
	var Qr = new WeakMap;

	function Nt(e, t) {
		if (typeof e == "object" && e !== null) {
			var l = Qr.get(e);
			return l !== void 0 ? l : (t = {
				value: e,
				source: t,
				stack: Lc(t)
			}, Qr.set(e, t), t)
		}
		return {
			value: e,
			source: t,
			stack: Lc(t)
		}
	}
	var oa = [],
		da = 0,
		ii = null,
		tn = 0,
		Et = [],
		zt = 0,
		sl = null,
		Ct = 1,
		Ht = "";

	function Zt(e, t) {
		oa[da++] = tn, oa[da++] = ii, ii = e, tn = t
	}

	function Zr(e, t, l) {
		Et[zt++] = Ct, Et[zt++] = Ht, Et[zt++] = sl, sl = e;
		var a = Ct;
		e = Ht;
		var n = 32 - ft(a) - 1;
		a &= ~(1 << n), l += 1;
		var i = 32 - ft(t) + n;
		if (30 < i) {
			var s = n - n % 5;
			i = (a & (1 << s) - 1).toString(32), a >>= s, n -= s, Ct = 1 << 32 - ft(t) + n | l << n | a, Ht = i + e
		} else Ct = 1 << i | l << n | a, Ht = e
	}

	function Vu(e) {
		e.return !== null && (Zt(e, 1), Zr(e, 1, 0))
	}

	function Ku(e) {
		for (; e === ii;) ii = oa[--da], oa[da] = null, tn = oa[--da], oa[da] = null;
		for (; e === sl;) sl = Et[--zt], Et[zt] = null, Ht = Et[--zt], Et[zt] = null, Ct = Et[--zt], Et[zt] = null
	}

	function Vr(e, t) {
		Et[zt++] = Ct, Et[zt++] = Ht, Et[zt++] = sl, Ct = t.id, Ht = t.overflow, sl = e
	}
	var Ve = null,
		Se = null,
		ie = !1,
		cl = null,
		At = !1,
		Ju = Error(d(519));

	function rl(e) {
		var t = Error(d(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
		throw ln(Nt(t, e)), Ju
	}

	function Kr(e) {
		var t = e.stateNode,
			l = e.type,
			a = e.memoizedProps;
		switch (t[Ze] = e, t[tt] = a, l) {
			case "dialog":
				le("cancel", t), le("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				le("load", t);
				break;
			case "video":
			case "audio":
				for (l = 0; l < zn.length; l++) le(zn[l], t);
				break;
			case "source":
				le("error", t);
				break;
			case "img":
			case "image":
			case "link":
				le("error", t), le("load", t);
				break;
			case "details":
				le("toggle", t);
				break;
			case "input":
				le("invalid", t), ir(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
				break;
			case "select":
				le("invalid", t);
				break;
			case "textarea":
				le("invalid", t), sr(t, a.value, a.defaultValue, a.children)
		}
		l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || od(t.textContent, l) ? (a.popover != null && (le("beforetoggle", t), le("toggle", t)), a.onScroll != null && le("scroll", t), a.onScrollEnd != null && le("scrollend", t), a.onClick != null && (t.onclick = Gt), t = !0) : t = !1, t || rl(e, !0)
	}

	function Jr(e) {
		for (Ve = e.return; Ve;) switch (Ve.tag) {
			case 5:
			case 31:
			case 13:
				At = !1;
				return;
			case 27:
			case 3:
				At = !0;
				return;
			default:
				Ve = Ve.return
		}
	}

	function ma(e) {
		if (e !== Ve) return !1;
		if (!ie) return Jr(e), ie = !0, !1;
		var t = e.tag,
			l;
		if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || oc(e.type, e.memoizedProps)), l = !l), l && Se && rl(e), Jr(e), t === 13) {
			if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(317));
			Se = bd(e)
		} else if (t === 31) {
			if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(317));
			Se = bd(e)
		} else t === 27 ? (t = Se, Nl(e.type) ? (e = yc, yc = null, Se = e) : Se = t) : Se = Ve ? _t(e.stateNode.nextSibling) : null;
		return !0
	}

	function ql() {
		Se = Ve = null, ie = !1
	}

	function ku() {
		var e = cl;
		return e !== null && (ut === null ? ut = e : ut.push.apply(ut, e), cl = null), e
	}

	function ln(e) {
		cl === null ? cl = [e] : cl.push(e)
	}
	var $u = x(null),
		Yl = null,
		Vt = null;

	function fl(e, t, l) {
		R($u, t._currentValue), t._currentValue = l
	}

	function Kt(e) {
		e._currentValue = $u.current, _($u)
	}

	function Wu(e, t, l) {
		for (; e !== null;) {
			var a = e.alternate;
			if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
			e = e.return
		}
	}

	function Fu(e, t, l, a) {
		var n = e.child;
		for (n !== null && (n.return = e); n !== null;) {
			var i = n.dependencies;
			if (i !== null) {
				var s = n.child;
				i = i.firstContext;
				e: for (; i !== null;) {
					var r = i;
					i = n;
					for (var m = 0; m < t.length; m++)
						if (r.context === t[m]) {
							i.lanes |= l, r = i.alternate, r !== null && (r.lanes |= l), Wu(i.return, l, e), a || (s = null);
							break e
						} i = r.next
				}
			} else if (n.tag === 18) {
				if (s = n.return, s === null) throw Error(d(341));
				s.lanes |= l, i = s.alternate, i !== null && (i.lanes |= l), Wu(s, l, e), s = null
			} else s = n.child;
			if (s !== null) s.return = n;
			else
				for (s = n; s !== null;) {
					if (s === e) {
						s = null;
						break
					}
					if (n = s.sibling, n !== null) {
						n.return = s.return, s = n;
						break
					}
					s = s.return
				}
			n = s
		}
	}

	function ha(e, t, l, a) {
		e = null;
		for (var n = t, i = !1; n !== null;) {
			if (!i) {
				if ((n.flags & 524288) !== 0) i = !0;
				else if ((n.flags & 262144) !== 0) break
			}
			if (n.tag === 10) {
				var s = n.alternate;
				if (s === null) throw Error(d(387));
				if (s = s.memoizedProps, s !== null) {
					var r = n.type;
					ot(n.pendingProps.value, s.value) || (e !== null ? e.push(r) : e = [r])
				}
			} else if (n === fe.current) {
				if (s = n.alternate, s === null) throw Error(d(387));
				s.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(wn) : e = [wn])
			}
			n = n.return
		}
		e !== null && Fu(t, e, l, a), t.flags |= 262144
	}

	function ui(e) {
		for (e = e.firstContext; e !== null;) {
			if (!ot(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next
		}
		return !1
	}

	function Xl(e) {
		Yl = e, Vt = null, e = e.dependencies, e !== null && (e.firstContext = null)
	}

	function Ke(e) {
		return kr(Yl, e)
	}

	function si(e, t) {
		return Yl === null && Xl(e), kr(e, t)
	}

	function kr(e, t) {
		var l = t._currentValue;
		if (t = {
				context: t,
				memoizedValue: l,
				next: null
			}, Vt === null) {
			if (e === null) throw Error(d(308));
			Vt = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288
		} else Vt = Vt.next = t;
		return l
	}
	var Fm = typeof AbortController < "u" ? AbortController : function() {
			var e = [],
				t = this.signal = {
					aborted: !1,
					addEventListener: function(l, a) {
						e.push(a)
					}
				};
			this.abort = function() {
				t.aborted = !0, e.forEach(function(l) {
					return l()
				})
			}
		},
		Im = f.unstable_scheduleCallback,
		Pm = f.unstable_NormalPriority,
		Re = {
			$$typeof: ue,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0
		};

	function Iu() {
		return {
			controller: new Fm,
			data: new Map,
			refCount: 0
		}
	}

	function an(e) {
		e.refCount--, e.refCount === 0 && Im(Pm, function() {
			e.controller.abort()
		})
	}
	var nn = null,
		Pu = 0,
		xa = 0,
		ya = null;

	function eh(e, t) {
		if (nn === null) {
			var l = nn = [];
			Pu = 0, xa = lc(), ya = {
				status: "pending",
				value: void 0,
				then: function(a) {
					l.push(a)
				}
			}
		}
		return Pu++, t.then($r, $r), t
	}

	function $r() {
		if (--Pu === 0 && nn !== null) {
			ya !== null && (ya.status = "fulfilled");
			var e = nn;
			nn = null, xa = 0, ya = null;
			for (var t = 0; t < e.length; t++)(0, e[t])()
		}
	}

	function th(e, t) {
		var l = [],
			a = {
				status: "pending",
				value: null,
				reason: null,
				then: function(n) {
					l.push(n)
				}
			};
		return e.then(function() {
			a.status = "fulfilled", a.value = t;
			for (var n = 0; n < l.length; n++)(0, l[n])(t)
		}, function(n) {
			for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)(0, l[n])(void 0)
		}), a
	}
	var Wr = j.S;
	j.S = function(e, t) {
		Co = ct(), typeof t == "object" && t !== null && typeof t.then == "function" && eh(e, t), Wr !== null && Wr(e, t)
	};
	var Gl = x(null);

	function es() {
		var e = Gl.current;
		return e !== null ? e : ve.pooledCache
	}

	function ci(e, t) {
		t === null ? R(Gl, Gl.current) : R(Gl, t.pool)
	}

	function Fr() {
		var e = es();
		return e === null ? null : {
			parent: Re._currentValue,
			pool: e
		}
	}
	var ga = Error(d(460)),
		ts = Error(d(474)),
		ri = Error(d(542)),
		fi = {
			then: function() {}
		};

	function Ir(e) {
		return e = e.status, e === "fulfilled" || e === "rejected"
	}

	function Pr(e, t, l) {
		switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Gt, Gt), t = l), t.status) {
			case "fulfilled":
				return t.value;
			case "rejected":
				throw e = t.reason, tf(e), e;
			default:
				if (typeof t.status == "string") t.then(Gt, Gt);
				else {
					if (e = ve, e !== null && 100 < e.shellSuspendCounter) throw Error(d(482));
					e = t, e.status = "pending", e.then(function(a) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = a
						}
					}, function(a) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = a
						}
					})
				}
				switch (t.status) {
					case "fulfilled":
						return t.value;
					case "rejected":
						throw e = t.reason, tf(e), e
				}
				throw Ql = t, ga
		}
	}

	function Ll(e) {
		try {
			var t = e._init;
			return t(e._payload)
		} catch (l) {
			throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Ql = l, ga) : l
		}
	}
	var Ql = null;

	function ef() {
		if (Ql === null) throw Error(d(459));
		var e = Ql;
		return Ql = null, e
	}

	function tf(e) {
		if (e === ga || e === ri) throw Error(d(483))
	}
	var va = null,
		un = 0;

	function oi(e) {
		var t = un;
		return un += 1, va === null && (va = []), Pr(va, e, t)
	}

	function sn(e, t) {
		t = t.props.ref, e.ref = t !== void 0 ? t : null
	}

	function di(e, t) {
		throw t.$$typeof === X ? Error(d(525)) : (e = Object.prototype.toString.call(t), Error(d(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
	}

	function lf(e) {
		function t(g, y) {
			if (e) {
				var p = g.deletions;
				p === null ? (g.deletions = [y], g.flags |= 16) : p.push(y)
			}
		}

		function l(g, y) {
			if (!e) return null;
			for (; y !== null;) t(g, y), y = y.sibling;
			return null
		}

		function a(g) {
			for (var y = new Map; g !== null;) g.key !== null ? y.set(g.key, g) : y.set(g.index, g), g = g.sibling;
			return y
		}

		function n(g, y) {
			return g = Qt(g, y), g.index = 0, g.sibling = null, g
		}

		function i(g, y, p) {
			return g.index = p, e ? (p = g.alternate, p !== null ? (p = p.index, p < y ? (g.flags |= 67108866, y) : p) : (g.flags |= 67108866, y)) : (g.flags |= 1048576, y)
		}

		function s(g) {
			return e && g.alternate === null && (g.flags |= 67108866), g
		}

		function r(g, y, p, w) {
			return y === null || y.tag !== 6 ? (y = Qu(p, g.mode, w), y.return = g, y) : (y = n(y, p), y.return = g, y)
		}

		function m(g, y, p, w) {
			var G = p.type;
			return G === K ? T(g, y, p.props.children, w, p.key) : y !== null && (y.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Me && Ll(G) === y.type) ? (y = n(y, p.props), sn(y, p), y.return = g, y) : (y = ni(p.type, p.key, p.props, null, g.mode, w), sn(y, p), y.return = g, y)
		}

		function b(g, y, p, w) {
			return y === null || y.tag !== 4 || y.stateNode.containerInfo !== p.containerInfo || y.stateNode.implementation !== p.implementation ? (y = Zu(p, g.mode, w), y.return = g, y) : (y = n(y, p.children || []), y.return = g, y)
		}

		function T(g, y, p, w, G) {
			return y === null || y.tag !== 7 ? (y = Bl(p, g.mode, w, G), y.return = g, y) : (y = n(y, p), y.return = g, y)
		}

		function O(g, y, p) {
			if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint") return y = Qu("" + y, g.mode, p), y.return = g, y;
			if (typeof y == "object" && y !== null) {
				switch (y.$$typeof) {
					case J:
						return p = ni(y.type, y.key, y.props, null, g.mode, p), sn(p, y), p.return = g, p;
					case V:
						return y = Zu(y, g.mode, p), y.return = g, y;
					case Me:
						return y = Ll(y), O(g, y, p)
				}
				if (et(y) || qe(y)) return y = Bl(y, g.mode, p, null), y.return = g, y;
				if (typeof y.then == "function") return O(g, oi(y), p);
				if (y.$$typeof === ue) return O(g, si(g, y), p);
				di(g, y)
			}
			return null
		}

		function N(g, y, p, w) {
			var G = y !== null ? y.key : null;
			if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint") return G !== null ? null : r(g, y, "" + p, w);
			if (typeof p == "object" && p !== null) {
				switch (p.$$typeof) {
					case J:
						return p.key === G ? m(g, y, p, w) : null;
					case V:
						return p.key === G ? b(g, y, p, w) : null;
					case Me:
						return p = Ll(p), N(g, y, p, w)
				}
				if (et(p) || qe(p)) return G !== null ? null : T(g, y, p, w, null);
				if (typeof p.then == "function") return N(g, y, oi(p), w);
				if (p.$$typeof === ue) return N(g, y, si(g, p), w);
				di(g, p)
			}
			return null
		}

		function z(g, y, p, w, G) {
			if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint") return g = g.get(p) || null, r(y, g, "" + w, G);
			if (typeof w == "object" && w !== null) {
				switch (w.$$typeof) {
					case J:
						return g = g.get(w.key === null ? p : w.key) || null, m(y, g, w, G);
					case V:
						return g = g.get(w.key === null ? p : w.key) || null, b(y, g, w, G);
					case Me:
						return w = Ll(w), z(g, y, p, w, G)
				}
				if (et(w) || qe(w)) return g = g.get(p) || null, T(y, g, w, G, null);
				if (typeof w.then == "function") return z(g, y, p, oi(w), G);
				if (w.$$typeof === ue) return z(g, y, p, si(y, w), G);
				di(y, w)
			}
			return null
		}

		function q(g, y, p, w) {
			for (var G = null, se = null, Y = y, P = y = 0, ne = null; Y !== null && P < p.length; P++) {
				Y.index > P ? (ne = Y, Y = null) : ne = Y.sibling;
				var ce = N(g, Y, p[P], w);
				if (ce === null) {
					Y === null && (Y = ne);
					break
				}
				e && Y && ce.alternate === null && t(g, Y), y = i(ce, y, P), se === null ? G = ce : se.sibling = ce, se = ce, Y = ne
			}
			if (P === p.length) return l(g, Y), ie && Zt(g, P), G;
			if (Y === null) {
				for (; P < p.length; P++) Y = O(g, p[P], w), Y !== null && (y = i(Y, y, P), se === null ? G = Y : se.sibling = Y, se = Y);
				return ie && Zt(g, P), G
			}
			for (Y = a(Y); P < p.length; P++) ne = z(Y, g, P, p[P], w), ne !== null && (e && ne.alternate !== null && Y.delete(ne.key === null ? P : ne.key), y = i(ne, y, P), se === null ? G = ne : se.sibling = ne, se = ne);
			return e && Y.forEach(function(_l) {
				return t(g, _l)
			}), ie && Zt(g, P), G
		}

		function Q(g, y, p, w) {
			if (p == null) throw Error(d(151));
			for (var G = null, se = null, Y = y, P = y = 0, ne = null, ce = p.next(); Y !== null && !ce.done; P++, ce = p.next()) {
				Y.index > P ? (ne = Y, Y = null) : ne = Y.sibling;
				var _l = N(g, Y, ce.value, w);
				if (_l === null) {
					Y === null && (Y = ne);
					break
				}
				e && Y && _l.alternate === null && t(g, Y), y = i(_l, y, P), se === null ? G = _l : se.sibling = _l, se = _l, Y = ne
			}
			if (ce.done) return l(g, Y), ie && Zt(g, P), G;
			if (Y === null) {
				for (; !ce.done; P++, ce = p.next()) ce = O(g, ce.value, w), ce !== null && (y = i(ce, y, P), se === null ? G = ce : se.sibling = ce, se = ce);
				return ie && Zt(g, P), G
			}
			for (Y = a(Y); !ce.done; P++, ce = p.next()) ce = z(Y, g, P, ce.value, w), ce !== null && (e && ce.alternate !== null && Y.delete(ce.key === null ? P : ce.key), y = i(ce, y, P), se === null ? G = ce : se.sibling = ce, se = ce);
			return e && Y.forEach(function(dx) {
				return t(g, dx)
			}), ie && Zt(g, P), G
		}

		function ye(g, y, p, w) {
			if (typeof p == "object" && p !== null && p.type === K && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
				switch (p.$$typeof) {
					case J:
						e: {
							for (var G = p.key; y !== null;) {
								if (y.key === G) {
									if (G = p.type, G === K) {
										if (y.tag === 7) {
											l(g, y.sibling), w = n(y, p.props.children), w.return = g, g = w;
											break e
										}
									} else if (y.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Me && Ll(G) === y.type) {
										l(g, y.sibling), w = n(y, p.props), sn(w, p), w.return = g, g = w;
										break e
									}
									l(g, y);
									break
								} else t(g, y);
								y = y.sibling
							}
							p.type === K ? (w = Bl(p.props.children, g.mode, w, p.key), w.return = g, g = w) : (w = ni(p.type, p.key, p.props, null, g.mode, w), sn(w, p), w.return = g, g = w)
						}
						return s(g);
					case V:
						e: {
							for (G = p.key; y !== null;) {
								if (y.key === G)
									if (y.tag === 4 && y.stateNode.containerInfo === p.containerInfo && y.stateNode.implementation === p.implementation) {
										l(g, y.sibling), w = n(y, p.children || []), w.return = g, g = w;
										break e
									} else {
										l(g, y);
										break
									}
								else t(g, y);
								y = y.sibling
							}
							w = Zu(p, g.mode, w),
							w.return = g,
							g = w
						}
						return s(g);
					case Me:
						return p = Ll(p), ye(g, y, p, w)
				}
				if (et(p)) return q(g, y, p, w);
				if (qe(p)) {
					if (G = qe(p), typeof G != "function") throw Error(d(150));
					return p = G.call(p), Q(g, y, p, w)
				}
				if (typeof p.then == "function") return ye(g, y, oi(p), w);
				if (p.$$typeof === ue) return ye(g, y, si(g, p), w);
				di(g, p)
			}
			return typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint" ? (p = "" + p, y !== null && y.tag === 6 ? (l(g, y.sibling), w = n(y, p), w.return = g, g = w) : (l(g, y), w = Qu(p, g.mode, w), w.return = g, g = w), s(g)) : l(g, y)
		}
		return function(g, y, p, w) {
			try {
				un = 0;
				var G = ye(g, y, p, w);
				return va = null, G
			} catch (Y) {
				if (Y === ga || Y === ri) throw Y;
				var se = dt(29, Y, null, g.mode);
				return se.lanes = w, se.return = g, se
			} finally {}
		}
	}
	var Zl = lf(!0),
		af = lf(!1),
		ol = !1;

	function ls(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		}
	}

	function as(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		})
	}

	function dl(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		}
	}

	function ml(e, t, l) {
		var a = e.updateQueue;
		if (a === null) return null;
		if (a = a.shared, (re & 2) !== 0) {
			var n = a.pending;
			return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = ai(e), Xr(e, null, l), t
		}
		return li(e, a, t, l), ai(e)
	}

	function cn(e, t, l) {
		if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
			var a = t.lanes;
			a &= e.pendingLanes, l |= a, t.lanes = l, kc(e, l)
		}
	}

	function ns(e, t) {
		var l = e.updateQueue,
			a = e.alternate;
		if (a !== null && (a = a.updateQueue, l === a)) {
			var n = null,
				i = null;
			if (l = l.firstBaseUpdate, l !== null) {
				do {
					var s = {
						lane: l.lane,
						tag: l.tag,
						payload: l.payload,
						callback: null,
						next: null
					};
					i === null ? n = i = s : i = i.next = s, l = l.next
				} while (l !== null);
				i === null ? n = i = t : i = i.next = t
			} else n = i = t;
			l = {
				baseState: a.baseState,
				firstBaseUpdate: n,
				lastBaseUpdate: i,
				shared: a.shared,
				callbacks: a.callbacks
			}, e.updateQueue = l;
			return
		}
		e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t
	}
	var is = !1;

	function rn() {
		if (is) {
			var e = ya;
			if (e !== null) throw e
		}
	}

	function fn(e, t, l, a) {
		is = !1;
		var n = e.updateQueue;
		ol = !1;
		var i = n.firstBaseUpdate,
			s = n.lastBaseUpdate,
			r = n.shared.pending;
		if (r !== null) {
			n.shared.pending = null;
			var m = r,
				b = m.next;
			m.next = null, s === null ? i = b : s.next = b, s = m;
			var T = e.alternate;
			T !== null && (T = T.updateQueue, r = T.lastBaseUpdate, r !== s && (r === null ? T.firstBaseUpdate = b : r.next = b, T.lastBaseUpdate = m))
		}
		if (i !== null) {
			var O = n.baseState;
			s = 0, T = b = m = null, r = i;
			do {
				var N = r.lane & -536870913,
					z = N !== r.lane;
				if (z ? (ae & N) === N : (a & N) === N) {
					N !== 0 && N === xa && (is = !0), T !== null && (T = T.next = {
						lane: 0,
						tag: r.tag,
						payload: r.payload,
						callback: null,
						next: null
					});
					e: {
						var q = e,
							Q = r;N = t;
						var ye = l;
						switch (Q.tag) {
							case 1:
								if (q = Q.payload, typeof q == "function") {
									O = q.call(ye, O, N);
									break e
								}
								O = q;
								break e;
							case 3:
								q.flags = q.flags & -65537 | 128;
							case 0:
								if (q = Q.payload, N = typeof q == "function" ? q.call(ye, O, N) : q, N == null) break e;
								O = U({}, O, N);
								break e;
							case 2:
								ol = !0
						}
					}
					N = r.callback, N !== null && (e.flags |= 64, z && (e.flags |= 8192), z = n.callbacks, z === null ? n.callbacks = [N] : z.push(N))
				} else z = {
					lane: N,
					tag: r.tag,
					payload: r.payload,
					callback: r.callback,
					next: null
				}, T === null ? (b = T = z, m = O) : T = T.next = z, s |= N;
				if (r = r.next, r === null) {
					if (r = n.shared.pending, r === null) break;
					z = r, r = z.next, z.next = null, n.lastBaseUpdate = z, n.shared.pending = null
				}
			} while (!0);
			T === null && (m = O), n.baseState = m, n.firstBaseUpdate = b, n.lastBaseUpdate = T, i === null && (n.shared.lanes = 0), vl |= s, e.lanes = s, e.memoizedState = O
		}
	}

	function nf(e, t) {
		if (typeof e != "function") throw Error(d(191, e));
		e.call(t)
	}

	function uf(e, t) {
		var l = e.callbacks;
		if (l !== null)
			for (e.callbacks = null, e = 0; e < l.length; e++) nf(l[e], t)
	}
	var pa = x(null),
		mi = x(0);

	function sf(e, t) {
		e = tl, R(mi, e), R(pa, t), tl = e | t.baseLanes
	}

	function us() {
		R(mi, tl), R(pa, pa.current)
	}

	function ss() {
		tl = mi.current, _(pa), _(mi)
	}
	var mt = x(null),
		Tt = null;

	function hl(e) {
		var t = e.alternate;
		R(Oe, Oe.current & 1), R(mt, e), Tt === null && (t === null || pa.current !== null || t.memoizedState !== null) && (Tt = e)
	}

	function cs(e) {
		R(Oe, Oe.current), R(mt, e), Tt === null && (Tt = e)
	}

	function cf(e) {
		e.tag === 22 ? (R(Oe, Oe.current), R(mt, e), Tt === null && (Tt = e)) : xl()
	}

	function xl() {
		R(Oe, Oe.current), R(mt, mt.current)
	}

	function ht(e) {
		_(mt), Tt === e && (Tt = null), _(Oe)
	}
	var Oe = x(0);

	function hi(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var l = t.memoizedState;
				if (l !== null && (l = l.dehydrated, l === null || hc(l) || xc(l))) return t
			} else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
				if ((t.flags & 128) !== 0) return t
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return
			}
			t.sibling.return = t.return, t = t.sibling
		}
		return null
	}
	var Jt = 0,
		I = null,
		he = null,
		Ue = null,
		xi = !1,
		ba = !1,
		Vl = !1,
		yi = 0,
		on = 0,
		Sa = null,
		lh = 0;

	function ze() {
		throw Error(d(321))
	}

	function rs(e, t) {
		if (t === null) return !1;
		for (var l = 0; l < t.length && l < e.length; l++)
			if (!ot(e[l], t[l])) return !1;
		return !0
	}

	function fs(e, t, l, a, n, i) {
		return Jt = i, I = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, j.H = e === null || e.memoizedState === null ? Vf : zs, Vl = !1, i = l(a, n), Vl = !1, ba && (i = ff(t, l, a, n)), rf(e), i
	}

	function rf(e) {
		j.H = hn;
		var t = he !== null && he.next !== null;
		if (Jt = 0, Ue = he = I = null, xi = !1, on = 0, Sa = null, t) throw Error(d(300));
		e === null || Ce || (e = e.dependencies, e !== null && ui(e) && (Ce = !0))
	}

	function ff(e, t, l, a) {
		I = e;
		var n = 0;
		do {
			if (ba && (Sa = null), on = 0, ba = !1, 25 <= n) throw Error(d(301));
			if (n += 1, Ue = he = null, e.updateQueue != null) {
				var i = e.updateQueue;
				i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0)
			}
			j.H = Kf, i = t(l, a)
		} while (ba);
		return i
	}

	function ah() {
		var e = j.H,
			t = e.useState()[0];
		return t = typeof t.then == "function" ? dn(t) : t, e = e.useState()[0], (he !== null ? he.memoizedState : null) !== e && (I.flags |= 1024), t
	}

	function os() {
		var e = yi !== 0;
		return yi = 0, e
	}

	function ds(e, t, l) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l
	}

	function ms(e) {
		if (xi) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next
			}
			xi = !1
		}
		Jt = 0, Ue = he = I = null, ba = !1, on = yi = 0, Sa = null
	}

	function Pe() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return Ue === null ? I.memoizedState = Ue = e : Ue = Ue.next = e, Ue
	}

	function De() {
		if (he === null) {
			var e = I.alternate;
			e = e !== null ? e.memoizedState : null
		} else e = he.next;
		var t = Ue === null ? I.memoizedState : Ue.next;
		if (t !== null) Ue = t, he = e;
		else {
			if (e === null) throw I.alternate === null ? Error(d(467)) : Error(d(310));
			he = e, e = {
				memoizedState: he.memoizedState,
				baseState: he.baseState,
				baseQueue: he.baseQueue,
				queue: he.queue,
				next: null
			}, Ue === null ? I.memoizedState = Ue = e : Ue = Ue.next = e
		}
		return Ue
	}

	function gi() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		}
	}

	function dn(e) {
		var t = on;
		return on += 1, Sa === null && (Sa = []), e = Pr(Sa, e, t), t = I, (Ue === null ? t.memoizedState : Ue.next) === null && (t = t.alternate, j.H = t === null || t.memoizedState === null ? Vf : zs), e
	}

	function vi(e) {
		if (e !== null && typeof e == "object") {
			if (typeof e.then == "function") return dn(e);
			if (e.$$typeof === ue) return Ke(e)
		}
		throw Error(d(438, String(e)))
	}

	function hs(e) {
		var t = null,
			l = I.updateQueue;
		if (l !== null && (t = l.memoCache), t == null) {
			var a = I.alternate;
			a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
				data: a.data.map(function(n) {
					return n.slice()
				}),
				index: 0
			})))
		}
		if (t == null && (t = {
				data: [],
				index: 0
			}), l === null && (l = gi(), I.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
			for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = Qe;
		return t.index++, l
	}

	function kt(e, t) {
		return typeof t == "function" ? t(e) : t
	}

	function pi(e) {
		var t = De();
		return xs(t, he, e)
	}

	function xs(e, t, l) {
		var a = e.queue;
		if (a === null) throw Error(d(311));
		a.lastRenderedReducer = l;
		var n = e.baseQueue,
			i = a.pending;
		if (i !== null) {
			if (n !== null) {
				var s = n.next;
				n.next = i.next, i.next = s
			}
			t.baseQueue = n = i, a.pending = null
		}
		if (i = e.baseState, n === null) e.memoizedState = i;
		else {
			t = n.next;
			var r = s = null,
				m = null,
				b = t,
				T = !1;
			do {
				var O = b.lane & -536870913;
				if (O !== b.lane ? (ae & O) === O : (Jt & O) === O) {
					var N = b.revertLane;
					if (N === 0) m !== null && (m = m.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: b.action,
						hasEagerState: b.hasEagerState,
						eagerState: b.eagerState,
						next: null
					}), O === xa && (T = !0);
					else if ((Jt & N) === N) {
						b = b.next, N === xa && (T = !0);
						continue
					} else O = {
						lane: 0,
						revertLane: b.revertLane,
						gesture: null,
						action: b.action,
						hasEagerState: b.hasEagerState,
						eagerState: b.eagerState,
						next: null
					}, m === null ? (r = m = O, s = i) : m = m.next = O, I.lanes |= N, vl |= N;
					O = b.action, Vl && l(i, O), i = b.hasEagerState ? b.eagerState : l(i, O)
				} else N = {
					lane: O,
					revertLane: b.revertLane,
					gesture: b.gesture,
					action: b.action,
					hasEagerState: b.hasEagerState,
					eagerState: b.eagerState,
					next: null
				}, m === null ? (r = m = N, s = i) : m = m.next = N, I.lanes |= O, vl |= O;
				b = b.next
			} while (b !== null && b !== t);
			if (m === null ? s = i : m.next = r, !ot(i, e.memoizedState) && (Ce = !0, T && (l = ya, l !== null))) throw l;
			e.memoizedState = i, e.baseState = s, e.baseQueue = m, a.lastRenderedState = i
		}
		return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]
	}

	function ys(e) {
		var t = De(),
			l = t.queue;
		if (l === null) throw Error(d(311));
		l.lastRenderedReducer = e;
		var a = l.dispatch,
			n = l.pending,
			i = t.memoizedState;
		if (n !== null) {
			l.pending = null;
			var s = n = n.next;
			do i = e(i, s.action), s = s.next; while (s !== n);
			ot(i, t.memoizedState) || (Ce = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i
		}
		return [i, a]
	}

	function of(e, t, l) {
		var a = I,
			n = De(),
			i = ie;
		if (i) {
			if (l === void 0) throw Error(d(407));
			l = l()
		} else l = t();
		var s = !ot((he || n).memoizedState, l);
		if (s && (n.memoizedState = l, Ce = !0), n = n.queue, ps(hf.bind(null, a, n, e), [e]), n.getSnapshot !== t || s || Ue !== null && Ue.memoizedState.tag & 1) {
			if (a.flags |= 2048, ja(9, {
					destroy: void 0
				}, mf.bind(null, a, n, l, t), null), ve === null) throw Error(d(349));
			i || (Jt & 127) !== 0 || df(a, t, l)
		}
		return l
	}

	function df(e, t, l) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: l
		}, t = I.updateQueue, t === null ? (t = gi(), I.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e))
	}

	function mf(e, t, l, a) {
		t.value = l, t.getSnapshot = a, xf(t) && yf(e)
	}

	function hf(e, t, l) {
		return l(function() {
			xf(t) && yf(e)
		})
	}

	function xf(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var l = t();
			return !ot(e, l)
		} catch {
			return !0
		}
	}

	function yf(e) {
		var t = Hl(e, 2);
		t !== null && st(t, e, 2)
	}

	function gs(e) {
		var t = Pe();
		if (typeof e == "function") {
			var l = e;
			if (e = l(), Vl) {
				nl(!0);
				try {
					l()
				} finally {
					nl(!1)
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: kt,
			lastRenderedState: e
		}, t
	}

	function gf(e, t, l, a) {
		return e.baseState = l, xs(e, he, typeof a == "function" ? a : kt)
	}

	function nh(e, t, l, a, n) {
		if (ji(e)) throw Error(d(485));
		if (e = t.action, e !== null) {
			var i = {
				payload: n,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(s) {
					i.listeners.push(s)
				}
			};
			j.T !== null ? l(!0) : i.isTransition = !1, a(i), l = t.pending, l === null ? (i.next = t.pending = i, vf(t, i)) : (i.next = l.next, t.pending = l.next = i)
		}
	}

	function vf(e, t) {
		var l = t.action,
			a = t.payload,
			n = e.state;
		if (t.isTransition) {
			var i = j.T,
				s = {};
			j.T = s;
			try {
				var r = l(n, a),
					m = j.S;
				m !== null && m(s, r), pf(e, t, r)
			} catch (b) {
				vs(e, t, b)
			} finally {
				i !== null && s.types !== null && (i.types = s.types), j.T = i
			}
		} else try {
			i = l(n, a), pf(e, t, i)
		} catch (b) {
			vs(e, t, b)
		}
	}

	function pf(e, t, l) {
		l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
			bf(e, t, a)
		}, function(a) {
			return vs(e, t, a)
		}) : bf(e, t, l)
	}

	function bf(e, t, l) {
		t.status = "fulfilled", t.value = l, Sf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, vf(e, l)))
	}

	function vs(e, t, l) {
		var a = e.pending;
		if (e.pending = null, a !== null) {
			a = a.next;
			do t.status = "rejected", t.reason = l, Sf(t), t = t.next; while (t !== a)
		}
		e.action = null
	}

	function Sf(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++)(0, e[t])()
	}

	function jf(e, t) {
		return t
	}

	function Nf(e, t) {
		if (ie) {
			var l = ve.formState;
			if (l !== null) {
				e: {
					var a = I;
					if (ie) {
						if (Se) {
							t: {
								for (var n = Se, i = At; n.nodeType !== 8;) {
									if (!i) {
										n = null;
										break t
									}
									if (n = _t(n.nextSibling), n === null) {
										n = null;
										break t
									}
								}
								i = n.data,
								n = i === "F!" || i === "F" ? n : null
							}
							if (n) {
								Se = _t(n.nextSibling), a = n.data === "F!";
								break e
							}
						}
						rl(a)
					}
					a = !1
				}
				a && (t = l[0])
			}
		}
		return l = Pe(), l.memoizedState = l.baseState = t, a = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: jf,
			lastRenderedState: t
		}, l.queue = a, l = Lf.bind(null, I, a), a.dispatch = l, a = gs(!1), i = Es.bind(null, I, !1, a.queue), a = Pe(), n = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, a.queue = n, l = nh.bind(null, I, n, i, l), n.dispatch = l, a.memoizedState = e, [t, l, !1]
	}

	function Ef(e) {
		var t = De();
		return zf(t, he, e)
	}

	function zf(e, t, l) {
		if (t = xs(e, t, jf)[0], e = pi(kt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
			var a = dn(t)
		} catch (s) {
			throw s === ga ? ri : s
		} else a = t;
		t = De();
		var n = t.queue,
			i = n.dispatch;
		return l !== t.memoizedState && (I.flags |= 2048, ja(9, {
			destroy: void 0
		}, ih.bind(null, n, l), null)), [a, i, e]
	}

	function ih(e, t) {
		e.action = t
	}

	function Af(e) {
		var t = De(),
			l = he;
		if (l !== null) return zf(t, l, e);
		De(), t = t.memoizedState, l = De();
		var a = l.queue.dispatch;
		return l.memoizedState = e, [t, a, !1]
	}

	function ja(e, t, l, a) {
		return e = {
			tag: e,
			create: l,
			deps: a,
			inst: t,
			next: null
		}, t = I.updateQueue, t === null && (t = gi(), I.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e
	}

	function Tf() {
		return De().memoizedState
	}

	function bi(e, t, l, a) {
		var n = Pe();
		I.flags |= e, n.memoizedState = ja(1 | t, {
			destroy: void 0
		}, l, a === void 0 ? null : a)
	}

	function Si(e, t, l, a) {
		var n = De();
		a = a === void 0 ? null : a;
		var i = n.memoizedState.inst;
		he !== null && a !== null && rs(a, he.memoizedState.deps) ? n.memoizedState = ja(t, i, l, a) : (I.flags |= e, n.memoizedState = ja(1 | t, i, l, a))
	}

	function _f(e, t) {
		bi(8390656, 8, e, t)
	}

	function ps(e, t) {
		Si(2048, 8, e, t)
	}

	function uh(e) {
		I.flags |= 4;
		var t = I.updateQueue;
		if (t === null) t = gi(), I.updateQueue = t, t.events = [e];
		else {
			var l = t.events;
			l === null ? t.events = [e] : l.push(e)
		}
	}

	function Mf(e) {
		var t = De().memoizedState;
		return uh({
				ref: t,
				nextImpl: e
			}),
			function() {
				if ((re & 2) !== 0) throw Error(d(440));
				return t.impl.apply(void 0, arguments)
			}
	}

	function wf(e, t) {
		return Si(4, 2, e, t)
	}

	function Of(e, t) {
		return Si(4, 4, e, t)
	}

	function Df(e, t) {
		if (typeof t == "function") {
			e = e();
			var l = t(e);
			return function() {
				typeof l == "function" ? l() : t(null)
			}
		}
		if (t != null) return e = e(), t.current = e,
			function() {
				t.current = null
			}
	}

	function Rf(e, t, l) {
		l = l != null ? l.concat([e]) : null, Si(4, 4, Df.bind(null, t, e), l)
	}

	function bs() {}

	function Uf(e, t) {
		var l = De();
		t = t === void 0 ? null : t;
		var a = l.memoizedState;
		return t !== null && rs(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e)
	}

	function Cf(e, t) {
		var l = De();
		t = t === void 0 ? null : t;
		var a = l.memoizedState;
		if (t !== null && rs(t, a[1])) return a[0];
		if (a = e(), Vl) {
			nl(!0);
			try {
				e()
			} finally {
				nl(!1)
			}
		}
		return l.memoizedState = [a, t], a
	}

	function Ss(e, t, l) {
		return l === void 0 || (Jt & 1073741824) !== 0 && (ae & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = Bo(), I.lanes |= e, vl |= e, l)
	}

	function Hf(e, t, l, a) {
		return ot(l, t) ? l : pa.current !== null ? (e = Ss(e, l, a), ot(e, t) || (Ce = !0), e) : (Jt & 42) === 0 || (Jt & 1073741824) !== 0 && (ae & 261930) === 0 ? (Ce = !0, e.memoizedState = l) : (e = Bo(), I.lanes |= e, vl |= e, t)
	}

	function Bf(e, t, l, a, n) {
		var i = D.p;
		D.p = i !== 0 && 8 > i ? i : 8;
		var s = j.T,
			r = {};
		j.T = r, Es(e, !1, t, l);
		try {
			var m = n(),
				b = j.S;
			if (b !== null && b(r, m), m !== null && typeof m == "object" && typeof m.then == "function") {
				var T = th(m, a);
				mn(e, t, T, gt(e))
			} else mn(e, t, a, gt(e))
		} catch (O) {
			mn(e, t, {
				then: function() {},
				status: "rejected",
				reason: O
			}, gt())
		} finally {
			D.p = i, s !== null && r.types !== null && (s.types = r.types), j.T = s
		}
	}

	function sh() {}

	function js(e, t, l, a) {
		if (e.tag !== 5) throw Error(d(476));
		var n = qf(e).queue;
		Bf(e, n, t, H, l === null ? sh : function() {
			return Yf(e), l(a)
		})
	}

	function qf(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: H,
			baseState: H,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: kt,
				lastRenderedState: H
			},
			next: null
		};
		var l = {};
		return t.next = {
			memoizedState: l,
			baseState: l,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: kt,
				lastRenderedState: l
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t
	}

	function Yf(e) {
		var t = qf(e);
		t.next === null && (t = e.alternate.memoizedState), mn(e, t.next.queue, {}, gt())
	}

	function Ns() {
		return Ke(wn)
	}

	function Xf() {
		return De().memoizedState
	}

	function Gf() {
		return De().memoizedState
	}

	function ch(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var l = gt();
					e = dl(l);
					var a = ml(t, e, l);
					a !== null && (st(a, t, l), cn(a, t, l)), t = {
						cache: Iu()
					}, e.payload = t;
					return
			}
			t = t.return
		}
	}

	function rh(e, t, l) {
		var a = gt();
		l = {
			lane: a,
			revertLane: 0,
			gesture: null,
			action: l,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, ji(e) ? Qf(t, l) : (l = Gu(e, t, l, a), l !== null && (st(l, e, a), Zf(l, t, a)))
	}

	function Lf(e, t, l) {
		var a = gt();
		mn(e, t, l, a)
	}

	function mn(e, t, l, a) {
		var n = {
			lane: a,
			revertLane: 0,
			gesture: null,
			action: l,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (ji(e)) Qf(t, n);
		else {
			var i = e.alternate;
			if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
				var s = t.lastRenderedState,
					r = i(s, l);
				if (n.hasEagerState = !0, n.eagerState = r, ot(r, s)) return li(e, t, n, 0), ve === null && ti(), !1
			} catch {} finally {}
			if (l = Gu(e, t, n, a), l !== null) return st(l, e, a), Zf(l, t, a), !0
		}
		return !1
	}

	function Es(e, t, l, a) {
		if (a = {
				lane: 2,
				revertLane: lc(),
				gesture: null,
				action: a,
				hasEagerState: !1,
				eagerState: null,
				next: null
			}, ji(e)) {
			if (t) throw Error(d(479))
		} else t = Gu(e, l, a, 2), t !== null && st(t, e, 2)
	}

	function ji(e) {
		var t = e.alternate;
		return e === I || t !== null && t === I
	}

	function Qf(e, t) {
		ba = xi = !0;
		var l = e.pending;
		l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t
	}

	function Zf(e, t, l) {
		if ((l & 4194048) !== 0) {
			var a = t.lanes;
			a &= e.pendingLanes, l |= a, t.lanes = l, kc(e, l)
		}
	}
	var hn = {
		readContext: Ke,
		use: vi,
		useCallback: ze,
		useContext: ze,
		useEffect: ze,
		useImperativeHandle: ze,
		useLayoutEffect: ze,
		useInsertionEffect: ze,
		useMemo: ze,
		useReducer: ze,
		useRef: ze,
		useState: ze,
		useDebugValue: ze,
		useDeferredValue: ze,
		useTransition: ze,
		useSyncExternalStore: ze,
		useId: ze,
		useHostTransitionStatus: ze,
		useFormState: ze,
		useActionState: ze,
		useOptimistic: ze,
		useMemoCache: ze,
		useCacheRefresh: ze
	};
	hn.useEffectEvent = ze;
	var Vf = {
			readContext: Ke,
			use: vi,
			useCallback: function(e, t) {
				return Pe().memoizedState = [e, t === void 0 ? null : t], e
			},
			useContext: Ke,
			useEffect: _f,
			useImperativeHandle: function(e, t, l) {
				l = l != null ? l.concat([e]) : null, bi(4194308, 4, Df.bind(null, t, e), l)
			},
			useLayoutEffect: function(e, t) {
				return bi(4194308, 4, e, t)
			},
			useInsertionEffect: function(e, t) {
				bi(4, 2, e, t)
			},
			useMemo: function(e, t) {
				var l = Pe();
				t = t === void 0 ? null : t;
				var a = e();
				if (Vl) {
					nl(!0);
					try {
						e()
					} finally {
						nl(!1)
					}
				}
				return l.memoizedState = [a, t], a
			},
			useReducer: function(e, t, l) {
				var a = Pe();
				if (l !== void 0) {
					var n = l(t);
					if (Vl) {
						nl(!0);
						try {
							l(t)
						} finally {
							nl(!1)
						}
					}
				} else n = t;
				return a.memoizedState = a.baseState = n, e = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: n
				}, a.queue = e, e = e.dispatch = rh.bind(null, I, e), [a.memoizedState, e]
			},
			useRef: function(e) {
				var t = Pe();
				return e = {
					current: e
				}, t.memoizedState = e
			},
			useState: function(e) {
				e = gs(e);
				var t = e.queue,
					l = Lf.bind(null, I, t);
				return t.dispatch = l, [e.memoizedState, l]
			},
			useDebugValue: bs,
			useDeferredValue: function(e, t) {
				var l = Pe();
				return Ss(l, e, t)
			},
			useTransition: function() {
				var e = gs(!1);
				return e = Bf.bind(null, I, e.queue, !0, !1), Pe().memoizedState = e, [!1, e]
			},
			useSyncExternalStore: function(e, t, l) {
				var a = I,
					n = Pe();
				if (ie) {
					if (l === void 0) throw Error(d(407));
					l = l()
				} else {
					if (l = t(), ve === null) throw Error(d(349));
					(ae & 127) !== 0 || df(a, t, l)
				}
				n.memoizedState = l;
				var i = {
					value: l,
					getSnapshot: t
				};
				return n.queue = i, _f(hf.bind(null, a, i, e), [e]), a.flags |= 2048, ja(9, {
					destroy: void 0
				}, mf.bind(null, a, i, l, t), null), l
			},
			useId: function() {
				var e = Pe(),
					t = ve.identifierPrefix;
				if (ie) {
					var l = Ht,
						a = Ct;
					l = (a & ~(1 << 32 - ft(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = yi++, 0 < l && (t += "H" + l.toString(32)), t += "_"
				} else l = lh++, t = "_" + t + "r_" + l.toString(32) + "_";
				return e.memoizedState = t
			},
			useHostTransitionStatus: Ns,
			useFormState: Nf,
			useActionState: Nf,
			useOptimistic: function(e) {
				var t = Pe();
				t.memoizedState = t.baseState = e;
				var l = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: null,
					lastRenderedState: null
				};
				return t.queue = l, t = Es.bind(null, I, !0, l), l.dispatch = t, [e, t]
			},
			useMemoCache: hs,
			useCacheRefresh: function() {
				return Pe().memoizedState = ch.bind(null, I)
			},
			useEffectEvent: function(e) {
				var t = Pe(),
					l = {
						impl: e
					};
				return t.memoizedState = l,
					function() {
						if ((re & 2) !== 0) throw Error(d(440));
						return l.impl.apply(void 0, arguments)
					}
			}
		},
		zs = {
			readContext: Ke,
			use: vi,
			useCallback: Uf,
			useContext: Ke,
			useEffect: ps,
			useImperativeHandle: Rf,
			useInsertionEffect: wf,
			useLayoutEffect: Of,
			useMemo: Cf,
			useReducer: pi,
			useRef: Tf,
			useState: function() {
				return pi(kt)
			},
			useDebugValue: bs,
			useDeferredValue: function(e, t) {
				var l = De();
				return Hf(l, he.memoizedState, e, t)
			},
			useTransition: function() {
				var e = pi(kt)[0],
					t = De().memoizedState;
				return [typeof e == "boolean" ? e : dn(e), t]
			},
			useSyncExternalStore: of,
			useId: Xf,
			useHostTransitionStatus: Ns,
			useFormState: Ef,
			useActionState: Ef,
			useOptimistic: function(e, t) {
				var l = De();
				return gf(l, he, e, t)
			},
			useMemoCache: hs,
			useCacheRefresh: Gf
		};
	zs.useEffectEvent = Mf;
	var Kf = {
		readContext: Ke,
		use: vi,
		useCallback: Uf,
		useContext: Ke,
		useEffect: ps,
		useImperativeHandle: Rf,
		useInsertionEffect: wf,
		useLayoutEffect: Of,
		useMemo: Cf,
		useReducer: ys,
		useRef: Tf,
		useState: function() {
			return ys(kt)
		},
		useDebugValue: bs,
		useDeferredValue: function(e, t) {
			var l = De();
			return he === null ? Ss(l, e, t) : Hf(l, he.memoizedState, e, t)
		},
		useTransition: function() {
			var e = ys(kt)[0],
				t = De().memoizedState;
			return [typeof e == "boolean" ? e : dn(e), t]
		},
		useSyncExternalStore: of,
		useId: Xf,
		useHostTransitionStatus: Ns,
		useFormState: Af,
		useActionState: Af,
		useOptimistic: function(e, t) {
			var l = De();
			return he !== null ? gf(l, he, e, t) : (l.baseState = e, [e, l.queue.dispatch])
		},
		useMemoCache: hs,
		useCacheRefresh: Gf
	};
	Kf.useEffectEvent = Mf;

	function As(e, t, l, a) {
		t = e.memoizedState, l = l(a, t), l = l == null ? t : U({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l)
	}
	var Ts = {
		enqueueSetState: function(e, t, l) {
			e = e._reactInternals;
			var a = gt(),
				n = dl(a);
			n.payload = t, l != null && (n.callback = l), t = ml(e, n, a), t !== null && (st(t, e, a), cn(t, e, a))
		},
		enqueueReplaceState: function(e, t, l) {
			e = e._reactInternals;
			var a = gt(),
				n = dl(a);
			n.tag = 1, n.payload = t, l != null && (n.callback = l), t = ml(e, n, a), t !== null && (st(t, e, a), cn(t, e, a))
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var l = gt(),
				a = dl(l);
			a.tag = 2, t != null && (a.callback = t), t = ml(e, a, l), t !== null && (st(t, e, l), cn(t, e, l))
		}
	};

	function Jf(e, t, l, a, n, i, s) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Pa(l, a) || !Pa(n, i) : !0
	}

	function kf(e, t, l, a) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && Ts.enqueueReplaceState(t, t.state, null)
	}

	function Kl(e, t) {
		var l = t;
		if ("ref" in t) {
			l = {};
			for (var a in t) a !== "ref" && (l[a] = t[a])
		}
		if (e = e.defaultProps) {
			l === t && (l = U({}, l));
			for (var n in e) l[n] === void 0 && (l[n] = e[n])
		}
		return l
	}

	function $f(e) {
		ei(e)
	}

	function Wf(e) {
		console.error(e)
	}

	function Ff(e) {
		ei(e)
	}

	function Ni(e, t) {
		try {
			var l = e.onUncaughtError;
			l(t.value, {
				componentStack: t.stack
			})
		} catch (a) {
			setTimeout(function() {
				throw a
			})
		}
	}

	function If(e, t, l) {
		try {
			var a = e.onCaughtError;
			a(l.value, {
				componentStack: l.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			})
		} catch (n) {
			setTimeout(function() {
				throw n
			})
		}
	}

	function _s(e, t, l) {
		return l = dl(l), l.tag = 3, l.payload = {
			element: null
		}, l.callback = function() {
			Ni(e, t)
		}, l
	}

	function Pf(e) {
		return e = dl(e), e.tag = 3, e
	}

	function eo(e, t, l, a) {
		var n = l.type.getDerivedStateFromError;
		if (typeof n == "function") {
			var i = a.value;
			e.payload = function() {
				return n(i)
			}, e.callback = function() {
				If(t, l, a)
			}
		}
		var s = l.stateNode;
		s !== null && typeof s.componentDidCatch == "function" && (e.callback = function() {
			If(t, l, a), typeof n != "function" && (pl === null ? pl = new Set([this]) : pl.add(this));
			var r = a.stack;
			this.componentDidCatch(a.value, {
				componentStack: r !== null ? r : ""
			})
		})
	}

	function fh(e, t, l, a, n) {
		if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
			if (t = l.alternate, t !== null && ha(t, l, n, !0), l = mt.current, l !== null) {
				switch (l.tag) {
					case 31:
					case 13:
						return Tt === null ? Ci() : l.alternate === null && Ae === 0 && (Ae = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === fi ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = new Set([a]) : t.add(a), Ps(e, a, n)), !1;
					case 22:
						return l.flags |= 65536, a === fi ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
							transitions: null,
							markerInstances: null,
							retryQueue: new Set([a])
						}, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = new Set([a]) : l.add(a)), Ps(e, a, n)), !1
				}
				throw Error(d(435, l.tag))
			}
			return Ps(e, a, n), Ci(), !1
		}
		if (ie) return t = mt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== Ju && (e = Error(d(422), {
			cause: a
		}), ln(Nt(e, l)))) : (a !== Ju && (t = Error(d(423), {
			cause: a
		}), ln(Nt(t, l))), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = Nt(a, l), n = _s(e.stateNode, a, n), ns(e, n), Ae !== 4 && (Ae = 2)), !1;
		var i = Error(d(520), {
			cause: a
		});
		if (i = Nt(i, l), jn === null ? jn = [i] : jn.push(i), Ae !== 4 && (Ae = 2), t === null) return !0;
		a = Nt(a, l), l = t;
		do {
			switch (l.tag) {
				case 3:
					return l.flags |= 65536, e = n & -n, l.lanes |= e, e = _s(l.stateNode, a, e), ns(l, e), !1;
				case 1:
					if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (pl === null || !pl.has(i)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = Pf(n), eo(n, e, l, a), ns(l, n), !1
			}
			l = l.return
		} while (l !== null);
		return !1
	}
	var Ms = Error(d(461)),
		Ce = !1;

	function Je(e, t, l, a) {
		t.child = e === null ? af(t, null, l, a) : Zl(t, e.child, l, a)
	}

	function to(e, t, l, a, n) {
		l = l.render;
		var i = t.ref;
		if ("ref" in a) {
			var s = {};
			for (var r in a) r !== "ref" && (s[r] = a[r])
		} else s = a;
		return Xl(t), a = fs(e, t, l, s, i, n), r = os(), e !== null && !Ce ? (ds(e, t, n), $t(e, t, n)) : (ie && r && Vu(t), t.flags |= 1, Je(e, t, a, n), t.child)
	}

	function lo(e, t, l, a, n) {
		if (e === null) {
			var i = l.type;
			return typeof i == "function" && !Lu(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, ao(e, t, i, a, n)) : (e = ni(l.type, null, a, t, t.mode, n), e.ref = t.ref, e.return = t, t.child = e)
		}
		if (i = e.child, !Bs(e, n)) {
			var s = i.memoizedProps;
			if (l = l.compare, l = l !== null ? l : Pa, l(s, a) && e.ref === t.ref) return $t(e, t, n)
		}
		return t.flags |= 1, e = Qt(i, a), e.ref = t.ref, e.return = t, t.child = e
	}

	function ao(e, t, l, a, n) {
		if (e !== null) {
			var i = e.memoizedProps;
			if (Pa(i, a) && e.ref === t.ref)
				if (Ce = !1, t.pendingProps = a = i, Bs(e, n))(e.flags & 131072) !== 0 && (Ce = !0);
				else return t.lanes = e.lanes, $t(e, t, n)
		}
		return ws(e, t, l, a, n)
	}

	function no(e, t, l, a) {
		var n = a.children,
			i = e !== null ? e.memoizedState : null;
		if (e === null && t.stateNode === null && (t.stateNode = {
				_visibility: 1,
				_pendingMarkers: null,
				_retryCache: null,
				_transitions: null
			}), a.mode === "hidden") {
			if ((t.flags & 128) !== 0) {
				if (i = i !== null ? i.baseLanes | l : l, e !== null) {
					for (a = t.child = e.child, n = 0; a !== null;) n = n | a.lanes | a.childLanes, a = a.sibling;
					a = n & ~i
				} else a = 0, t.child = null;
				return io(e, t, i, l, a)
			}
			if ((l & 536870912) !== 0) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && ci(t, i !== null ? i.cachePool : null), i !== null ? sf(t, i) : us(), cf(t);
			else return a = t.lanes = 536870912, io(e, t, i !== null ? i.baseLanes | l : l, l, a)
		} else i !== null ? (ci(t, i.cachePool), sf(t, i), xl(), t.memoizedState = null) : (e !== null && ci(t, null), us(), xl());
		return Je(e, t, n, l), t.child
	}

	function xn(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling
	}

	function io(e, t, l, a, n) {
		var i = es();
		return i = i === null ? null : {
			parent: Re._currentValue,
			pool: i
		}, t.memoizedState = {
			baseLanes: l,
			cachePool: i
		}, e !== null && ci(t, null), us(), cf(t), e !== null && ha(e, t, a, !0), t.childLanes = n, null
	}

	function Ei(e, t) {
		return t = Ai({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t
	}

	function uo(e, t, l) {
		return Zl(t, e.child, null, l), e = Ei(t, t.pendingProps), e.flags |= 2, ht(t), t.memoizedState = null, e
	}

	function oh(e, t, l) {
		var a = t.pendingProps,
			n = (t.flags & 128) !== 0;
		if (t.flags &= -129, e === null) {
			if (ie) {
				if (a.mode === "hidden") return e = Ei(t, a), t.lanes = 536870912, xn(null, e);
				if (cs(t), (e = Se) ? (e = pd(e, At), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
						dehydrated: e,
						treeContext: sl !== null ? {
							id: Ct,
							overflow: Ht
						} : null,
						retryLane: 536870912,
						hydrationErrors: null
					}, l = Lr(e), l.return = t, t.child = l, Ve = t, Se = null)) : e = null, e === null) throw rl(t);
				return t.lanes = 536870912, null
			}
			return Ei(t, a)
		}
		var i = e.memoizedState;
		if (i !== null) {
			var s = i.dehydrated;
			if (cs(t), n)
				if (t.flags & 256) t.flags &= -257, t = uo(e, t, l);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
			else throw Error(d(558));
			else if (Ce || ha(e, t, l, !1), n = (l & e.childLanes) !== 0, Ce || n) {
				if (a = ve, a !== null && (s = $c(a, l), s !== 0 && s !== i.retryLane)) throw i.retryLane = s, Hl(e, s), st(a, e, s), Ms;
				Ci(), t = uo(e, t, l)
			} else e = i.treeContext, Se = _t(s.nextSibling), Ve = t, ie = !0, cl = null, At = !1, e !== null && Vr(t, e), t = Ei(t, a), t.flags |= 4096;
			return t
		}
		return e = Qt(e.child, {
			mode: a.mode,
			children: a.children
		}), e.ref = t.ref, t.child = e, e.return = t, e
	}

	function zi(e, t) {
		var l = t.ref;
		if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof l != "function" && typeof l != "object") throw Error(d(284));
			(e === null || e.ref !== l) && (t.flags |= 4194816)
		}
	}

	function ws(e, t, l, a, n) {
		return Xl(t), l = fs(e, t, l, a, void 0, n), a = os(), e !== null && !Ce ? (ds(e, t, n), $t(e, t, n)) : (ie && a && Vu(t), t.flags |= 1, Je(e, t, l, n), t.child)
	}

	function so(e, t, l, a, n, i) {
		return Xl(t), t.updateQueue = null, l = ff(t, a, l, n), rf(e), a = os(), e !== null && !Ce ? (ds(e, t, i), $t(e, t, i)) : (ie && a && Vu(t), t.flags |= 1, Je(e, t, l, i), t.child)
	}

	function co(e, t, l, a, n) {
		if (Xl(t), t.stateNode === null) {
			var i = fa,
				s = l.contextType;
			typeof s == "object" && s !== null && (i = Ke(s)), i = new l(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Ts, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, ls(t), s = l.contextType, i.context = typeof s == "object" && s !== null ? Ke(s) : fa, i.state = t.memoizedState, s = l.getDerivedStateFromProps, typeof s == "function" && (As(t, l, s, a), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (s = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), s !== i.state && Ts.enqueueReplaceState(i, i.state, null), fn(t, a, i, n), rn(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !0
		} else if (e === null) {
			i = t.stateNode;
			var r = t.memoizedProps,
				m = Kl(l, r);
			i.props = m;
			var b = i.context,
				T = l.contextType;
			s = fa, typeof T == "object" && T !== null && (s = Ke(T));
			var O = l.getDerivedStateFromProps;
			T = typeof O == "function" || typeof i.getSnapshotBeforeUpdate == "function", r = t.pendingProps !== r, T || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (r || b !== s) && kf(t, i, a, s), ol = !1;
			var N = t.memoizedState;
			i.state = N, fn(t, a, i, n), rn(), b = t.memoizedState, r || N !== b || ol ? (typeof O == "function" && (As(t, l, O, a), b = t.memoizedState), (m = ol || Jf(t, l, m, a, N, b, s)) ? (T || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = b), i.props = a, i.state = b, i.context = s, a = m) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !1)
		} else {
			i = t.stateNode, as(e, t), s = t.memoizedProps, T = Kl(l, s), i.props = T, O = t.pendingProps, N = i.context, b = l.contextType, m = fa, typeof b == "object" && b !== null && (m = Ke(b)), r = l.getDerivedStateFromProps, (b = typeof r == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== O || N !== m) && kf(t, i, a, m), ol = !1, N = t.memoizedState, i.state = N, fn(t, a, i, n), rn();
			var z = t.memoizedState;
			s !== O || N !== z || ol || e !== null && e.dependencies !== null && ui(e.dependencies) ? (typeof r == "function" && (As(t, l, r, a), z = t.memoizedState), (T = ol || Jf(t, l, T, a, N, z, m) || e !== null && e.dependencies !== null && ui(e.dependencies)) ? (b || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, z, m), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(a, z, m)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = z), i.props = a, i.state = z, i.context = m, a = T) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), a = !1)
		}
		return i = a, zi(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = Zl(t, e.child, null, n), t.child = Zl(t, null, l, n)) : Je(e, t, l, n), t.memoizedState = i.state, e = t.child) : e = $t(e, t, n), e
	}

	function ro(e, t, l, a) {
		return ql(), t.flags |= 256, Je(e, t, l, a), t.child
	}
	var Os = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};

	function Ds(e) {
		return {
			baseLanes: e,
			cachePool: Fr()
		}
	}

	function Rs(e, t, l) {
		return e = e !== null ? e.childLanes & ~l : 0, t && (e |= yt), e
	}

	function fo(e, t, l) {
		var a = t.pendingProps,
			n = !1,
			i = (t.flags & 128) !== 0,
			s;
		if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (Oe.current & 2) !== 0), s && (n = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
			if (ie) {
				if (n ? hl(t) : xl(), (e = Se) ? (e = pd(e, At), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
						dehydrated: e,
						treeContext: sl !== null ? {
							id: Ct,
							overflow: Ht
						} : null,
						retryLane: 536870912,
						hydrationErrors: null
					}, l = Lr(e), l.return = t, t.child = l, Ve = t, Se = null)) : e = null, e === null) throw rl(t);
				return xc(e) ? t.lanes = 32 : t.lanes = 536870912, null
			}
			var r = a.children;
			return a = a.fallback, n ? (xl(), n = t.mode, r = Ai({
				mode: "hidden",
				children: r
			}, n), a = Bl(a, n, l, null), r.return = t, a.return = t, r.sibling = a, t.child = r, a = t.child, a.memoizedState = Ds(l), a.childLanes = Rs(e, s, l), t.memoizedState = Os, xn(null, a)) : (hl(t), Us(t, r))
		}
		var m = e.memoizedState;
		if (m !== null && (r = m.dehydrated, r !== null)) {
			if (i) t.flags & 256 ? (hl(t), t.flags &= -257, t = Cs(e, t, l)) : t.memoizedState !== null ? (xl(), t.child = e.child, t.flags |= 128, t = null) : (xl(), r = a.fallback, n = t.mode, a = Ai({
				mode: "visible",
				children: a.children
			}, n), r = Bl(r, n, l, null), r.flags |= 2, a.return = t, r.return = t, a.sibling = r, t.child = a, Zl(t, e.child, null, l), a = t.child, a.memoizedState = Ds(l), a.childLanes = Rs(e, s, l), t.memoizedState = Os, t = xn(null, a));
			else if (hl(t), xc(r)) {
				if (s = r.nextSibling && r.nextSibling.dataset, s) var b = s.dgst;
				s = b, a = Error(d(419)), a.stack = "", a.digest = s, ln({
					value: a,
					source: null,
					stack: null
				}), t = Cs(e, t, l)
			} else if (Ce || ha(e, t, l, !1), s = (l & e.childLanes) !== 0, Ce || s) {
				if (s = ve, s !== null && (a = $c(s, l), a !== 0 && a !== m.retryLane)) throw m.retryLane = a, Hl(e, a), st(s, e, a), Ms;
				hc(r) || Ci(), t = Cs(e, t, l)
			} else hc(r) ? (t.flags |= 192, t.child = e.child, t = null) : (e = m.treeContext, Se = _t(r.nextSibling), Ve = t, ie = !0, cl = null, At = !1, e !== null && Vr(t, e), t = Us(t, a.children), t.flags |= 4096);
			return t
		}
		return n ? (xl(), r = a.fallback, n = t.mode, m = e.child, b = m.sibling, a = Qt(m, {
			mode: "hidden",
			children: a.children
		}), a.subtreeFlags = m.subtreeFlags & 65011712, b !== null ? r = Qt(b, r) : (r = Bl(r, n, l, null), r.flags |= 2), r.return = t, a.return = t, a.sibling = r, t.child = a, xn(null, a), a = t.child, r = e.child.memoizedState, r === null ? r = Ds(l) : (n = r.cachePool, n !== null ? (m = Re._currentValue, n = n.parent !== m ? {
			parent: m,
			pool: m
		} : n) : n = Fr(), r = {
			baseLanes: r.baseLanes | l,
			cachePool: n
		}), a.memoizedState = r, a.childLanes = Rs(e, s, l), t.memoizedState = Os, xn(e.child, a)) : (hl(t), l = e.child, e = l.sibling, l = Qt(l, {
			mode: "visible",
			children: a.children
		}), l.return = t, l.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = l, t.memoizedState = null, l)
	}

	function Us(e, t) {
		return t = Ai({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t
	}

	function Ai(e, t) {
		return e = dt(22, e, null, t), e.lanes = 0, e
	}

	function Cs(e, t, l) {
		return Zl(t, e.child, null, l), e = Us(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
	}

	function oo(e, t, l) {
		e.lanes |= t;
		var a = e.alternate;
		a !== null && (a.lanes |= t), Wu(e.return, t, l)
	}

	function Hs(e, t, l, a, n, i) {
		var s = e.memoizedState;
		s === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: a,
			tail: l,
			tailMode: n,
			treeForkCount: i
		} : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = a, s.tail = l, s.tailMode = n, s.treeForkCount = i)
	}

	function mo(e, t, l) {
		var a = t.pendingProps,
			n = a.revealOrder,
			i = a.tail;
		a = a.children;
		var s = Oe.current,
			r = (s & 2) !== 0;
		if (r ? (s = s & 1 | 2, t.flags |= 128) : s &= 1, R(Oe, s), Je(e, t, a, l), a = ie ? tn : 0, !r && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && oo(e, l, t);
			else if (e.tag === 19) oo(e, l, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue
			}
			if (e === t) break e;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break e;
				e = e.return
			}
			e.sibling.return = e.return, e = e.sibling
		}
		switch (n) {
			case "forwards":
				for (l = t.child, n = null; l !== null;) e = l.alternate, e !== null && hi(e) === null && (n = l), l = l.sibling;
				l = n, l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null), Hs(t, !1, n, l, i, a);
				break;
			case "backwards":
			case "unstable_legacy-backwards":
				for (l = null, n = t.child, t.child = null; n !== null;) {
					if (e = n.alternate, e !== null && hi(e) === null) {
						t.child = n;
						break
					}
					e = n.sibling, n.sibling = l, l = n, n = e
				}
				Hs(t, !0, l, null, i, a);
				break;
			case "together":
				Hs(t, !1, null, null, void 0, a);
				break;
			default:
				t.memoizedState = null
		}
		return t.child
	}

	function $t(e, t, l) {
		if (e !== null && (t.dependencies = e.dependencies), vl |= t.lanes, (l & t.childLanes) === 0)
			if (e !== null) {
				if (ha(e, t, l, !1), (l & t.childLanes) === 0) return null
			} else return null;
		if (e !== null && t.child !== e.child) throw Error(d(153));
		if (t.child !== null) {
			for (e = t.child, l = Qt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null;) e = e.sibling, l = l.sibling = Qt(e, e.pendingProps), l.return = t;
			l.sibling = null
		}
		return t.child
	}

	function Bs(e, t) {
		return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ui(e)))
	}

	function dh(e, t, l) {
		switch (t.tag) {
			case 3:
				Ie(t, t.stateNode.containerInfo), fl(t, Re, e.memoizedState.cache), ql();
				break;
			case 27:
			case 5:
				Xa(t);
				break;
			case 4:
				Ie(t, t.stateNode.containerInfo);
				break;
			case 10:
				fl(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, cs(t), null;
				break;
			case 13:
				var a = t.memoizedState;
				if (a !== null) return a.dehydrated !== null ? (hl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? fo(e, t, l) : (hl(t), e = $t(e, t, l), e !== null ? e.sibling : null);
				hl(t);
				break;
			case 19:
				var n = (e.flags & 128) !== 0;
				if (a = (l & t.childLanes) !== 0, a || (ha(e, t, l, !1), a = (l & t.childLanes) !== 0), n) {
					if (a) return mo(e, t, l);
					t.flags |= 128
				}
				if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), R(Oe, Oe.current), a) break;
				return null;
			case 22:
				return t.lanes = 0, no(e, t, l, t.pendingProps);
			case 24:
				fl(t, Re, e.memoizedState.cache)
		}
		return $t(e, t, l)
	}

	function ho(e, t, l) {
		if (e !== null)
			if (e.memoizedProps !== t.pendingProps) Ce = !0;
			else {
				if (!Bs(e, l) && (t.flags & 128) === 0) return Ce = !1, dh(e, t, l);
				Ce = (e.flags & 131072) !== 0
			}
		else Ce = !1, ie && (t.flags & 1048576) !== 0 && Zr(t, tn, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				e: {
					var a = t.pendingProps;
					if (e = Ll(t.elementType), t.type = e, typeof e == "function") Lu(e) ? (a = Kl(e, a), t.tag = 1, t = co(null, t, e, a, l)) : (t.tag = 0, t = ws(null, t, e, a, l));
					else {
						if (e != null) {
							var n = e.$$typeof;
							if (n === Te) {
								t.tag = 11, t = to(null, t, e, a, l);
								break e
							} else if (n === $) {
								t.tag = 14, t = lo(null, t, e, a, l);
								break e
							}
						}
						throw t = pt(e) || e, Error(d(306, t, ""))
					}
				}
				return t;
			case 0:
				return ws(e, t, t.type, t.pendingProps, l);
			case 1:
				return a = t.type, n = Kl(a, t.pendingProps), co(e, t, a, n, l);
			case 3:
				e: {
					if (Ie(t, t.stateNode.containerInfo), e === null) throw Error(d(387));a = t.pendingProps;
					var i = t.memoizedState;n = i.element,
					as(e, t),
					fn(t, a, null, l);
					var s = t.memoizedState;
					if (a = s.cache, fl(t, Re, a), a !== i.cache && Fu(t, [Re], l, !0), rn(), a = s.element, i.isDehydrated)
						if (i = {
								element: a,
								isDehydrated: !1,
								cache: s.cache
							}, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
							t = ro(e, t, a, l);
							break e
						} else if (a !== n) {
						n = Nt(Error(d(424)), t), ln(n), t = ro(e, t, a, l);
						break e
					} else {
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default:
								e = e.nodeName === "HTML" ? e.ownerDocument.body : e
						}
						for (Se = _t(e.firstChild), Ve = t, ie = !0, cl = null, At = !0, l = af(t, null, a, l), t.child = l; l;) l.flags = l.flags & -3 | 4096, l = l.sibling
					} else {
						if (ql(), a === n) {
							t = $t(e, t, l);
							break e
						}
						Je(e, t, a, l)
					}
					t = t.child
				}
				return t;
			case 26:
				return zi(e, t), e === null ? (l = zd(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : ie || (l = t.type, e = t.pendingProps, a = Li(ee.current).createElement(l), a[Ze] = t, a[tt] = e, ke(a, l, e), Ye(a), t.stateNode = a) : t.memoizedState = zd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27:
				return Xa(t), e === null && ie && (a = t.stateNode = jd(t.type, t.pendingProps, ee.current), Ve = t, At = !0, n = Se, Nl(t.type) ? (yc = n, Se = _t(a.firstChild)) : Se = n), Je(e, t, t.pendingProps.children, l), zi(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5:
				return e === null && ie && ((n = a = Se) && (a = Lh(a, t.type, t.pendingProps, At), a !== null ? (t.stateNode = a, Ve = t, Se = _t(a.firstChild), At = !1, n = !0) : n = !1), n || rl(t)), Xa(t), n = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = i.children, oc(n, i) ? a = null : s !== null && oc(n, s) && (t.flags |= 32), t.memoizedState !== null && (n = fs(e, t, ah, null, null, l), wn._currentValue = n), zi(e, t), Je(e, t, a, l), t.child;
			case 6:
				return e === null && ie && ((e = l = Se) && (l = Qh(l, t.pendingProps, At), l !== null ? (t.stateNode = l, Ve = t, Se = null, e = !0) : e = !1), e || rl(t)), null;
			case 13:
				return fo(e, t, l);
			case 4:
				return Ie(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = Zl(t, null, a, l) : Je(e, t, a, l), t.child;
			case 11:
				return to(e, t, t.type, t.pendingProps, l);
			case 7:
				return Je(e, t, t.pendingProps, l), t.child;
			case 8:
				return Je(e, t, t.pendingProps.children, l), t.child;
			case 12:
				return Je(e, t, t.pendingProps.children, l), t.child;
			case 10:
				return a = t.pendingProps, fl(t, t.type, a.value), Je(e, t, a.children, l), t.child;
			case 9:
				return n = t.type._context, a = t.pendingProps.children, Xl(t), n = Ke(n), a = a(n), t.flags |= 1, Je(e, t, a, l), t.child;
			case 14:
				return lo(e, t, t.type, t.pendingProps, l);
			case 15:
				return ao(e, t, t.type, t.pendingProps, l);
			case 19:
				return mo(e, t, l);
			case 31:
				return oh(e, t, l);
			case 22:
				return no(e, t, l, t.pendingProps);
			case 24:
				return Xl(t), a = Ke(Re), e === null ? (n = es(), n === null && (n = ve, i = Iu(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= l), n = i), t.memoizedState = {
					parent: a,
					cache: n
				}, ls(t), fl(t, Re, n)) : ((e.lanes & l) !== 0 && (as(e, t), fn(t, null, null, l), rn()), n = e.memoizedState, i = t.memoizedState, n.parent !== a ? (n = {
					parent: a,
					cache: a
				}, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), fl(t, Re, a)) : (a = i.cache, fl(t, Re, a), a !== n.cache && Fu(t, [Re], l, !0))), Je(e, t, t.pendingProps.children, l), t.child;
			case 29:
				throw t.pendingProps
		}
		throw Error(d(156, t.tag))
	}

	function Wt(e) {
		e.flags |= 4
	}

	function qs(e, t, l, a, n) {
		if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
			if (e.flags |= 16777216, (n & 335544128) === n)
				if (e.stateNode.complete) e.flags |= 8192;
				else if (Go()) e.flags |= 8192;
			else throw Ql = fi, ts
		} else e.flags &= -16777217
	}

	function xo(e, t) {
		if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
		else if (e.flags |= 16777216, !wd(t))
			if (Go()) e.flags |= 8192;
			else throw Ql = fi, ts
	}

	function Ti(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Kc() : 536870912, e.lanes |= t, Aa |= t)
	}

	function yn(e, t) {
		if (!ie) switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var l = null; t !== null;) t.alternate !== null && (l = t), t = t.sibling;
				l === null ? e.tail = null : l.sibling = null;
				break;
			case "collapsed":
				l = e.tail;
				for (var a = null; l !== null;) l.alternate !== null && (a = l), l = l.sibling;
				a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null
		}
	}

	function je(e) {
		var t = e.alternate !== null && e.alternate.child === e.child,
			l = 0,
			a = 0;
		if (t)
			for (var n = e.child; n !== null;) l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = e, n = n.sibling;
		else
			for (n = e.child; n !== null;) l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = e, n = n.sibling;
		return e.subtreeFlags |= a, e.childLanes = l, t
	}

	function mh(e, t, l) {
		var a = t.pendingProps;
		switch (Ku(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return je(t), null;
			case 1:
				return je(t), null;
			case 3:
				return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Kt(Re), we(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (ma(t) ? Wt(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ku())), je(t), null;
			case 26:
				var n = t.type,
					i = t.memoizedState;
				return e === null ? (Wt(t), i !== null ? (je(t), xo(t, i)) : (je(t), qs(t, n, null, a, l))) : i ? i !== e.memoizedState ? (Wt(t), je(t), xo(t, i)) : (je(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Wt(t), je(t), qs(t, n, e, a, l)), null;
			case 27:
				if (qn(t), l = ee.current, n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && Wt(t);
				else {
					if (!a) {
						if (t.stateNode === null) throw Error(d(166));
						return je(t), null
					}
					e = B.current, ma(t) ? Kr(t) : (e = jd(n, a, l), t.stateNode = e, Wt(t))
				}
				return je(t), null;
			case 5:
				if (qn(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && Wt(t);
				else {
					if (!a) {
						if (t.stateNode === null) throw Error(d(166));
						return je(t), null
					}
					if (i = B.current, ma(t)) Kr(t);
					else {
						var s = Li(ee.current);
						switch (i) {
							case 1:
								i = s.createElementNS("http://www.w3.org/2000/svg", n);
								break;
							case 2:
								i = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
								break;
							default:
								switch (n) {
									case "svg":
										i = s.createElementNS("http://www.w3.org/2000/svg", n);
										break;
									case "math":
										i = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
										break;
									case "script":
										i = s.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(i.firstChild);
										break;
									case "select":
										i = typeof a.is == "string" ? s.createElement("select", {
											is: a.is
										}) : s.createElement("select"), a.multiple ? i.multiple = !0 : a.size && (i.size = a.size);
										break;
									default:
										i = typeof a.is == "string" ? s.createElement(n, {
											is: a.is
										}) : s.createElement(n)
								}
						}
						i[Ze] = t, i[tt] = a;
						e: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) i.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue
							}
							if (s === t) break e;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break e;
								s = s.return
							}
							s.sibling.return = s.return, s = s.sibling
						}
						t.stateNode = i;
						e: switch (ke(i, n, a), n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								a = !!a.autoFocus;
								break e;
							case "img":
								a = !0;
								break e;
							default:
								a = !1
						}
						a && Wt(t)
					}
				}
				return je(t), qs(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== a && Wt(t);
				else {
					if (typeof a != "string" && t.stateNode === null) throw Error(d(166));
					if (e = ee.current, ma(t)) {
						if (e = t.stateNode, l = t.memoizedProps, a = null, n = Ve, n !== null) switch (n.tag) {
							case 27:
							case 5:
								a = n.memoizedProps
						}
						e[Ze] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || od(e.nodeValue, l)), e || rl(t, !0)
					} else e = Li(e).createTextNode(a), e[Ze] = t, t.stateNode = e
				}
				return je(t), null;
			case 31:
				if (l = t.memoizedState, e === null || e.memoizedState !== null) {
					if (a = ma(t), l !== null) {
						if (e === null) {
							if (!a) throw Error(d(318));
							if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(557));
							e[Ze] = t
						} else ql(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
						je(t), e = !1
					} else l = ku(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
					if (!e) return t.flags & 256 ? (ht(t), t) : (ht(t), null);
					if ((t.flags & 128) !== 0) throw Error(d(558))
				}
				return je(t), null;
			case 13:
				if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (n = ma(t), a !== null && a.dehydrated !== null) {
						if (e === null) {
							if (!n) throw Error(d(318));
							if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(d(317));
							n[Ze] = t
						} else ql(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
						je(t), n = !1
					} else n = ku(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
					if (!n) return t.flags & 256 ? (ht(t), t) : (ht(t), null)
				}
				return ht(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== n && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Ti(t, t.updateQueue), je(t), null);
			case 4:
				return we(), e === null && uc(t.stateNode.containerInfo), je(t), null;
			case 10:
				return Kt(t.type), je(t), null;
			case 19:
				if (_(Oe), a = t.memoizedState, a === null) return je(t), null;
				if (n = (t.flags & 128) !== 0, i = a.rendering, i === null)
					if (n) yn(a, !1);
					else {
						if (Ae !== 0 || e !== null && (e.flags & 128) !== 0)
							for (e = t.child; e !== null;) {
								if (i = hi(e), i !== null) {
									for (t.flags |= 128, yn(a, !1), e = i.updateQueue, t.updateQueue = e, Ti(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null;) Gr(l, e), l = l.sibling;
									return R(Oe, Oe.current & 1 | 2), ie && Zt(t, a.treeForkCount), t.child
								}
								e = e.sibling
							}
						a.tail !== null && ct() > Di && (t.flags |= 128, n = !0, yn(a, !1), t.lanes = 4194304)
					}
				else {
					if (!n)
						if (e = hi(i), e !== null) {
							if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, Ti(t, e), yn(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !ie) return je(t), null
						} else 2 * ct() - a.renderingStartTime > Di && l !== 536870912 && (t.flags |= 128, n = !0, yn(a, !1), t.lanes = 4194304);
					a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i)
				}
				return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = ct(), e.sibling = null, l = Oe.current, R(Oe, n ? l & 1 | 2 : l & 1), ie && Zt(t, a.treeForkCount), e) : (je(t), null);
			case 22:
			case 23:
				return ht(t), ss(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), l = t.updateQueue, l !== null && Ti(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && _(Gl), null;
			case 24:
				return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Kt(Re), je(t), null;
			case 25:
				return null;
			case 30:
				return null
		}
		throw Error(d(156, t.tag))
	}

	function hh(e, t) {
		switch (Ku(t), t.tag) {
			case 1:
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3:
				return Kt(Re), we(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5:
				return qn(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (ht(t), t.alternate === null) throw Error(d(340));
					ql()
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (ht(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(d(340));
					ql()
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19:
				return _(Oe), null;
			case 4:
				return we(), null;
			case 10:
				return Kt(t.type), null;
			case 22:
			case 23:
				return ht(t), ss(), e !== null && _(Gl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24:
				return Kt(Re), null;
			case 25:
				return null;
			default:
				return null
		}
	}

	function yo(e, t) {
		switch (Ku(t), t.tag) {
			case 3:
				Kt(Re), we();
				break;
			case 26:
			case 27:
			case 5:
				qn(t);
				break;
			case 4:
				we();
				break;
			case 31:
				t.memoizedState !== null && ht(t);
				break;
			case 13:
				ht(t);
				break;
			case 19:
				_(Oe);
				break;
			case 10:
				Kt(t.type);
				break;
			case 22:
			case 23:
				ht(t), ss(), e !== null && _(Gl);
				break;
			case 24:
				Kt(Re)
		}
	}

	function gn(e, t) {
		try {
			var l = t.updateQueue,
				a = l !== null ? l.lastEffect : null;
			if (a !== null) {
				var n = a.next;
				l = n;
				do {
					if ((l.tag & e) === e) {
						a = void 0;
						var i = l.create,
							s = l.inst;
						a = i(), s.destroy = a
					}
					l = l.next
				} while (l !== n)
			}
		} catch (r) {
			de(t, t.return, r)
		}
	}

	function yl(e, t, l) {
		try {
			var a = t.updateQueue,
				n = a !== null ? a.lastEffect : null;
			if (n !== null) {
				var i = n.next;
				a = i;
				do {
					if ((a.tag & e) === e) {
						var s = a.inst,
							r = s.destroy;
						if (r !== void 0) {
							s.destroy = void 0, n = t;
							var m = l,
								b = r;
							try {
								b()
							} catch (T) {
								de(n, m, T)
							}
						}
					}
					a = a.next
				} while (a !== i)
			}
		} catch (T) {
			de(t, t.return, T)
		}
	}

	function go(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var l = e.stateNode;
			try {
				uf(t, l)
			} catch (a) {
				de(e, e.return, a)
			}
		}
	}

	function vo(e, t, l) {
		l.props = Kl(e.type, e.memoizedProps), l.state = e.memoizedState;
		try {
			l.componentWillUnmount()
		} catch (a) {
			de(e, t, a)
		}
	}

	function vn(e, t) {
		try {
			var l = e.ref;
			if (l !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var a = e.stateNode;
						break;
					case 30:
						a = e.stateNode;
						break;
					default:
						a = e.stateNode
				}
				typeof l == "function" ? e.refCleanup = l(a) : l.current = a
			}
		} catch (n) {
			de(e, t, n)
		}
	}

	function Bt(e, t) {
		var l = e.ref,
			a = e.refCleanup;
		if (l !== null)
			if (typeof a == "function") try {
				a()
			} catch (n) {
				de(e, t, n)
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
			} else if (typeof l == "function") try {
				l(null)
			} catch (n) {
				de(e, t, n)
			} else l.current = null
	}

	function po(e) {
		var t = e.type,
			l = e.memoizedProps,
			a = e.stateNode;
		try {
			e: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					l.autoFocus && a.focus();
					break e;
				case "img":
					l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet)
			}
		}
		catch (n) {
			de(e, e.return, n)
		}
	}

	function Ys(e, t, l) {
		try {
			var a = e.stateNode;
			Hh(a, e.type, l, t), a[tt] = t
		} catch (n) {
			de(e, e.return, n)
		}
	}

	function bo(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Nl(e.type) || e.tag === 4
	}

	function Xs(e) {
		e: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || bo(e.return)) return null;
				e = e.return
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && Nl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
				e.child.return = e, e = e.child
			}
			if (!(e.flags & 2)) return e.stateNode
		}
	}

	function Gs(e, t, l) {
		var a = e.tag;
		if (a === 5 || a === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Gt));
		else if (a !== 4 && (a === 27 && Nl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
			for (Gs(e, t, l), e = e.sibling; e !== null;) Gs(e, t, l), e = e.sibling
	}

	function _i(e, t, l) {
		var a = e.tag;
		if (a === 5 || a === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
		else if (a !== 4 && (a === 27 && Nl(e.type) && (l = e.stateNode), e = e.child, e !== null))
			for (_i(e, t, l), e = e.sibling; e !== null;) _i(e, t, l), e = e.sibling
	}

	function So(e) {
		var t = e.stateNode,
			l = e.memoizedProps;
		try {
			for (var a = e.type, n = t.attributes; n.length;) t.removeAttributeNode(n[0]);
			ke(t, a, l), t[Ze] = e, t[tt] = l
		} catch (i) {
			de(e, e.return, i)
		}
	}
	var Ft = !1,
		He = !1,
		Ls = !1,
		jo = typeof WeakSet == "function" ? WeakSet : Set,
		Xe = null;

	function xh(e, t) {
		if (e = e.containerInfo, rc = $i, e = Dr(e), Cu(e)) {
			if ("selectionStart" in e) var l = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else e: {
				l = (l = e.ownerDocument) && l.defaultView || window;
				var a = l.getSelection && l.getSelection();
				if (a && a.rangeCount !== 0) {
					l = a.anchorNode;
					var n = a.anchorOffset,
						i = a.focusNode;
					a = a.focusOffset;
					try {
						l.nodeType, i.nodeType
					} catch {
						l = null;
						break e
					}
					var s = 0,
						r = -1,
						m = -1,
						b = 0,
						T = 0,
						O = e,
						N = null;
					t: for (;;) {
						for (var z; O !== l || n !== 0 && O.nodeType !== 3 || (r = s + n), O !== i || a !== 0 && O.nodeType !== 3 || (m = s + a), O.nodeType === 3 && (s += O.nodeValue.length), (z = O.firstChild) !== null;) N = O, O = z;
						for (;;) {
							if (O === e) break t;
							if (N === l && ++b === n && (r = s), N === i && ++T === a && (m = s), (z = O.nextSibling) !== null) break;
							O = N, N = O.parentNode
						}
						O = z
					}
					l = r === -1 || m === -1 ? null : {
						start: r,
						end: m
					}
				} else l = null
			}
			l = l || {
				start: 0,
				end: 0
			}
		} else l = null;
		for (fc = {
				focusedElem: e,
				selectionRange: l
			}, $i = !1, Xe = t; Xe !== null;)
			if (t = Xe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Xe = e;
			else
				for (; Xe !== null;) {
					switch (t = Xe, i = t.alternate, e = t.flags, t.tag) {
						case 0:
							if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
								for (l = 0; l < e.length; l++) n = e[l], n.ref.impl = n.nextImpl;
							break;
						case 11:
						case 15:
							break;
						case 1:
							if ((e & 1024) !== 0 && i !== null) {
								e = void 0, l = t, n = i.memoizedProps, i = i.memoizedState, a = l.stateNode;
								try {
									var q = Kl(l.type, n);
									e = a.getSnapshotBeforeUpdate(q, i), a.__reactInternalSnapshotBeforeUpdate = e
								} catch (Q) {
									de(l, l.return, Q)
								}
							}
							break;
						case 3:
							if ((e & 1024) !== 0) {
								if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9) mc(e);
								else if (l === 1) switch (e.nodeName) {
									case "HEAD":
									case "HTML":
									case "BODY":
										mc(e);
										break;
									default:
										e.textContent = ""
								}
							}
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17:
							break;
						default:
							if ((e & 1024) !== 0) throw Error(d(163))
					}
					if (e = t.sibling, e !== null) {
						e.return = t.return, Xe = e;
						break
					}
					Xe = t.return
				}
	}

	function No(e, t, l) {
		var a = l.flags;
		switch (l.tag) {
			case 0:
			case 11:
			case 15:
				Pt(e, l), a & 4 && gn(5, l);
				break;
			case 1:
				if (Pt(e, l), a & 4)
					if (e = l.stateNode, t === null) try {
						e.componentDidMount()
					} catch (s) {
						de(l, l.return, s)
					} else {
						var n = Kl(l.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate)
						} catch (s) {
							de(l, l.return, s)
						}
					}
				a & 64 && go(l), a & 512 && vn(l, l.return);
				break;
			case 3:
				if (Pt(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
					if (t = null, l.child !== null) switch (l.child.tag) {
						case 27:
						case 5:
							t = l.child.stateNode;
							break;
						case 1:
							t = l.child.stateNode
					}
					try {
						uf(e, t)
					} catch (s) {
						de(l, l.return, s)
					}
				}
				break;
			case 27:
				t === null && a & 4 && So(l);
			case 26:
			case 5:
				Pt(e, l), t === null && a & 4 && po(l), a & 512 && vn(l, l.return);
				break;
			case 12:
				Pt(e, l);
				break;
			case 31:
				Pt(e, l), a & 4 && Ao(e, l);
				break;
			case 13:
				Pt(e, l), a & 4 && To(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Eh.bind(null, l), Zh(e, l))));
				break;
			case 22:
				if (a = l.memoizedState !== null || Ft, !a) {
					t = t !== null && t.memoizedState !== null || He, n = Ft;
					var i = He;
					Ft = a, (He = t) && !i ? el(e, l, (l.subtreeFlags & 8772) !== 0) : Pt(e, l), Ft = n, He = i
				}
				break;
			case 30:
				break;
			default:
				Pt(e, l)
		}
	}

	function Eo(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, Eo(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && vu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
	}
	var Ne = null,
		at = !1;

	function It(e, t, l) {
		for (l = l.child; l !== null;) zo(e, t, l), l = l.sibling
	}

	function zo(e, t, l) {
		if (rt && typeof rt.onCommitFiberUnmount == "function") try {
			rt.onCommitFiberUnmount(Ga, l)
		} catch {}
		switch (l.tag) {
			case 26:
				He || Bt(l, t), It(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
				break;
			case 27:
				He || Bt(l, t);
				var a = Ne,
					n = at;
				Nl(l.type) && (Ne = l.stateNode, at = !1), It(e, t, l), Tn(l.stateNode), Ne = a, at = n;
				break;
			case 5:
				He || Bt(l, t);
			case 6:
				if (a = Ne, n = at, Ne = null, It(e, t, l), Ne = a, at = n, Ne !== null)
					if (at) try {
						(Ne.nodeType === 9 ? Ne.body : Ne.nodeName === "HTML" ? Ne.ownerDocument.body : Ne).removeChild(l.stateNode)
					} catch (i) {
						de(l, t, i)
					} else try {
						Ne.removeChild(l.stateNode)
					} catch (i) {
						de(l, t, i)
					}
				break;
			case 18:
				Ne !== null && (at ? (e = Ne, gd(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), Ua(e)) : gd(Ne, l.stateNode));
				break;
			case 4:
				a = Ne, n = at, Ne = l.stateNode.containerInfo, at = !0, It(e, t, l), Ne = a, at = n;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				yl(2, l, t), He || yl(4, l, t), It(e, t, l);
				break;
			case 1:
				He || (Bt(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && vo(l, t, a)), It(e, t, l);
				break;
			case 21:
				It(e, t, l);
				break;
			case 22:
				He = (a = He) || l.memoizedState !== null, It(e, t, l), He = a;
				break;
			default:
				It(e, t, l)
		}
	}

	function Ao(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Ua(e)
			} catch (l) {
				de(t, t.return, l)
			}
		}
	}

	function To(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Ua(e)
		} catch (l) {
			de(t, t.return, l)
		}
	}

	function yh(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new jo), t;
			case 22:
				return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new jo), t;
			default:
				throw Error(d(435, e.tag))
		}
	}

	function Mi(e, t) {
		var l = yh(e);
		t.forEach(function(a) {
			if (!l.has(a)) {
				l.add(a);
				var n = zh.bind(null, e, a);
				a.then(n, n)
			}
		})
	}

	function nt(e, t) {
		var l = t.deletions;
		if (l !== null)
			for (var a = 0; a < l.length; a++) {
				var n = l[a],
					i = e,
					s = t,
					r = s;
				e: for (; r !== null;) {
					switch (r.tag) {
						case 27:
							if (Nl(r.type)) {
								Ne = r.stateNode, at = !1;
								break e
							}
							break;
						case 5:
							Ne = r.stateNode, at = !1;
							break e;
						case 3:
						case 4:
							Ne = r.stateNode.containerInfo, at = !0;
							break e
					}
					r = r.return
				}
				if (Ne === null) throw Error(d(160));
				zo(i, s, n), Ne = null, at = !1, i = n.alternate, i !== null && (i.return = null), n.return = null
			}
		if (t.subtreeFlags & 13886)
			for (t = t.child; t !== null;) _o(t, e), t = t.sibling
	}
	var Ot = null;

	function _o(e, t) {
		var l = e.alternate,
			a = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				nt(t, e), it(e), a & 4 && (yl(3, e, e.return), gn(3, e), yl(5, e, e.return));
				break;
			case 1:
				nt(t, e), it(e), a & 512 && (He || l === null || Bt(l, l.return)), a & 64 && Ft && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
				break;
			case 26:
				var n = Ot;
				if (nt(t, e), it(e), a & 512 && (He || l === null || Bt(l, l.return)), a & 4) {
					var i = l !== null ? l.memoizedState : null;
					if (a = e.memoizedState, l === null)
						if (a === null)
							if (e.stateNode === null) {
								e: {
									a = e.type,
									l = e.memoizedProps,
									n = n.ownerDocument || n;t: switch (a) {
										case "title":
											i = n.getElementsByTagName("title")[0], (!i || i[Za] || i[Ze] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(a), n.head.insertBefore(i, n.querySelector("head > title"))), ke(i, a, l), i[Ze] = e, Ye(i), a = i;
											break e;
										case "link":
											var s = _d("link", "href", n).get(a + (l.href || ""));
											if (s) {
												for (var r = 0; r < s.length; r++)
													if (i = s[r], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
														s.splice(r, 1);
														break t
													}
											}
											i = n.createElement(a), ke(i, a, l), n.head.appendChild(i);
											break;
										case "meta":
											if (s = _d("meta", "content", n).get(a + (l.content || ""))) {
												for (r = 0; r < s.length; r++)
													if (i = s[r], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
														s.splice(r, 1);
														break t
													}
											}
											i = n.createElement(a), ke(i, a, l), n.head.appendChild(i);
											break;
										default:
											throw Error(d(468, a))
									}
									i[Ze] = e,
									Ye(i),
									a = i
								}
								e.stateNode = a
							}
					else Md(n, e.type, e.stateNode);
					else e.stateNode = Td(n, a, e.memoizedProps);
					else i !== a ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, a === null ? Md(n, e.type, e.stateNode) : Td(n, a, e.memoizedProps)) : a === null && e.stateNode !== null && Ys(e, e.memoizedProps, l.memoizedProps)
				}
				break;
			case 27:
				nt(t, e), it(e), a & 512 && (He || l === null || Bt(l, l.return)), l !== null && a & 4 && Ys(e, e.memoizedProps, l.memoizedProps);
				break;
			case 5:
				if (nt(t, e), it(e), a & 512 && (He || l === null || Bt(l, l.return)), e.flags & 32) {
					n = e.stateNode;
					try {
						aa(n, "")
					} catch (q) {
						de(e, e.return, q)
					}
				}
				a & 4 && e.stateNode != null && (n = e.memoizedProps, Ys(e, n, l !== null ? l.memoizedProps : n)), a & 1024 && (Ls = !0);
				break;
			case 6:
				if (nt(t, e), it(e), a & 4) {
					if (e.stateNode === null) throw Error(d(162));
					a = e.memoizedProps, l = e.stateNode;
					try {
						l.nodeValue = a
					} catch (q) {
						de(e, e.return, q)
					}
				}
				break;
			case 3:
				if (Vi = null, n = Ot, Ot = Qi(t.containerInfo), nt(t, e), Ot = n, it(e), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
					Ua(t.containerInfo)
				} catch (q) {
					de(e, e.return, q)
				}
				Ls && (Ls = !1, Mo(e));
				break;
			case 4:
				a = Ot, Ot = Qi(e.stateNode.containerInfo), nt(t, e), it(e), Ot = a;
				break;
			case 12:
				nt(t, e), it(e);
				break;
			case 31:
				nt(t, e), it(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Mi(e, a)));
				break;
			case 13:
				nt(t, e), it(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Oi = ct()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Mi(e, a)));
				break;
			case 22:
				n = e.memoizedState !== null;
				var m = l !== null && l.memoizedState !== null,
					b = Ft,
					T = He;
				if (Ft = b || n, He = T || m, nt(t, e), He = T, Ft = b, it(e), a & 8192) e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (l === null || m || Ft || He || Jl(e)), l = null, t = e;;) {
					if (t.tag === 5 || t.tag === 26) {
						if (l === null) {
							m = l = t;
							try {
								if (i = m.stateNode, n) s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
								else {
									r = m.stateNode;
									var O = m.memoizedProps.style,
										N = O != null && O.hasOwnProperty("display") ? O.display : null;
									r.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim()
								}
							} catch (q) {
								de(m, m.return, q)
							}
						}
					} else if (t.tag === 6) {
						if (l === null) {
							m = t;
							try {
								m.stateNode.nodeValue = n ? "" : m.memoizedProps
							} catch (q) {
								de(m, m.return, q)
							}
						}
					} else if (t.tag === 18) {
						if (l === null) {
							m = t;
							try {
								var z = m.stateNode;
								n ? vd(z, !0) : vd(m.stateNode, !1)
							} catch (q) {
								de(m, m.return, q)
							}
						}
					} else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
						t.child.return = t, t = t.child;
						continue
					}
					if (t === e) break e;
					for (; t.sibling === null;) {
						if (t.return === null || t.return === e) break e;
						l === t && (l = null), t = t.return
					}
					l === t && (l = null), t.sibling.return = t.return, t = t.sibling
				}
				a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Mi(e, l))));
				break;
			case 19:
				nt(t, e), it(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Mi(e, a)));
				break;
			case 30:
				break;
			case 21:
				break;
			default:
				nt(t, e), it(e)
		}
	}

	function it(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var l, a = e.return; a !== null;) {
					if (bo(a)) {
						l = a;
						break
					}
					a = a.return
				}
				if (l == null) throw Error(d(160));
				switch (l.tag) {
					case 27:
						var n = l.stateNode,
							i = Xs(e);
						_i(e, i, n);
						break;
					case 5:
						var s = l.stateNode;
						l.flags & 32 && (aa(s, ""), l.flags &= -33);
						var r = Xs(e);
						_i(e, r, s);
						break;
					case 3:
					case 4:
						var m = l.stateNode.containerInfo,
							b = Xs(e);
						Gs(e, b, m);
						break;
					default:
						throw Error(d(161))
				}
			} catch (T) {
				de(e, e.return, T)
			}
			e.flags &= -3
		}
		t & 4096 && (e.flags &= -4097)
	}

	function Mo(e) {
		if (e.subtreeFlags & 1024)
			for (e = e.child; e !== null;) {
				var t = e;
				Mo(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling
			}
	}

	function Pt(e, t) {
		if (t.subtreeFlags & 8772)
			for (t = t.child; t !== null;) No(e, t.alternate, t), t = t.sibling
	}

	function Jl(e) {
		for (e = e.child; e !== null;) {
			var t = e;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					yl(4, t, t.return), Jl(t);
					break;
				case 1:
					Bt(t, t.return);
					var l = t.stateNode;
					typeof l.componentWillUnmount == "function" && vo(t, t.return, l), Jl(t);
					break;
				case 27:
					Tn(t.stateNode);
				case 26:
				case 5:
					Bt(t, t.return), Jl(t);
					break;
				case 22:
					t.memoizedState === null && Jl(t);
					break;
				case 30:
					Jl(t);
					break;
				default:
					Jl(t)
			}
			e = e.sibling
		}
	}

	function el(e, t, l) {
		for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
			var a = t.alternate,
				n = e,
				i = t,
				s = i.flags;
			switch (i.tag) {
				case 0:
				case 11:
				case 15:
					el(n, i, l), gn(4, i);
					break;
				case 1:
					if (el(n, i, l), a = i, n = a.stateNode, typeof n.componentDidMount == "function") try {
						n.componentDidMount()
					} catch (b) {
						de(a, a.return, b)
					}
					if (a = i, n = a.updateQueue, n !== null) {
						var r = a.stateNode;
						try {
							var m = n.shared.hiddenCallbacks;
							if (m !== null)
								for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++) nf(m[n], r)
						} catch (b) {
							de(a, a.return, b)
						}
					}
					l && s & 64 && go(i), vn(i, i.return);
					break;
				case 27:
					So(i);
				case 26:
				case 5:
					el(n, i, l), l && a === null && s & 4 && po(i), vn(i, i.return);
					break;
				case 12:
					el(n, i, l);
					break;
				case 31:
					el(n, i, l), l && s & 4 && Ao(n, i);
					break;
				case 13:
					el(n, i, l), l && s & 4 && To(n, i);
					break;
				case 22:
					i.memoizedState === null && el(n, i, l), vn(i, i.return);
					break;
				case 30:
					break;
				default:
					el(n, i, l)
			}
			t = t.sibling
		}
	}

	function Qs(e, t) {
		var l = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && an(l))
	}

	function Zs(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && an(e))
	}

	function Dt(e, t, l, a) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null;) wo(e, t, l, a), t = t.sibling
	}

	function wo(e, t, l, a) {
		var n = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Dt(e, t, l, a), n & 2048 && gn(9, t);
				break;
			case 1:
				Dt(e, t, l, a);
				break;
			case 3:
				Dt(e, t, l, a), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && an(e)));
				break;
			case 12:
				if (n & 2048) {
					Dt(e, t, l, a), e = t.stateNode;
					try {
						var i = t.memoizedProps,
							s = i.id,
							r = i.onPostCommit;
						typeof r == "function" && r(s, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
					} catch (m) {
						de(t, t.return, m)
					}
				} else Dt(e, t, l, a);
				break;
			case 31:
				Dt(e, t, l, a);
				break;
			case 13:
				Dt(e, t, l, a);
				break;
			case 23:
				break;
			case 22:
				i = t.stateNode, s = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Dt(e, t, l, a) : pn(e, t) : i._visibility & 2 ? Dt(e, t, l, a) : (i._visibility |= 2, Na(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)), n & 2048 && Qs(s, t);
				break;
			case 24:
				Dt(e, t, l, a), n & 2048 && Zs(t.alternate, t);
				break;
			default:
				Dt(e, t, l, a)
		}
	}

	function Na(e, t, l, a, n) {
		for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null;) {
			var i = e,
				s = t,
				r = l,
				m = a,
				b = s.flags;
			switch (s.tag) {
				case 0:
				case 11:
				case 15:
					Na(i, s, r, m, n), gn(8, s);
					break;
				case 23:
					break;
				case 22:
					var T = s.stateNode;
					s.memoizedState !== null ? T._visibility & 2 ? Na(i, s, r, m, n) : pn(i, s) : (T._visibility |= 2, Na(i, s, r, m, n)), n && b & 2048 && Qs(s.alternate, s);
					break;
				case 24:
					Na(i, s, r, m, n), n && b & 2048 && Zs(s.alternate, s);
					break;
				default:
					Na(i, s, r, m, n)
			}
			t = t.sibling
		}
	}

	function pn(e, t) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null;) {
				var l = e,
					a = t,
					n = a.flags;
				switch (a.tag) {
					case 22:
						pn(l, a), n & 2048 && Qs(a.alternate, a);
						break;
					case 24:
						pn(l, a), n & 2048 && Zs(a.alternate, a);
						break;
					default:
						pn(l, a)
				}
				t = t.sibling
			}
	}
	var bn = 8192;

	function Ea(e, t, l) {
		if (e.subtreeFlags & bn)
			for (e = e.child; e !== null;) Oo(e, t, l), e = e.sibling
	}

	function Oo(e, t, l) {
		switch (e.tag) {
			case 26:
				Ea(e, t, l), e.flags & bn && e.memoizedState !== null && lx(l, Ot, e.memoizedState, e.memoizedProps);
				break;
			case 5:
				Ea(e, t, l);
				break;
			case 3:
			case 4:
				var a = Ot;
				Ot = Qi(e.stateNode.containerInfo), Ea(e, t, l), Ot = a;
				break;
			case 22:
				e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = bn, bn = 16777216, Ea(e, t, l), bn = a) : Ea(e, t, l));
				break;
			default:
				Ea(e, t, l)
		}
	}

	function Do(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do t = e.sibling, e.sibling = null, e = t; while (e !== null)
		}
	}

	function Sn(e) {
		var t = e.deletions;
		if ((e.flags & 16) !== 0) {
			if (t !== null)
				for (var l = 0; l < t.length; l++) {
					var a = t[l];
					Xe = a, Uo(a, e)
				}
			Do(e)
		}
		if (e.subtreeFlags & 10256)
			for (e = e.child; e !== null;) Ro(e), e = e.sibling
	}

	function Ro(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Sn(e), e.flags & 2048 && yl(9, e, e.return);
				break;
			case 3:
				Sn(e);
				break;
			case 12:
				Sn(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, wi(e)) : Sn(e);
				break;
			default:
				Sn(e)
		}
	}

	function wi(e) {
		var t = e.deletions;
		if ((e.flags & 16) !== 0) {
			if (t !== null)
				for (var l = 0; l < t.length; l++) {
					var a = t[l];
					Xe = a, Uo(a, e)
				}
			Do(e)
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					yl(8, t, t.return), wi(t);
					break;
				case 22:
					l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, wi(t));
					break;
				default:
					wi(t)
			}
			e = e.sibling
		}
	}

	function Uo(e, t) {
		for (; Xe !== null;) {
			var l = Xe;
			switch (l.tag) {
				case 0:
				case 11:
				case 15:
					yl(8, l, t);
					break;
				case 23:
				case 22:
					if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
						var a = l.memoizedState.cachePool.pool;
						a != null && a.refCount++
					}
					break;
				case 24:
					an(l.memoizedState.cache)
			}
			if (a = l.child, a !== null) a.return = l, Xe = a;
			else e: for (l = e; Xe !== null;) {
				a = Xe;
				var n = a.sibling,
					i = a.return;
				if (Eo(a), a === l) {
					Xe = null;
					break e
				}
				if (n !== null) {
					n.return = i, Xe = n;
					break e
				}
				Xe = i
			}
		}
	}
	var gh = {
			getCacheForType: function(e) {
				var t = Ke(Re),
					l = t.data.get(e);
				return l === void 0 && (l = e(), t.data.set(e, l)), l
			},
			cacheSignal: function() {
				return Ke(Re).controller.signal
			}
		},
		vh = typeof WeakMap == "function" ? WeakMap : Map,
		re = 0,
		ve = null,
		te = null,
		ae = 0,
		oe = 0,
		xt = null,
		gl = !1,
		za = !1,
		Vs = !1,
		tl = 0,
		Ae = 0,
		vl = 0,
		kl = 0,
		Ks = 0,
		yt = 0,
		Aa = 0,
		jn = null,
		ut = null,
		Js = !1,
		Oi = 0,
		Co = 0,
		Di = 1 / 0,
		Ri = null,
		pl = null,
		Be = 0,
		bl = null,
		Ta = null,
		ll = 0,
		ks = 0,
		$s = null,
		Ho = null,
		Nn = 0,
		Ws = null;

	function gt() {
		return (re & 2) !== 0 && ae !== 0 ? ae & -ae : j.T !== null ? lc() : Wc()
	}

	function Bo() {
		if (yt === 0)
			if ((ae & 536870912) === 0 || ie) {
				var e = Gn;
				Gn <<= 1, (Gn & 3932160) === 0 && (Gn = 262144), yt = e
			} else yt = 536870912;
		return e = mt.current, e !== null && (e.flags |= 32), yt
	}

	function st(e, t, l) {
		(e === ve && (oe === 2 || oe === 9) || e.cancelPendingCommit !== null) && (_a(e, 0), Sl(e, ae, yt, !1)), Qa(e, l), ((re & 2) === 0 || e !== ve) && (e === ve && ((re & 2) === 0 && (kl |= l), Ae === 4 && Sl(e, ae, yt, !1)), qt(e))
	}

	function qo(e, t, l) {
		if ((re & 6) !== 0) throw Error(d(327));
		var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || La(e, t),
			n = a ? Sh(e, t) : Is(e, t, !0),
			i = a;
		do {
			if (n === 0) {
				za && !a && Sl(e, t, 0, !1);
				break
			} else {
				if (l = e.current.alternate, i && !ph(l)) {
					n = Is(e, t, !1), i = !1;
					continue
				}
				if (n === 2) {
					if (i = t, e.errorRecoveryDisabledLanes & i) var s = 0;
					else s = e.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
					if (s !== 0) {
						t = s;
						e: {
							var r = e;n = jn;
							var m = r.current.memoizedState.isDehydrated;
							if (m && (_a(r, s).flags |= 256), s = Is(r, s, !1), s !== 2) {
								if (Vs && !m) {
									r.errorRecoveryDisabledLanes |= i, kl |= i, n = 4;
									break e
								}
								i = ut, ut = n, i !== null && (ut === null ? ut = i : ut.push.apply(ut, i))
							}
							n = s
						}
						if (i = !1, n !== 2) continue
					}
				}
				if (n === 1) {
					_a(e, 0), Sl(e, t, 0, !0);
					break
				}
				e: {
					switch (a = e, i = n, i) {
						case 0:
						case 1:
							throw Error(d(345));
						case 4:
							if ((t & 4194048) !== t) break;
						case 6:
							Sl(a, t, yt, !gl);
							break e;
						case 2:
							ut = null;
							break;
						case 3:
						case 5:
							break;
						default:
							throw Error(d(329))
					}
					if ((t & 62914560) === t && (n = Oi + 300 - ct(), 10 < n)) {
						if (Sl(a, t, yt, !gl), Qn(a, 0, !0) !== 0) break e;
						ll = t, a.timeoutHandle = xd(Yo.bind(null, a, l, ut, Ri, Js, t, yt, kl, Aa, gl, i, "Throttled", -0, 0), n);
						break e
					}
					Yo(a, l, ut, Ri, Js, t, yt, kl, Aa, gl, i, null, -0, 0)
				}
			}
			break
		} while (!0);
		qt(e)
	}

	function Yo(e, t, l, a, n, i, s, r, m, b, T, O, N, z) {
		if (e.timeoutHandle = -1, O = t.subtreeFlags, O & 8192 || (O & 16785408) === 16785408) {
			O = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: Gt
			}, Oo(t, i, O);
			var q = (i & 62914560) === i ? Oi - ct() : (i & 4194048) === i ? Co - ct() : 0;
			if (q = ax(O, q), q !== null) {
				ll = i, e.cancelPendingCommit = q(Jo.bind(null, e, t, i, l, a, n, s, r, m, T, O, null, N, z)), Sl(e, i, s, !b);
				return
			}
		}
		Jo(e, t, i, l, a, n, s, r, m)
	}

	function ph(e) {
		for (var t = e;;) {
			var l = t.tag;
			if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
				for (var a = 0; a < l.length; a++) {
					var n = l[a],
						i = n.getSnapshot;
					n = n.value;
					try {
						if (!ot(i(), n)) return !1
					} catch {
						return !1
					}
				}
			if (l = t.child, t.subtreeFlags & 16384 && l !== null) l.return = t, t = l;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return
				}
				t.sibling.return = t.return, t = t.sibling
			}
		}
		return !0
	}

	function Sl(e, t, l, a) {
		t &= ~Ks, t &= ~kl, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
		for (var n = t; 0 < n;) {
			var i = 31 - ft(n),
				s = 1 << i;
			a[i] = -1, n &= ~s
		}
		l !== 0 && Jc(e, l, t)
	}

	function Ui() {
		return (re & 6) === 0 ? (En(0), !1) : !0
	}

	function Fs() {
		if (te !== null) {
			if (oe === 0) var e = te.return;
			else e = te, Vt = Yl = null, ms(e), va = null, un = 0, e = te;
			for (; e !== null;) yo(e.alternate, e), e = e.return;
			te = null
		}
	}

	function _a(e, t) {
		var l = e.timeoutHandle;
		l !== -1 && (e.timeoutHandle = -1, Yh(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), ll = 0, Fs(), ve = e, te = l = Qt(e.current, null), ae = t, oe = 0, xt = null, gl = !1, za = La(e, t), Vs = !1, Aa = yt = Ks = kl = vl = Ae = 0, ut = jn = null, Js = !1, (t & 8) !== 0 && (t |= t & 32);
		var a = e.entangledLanes;
		if (a !== 0)
			for (e = e.entanglements, a &= t; 0 < a;) {
				var n = 31 - ft(a),
					i = 1 << n;
				t |= e[n], a &= ~i
			}
		return tl = t, ti(), l
	}

	function Xo(e, t) {
		I = null, j.H = hn, t === ga || t === ri ? (t = ef(), oe = 3) : t === ts ? (t = ef(), oe = 4) : oe = t === Ms ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, xt = t, te === null && (Ae = 1, Ni(e, Nt(t, e.current)))
	}

	function Go() {
		var e = mt.current;
		return e === null ? !0 : (ae & 4194048) === ae ? Tt === null : (ae & 62914560) === ae || (ae & 536870912) !== 0 ? e === Tt : !1
	}

	function Lo() {
		var e = j.H;
		return j.H = hn, e === null ? hn : e
	}

	function Qo() {
		var e = j.A;
		return j.A = gh, e
	}

	function Ci() {
		Ae = 4, gl || (ae & 4194048) !== ae && mt.current !== null || (za = !0), (vl & 134217727) === 0 && (kl & 134217727) === 0 || ve === null || Sl(ve, ae, yt, !1)
	}

	function Is(e, t, l) {
		var a = re;
		re |= 2;
		var n = Lo(),
			i = Qo();
		(ve !== e || ae !== t) && (Ri = null, _a(e, t)), t = !1;
		var s = Ae;
		e: do try {
				if (oe !== 0 && te !== null) {
					var r = te,
						m = xt;
					switch (oe) {
						case 8:
							Fs(), s = 6;
							break e;
						case 3:
						case 2:
						case 9:
						case 6:
							mt.current === null && (t = !0);
							var b = oe;
							if (oe = 0, xt = null, Ma(e, r, m, b), l && za) {
								s = 0;
								break e
							}
							break;
						default:
							b = oe, oe = 0, xt = null, Ma(e, r, m, b)
					}
				}
				bh(), s = Ae;
				break
			} catch (T) {
				Xo(e, T)
			}
			while (!0);
			return t && e.shellSuspendCounter++, Vt = Yl = null, re = a, j.H = n, j.A = i, te === null && (ve = null, ae = 0, ti()), s
	}

	function bh() {
		for (; te !== null;) Zo(te)
	}

	function Sh(e, t) {
		var l = re;
		re |= 2;
		var a = Lo(),
			n = Qo();
		ve !== e || ae !== t ? (Ri = null, Di = ct() + 500, _a(e, t)) : za = La(e, t);
		e: do try {
				if (oe !== 0 && te !== null) {
					t = te;
					var i = xt;
					t: switch (oe) {
						case 1:
							oe = 0, xt = null, Ma(e, t, i, 1);
							break;
						case 2:
						case 9:
							if (Ir(i)) {
								oe = 0, xt = null, Vo(t);
								break
							}
							t = function() {
								oe !== 2 && oe !== 9 || ve !== e || (oe = 7), qt(e)
							}, i.then(t, t);
							break e;
						case 3:
							oe = 7;
							break e;
						case 4:
							oe = 5;
							break e;
						case 7:
							Ir(i) ? (oe = 0, xt = null, Vo(t)) : (oe = 0, xt = null, Ma(e, t, i, 7));
							break;
						case 5:
							var s = null;
							switch (te.tag) {
								case 26:
									s = te.memoizedState;
								case 5:
								case 27:
									var r = te;
									if (s ? wd(s) : r.stateNode.complete) {
										oe = 0, xt = null;
										var m = r.sibling;
										if (m !== null) te = m;
										else {
											var b = r.return;
											b !== null ? (te = b, Hi(b)) : te = null
										}
										break t
									}
							}
							oe = 0, xt = null, Ma(e, t, i, 5);
							break;
						case 6:
							oe = 0, xt = null, Ma(e, t, i, 6);
							break;
						case 8:
							Fs(), Ae = 6;
							break e;
						default:
							throw Error(d(462))
					}
				}
				jh();
				break
			} catch (T) {
				Xo(e, T)
			}
			while (!0);
			return Vt = Yl = null, j.H = a, j.A = n, re = l, te !== null ? 0 : (ve = null, ae = 0, ti(), Ae)
	}

	function jh() {
		for (; te !== null && !V0();) Zo(te)
	}

	function Zo(e) {
		var t = ho(e.alternate, e, tl);
		e.memoizedProps = e.pendingProps, t === null ? Hi(e) : te = t
	}

	function Vo(e) {
		var t = e,
			l = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = so(l, t, t.pendingProps, t.type, void 0, ae);
				break;
			case 11:
				t = so(l, t, t.pendingProps, t.type.render, t.ref, ae);
				break;
			case 5:
				ms(t);
			default:
				yo(l, t), t = te = Gr(t, tl), t = ho(l, t, tl)
		}
		e.memoizedProps = e.pendingProps, t === null ? Hi(e) : te = t
	}

	function Ma(e, t, l, a) {
		Vt = Yl = null, ms(t), va = null, un = 0;
		var n = t.return;
		try {
			if (fh(e, n, t, l, ae)) {
				Ae = 1, Ni(e, Nt(l, e.current)), te = null;
				return
			}
		} catch (i) {
			if (n !== null) throw te = n, i;
			Ae = 1, Ni(e, Nt(l, e.current)), te = null;
			return
		}
		t.flags & 32768 ? (ie || a === 1 ? e = !0 : za || (ae & 536870912) !== 0 ? e = !1 : (gl = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = mt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Ko(t, e)) : Hi(t)
	}

	function Hi(e) {
		var t = e;
		do {
			if ((t.flags & 32768) !== 0) {
				Ko(t, gl);
				return
			}
			e = t.return;
			var l = mh(t.alternate, t, tl);
			if (l !== null) {
				te = l;
				return
			}
			if (t = t.sibling, t !== null) {
				te = t;
				return
			}
			te = t = e
		} while (t !== null);
		Ae === 0 && (Ae = 5)
	}

	function Ko(e, t) {
		do {
			var l = hh(e.alternate, e);
			if (l !== null) {
				l.flags &= 32767, te = l;
				return
			}
			if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
				te = e;
				return
			}
			te = e = l
		} while (e !== null);
		Ae = 6, te = null
	}

	function Jo(e, t, l, a, n, i, s, r, m) {
		e.cancelPendingCommit = null;
		do Bi(); while (Be !== 0);
		if ((re & 6) !== 0) throw Error(d(327));
		if (t !== null) {
			if (t === e.current) throw Error(d(177));
			if (i = t.lanes | t.childLanes, i |= Xu, tm(e, l, i, s, r, m), e === ve && (te = ve = null, ae = 0), Ta = t, bl = e, ll = l, ks = i, $s = n, Ho = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Ah(Yn, function() {
					return Io(), null
				})) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
				a = j.T, j.T = null, n = D.p, D.p = 2, s = re, re |= 4;
				try {
					xh(e, t, l)
				} finally {
					re = s, D.p = n, j.T = a
				}
			}
			Be = 1, ko(), $o(), Wo()
		}
	}

	function ko() {
		if (Be === 1) {
			Be = 0;
			var e = bl,
				t = Ta,
				l = (t.flags & 13878) !== 0;
			if ((t.subtreeFlags & 13878) !== 0 || l) {
				l = j.T, j.T = null;
				var a = D.p;
				D.p = 2;
				var n = re;
				re |= 4;
				try {
					_o(t, e);
					var i = fc,
						s = Dr(e.containerInfo),
						r = i.focusedElem,
						m = i.selectionRange;
					if (s !== r && r && r.ownerDocument && Or(r.ownerDocument.documentElement, r)) {
						if (m !== null && Cu(r)) {
							var b = m.start,
								T = m.end;
							if (T === void 0 && (T = b), "selectionStart" in r) r.selectionStart = b, r.selectionEnd = Math.min(T, r.value.length);
							else {
								var O = r.ownerDocument || document,
									N = O && O.defaultView || window;
								if (N.getSelection) {
									var z = N.getSelection(),
										q = r.textContent.length,
										Q = Math.min(m.start, q),
										ye = m.end === void 0 ? Q : Math.min(m.end, q);
									!z.extend && Q > ye && (s = ye, ye = Q, Q = s);
									var g = wr(r, Q),
										y = wr(r, ye);
									if (g && y && (z.rangeCount !== 1 || z.anchorNode !== g.node || z.anchorOffset !== g.offset || z.focusNode !== y.node || z.focusOffset !== y.offset)) {
										var p = O.createRange();
										p.setStart(g.node, g.offset), z.removeAllRanges(), Q > ye ? (z.addRange(p), z.extend(y.node, y.offset)) : (p.setEnd(y.node, y.offset), z.addRange(p))
									}
								}
							}
						}
						for (O = [], z = r; z = z.parentNode;) z.nodeType === 1 && O.push({
							element: z,
							left: z.scrollLeft,
							top: z.scrollTop
						});
						for (typeof r.focus == "function" && r.focus(), r = 0; r < O.length; r++) {
							var w = O[r];
							w.element.scrollLeft = w.left, w.element.scrollTop = w.top
						}
					}
					$i = !!rc, fc = rc = null
				} finally {
					re = n, D.p = a, j.T = l
				}
			}
			e.current = t, Be = 2
		}
	}

	function $o() {
		if (Be === 2) {
			Be = 0;
			var e = bl,
				t = Ta,
				l = (t.flags & 8772) !== 0;
			if ((t.subtreeFlags & 8772) !== 0 || l) {
				l = j.T, j.T = null;
				var a = D.p;
				D.p = 2;
				var n = re;
				re |= 4;
				try {
					No(e, t.alternate, t)
				} finally {
					re = n, D.p = a, j.T = l
				}
			}
			Be = 3
		}
	}

	function Wo() {
		if (Be === 4 || Be === 3) {
			Be = 0, K0();
			var e = bl,
				t = Ta,
				l = ll,
				a = Ho;
			(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Be = 5 : (Be = 0, Ta = bl = null, Fo(e, e.pendingLanes));
			var n = e.pendingLanes;
			if (n === 0 && (pl = null), yu(l), t = t.stateNode, rt && typeof rt.onCommitFiberRoot == "function") try {
				rt.onCommitFiberRoot(Ga, t, void 0, (t.current.flags & 128) === 128)
			} catch {}
			if (a !== null) {
				t = j.T, n = D.p, D.p = 2, j.T = null;
				try {
					for (var i = e.onRecoverableError, s = 0; s < a.length; s++) {
						var r = a[s];
						i(r.value, {
							componentStack: r.stack
						})
					}
				} finally {
					j.T = t, D.p = n
				}
			}(ll & 3) !== 0 && Bi(), qt(e), n = e.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? e === Ws ? Nn++ : (Nn = 0, Ws = e) : Nn = 0, En(0)
		}
	}

	function Fo(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, an(t)))
	}

	function Bi() {
		return ko(), $o(), Wo(), Io()
	}

	function Io() {
		if (Be !== 5) return !1;
		var e = bl,
			t = ks;
		ks = 0;
		var l = yu(ll),
			a = j.T,
			n = D.p;
		try {
			D.p = 32 > l ? 32 : l, j.T = null, l = $s, $s = null;
			var i = bl,
				s = ll;
			if (Be = 0, Ta = bl = null, ll = 0, (re & 6) !== 0) throw Error(d(331));
			var r = re;
			if (re |= 4, Ro(i.current), wo(i, i.current, s, l), re = r, En(0, !1), rt && typeof rt.onPostCommitFiberRoot == "function") try {
				rt.onPostCommitFiberRoot(Ga, i)
			} catch {}
			return !0
		} finally {
			D.p = n, j.T = a, Fo(e, t)
		}
	}

	function Po(e, t, l) {
		t = Nt(l, t), t = _s(e.stateNode, t, 2), e = ml(e, t, 2), e !== null && (Qa(e, 2), qt(e))
	}

	function de(e, t, l) {
		if (e.tag === 3) Po(e, e, l);
		else
			for (; t !== null;) {
				if (t.tag === 3) {
					Po(t, e, l);
					break
				} else if (t.tag === 1) {
					var a = t.stateNode;
					if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (pl === null || !pl.has(a))) {
						e = Nt(l, e), l = Pf(2), a = ml(t, l, 2), a !== null && (eo(l, a, t, e), Qa(a, 2), qt(a));
						break
					}
				}
				t = t.return
			}
	}

	function Ps(e, t, l) {
		var a = e.pingCache;
		if (a === null) {
			a = e.pingCache = new vh;
			var n = new Set;
			a.set(t, n)
		} else n = a.get(t), n === void 0 && (n = new Set, a.set(t, n));
		n.has(l) || (Vs = !0, n.add(l), e = Nh.bind(null, e, t, l), t.then(e, e))
	}

	function Nh(e, t, l) {
		var a = e.pingCache;
		a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, ve === e && (ae & l) === l && (Ae === 4 || Ae === 3 && (ae & 62914560) === ae && 300 > ct() - Oi ? (re & 2) === 0 && _a(e, 0) : Ks |= l, Aa === ae && (Aa = 0)), qt(e)
	}

	function ed(e, t) {
		t === 0 && (t = Kc()), e = Hl(e, t), e !== null && (Qa(e, t), qt(e))
	}

	function Eh(e) {
		var t = e.memoizedState,
			l = 0;
		t !== null && (l = t.retryLane), ed(e, l)
	}

	function zh(e, t) {
		var l = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var a = e.stateNode,
					n = e.memoizedState;
				n !== null && (l = n.retryLane);
				break;
			case 19:
				a = e.stateNode;
				break;
			case 22:
				a = e.stateNode._retryCache;
				break;
			default:
				throw Error(d(314))
		}
		a !== null && a.delete(t), ed(e, l)
	}

	function Ah(e, t) {
		return du(e, t)
	}
	var qi = null,
		wa = null,
		ec = !1,
		Yi = !1,
		tc = !1,
		jl = 0;

	function qt(e) {
		e !== wa && e.next === null && (wa === null ? qi = wa = e : wa = wa.next = e), Yi = !0, ec || (ec = !0, _h())
	}

	function En(e, t) {
		if (!tc && Yi) {
			tc = !0;
			do
				for (var l = !1, a = qi; a !== null;) {
					if (e !== 0) {
						var n = a.pendingLanes;
						if (n === 0) var i = 0;
						else {
							var s = a.suspendedLanes,
								r = a.pingedLanes;
							i = (1 << 31 - ft(42 | e) + 1) - 1, i &= n & ~(s & ~r), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0
						}
						i !== 0 && (l = !0, nd(a, i))
					} else i = ae, i = Qn(a, a === ve ? i : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (i & 3) === 0 || La(a, i) || (l = !0, nd(a, i));
					a = a.next
				}
			while (l);
			tc = !1
		}
	}

	function Th() {
		td()
	}

	function td() {
		Yi = ec = !1;
		var e = 0;
		jl !== 0 && qh() && (e = jl);
		for (var t = ct(), l = null, a = qi; a !== null;) {
			var n = a.next,
				i = ld(a, t);
			i === 0 ? (a.next = null, l === null ? qi = n : l.next = n, n === null && (wa = l)) : (l = a, (e !== 0 || (i & 3) !== 0) && (Yi = !0)), a = n
		}
		Be !== 0 && Be !== 5 || En(e), jl !== 0 && (jl = 0)
	}

	function ld(e, t) {
		for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i;) {
			var s = 31 - ft(i),
				r = 1 << s,
				m = n[s];
			m === -1 ? ((r & l) === 0 || (r & a) !== 0) && (n[s] = em(r, t)) : m <= t && (e.expiredLanes |= r), i &= ~r
		}
		if (t = ve, l = ae, l = Qn(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, l === 0 || e === t && (oe === 2 || oe === 9) || e.cancelPendingCommit !== null) return a !== null && a !== null && mu(a), e.callbackNode = null, e.callbackPriority = 0;
		if ((l & 3) === 0 || La(e, l)) {
			if (t = l & -l, t === e.callbackPriority) return t;
			switch (a !== null && mu(a), yu(l)) {
				case 2:
				case 8:
					l = Zc;
					break;
				case 32:
					l = Yn;
					break;
				case 268435456:
					l = Vc;
					break;
				default:
					l = Yn
			}
			return a = ad.bind(null, e), l = du(l, a), e.callbackPriority = t, e.callbackNode = l, t
		}
		return a !== null && a !== null && mu(a), e.callbackPriority = 2, e.callbackNode = null, 2
	}

	function ad(e, t) {
		if (Be !== 0 && Be !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var l = e.callbackNode;
		if (Bi() && e.callbackNode !== l) return null;
		var a = ae;
		return a = Qn(e, e === ve ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (qo(e, a, t), ld(e, ct()), e.callbackNode != null && e.callbackNode === l ? ad.bind(null, e) : null)
	}

	function nd(e, t) {
		if (Bi()) return null;
		qo(e, t, !0)
	}

	function _h() {
		Xh(function() {
			(re & 6) !== 0 ? du(Qc, Th) : td()
		})
	}

	function lc() {
		if (jl === 0) {
			var e = xa;
			e === 0 && (e = Xn, Xn <<= 1, (Xn & 261888) === 0 && (Xn = 256)), jl = e
		}
		return jl
	}

	function id(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Jn("" + e)
	}

	function ud(e, t) {
		var l = t.ownerDocument.createElement("input");
		return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e
	}

	function Mh(e, t, l, a, n) {
		if (t === "submit" && l && l.stateNode === n) {
			var i = id((n[tt] || null).action),
				s = a.submitter;
			s && (t = (t = s[tt] || null) ? id(t.formAction) : s.getAttribute("formAction"), t !== null && (i = t, s = null));
			var r = new Fn("action", "action", null, a, n);
			e.push({
				event: r,
				listeners: [{
					instance: null,
					listener: function() {
						if (a.defaultPrevented) {
							if (jl !== 0) {
								var m = s ? ud(n, s) : new FormData(n);
								js(l, {
									pending: !0,
									data: m,
									method: n.method,
									action: i
								}, null, m)
							}
						} else typeof i == "function" && (r.preventDefault(), m = s ? ud(n, s) : new FormData(n), js(l, {
							pending: !0,
							data: m,
							method: n.method,
							action: i
						}, i, m))
					},
					currentTarget: n
				}]
			})
		}
	}
	for (var ac = 0; ac < Yu.length; ac++) {
		var nc = Yu[ac],
			wh = nc.toLowerCase(),
			Oh = nc[0].toUpperCase() + nc.slice(1);
		wt(wh, "on" + Oh)
	}
	wt(Cr, "onAnimationEnd"), wt(Hr, "onAnimationIteration"), wt(Br, "onAnimationStart"), wt("dblclick", "onDoubleClick"), wt("focusin", "onFocus"), wt("focusout", "onBlur"), wt(Jm, "onTransitionRun"), wt(km, "onTransitionStart"), wt($m, "onTransitionCancel"), wt(qr, "onTransitionEnd"), ta("onMouseEnter", ["mouseout", "mouseover"]), ta("onMouseLeave", ["mouseout", "mouseover"]), ta("onPointerEnter", ["pointerout", "pointerover"]), ta("onPointerLeave", ["pointerout", "pointerover"]), Dl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Dl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Dl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Dl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Dl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Dl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
		Dh = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zn));

	function sd(e, t) {
		t = (t & 4) !== 0;
		for (var l = 0; l < e.length; l++) {
			var a = e[l],
				n = a.event;
			a = a.listeners;
			e: {
				var i = void 0;
				if (t)
					for (var s = a.length - 1; 0 <= s; s--) {
						var r = a[s],
							m = r.instance,
							b = r.currentTarget;
						if (r = r.listener, m !== i && n.isPropagationStopped()) break e;
						i = r, n.currentTarget = b;
						try {
							i(n)
						} catch (T) {
							ei(T)
						}
						n.currentTarget = null, i = m
					} else
						for (s = 0; s < a.length; s++) {
							if (r = a[s], m = r.instance, b = r.currentTarget, r = r.listener, m !== i && n.isPropagationStopped()) break e;
							i = r, n.currentTarget = b;
							try {
								i(n)
							} catch (T) {
								ei(T)
							}
							n.currentTarget = null, i = m
						}
			}
		}
	}

	function le(e, t) {
		var l = t[gu];
		l === void 0 && (l = t[gu] = new Set);
		var a = e + "__bubble";
		l.has(a) || (cd(t, e, 2, !1), l.add(a))
	}

	function ic(e, t, l) {
		var a = 0;
		t && (a |= 4), cd(l, e, a, t)
	}
	var Xi = "_reactListening" + Math.random().toString(36).slice(2);

	function uc(e) {
		if (!e[Xi]) {
			e[Xi] = !0, Pc.forEach(function(l) {
				l !== "selectionchange" && (Dh.has(l) || ic(l, !1, e), ic(l, !0, e))
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Xi] || (t[Xi] = !0, ic("selectionchange", !1, t))
		}
	}

	function cd(e, t, l, a) {
		switch (Bd(t)) {
			case 2:
				var n = ux;
				break;
			case 8:
				n = sx;
				break;
			default:
				n = Sc
		}
		l = n.bind(null, t, l, e), n = void 0, !Au || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(t, l, {
			capture: !0,
			passive: n
		}) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
			passive: n
		}) : e.addEventListener(t, l, !1)
	}

	function sc(e, t, l, a, n) {
		var i = a;
		if ((t & 1) === 0 && (t & 2) === 0 && a !== null) e: for (;;) {
			if (a === null) return;
			var s = a.tag;
			if (s === 3 || s === 4) {
				var r = a.stateNode.containerInfo;
				if (r === n) break;
				if (s === 4)
					for (s = a.return; s !== null;) {
						var m = s.tag;
						if ((m === 3 || m === 4) && s.stateNode.containerInfo === n) return;
						s = s.return
					}
				for (; r !== null;) {
					if (s = Il(r), s === null) return;
					if (m = s.tag, m === 5 || m === 6 || m === 26 || m === 27) {
						a = i = s;
						continue e
					}
					r = r.parentNode
				}
			}
			a = a.return
		}
		or(function() {
			var b = i,
				T = Eu(l),
				O = [];
			e: {
				var N = Yr.get(e);
				if (N !== void 0) {
					var z = Fn,
						q = e;
					switch (e) {
						case "keypress":
							if ($n(l) === 0) break e;
						case "keydown":
						case "keyup":
							z = zm;
							break;
						case "focusin":
							q = "focus", z = wu;
							break;
						case "focusout":
							q = "blur", z = wu;
							break;
						case "beforeblur":
						case "afterblur":
							z = wu;
							break;
						case "click":
							if (l.button === 2) break e;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							z = hr;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							z = mm;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							z = _m;
							break;
						case Cr:
						case Hr:
						case Br:
							z = ym;
							break;
						case qr:
							z = wm;
							break;
						case "scroll":
						case "scrollend":
							z = om;
							break;
						case "wheel":
							z = Dm;
							break;
						case "copy":
						case "cut":
						case "paste":
							z = vm;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							z = yr;
							break;
						case "toggle":
						case "beforetoggle":
							z = Um
					}
					var Q = (t & 4) !== 0,
						ye = !Q && (e === "scroll" || e === "scrollend"),
						g = Q ? N !== null ? N + "Capture" : null : N;
					Q = [];
					for (var y = b, p; y !== null;) {
						var w = y;
						if (p = w.stateNode, w = w.tag, w !== 5 && w !== 26 && w !== 27 || p === null || g === null || (w = Ka(y, g), w != null && Q.push(An(y, w, p))), ye) break;
						y = y.return
					}
					0 < Q.length && (N = new z(N, q, null, l, T), O.push({
						event: N,
						listeners: Q
					}))
				}
			}
			if ((t & 7) === 0) {
				e: {
					if (N = e === "mouseover" || e === "pointerover", z = e === "mouseout" || e === "pointerout", N && l !== Nu && (q = l.relatedTarget || l.fromElement) && (Il(q) || q[Fl])) break e;
					if ((z || N) && (N = T.window === T ? T : (N = T.ownerDocument) ? N.defaultView || N.parentWindow : window, z ? (q = l.relatedTarget || l.toElement, z = b, q = q ? Il(q) : null, q !== null && (ye = S(q), Q = q.tag, q !== ye || Q !== 5 && Q !== 27 && Q !== 6) && (q = null)) : (z = null, q = b), z !== q)) {
						if (Q = hr, w = "onMouseLeave", g = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (Q = yr, w = "onPointerLeave", g = "onPointerEnter", y = "pointer"), ye = z == null ? N : Va(z), p = q == null ? N : Va(q), N = new Q(w, y + "leave", z, l, T), N.target = ye, N.relatedTarget = p, w = null, Il(T) === b && (Q = new Q(g, y + "enter", q, l, T), Q.target = p, Q.relatedTarget = ye, w = Q), ye = w, z && q) t: {
							for (Q = Rh, g = z, y = q, p = 0, w = g; w; w = Q(w)) p++;w = 0;
							for (var G = y; G; G = Q(G)) w++;
							for (; 0 < p - w;) g = Q(g),
							p--;
							for (; 0 < w - p;) y = Q(y),
							w--;
							for (; p--;) {
								if (g === y || y !== null && g === y.alternate) {
									Q = g;
									break t
								}
								g = Q(g), y = Q(y)
							}
							Q = null
						}
						else Q = null;
						z !== null && rd(O, N, z, Q, !1), q !== null && ye !== null && rd(O, ye, q, Q, !0)
					}
				}
				e: {
					if (N = b ? Va(b) : window, z = N.nodeName && N.nodeName.toLowerCase(), z === "select" || z === "input" && N.type === "file") var se = Er;
					else if (jr(N))
						if (zr) se = Zm;
						else {
							se = Lm;
							var Y = Gm
						}
					else z = N.nodeName,
					!z || z.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? b && ju(b.elementType) && (se = Er) : se = Qm;
					if (se && (se = se(e, b))) {
						Nr(O, se, l, T);
						break e
					}
					Y && Y(e, N, b),
					e === "focusout" && b && N.type === "number" && b.memoizedProps.value != null && Su(N, "number", N.value)
				}
				switch (Y = b ? Va(b) : window, e) {
					case "focusin":
						(jr(Y) || Y.contentEditable === "true") && (sa = Y, Hu = b, en = null);
						break;
					case "focusout":
						en = Hu = sa = null;
						break;
					case "mousedown":
						Bu = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Bu = !1, Rr(O, l, T);
						break;
					case "selectionchange":
						if (Km) break;
					case "keydown":
					case "keyup":
						Rr(O, l, T)
				}
				var P;
				if (Du) e: {
					switch (e) {
						case "compositionstart":
							var ne = "onCompositionStart";
							break e;
						case "compositionend":
							ne = "onCompositionEnd";
							break e;
						case "compositionupdate":
							ne = "onCompositionUpdate";
							break e
					}
					ne = void 0
				}
				else ua ? br(e, l) && (ne = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ne = "onCompositionStart");ne && (gr && l.locale !== "ko" && (ua || ne !== "onCompositionStart" ? ne === "onCompositionEnd" && ua && (P = dr()) : (ul = T, Tu = "value" in ul ? ul.value : ul.textContent, ua = !0)), Y = Gi(b, ne), 0 < Y.length && (ne = new xr(ne, e, null, l, T), O.push({
					event: ne,
					listeners: Y
				}), P ? ne.data = P : (P = Sr(l), P !== null && (ne.data = P)))),
				(P = Hm ? Bm(e, l) : qm(e, l)) && (ne = Gi(b, "onBeforeInput"), 0 < ne.length && (Y = new xr("onBeforeInput", "beforeinput", null, l, T), O.push({
					event: Y,
					listeners: ne
				}), Y.data = P)),
				Mh(O, e, b, l, T)
			}
			sd(O, t)
		})
	}

	function An(e, t, l) {
		return {
			instance: e,
			listener: t,
			currentTarget: l
		}
	}

	function Gi(e, t) {
		for (var l = t + "Capture", a = []; e !== null;) {
			var n = e,
				i = n.stateNode;
			if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = Ka(e, l), n != null && a.unshift(An(e, n, i)), n = Ka(e, t), n != null && a.push(An(e, n, i))), e.tag === 3) return a;
			e = e.return
		}
		return []
	}

	function Rh(e) {
		if (e === null) return null;
		do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
		return e || null
	}

	function rd(e, t, l, a, n) {
		for (var i = t._reactName, s = []; l !== null && l !== a;) {
			var r = l,
				m = r.alternate,
				b = r.stateNode;
			if (r = r.tag, m !== null && m === a) break;
			r !== 5 && r !== 26 && r !== 27 || b === null || (m = b, n ? (b = Ka(l, i), b != null && s.unshift(An(l, b, m))) : n || (b = Ka(l, i), b != null && s.push(An(l, b, m)))), l = l.return
		}
		s.length !== 0 && e.push({
			event: t,
			listeners: s
		})
	}
	var Uh = /\r\n?/g,
		Ch = /\u0000|\uFFFD/g;

	function fd(e) {
		return (typeof e == "string" ? e : "" + e).replace(Uh, `
`).replace(Ch, "")
	}

	function od(e, t) {
		return t = fd(t), fd(e) === t
	}

	function xe(e, t, l, a, n, i) {
		switch (l) {
			case "children":
				typeof a == "string" ? t === "body" || t === "textarea" && a === "" || aa(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && aa(e, "" + a);
				break;
			case "className":
				Vn(e, "class", a);
				break;
			case "tabIndex":
				Vn(e, "tabindex", a);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Vn(e, l, a);
				break;
			case "style":
				rr(e, a, i);
				break;
			case "data":
				if (t !== "object") {
					Vn(e, "data", a);
					break
				}
			case "src":
			case "href":
				if (a === "" && (t !== "a" || l !== "href")) {
					e.removeAttribute(l);
					break
				}
				if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
					e.removeAttribute(l);
					break
				}
				a = Jn("" + a), e.setAttribute(l, a);
				break;
			case "action":
			case "formAction":
				if (typeof a == "function") {
					e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break
				} else typeof i == "function" && (l === "formAction" ? (t !== "input" && xe(e, t, "name", n.name, n, null), xe(e, t, "formEncType", n.formEncType, n, null), xe(e, t, "formMethod", n.formMethod, n, null), xe(e, t, "formTarget", n.formTarget, n, null)) : (xe(e, t, "encType", n.encType, n, null), xe(e, t, "method", n.method, n, null), xe(e, t, "target", n.target, n, null)));
				if (a == null || typeof a == "symbol" || typeof a == "boolean") {
					e.removeAttribute(l);
					break
				}
				a = Jn("" + a), e.setAttribute(l, a);
				break;
			case "onClick":
				a != null && (e.onclick = Gt);
				break;
			case "onScroll":
				a != null && le("scroll", e);
				break;
			case "onScrollEnd":
				a != null && le("scrollend", e);
				break;
			case "dangerouslySetInnerHTML":
				if (a != null) {
					if (typeof a != "object" || !("__html" in a)) throw Error(d(61));
					if (l = a.__html, l != null) {
						if (n.children != null) throw Error(d(60));
						e.innerHTML = l
					}
				}
				break;
			case "multiple":
				e.multiple = a && typeof a != "function" && typeof a != "symbol";
				break;
			case "muted":
				e.muted = a && typeof a != "function" && typeof a != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref":
				break;
			case "autoFocus":
				break;
			case "xlinkHref":
				if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
					e.removeAttribute("xlink:href");
					break
				}
				l = Jn("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
				break;
			case "capture":
			case "download":
				a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
				break;
			case "rowSpan":
			case "start":
				a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
				break;
			case "popover":
				le("beforetoggle", e), le("toggle", e), Zn(e, "popover", a);
				break;
			case "xlinkActuate":
				Xt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
				break;
			case "xlinkArcrole":
				Xt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
				break;
			case "xlinkRole":
				Xt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
				break;
			case "xlinkShow":
				Xt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
				break;
			case "xlinkTitle":
				Xt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
				break;
			case "xlinkType":
				Xt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
				break;
			case "xmlBase":
				Xt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
				break;
			case "xmlLang":
				Xt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
				break;
			case "xmlSpace":
				Xt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
				break;
			case "is":
				Zn(e, "is", a);
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				(!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = rm.get(l) || l, Zn(e, l, a))
		}
	}

	function cc(e, t, l, a, n, i) {
		switch (l) {
			case "style":
				rr(e, a, i);
				break;
			case "dangerouslySetInnerHTML":
				if (a != null) {
					if (typeof a != "object" || !("__html" in a)) throw Error(d(61));
					if (l = a.__html, l != null) {
						if (n.children != null) throw Error(d(60));
						e.innerHTML = l
					}
				}
				break;
			case "children":
				typeof a == "string" ? aa(e, a) : (typeof a == "number" || typeof a == "bigint") && aa(e, "" + a);
				break;
			case "onScroll":
				a != null && le("scroll", e);
				break;
			case "onScrollEnd":
				a != null && le("scrollend", e);
				break;
			case "onClick":
				a != null && (e.onclick = Gt);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref":
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				if (!er.hasOwnProperty(l)) e: {
					if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), t = l.slice(2, n ? l.length - 7 : void 0), i = e[tt] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, n), typeof a == "function")) {
						typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, n);
						break e
					}
					l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : Zn(e, l, a)
				}
		}
	}

	function ke(e, t, l) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "img":
				le("error", e), le("load", e);
				var a = !1,
					n = !1,
					i;
				for (i in l)
					if (l.hasOwnProperty(i)) {
						var s = l[i];
						if (s != null) switch (i) {
							case "src":
								a = !0;
								break;
							case "srcSet":
								n = !0;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								throw Error(d(137, t));
							default:
								xe(e, t, i, s, l, null)
						}
					} n && xe(e, t, "srcSet", l.srcSet, l, null), a && xe(e, t, "src", l.src, l, null);
				return;
			case "input":
				le("invalid", e);
				var r = i = s = n = null,
					m = null,
					b = null;
				for (a in l)
					if (l.hasOwnProperty(a)) {
						var T = l[a];
						if (T != null) switch (a) {
							case "name":
								n = T;
								break;
							case "type":
								s = T;
								break;
							case "checked":
								m = T;
								break;
							case "defaultChecked":
								b = T;
								break;
							case "value":
								i = T;
								break;
							case "defaultValue":
								r = T;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if (T != null) throw Error(d(137, t));
								break;
							default:
								xe(e, t, a, T, l, null)
						}
					} ir(e, i, r, m, b, s, n, !1);
				return;
			case "select":
				le("invalid", e), a = s = i = null;
				for (n in l)
					if (l.hasOwnProperty(n) && (r = l[n], r != null)) switch (n) {
						case "value":
							i = r;
							break;
						case "defaultValue":
							s = r;
							break;
						case "multiple":
							a = r;
						default:
							xe(e, t, n, r, l, null)
					}
				t = i, l = s, e.multiple = !!a, t != null ? la(e, !!a, t, !1) : l != null && la(e, !!a, l, !0);
				return;
			case "textarea":
				le("invalid", e), i = n = a = null;
				for (s in l)
					if (l.hasOwnProperty(s) && (r = l[s], r != null)) switch (s) {
						case "value":
							a = r;
							break;
						case "defaultValue":
							n = r;
							break;
						case "children":
							i = r;
							break;
						case "dangerouslySetInnerHTML":
							if (r != null) throw Error(d(91));
							break;
						default:
							xe(e, t, s, r, l, null)
					}
				sr(e, a, n, i);
				return;
			case "option":
				for (m in l)
					if (l.hasOwnProperty(m) && (a = l[m], a != null)) switch (m) {
						case "selected":
							e.selected = a && typeof a != "function" && typeof a != "symbol";
							break;
						default:
							xe(e, t, m, a, l, null)
					}
				return;
			case "dialog":
				le("beforetoggle", e), le("toggle", e), le("cancel", e), le("close", e);
				break;
			case "iframe":
			case "object":
				le("load", e);
				break;
			case "video":
			case "audio":
				for (a = 0; a < zn.length; a++) le(zn[a], e);
				break;
			case "image":
				le("error", e), le("load", e);
				break;
			case "details":
				le("toggle", e);
				break;
			case "embed":
			case "source":
			case "link":
				le("error", e), le("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (b in l)
					if (l.hasOwnProperty(b) && (a = l[b], a != null)) switch (b) {
						case "children":
						case "dangerouslySetInnerHTML":
							throw Error(d(137, t));
						default:
							xe(e, t, b, a, l, null)
					}
				return;
			default:
				if (ju(t)) {
					for (T in l) l.hasOwnProperty(T) && (a = l[T], a !== void 0 && cc(e, t, T, a, l, void 0));
					return
				}
		}
		for (r in l) l.hasOwnProperty(r) && (a = l[r], a != null && xe(e, t, r, a, l, null))
	}

	function Hh(e, t, l, a) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "input":
				var n = null,
					i = null,
					s = null,
					r = null,
					m = null,
					b = null,
					T = null;
				for (z in l) {
					var O = l[z];
					if (l.hasOwnProperty(z) && O != null) switch (z) {
						case "checked":
							break;
						case "value":
							break;
						case "defaultValue":
							m = O;
						default:
							a.hasOwnProperty(z) || xe(e, t, z, null, a, O)
					}
				}
				for (var N in a) {
					var z = a[N];
					if (O = l[N], a.hasOwnProperty(N) && (z != null || O != null)) switch (N) {
						case "type":
							i = z;
							break;
						case "name":
							n = z;
							break;
						case "checked":
							b = z;
							break;
						case "defaultChecked":
							T = z;
							break;
						case "value":
							s = z;
							break;
						case "defaultValue":
							r = z;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (z != null) throw Error(d(137, t));
							break;
						default:
							z !== O && xe(e, t, N, z, a, O)
					}
				}
				bu(e, s, r, m, b, T, i, n);
				return;
			case "select":
				z = s = r = N = null;
				for (i in l)
					if (m = l[i], l.hasOwnProperty(i) && m != null) switch (i) {
						case "value":
							break;
						case "multiple":
							z = m;
						default:
							a.hasOwnProperty(i) || xe(e, t, i, null, a, m)
					}
				for (n in a)
					if (i = a[n], m = l[n], a.hasOwnProperty(n) && (i != null || m != null)) switch (n) {
						case "value":
							N = i;
							break;
						case "defaultValue":
							r = i;
							break;
						case "multiple":
							s = i;
						default:
							i !== m && xe(e, t, n, i, a, m)
					}
				t = r, l = s, a = z, N != null ? la(e, !!l, N, !1) : !!a != !!l && (t != null ? la(e, !!l, t, !0) : la(e, !!l, l ? [] : "", !1));
				return;
			case "textarea":
				z = N = null;
				for (r in l)
					if (n = l[r], l.hasOwnProperty(r) && n != null && !a.hasOwnProperty(r)) switch (r) {
						case "value":
							break;
						case "children":
							break;
						default:
							xe(e, t, r, null, a, n)
					}
				for (s in a)
					if (n = a[s], i = l[s], a.hasOwnProperty(s) && (n != null || i != null)) switch (s) {
						case "value":
							N = n;
							break;
						case "defaultValue":
							z = n;
							break;
						case "children":
							break;
						case "dangerouslySetInnerHTML":
							if (n != null) throw Error(d(91));
							break;
						default:
							n !== i && xe(e, t, s, n, a, i)
					}
				ur(e, N, z);
				return;
			case "option":
				for (var q in l)
					if (N = l[q], l.hasOwnProperty(q) && N != null && !a.hasOwnProperty(q)) switch (q) {
						case "selected":
							e.selected = !1;
							break;
						default:
							xe(e, t, q, null, a, N)
					}
				for (m in a)
					if (N = a[m], z = l[m], a.hasOwnProperty(m) && N !== z && (N != null || z != null)) switch (m) {
						case "selected":
							e.selected = N && typeof N != "function" && typeof N != "symbol";
							break;
						default:
							xe(e, t, m, N, a, z)
					}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var Q in l) N = l[Q], l.hasOwnProperty(Q) && N != null && !a.hasOwnProperty(Q) && xe(e, t, Q, null, a, N);
				for (b in a)
					if (N = a[b], z = l[b], a.hasOwnProperty(b) && N !== z && (N != null || z != null)) switch (b) {
						case "children":
						case "dangerouslySetInnerHTML":
							if (N != null) throw Error(d(137, t));
							break;
						default:
							xe(e, t, b, N, a, z)
					}
				return;
			default:
				if (ju(t)) {
					for (var ye in l) N = l[ye], l.hasOwnProperty(ye) && N !== void 0 && !a.hasOwnProperty(ye) && cc(e, t, ye, void 0, a, N);
					for (T in a) N = a[T], z = l[T], !a.hasOwnProperty(T) || N === z || N === void 0 && z === void 0 || cc(e, t, T, N, a, z);
					return
				}
		}
		for (var g in l) N = l[g], l.hasOwnProperty(g) && N != null && !a.hasOwnProperty(g) && xe(e, t, g, null, a, N);
		for (O in a) N = a[O], z = l[O], !a.hasOwnProperty(O) || N === z || N == null && z == null || xe(e, t, O, N, a, z)
	}

	function dd(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link":
				return !0;
			default:
				return !1
		}
	}

	function Bh() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
				var n = l[a],
					i = n.transferSize,
					s = n.initiatorType,
					r = n.duration;
				if (i && r && dd(s)) {
					for (s = 0, r = n.responseEnd, a += 1; a < l.length; a++) {
						var m = l[a],
							b = m.startTime;
						if (b > r) break;
						var T = m.transferSize,
							O = m.initiatorType;
						T && dd(O) && (m = m.responseEnd, s += T * (m < r ? 1 : (r - b) / (m - b)))
					}
					if (--a, t += 8 * (i + s) / (n.duration / 1e3), e++, 10 < e) break
				}
			}
			if (0 < e) return t / e / 1e6
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5
	}
	var rc = null,
		fc = null;

	function Li(e) {
		return e.nodeType === 9 ? e : e.ownerDocument
	}

	function md(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg":
				return 1;
			case "http://www.w3.org/1998/Math/MathML":
				return 2;
			default:
				return 0
		}
	}

	function hd(e, t) {
		if (e === 0) switch (t) {
			case "svg":
				return 1;
			case "math":
				return 2;
			default:
				return 0
		}
		return e === 1 && t === "foreignObject" ? 0 : e
	}

	function oc(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
	}
	var dc = null;

	function qh() {
		var e = window.event;
		return e && e.type === "popstate" ? e === dc ? !1 : (dc = e, !0) : (dc = null, !1)
	}
	var xd = typeof setTimeout == "function" ? setTimeout : void 0,
		Yh = typeof clearTimeout == "function" ? clearTimeout : void 0,
		yd = typeof Promise == "function" ? Promise : void 0,
		Xh = typeof queueMicrotask == "function" ? queueMicrotask : typeof yd < "u" ? function(e) {
			return yd.resolve(null).then(e).catch(Gh)
		} : xd;

	function Gh(e) {
		setTimeout(function() {
			throw e
		})
	}

	function Nl(e) {
		return e === "head"
	}

	function gd(e, t) {
		var l = t,
			a = 0;
		do {
			var n = l.nextSibling;
			if (e.removeChild(l), n && n.nodeType === 8)
				if (l = n.data, l === "/$" || l === "/&") {
					if (a === 0) {
						e.removeChild(n), Ua(t);
						return
					}
					a--
				} else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") a++;
			else if (l === "html") Tn(e.ownerDocument.documentElement);
			else if (l === "head") {
				l = e.ownerDocument.head, Tn(l);
				for (var i = l.firstChild; i;) {
					var s = i.nextSibling,
						r = i.nodeName;
					i[Za] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = s
				}
			} else l === "body" && Tn(e.ownerDocument.body);
			l = n
		} while (l);
		Ua(t)
	}

	function vd(e, t) {
		var l = e;
		e = 0;
		do {
			var a = l.nextSibling;
			if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
				if (l = a.data, l === "/$") {
					if (e === 0) break;
					e--
				} else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
			l = a
		} while (l)
	}

	function mc(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var l = t;
			switch (t = t.nextSibling, l.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					mc(l), vu(l);
					continue;
				case "SCRIPT":
				case "STYLE":
					continue;
				case "LINK":
					if (l.rel.toLowerCase() === "stylesheet") continue
			}
			e.removeChild(l)
		}
	}

	function Lh(e, t, l, a) {
		for (; e.nodeType === 1;) {
			var n = l;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
			} else if (a) {
				if (!e[Za]) switch (t) {
					case "meta":
						if (!e.hasAttribute("itemprop")) break;
						return e;
					case "link":
						if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence")) break;
						if (i !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title)) break;
						return e;
					case "style":
						if (e.hasAttribute("data-precedence")) break;
						return e;
					case "script":
						if (i = e.getAttribute("src"), (i !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
						return e;
					default:
						return e
				}
			} else if (t === "input" && e.type === "hidden") {
				var i = n.name == null ? null : "" + n.name;
				if (n.type === "hidden" && e.getAttribute("name") === i) return e
			} else return e;
			if (e = _t(e.nextSibling), e === null) break
		}
		return null
	}

	function Qh(e, t, l) {
		if (t === "") return null;
		for (; e.nodeType !== 3;)
			if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = _t(e.nextSibling), e === null)) return null;
		return e
	}

	function pd(e, t) {
		for (; e.nodeType !== 8;)
			if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = _t(e.nextSibling), e === null)) return null;
		return e
	}

	function hc(e) {
		return e.data === "$?" || e.data === "$~"
	}

	function xc(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
	}

	function Zh(e, t) {
		var l = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || l.readyState !== "loading") t();
		else {
			var a = function() {
				t(), l.removeEventListener("DOMContentLoaded", a)
			};
			l.addEventListener("DOMContentLoaded", a), e._reactRetry = a
		}
	}

	function _t(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null
			}
		}
		return e
	}
	var yc = null;

	function bd(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var l = e.data;
				if (l === "/$" || l === "/&") {
					if (t === 0) return _t(e.nextSibling);
					t--
				} else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++
			}
			e = e.nextSibling
		}
		return null
	}

	function Sd(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var l = e.data;
				if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
					if (t === 0) return e;
					t--
				} else l !== "/$" && l !== "/&" || t++
			}
			e = e.previousSibling
		}
		return null
	}

	function jd(e, t, l) {
		switch (t = Li(l), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(d(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(d(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(d(454));
				return e;
			default:
				throw Error(d(451))
		}
	}

	function Tn(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		vu(e)
	}
	var Mt = new Map,
		Nd = new Set;

	function Qi(e) {
		return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
	}
	var al = D.d;
	D.d = {
		f: Vh,
		r: Kh,
		D: Jh,
		C: kh,
		L: $h,
		m: Wh,
		X: Ih,
		S: Fh,
		M: Ph
	};

	function Vh() {
		var e = al.f(),
			t = Ui();
		return e || t
	}

	function Kh(e) {
		var t = Pl(e);
		t !== null && t.tag === 5 && t.type === "form" ? Yf(t) : al.r(e)
	}
	var Oa = typeof document > "u" ? null : document;

	function Ed(e, t, l) {
		var a = Oa;
		if (a && typeof t == "string" && t) {
			var n = St(t);
			n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Nd.has(n) || (Nd.add(n), e = {
				rel: e,
				crossOrigin: l,
				href: t
			}, a.querySelector(n) === null && (t = a.createElement("link"), ke(t, "link", e), Ye(t), a.head.appendChild(t)))
		}
	}

	function Jh(e) {
		al.D(e), Ed("dns-prefetch", e, null)
	}

	function kh(e, t) {
		al.C(e, t), Ed("preconnect", e, t)
	}

	function $h(e, t, l) {
		al.L(e, t, l);
		var a = Oa;
		if (a && e && t) {
			var n = 'link[rel="preload"][as="' + St(t) + '"]';
			t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + St(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + St(l.imageSizes) + '"]')) : n += '[href="' + St(e) + '"]';
			var i = n;
			switch (t) {
				case "style":
					i = Da(e);
					break;
				case "script":
					i = Ra(e)
			}
			Mt.has(i) || (e = U({
				rel: "preload",
				href: t === "image" && l && l.imageSrcSet ? void 0 : e,
				as: t
			}, l), Mt.set(i, e), a.querySelector(n) !== null || t === "style" && a.querySelector(_n(i)) || t === "script" && a.querySelector(Mn(i)) || (t = a.createElement("link"), ke(t, "link", e), Ye(t), a.head.appendChild(t)))
		}
	}

	function Wh(e, t) {
		al.m(e, t);
		var l = Oa;
		if (l && e) {
			var a = t && typeof t.as == "string" ? t.as : "script",
				n = 'link[rel="modulepreload"][as="' + St(a) + '"][href="' + St(e) + '"]',
				i = n;
			switch (a) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script":
					i = Ra(e)
			}
			if (!Mt.has(i) && (e = U({
					rel: "modulepreload",
					href: e
				}, t), Mt.set(i, e), l.querySelector(n) === null)) {
				switch (a) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script":
						if (l.querySelector(Mn(i))) return
				}
				a = l.createElement("link"), ke(a, "link", e), Ye(a), l.head.appendChild(a)
			}
		}
	}

	function Fh(e, t, l) {
		al.S(e, t, l);
		var a = Oa;
		if (a && e) {
			var n = ea(a).hoistableStyles,
				i = Da(e);
			t = t || "default";
			var s = n.get(i);
			if (!s) {
				var r = {
					loading: 0,
					preload: null
				};
				if (s = a.querySelector(_n(i))) r.loading = 5;
				else {
					e = U({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, l), (l = Mt.get(i)) && gc(e, l);
					var m = s = a.createElement("link");
					Ye(m), ke(m, "link", e), m._p = new Promise(function(b, T) {
						m.onload = b, m.onerror = T
					}), m.addEventListener("load", function() {
						r.loading |= 1
					}), m.addEventListener("error", function() {
						r.loading |= 2
					}), r.loading |= 4, Zi(s, t, a)
				}
				s = {
					type: "stylesheet",
					instance: s,
					count: 1,
					state: r
				}, n.set(i, s)
			}
		}
	}

	function Ih(e, t) {
		al.X(e, t);
		var l = Oa;
		if (l && e) {
			var a = ea(l).hoistableScripts,
				n = Ra(e),
				i = a.get(n);
			i || (i = l.querySelector(Mn(n)), i || (e = U({
				src: e,
				async: !0
			}, t), (t = Mt.get(n)) && vc(e, t), i = l.createElement("script"), Ye(i), ke(i, "link", e), l.head.appendChild(i)), i = {
				type: "script",
				instance: i,
				count: 1,
				state: null
			}, a.set(n, i))
		}
	}

	function Ph(e, t) {
		al.M(e, t);
		var l = Oa;
		if (l && e) {
			var a = ea(l).hoistableScripts,
				n = Ra(e),
				i = a.get(n);
			i || (i = l.querySelector(Mn(n)), i || (e = U({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = Mt.get(n)) && vc(e, t), i = l.createElement("script"), Ye(i), ke(i, "link", e), l.head.appendChild(i)), i = {
				type: "script",
				instance: i,
				count: 1,
				state: null
			}, a.set(n, i))
		}
	}

	function zd(e, t, l, a) {
		var n = (n = ee.current) ? Qi(n) : null;
		if (!n) throw Error(d(446));
		switch (e) {
			case "meta":
			case "title":
				return null;
			case "style":
				return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Da(l.href), l = ea(n).hoistableStyles, a = l.get(t), a || (a = {
					type: "style",
					instance: null,
					count: 0,
					state: null
				}, l.set(t, a)), a) : {
					type: "void",
					instance: null,
					count: 0,
					state: null
				};
			case "link":
				if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
					e = Da(l.href);
					var i = ea(n).hoistableStyles,
						s = i.get(e);
					if (s || (n = n.ownerDocument || n, s = {
							type: "stylesheet",
							instance: null,
							count: 0,
							state: {
								loading: 0,
								preload: null
							}
						}, i.set(e, s), (i = n.querySelector(_n(e))) && !i._p && (s.instance = i, s.state.loading = 5), Mt.has(e) || (l = {
							rel: "preload",
							as: "style",
							href: l.href,
							crossOrigin: l.crossOrigin,
							integrity: l.integrity,
							media: l.media,
							hrefLang: l.hrefLang,
							referrerPolicy: l.referrerPolicy
						}, Mt.set(e, l), i || ex(n, e, l, s.state))), t && a === null) throw Error(d(528, ""));
					return s
				}
				if (t && a !== null) throw Error(d(529, ""));
				return null;
			case "script":
				return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ra(l), l = ea(n).hoistableScripts, a = l.get(t), a || (a = {
					type: "script",
					instance: null,
					count: 0,
					state: null
				}, l.set(t, a)), a) : {
					type: "void",
					instance: null,
					count: 0,
					state: null
				};
			default:
				throw Error(d(444, e))
		}
	}

	function Da(e) {
		return 'href="' + St(e) + '"'
	}

	function _n(e) {
		return 'link[rel="stylesheet"][' + e + "]"
	}

	function Ad(e) {
		return U({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		})
	}

	function ex(e, t, l, a) {
		e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
			return a.loading |= 1
		}), t.addEventListener("error", function() {
			return a.loading |= 2
		}), ke(t, "link", l), Ye(t), e.head.appendChild(t))
	}

	function Ra(e) {
		return '[src="' + St(e) + '"]'
	}

	function Mn(e) {
		return "script[async]" + e
	}

	function Td(e, t, l) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var a = e.querySelector('style[data-href~="' + St(l.href) + '"]');
				if (a) return t.instance = a, Ye(a), a;
				var n = U({}, l, {
					"data-href": l.href,
					"data-precedence": l.precedence,
					href: null,
					precedence: null
				});
				return a = (e.ownerDocument || e).createElement("style"), Ye(a), ke(a, "style", n), Zi(a, l.precedence, e), t.instance = a;
			case "stylesheet":
				n = Da(l.href);
				var i = e.querySelector(_n(n));
				if (i) return t.state.loading |= 4, t.instance = i, Ye(i), i;
				a = Ad(l), (n = Mt.get(n)) && gc(a, n), i = (e.ownerDocument || e).createElement("link"), Ye(i);
				var s = i;
				return s._p = new Promise(function(r, m) {
					s.onload = r, s.onerror = m
				}), ke(i, "link", a), t.state.loading |= 4, Zi(i, l.precedence, e), t.instance = i;
			case "script":
				return i = Ra(l.src), (n = e.querySelector(Mn(i))) ? (t.instance = n, Ye(n), n) : (a = l, (n = Mt.get(i)) && (a = U({}, l), vc(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), Ye(n), ke(n, "link", a), e.head.appendChild(n), t.instance = n);
			case "void":
				return null;
			default:
				throw Error(d(443, t.type))
		} else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Zi(a, l.precedence, e));
		return t.instance
	}

	function Zi(e, t, l) {
		for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, i = n, s = 0; s < a.length; s++) {
			var r = a[s];
			if (r.dataset.precedence === t) i = r;
			else if (i !== n) break
		}
		i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild))
	}

	function gc(e, t) {
		e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title)
	}

	function vc(e, t) {
		e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity)
	}
	var Vi = null;

	function _d(e, t, l) {
		if (Vi === null) {
			var a = new Map,
				n = Vi = new Map;
			n.set(l, a)
		} else n = Vi, a = n.get(l), a || (a = new Map, n.set(l, a));
		if (a.has(e)) return a;
		for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
			var i = l[n];
			if (!(i[Za] || i[Ze] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
				var s = i.getAttribute(t) || "";
				s = e + s;
				var r = a.get(s);
				r ? r.push(i) : a.set(s, [i])
			}
		}
		return a
	}

	function Md(e, t, l) {
		e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null)
	}

	function tx(e, t, l) {
		if (l === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title":
				return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet":
						return e = t.disabled, typeof t.precedence == "string" && e == null;
					default:
						return !0
				}
			case "script":
				if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
		}
		return !1
	}

	function wd(e) {
		return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
	}

	function lx(e, t, l, a) {
		if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
			if (l.instance === null) {
				var n = Da(a.href),
					i = t.querySelector(_n(n));
				if (i) {
					t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ki.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = i, Ye(i);
					return
				}
				i = t.ownerDocument || t, a = Ad(a), (n = Mt.get(n)) && gc(a, n), i = i.createElement("link"), Ye(i);
				var s = i;
				s._p = new Promise(function(r, m) {
					s.onload = r, s.onerror = m
				}), ke(i, "link", a), l.instance = i
			}
			e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = Ki.bind(e), t.addEventListener("load", l), t.addEventListener("error", l))
		}
	}
	var pc = 0;

	function ax(e, t) {
		return e.stylesheets && e.count === 0 && ki(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
			var a = setTimeout(function() {
				if (e.stylesheets && ki(e, e.stylesheets), e.unsuspend) {
					var i = e.unsuspend;
					e.unsuspend = null, i()
				}
			}, 6e4 + t);
			0 < e.imgBytes && pc === 0 && (pc = 62500 * Bh());
			var n = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ki(e, e.stylesheets), e.unsuspend)) {
					var i = e.unsuspend;
					e.unsuspend = null, i()
				}
			}, (e.imgBytes > pc ? 50 : 800) + t);
			return e.unsuspend = l,
				function() {
					e.unsuspend = null, clearTimeout(a), clearTimeout(n)
				}
		} : null
	}

	function Ki() {
		if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
			if (this.stylesheets) ki(this, this.stylesheets);
			else if (this.unsuspend) {
				var e = this.unsuspend;
				this.unsuspend = null, e()
			}
		}
	}
	var Ji = null;

	function ki(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, Ji = new Map, t.forEach(nx, e), Ji = null, Ki.call(e))
	}

	function nx(e, t) {
		if (!(t.state.loading & 4)) {
			var l = Ji.get(e);
			if (l) var a = l.get(null);
			else {
				l = new Map, Ji.set(e, l);
				for (var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < n.length; i++) {
					var s = n[i];
					(s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (l.set(s.dataset.precedence, s), a = s)
				}
				a && l.set(null, a)
			}
			n = t.instance, s = n.getAttribute("data-precedence"), i = l.get(s) || a, i === a && l.set(null, n), l.set(s, n), this.count++, a = Ki.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), i ? i.parentNode.insertBefore(n, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4
		}
	}
	var wn = {
		$$typeof: ue,
		Provider: null,
		Consumer: null,
		_currentValue: H,
		_currentValue2: H,
		_threadCount: 0
	};

	function ix(e, t, l, a, n, i, s, r, m) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = hu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hu(0), this.hiddenUpdates = hu(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = new Map
	}

	function Od(e, t, l, a, n, i, s, r, m, b, T, O) {
		return e = new ix(e, t, l, s, m, b, T, O, r), t = 1, i === !0 && (t |= 24), i = dt(3, null, null, t), e.current = i, i.stateNode = e, t = Iu(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
			element: a,
			isDehydrated: l,
			cache: t
		}, ls(i), e
	}

	function Dd(e) {
		return e ? (e = fa, e) : fa
	}

	function Rd(e, t, l, a, n, i) {
		n = Dd(n), a.context === null ? a.context = n : a.pendingContext = n, a = dl(t), a.payload = {
			element: l
		}, i = i === void 0 ? null : i, i !== null && (a.callback = i), l = ml(e, a, t), l !== null && (st(l, e, t), cn(l, e, t))
	}

	function Ud(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var l = e.retryLane;
			e.retryLane = l !== 0 && l < t ? l : t
		}
	}

	function bc(e, t) {
		Ud(e, t), (e = e.alternate) && Ud(e, t)
	}

	function Cd(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Hl(e, 67108864);
			t !== null && st(t, e, 67108864), bc(e, 67108864)
		}
	}

	function Hd(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = gt();
			t = xu(t);
			var l = Hl(e, t);
			l !== null && st(l, e, t), bc(e, t)
		}
	}
	var $i = !0;

	function ux(e, t, l, a) {
		var n = j.T;
		j.T = null;
		var i = D.p;
		try {
			D.p = 2, Sc(e, t, l, a)
		} finally {
			D.p = i, j.T = n
		}
	}

	function sx(e, t, l, a) {
		var n = j.T;
		j.T = null;
		var i = D.p;
		try {
			D.p = 8, Sc(e, t, l, a)
		} finally {
			D.p = i, j.T = n
		}
	}

	function Sc(e, t, l, a) {
		if ($i) {
			var n = jc(a);
			if (n === null) sc(e, t, a, Wi, l), qd(e, a);
			else if (rx(n, e, t, l, a)) a.stopPropagation();
			else if (qd(e, a), t & 4 && -1 < cx.indexOf(e)) {
				for (; n !== null;) {
					var i = Pl(n);
					if (i !== null) switch (i.tag) {
						case 3:
							if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
								var s = Ol(i.pendingLanes);
								if (s !== 0) {
									var r = i;
									for (r.pendingLanes |= 2, r.entangledLanes |= 2; s;) {
										var m = 1 << 31 - ft(s);
										r.entanglements[1] |= m, s &= ~m
									}
									qt(i), (re & 6) === 0 && (Di = ct() + 500, En(0))
								}
							}
							break;
						case 31:
						case 13:
							r = Hl(i, 2), r !== null && st(r, i, 2), Ui(), bc(i, 2)
					}
					if (i = jc(a), i === null && sc(e, t, a, Wi, l), i === n) break;
					n = i
				}
				n !== null && a.stopPropagation()
			} else sc(e, t, a, null, l)
		}
	}

	function jc(e) {
		return e = Eu(e), Nc(e)
	}
	var Wi = null;

	function Nc(e) {
		if (Wi = null, e = Il(e), e !== null) {
			var t = S(e);
			if (t === null) e = null;
			else {
				var l = t.tag;
				if (l === 13) {
					if (e = M(t), e !== null) return e;
					e = null
				} else if (l === 31) {
					if (e = A(t), e !== null) return e;
					e = null
				} else if (l === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null
				} else t !== e && (e = null)
			}
		}
		return Wi = e, null
	}

	function Bd(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart":
				return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave":
				return 8;
			case "message":
				switch (J0()) {
					case Qc:
						return 2;
					case Zc:
						return 8;
					case Yn:
					case k0:
						return 32;
					case Vc:
						return 268435456;
					default:
						return 32
				}
			default:
				return 32
		}
	}
	var Ec = !1,
		El = null,
		zl = null,
		Al = null,
		On = new Map,
		Dn = new Map,
		Tl = [],
		cx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

	function qd(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				El = null;
				break;
			case "dragenter":
			case "dragleave":
				zl = null;
				break;
			case "mouseover":
			case "mouseout":
				Al = null;
				break;
			case "pointerover":
			case "pointerout":
				On.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				Dn.delete(t.pointerId)
		}
	}

	function Rn(e, t, l, a, n, i) {
		return e === null || e.nativeEvent !== i ? (e = {
			blockedOn: t,
			domEventName: l,
			eventSystemFlags: a,
			nativeEvent: i,
			targetContainers: [n]
		}, t !== null && (t = Pl(t), t !== null && Cd(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e)
	}

	function rx(e, t, l, a, n) {
		switch (t) {
			case "focusin":
				return El = Rn(El, e, t, l, a, n), !0;
			case "dragenter":
				return zl = Rn(zl, e, t, l, a, n), !0;
			case "mouseover":
				return Al = Rn(Al, e, t, l, a, n), !0;
			case "pointerover":
				var i = n.pointerId;
				return On.set(i, Rn(On.get(i) || null, e, t, l, a, n)), !0;
			case "gotpointercapture":
				return i = n.pointerId, Dn.set(i, Rn(Dn.get(i) || null, e, t, l, a, n)), !0
		}
		return !1
	}

	function Yd(e) {
		var t = Il(e.target);
		if (t !== null) {
			var l = S(t);
			if (l !== null) {
				if (t = l.tag, t === 13) {
					if (t = M(l), t !== null) {
						e.blockedOn = t, Fc(e.priority, function() {
							Hd(l)
						});
						return
					}
				} else if (t === 31) {
					if (t = A(l), t !== null) {
						e.blockedOn = t, Fc(e.priority, function() {
							Hd(l)
						});
						return
					}
				} else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
					return
				}
			}
		}
		e.blockedOn = null
	}

	function Fi(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var l = jc(e.nativeEvent);
			if (l === null) {
				l = e.nativeEvent;
				var a = new l.constructor(l.type, l);
				Nu = a, l.target.dispatchEvent(a), Nu = null
			} else return t = Pl(l), t !== null && Cd(t), e.blockedOn = l, !1;
			t.shift()
		}
		return !0
	}

	function Xd(e, t, l) {
		Fi(e) && l.delete(t)
	}

	function fx() {
		Ec = !1, El !== null && Fi(El) && (El = null), zl !== null && Fi(zl) && (zl = null), Al !== null && Fi(Al) && (Al = null), On.forEach(Xd), Dn.forEach(Xd)
	}

	function Ii(e, t) {
		e.blockedOn === t && (e.blockedOn = null, Ec || (Ec = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, fx)))
	}
	var Pi = null;

	function Gd(e) {
		Pi !== e && (Pi = e, f.unstable_scheduleCallback(f.unstable_NormalPriority, function() {
			Pi === e && (Pi = null);
			for (var t = 0; t < e.length; t += 3) {
				var l = e[t],
					a = e[t + 1],
					n = e[t + 2];
				if (typeof a != "function") {
					if (Nc(a || l) === null) continue;
					break
				}
				var i = Pl(l);
				i !== null && (e.splice(t, 3), t -= 3, js(i, {
					pending: !0,
					data: n,
					method: l.method,
					action: a
				}, a, n))
			}
		}))
	}

	function Ua(e) {
		function t(m) {
			return Ii(m, e)
		}
		El !== null && Ii(El, e), zl !== null && Ii(zl, e), Al !== null && Ii(Al, e), On.forEach(t), Dn.forEach(t);
		for (var l = 0; l < Tl.length; l++) {
			var a = Tl[l];
			a.blockedOn === e && (a.blockedOn = null)
		}
		for (; 0 < Tl.length && (l = Tl[0], l.blockedOn === null);) Yd(l), l.blockedOn === null && Tl.shift();
		if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
			for (a = 0; a < l.length; a += 3) {
				var n = l[a],
					i = l[a + 1],
					s = n[tt] || null;
				if (typeof i == "function") s || Gd(l);
				else if (s) {
					var r = null;
					if (i && i.hasAttribute("formAction")) {
						if (n = i, s = i[tt] || null) r = s.formAction;
						else if (Nc(n) !== null) continue
					} else r = s.action;
					typeof r == "function" ? l[a + 1] = r : (l.splice(a, 3), a -= 3), Gd(l)
				}
			}
	}

	function Ld() {
		function e(i) {
			i.canIntercept && i.info === "react-transition" && i.intercept({
				handler: function() {
					return new Promise(function(s) {
						return n = s
					})
				},
				focusReset: "manual",
				scroll: "manual"
			})
		}

		function t() {
			n !== null && (n(), n = null), a || setTimeout(l, 20)
		}

		function l() {
			if (!a && !navigation.transition) {
				var i = navigation.currentEntry;
				i && i.url != null && navigation.navigate(i.url, {
					state: i.getState(),
					info: "react-transition",
					history: "replace"
				})
			}
		}
		if (typeof navigation == "object") {
			var a = !1,
				n = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100),
				function() {
					a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null)
				}
		}
	}

	function zc(e) {
		this._internalRoot = e
	}
	eu.prototype.render = zc.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(d(409));
		var l = t.current,
			a = gt();
		Rd(l, a, e, t, null, null)
	}, eu.prototype.unmount = zc.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			Rd(e.current, 2, null, e, null, null), Ui(), t[Fl] = null
		}
	};

	function eu(e) {
		this._internalRoot = e
	}
	eu.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = Wc();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var l = 0; l < Tl.length && t !== 0 && t < Tl[l].priority; l++);
			Tl.splice(l, 0, e), l === 0 && Yd(e)
		}
	};
	var Qd = c.version;
	if (Qd !== "19.2.4") throw Error(d(527, Qd, "19.2.4"));
	D.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(d(188)) : (e = Object.keys(e).join(","), Error(d(268, e)));
		return e = v(t), e = e !== null ? C(e) : null, e = e === null ? null : e.stateNode, e
	};
	var ox = {
		bundleType: 0,
		version: "19.2.4",
		rendererPackageName: "react-dom",
		currentDispatcherRef: j,
		reconcilerVersion: "19.2.4"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var tu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!tu.isDisabled && tu.supportsFiber) try {
			Ga = tu.inject(ox), rt = tu
		} catch {}
	}
	return Cn.createRoot = function(e, t) {
		if (!h(e)) throw Error(d(299));
		var l = !1,
			a = "",
			n = $f,
			i = Wf,
			s = Ff;
		return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Od(e, 1, !1, null, null, l, a, null, n, i, s, Ld), e[Fl] = t.current, uc(e), new zc(t)
	}, Cn.hydrateRoot = function(e, t, l) {
		if (!h(e)) throw Error(d(299));
		var a = !1,
			n = "",
			i = $f,
			s = Wf,
			r = Ff,
			m = null;
		return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (s = l.onCaughtError), l.onRecoverableError !== void 0 && (r = l.onRecoverableError), l.formState !== void 0 && (m = l.formState)), t = Od(e, 1, !0, t, l ?? null, a, n, m, i, s, r, Ld), t.context = Dd(null), l = t.current, a = gt(), a = xu(a), n = dl(a), n.callback = null, ml(l, n, a), l = a, t.current.lanes = l, Qa(t, l), qt(t), e[Fl] = t.current, uc(e), new eu(t)
	}, Cn.version = "19.2.4", Cn
}
var Pd;

function Sx() {
	if (Pd) return _c.exports;
	Pd = 1;

	function f() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)
		} catch (c) {
			console.error(c)
		}
	}
	return f(), _c.exports = bx(), _c.exports
}
var jx = Sx();
const Nx = f0(jx),
	Ex = () => {
		const f = L.useRef(null);
		return L.useEffect(() => {
			const c = f.current;
			if (!c) return;
			const o = c.getContext("2d");
			if (!o) return;
			let d, h = [];
			const S = () => {
					c.width = window.innerWidth, c.height = window.innerHeight, h = [];
					const E = window.innerWidth < 768,
						C = Math.round((E ? 100 : 250) * (1.5 / 1.4));
					for (let U = 0; U < C; U++) {
						const X = .18 + Math.random() * .6,
							J = .015 + Math.random() * .03,
							V = Math.random() * Math.PI * 2,
							K = (Math.random() * .2 + .02) * (E ? .6 : 1);
						h.push({
							x: Math.random() * c.width,
							y: Math.random() * c.height,
							size: (.3 + Math.random() * .8) * 1.5,
							baseOpacity: Math.min(1, X),
							phase: Math.random() * Math.PI * 2,
							pulseSpeed: J,
							vx: Math.cos(V) * K * .66,
							vy: Math.sin(V) * K * .66
						})
					}
				},
				M = () => {
					!c || !o || (o.clearRect(0, 0, c.width, c.height), h.forEach(E => {
						const v = Math.sin(E.phase) * .4,
							C = Math.max(0, Math.min(1, E.baseOpacity + v));
						o.fillStyle = `rgba(255, 255, 255, ${C})`, o.beginPath(), o.arc(E.x, E.y, E.size, 0, Math.PI * 2), o.fill(), E.x += E.vx, E.y += E.vy, E.x < -10 && (E.x = c.width + 10), E.x > c.width + 10 && (E.x = -10), E.y < -10 && (E.y = c.height + 10), E.y > c.height + 10 && (E.y = -10), E.phase += E.pulseSpeed
					}), d = requestAnimationFrame(M))
				};
			S(), M();
			const A = () => {
				S()
			};
			return window.addEventListener("resize", A), () => {
				cancelAnimationFrame(d), window.removeEventListener("resize", A)
			}
		}, []), u.jsx("canvas", {
			ref: f,
			className: "fixed inset-0 pointer-events-none z-[-2]"
		})
	},
	zx = () => {
		const f = L.useRef(null);
		return L.useEffect(() => {
			const c = f.current;
			if (!c) return;
			const o = c.getContext("2d");
			if (!o) return;
			let d;
			const h = () => {
					c.width = window.innerWidth, c.height = window.innerHeight
				},
				S = () => {
					const M = Date.now() * 5e-4;
					h(), o.clearRect(0, 0, c.width, c.height);
					const A = o.createRadialGradient(c.width * .2 + Math.cos(M) * 120, c.height * .3 + Math.sin(M) * 70, 0, c.width * .2, c.height * .3, 800);
					A.addColorStop(0, "rgba(0, 255, 136, 0.059)"), A.addColorStop(.6, "rgba(0, 255, 136, 0.0195)"), A.addColorStop(1, "transparent");
					const E = o.createRadialGradient(c.width * .8 + Math.sin(M) * 120, c.height * .7 + Math.cos(M) * 70, 0, c.width * .8, c.height * .7, 800);
					E.addColorStop(0, "rgba(0, 204, 102, 0.049)"), E.addColorStop(.6, "rgba(0, 204, 102, 0.01725)"), E.addColorStop(1, "transparent"), o.fillStyle = A, o.fillRect(0, 0, c.width, c.height), o.fillStyle = E, o.fillRect(0, 0, c.width, c.height), d = requestAnimationFrame(S)
				};
			return h(), S(), () => cancelAnimationFrame(d)
		}, []), u.jsx("canvas", {
			ref: f,
			className: "fixed inset-0 pointer-events-none z-[-1]"
		})
	},
	Ax = ({
		active: f
	}) => {
		const c = L.useRef(null),
			[o, d] = L.useState(f);
		return L.useEffect(() => {
			let h;
			return f ? d(!0) : h = setTimeout(() => d(!1), 500), () => clearTimeout(h)
		}, [f]), L.useEffect(() => {
			if (!o) return;
			const h = c.current;
			if (!h) return;
			const S = h.getContext("2d");
			if (!S) return;
			let M;
			h.width = window.innerWidth, h.height = window.innerHeight;
			const A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()",
				E = [],
				v = 15,
				C = Math.ceil(h.width / v);
			for (let J = 0; J < C; J++) E[J] = 1;
			const U = () => {
				if (!(!h || !S)) {
					S.fillStyle = "rgba(5, 5, 5, 0.05)", S.fillRect(0, 0, h.width, h.height), S.fillStyle = "#00ff88", S.font = `${v}px JetBrains Mono`;
					for (let J = 0; J < E.length; J++) {
						const V = A[Math.floor(Math.random() * A.length)];
						S.fillText(V, J * v, E[J] * v), E[J] * v > h.height && Math.random() > .975 && (E[J] = 0), E[J]++
					}
					M = requestAnimationFrame(U)
				}
			};
			U();
			const X = () => {
				h.width = window.innerWidth, h.height = window.innerHeight
			};
			return window.addEventListener("resize", X), () => {
				cancelAnimationFrame(M), window.removeEventListener("resize", X)
			}
		}, [o]), u.jsx("canvas", {
			ref: c,
			className: `fixed inset-0 z-[9998] pointer-events-none transition-opacity duration-500 ${f?"opacity-100":"opacity-0"}`
		})
	},
	Ca = "0.37.0";
let e0 = !1,
	Hn, o0, d0, Uc, m0, h0, x0, y0, g0;

function Tx(f, c = {
	auto: !1
}) {
	if (e0) throw new Error(`you must \`import 'groq-sdk/shims/${f.kind}'\` before importing anything else from groq-sdk`);
	if (Hn) throw new Error(`can't \`import 'groq-sdk/shims/${f.kind}'\` after \`import 'groq-sdk/shims/${Hn}'\``);
	e0 = c.auto, Hn = f.kind, o0 = f.fetch, d0 = f.FormData, Uc = f.File, m0 = f.ReadableStream, h0 = f.getMultipartRequestOptions, x0 = f.getDefaultAgent, y0 = f.fileFromPath, g0 = f.isFsReadStream
}
class _x {
	constructor(c) {
		this.body = c
	}
	get[Symbol.toStringTag]() {
		return "MultipartBody"
	}
}

function Mx({
	manuallyImported: f
} = {}) {
	const c = f ? "You may need to use polyfills" : "Add one of these imports before your first `import … from 'groq-sdk'`:\n- `import 'groq-sdk/shims/node'` (if you're running on Node)\n- `import 'groq-sdk/shims/web'` (otherwise)\n";
	let o, d, h, S;
	try {
		o = fetch, d = Request, h = Response, S = Headers
	} catch (M) {
		throw new Error(`this environment is missing the following Web Fetch API type: ${M.message}. ${c}`)
	}
	return {
		kind: "web",
		fetch: o,
		Request: d,
		Response: h,
		Headers: S,
		FormData: typeof FormData < "u" ? FormData : class {
			constructor() {
				throw new Error(`file uploads aren't supported in this environment yet as 'FormData' is undefined. ${c}`)
			}
		},
		Blob: typeof Blob < "u" ? Blob : class {
			constructor() {
				throw new Error(`file uploads aren't supported in this environment yet as 'Blob' is undefined. ${c}`)
			}
		},
		File: typeof File < "u" ? File : class {
			constructor() {
				throw new Error(`file uploads aren't supported in this environment yet as 'File' is undefined. ${c}`)
			}
		},
		ReadableStream: typeof ReadableStream < "u" ? ReadableStream : class {
			constructor() {
				throw new Error(`streaming isn't supported in this environment yet as 'ReadableStream' is undefined. ${c}`)
			}
		},
		getMultipartRequestOptions: async (M, A) => ({
			...A,
			body: new _x(M)
		}),
		getDefaultAgent: M => {},
		fileFromPath: () => {
			throw new Error("The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/groq/groq-typescript#file-uploads")
		},
		isFsReadStream: M => !1
	}
}
const v0 = () => {
	Hn || Tx(Mx(), {
		auto: !0
	})
};
v0();
class Rt extends Error {}
class Fe extends Rt {
	constructor(c, o, d, h) {
		super(`${Fe.makeMessage(c,o,d)}`), this.status = c, this.headers = h, this.error = o
	}
	static makeMessage(c, o, d) {
		const h = o != null && o.message ? typeof o.message == "string" ? o.message : JSON.stringify(o.message) : o ? JSON.stringify(o) : d;
		return c && h ? `${c} ${h}` : c ? `${c} status code (no body)` : h || "(no status code or body)"
	}
	static generate(c, o, d, h) {
		if (!c || !h) return new iu({
			message: d,
			cause: Bc(o)
		});
		const S = o;
		return c === 400 ? new b0(c, S, d, h) : c === 401 ? new S0(c, S, d, h) : c === 403 ? new j0(c, S, d, h) : c === 404 ? new N0(c, S, d, h) : c === 409 ? new E0(c, S, d, h) : c === 422 ? new z0(c, S, d, h) : c === 429 ? new A0(c, S, d, h) : c >= 500 ? new T0(c, S, d, h) : new Fe(c, S, d, h)
	}
}
class Cc extends Fe {
	constructor({
		message: c
	} = {}) {
		super(void 0, void 0, c || "Request was aborted.", void 0)
	}
}
class iu extends Fe {
	constructor({
		message: c,
		cause: o
	}) {
		super(void 0, void 0, c || "Connection error.", void 0), o && (this.cause = o)
	}
}
class p0 extends iu {
	constructor({
		message: c
	} = {}) {
		super({
			message: c ?? "Request timed out."
		})
	}
}
class b0 extends Fe {}
class S0 extends Fe {}
class j0 extends Fe {}
class N0 extends Fe {}
class E0 extends Fe {}
class z0 extends Fe {}
class A0 extends Fe {}
class T0 extends Fe {}
class Ha {
	constructor(c, o) {
		this.iterator = c, this.controller = o
	}
	static fromSSEResponse(c, o) {
		let d = !1;
		const h = new wx;
		async function* S() {
			if (!c.body) throw o.abort(), new Rt("Attempted to iterate over a response with no body");
			const A = new $l,
				E = t0(c.body);
			for await (const v of E) for (const C of A.decode(v)) {
				const U = h.decode(C);
				U && (yield U)
			}
			for (const v of A.flush()) {
				const C = h.decode(v);
				C && (yield C)
			}
		}
		async function* M() {
			if (d) throw new Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
			d = !0;
			let A = !1;
			try {
				for await (const E of S()) if (!A) {
					if (E.data.startsWith("[DONE]")) {
						A = !0;
						continue
					}
					if (E.event === null || E.event === "error") {
						let v;
						try {
							v = JSON.parse(E.data)
						} catch (C) {
							throw console.error("Could not parse message into JSON:", E.data), console.error("From chunk:", E.raw), C
						}
						if (v && v.error) throw new Fe(v.error.status_code, v.error, v.error.message, void 0);
						yield v
					}
				}
				A = !0
			} catch (E) {
				if (E instanceof Error && E.name === "AbortError") return;
				throw E
			} finally {
				A || o.abort()
			}
		}
		return new Ha(M, o)
	}
	static fromReadableStream(c, o) {
		let d = !1;
		async function* h() {
			const M = new $l,
				A = t0(c);
			for await (const E of A) for (const v of M.decode(E)) yield v;
			for (const E of M.flush()) yield E
		}
		async function* S() {
			if (d) throw new Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
			d = !0;
			let M = !1;
			try {
				for await (const A of h()) M || A && (yield JSON.parse(A));
				M = !0
			} catch (A) {
				if (A instanceof Error && A.name === "AbortError") return;
				throw A
			} finally {
				M || o.abort()
			}
		}
		return new Ha(S, o)
	} [Symbol.asyncIterator]() {
		return this.iterator()
	}
	tee() {
		const c = [],
			o = [],
			d = this.iterator(),
			h = S => ({
				next: () => {
					if (S.length === 0) {
						const M = d.next();
						c.push(M), o.push(M)
					}
					return S.shift()
				}
			});
		return [new Ha(() => h(c), this.controller), new Ha(() => h(o), this.controller)]
	}
	toReadableStream() {
		const c = this;
		let o;
		const d = new TextEncoder;
		return new m0({
			async start() {
				o = c[Symbol.asyncIterator]()
			},
			async pull(h) {
				try {
					const {
						value: S,
						done: M
					} = await o.next();
					if (M) return h.close();
					const A = d.encode(JSON.stringify(S) + `
`);
					h.enqueue(A)
				} catch (S) {
					h.error(S)
				}
			},
			async cancel() {
				var h;
				await ((h = o.return) == null ? void 0 : h.call(o))
			}
		})
	}
}
class wx {
	constructor() {
		this.event = null, this.data = [], this.chunks = []
	}
	decode(c) {
		if (c.endsWith("\r") && (c = c.substring(0, c.length - 1)), !c) {
			if (!this.event && !this.data.length) return null;
			const S = {
				event: this.event,
				data: this.data.join(`
`),
				raw: this.chunks
			};
			return this.event = null, this.data = [], this.chunks = [], S
		}
		if (this.chunks.push(c), c.startsWith(":")) return null;
		let [o, d, h] = Ox(c, ":");
		return h.startsWith(" ") && (h = h.substring(1)), o === "event" ? this.event = h : o === "data" && this.data.push(h), null
	}
}
class $l {
	constructor() {
		this.buffer = [], this.trailingCR = !1
	}
	decode(c) {
		let o = this.decodeText(c);
		if (this.trailingCR && (o = "\r" + o, this.trailingCR = !1), o.endsWith("\r") && (this.trailingCR = !0, o = o.slice(0, -1)), !o) return [];
		const d = $l.NEWLINE_CHARS.has(o[o.length - 1] || "");
		let h = o.split($l.NEWLINE_REGEXP);
		return h.length === 1 && !d ? (this.buffer.push(h[0]), []) : (this.buffer.length > 0 && (h = [this.buffer.join("") + h[0], ...h.slice(1)], this.buffer = []), d || (this.buffer = [h.pop() || ""]), h)
	}
	decodeText(c) {
		if (c == null) return "";
		if (typeof c == "string") return c;
		if (typeof Buffer < "u") {
			if (c instanceof Buffer) return c.toString();
			if (c instanceof Uint8Array) return Buffer.from(c).toString();
			throw new Rt(`Unexpected: received non-Uint8Array (${c.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`)
		}
		if (typeof TextDecoder < "u") {
			if (c instanceof Uint8Array || c instanceof ArrayBuffer) return this.textDecoder ?? (this.textDecoder = new TextDecoder("utf8")), this.textDecoder.decode(c);
			throw new Rt(`Unexpected: received non-Uint8Array/ArrayBuffer (${c.constructor.name}) in a web platform. Please report this error.`)
		}
		throw new Rt("Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error.")
	}
	flush() {
		if (!this.buffer.length && !this.trailingCR) return [];
		const c = [this.buffer.join("")];
		return this.buffer = [], this.trailingCR = !1, c
	}
}
$l.NEWLINE_CHARS = new Set([`
`, "\r", "\v", "\f", "", "", "", "", "\u2028", "\u2029"]);
$l.NEWLINE_REGEXP = /\r\n|[\n\r\x0b\x0c\x1c\x1d\x1e\x85\u2028\u2029]/g;

function Ox(f, c) {
	const o = f.indexOf(c);
	return o !== -1 ? [f.substring(0, o), c, f.substring(o + c.length)] : [f, "", ""]
}

function t0(f) {
	if (f[Symbol.asyncIterator]) return f;
	const c = f.getReader();
	return {
		async next() {
			try {
				const o = await c.read();
				return o != null && o.done && c.releaseLock(), o
			} catch (o) {
				throw c.releaseLock(), o
			}
		},
		async return () {
			const o = c.cancel();
			return c.releaseLock(), await o, {
				done: !0,
				value: void 0
			}
		},
		[Symbol.asyncIterator]() {
			return this
		}
	}
}
const _0 = f => f != null && typeof f == "object" && typeof f.url == "string" && typeof f.blob == "function",
	M0 = f => f != null && typeof f == "object" && typeof f.name == "string" && typeof f.lastModified == "number" && uu(f),
	uu = f => f != null && typeof f == "object" && typeof f.size == "number" && typeof f.type == "string" && typeof f.text == "function" && typeof f.slice == "function" && typeof f.arrayBuffer == "function",
	Dx = f => M0(f) || _0(f) || g0(f);
async function w0(f, c, o) {
	var h;
	if (f = await f, M0(f)) return f;
	if (_0(f)) {
		const S = await f.blob();
		c || (c = new URL(f.url).pathname.split(/[\\/]/).pop() ?? "unknown_file");
		const M = uu(S) ? [await S.arrayBuffer()] : [S];
		return new Uc(M, c, o)
	}
	const d = await Rx(f);
	if (c || (c = Cx(f) ?? "unknown_file"), !(o != null && o.type)) {
		const S = (h = d[0]) == null ? void 0 : h.type;
		typeof S == "string" && (o = {
			...o,
			type: S
		})
	}
	return new Uc(d, c, o)
}
async function Rx(f) {
	var o;
	let c = [];
	if (typeof f == "string" || ArrayBuffer.isView(f) || f instanceof ArrayBuffer) c.push(f);
	else if (uu(f)) c.push(await f.arrayBuffer());
	else if (Hx(f))
		for await (const d of f) c.push(d);
	else throw new Error(`Unexpected data type: ${typeof f}; constructor: ${(o=f==null?void 0:f.constructor)==null?void 0:o.name}; props: ${Ux(f)}`);
	return c
}

function Ux(f) {
	return `[${Object.getOwnPropertyNames(f).map(o=>`"${o}"`).join(", ")}]`
}

function Cx(f) {
	var c;
	return Dc(f.name) || Dc(f.filename) || ((c = Dc(f.path)) == null ? void 0 : c.split(/[\\/]/).pop())
}
const Dc = f => {
		if (typeof f == "string") return f;
		if (typeof Buffer < "u" && f instanceof Buffer) return String(f)
	},
	Hx = f => f != null && typeof f == "object" && typeof f[Symbol.asyncIterator] == "function",
	l0 = f => f && typeof f == "object" && f.body && f[Symbol.toStringTag] === "MultipartBody",
	Yc = async f => {
		const c = await Bx(f.body);
		return h0(c, f)
	}, Bx = async f => {
		const c = new d0;
		return await Promise.all(Object.entries(f || {}).map(([o, d]) => Hc(c, o, d))), c
	}, Hc = async (f, c, o) => {
		if (o !== void 0) {
			if (o == null) throw new TypeError(`Received null for "${c}"; to pass null in FormData, you must use the string 'null'`);
			if (typeof o == "string" || typeof o == "number" || typeof o == "boolean") f.append(c, String(o));
			else if (Dx(o)) {
				const d = await w0(o);
				f.append(c, d)
			} else if (Array.isArray(o)) await Promise.all(o.map(d => Hc(f, c + "[]", d)));
			else if (typeof o == "object") await Promise.all(Object.entries(o).map(([d, h]) => Hc(f, `${c}[${d}]`, h)));
			else throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${o} instead`)
		}
	};
var Ba = {},
	qx = function(f, c, o, d, h) {
		if (typeof c == "function" ? f !== c || !0 : !c.has(f)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
		return c.set(f, o), o
	},
	Yx = function(f, c, o, d) {
		if (typeof c == "function" ? f !== c || !0 : !c.has(f)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
		return c.get(f)
	},
	nu;
v0();
async function O0(f) {
	var M;
	const {
		response: c
	} = f;
	if (f.options.stream) return qa("response", c.status, c.url, c.headers, c.body), f.options.__streamClass ? f.options.__streamClass.fromSSEResponse(c, f.controller) : Ha.fromSSEResponse(c, f.controller);
	if (c.status === 204) return null;
	if (f.options.__binaryResponse) return c;
	const o = c.headers.get("content-type"),
		d = (M = o == null ? void 0 : o.split(";")[0]) == null ? void 0 : M.trim();
	if ((d == null ? void 0 : d.includes("application/json")) || (d == null ? void 0 : d.endsWith("+json"))) {
		const A = await c.json();
		return qa("response", c.status, c.url, c.headers, A), A
	}
	const S = await c.text();
	return qa("response", c.status, c.url, c.headers, S), S
}
class su extends Promise {
	constructor(c, o = O0) {
		super(d => {
			d(null)
		}), this.responsePromise = c, this.parseResponse = o
	}
	_thenUnwrap(c) {
		return new su(this.responsePromise, async o => c(await this.parseResponse(o), o))
	}
	asResponse() {
		return this.responsePromise.then(c => c.response)
	}
	async withResponse() {
		const [c, o] = await Promise.all([this.parse(), this.asResponse()]);
		return {
			data: c,
			response: o
		}
	}
	parse() {
		return this.parsedPromise || (this.parsedPromise = this.responsePromise.then(this.parseResponse)), this.parsedPromise
	}
	then(c, o) {
		return this.parse().then(c, o)
	} catch (c) {
		return this.parse().catch(c)
	} finally(c) {
		return this.parse().finally(c)
	}
}
class Xx {
	constructor({
		baseURL: c,
		baseURLOverridden: o,
		maxRetries: d = 2,
		timeout: h = 6e4,
		httpAgent: S,
		fetch: M
	}) {
		nu.set(this, void 0), this.baseURL = c, qx(this, nu, o), this.maxRetries = Rc("maxRetries", d), this.timeout = Rc("timeout", h), this.httpAgent = S, this.fetch = M ?? o0
	}
	authHeaders(c) {
		return {}
	}
	defaultHeaders(c) {
		return {
			Accept: "application/json",
			...["head", "get"].includes(c.method) ? {} : {
				"Content-Type": "application/json"
			},
			"User-Agent": this.getUserAgent(),
			...Vx(),
			...this.authHeaders(c)
		}
	}
	validateHeaders(c, o) {}
	defaultIdempotencyKey() {
		return `stainless-node-retry-${Ix()}`
	}
	get(c, o) {
		return this.methodRequest("get", c, o)
	}
	post(c, o) {
		return this.methodRequest("post", c, o)
	}
	patch(c, o) {
		return this.methodRequest("patch", c, o)
	}
	put(c, o) {
		return this.methodRequest("put", c, o)
	}
	delete(c, o) {
		return this.methodRequest("delete", c, o)
	}
	methodRequest(c, o, d) {
		return this.request(Promise.resolve(d).then(async h => {
			const S = h && uu(h == null ? void 0 : h.body) ? new DataView(await h.body.arrayBuffer()) : (h == null ? void 0 : h.body) instanceof DataView ? h.body : (h == null ? void 0 : h.body) instanceof ArrayBuffer ? new DataView(h.body) : h && ArrayBuffer.isView(h == null ? void 0 : h.body) ? new DataView(h.body.buffer) : h == null ? void 0 : h.body;
			return {
				method: c,
				path: o,
				...h,
				body: S
			}
		}))
	}
	getAPIList(c, o, d) {
		return this.requestAPIList(o, {
			method: "get",
			path: c,
			...d
		})
	}
	calculateContentLength(c) {
		if (typeof c == "string") {
			if (typeof Buffer < "u") return Buffer.byteLength(c, "utf8").toString();
			if (typeof TextEncoder < "u") return new TextEncoder().encode(c).length.toString()
		} else if (ArrayBuffer.isView(c)) return c.byteLength.toString();
		return null
	}
	async buildRequest(c, {
		retryCount: o = 0
	} = {}) {
		var pe;
		const d = {
				...c
			},
			{
				method: h,
				path: S,
				query: M,
				defaultBaseURL: A,
				headers: E = {}
			} = d,
			v = ArrayBuffer.isView(d.body) || d.__binaryRequest && typeof d.body == "string" ? d.body : l0(d.body) ? d.body.body : d.body ? JSON.stringify(d.body, null, 2) : null,
			C = this.calculateContentLength(v),
			U = this.buildURL(S, M, A);
		"timeout" in d && Rc("timeout", d.timeout), d.timeout = d.timeout ?? this.timeout;
		const X = d.httpAgent ?? this.httpAgent ?? x0(U),
			J = d.timeout + 1e3;
		typeof((pe = X == null ? void 0 : X.options) == null ? void 0 : pe.timeout) == "number" && J > (X.options.timeout ?? 0) && (X.options.timeout = J), this.idempotencyHeader && h !== "get" && (c.idempotencyKey || (c.idempotencyKey = this.defaultIdempotencyKey()), E[this.idempotencyHeader] = c.idempotencyKey);
		const V = this.buildHeaders({
			options: d,
			headers: E,
			contentLength: C,
			retryCount: o
		});
		return {
			req: {
				method: h,
				...v && {
					body: v
				},
				headers: V,
				...X && {
					agent: X
				},
				signal: d.signal ?? null
			},
			url: U,
			timeout: d.timeout
		}
	}
	buildHeaders({
		options: c,
		headers: o,
		contentLength: d,
		retryCount: h
	}) {
		const S = {};
		d && (S["content-length"] = d);
		const M = this.defaultHeaders(c);
		return s0(S, M), s0(S, o), l0(c.body) && Hn !== "node" && delete S["content-type"], lu(M, "x-stainless-retry-count") === void 0 && lu(o, "x-stainless-retry-count") === void 0 && (S["x-stainless-retry-count"] = String(h)), lu(M, "x-stainless-timeout") === void 0 && lu(o, "x-stainless-timeout") === void 0 && c.timeout && (S["x-stainless-timeout"] = String(Math.trunc(c.timeout / 1e3))), this.validateHeaders(S, o), S
	}
	async prepareOptions(c) {}
	async prepareRequest(c, {
		url: o,
		options: d
	}) {}
	parseHeaders(c) {
		return c ? Symbol.iterator in c ? Object.fromEntries(Array.from(c).map(o => [...o])) : {
			...c
		} : {}
	}
	makeStatusError(c, o, d, h) {
		return Fe.generate(c, o, d, h)
	}
	request(c, o = null) {
		return new su(this.makeRequest(c, o))
	}
	async makeRequest(c, o) {
		var U, X;
		const d = await c,
			h = d.maxRetries ?? this.maxRetries;
		o == null && (o = h), await this.prepareOptions(d);
		const {
			req: S,
			url: M,
			timeout: A
		} = await this.buildRequest(d, {
			retryCount: h - o
		});
		if (await this.prepareRequest(S, {
				url: M,
				options: d
			}), qa("request", M, d, S.headers), (U = d.signal) != null && U.aborted) throw new Cc;
		const E = new AbortController,
			v = await this.fetchWithTimeout(M, S, A, E).catch(Bc);
		if (v instanceof Error) {
			if ((X = d.signal) != null && X.aborted) throw new Cc;
			if (o) return this.retryRequest(d, o);
			throw v.name === "AbortError" ? new p0 : new iu({
				cause: v
			})
		}
		const C = Lx(v.headers);
		if (!v.ok) {
			if (o && this.shouldRetry(v)) {
				const me = `retrying, ${o} attempts remaining`;
				return qa(`response (error; ${me})`, v.status, M, C), this.retryRequest(d, o, C)
			}
			const J = await v.text().catch(me => Bc(me).message),
				V = Kx(J),
				K = V ? void 0 : J;
			throw qa(`response (error; ${o?"(error; no more retries left)":"(error; not retryable)"})`, v.status, M, C, K), this.makeStatusError(v.status, V, K, C)
		}
		return {
			response: v,
			options: d,
			controller: E
		}
	}
	requestAPIList(c, o) {
		const d = this.makeRequest(o, null);
		return new Gx(this, d, c)
	}
	buildURL(c, o, d) {
		const h = !Yx(this, nu) && d || this.baseURL,
			S = kx(c) ? new URL(c) : new URL(h + (h.endsWith("/") && c.startsWith("/") ? c.slice(1) : c)),
			M = this.defaultQuery();
		return Wx(M) || (o = {
			...M,
			...o
		}), typeof o == "object" && o && !Array.isArray(o) && (S.search = this.stringifyQuery(o)), S.toString()
	}
	stringifyQuery(c) {
		return Object.entries(c).filter(([o, d]) => typeof d < "u").map(([o, d]) => {
			if (typeof d == "string" || typeof d == "number" || typeof d == "boolean") return `${encodeURIComponent(o)}=${encodeURIComponent(d)}`;
			if (d === null) return `${encodeURIComponent(o)}=`;
			throw new Rt(`Cannot stringify type ${typeof d}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)
		}).join("&")
	}
	async fetchWithTimeout(c, o, d, h) {
		const {
			signal: S,
			...M
		} = o || {};
		S && S.addEventListener("abort", () => h.abort());
		const A = setTimeout(() => h.abort(), d),
			E = {
				signal: h.signal,
				...M
			};
		return E.method && (E.method = E.method.toUpperCase()), this.fetch.call(void 0, c, E).finally(() => {
			clearTimeout(A)
		})
	}
	shouldRetry(c) {
		const o = c.headers.get("x-should-retry");
		return o === "true" ? !0 : o === "false" ? !1 : c.status === 408 || c.status === 409 || c.status === 429 || c.status >= 500
	}
	async retryRequest(c, o, d) {
		let h;
		const S = d == null ? void 0 : d["retry-after-ms"];
		if (S) {
			const A = parseFloat(S);
			Number.isNaN(A) || (h = A)
		}
		const M = d == null ? void 0 : d["retry-after"];
		if (M && !h) {
			const A = parseFloat(M);
			Number.isNaN(A) ? h = Date.parse(M) - Date.now() : h = A * 1e3
		}
		if (!(h && 0 <= h && h < 60 * 1e3)) {
			const A = c.maxRetries ?? this.maxRetries;
			h = this.calculateDefaultRetryTimeoutMillis(o, A)
		}
		return await $x(h), this.makeRequest(c, o - 1)
	}
	calculateDefaultRetryTimeoutMillis(c, o) {
		const S = o - c,
			M = Math.min(.5 * Math.pow(2, S), 8),
			A = 1 - Math.random() * .25;
		return M * A * 1e3
	}
	getUserAgent() {
		return `${this.constructor.name}/JS ${Ca}`
	}
}
nu = new WeakMap;
class Gx extends su {
	constructor(c, o, d) {
		super(o, async h => new d(c, h.response, await O0(h), h.options))
	}
	async * [Symbol.asyncIterator]() {
		const c = await this;
		for await (const o of c) yield o
	}
}
const Lx = f => new Proxy(Object.fromEntries(f.entries()), {
		get(c, o) {
			const d = o.toString();
			return c[d.toLowerCase()] || c[d]
		}
	}),
	Qx = () => {
		var c;
		if (typeof Deno < "u" && Deno.build != null) return {
			"X-Stainless-Lang": "js",
			"X-Stainless-Package-Version": Ca,
			"X-Stainless-OS": n0(Deno.build.os),
			"X-Stainless-Arch": a0(Deno.build.arch),
			"X-Stainless-Runtime": "deno",
			"X-Stainless-Runtime-Version": typeof Deno.version == "string" ? Deno.version : ((c = Deno.version) == null ? void 0 : c.deno) ?? "unknown"
		};
		if (typeof EdgeRuntime < "u") return {
			"X-Stainless-Lang": "js",
			"X-Stainless-Package-Version": Ca,
			"X-Stainless-OS": "Unknown",
			"X-Stainless-Arch": `other:${EdgeRuntime}`,
			"X-Stainless-Runtime": "edge",
			"X-Stainless-Runtime-Version": process.version
		};
		if (Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]") return {
			"X-Stainless-Lang": "js",
			"X-Stainless-Package-Version": Ca,
			"X-Stainless-OS": n0(process.platform),
			"X-Stainless-Arch": a0(process.arch),
			"X-Stainless-Runtime": "node",
			"X-Stainless-Runtime-Version": process.version
		};
		const f = Zx();
		return f ? {
			"X-Stainless-Lang": "js",
			"X-Stainless-Package-Version": Ca,
			"X-Stainless-OS": "Unknown",
			"X-Stainless-Arch": "unknown",
			"X-Stainless-Runtime": `browser:${f.browser}`,
			"X-Stainless-Runtime-Version": f.version
		} : {
			"X-Stainless-Lang": "js",
			"X-Stainless-Package-Version": Ca,
			"X-Stainless-OS": "Unknown",
			"X-Stainless-Arch": "unknown",
			"X-Stainless-Runtime": "unknown",
			"X-Stainless-Runtime-Version": "unknown"
		}
	};

function Zx() {
	if (typeof navigator > "u" || !navigator) return null;
	const f = [{
		key: "edge",
		pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
	}, {
		key: "ie",
		pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
	}, {
		key: "ie",
		pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/
	}, {
		key: "chrome",
		pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
	}, {
		key: "firefox",
		pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
	}, {
		key: "safari",
		pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/
	}];
	for (const {
			key: c,
			pattern: o
		}
		of f) {
		const d = o.exec(navigator.userAgent);
		if (d) {
			const h = d[1] || 0,
				S = d[2] || 0,
				M = d[3] || 0;
			return {
				browser: c,
				version: `${h}.${S}.${M}`
			}
		}
	}
	return null
}
const a0 = f => f === "x32" ? "x32" : f === "x86_64" || f === "x64" ? "x64" : f === "arm" ? "arm" : f === "aarch64" || f === "arm64" ? "arm64" : f ? `other:${f}` : "unknown",
	n0 = f => (f = f.toLowerCase(), f.includes("ios") ? "iOS" : f === "android" ? "Android" : f === "darwin" ? "MacOS" : f === "win32" ? "Windows" : f === "freebsd" ? "FreeBSD" : f === "openbsd" ? "OpenBSD" : f === "linux" ? "Linux" : f ? `Other:${f}` : "Unknown");
let i0;
const Vx = () => i0 ?? (i0 = Qx()),
	Kx = f => {
		try {
			return JSON.parse(f)
		} catch {
			return
		}
	},
	Jx = /^[a-z][a-z0-9+.-]*:/i,
	kx = f => Jx.test(f),
	$x = f => new Promise(c => setTimeout(c, f)),
	Rc = (f, c) => {
		if (typeof c != "number" || !Number.isInteger(c)) throw new Rt(`${f} must be an integer`);
		if (c < 0) throw new Rt(`${f} must be a positive integer`);
		return c
	},
	Bc = f => {
		if (f instanceof Error) return f;
		if (typeof f == "object" && f !== null) try {
			return new Error(JSON.stringify(f))
		} catch {}
		return new Error(f)
	},
	u0 = f => {
		var c, o, d, h;
		if (typeof process < "u") return ((c = Ba == null ? void 0 : Ba[f]) == null ? void 0 : c.trim()) ?? void 0;
		if (typeof Deno < "u") return (h = (d = (o = Deno.env) == null ? void 0 : o.get) == null ? void 0 : d.call(o, f)) == null ? void 0 : h.trim()
	};

function Wx(f) {
	if (!f) return !0;
	for (const c in f) return !1;
	return !0
}

function Fx(f, c) {
	return Object.prototype.hasOwnProperty.call(f, c)
}

function s0(f, c) {
	for (const o in c) {
		if (!Fx(c, o)) continue;
		const d = o.toLowerCase();
		if (!d) continue;
		const h = c[o];
		h === null ? delete f[d] : h !== void 0 && (f[d] = h)
	}
}
const ty = ({
		text: f
	}) => {
		const [c, o] = L.useState("");
		return L.useEffect(() => {
			let d = 0;
			const S = setInterval(() => {
				o(f.substring(0, d)), d++, d > f.length && clearInterval(S)
			}, 15);
			return () => clearInterval(S)
		}, [f]), u.jsx("span", {
			className: "whitespace-pre-wrap leading-relaxed",
			children: c
		})
	},
	ly = ({
		onMatrixTrigger: f,
		isOnline: c
	}) => {
		const [o, d] = L.useState([]), [h, S] = L.useState(""), [M, A] = L.useState([{
			type: "response",
			content: u.jsxs("div", {
				className: "mb-2",
				children: [u.jsx("div", {
					className: "text-emerald-500 font-mono",
					children: "Welcome to Astear17's Terminal 🍃"
				}), u.jsxs("div", {
					className: "text-zinc-500 text-xs",
					children: ["Type ", u.jsx("span", {
						className: "text-emerald-400",
						children: "'help'"
					}), " to see available commands."]
				})]
			})
		}]), [E, v] = L.useState(-1), C = L.useRef(null), U = L.useRef(null);
		L.useEffect(() => {
			C.current && (C.current.scrollTop = C.current.scrollHeight)
		}, [M]);
		const X = {
				help: () => u.jsxs("div", {
					className: "space-y-1",
					children: [u.jsx("div", {
						className: "text-emerald-400",
						children: "Available commands:"
					}), u.jsxs("div", {
						className: "grid grid-cols-[100px_1fr] gap-2",
						children: [u.jsx("span", {
							className: "text-yellow-400",
							children: "about"
						}), u.jsx("span", {
							children: "Learn about me"
						}), u.jsx("span", {
							className: "text-yellow-400",
							children: "skills"
						}), u.jsx("span", {
							children: "See my tech stack"
						}), u.jsx("span", {
							className: "text-yellow-400",
							children: "projects"
						}), u.jsx("span", {
							children: "View my projects"
						}), u.jsx("span", {
							className: "text-yellow-400",
							children: "contact"
						}), u.jsx("span", {
							children: "Get in touch with me"
						}), u.jsx("span", {
							className: "text-yellow-400",
							children: "status"
						}), u.jsx("span", {
							children: "Current status"
						}), u.jsx("span", {
							className: "text-yellow-400",
							children: "socials"
						}), u.jsx("span", {
							children: "My social links"
						}), u.jsx("span", {
							className: "text-yellow-400",
							children: "matrix"
						}), u.jsx("span", {
							children: "terminating screen with hexs"
						}), u.jsx("span", {
							className: "text-yellow-400",
							children: "clear"
						}), u.jsx("span", {
							children: "Clear screen"
						}), u.jsx("span", {
							className: "text-yellow-400",
							children: "neofetch"
						}), u.jsx("span", {
							children: "System info"
						})]
					})]
				}),
				about: () => u.jsxs("div", {
					children: [u.jsx("div", {
						className: "text-emerald-400 border-b border-emerald-500/30 mb-2 pb-1 inline-block",
						children: "━━━ About Me ━━━"
					}), u.jsxs("div", {
						children: ["👤 Name: ", u.jsx("span", {
							className: "text-white",
							children: "Astear17"
						})]
					}), u.jsxs("div", {
						children: ["🎂 Age: ", u.jsx("span", {
							className: "text-white",
							children: "17"
						})]
					}), u.jsxs("div", {
						children: ["📍 Location: ", u.jsx("span", {
							className: "text-white",
							children: "Phu My Dong, Gia Lai, Vietnam,"
						})]
					}), u.jsxs("div", {
						children: ["💻 Focus on: ", u.jsx("span", {
							className: "text-white",
							children: "Vibecoding, Games, Studying"
						})]
					})]
				}),
				skills: () => u.jsxs("div", {
					children: [u.jsx("div", {
						className: "text-emerald-400 border-b border-emerald-500/30 mb-2 pb-1 inline-block",
						children: "━━━ Tech Stack ━━━"
					}), u.jsxs("div", {
						children: [u.jsx("span", {
							className: "text-emerald-400",
							children: "Languages:"
						}), " Java, Python, JS, C++, Pascal"]
					}), u.jsxs("div", {
						children: [u.jsx("span", {
							className: "text-emerald-400",
							children: "Frameworks:"
						}), " Node.js, React, Tailwind"]
					}), u.jsxs("div", {
						children: [u.jsx("span", {
							className: "text-emerald-400",
							children: "Tools:"
						}), " Git, VS Code, Filza, Termux"]
					}), u.jsxs("div", {
						children: [u.jsx("span", {
							className: "text-emerald-400",
							children: "Other:"
						}), " Photographer, filmer , iOS Tweaking"]
					}), u.jsxs("div", {
						children: [u.jsx("span", {
							className: "text-emerald-400",
							children: "Hosting:"
						}), " InfinityFree, GitHub Pages, Vercel"]
					})]
				}),
				projects: () => u.jsxs("div", {
					children: [u.jsx("div", {
						className: "text-emerald-400 border-b border-emerald-500/30 mb-2 pb-1 inline-block",
						children: "━━━ Projects ━━━"
					}), u.jsxs("div", {
						children: [u.jsx("span", {
							className: "text-white",
							children: "iDevPatcher"
						}), " - A summarized repository of useful iPA for sideloading on iOS"]
					}), u.jsxs("div", {
						children: [u.jsx("span", {
							className: "text-white",
							children: "aPatche"
						}), " - A repository of useful Android/Google TV APK with tweaked tools"]
					}), u.jsxs("div", {
						children: [u.jsx("span", {
							className: "text-white",
							children: "Pure26"
						}), " - A SnowBoard theme redesigned of the iOS 26 style"]
					}), u.jsxs("div", {
						children: [u.jsx("span", {
							className: "text-white",
							children: "StandbyD"
						}), " - Standby desk clock on browser, used for dummy phone with iframe player"]
					}), u.jsxs("div", {
						children: [u.jsx("span", {
							className: "text-white",
							children: "Console Tester"
						}), " - A webapp to test gamepad/vibrator on gamepad via Gamepad API"]
					})]
				}),
				contact: () => u.jsxs("div", {
					children: [u.jsx("div", {
						className: "text-emerald-400 border-b border-emerald-500/30 mb-2 pb-1 inline-block",
						children: "━━━ Contact ━━━"
					}), u.jsxs("div", {
						children: ["💬 Discord: ", u.jsx("span", {
							className: "text-white",
							children: "@astear.17"
						})]
					}), u.jsxs("div", {
						children: ["✈️ Telegram: ", u.jsx("span", {
							className: "text-white",
							children: "@Astear17"
						})]
					}), u.jsxs("div", {
						children: ["📷 Instagram: ", u.jsx("span", {
							className: "text-white",
							children: "@astear.17"
						})]
					})]
				}),
				status: () => u.jsxs("div", {
					children: [u.jsx("div", {
						className: "text-emerald-400 border-b border-emerald-500/30 mb-2 pb-1 inline-block",
						children: "━━━ Current Status ━━━"
					}), u.jsxs("div", {
						children: ["Discord: ", c ? "🟢 Online" : "⚫ Offline"]
					})]
					
				}),
				socials: () => u.jsxs("div", {
					children: [u.jsx("div", {
						className: "text-emerald-400 border-b border-emerald-500/30 mb-2 pb-1 inline-block",
						children: "━━━ Socials ━━━"
					}), u.jsxs("div", {
						children: [u.jsx("span", {
							className: "text-[#5865F2]",
							children: "Discord"
						}), "   → discord.com/users/1036621192515297322"]
					}), u.jsxs("div", {
						children: [u.jsx("span", {
							className: "text-[#0088cc]",
							children: "Telegram"
						}), "  → t.me/Astear171o"]
					}), u.jsxs("div", {
						children: [u.jsx("span", {
							className: "text-[#E4405F]",
							children: "Instagram"
						}), " → instagram.com/Astear171___"]
					})]
				}),
				sudo: () => u.jsxs("div", {
					children: [u.jsx("div", {
						className: "text-red-400 font-bold",
						children: "Permission denied ig its a skill issue ngl"
					}), u.jsx("div", {
						children: "Nice try, but you're not root here nigga😏"
					}), u.jsx("div", {
						className: "text-zinc-500",
						children: "Hint: Maybe Try 'sudo hi'"
					})]
				}),
				"sudo hi": () => u.jsxs("div", {
					children: [u.jsx("div", {
						children: "bye"
					}), u.jsx("div", {
						children: "AND FUCK U🖕"
					})]
				}),
				matrix: () => (f(), u.jsx("div", {
					className: "text-emerald-400",
					children: " Entering the Matrix..."
				})),
				clear: () => (A([]), null),
				neofetch: () => u.jsxs("div", {
					className: "flex gap-4",
					children: [u.jsx("div", {
						className: "text-emerald-400 hidden sm:block whitespace-pre leading-none font-mono text-[10px]",
						children: `⠀⠀⠀⠀⠀⢀⣀⣀⡀⠀⠀⠀⠀⠀⢀⣀⣀⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⣿⠛⠛⠻⢷⣤⣀⣤⣾⠟⠋⠙⣿⡄⠀⠀⠀⠀
⠀⠀⠀⠀⢸⣏⠀⠀⠀⠀⣽⣿⣯⠀⠀⠀⠀⣹⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠸⣿⣀⣀⣤⣾⣿⣤⣽⣷⣤⣀⣀⣿⡇⠀⠀⠀⠀
⠀⢀⣤⣶⠿⢿⡟⢩⣿⠋⠉⣉⠉⠙⢿⡍⢻⡿⠿⣶⣤⡀⠀
⣴⡟⠉⠀⠀⠘⣿⡿⠁⢰⣿⣿⣿⡆⠈⢿⣿⠃⠀⠀⠉⢻⣦
⠹⣧⣀⠀⠀⢠⣿⣷⡀⠸⣿⣿⣿⠇⢀⣾⣿⡄⠀⠀⣀⣼⠟
⠀⠈⠛⠿⣶⣾⣧⣘⣿⣄⣀⣀⣀⣠⣿⣣⣼⣿⣶⠿⠛⠁⠀
⠀⠀⠀⠀⢸⣿⠉⠉⠙⢿⣿⠛⣻⡿⠋⠉⠉⢿⡇⠀⠀⠀⠀
⠀⠀⠀⠀⢸⣇⠀⠀⠀⠀⣹⣿⣟⠀⠀⠀⠀⣸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠘⣿⣤⣤⣴⡺⠛⠉⠛⢿⣦⣤⣤⣿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠉⠉⠁⠀⠀⠀⠀⠀⠈⠉⠉⠁⠀⠀⠀⠀⠀`
					}), u.jsxs("div", {
						className: "flex flex-col justify-center",
						children: [u.jsxs("div", {
							children: [u.jsx("span", {
								className: "text-zinc-400",
								children: "OS:"
							}), " ", u.jsx("span", {
								className: "text-white",
								children: "reactOS v2.67"
							})]
						}), u.jsxs("div", {
							children: [u.jsx("span", {
								className: "text-zinc-400",
								children: "Shell:"
							}), " ", u.jsx("span", {
								className: "text-white",
								children: "Astear17-bash"
							})]
						}), u.jsxs("div", {
							children: [u.jsx("span", {
								className: "text-zinc-400",
								children: "Theme:"
							}), " ", u.jsx("span", {
								className: "text-white",
								children: "Pure26"
							})]
						}), u.jsxs("div", {
							children: [u.jsx("span", {
								className: "text-zinc-400",
								children: "Power:"
							}), " ", u.jsx("span", {
								className: "text-white",
								children: "Powered by React"
							})]
						})]
					})]
				}),
				coffee: () => u.jsxs("div", {
					children: [u.jsx("span", {
						className: "text-yellow-600",
						children: "gonna sleep"
					}), u.jsx("br", {}), u.jsx("span", {
						className: "text-emerald-400",
						children: "needed that ngl"
					})]
				}),
				ls: () => u.jsxs("div", {
					className: "space-x-4",
					children: [u.jsx("span", {
						className: "text-emerald-400",
						children: "projects/"
					}), " ", u.jsx("span", {
						className: "text-emerald-400",
						children: "skills/"
					}), " ", u.jsx("span", {
						className: "text-emerald-400",
						children: "about.txt"
					}), " ", u.jsx("span", {
						className: "text-emerald-400",
						children: "contact.md"
					}), " ", u.jsx("span", {
						className: "text-yellow-400",
						children: "secrets/"
					})]
				}),
				pwd: () => u.jsx("div", {
					children: "/home/runner/work/astear17.github.io/astear17.github.io"
				}),
				whoami: () => u.jsx("div", {
					children: "u0_a153"
				}),
				vim: () => u.jsxs("div", {
					children: [u.jsx("span", {
						className: "text-red-400",
						children: "Error:"
					}), " vim not found. Use VS Code lil nigga..."]
				})
			},
			J = async V => {
				if (V.key === "Enter") {
					const K = h.trim().toLowerCase();
					if (!K) return;
					d(me => [...me, h]), v(o.length + 1);
					const pe = {
						type: "command",
						content: u.jsxs("div", {
							className: "flex gap-2 items-center",
							children: [u.jsx("span", {
								className: "text-emerald-400",
								children: "guest@Astear17"
							}), u.jsx("span", {
								className: "text-zinc-500",
								children: ":"
							}), u.jsx("span", {
								className: "text-emerald-400",
								children: "~"
							}), u.jsx("span", {
								className: "text-zinc-500",
								children: "$"
							}), u.jsx("span", {
								className: "text-white",
								children: h
							})]
						})
					};
					if (K === "clear") {
						A([]), S("");
						return
					}
					let ge = null;
					X[K] ? ge = X[K]() : K.startsWith("echo ") ? ge = u.jsx("div", {
						children: h.substring(5)
					}) : ge = u.jsxs("div", {
						className: "text-red-400/70",
						children: ["bash: ", h.split(" ")[0], ": command not found. Type 'help'."]
					}), A(ge ? me => [...me, pe, {
						type: "response",
						content: ge
					}] : me => [...me, pe]), S("")
				} else if (V.key === "ArrowUp") {
					if (V.preventDefault(), o.length > 0) {
						const K = Math.max(0, E - 1);
						v(K), S(o[K] || "")
					}
				} else if (V.key === "ArrowDown")
					if (V.preventDefault(), E < o.length) {
						const K = Math.min(o.length, E + 1);
						v(K), S(o[K] || "")
					} else S("")
			};
		return u.jsxs("div", {
			onClick: () => {
				var V, K;
				return (K = (V = U.current) == null ? void 0 : V.focus) == null ? void 0 : K.call(V, {
					preventScroll: !0
				})
			},
			className: "glass refract terminal-blur p-6 rounded-3xl font-mono text-sm flex flex-col h-[380px] border-r-2 border-transparent hover:border-emerald-500 transition-all shadow-lg shadow-emerald-900/10 overscroll-contain",
			children: [u.jsxs("div", {
				className: "flex items-center gap-2 mb-4 border-b border-white/5 pb-2",
				children: [u.jsxs("div", {
					className: "flex gap-1.5",
					children: [u.jsx("div", {
						className: "w-3 h-3 rounded-full bg-red-500/50 hover:bg-red-500 transition-colors"
					}), u.jsx("div", {
						className: "w-3 h-3 rounded-full bg-yellow-500/50 hover:bg-yellow-500 transition-colors"
					}), u.jsx("div", {
						className: "w-3 h-3 rounded-full bg-emerald-500/50 hover:bg-emerald-500 transition-colors"
					})]
				}), u.jsx("span", {
					className: "text-zinc-500 ml-2",
					children: "bash — portfolio"
				}), u.jsx("span", {
					className: "ml-auto text-[10px] text-zinc-600",
					children: "v2.67"
				})]
			}), u.jsx("div", {
				ref: C,
				className: "flex-1 overflow-y-auto space-y-2 mb-2 custom-scrollbar overscroll-contain",
				children: M.map((V, K) => u.jsx("div", {
					className: "animate-in fade-in duration-300",
					children: V.content
				}, K))
			}), u.jsxs("div", {
				className: "flex items-center gap-2 border-t border-white/5 pt-3",
				children: [u.jsx("span", {
					className: "text-emerald-400 hidden sm:inline",
					children: "guest@Astear17"
				}), u.jsx("span", {
					className: "text-zinc-500 hidden sm:inline",
					children: ":"
				}), u.jsx("span", {
					className: "text-emerald-400",
					children: "~"
				}), u.jsx("span", {
					className: "text-zinc-500",
					children: "$"
				}), u.jsx("input", {
					type: "text",
					value: h,
					onChange: V => S(V.target.value),
					onKeyDown: J,
					ref: U,
					className: "flex-1 bg-transparent border-none outline-none text-white caret-emerald-500",
					spellCheck: !1,
					autoComplete: "off",
					placeholder: "type a command..."
				})]
			})]
		})
	},
	ay = ({
		data: f
	}) => {
		const [c, o] = L.useState(0);
		L.useEffect(() => {
			const A = setInterval(() => {
				o(E => E + 1e3)
			}, 1e3);
			return () => clearInterval(A)
		}, []);
		const d = A => {
			const E = Math.floor(A / 6e4),
				v = Math.floor(A % 6e4 / 1e3);
			return `${E}:${v.toString().padStart(2,"0")}`
		};
		if (!f) return u.jsxs("div", {
			className: "animate-pulse flex gap-4 panel-blur",
			children: [u.jsx("div", {
				className: "w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl"
			}), u.jsxs("div", {
				className: "flex-1 space-y-3 py-1",
				children: [u.jsx("div", {
					className: "h-5 bg-gradient-to-r from-white/10 to-transparent rounded-lg w-3/4"
				}), u.jsx("div", {
					className: "h-3 bg-gradient-to-r from-white/5 to-transparent rounded w-1/2"
				}), u.jsx("div", {
					className: "h-2 bg-white/5 rounded-full w-full"
				})]
			})]
		});
		const h = f.listening_to_spotify && f.spotify ? (() => {
				const A = f.spotify,
					E = Date.now() - A.timestamps.start,
					v = A.timestamps.end - A.timestamps.start,
					C = Math.min(E / v * 100, 100);
				return u.jsxs("div", {
					className: "bg-linear-to-br from-[#1ed760]/10 to-emerald-500/5 border border-[#1ed760]/20 rounded-2xl p-4 relative overflow-hidden group hover:border-[#1ed760]/50 hover:shadow-[0_10px_30px_-10px_rgba(30,215,96,0.2)] transition-all duration-500 hover:-translate-y-1 panel-blur terminal-blur",
					children: [u.jsx("div", {
						className: "absolute inset-0 bg-[#1DB954]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
					}), u.jsxs("div", {
						className: "flex items-start gap-4 relative z-10",
						children: [u.jsxs("div", {
							className: "relative flex-shrink-0",
							children: [u.jsx("img", {
								src: A.album_art_url,
								className: "w-[72px] h-[72px] rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500 group-hover:rotate-[-3deg]",
								alt: "Album Art"
							}), u.jsx("div", {
								className: "absolute -bottom-2 -right-2 w-7 h-7 bg-[#1DB954] rounded-full flex items-center justify-center border-4 border-[#050505] shadow-lg group-hover:scale-110 transition-transform duration-300",
								children: u.jsx("i", {
									className: "fab fa-spotify text-white text-xs"
								})
							})]
						}), u.jsxs("div", {
							className: "flex-1 min-w-0 overflow-hidden",
							children: [u.jsxs("div", {
								className: "flex items-center justify-between mb-1",
								children: [u.jsx("span", {
									className: "text-[10px] font-bold text-[#1DB954] uppercase tracking-wider",
									children: "Song Playing"
								}), u.jsxs("div", {
									className: "flex items-end gap-[2px] h-3",
									children: [u.jsx("span", {
										className: "w-[2px] bg-[#1DB954] animate-[pulse_1s_ease-in-out_infinite] h-2"
									}), u.jsx("span", {
										className: "w-[2px] bg-[#1DB954] animate-[pulse_1.5s_ease-in-out_infinite] h-3"
									}), u.jsx("span", {
										className: "w-[2px] bg-[#1DB954] animate-[pulse_0.8s_ease-in-out_infinite] h-1.5"
									})]
								})]
							}), u.jsx("div", {
								className: "font-bold text-white text-lg truncate leading-tight group-hover:text-[#1DB954] transition-colors duration-300",
								children: A.song
							}), u.jsxs("div", {
								className: "text-zinc-400 text-sm truncate mt-0.5",
								children: ["by ", A.artist]
							}), u.jsx("div", {
								className: "text-zinc-500 text-xs truncate mt-0.5 opacity-70",
								children: A.album
							}), u.jsxs("div", {
								className: "mt-3",
								children: [u.jsx("div", {
									className: "h-1.5 bg-white/10 rounded-full overflow-hidden",
									children: u.jsx("div", {
										className: "h-full bg-[#1DB954] rounded-full transition-[width] duration-1000 ease-linear shadow-[0_0_10px_rgba(29,185,84,0.5)]",
										style: {
											width: `${C}%`
										}
									})
								}), u.jsxs("div", {
									className: "flex justify-between mt-1.5 text-[10px] font-mono text-zinc-500",
									children: [u.jsx("span", {
										children: d(E)
									}), u.jsx("span", {
										children: d(v)
									})]
								})]
							})]
						})]
					})]
				}, "spotify")
			})() : null,
			M = (f.activities || []).map((A, E) => {
				var v, C;
				if (A.name && A.name.toLowerCase().includes("spotify") || A.type === 4) return null;
				if (A.type === 0) {
					let U = "";
					(v = A.assets) != null && v.large_image && (A.assets.large_image.startsWith("mp:external/") ? U = `https://media.discordapp.net/external/${A.assets.large_image.split("external/")[1]}` : A.application_id && (U = `https://cdn.discordapp.com/app-assets/${A.application_id}/${A.assets.large_image}.png`));
					let X = "";
					if ((C = A.timestamps) != null && C.start) {
						const J = Date.now() - A.timestamps.start,
							V = Math.floor(J / 6e4),
							K = Math.floor(V / 60),
							pe = V % 60;
						X = K > 0 ? `${K}h ${pe}m` : `${pe}m`
					}
					return u.jsxs("div", {
						className: "bg-linear-to-br from-[#5865F2]/10 to-emerald-500/5 border border-[#5865F2]/20 rounded-2xl p-4 relative overflow-hidden group hover:border-[#5865F2]/50 hover:shadow-[0_10px_30px_-10px_rgba(88,101,242,0.2)] transition-all duration-500 hover:-translate-y-1 panel-blur",
						children: [u.jsx("div", {
							className: "absolute top-3 left-3 w-36 h-36 pointer-events-none rounded-full",
							style: {
								background: "radial-gradient(closest-side at 30% 30%, rgba(148,90,255,0.18), rgba(108,78,255,0.06) 40%, transparent 65%)",
								filter: "blur(20px)",
								opacity: .6
							}
						}), u.jsx("div", {
							className: "absolute inset-0 bg-[#5865F2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
						}), u.jsxs("div", {
							className: "flex items-start gap-4 relative z-10",
							children: [u.jsx("div", {
								className: "w-[72px] h-[72px] rounded-xl bg-[#5865F2]/10 border border-[#5865F2]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-500 group-hover:rotate-3",
								children: U ? u.jsx("img", {
									src: U,
									alt: "Game",
									className: "w-full h-full rounded-xl object-cover shadow-lg"
								}) : u.jsx("i", {
									className: "fas fa-gamepad text-2xl text-[#5865F2]"
								})
							}), u.jsxs("div", {
								className: "flex-1 min-w-0",
								children: [u.jsxs("div", {
									className: "flex items-center gap-2 mb-1",
									children: [u.jsx("span", {
										className: "text-[10px] font-bold text-[#5865F2] uppercase tracking-wider",
										children: "Playing"
									}), X && u.jsxs("span", {
										className: "px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#5865F2]/20 text-[#a8b1ff] border border-[#5865F2]/30 flex items-center gap-1",
										children: [u.jsx("span", {
											className: "w-1.5 h-1.5 rounded-full bg-[#5865F2] animate-pulse"
										}), X]
									})]
								}), u.jsx("div", {
									className: "font-bold text-white text-lg truncate leading-tight group-hover:text-[#5865F2] transition-colors duration-300",
									children: A.name
								}), A.details && u.jsx("div", {
									className: "text-zinc-400 text-sm truncate mt-1",
									children: A.details
								}), A.state && u.jsxs("div", {
									className: "text-zinc-500 text-xs truncate mt-1 flex items-center gap-2",
									children: [u.jsx("span", {
										className: "w-1.5 h-1.5 rounded-full bg-[#5865F2]"
									}), A.state]
								})]
							})]
						})]
					}, `act-${E}`)
				}
				return u.jsxs("div", {
					className: "border border-white/10 rounded-2xl px-3 py-2 text-sm text-zinc-400 bg-white/3 panel-blur",
					children: [u.jsx("div", {
						className: "font-semibold text-white truncate",
						children: A.name
					}), A.state && u.jsx("div", {
						className: "text-zinc-400 text-xs truncate",
						children: A.state
					})]
				}, `act-${E}`)
			}).filter(Boolean);
		return h || M && M.length > 0 ? u.jsxs("div", {
			className: "space-y-4",
			children: [h, M]
		}) : u.jsxs("div", {
			className: "border border-dashed border-white/10 rounded-2xl p-8 text-center bg-gradient-to-br from-white/5 to-transparent hover:border-white/20 hover:bg-white/5 transition-all duration-500 group panel-blur",
			children: [u.jsx("div", {
				className: "w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 animate-float group-hover:scale-110 transition-transform duration-500 group-hover:bg-emerald-500/10 group-hover:text-emerald-400",
				children: u.jsx("i", {
					className: "fas fa-moon text-xl text-zinc-500 group-hover:text-emerald-400 transition-colors"
				})
			}), u.jsx("div", {
				className: "text-zinc-500 text-sm font-medium group-hover:text-zinc-400 transition-colors",
				children: "Nothing playing right now"
			}), u.jsx("div", {
				className: "text-zinc-600 text-xs mt-1",
				children: "Check back later!"
			})]
		})
	},
	$e = ({
		children: f,
		className: c = "",
		tiltMaxAngleX: o = 10,
		tiltMaxAngleY: d = 10,
		perspective: h = 1e3,
		scale: S = 1.02,
		glareEnable: M = !0,
		glareMaxOpacity: A = .4,
		glareColor: E = "ffffff"
	}) => {
		const v = L.useRef(null),
			[C, U] = L.useState({}),
			[X, J] = L.useState({}),
			V = L.useCallback(pe => {
				if (!v.current) return;
				const ge = v.current.getBoundingClientRect(),
					me = ge.width,
					ue = ge.height,
					Te = pe.clientX - ge.left,
					Ee = pe.clientY - ge.top,
					_e = Te / me,
					$ = Ee / ue,
					Me = ($ - .5) * o,
					Le = (_e - .5) * -d;
				if (U({
						transform: `perspective(${h}px) rotateX(${Me}deg) rotateY(${Le}deg) scale3d(${S}, ${S}, ${S})`,
						transition: "all 0.1s ease-out"
					}), M) {
					const Qe = Math.atan2(Ee - ue / 2, Te - me / 2) * (180 / Math.PI) - 90;
					J({
						background: `linear-gradient(${Qe}deg, rgba(255,255,255,0) 0%, rgba(${parseInt(E.slice(0,2),16)},${parseInt(E.slice(2,4),16)},${parseInt(E.slice(4,6),16)},${A}) 50%, rgba(255,255,255,0) 100%)`,
						opacity: 1,
						transform: `translate(${_e*10-5}%, ${$*10-5}%)`
					})
				}
			}, [o, d, h, S, M, A, E]),
			K = L.useCallback(() => {
				U({
					transform: `perspective(${h}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
					transition: "all 0.5s ease-out"
				}), M && J({
					opacity: 0,
					transition: "opacity 0.5s ease-out"
				})
			}, [h, M]);
		return u.jsxs("div", {
			ref: v,
			className: `relative will-change-transform transform-gpu ${c}`,
			onMouseMove: V,
			onMouseLeave: K,
			style: {
				transformStyle: "preserve-3d",
				...C
			},
			children: [u.jsx("div", {
				className: "relative z-10 h-full w-full pointer-events-none",
				children: u.jsx("div", {
					className: "pointer-events-auto h-full w-full",
					children: f
				})
			}), M && u.jsx("div", {
				className: "absolute inset-0 z-20 overflow-hidden rounded-[inherit] pointer-events-none mix-blend-overlay",
				style: {
					opacity: 0
				},
				children: u.jsx("div", {
					className: "absolute inset-[-50%] w-[200%] h-[200%]",
					style: X
				})
			})]
		})
	},
	Wl = ({
		children: f,
		delay: c = 0,
		className: o = ""
	}) => {
		const [d, h] = L.useState(!1), S = L.useRef(null);
		return L.useEffect(() => {
			const M = new IntersectionObserver(([A]) => {
				A.isIntersecting && (h(!0), M.disconnect())
			}, {
				threshold: .1,
				rootMargin: "0px"
			});
			return S.current && M.observe(S.current), () => M.disconnect()
		}, []), u.jsx("div", {
			ref: S,
			className: `transform transition-all duration-[1000ms] ease-out will-change-[opacity,transform] ${d?"opacity-100 translate-y-0 blur-0":"opacity-0 translate-y-12 blur-sm"} ${o}`,
			style: {
				transitionDelay: `${c}ms`
			},
			children: f
		})
	},
	Ya = ({
		children: f,
		className: c = "",
		delayOffset: o = 0
	}) => {
		const [d, h] = L.useState(!1), S = L.useRef(null);
		return L.useEffect(() => {
			const M = new IntersectionObserver(([A]) => {
				A.isIntersecting && (h(!0), M.disconnect())
			}, {
				threshold: .1,
				rootMargin: "50px"
			});
			return S.current && M.observe(S.current), () => M.disconnect()
		}, []), u.jsx("div", {
			ref: S,
			className: c,
			children: Ml.Children.map(f, (M, A) => u.jsx("div", {
				className: `transition-all duration-700 ease-out fill-mode-forwards ${d?"opacity-100 translate-y-0 scale-100":"opacity-0 translate-y-16 scale-95"}`,
				style: {
					transitionDelay: `${o+A*100}ms`
				},
				children: M
			}))
		})
	},
	Ge = ({
		children: f
	}) => u.jsxs("span", {
		className: "px-4 py-2.5 rounded-xl text-sm font-medium text-emerald-300 hover:text-white bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/15 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_8px_20px_rgba(0,255,136,0.15)] hover:bg-emerald-500/20 relative overflow-hidden group cursor-default",
		children: [u.jsx("span", {
			className: "absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent group-hover:left-[100%] transition-[left] duration-700 ease-in-out"
		}), f]
	}),
	au = ({
		target: f,
		suffix: c,
		label: o
	}) => {
		const [d, h] = L.useState(typeof f == "number" ? 0 : f), [S, M] = L.useState(!1), A = L.useRef(null);
		return L.useEffect(() => {
			const E = new IntersectionObserver(([v]) => {
				v.isIntersecting && (M(!0), E.disconnect())
			}, {
				threshold: .5
			});
			return A.current && E.observe(A.current), () => E.disconnect()
		}, []), L.useEffect(() => {
			if (!S || typeof f != "number") return;
			let E = 0;
			const v = f,
				U = v / (2e3 / 16),
				X = setInterval(() => {
					E += U, E >= v ? (h(v), clearInterval(X)) : h(Math.floor(E))
				}, 16);
			return () => clearInterval(X)
		}, [f, S]), u.jsx($e, {
			className: "h-full rounded-2xl",
			tiltMaxAngleX: 5,
			tiltMaxAngleY: 5,
			scale: 1.05,
			children: u.jsxs("div", {
				ref: A,
				className: "glass refract p-6 rounded-2xl text-center hover:bg-emerald-500/10 transition-all duration-500 group border border-transparent hover:border-emerald-500/20 h-full flex flex-col justify-center",
				children: [u.jsx("div", {
					className: "text-3xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-500 inline-block",
					children: f === 999 ? "∞" : `${d}${c}`
				}), u.jsx("div", {
					className: "text-xs text-zinc-500 uppercase tracking-widest group-hover:text-emerald-400 transition-colors duration-300",
					children: o
				})]
			})
		})
	},
	ny = Ml.memo(() => u.jsx("section", {
		className: "mb-24",
		children: u.jsxs(Ya, {
			className: "grid grid-cols-2 md:grid-cols-4 gap-6",
			children: [u.jsx(au, {
				target: 5,
				suffix: "+",
				label: "Years Coding"
			}), u.jsx(au, {
				target: 50,
				suffix: "+",
				label: "Projects"
			}), u.jsx(au, {
				target: 670,
				suffix: " +",
				label: "Hours of coding"
			}), u.jsx(au, {
				target: 999,
				suffix: "",
				label: "Passion"
			})]
		})
	})),
	iy = Ml.memo(() => u.jsxs("section", {
		className: "mb-24",
		id: "skills",
		children: [u.jsx(Wl, {
			children: u.jsxs("h2", {
				className: "text-3xl font-bold mb-10 flex items-center gap-4",
				children: [u.jsx("span", {
					className: "w-12 h-[1px] bg-gradient-to-r from-emerald-500 to-emerald-500"
				}), u.jsx("span", {
					className: "bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent",
					children: "Tools & Skills"
				})]
			})
		}), u.jsxs(Ya, {
			className: "grid grid-cols-1 md:grid-cols-3 gap-8",
			children: [u.jsx($e, {
				className: "rounded-3xl",
				glareColor: "00ff88",
				children: u.jsxs("div", {
					className: "glass p-6 rounded-3xl border border-emerald-500/10 group h-full",
					children: [u.jsx("div", {
						className: "w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500",
						children: u.jsx("i", {
							className: "fas fa-code text-2xl text-emerald-400"
						})
					}), u.jsx("h3", {
						className: "text-xl font-bold text-white mb-6 group-hover:text-emerald-300 transition-colors",
						children: "Languages"
					}), u.jsxs("div", {
						className: "flex flex-wrap gap-3",
						children: [u.jsx(Ge, {
							children: "HTML/CSS"
						}), u.jsx(Ge, {
							children: "JavaScript"
						}), u.jsx(Ge, {
							children: "Python"
						}), u.jsx(Ge, {
							children: "Java"
						}), u.jsx(Ge, {
							children: "Pascal"
						})]
					})]
				})
			}), u.jsx($e, {
				className: "rounded-3xl",
				glareColor: "00ff88",
				children: u.jsxs("div", {
					className: "glass p-6 rounded-3xl border border-emerald-500/10 group h-full",
					children: [u.jsx("div", {
						className: "w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500",
						children: u.jsx("i", {
							className: "fas fa-layer-group text-2xl text-emerald-400"
						})
					}), u.jsx("h3", {
						className: "text-xl font-bold text-white mb-6 group-hover:text-emerald-300 transition-colors",
						children: "Frameworks & Tech"
					}), u.jsxs("div", {
						className: "flex flex-wrap gap-3",
						children: [u.jsx(Ge, {
							children: "Node.js"
						}), u.jsx(Ge, {
							children: "Tailwind"
						}), u.jsx(Ge, {
							children: "Git/GitHub"
						}), u.jsx(Ge, {
							children: "Dopamine"
						}), u.jsx(Ge, {
							children: "React"
						})]
					})]
				})
			}), u.jsx($e, {
				className: "rounded-3xl",
				glareColor: "00ff88",
				children: u.jsxs("div", {
					className: "glass p-6 rounded-3xl border border-emerald-500/10 group h-full",
					children: [u.jsx("div", {
						className: "w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500",
						children: u.jsx("i", {
							className: "fas fa-heart text-2xl text-emerald-400"
						})
					}), u.jsx("h3", {
						className: "text-xl font-bold text-white mb-6 group-hover:text-emerald-300 transition-colors",
						children: "Hobbies"
					}), u.jsxs("div", {
						className: "flex flex-wrap gap-3",
						children: [u.jsx(Ge, {
							children: "Web Hosting"
						}), u.jsx(Ge, {
							children: "Filmer"
						}), u.jsx(Ge, {
							children: "PC Hardware"
						}), u.jsx(Ge, {
							children: "UI Designing"
						}), u.jsx(Ge, {
							children: "Photography"
						}), u.jsx(Ge, {
							children: "Gaming"
						}), u.jsx(Ge, {
							children: "iOS Tweaking"
						})]
					})]
				})
			})]
		})]
	})),
	uy = Ml.memo(() => u.jsxs("section", {
		className: "mb-24",
		id: "certificates",
		children: [u.jsxs(Wl, {
			children: [u.jsxs("h2", {
				className: "text-3xl font-bold mb-4 flex items-center gap-4",
				children: [u.jsx("span", {
					className: "w-12 h-[1px] bg-gradient-to-r from-emerald-500 to-emerald-500"
				}), "iOS Certificates"]
			}), u.jsx("p", {
				className: "text-zinc-500 mb-10",
				children: "Signing iPA(s) with ease without getting revoked with JIT Supported!"
			})]
		}), u.jsxs(Ya, {
			className: "grid grid-cols-1 md:grid-cols-3 gap-6",
			children: [u.jsx($e, {
				className: "rounded-3xl h-full",
				tiltMaxAngleX: 7,
				tiltMaxAngleY: 7,
				children: u.jsxs("div", {
					className: "glass p-8 rounded-3xl border-t-4 border-emerald-500 relative group overflow-hidden h-full",
					children: [u.jsx("div", {
						className: "absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500"
					}), u.jsx("div", {
						className: "text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2",
						children: "iPhone/iPad instant"
					}), u.jsxs("div", {
						className: "text-4xl font-bold mb-6",
						children: ["$4 ", u.jsx("span", {
							className: "text-lg text-zinc-500 font-normal",
							children: "/yr"
						})]
					}), u.jsxs("ul", {
						className: "space-y-3 mb-8 text-zinc-400 text-sm",
						children: [u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " Valid up to 12 months"]
						}), u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " No warranty"]
						}), u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " Available for 1 device only"]
						}), u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " Supports bypassed / hidden iCloud devices"]
							}), u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " JIT (get-task-allow) not supported"]
							}), u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " Support on: iPhone, iPad, Apple TV"]
							}), u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " Unlimited Sideloading apps"]
							}), u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " Unlimited support"]
						})]
					}), u.jsx("a", {
						href: "https://muacert.com/dashboard",
						className: "block text-center glass py-3 rounded-xl hover:bg-emerald-500 hover:text-black font-bold transition-all duration-300 transform active:scale-95",
						children: "Order Now"
					})]
				})
			}), u.jsx($e, {
				className: "rounded-3xl h-full",
				scale: 1.05,
				tiltMaxAngleX: 7,
				tiltMaxAngleY: 7,
				glareColor: "00cc66",
				children: u.jsxs("div", {
					className: "glass p-8 rounded-3xl border-t-4 border-emerald-500 relative group overflow-hidden shadow-2xl z-10 h-full",
					children: [u.jsx("div", {
						className: "absolute top-0 right-0",
						children: u.jsx("div", {
							className: "bg-gradient-to-br from-emerald-400 to-emerald-600 text-black text-[10px] font-bold px-8 py-1 rotate-45 translate-x-[30%] translate-y-[50%] shadow-lg",
							children: "POPULAR"
						})
					}), u.jsx("div", {
						className: "absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500"
					}), u.jsx("div", {
						className: "text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2",
						children: "iPhone/iPad instant"
					}), u.jsxs("div", {
						className: "text-4xl font-bold mb-6",
						children: ["$6 ", u.jsx("span", {
							className: "text-lg text-zinc-500 font-normal",
							children: "/yr"
						})]
					}), u.jsxs("ul", {
						className: "space-y-3 mb-8 text-zinc-400 text-sm",
						children: [u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " Valid up to 12 months"]
						}), u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " 40 days warranty"]
						}), u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " Available for 1 device only"]
						}), u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " Supports bypassed / hidden iCloud devices"]
							}), u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " JIT (get-task-allow) not supported"]
							}), u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " Support on: iPhone, iPad, Apple TV"]
							}), u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " Unlimited Sideloading apps"]
							}), u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " Unlimited support"]
						})]
					}), u.jsx("a", {
						href: "https://muacert.com/dashboard",
						className: "block text-center glass py-3 rounded-xl hover:bg-emerald-500 hover:text-black font-bold transition-all duration-300 transform active:scale-95",
						children: "Order Now"
					})]
				})
			}), u.jsx($e, {
				className: "rounded-3xl h-full",
				tiltMaxAngleX: 7,
				tiltMaxAngleY: 7,
				children: u.jsxs("div", {
					className: "glass p-8 rounded-3xl border-t-4 border-emerald-500 relative group overflow-hidden h-full",
					children: [u.jsx("div", {
						className: "absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500"
					}), u.jsx("div", {
						className: "text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2",
						children: "iPhone/iPad instant"
					}), u.jsxs("div", {
						className: "text-4xl font-bold mb-6",
						children: ["$10 ", u.jsx("span", {
							className: "text-lg text-zinc-500 font-normal",
							children: "/yr"
						})]
					}), u.jsxs("ul", {
						className: "space-y-3 mb-8 text-zinc-400 text-sm",
						children: [u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " Valid up to 12 months"]
						}), u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " 300 days warranty"]
						}), u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " Available for 1 device only"]
						}), u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " Supports bypassed / hidden iCloud devices"]
							}), u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " JIT (get-task-allow) supported"]
							}), u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " Support on: iPhone, iPad, Apple TV"]
							}), u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " Unlimited Sideloading apps"]
							}), u.jsxs("li", {
							className: "flex items-center gap-2",
							children: [u.jsx("i", {
								className: "fas fa-check text-emerald-500"
							}), " Unlimited support"]
						})]
					}), u.jsx("a", {
						href: "https://muacert.com/dashboard",
						className: "block text-center glass py-3 rounded-xl hover:bg-emerald-500 hover:text-black font-bold transition-all duration-300 transform active:scale-95",
						children: "Order Now"
					})]
				})
			})]
		})]
	})),
	sy = Ml.memo(() => u.jsxs("section", {
		className: "mb-24",
		id: "academics",
		children: [u.jsx(Wl, {
			children: u.jsxs("h2", {
				className: "text-3xl font-bold mb-10 flex items-center gap-4",
				children: [u.jsx("span", {
					className: "w-12 h-[1px] bg-gradient-to-r from-emerald-500 to-emerald-500"
				}), "Academic Journey"]
			})
		}), u.jsxs(Ya, {
			className: "grid grid-cols-1 md:grid-cols-2 gap-8",
			children: [u.jsx($e, {
				className: "rounded-[2rem]",
				children: u.jsxs("div", {
					className: "glass p-8 rounded-[2rem] relative group border border-emerald-500/10 hover:border-emerald-500/40 hover:bg-emerald-500/5 h-full",
					children: [u.jsxs("div", {
						className: "flex justify-between items-start mb-8",
						children: [u.jsxs("div", {
							className: "relative group-hover:scale-110 transition-transform duration-500",
							children: [u.jsx("div", {
								className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center border border-emerald-500/10",
								children: u.jsx("i", {
									
									className: "fas fa-graduation-cap text-2xl text-emerald-400"
								})
							}), u.jsx("div", {
								className: "absolute -top-2 -right-2 w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/10 shadow-lg",
								children: u.jsx("i", {
									className: "fas fa-check text-xs text-emerald-400"
								})
							})]
						}), u.jsxs("div", {
							className: "text-right",
							children: [u.jsx("span", {
								className: "text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full group-hover:bg-emerald-500/20 transition-colors",
								children: "Completed"
							}), u.jsx("div", {
								className: "text-[10px] text-zinc-500 mt-1 font-medium",
								children: "2023-2025"
							})]
						})]
					}), u.jsx("h3", {
						className: "text-2xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors duration-300",
						children: "IGCSE"
					}), u.jsxs("div", {
						className: "space-y-4",
						children: [u.jsxs("div", {
							className: "flex items-center gap-2",
							children: [u.jsx("span", {
								className: "w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
							}), u.jsx("span", {
								className: "text-xs font-bold text-emerald-300 uppercase tracking-wider",
								children: "Subjects Completed"
							})]
						}), u.jsx("div", {
							className: "flex flex-wrap gap-3",
							children: ["Biology", "Chemistry", "Physics", "Combined Science", "Mathematics"].map(f => u.jsxs("span", {
								className: "px-4 py-2 rounded-xl text-sm font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 hover:scale-105 hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 cursor-default",
								children: [u.jsx("i", {
									className: "fas fa-check mr-2 text-xs"
								}), f]
							}, f))
						})]
					})]
				})
			}), u.jsx($e, {
				className: "rounded-[2rem]",
				children: u.jsxs("div", {
					className: "glass p-8 rounded-[2rem] relative group border border-emerald-500/10 hover:border-emerald-500/40 hover:bg-emerald-500/5 h-full",
					children: [u.jsxs("div", {
						className: "flex justify-between items-start mb-8",
						children: [u.jsxs("div", {
							className: "relative group-hover:scale-110 transition-transform duration-500",
							children: [u.jsx("div", {
								className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center border border-emerald-500/10",
								children: u.jsx("i", {
									className: "fas fa-user-graduate text-2xl text-emerald-400"
								})
							}), u.jsx("div", {
								className: "absolute -top-2 -right-2 w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/10 shadow-lg",
								children: u.jsx("i", {
									className: "fas fa-sync-alt text-xs text-emerald-400 animate-spin"
								})
							})]
						}), u.jsxs("div", {
							className: "text-right",
							children: [u.jsx("span", {
								className: "text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full group-hover:bg-emerald-500/20 transition-colors",
								children: "In Progress"
							}), u.jsx("div", {
								className: "text-[10px] text-zinc-500 mt-1 font-medium",
								children: "2025-Present"
							})]
						})]
					}), u.jsx("h3", {
						className: "text-2xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors duration-300",
						children: "A-Levels"
					}), u.jsxs("div", {
						className: "space-y-4",
						children: [u.jsxs("div", {
							className: "flex items-center gap-2",
							children: [u.jsx("span", {
								className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"
							}), u.jsx("span", {
								className: "text-xs font-bold text-emerald-300 uppercase tracking-wider",
								children: "Current Subjects"
							})]
						}), u.jsxs("div", {
							className: "flex flex-wrap gap-3",
							children: [u.jsxs("span", {
								className: "px-4 py-2 rounded-xl text-sm font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 hover:scale-105 hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 cursor-default",
								children: [u.jsx("i", {
									className: "fas fa-dna mr-2 text-xs"
								}), "Biology A-Level"]
							}), u.jsxs("span", {
								className: "px-4 py-2 rounded-xl text-sm font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 hover:scale-105 hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 cursor-default",
								children: [u.jsx("i", {
									className: "fas fa-flask mr-2 text-xs"
								}), "Chemistry A-Level"]
							})]
						})]
					})]
				})
			})]
		})]
	})),
	cy = Ml.memo(() => u.jsxs("section", {
		className: "mb-24",
		id: "projects",
		children: [u.jsx(Wl, {
			children: u.jsxs("h2", {
				className: "text-3xl font-bold mb-10 flex items-center gap-4",
				children: [u.jsx("span", {
					className: "w-12 h-[1px] bg-gradient-to-r from-emerald-500 to-emerald-500"
				}), "Featured Projects"]
			})
		}), u.jsxs(Ya, {
			className: "grid grid-cols-1 md:grid-cols-2 gap-6",
			children: [u.jsx($e, {
				className: "rounded-3xl",
				children: u.jsxs("div", {
					className: "glass p-6 rounded-3xl group border border-transparent h-full",
					children: [u.jsxs("div", {
						className: "flex justify-between items-start mb-4",
						children: [u.jsx("div", {
							className: "w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500",
							children: u.jsx("i", {
								className: "fas fa-shield-virus text-xl"
							})
						}), u.jsxs("div", {
							className: "flex items-center gap-2",
							children: [u.jsx("span", {
								className: "text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-md font-bold uppercase",
								children: "Minecraft"
							}), u.jsx("span", {
								className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]",
								title: "Active Development"
							})]
						})]
					}), u.jsx("h3", {
						className: "text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors duration-300",
						children: "Raven3x"
					}), u.jsx("p", {
						className: "text-zinc-500 text-sm mb-6 group-hover:text-zinc-400 transition-colors",
						children: "Hacked Client for Minecraft PvP"
					}), u.jsx("div", {
						className: "flex gap-2 flex-wrap",
						children: ["#Java", "#OpenGL", "#Mixins"].map(f => u.jsx("span", {
							className: "px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-[10px] text-emerald-300 group-hover:border-emerald-500/30 transition-colors",
							children: f
						}, f))
					})]
				})
			}), u.jsx($e, {
				className: "rounded-3xl",
				children: u.jsxs("div", {
					className: "glass p-6 rounded-3xl group border border-transparent h-full",
					children: [u.jsxs("div", {
						className: "flex justify-between items-start mb-4",
						children: [u.jsx("div", {
							className: "w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500",
							children: u.jsx("i", {
								className: "fab fa-apple text-xl"
							})
						}), u.jsxs("div", {
							className: "flex items-center gap-2",
							children: [u.jsx("span", {
								className: "text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-md font-bold uppercase",
								children: "iOS"
							}), u.jsx("span", {
								className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]",
								title: "Active Development"
							})]
						})]
					}), u.jsx("h3", {
						className: "text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors duration-300",
						children: "Online Ipa signer(Retired)"
					}), u.jsx("p", {
						className: "text-zinc-500 text-sm mb-6 group-hover:text-zinc-400 transition-colors",
						children: "Signs Ipas so that you can install them on your ios device"
					}), u.jsx("div", {
						className: "flex gap-2 flex-wrap",
						children: ["#Node.js", "#SwiftUI", "#CLI"].map(f => u.jsx("span", {
							className: "px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-[10px] text-emerald-300 group-hover:border-emerald-500/30 transition-colors",
							children: f
						}, f))
					})]
				})
			}), u.jsx($e, {
				className: "rounded-3xl",
				children: u.jsxs("div", {
					className: "glass p-6 rounded-3xl group border border-transparent h-full",
					children: [u.jsxs("div", {
						className: "flex justify-between items-start mb-4",
						children: [u.jsx("div", {
							className: "w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500",
							children: u.jsx("i", {
								className: "fas fa-globe text-xl"
							})
						}), u.jsx("div", {
							className: "flex items-center gap-2",
							children: u.jsx("span", {
								className: "text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-md font-bold uppercase",
								children: "Web"
							})
						})]
					}), u.jsx("h3", {
						className: "text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors duration-300",
						children: "This Portfolio"
					}), u.jsx("p", {
						className: "text-zinc-500 text-sm mb-6 group-hover:text-zinc-400 transition-colors",
						children: "I am too tired man ts pmo, TOO MUCH STUDYING😭🙏😔"
					}), u.jsx("div", {
						className: "flex gap-2 flex-wrap",
						children: ["#HTML", "#CSS", "#JS"].map(f => u.jsx("span", {
							className: "px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-[10px] text-emerald-300 group-hover:border-emerald-500/30 transition-colors",
							children: f
						}, f))
					})]
				})
			}), u.jsx($e, {
				className: "rounded-3xl",
				children: u.jsxs("div", {
					className: "glass p-6 rounded-3xl group border border-transparent h-full",
					children: [u.jsxs("div", {
						className: "flex justify-between items-start mb-4",
						children: [u.jsx("div", {
							className: "w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500",
							children: u.jsx("i", {
								className: "fab fa-discord text-xl"
							})
						}), u.jsx("div", {
							className: "flex items-center gap-2",
							children: u.jsx("span", {
								className: "text-[10px] bg-zinc-500/20 text-zinc-400 px-2 py-1 rounded-md font-bold uppercase",
								children: "Archived"
							})
						})]
					}), u.jsx("h3", {
						className: "text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors duration-300",
						children: "Discord Bot with no manners"
					}), u.jsx("p", {
						className: "text-zinc-500 text-sm mb-6 group-hover:text-zinc-400 transition-colors",
						children: "a bot that has no manner... but is useful somehow lol"
					}), u.jsx("div", {
						className: "flex gap-2 flex-wrap",
						children: ["#Python", "#My pure skill(ᵗʳᵘˢᵗ)"].map(f => u.jsx("span", {
							className: "px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-[10px] text-emerald-300 group-hover:border-emerald-500/30 transition-colors",
							children: f
						}, f))
					})]
				})
			})]
		})]
	})),
	ry = Ml.memo(() => u.jsxs("section", {
		className: "mb-24",
		children: [u.jsx(Wl, {
			children: u.jsxs("h2", {
				className: "text-3xl font-bold mb-10 flex items-center gap-4",
				children: [u.jsx("span", {
					className: "w-12 h-[1px] bg-gradient-to-r from-emerald-500 to-emerald-500"
				}), "Latest Updates"]
			})
		}), u.jsxs(Ya, {
			className: "grid grid-cols-1 md:grid-cols-3 gap-6",
			children: [u.jsx($e, {
				className: "rounded-2xl",
				children: u.jsxs("div", {
					className: "glass p-6 rounded-2xl border border-transparent transition-all duration-500 group h-full",
					children: [u.jsxs("div", {
						className: "flex items-center gap-2 mb-4",
						children: [u.jsx("span", {
							className: "w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500",
							children: u.jsx("i", {
								className: "fas fa-rocket text-emerald-400 text-xs"
							})
						}), u.jsx("span", {
							className: "text-[10px] font-bold text-emerald-400 uppercase tracking-widest",
							children: "Status Update"
						})]
					}), u.jsx("h3", {
						className: "font-bold mb-2 group-hover:text-emerald-400 transition-colors duration-300",
						children: "Portfolio Updated"
					}), u.jsx("p", {
						className: "text-zinc-500 text-xs leading-relaxed group-hover:text-zinc-400 transition-colors",
						children: "Completely redesigned"
					}), u.jsxs("div", {
						className: "mt-4 text-[10px] text-emerald-600 flex items-center gap-2",
						children: [u.jsx("i", {
							className: "far fa-calendar"
						}), " 12/12/2025"]
					})]
				})
			}), u.jsx($e, {
				className: "rounded-2xl",
				children: u.jsxs("div", {
					className: "glass p-6 rounded-2xl border border-emerald-500/20 transition-all duration-500 group h-full",
					children: [u.jsxs("div", {
						className: "flex items-center gap-2 mb-4",
						children: [u.jsx("span", {
							className: "w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-yellow-500/20 transition-all duration-500",
							children: u.jsx("i", {
								className: "fas fa-book text-yellow-400 text-xs"
							})
						}), u.jsx("span", {
							className: "text-[10px] font-bold text-yellow-400 uppercase tracking-widest",
							children: "Nothing new bc i have exams😭😭🙏😔"
						})]
					}), u.jsx("h3", {
						className: "font-bold mb-2 group-hover:text-emerald-400 transition-colors duration-300",
						children: "Grinding studies"
					}), u.jsx("p", {
						className: "text-zinc-500 text-xs leading-relaxed group-hover:text-zinc-400 transition-colors",
						children: "need to study"
					}), u.jsxs("div", {
						className: "mt-4 text-[10px] text-emerald-600 flex items-center gap-2",
						children: [u.jsx("i", {
							className: "far fa-calendar"
						}), " Present"]
					})]
				})
			}), u.jsx($e, {
				className: "rounded-2xl",
				children: u.jsxs("div", {
					className: "glass p-6 rounded-2xl opacity-60 hover:opacity-100 transition-all duration-500 group border border-transparent h-full",
					children: [u.jsxs("div", {
						className: "flex items-center gap-2 mb-4",
						children: [u.jsx("span", {
							className: "w-8 h-8 rounded-lg bg-zinc-500/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-zinc-500/20 transition-all duration-500",
							children: u.jsx("i", {
								className: "fas fa-archive text-zinc-400 text-xs"
							})
						}), u.jsx("span", {
							className: "text-[10px] font-bold text-zinc-500 uppercase tracking-widest",
							children: "Archive"
						})]
					}), u.jsx("h3", {
						className: "font-bold mb-2 group-hover:text-emerald-400 transition-colors duration-300",
						children: "Many more pojects that didnt get published yet"
					}), u.jsx("p", {
						className: "text-zinc-500 text-xs leading-relaxed group-hover:text-zinc-400 transition-colors",
						children: "Many project that havent touched the internet and only remained on my computer"
					}), u.jsxs("div", {
						className: "mt-4 text-[10px] text-zinc-600 flex items-center gap-2",
						children: [u.jsx("i", {
							className: "far fa-calendar"
						}), " 2020-2025"]
					})]
				})
			})]
		})]
	})),
	fy = "1036621192515297322",
	c0 = "$2a$10$HX4eBzR8o5ZgJ6wLurs.qOncb5QgAxXVRQ2TC8SMnkiXVRpGvmTaa",
	r0 = "694dd7cc43b1c97be9054bdd",
	oy = "Astear17",
	dy = () => {
		var pt, et;
		const [f, c] = L.useState(!0), [o, d] = L.useState(null), [h, S] = L.useState(!1), [M, A] = L.useState(new Date), [E, v] = L.useState(null), [C, U] = L.useState(""), X = L.useRef(null), J = L.useRef(0), V = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"], K = j => {
			const H = new Date().getTime() - j.getTime(),
				Z = Math.floor(H / 1e3),
				k = Math.floor(Z / 60),
				x = Math.floor(k / 60),
				_ = Math.floor(x / 24);
			if (Z < 60) return `${Z}s`;
			if (k < 60) return `${k} min`;
			if (x < 24) {
				const B = k % 60;
				return B === 0 ? `${x}h` : `${x}h ${B}m`
			}
			const R = x % 24;
			return R === 0 ? `${_}d` : `${_}d ${R}h`
		}, pe = j => j.toLocaleTimeString("en-US", {
			hour: "numeric",
			minute: "2-digit",
			hour12: !0
		});
		L.useEffect(() => {
			f ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
		}, [f]), L.useEffect(() => {
			if (h) {
				const j = setTimeout(() => S(!1), 5e3);
				return () => clearTimeout(j)
			}
		}, [h]), L.useEffect(() => {
			const j = setTimeout(() => c(!1), 1200),
				D = async () => {
					try {
						const Z = await fetch(`https://api.lanyard.rest/v1/users/${fy}`);
						if (Z.ok) {
							const k = await Z.json();
							k.success && k.data && d(k.data)
						}
					} catch {}
				};
			D();
			const H = setInterval(D, 300);
			return () => {
				clearTimeout(j), clearInterval(H)
			}
		}, []), L.useEffect(() => {
			if (!o) return;
			const j = o.discord_status,
				D = X.current,
				H = async () => {
					try {
						const k = Date.now(),
							x = await fetch(`https://api.jsonbin.io/v3/b/${r0}/latest?cache=${k}`, {
								headers: {
									"X-Master-Key": c0,
									"Cache-Control": "no-cache"
								}
							});
						if (x.ok) {
							const _ = await x.json();
							_.record && _.record.last_online && v(new Date(_.record.last_online))
						}
					} catch {}
				}, Z = async k => {
					try {
						const x = new Date().toISOString();
						await fetch(`https://api.jsonbin.io/v3/b/${r0}`, {
							method: "PUT",
							headers: {
								"Content-Type": "application/json",
								"X-Master-Key": c0
							},
							body: JSON.stringify({
								last_online: x,
								status: k,
								user_id: oy,
								updated: Date.now()
							})
						})
					} catch {}
				};
			D === null ? j === "offline" && H() : D !== j && (j === "offline" ? (v(new Date), Z("offline")) : D === "offline" && (v(null), Z("online"))), X.current = j
		}, [o]), L.useEffect(() => {
			if (!E) {
				U("");
				return
			}
			const j = () => {
				U(K(E) + " ago")
			};
			j();
			const D = setInterval(j, 500);
			return () => clearInterval(D)
		}, [E]), L.useEffect(() => {
			const j = setInterval(() => A(new Date), 300);
			return () => clearInterval(j)
		}, []), L.useEffect(() => {
			const j = D => {
				if (D.key === V[J.current]) {
					if (J.current++, J.current === V.length) {
						const H = document.createElement("div");
						H.innerText = "Secret Unlocked!", H.className = "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-emerald-500 to-emerald-600 text-black font-bold text-2xl p-8 rounded-2xl z-[100] animate-bounce shadow-[0_0_50px_rgba(0,255,136,0.6)]", document.body.appendChild(H), document.body.style.animation = "rainbow 2s linear infinite";
						const Z = document.createElement("style");
						Z.innerHTML = "@keyframes rainbow { 0% { filter: hue-rotate(0deg); } 100% { filter: hue-rotate(360deg); } }", document.head.appendChild(Z), setTimeout(() => {
							H.remove(), document.body.style.animation = "", Z.remove()
						}, 4e3), J.current = 0
					}
				} else J.current = 0
			};
			return window.addEventListener("keydown", j), () => window.removeEventListener("keydown", j)
		}, []);
		const [ge, me] = L.useState("");
		L.useEffect(() => {
			const j = ["Programmer", "Designer", "Gamer", "Student", "Tech-Enthusiast"];
			let D = 0,
				H = 0,
				Z = !1,
				k;
			const x = () => {
				const _ = j[D];
				Z ? (me(_.substring(0, H - 1)), H--) : (me(_.substring(0, H + 1)), H++);
				let R = Z ? 50 : 100;
				!Z && H === _.length ? (R = 2e3, Z = !0) : Z && H === 0 && (Z = !1, D = (D + 1) % j.length, R = 500), k = setTimeout(x, R)
			};
			return k = setTimeout(x, 1e3), () => clearTimeout(k)
		}, []);
		const ue = new Date(M.toLocaleString("en-US", {
				timeZone: "Asia/Kuwait"
			})),
			Te = ue.getHours() % 12 || 12,
			Ee = ue.getMinutes().toString().padStart(2, "0"),
			_e = ue.getSeconds().toString().padStart(2, "0"),
			$ = ue.getHours() >= 12 ? "PM" : "AM",
			Me = ue.toLocaleDateString("en-US", {
				weekday: "short",
				month: "short",
				day: "numeric"
			}),
			Le = {
				online: "#23a55a",
				idle: "#faa61a",
				dnd: "#f04747",
				offline: "#747f8d"
			},
			Qe = (o == null ? void 0 : o.discord_status) || "offline",
			vt = Le[Qe],
			qe = (pt = o == null ? void 0 : o.activities) == null ? void 0 : pt.find(j => j.type === 4),
			Yt = Qe === "offline" ? "ZZZzzzzzz.." : (qe == null ? void 0 : qe.state) || "Chilling...";
		return u.jsxs("div", {
			className: "relative min-h-screen text-white font-sans selection:bg-emerald-500/30",
			children: [u.jsx("div", {
				className: "fixed inset-0 z-[50] pointer-events-none opacity-[0.03] mix-blend-overlay",
				style: {
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
				}
			}), u.jsxs("div", {
				className: `fixed inset-0 bg-[#050505] z-[10000] flex flex-col items-center justify-center gap-12 transition-opacity duration-1000 ease-in-out pointer-events-none ${f?"opacity-100 pointer-events-auto":"opacity-0"}`,
				children: [u.jsx("div", {
					className: "relative",
					children: u.jsx("div", {
						className: "font-mono text-5xl font-bold text-emerald-400 animate-pulse tracking-tighter drop-shadow-[0_0_40px_rgba(0,255,136,1)]",
						children: "Astear17"
					})
				}), u.jsxs("div", {
					className: "flex gap-2",
					children: [u.jsx("div", {
						className: "w-3 h-3 bg-emerald-500 rounded-full animate-bounce-high [animation-delay:0s]"
					}), u.jsx("div", {
						className: "w-3 h-3 bg-emerald-500 rounded-full animate-bounce-high [animation-delay:0.15s]"
					}), u.jsx("div", {
						className: "w-3 h-3 bg-emerald-500 rounded-full animate-bounce-high [animation-delay:0.3s]"
					})]
				}), u.jsx("div", {
					className: "font-mono text-xs text-white/50 tracking-[0.3em] uppercase",
					children: "Loading"
				})]
			}), u.jsx(Ex, {}), u.jsx(zx, {}), u.jsx(Ax, {
				active: h
			}), u.jsx("div", {
				className: "fixed top-4 right-4 md:top-8 md:right-8 z-40 group cursor-default",
				children: u.jsxs("div", {
					className: "glass px-2 py-1 md:px-5 md:py-3 rounded-2xl flex flex-col items-end border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105 relative overflow-hidden backdrop-blur-md shadow-[0_8px_32px_-8px_rgba(0,255,136,0.1)]",
					children: [u.jsx("div", {
						className: "absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
					}), u.jsxs("div", {
						className: "flex items-baseline gap-1 relative z-10",
						children: [u.jsx("span", {
							className: "font-mono text-emerald-400 text-sm md:text-2xl font-bold tracking-tighter drop-shadow-[0_0_8px_rgba(0,255,136,0.3)]",
							children: Te
						}), u.jsx("span", {
							className: "font-mono text-emerald-500 text-xs md:text-lg animate-pulse",
							children: ":"
						}), u.jsx("span", {
							className: "font-mono text-emerald-400 text-sm md:text-2xl font-bold tracking-tighter drop-shadow-[0_0_8px_rgba(0,255,136,0.3)]",
							children: Ee
						}), u.jsx("span", {
							className: "font-mono text-emerald-500 text-xs md:text-lg",
							children: ":"
						}), u.jsx("span", {
							className: "font-mono text-emerald-400 text-sm md:text-2xl font-bold tracking-tighter drop-shadow-[0_0_8px_rgba(0,255,136,0.3)] w-[2ch] text-right tabular-nums",
							children: _e
						}), u.jsx("span", {
							className: "font-mono text-emerald-300 text-[9px] md:text-xs font-medium ml-1",
							children: $
						})]
					}), u.jsxs("div", {
						className: "flex items-center gap-2 mt-1 relative z-10",
						children: [u.jsxs("span", {
							className: "text-[9px] uppercase tracking-wider text-emerald-300/80 font-semibold flex items-center gap-1",
							children: [u.jsx("i", {
								className: "fas fa-calendar-day text-[8px]"
							}), u.jsx("span", {
								children: Me
							})]
						}), u.jsx("span", {
							className: "w-1 h-1 rounded-full bg-emerald-500/40"
						}), u.jsxs("span", {
							className: "text-[9px] text-zinc-500 font-medium flex items-center gap-1",
							children: [u.jsx("i", {
								className: "fas fa-globe text-[8px]"
							}), u.jsx("span", {
								children: "KWT"
							})]
						})]
					})]
				})
			}), u.jsxs("main", {
				className: "container mx-auto px-6 pt-24 pb-32 max-w-5xl relative z-10",
				children: [u.jsx(Wl, {
					children: u.jsxs("div", {
						id: "home",
						className: "flex flex-col md:flex-row items-center gap-12 mb-32 scroll-mt-32",
						children: [u.jsxs("div", {
							className: "relative group flex justify-center md:justify-start",
							children: [u.jsxs("div", {
								className: "absolute right-[110%] top-[0px] md:left-auto md:right-[100%] md:top-[-15px] md:translate-y-[0px] md:translate-x-[-20px] z-50 w-max pointer-events-none animate-float",
								children: [u.jsx("div", {
									className: `relative transform scale-75 translate-x-8 px-5 py-3 md:px-10 md:py-5 max-w-[14rem] md:max-w-[28rem] whitespace-normal break-words rounded-[30px] border-[3px] border-[#050505] shadow-[8px_8px_0_rgba(0,255,136,0.35)] font-bold text-sm md:text-lg uppercase tracking-tight text-center bg-gradient-to-br from-white to-[#e6fff5] text-black ${Qe==="offline"?"opacity-90":""}`,
									children: Yt
								}), u.jsx("div", {
									className: "absolute top-[60%] right-[-18px] w-4 h-4 bg-white border-[3px] border-[#050505] rounded-full"
								}), u.jsx("div", {
									className: "absolute top-[70%] right-[-30px] w-2.5 h-2.5 bg-white border-[2px] border-[#050505] rounded-full"
								})]
							}), u.jsx("div", {
								className: "absolute -inset-2 bg-gradient-to-r from-emerald-500 to-emerald-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"
							}), u.jsxs("div", {
								className: "relative w-32 h-32 md:w-44 md:h-44",
								children: [u.jsx("img", {
									src: (et = o == null ? void 0 : o.discord_user) != null && et.avatar ? `https://cdn.discordapp.com/avatars/${o.discord_user.id}/${o.discord_user.avatar}.png?size=256` : "https://via.placeholder.com/150",
									alt: "Astear17",
									className: "w-full h-full rounded-full border-2 border-emerald-500/50 object-cover shadow-2xl z-10 hover:scale-105 transition-transform duration-500 relative bg-[#050505]"
								}), u.jsx("div", {
									className: "absolute bottom-2 right-2 md:bottom-4 md:right-4 w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-[#050505] shadow-lg z-20",
									style: {
										backgroundColor: vt
									}
								})]
							})]
						}), u.jsxs("div", {
							className: "text-center md:text-left relative w-full md:w-auto",
							children: [u.jsxs("h1", {
								className: "text-5xl md:text-7xl font-bold mb-4 tracking-tight",
								children: ["Hi, I'm ", u.jsx("span", {
									className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-white to-emerald-400 bg-300% animate-shimmer [filter:drop-shadow(0_0_10px_rgba(0,255,136,0.9))_drop-shadow(0_0_25px_rgba(0,255,136,0.5))_drop-shadow(0_0_50px_rgba(0,255,136,0.3))]",
									children: "Astear17"
								})]
							}), u.jsxs("p", {
								className: "text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed",
								children: ["A 17-year-old who is a ", u.jsx("span", {
									className: "text-white font-semibold border-r-2 border-emerald-500 pr-1",
									children: ge
								}), " building things for the web, games, and iOS. Currently Studying A-Levels while trying to be as productive as possible."]
							}), Qe === "offline" && C && u.jsx("div", {
								className: "mt-6 mb-4 flex justify-center md:justify-start animate-in fade-in slide-in-from-bottom-2 duration-700",
								children: u.jsxs("div", {
									className: "glass px-5 py-2 rounded-full flex items-center gap-3 border border-emerald-500/10 hover:border-emerald-500/30 transition-all group hover:bg-emerald-500/5",
									children: [u.jsxs("div", {
										className: "relative",
										children: [u.jsx("div", {
											className: "w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(0,255,136,0.5)]"
										}), u.jsx("div", {
											className: "absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-50"
										})]
									}), u.jsxs("span", {
										className: "text-zinc-400 text-sm font-medium",
										children: ["Last seen ", u.jsx("span", {
											className: "text-emerald-400 font-bold ml-1",
											children: C
										})]
									}), u.jsx("i", {
										className: "fas fa-clock text-emerald-500/50 text-xs ml-1"
									})]
								})
							}), u.jsx("div", {
								className: "flex flex-wrap justify-center md:justify-start gap-4 mt-8",
								children: [{
									name: "Discord",
									icon: "fab fa-discord",
									color: "#5865F2",
									link: "https://discord.com/users/1036621192515297322"
								}, {
									name: "Telegram",
									icon: "fab fa-telegram",
									color: "#0088cc",
									link: "https://t.me/Astear171o"
								}, {
									name: "Instagram",
									icon: "fab fa-instagram",
									color: "#E4405F",
									link: "https://instagram.com/Astear171___/"
								}, {
									name: "Minecraft",
									icon: "fas fa-cube",
									color: "#6AA84F",
									link: "https://namemc.com/profile/Astear171_.1"
								}].map(j => u.jsxs("a", {
									href: j.link,
									target: "_blank",
									rel: "noreferrer",
									className: "glass px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 active:scale-95 hover:bg-emerald-500/10 transition-all group",
									children: [u.jsx("i", {
										className: `${j.icon}`,
										style: {
											color: j.color
										}
									}), " ", u.jsx("span", {
										children: j.name
									})]
								}, j.name))
							})]
						})]
					})
				}), u.jsx(Wl, {
					delay: 200,
					children: u.jsxs("section", {
						id: "terminal",
						className: "mb-20 grid grid-cols-1 lg:grid-cols-2 gap-6 scroll-mt-24",
						children: [u.jsx($e, {
							className: "rounded-3xl h-full",
							children: u.jsxs("div", {
								className: "glass refract p-6 rounded-3xl relative overflow-hidden group border-l-2 border-transparent hover:border-emerald-500 transition-all flex flex-col h-full shadow-lg shadow-emerald-900/5 hover:shadow-emerald-900/10",
								children: [u.jsx("div", {
									className: "flex items-center justify-between mb-6",
									children: u.jsxs("h3", {
										className: "text-xs uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2",
										children: [u.jsx("span", {
											className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
										}), "Real-time Activity"]
									})
								}), u.jsx("div", {
									className: "flex-1",
									children: u.jsx(ay, {
										data: o
									})
								}), u.jsxs("div", {
									className: "flex items-center justify-between mt-4 pt-4 border-t border-white/5",
									children: [u.jsxs("div", {
										className: "flex items-center gap-2",
										children: [u.jsx("div", {
											className: `w-2 h-2 rounded-full ${Qe==="offline"?"bg-zinc-500":"bg-emerald-500 animate-pulse"}`
										}), u.jsx("span", {
											className: "text-[10px] text-zinc-500 font-medium uppercase tracking-wider",
											children: Qe === "offline" ? "Offline" : "Live Status"
										})]
									}), u.jsxs("div", {
										className: "flex items-center gap-1.5",
										children: [u.jsx("i", {
											className: "fas fa-clock text-[9px] text-emerald-500/60"
										}), u.jsx("span", {
											className: "text-[10px] text-emerald-400 font-bold",
											children: Qe === "offline" ? E ? `Last active • ${pe(E)}` : "Last Seen Recently" : "Active Now"
										})]
									})]
								})]
							})
						}), u.jsx(ly, {
							onMatrixTrigger: () => S(!0),
							isOnline: Qe === "online"
						})]
					})
				}), u.jsx(cy, {}), u.jsx(iy, {}), u.jsx(uy, {})]
			}), u.jsxs("footer", {
				className: "relative border-t border-white/5 py-12 mt-12 overflow-hidden z-10 pb-32",
				children: [u.jsx("div", {
					className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-emerald-500/10 blur-[80px] pointer-events-none"
				}), u.jsxs("div", {
					className: "container mx-auto px-6 relative z-10 flex flex-col items-center",
					children: [u.jsx("div", {
						className: "mb-6 opacity-60 hover:opacity-100 transition-opacity",
						children: u.jsx("img", {
							src: "https://hitscounter.dev/api/hit?url=https%3A%2F%2FAstear171.soon.it%2F&label=&icon=display&color=%231aa179&message=&style=flat&tz=Asia%2FKuwait",
							alt: "Views",
							className: "h-5"
						})
					}), u.jsx("div", {
						className: "text-2xl font-mono font-bold text-emerald-400 mb-6 drop-shadow-[0_0_25px_rgba(0,255,136,0.8)] hover:scale-110 transition-transform cursor-pointer",
						children: "<Astear17 />"
					}), u.jsxs("div", {
						className: "flex items-center justify-center gap-3 mb-5 w-full max-w-xs",
						children: [u.jsx("div", {
							className: "h-px bg-gradient-to-r from-transparent to-emerald-500/40 flex-1"
						}), u.jsx("div", {
							className: "w-1.5 h-1.5 rounded-full bg-emerald-500/40"
						}), u.jsx("div", {
							className: "h-px bg-gradient-to-l from-transparent to-emerald-500/40 flex-1"
						})]
					}), u.jsxs("p", {
						className: "text-zinc-600 text-xs text-center flex items-center justify-center gap-2",
						children: [u.jsx("span", {
							children: "© 2025"
						}), u.jsx("span", {
							className: "font-semibold text-emerald-500",
							children: "Astear17"
						}), u.jsx("span", {
							children: "•"
						}), u.jsx("span", {
							children: "Built with exhaustion during exams 😭🙏"
						})]
					})]
				})]
			})]
		})
	},
	Q0 = document.getElementById("root");
if (!Q0) throw new Error("Could not find root element to mount to");
const my = Nx.createRoot(Q0);
my.render(u.jsx(Ml.StrictMode, {
	children: u.jsx(dy, {})
}));
