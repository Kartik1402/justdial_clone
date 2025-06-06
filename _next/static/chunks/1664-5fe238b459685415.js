(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1664], {
        71210: function(a, b) {
            "use strict";

            function c(a, b, c, d) {
                return !1
            }
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), b.getDomainLocale = c, ("function" == typeof b.default || "object" == typeof b.default && null !== b.default) && void 0 === b.default.__esModule && (Object.defineProperty(b.default, "__esModule", {
                value: !0
            }), Object.assign(b.default, b), a.exports = b.default)
        },
        48418: function(a, b, c) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });
            var d = c(94941).Z;
            c(45753).default, Object.defineProperty(b, "__esModule", {
                value: !0
            }), b.default = void 0;
            var e = c(92648).Z,
                f = c(17273).Z,
                g = e(c(67294)),
                h = c(76273),
                i = c(22725),
                j = c(63462),
                k = c(21018),
                l = c(57190),
                m = c(71210),
                n = c(98684),
                o = void 0 !== g.default.useTransition,
                p = {};

            function q(a, b, c, d) {
                if (a && h.isLocalURL(b)) {
                    a.prefetch(b, c, d).catch(function(a) {});
                    var e = d && void 0 !== d.locale ? d.locale : a && a.locale;
                    p[b + "%" + c + (e ? "%" + e : "")] = !0
                }
            }
            var r = g.default.forwardRef(function(a, b) {
                var c, e, r = a.href,
                    s = a.as,
                    t = a.children,
                    u = a.prefetch,
                    v = a.passHref,
                    w = a.replace,
                    x = a.soft,
                    y = a.shallow,
                    z = a.scroll,
                    A = a.locale,
                    B = a.onClick,
                    C = a.onMouseEnter,
                    D = a.onTouchStart,
                    E = a.legacyBehavior,
                    F = void 0 === E ? !0 !== Boolean(!1) : E,
                    G = f(a, ["href", "as", "children", "prefetch", "passHref", "replace", "soft", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                c = t, F && ("string" == typeof c || "number" == typeof c) && (c = g.default.createElement("a", null, c));
                var H = !1 !== u,
                    I = d(o ? g.default.useTransition() : [], 2),
                    J = I[1],
                    K = g.default.useContext(j.RouterContext),
                    L = g.default.useContext(k.AppRouterContext);
                L && (K = L);
                var M = g.default.useMemo(function() {
                        var a = d(h.resolveHref(K, r, !0), 2),
                            b = a[0],
                            c = a[1];
                        return {
                            href: b,
                            as: s ? h.resolveHref(K, s) : c || b
                        }
                    }, [K, r, s]),
                    N = M.href,
                    O = M.as,
                    P = g.default.useRef(N),
                    Q = g.default.useRef(O);
                F && (e = g.default.Children.only(c));
                var R = F ? e && "object" == typeof e && e.ref : b,
                    S = d(l.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    T = S[0],
                    U = S[1],
                    V = S[2],
                    W = g.default.useCallback(function(a) {
                        (Q.current !== O || P.current !== N) && (V(), Q.current = O, P.current = N), T(a), R && ("function" == typeof R ? R(a) : "object" == typeof R && (R.current = a))
                    }, [O, R, N, V, T]);
                g.default.useEffect(function() {
                    var a = U && H && h.isLocalURL(N),
                        b = void 0 !== A ? A : K && K.locale,
                        c = p[N + "%" + O + (b ? "%" + b : "")];
                    a && !c && q(K, N, O, {
                        locale: b
                    })
                }, [O, N, U, A, H, K]);
                var X = {
                    ref: W,
                    onClick: function(a) {
                        F || "function" != typeof B || B(a), F && e.props && "function" == typeof e.props.onClick && e.props.onClick(a), a.defaultPrevented || function(a, b, c, d, e, f, g, i, j, k) {
                            if ("A" !== a.currentTarget.nodeName.toUpperCase() || (!(m = (l = a).currentTarget.target) || "_self" === m) && !l.metaKey && !l.ctrlKey && !l.shiftKey && !l.altKey && (!l.nativeEvent || 2 !== l.nativeEvent.which) && h.isLocalURL(c)) {
                                a.preventDefault();
                                var l, m, n = function() {
                                    "softPush" in b && "softReplace" in b ? b[f ? e ? "softReplace" : "softPush" : e ? "replace" : "push"](c) : b[e ? "replace" : "push"](c, d, {
                                        shallow: g,
                                        locale: j,
                                        scroll: i
                                    })
                                };
                                k ? k(n) : n()
                            }
                        }(a, K, N, O, w, x, y, z, A, L ? J : void 0)
                    },
                    onMouseEnter: function(a) {
                        F || "function" != typeof C || C(a), F && e.props && "function" == typeof e.props.onMouseEnter && e.props.onMouseEnter(a), h.isLocalURL(N) && q(K, N, O, {
                            priority: !0
                        })
                    },
                    onTouchStart: function(a) {
                        F || "function" != typeof D || D(a), F && e.props && "function" == typeof e.props.onTouchStart && e.props.onTouchStart(a), h.isLocalURL(N) && q(K, N, O, {
                            priority: !0
                        })
                    }
                };
                if (!F || v || "a" === e.type && !("href" in e.props)) {
                    var Y = void 0 !== A ? A : K && K.locale,
                        Z = K && K.isLocaleDomain && m.getDomainLocale(O, Y, K.locales, K.domainLocales);
                    X.href = Z || n.addBasePath(i.addLocale(O, Y, K && K.defaultLocale))
                }
                return F ? g.default.cloneElement(e, X) : g.default.createElement("a", Object.assign({}, G, X), c)
            });
            b.default = r, ("function" == typeof b.default || "object" == typeof b.default && null !== b.default) && void 0 === b.default.__esModule && (Object.defineProperty(b.default, "__esModule", {
                value: !0
            }), Object.assign(b.default, b), a.exports = b.default)
        },
        57190: function(a, b, c) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });
            var d = c(94941).Z;
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), b.useIntersection = function(a) {
                var b = a.rootRef,
                    c = a.rootMargin,
                    h = a.disabled || !g,
                    i = e.useRef(),
                    k = d(e.useState(!1), 2),
                    l = k[0],
                    m = k[1],
                    n = d(e.useState(null), 2),
                    o = n[0],
                    p = n[1];
                e.useEffect(function() {
                    if (g) {
                        if (i.current && (i.current(), i.current = void 0), !h && !l) return o && o.tagName && (i.current = j(o, function(a) {
                                return a && m(a)
                            }, {
                                root: null == b ? void 0 : b.current,
                                rootMargin: c
                            })),
                            function() {
                                null == i.current || i.current(), i.current = void 0
                            }
                    } else if (!l) {
                        var a = f.requestIdleCallback(function() {
                            return m(!0)
                        });
                        return function() {
                            return f.cancelIdleCallback(a)
                        }
                    }
                }, [o, h, c, b, l]);
                var q = e.useCallback(function() {
                    m(!1)
                }, []);
                return [p, l, q]
            };
            var e = c(67294),
                f = c(9311),
                g = "function" == typeof IntersectionObserver,
                h = new Map,
                i = [];

            function j(a, b, c) {
                var d = k(c),
                    e = d.id,
                    f = d.observer,
                    g = d.elements;
                return g.set(a, b), f.observe(a),
                    function() {
                        if (g.delete(a), f.unobserve(a), 0 === g.size) {
                            f.disconnect(), h.delete(e);
                            var b = i.findIndex(function(a) {
                                return a.root === e.root && a.margin === e.margin
                            });
                            b > -1 && i.splice(b, 1)
                        }
                    }
            }

            function k(a) {
                var b, c = {
                        root: a.root || null,
                        margin: a.rootMargin || ""
                    },
                    d = i.find(function(a) {
                        return a.root === c.root && a.margin === c.margin
                    });
                if (d && (b = h.get(d))) return b;
                var e = new Map,
                    f = new IntersectionObserver(function(a) {
                        a.forEach(function(a) {
                            var b = e.get(a.target),
                                c = a.isIntersecting || a.intersectionRatio > 0;
                            b && c && b(c)
                        })
                    }, a);
                return b = {
                    id: c,
                    observer: f,
                    elements: e
                }, i.push(c), h.set(c, b), b
            }("function" == typeof b.default || "object" == typeof b.default && null !== b.default) && void 0 === b.default.__esModule && (Object.defineProperty(b.default, "__esModule", {
                value: !0
            }), Object.assign(b.default, b), a.exports = b.default)
        },
        21018: function(a, b, c) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), b.GlobalLayoutRouterContext = b.LayoutRouterContext = b.AppRouterContext = void 0;
            var d = (0, c(92648).Z)(c(67294)),
                e = d.default.createContext(null);
            b.AppRouterContext = e;
            var f = d.default.createContext(null);
            b.LayoutRouterContext = f;
            var g = d.default.createContext(null);
            b.GlobalLayoutRouterContext = g
        },
        41664: function(a, b, c) {
            a.exports = c(48418)
        }
    }
])