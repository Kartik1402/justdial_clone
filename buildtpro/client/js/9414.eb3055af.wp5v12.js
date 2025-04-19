"use strict";
(self.webpackChunkjustdial = self.webpackChunkjustdial || []).push([
    [9414], {
        21742: (e, t, n) => {
            n.d(t, {
                Wx: () => v,
                pL: () => h
            });
            var r = n(96540);

            function o() {
                return o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, o.apply(this, arguments)
            }

            function i(e, t) {
                return i = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, i(e, t)
            }
            var s = new Map,
                a = new WeakMap,
                c = 0,
                l = void 0;

            function u(e) {
                return Object.keys(e).sort().filter((function(t) {
                    return void 0 !== e[t]
                })).map((function(t) {
                    return t + "_" + ("root" === t ? (n = e.root) ? (a.has(n) || (c += 1, a.set(n, c.toString())), a.get(n)) : "0" : e[t]);
                    var n
                })).toString()
            }

            function p(e, t, n, r) {
                if (void 0 === n && (n = {}), void 0 === r && (r = l), void 0 === window.IntersectionObserver && void 0 !== r) {
                    var o = e.getBoundingClientRect();
                    return t(r, {
                            isIntersecting: r,
                            target: e,
                            intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0,
                            time: 0,
                            boundingClientRect: o,
                            intersectionRect: o,
                            rootBounds: o
                        }),
                        function() {}
                }
                var i = function(e) {
                        var t = u(e),
                            n = s.get(t);
                        if (!n) {
                            var r, o = new Map,
                                i = new IntersectionObserver((function(t) {
                                    t.forEach((function(t) {
                                        var n, i = t.isIntersecting && r.some((function(e) {
                                            return t.intersectionRatio >= e
                                        }));
                                        e.trackVisibility && void 0 === t.isVisible && (t.isVisible = i), null == (n = o.get(t.target)) || n.forEach((function(e) {
                                            e(i, t)
                                        }))
                                    }))
                                }), e);
                            r = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                                id: t,
                                observer: i,
                                elements: o
                            }, s.set(t, n)
                        }
                        return n
                    }(n),
                    a = i.id,
                    c = i.observer,
                    p = i.elements,
                    d = p.get(e) || [];
                return p.has(e) || p.set(e, d), d.push(t), c.observe(e),
                    function() {
                        d.splice(d.indexOf(t), 1), 0 === d.length && (p.delete(e), c.unobserve(e)), 0 === p.size && (c.disconnect(), s.delete(a))
                    }
            }
            var d = ["children", "as", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];

            function f(e) {
                return "function" != typeof e.children
            }
            var h = function(e) {
                var t, n;

                function s(t) {
                    var n;
                    return (n = e.call(this, t) || this).node = null, n._unobserveCb = null, n.handleNode = function(e) {
                        n.node && (n.unobserve(), e || n.props.triggerOnce || n.props.skip || n.setState({
                            inView: !!n.props.initialInView,
                            entry: void 0
                        })), n.node = e || null, n.observeNode()
                    }, n.handleChange = function(e, t) {
                        e && n.props.triggerOnce && n.unobserve(), f(n.props) || n.setState({
                            inView: e,
                            entry: t
                        }), n.props.onChange && n.props.onChange(e, t)
                    }, n.state = {
                        inView: !!t.initialInView,
                        entry: void 0
                    }, n
                }
                n = e, (t = s).prototype = Object.create(n.prototype), t.prototype.constructor = t, i(t, n);
                var a = s.prototype;
                return a.componentDidUpdate = function(e) {
                    e.rootMargin === this.props.rootMargin && e.root === this.props.root && e.threshold === this.props.threshold && e.skip === this.props.skip && e.trackVisibility === this.props.trackVisibility && e.delay === this.props.delay || (this.unobserve(), this.observeNode())
                }, a.componentWillUnmount = function() {
                    this.unobserve(), this.node = null
                }, a.observeNode = function() {
                    if (this.node && !this.props.skip) {
                        var e = this.props,
                            t = e.threshold,
                            n = e.root,
                            r = e.rootMargin,
                            o = e.trackVisibility,
                            i = e.delay,
                            s = e.fallbackInView;
                        this._unobserveCb = p(this.node, this.handleChange, {
                            threshold: t,
                            root: n,
                            rootMargin: r,
                            trackVisibility: o,
                            delay: i
                        }, s)
                    }
                }, a.unobserve = function() {
                    this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
                }, a.render = function() {
                    if (!f(this.props)) {
                        var e = this.state,
                            t = e.inView,
                            n = e.entry;
                        return this.props.children({
                            inView: t,
                            entry: n,
                            ref: this.handleNode
                        })
                    }
                    var i = this.props,
                        s = i.children,
                        a = i.as,
                        c = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o
                        }(i, d);
                    return r.createElement(a || "div", o({
                        ref: this.handleNode
                    }, c), s)
                }, s
            }(r.Component);

            function v(e) {
                var t = void 0 === e ? {} : e,
                    n = t.threshold,
                    o = t.delay,
                    i = t.trackVisibility,
                    s = t.rootMargin,
                    a = t.root,
                    c = t.triggerOnce,
                    l = t.skip,
                    u = t.initialInView,
                    d = t.fallbackInView,
                    f = t.onChange,
                    h = r.useRef(),
                    v = r.useRef(),
                    y = r.useState({
                        inView: !!u
                    }),
                    b = y[0],
                    m = y[1];
                v.current = f;
                var g = r.useCallback((function(e) {
                    void 0 !== h.current && (h.current(), h.current = void 0), l || e && (h.current = p(e, (function(e, t) {
                        m({
                            inView: e,
                            entry: t
                        }), v.current && v.current(e, t), t.isIntersecting && c && h.current && (h.current(), h.current = void 0)
                    }), {
                        root: a,
                        rootMargin: s,
                        threshold: n,
                        trackVisibility: i,
                        delay: o
                    }, d))
                }), [Array.isArray(n) ? n.toString() : n, a, s, c, l, i, d, o]);
                r.useEffect((function() {
                    h.current || !b.entry || c || l || m({
                        inView: !!u
                    })
                }));
                var w = [g, b.inView, b.entry];
                return w.ref = w[0], w.inView = w[1], w.entry = w[2], w
            }
        },
        46817: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            var r = n(96540),
                o = n(21742),
                i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                s = function(e) {
                    var t = e.children,
                        n = e.itemIndex,
                        s = e.cb,
                        a = e.disableObserver,
                        c = e.persistImpression,
                        l = e.itemKey,
                        u = e.richContent,
                        p = void 0 !== u && u,
                        d = e.triggerOnce,
                        f = void 0 === d || d,
                        h = e.threshold,
                        v = void 0 === h ? .85 : h,
                        y = a;
                    if (c && void 0 === window.__viewedItemKeys) throw new Error("Provide <persistImpression /> Component before Inview Component");
                    c && window.__viewedItemKeys.indexOf(l) > -1 && (y = !0);
                    var b = (0, o.Wx)({
                            rootMargin: p ? "-100px 0px" : "0px",
                            threshold: v,
                            triggerOnce: f
                        }),
                        m = b.ref,
                        g = b.inView;
                    (0, r.useEffect)((function() {
                        g && s && !y && (s(n), c && window.__viewedItemKeys.push(l))
                    }), [g]);
                    var w = null;
                    if (!y && t && t.length > 1) throw new Error("single child show be provided");
                    return !y && t && "object" === (void 0 === t ? "undefined" : i(t)) && t.type && "function" == typeof t.type && t.props.to ? w = r.cloneElement(t, {
                        innerRef: m
                    }) : !y && t && "object" === (void 0 === t ? "undefined" : i(t)) ? w = r.cloneElement(t, {
                        ref: m
                    }) : y && (w = t), w
                };
            s.defaultProps = {
                itemIndex: 0,
                disableObserver: !1,
                persistImpression: !1,
                itemKey: ""
            };
            const a = (0, r.memo)(s)
        },
        51142: (e, t, n) => {
            n.d(t, {
                A: () => y
            });
            var r = n(96540),
                o = n(80083),
                i = n(17201),
                s = n(57757),
                a = n(3756),
                c = n(97553),
                l = n(56404),
                u = n(49621),
                p = n(53004),
                d = n(41569),
                f = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();

            function h(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            var v = function(e) {
                function t() {
                    var e, n, r;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
                    return n = r = h(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), r.closeModal = function() {
                        r.props.closeVerticalModalAction()
                    }, r.redirectToVertical = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments[1];
                        if (e.url) {
                            r.props.source;
                            var n = u.A.get("globalTrackerVertical");
                            (0, c.A)({
                                ll: t || e.text || "",
                                li: "website_redirection",
                                docid: n.docid,
                                nid: n.nid,
                                cname: n.cname,
                                searchId: n.searchId,
                                datacity: n.datacity,
                                position: n.position,
                                paid: n.paid,
                                ds: n.ds,
                                spincode: n.spincode
                            }), window.dataLayer.push({
                                event: "tpButtonClickEvent",
                                bdtext: e.text,
                                bdpage: t || e.text || "",
                                ncatid: n.nid,
                                b2b: 0,
                                companyname: n.cname,
                                verified: "",
                                pstatus: n.paid,
                                docid: n.docid,
                                position: n.position,
                                tp: 1,
                                env: "https://www.justdial.com" === window.location.origin ? "p" : "d",
                                version: d.A.VERSION
                            }), window.myjio ? (0, p.ss)("launchbrowser", e.url) : (0, a.A)("THIRD_PARTY", e.url)
                        }
                    }, h(r, n)
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), f(t, [{
                    key: "componentDidMount",
                    value: function() {}
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.props.destroyVerticalModalAction()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props.verticalConfig,
                            n = void 0 === t ? {} : t;
                        return r.createElement(i.A, null, r.createElement("div", {
                            className: "affliateWpr",
                            style: {
                                display: n.openModal ? "block" : "none"
                            },
                            onClick: this.closeModal
                        }, r.createElement("div", {
                            className: "affliateDv dt"
                        }, r.createElement("div", {
                            className: "affliateTxt"
                        }, r.createElement("span", {
                            className: "contTxt"
                        }, (0, l.A)({
                            text: "continue with"
                        }))), r.createElement("ul", {
                            className: "affliateUl"
                        }, n.openModal && n.verticalList.map((function(t) {
                            return r.createElement("li", {
                                key: t.url,
                                onClick: function() {
                                    return e.redirectToVertical(t || {}, n.from)
                                }
                            }, r.createElement("span", {
                                className: "IconWpr"
                            }, r.createElement("span", {
                                className: "zomatoIcon",
                                style: {
                                    backgroundImage: "url(" + t.img + ")"
                                }
                            })), r.createElement("span", {
                                className: "icontxtWpr"
                            }, r.createElement("span", {
                                className: "icontxt"
                            }, t.text), t.dsc && r.createElement("span", {
                                className: "offerTxt"
                            }, r.createElement("span", null, t.dsc))))
                        })))), r.createElement("span", {
                            className: "cancelbtn dt",
                            onClick: this.closeModal
                        }, (0, l.A)({
                            text: "Cancel"
                        }))))
                    }
                }]), t
            }(r.PureComponent);
            const y = (0, o.Ng)((function(e) {
                return {
                    verticalConfig: e.app.verticalConfig
                }
            }), (function(e) {
                return {
                    closeVerticalModalAction: function(t) {
                        return e((0, s.Kj)(t))
                    },
                    destroyVerticalModalAction: function(t) {
                        return e((0, s.e)(t))
                    }
                }
            }))(v)
        }
    }
]);