"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1911], {
        71911: function(a, b, c) {
            function d(a) {
                return null !== a && "object" == typeof a && "constructor" in a && a.constructor === Object
            }

            function e(a = {}, b = {}) {
                Object.keys(b).forEach(c => {
                    void 0 === a[c] ? a[c] = b[c] : d(b[c]) && d(a[c]) && Object.keys(b[c]).length > 0 && e(a[c], b[c])
                })
            }
            c.d(b, {
                s5: function() {
                    return Y
                },
                pt: function() {
                    return Z
                },
                Gk: function() {
                    return T
                },
                W_: function() {
                    return V
                },
                tl: function() {
                    return X
                },
                ZP: function() {
                    return S
                }
            });
            let f = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector() {
                    return null
                },
                querySelectorAll() {
                    return []
                },
                getElementById() {
                    return null
                },
                createEvent() {
                    return {
                        initEvent() {}
                    }
                },
                createElement() {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute() {},
                        getElementsByTagName() {
                            return []
                        }
                    }
                },
                createElementNS() {
                    return {}
                },
                importNode() {
                    return null
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function g() {
                let a = "undefined" != typeof document ? document : {};
                return e(a, f), a
            }
            let h = {
                document: f,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle() {
                    return {
                        getPropertyValue() {
                            return ""
                        }
                    }
                },
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia() {
                    return {}
                },
                requestAnimationFrame(a) {
                    return "undefined" == typeof setTimeout ? (a(), null) : setTimeout(a, 0)
                },
                cancelAnimationFrame(a) {
                    "undefined" != typeof setTimeout && clearTimeout(a)
                }
            };

            function i() {
                let a = "undefined" != typeof window ? window : {};
                return e(a, h), a
            }
            class j extends Array {
                constructor(a) {
                    "number" == typeof a ? super(a) : (super(...a || []), function(a) {
                        let b = a.__proto__;
                        Object.defineProperty(a, "__proto__", {
                            get() {
                                return b
                            },
                            set(a) {
                                b.__proto__ = a
                            }
                        })
                    }(this))
                }
            }

            function k(a = []) {
                let b = [];
                return a.forEach(a => {
                    Array.isArray(a) ? b.push(...k(a)) : b.push(a)
                }), b
            }

            function l(a, b) {
                return Array.prototype.filter.call(a, b)
            }

            function m(a, b) {
                let c = i(),
                    d = g(),
                    e = [];
                if (!b && a instanceof j) return a;
                if (!a) return new j(e);
                if ("string" == typeof a) {
                    let f = a.trim();
                    if (f.indexOf("<") >= 0 && f.indexOf(">") >= 0) {
                        let h = "div";
                        0 === f.indexOf("<li") && (h = "ul"), 0 === f.indexOf("<tr") && (h = "tbody"), (0 === f.indexOf("<td") || 0 === f.indexOf("<th")) && (h = "tr"), 0 === f.indexOf("<tbody") && (h = "table"), 0 === f.indexOf("<option") && (h = "select");
                        let k = d.createElement(h);
                        k.innerHTML = f;
                        for (let l = 0; l < k.childNodes.length; l += 1) e.push(k.childNodes[l])
                    } else e = function(a, b) {
                        if ("string" != typeof a) return [a];
                        let c = [],
                            d = b.querySelectorAll(a);
                        for (let e = 0; e < d.length; e += 1) c.push(d[e]);
                        return c
                    }(a.trim(), b || d)
                } else if (a.nodeType || a === c || a === d) e.push(a);
                else if (Array.isArray(a)) {
                    if (a instanceof j) return a;
                    e = a
                }
                return new j(function(a) {
                    let b = [];
                    for (let c = 0; c < a.length; c += 1) - 1 === b.indexOf(a[c]) && b.push(a[c]);
                    return b
                }(e))
            }
            m.fn = j.prototype;
            let n = "resize scroll".split(" ");

            function o(a) {
                return function(...b) {
                    if (void 0 === b[0]) {
                        for (let c = 0; c < this.length; c += 1) 0 > n.indexOf(a) && (a in this[c] ? this[c][a]() : m(this[c]).trigger(a));
                        return this
                    }
                    return this.on(a, ...b)
                }
            }
            o("click"), o("blur"), o("focus"), o("focusin"), o("focusout"), o("keyup"), o("keydown"), o("keypress"), o("submit"), o("change"), o("mousedown"), o("mousemove"), o("mouseup"), o("mouseenter"), o("mouseleave"), o("mouseout"), o("mouseover"), o("touchstart"), o("touchend"), o("touchmove"), o("resize"), o("scroll");
            let p = {
                addClass: function(...a) {
                    let b = k(a.map(a => a.split(" ")));
                    return this.forEach(a => {
                        a.classList.add(...b)
                    }), this
                },
                removeClass: function(...a) {
                    let b = k(a.map(a => a.split(" ")));
                    return this.forEach(a => {
                        a.classList.remove(...b)
                    }), this
                },
                hasClass: function(...a) {
                    let b = k(a.map(a => a.split(" ")));
                    return l(this, a => b.filter(b => a.classList.contains(b)).length > 0).length > 0
                },
                toggleClass: function(...a) {
                    let b = k(a.map(a => a.split(" ")));
                    this.forEach(a => {
                        b.forEach(b => {
                            a.classList.toggle(b)
                        })
                    })
                },
                attr: function(a, b) {
                    if (1 === arguments.length && "string" == typeof a) return this[0] ? this[0].getAttribute(a) : void 0;
                    for (let c = 0; c < this.length; c += 1)
                        if (2 === arguments.length) this[c].setAttribute(a, b);
                        else
                            for (let d in a) this[c][d] = a[d], this[c].setAttribute(d, a[d]);
                    return this
                },
                removeAttr: function(a) {
                    for (let b = 0; b < this.length; b += 1) this[b].removeAttribute(a);
                    return this
                },
                transform: function(a) {
                    for (let b = 0; b < this.length; b += 1) this[b].style.transform = a;
                    return this
                },
                transition: function(a) {
                    for (let b = 0; b < this.length; b += 1) this[b].style.transitionDuration = "string" != typeof a ? `${a}ms` : a;
                    return this
                },
                on: function(...a) {
                    let [b, c, d, e] = a;

                    function f(a) {
                        let b = a.target;
                        if (!b) return;
                        let e = a.target.dom7EventData || [];
                        if (0 > e.indexOf(a) && e.unshift(a), m(b).is(c)) d.apply(b, e);
                        else {
                            let f = m(b).parents();
                            for (let g = 0; g < f.length; g += 1) m(f[g]).is(c) && d.apply(f[g], e)
                        }
                    }

                    function g(a) {
                        let b = a && a.target && a.target.dom7EventData || [];
                        0 > b.indexOf(a) && b.unshift(a), d.apply(this, b)
                    }
                    "function" == typeof a[1] && ([b, d, e] = a, c = void 0), e || (e = !1);
                    let h = b.split(" "),
                        i;
                    for (let j = 0; j < this.length; j += 1) {
                        let k = this[j];
                        if (c)
                            for (i = 0; i < h.length; i += 1) {
                                let l = h[i];
                                k.dom7LiveListeners || (k.dom7LiveListeners = {}), k.dom7LiveListeners[l] || (k.dom7LiveListeners[l] = []), k.dom7LiveListeners[l].push({
                                    listener: d,
                                    proxyListener: f
                                }), k.addEventListener(l, f, e)
                            } else
                                for (i = 0; i < h.length; i += 1) {
                                    let n = h[i];
                                    k.dom7Listeners || (k.dom7Listeners = {}), k.dom7Listeners[n] || (k.dom7Listeners[n] = []), k.dom7Listeners[n].push({
                                        listener: d,
                                        proxyListener: g
                                    }), k.addEventListener(n, g, e)
                                }
                    }
                    return this
                },
                off: function(...a) {
                    let [b, c, d, e] = a;
                    "function" == typeof a[1] && ([b, d, e] = a, c = void 0), e || (e = !1);
                    let f = b.split(" ");
                    for (let g = 0; g < f.length; g += 1) {
                        let h = f[g];
                        for (let i = 0; i < this.length; i += 1) {
                            let j = this[i],
                                k;
                            if (!c && j.dom7Listeners ? k = j.dom7Listeners[h] : c && j.dom7LiveListeners && (k = j.dom7LiveListeners[h]), k && k.length)
                                for (let l = k.length - 1; l >= 0; l -= 1) {
                                    let m = k[l];
                                    d && m.listener === d ? (j.removeEventListener(h, m.proxyListener, e), k.splice(l, 1)) : d && m.listener && m.listener.dom7proxy && m.listener.dom7proxy === d ? (j.removeEventListener(h, m.proxyListener, e), k.splice(l, 1)) : d || (j.removeEventListener(h, m.proxyListener, e), k.splice(l, 1))
                                }
                        }
                    }
                    return this
                },
                trigger: function(...a) {
                    let b = i(),
                        c = a[0].split(" "),
                        d = a[1];
                    for (let e = 0; e < c.length; e += 1) {
                        let f = c[e];
                        for (let g = 0; g < this.length; g += 1) {
                            let h = this[g];
                            if (b.CustomEvent) {
                                let j = new b.CustomEvent(f, {
                                    detail: d,
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                h.dom7EventData = a.filter((a, b) => b > 0), h.dispatchEvent(j), h.dom7EventData = [], delete h.dom7EventData
                            }
                        }
                    }
                    return this
                },
                transitionEnd: function(a) {
                    let b = this;

                    function c(d) {
                        d.target === this && (a.call(this, d), b.off("transitionend", c))
                    }
                    return a && b.on("transitionend", c), this
                },
                outerWidth: function(a) {
                    if (this.length > 0) {
                        if (a) {
                            let b = this.styles();
                            return this[0].offsetWidth + parseFloat(b.getPropertyValue("margin-right")) + parseFloat(b.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(a) {
                    if (this.length > 0) {
                        if (a) {
                            let b = this.styles();
                            return this[0].offsetHeight + parseFloat(b.getPropertyValue("margin-top")) + parseFloat(b.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                styles: function() {
                    let a = i();
                    return this[0] ? a.getComputedStyle(this[0], null) : {}
                },
                offset: function() {
                    if (this.length > 0) {
                        let a = i(),
                            b = g(),
                            c = this[0],
                            d = c.getBoundingClientRect(),
                            e = b.body,
                            f = c.clientTop || e.clientTop || 0,
                            h = c.clientLeft || e.clientLeft || 0,
                            j = c === a ? a.scrollY : c.scrollTop,
                            k = c === a ? a.scrollX : c.scrollLeft;
                        return {
                            top: d.top + j - f,
                            left: d.left + k - h
                        }
                    }
                    return null
                },
                css: function(a, b) {
                    let c = i(),
                        d;
                    if (1 === arguments.length) {
                        if ("string" == typeof a) {
                            if (this[0]) return c.getComputedStyle(this[0], null).getPropertyValue(a)
                        } else {
                            for (d = 0; d < this.length; d += 1)
                                for (let e in a) this[d].style[e] = a[e];
                            return this
                        }
                    }
                    if (2 === arguments.length && "string" == typeof a)
                        for (d = 0; d < this.length; d += 1) this[d].style[a] = b;
                    return this
                },
                each: function(a) {
                    return a && this.forEach((b, c) => {
                        a.apply(b, [b, c])
                    }), this
                },
                html: function(a) {
                    if (void 0 === a) return this[0] ? this[0].innerHTML : null;
                    for (let b = 0; b < this.length; b += 1) this[b].innerHTML = a;
                    return this
                },
                text: function(a) {
                    if (void 0 === a) return this[0] ? this[0].textContent.trim() : null;
                    for (let b = 0; b < this.length; b += 1) this[b].textContent = a;
                    return this
                },
                is: function(a) {
                    let b = i(),
                        c = g(),
                        d = this[0],
                        e, f;
                    if (!d || void 0 === a) return !1;
                    if ("string" == typeof a) {
                        if (d.matches) return d.matches(a);
                        if (d.webkitMatchesSelector) return d.webkitMatchesSelector(a);
                        if (d.msMatchesSelector) return d.msMatchesSelector(a);
                        for (f = 0, e = m(a); f < e.length; f += 1)
                            if (e[f] === d) return !0;
                        return !1
                    }
                    if (a === c) return d === c;
                    if (a === b) return d === b;
                    if (a.nodeType || a instanceof j) {
                        for (f = 0, e = a.nodeType ? [a] : a; f < e.length; f += 1)
                            if (e[f] === d) return !0
                    }
                    return !1
                },
                index: function() {
                    let a = this[0],
                        b;
                    if (a) {
                        for (b = 0; null !== (a = a.previousSibling);) 1 === a.nodeType && (b += 1);
                        return b
                    }
                },
                eq: function(a) {
                    if (void 0 === a) return this;
                    let b = this.length;
                    if (a > b - 1) return m([]);
                    if (a < 0) {
                        let c = b + a;
                        return c < 0 ? m([]) : m([this[c]])
                    }
                    return m([this[a]])
                },
                append: function(...a) {
                    let b, c = g();
                    for (let d = 0; d < a.length; d += 1) {
                        b = a[d];
                        for (let e = 0; e < this.length; e += 1)
                            if ("string" == typeof b) {
                                let f = c.createElement("div");
                                for (f.innerHTML = b; f.firstChild;) this[e].appendChild(f.firstChild)
                            } else if (b instanceof j)
                            for (let h = 0; h < b.length; h += 1) this[e].appendChild(b[h]);
                        else this[e].appendChild(b)
                    }
                    return this
                },
                prepend: function(a) {
                    let b = g(),
                        c, d;
                    for (c = 0; c < this.length; c += 1)
                        if ("string" == typeof a) {
                            let e = b.createElement("div");
                            for (e.innerHTML = a, d = e.childNodes.length - 1; d >= 0; d -= 1) this[c].insertBefore(e.childNodes[d], this[c].childNodes[0])
                        } else if (a instanceof j)
                        for (d = 0; d < a.length; d += 1) this[c].insertBefore(a[d], this[c].childNodes[0]);
                    else this[c].insertBefore(a, this[c].childNodes[0]);
                    return this
                },
                next: function(a) {
                    if (this.length > 0) {
                        if (a) return this[0].nextElementSibling && m(this[0].nextElementSibling).is(a) ? m([this[0].nextElementSibling]) : m([]);
                        if (this[0].nextElementSibling) return m([this[0].nextElementSibling])
                    }
                    return m([])
                },
                nextAll: function(a) {
                    let b = [],
                        c = this[0];
                    if (!c) return m([]);
                    for (; c.nextElementSibling;) {
                        let d = c.nextElementSibling;
                        a ? m(d).is(a) && b.push(d) : b.push(d), c = d
                    }
                    return m(b)
                },
                prev: function(a) {
                    if (this.length > 0) {
                        let b = this[0];
                        if (a) return b.previousElementSibling && m(b.previousElementSibling).is(a) ? m([b.previousElementSibling]) : m([]);
                        if (b.previousElementSibling) return m([b.previousElementSibling])
                    }
                    return m([])
                },
                prevAll: function(a) {
                    let b = [],
                        c = this[0];
                    if (!c) return m([]);
                    for (; c.previousElementSibling;) {
                        let d = c.previousElementSibling;
                        a ? m(d).is(a) && b.push(d) : b.push(d), c = d
                    }
                    return m(b)
                },
                parent: function(a) {
                    let b = [];
                    for (let c = 0; c < this.length; c += 1) null !== this[c].parentNode && (a ? m(this[c].parentNode).is(a) && b.push(this[c].parentNode) : b.push(this[c].parentNode));
                    return m(b)
                },
                parents: function(a) {
                    let b = [];
                    for (let c = 0; c < this.length; c += 1) {
                        let d = this[c].parentNode;
                        for (; d;) a ? m(d).is(a) && b.push(d) : b.push(d), d = d.parentNode
                    }
                    return m(b)
                },
                closest: function(a) {
                    let b = this;
                    return void 0 === a ? m([]) : (b.is(a) || (b = b.parents(a).eq(0)), b)
                },
                find: function(a) {
                    let b = [];
                    for (let c = 0; c < this.length; c += 1) {
                        let d = this[c].querySelectorAll(a);
                        for (let e = 0; e < d.length; e += 1) b.push(d[e])
                    }
                    return m(b)
                },
                children: function(a) {
                    let b = [];
                    for (let c = 0; c < this.length; c += 1) {
                        let d = this[c].children;
                        for (let e = 0; e < d.length; e += 1)(!a || m(d[e]).is(a)) && b.push(d[e])
                    }
                    return m(b)
                },
                filter: function(a) {
                    let b = l(this, a);
                    return m(b)
                },
                remove: function() {
                    for (let a = 0; a < this.length; a += 1) this[a].parentNode && this[a].parentNode.removeChild(this[a]);
                    return this
                }
            };
            Object.keys(p).forEach(a => {
                Object.defineProperty(m.fn, a, {
                    value: p[a],
                    writable: !0
                })
            });
            var q = m;

            function r(a, b = 0) {
                return setTimeout(a, b)
            }

            function s() {
                return Date.now()
            }

            function t(a) {
                return "object" == typeof a && null !== a && a.constructor && "Object" === Object.prototype.toString.call(a).slice(8, -1)
            }

            function u(a) {
                return "undefined" != typeof window && void 0 !== window.HTMLElement ? a instanceof HTMLElement : a && (1 === a.nodeType || 11 === a.nodeType)
            }

            function v(...a) {
                let b = Object(a[0]),
                    c = ["__proto__", "constructor", "prototype"];
                for (let d = 1; d < a.length; d += 1) {
                    let e = a[d];
                    if (null != e && !u(e)) {
                        let f = Object.keys(Object(e)).filter(a => 0 > c.indexOf(a));
                        for (let g = 0, h = f.length; g < h; g += 1) {
                            let i = f[g],
                                j = Object.getOwnPropertyDescriptor(e, i);
                            void 0 !== j && j.enumerable && (t(b[i]) && t(e[i]) ? e[i].__swiper__ ? b[i] = e[i] : v(b[i], e[i]) : !t(b[i]) && t(e[i]) ? (b[i] = {}, e[i].__swiper__ ? b[i] = e[i] : v(b[i], e[i])) : b[i] = e[i])
                        }
                    }
                }
                return b
            }

            function w(a, b, c) {
                a.style.setProperty(b, c)
            }

            function x({
                swiper: a,
                targetPosition: b,
                side: c
            }) {
                let d = i(),
                    e = -a.translate,
                    f = null,
                    g, h = a.params.speed;
                a.wrapperEl.style.scrollSnapType = "none", d.cancelAnimationFrame(a.cssModeFrameID);
                let j = b > e ? "next" : "prev",
                    k = (a, b) => "next" === j && a >= b || "prev" === j && a <= b,
                    l = () => {
                        g = new Date().getTime(), null === f && (f = g);
                        let i = Math.max(Math.min((g - f) / h, 1), 0),
                            j = e + (.5 - Math.cos(i * Math.PI) / 2) * (b - e);
                        if (k(j, b) && (j = b), a.wrapperEl.scrollTo({
                                [c]: j
                            }), k(j, b)) {
                            a.wrapperEl.style.overflow = "hidden", a.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                                a.wrapperEl.style.overflow = "", a.wrapperEl.scrollTo({
                                    [c]: j
                                })
                            }), d.cancelAnimationFrame(a.cssModeFrameID);
                            return
                        }
                        a.cssModeFrameID = d.requestAnimationFrame(l)
                    };
                l()
            }
            let y;

            function z() {
                return y || (y = function() {
                    let a = i(),
                        b = g();
                    return {
                        smoothScroll: b.documentElement && "scrollBehavior" in b.documentElement.style,
                        touch: !!("ontouchstart" in a || a.DocumentTouch && b instanceof a.DocumentTouch),
                        passiveListener: function() {
                            let b = !1;
                            try {
                                let c = Object.defineProperty({}, "passive", {
                                    get() {
                                        b = !0
                                    }
                                });
                                a.addEventListener("testPassiveListener", null, c)
                            } catch (d) {}
                            return b
                        }(),
                        gestures: "ongesturestart" in a
                    }
                }()), y
            }
            let A, B;
            var C = {
                on(a, b, c) {
                    let d = this;
                    if (!d.eventsListeners || d.destroyed || "function" != typeof b) return d;
                    let e = c ? "unshift" : "push";
                    return a.split(" ").forEach(a => {
                        d.eventsListeners[a] || (d.eventsListeners[a] = []), d.eventsListeners[a][e](b)
                    }), d
                },
                once(a, b, c) {
                    let d = this;
                    if (!d.eventsListeners || d.destroyed || "function" != typeof b) return d;

                    function e(...c) {
                        d.off(a, e), e.__emitterProxy && delete e.__emitterProxy, b.apply(d, c)
                    }
                    return e.__emitterProxy = b, d.on(a, e, c)
                },
                onAny(a, b) {
                    if (!this.eventsListeners || this.destroyed || "function" != typeof a) return this;
                    let c = b ? "unshift" : "push";
                    return 0 > this.eventsAnyListeners.indexOf(a) && this.eventsAnyListeners[c](a), this
                },
                offAny(a) {
                    if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                    let b = this.eventsAnyListeners.indexOf(a);
                    return b >= 0 && this.eventsAnyListeners.splice(b, 1), this
                },
                off(a, b) {
                    let c = this;
                    return c.eventsListeners && !c.destroyed && c.eventsListeners && a.split(" ").forEach(a => {
                        void 0 === b ? c.eventsListeners[a] = [] : c.eventsListeners[a] && c.eventsListeners[a].forEach((d, e) => {
                            (d === b || d.__emitterProxy && d.__emitterProxy === b) && c.eventsListeners[a].splice(e, 1)
                        })
                    }), c
                },
                emit(...a) {
                    let b = this;
                    if (!b.eventsListeners || b.destroyed || !b.eventsListeners) return b;
                    let c, d, e;
                    "string" == typeof a[0] || Array.isArray(a[0]) ? (c = a[0], d = a.slice(1, a.length), e = b) : (c = a[0].events, d = a[0].data, e = a[0].context || b), d.unshift(e);
                    let f = Array.isArray(c) ? c : c.split(" ");
                    return f.forEach(a => {
                        b.eventsAnyListeners && b.eventsAnyListeners.length && b.eventsAnyListeners.forEach(b => {
                            b.apply(e, [a, ...d])
                        }), b.eventsListeners && b.eventsListeners[a] && b.eventsListeners[a].forEach(a => {
                            a.apply(e, d)
                        })
                    }), b
                }
            };

            function D({
                swiper: a,
                runCallbacks: b,
                direction: c,
                step: d
            }) {
                let {
                    activeIndex: e,
                    previousIndex: f
                } = a, g = c;
                if (g || (g = e > f ? "next" : e < f ? "prev" : "reset"), a.emit(`transition${d}`), b && e !== f) {
                    if ("reset" === g) {
                        a.emit(`slideResetTransition${d}`);
                        return
                    }
                    a.emit(`slideChangeTransition${d}`), "next" === g ? a.emit(`slideNextTransition${d}`) : a.emit(`slidePrevTransition${d}`)
                }
            }

            function E(a) {
                let b = this,
                    c = g(),
                    d = i(),
                    e = b.touchEventsData,
                    {
                        params: f,
                        touches: h,
                        enabled: j
                    } = b;
                if (!j || b.animating && f.preventInteractionOnTransition) return;
                !b.animating && f.cssMode && f.loop && b.loopFix();
                let k = a;
                k.originalEvent && (k = k.originalEvent);
                let l = q(k.target);
                if ("wrapper" === f.touchEventsTarget && !l.closest(b.wrapperEl).length || (e.isTouchEvent = "touchstart" === k.type, !e.isTouchEvent && "which" in k && 3 === k.which || !e.isTouchEvent && "button" in k && k.button > 0 || e.isTouched && e.isMoved)) return;
                let m = !!f.noSwipingClass && "" !== f.noSwipingClass,
                    n = a.composedPath ? a.composedPath() : a.path;
                m && k.target && k.target.shadowRoot && n && (l = q(n[0]));
                let o = f.noSwipingSelector ? f.noSwipingSelector : `.${f.noSwipingClass}`,
                    p = !!(k.target && k.target.shadowRoot);
                if (f.noSwiping && (p ? function(a, b = this) {
                        function c(b) {
                            if (!b || b === g() || b === i()) return null;
                            b.assignedSlot && (b = b.assignedSlot);
                            let d = b.closest(a);
                            return d || b.getRootNode ? d || c(b.getRootNode().host) : null
                        }
                        return c(b)
                    }(o, l[0]) : l.closest(o)[0])) {
                    b.allowClick = !0;
                    return
                }
                if (f.swipeHandler && !l.closest(f.swipeHandler)[0]) return;
                h.currentX = "touchstart" === k.type ? k.targetTouches[0].pageX : k.pageX, h.currentY = "touchstart" === k.type ? k.targetTouches[0].pageY : k.pageY;
                let r = h.currentX,
                    t = h.currentY,
                    u = f.edgeSwipeDetection || f.iOSEdgeSwipeDetection,
                    v = f.edgeSwipeThreshold || f.iOSEdgeSwipeThreshold;
                if (u && (r <= v || r >= d.innerWidth - v)) {
                    if ("prevent" !== u) return;
                    a.preventDefault()
                }
                if (Object.assign(e, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), h.startX = r, h.startY = t, e.touchStartTime = s(), b.allowClick = !0, b.updateSize(), b.swipeDirection = void 0, f.threshold > 0 && (e.allowThresholdMove = !1), "touchstart" !== k.type) {
                    let w = !0;
                    l.is(e.focusableElements) && (w = !1, "SELECT" === l[0].nodeName && (e.isTouched = !1)), c.activeElement && q(c.activeElement).is(e.focusableElements) && c.activeElement !== l[0] && c.activeElement.blur();
                    let x = w && b.allowTouchMove && f.touchStartPreventDefault;
                    (f.touchStartForcePreventDefault || x) && !l[0].isContentEditable && k.preventDefault()
                }
                b.params.freeMode && b.params.freeMode.enabled && b.freeMode && b.animating && !f.cssMode && b.freeMode.onTouchStart(), b.emit("touchStart", k)
            }

            function F(a) {
                let b = g(),
                    c = this,
                    d = c.touchEventsData,
                    {
                        params: e,
                        touches: f,
                        rtlTranslate: h,
                        enabled: i
                    } = c;
                if (!i) return;
                let j = a;
                if (j.originalEvent && (j = j.originalEvent), !d.isTouched) {
                    d.startMoving && d.isScrolling && c.emit("touchMoveOpposite", j);
                    return
                }
                if (d.isTouchEvent && "touchmove" !== j.type) return;
                let k = "touchmove" === j.type && j.targetTouches && (j.targetTouches[0] || j.changedTouches[0]),
                    l = "touchmove" === j.type ? k.pageX : j.pageX,
                    m = "touchmove" === j.type ? k.pageY : j.pageY;
                if (j.preventedByNestedSwiper) {
                    f.startX = l, f.startY = m;
                    return
                }
                if (!c.allowTouchMove) {
                    q(j.target).is(d.focusableElements) || (c.allowClick = !1), d.isTouched && (Object.assign(f, {
                        startX: l,
                        startY: m,
                        currentX: l,
                        currentY: m
                    }), d.touchStartTime = s());
                    return
                }
                if (d.isTouchEvent && e.touchReleaseOnEdges && !e.loop) {
                    if (c.isVertical()) {
                        if (m < f.startY && c.translate <= c.maxTranslate() || m > f.startY && c.translate >= c.minTranslate()) {
                            d.isTouched = !1, d.isMoved = !1;
                            return
                        }
                    } else if (l < f.startX && c.translate <= c.maxTranslate() || l > f.startX && c.translate >= c.minTranslate()) return
                }
                if (d.isTouchEvent && b.activeElement && j.target === b.activeElement && q(j.target).is(d.focusableElements)) {
                    d.isMoved = !0, c.allowClick = !1;
                    return
                }
                if (d.allowTouchCallbacks && c.emit("touchMove", j), j.targetTouches && j.targetTouches.length > 1) return;
                f.currentX = l, f.currentY = m;
                let n = f.currentX - f.startX,
                    o = f.currentY - f.startY;
                if (c.params.threshold && Math.sqrt(n ** 2 + o ** 2) < c.params.threshold) return;
                if (void 0 === d.isScrolling) {
                    let p;
                    c.isHorizontal() && f.currentY === f.startY || c.isVertical() && f.currentX === f.startX ? d.isScrolling = !1 : n * n + o * o >= 25 && (p = 180 * Math.atan2(Math.abs(o), Math.abs(n)) / Math.PI, d.isScrolling = c.isHorizontal() ? p > e.touchAngle : 90 - p > e.touchAngle)
                }
                if (d.isScrolling && c.emit("touchMoveOpposite", j), void 0 === d.startMoving && (f.currentX !== f.startX || f.currentY !== f.startY) && (d.startMoving = !0), d.isScrolling) {
                    d.isTouched = !1;
                    return
                }
                if (!d.startMoving) return;
                c.allowClick = !1, !e.cssMode && j.cancelable && j.preventDefault(), e.touchMoveStopPropagation && !e.nested && j.stopPropagation(), d.isMoved || (e.loop && !e.cssMode && c.loopFix(), d.startTranslate = c.getTranslate(), c.setTransition(0), c.animating && c.$wrapperEl.trigger("webkitTransitionEnd transitionend"), d.allowMomentumBounce = !1, e.grabCursor && (!0 === c.allowSlideNext || !0 === c.allowSlidePrev) && c.setGrabCursor(!0), c.emit("sliderFirstMove", j)), c.emit("sliderMove", j), d.isMoved = !0;
                let r = c.isHorizontal() ? n : o;
                f.diff = r, r *= e.touchRatio, h && (r = -r), c.swipeDirection = r > 0 ? "prev" : "next", d.currentTranslate = r + d.startTranslate;
                let t = !0,
                    u = e.resistanceRatio;
                if (e.touchReleaseOnEdges && (u = 0), r > 0 && d.currentTranslate > c.minTranslate() ? (t = !1, e.resistance && (d.currentTranslate = c.minTranslate() - 1 + (-c.minTranslate() + d.startTranslate + r) ** u)) : r < 0 && d.currentTranslate < c.maxTranslate() && (t = !1, e.resistance && (d.currentTranslate = c.maxTranslate() + 1 - (c.maxTranslate() - d.startTranslate - r) ** u)), t && (j.preventedByNestedSwiper = !0), !c.allowSlideNext && "next" === c.swipeDirection && d.currentTranslate < d.startTranslate && (d.currentTranslate = d.startTranslate), !c.allowSlidePrev && "prev" === c.swipeDirection && d.currentTranslate > d.startTranslate && (d.currentTranslate = d.startTranslate), c.allowSlidePrev || c.allowSlideNext || (d.currentTranslate = d.startTranslate), e.threshold > 0) {
                    if (Math.abs(r) > e.threshold || d.allowThresholdMove) {
                        if (!d.allowThresholdMove) {
                            d.allowThresholdMove = !0, f.startX = f.currentX, f.startY = f.currentY, d.currentTranslate = d.startTranslate, f.diff = c.isHorizontal() ? f.currentX - f.startX : f.currentY - f.startY;
                            return
                        }
                    } else {
                        d.currentTranslate = d.startTranslate;
                        return
                    }
                }
                e.followFinger && !e.cssMode && ((e.freeMode && e.freeMode.enabled && c.freeMode || e.watchSlidesProgress) && (c.updateActiveIndex(), c.updateSlidesClasses()), c.params.freeMode && e.freeMode.enabled && c.freeMode && c.freeMode.onTouchMove(), c.updateProgress(d.currentTranslate), c.setTranslate(d.currentTranslate))
            }

            function G(a) {
                let b = this,
                    c = b.touchEventsData,
                    {
                        params: d,
                        touches: e,
                        rtlTranslate: f,
                        slidesGrid: g,
                        enabled: h
                    } = b;
                if (!h) return;
                let i = a;
                if (i.originalEvent && (i = i.originalEvent), c.allowTouchCallbacks && b.emit("touchEnd", i), c.allowTouchCallbacks = !1, !c.isTouched) {
                    c.isMoved && d.grabCursor && b.setGrabCursor(!1), c.isMoved = !1, c.startMoving = !1;
                    return
                }
                d.grabCursor && c.isMoved && c.isTouched && (!0 === b.allowSlideNext || !0 === b.allowSlidePrev) && b.setGrabCursor(!1);
                let j = s(),
                    k = j - c.touchStartTime;
                if (b.allowClick) {
                    let l = i.path || i.composedPath && i.composedPath();
                    b.updateClickedSlide(l && l[0] || i.target), b.emit("tap click", i), k < 300 && j - c.lastClickTime < 300 && b.emit("doubleTap doubleClick", i)
                }
                if (c.lastClickTime = s(), r(() => {
                        b.destroyed || (b.allowClick = !0)
                    }), !c.isTouched || !c.isMoved || !b.swipeDirection || 0 === e.diff || c.currentTranslate === c.startTranslate) {
                    c.isTouched = !1, c.isMoved = !1, c.startMoving = !1;
                    return
                }
                c.isTouched = !1, c.isMoved = !1, c.startMoving = !1;
                let m;
                if (m = d.followFinger ? f ? b.translate : -b.translate : -c.currentTranslate, d.cssMode) return;
                if (b.params.freeMode && d.freeMode.enabled) {
                    b.freeMode.onTouchEnd({
                        currentPos: m
                    });
                    return
                }
                let n = 0,
                    o = b.slidesSizesGrid[0];
                for (let p = 0; p < g.length; p += p < d.slidesPerGroupSkip ? 1 : d.slidesPerGroup) {
                    let q = p < d.slidesPerGroupSkip - 1 ? 1 : d.slidesPerGroup;
                    void 0 !== g[p + q] ? m >= g[p] && m < g[p + q] && (n = p, o = g[p + q] - g[p]) : m >= g[p] && (n = p, o = g[g.length - 1] - g[g.length - 2])
                }
                let t = null,
                    u = null;
                d.rewind && (b.isBeginning ? u = b.params.virtual && b.params.virtual.enabled && b.virtual ? b.virtual.slides.length - 1 : b.slides.length - 1 : b.isEnd && (t = 0));
                let v = (m - g[n]) / o,
                    w = n < d.slidesPerGroupSkip - 1 ? 1 : d.slidesPerGroup;
                if (k > d.longSwipesMs) {
                    if (!d.longSwipes) {
                        b.slideTo(b.activeIndex);
                        return
                    }
                    "next" === b.swipeDirection && (v >= d.longSwipesRatio ? b.slideTo(d.rewind && b.isEnd ? t : n + w) : b.slideTo(n)), "prev" === b.swipeDirection && (v > 1 - d.longSwipesRatio ? b.slideTo(n + w) : null !== u && v < 0 && Math.abs(v) > d.longSwipesRatio ? b.slideTo(u) : b.slideTo(n))
                } else {
                    if (!d.shortSwipes) {
                        b.slideTo(b.activeIndex);
                        return
                    }
                    let x = b.navigation && (i.target === b.navigation.nextEl || i.target === b.navigation.prevEl);
                    x ? i.target === b.navigation.nextEl ? b.slideTo(n + w) : b.slideTo(n) : ("next" === b.swipeDirection && b.slideTo(null !== t ? t : n + w), "prev" === b.swipeDirection && b.slideTo(null !== u ? u : n))
                }
            }

            function H() {
                let a = this,
                    {
                        params: b,
                        el: c
                    } = a;
                if (c && 0 === c.offsetWidth) return;
                b.breakpoints && a.setBreakpoint();
                let {
                    allowSlideNext: d,
                    allowSlidePrev: e,
                    snapGrid: f
                } = a;
                a.allowSlideNext = !0, a.allowSlidePrev = !0, a.updateSize(), a.updateSlides(), a.updateSlidesClasses(), ("auto" === b.slidesPerView || b.slidesPerView > 1) && a.isEnd && !a.isBeginning && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0), a.autoplay && a.autoplay.running && a.autoplay.paused && a.autoplay.run(), a.allowSlidePrev = e, a.allowSlideNext = d, a.params.watchOverflow && f !== a.snapGrid && a.checkOverflow()
            }

            function I(a) {
                this.enabled && !this.allowClick && (this.params.preventClicks && a.preventDefault(), this.params.preventClicksPropagation && this.animating && (a.stopPropagation(), a.stopImmediatePropagation()))
            }

            function J() {
                let a = this,
                    {
                        wrapperEl: b,
                        rtlTranslate: c,
                        enabled: d
                    } = a;
                if (!d) return;
                a.previousTranslate = a.translate, a.isHorizontal() ? a.translate = -b.scrollLeft : a.translate = -b.scrollTop, 0 === a.translate && (a.translate = 0), a.updateActiveIndex(), a.updateSlidesClasses();
                let e, f = a.maxTranslate() - a.minTranslate();
                (0 === f ? 0 : (a.translate - a.minTranslate()) / f) !== a.progress && a.updateProgress(c ? -a.translate : a.translate), a.emit("setTranslate", a.translate, !1)
            }
            let K = !1;

            function L() {}
            let M = (a, b) => {
                    let c = g(),
                        {
                            params: d,
                            touchEvents: e,
                            el: f,
                            wrapperEl: h,
                            device: i,
                            support: j
                        } = a,
                        k = !!d.nested,
                        l = "on" === b ? "addEventListener" : "removeEventListener",
                        m = b;
                    if (j.touch) {
                        let n = "touchstart" === e.start && !!j.passiveListener && !!d.passiveListeners && {
                            passive: !0,
                            capture: !1
                        };
                        f[l](e.start, a.onTouchStart, n), f[l](e.move, a.onTouchMove, j.passiveListener ? {
                            passive: !1,
                            capture: k
                        } : k), f[l](e.end, a.onTouchEnd, n), e.cancel && f[l](e.cancel, a.onTouchEnd, n)
                    } else f[l](e.start, a.onTouchStart, !1), c[l](e.move, a.onTouchMove, k), c[l](e.end, a.onTouchEnd, !1);
                    (d.preventClicks || d.preventClicksPropagation) && f[l]("click", a.onClick, !0), d.cssMode && h[l]("scroll", a.onScroll), d.updateOnWindowResize ? a[m](i.ios || i.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", H, !0) : a[m]("observerUpdate", H, !0)
                },
                N = (a, b) => a.grid && b.grid && b.grid.rows > 1;
            var O = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopedSlidesLimit: !0,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };
            let P = {
                    eventsEmitter: C,
                    update: {
                        updateSize: function() {
                            let a, b, c = this.$el;
                            a = void 0 !== this.params.width && null !== this.params.width ? this.params.width : c[0].clientWidth, b = void 0 !== this.params.height && null !== this.params.height ? this.params.height : c[0].clientHeight, !(0 === a && this.isHorizontal() || 0 === b && this.isVertical()) && (a = a - parseInt(c.css("padding-left") || 0, 10) - parseInt(c.css("padding-right") || 0, 10), b = b - parseInt(c.css("padding-top") || 0, 10) - parseInt(c.css("padding-bottom") || 0, 10), Number.isNaN(a) && (a = 0), Number.isNaN(b) && (b = 0), Object.assign(this, {
                                width: a,
                                height: b,
                                size: this.isHorizontal() ? a : b
                            }))
                        },
                        updateSlides: function() {
                            let a = this;

                            function b(b) {
                                return a.isHorizontal() ? b : ({
                                    width: "height",
                                    "margin-top": "margin-left",
                                    "margin-bottom ": "margin-right",
                                    "margin-left": "margin-top",
                                    "margin-right": "margin-bottom",
                                    "padding-left": "padding-top",
                                    "padding-right": "padding-bottom",
                                    marginRight: "marginBottom"
                                })[b]
                            }

                            function c(a, c) {
                                return parseFloat(a.getPropertyValue(b(c)) || 0)
                            }
                            let d = a.params,
                                {
                                    $wrapperEl: e,
                                    size: f,
                                    rtlTranslate: g,
                                    wrongRTL: h
                                } = a,
                                i = a.virtual && d.virtual.enabled,
                                j = i ? a.virtual.slides.length : a.slides.length,
                                k = e.children(`.${a.params.slideClass}`),
                                l = i ? a.virtual.slides.length : k.length,
                                m = [],
                                n = [],
                                o = [],
                                p = d.slidesOffsetBefore;
                            "function" == typeof p && (p = d.slidesOffsetBefore.call(a));
                            let q = d.slidesOffsetAfter;
                            "function" == typeof q && (q = d.slidesOffsetAfter.call(a));
                            let r = a.snapGrid.length,
                                s = a.slidesGrid.length,
                                t = d.spaceBetween,
                                u = -p,
                                v = 0,
                                x = 0;
                            if (void 0 === f) return;
                            "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * f), a.virtualSize = -t, g ? k.css({
                                marginLeft: "",
                                marginBottom: "",
                                marginTop: ""
                            }) : k.css({
                                marginRight: "",
                                marginBottom: "",
                                marginTop: ""
                            }), d.centeredSlides && d.cssMode && (w(a.wrapperEl, "--swiper-centered-offset-before", ""), w(a.wrapperEl, "--swiper-centered-offset-after", ""));
                            let y = d.grid && d.grid.rows > 1 && a.grid;
                            y && a.grid.initSlides(l);
                            let z, A = "auto" === d.slidesPerView && d.breakpoints && Object.keys(d.breakpoints).filter(a => void 0 !== d.breakpoints[a].slidesPerView).length > 0;
                            for (let B = 0; B < l; B += 1) {
                                z = 0;
                                let C = k.eq(B);
                                if (y && a.grid.updateSlide(B, C, l, b), "none" !== C.css("display")) {
                                    if ("auto" === d.slidesPerView) {
                                        A && (k[B].style[b("width")] = "");
                                        let D = getComputedStyle(C[0]),
                                            E = C[0].style.transform,
                                            F = C[0].style.webkitTransform;
                                        if (E && (C[0].style.transform = "none"), F && (C[0].style.webkitTransform = "none"), d.roundLengths) z = a.isHorizontal() ? C.outerWidth(!0) : C.outerHeight(!0);
                                        else {
                                            let G = c(D, "width"),
                                                H = c(D, "padding-left"),
                                                I = c(D, "padding-right"),
                                                J = c(D, "margin-left"),
                                                K = c(D, "margin-right"),
                                                L = D.getPropertyValue("box-sizing");
                                            if (L && "border-box" === L) z = G + J + K;
                                            else {
                                                let {
                                                    clientWidth: M,
                                                    offsetWidth: N
                                                } = C[0];
                                                z = G + H + I + J + K + (N - M)
                                            }
                                        }
                                        E && (C[0].style.transform = E), F && (C[0].style.webkitTransform = F), d.roundLengths && (z = Math.floor(z))
                                    } else z = (f - (d.slidesPerView - 1) * t) / d.slidesPerView, d.roundLengths && (z = Math.floor(z)), k[B] && (k[B].style[b("width")] = `${z}px`);
                                    k[B] && (k[B].swiperSlideSize = z), o.push(z), d.centeredSlides ? (u = u + z / 2 + v / 2 + t, 0 === v && 0 !== B && (u = u - f / 2 - t), 0 === B && (u = u - f / 2 - t), .001 > Math.abs(u) && (u = 0), d.roundLengths && (u = Math.floor(u)), x % d.slidesPerGroup == 0 && m.push(u), n.push(u)) : (d.roundLengths && (u = Math.floor(u)), (x - Math.min(a.params.slidesPerGroupSkip, x)) % a.params.slidesPerGroup == 0 && m.push(u), n.push(u), u = u + z + t), a.virtualSize += z + t, v = z, x += 1
                                }
                            }
                            if (a.virtualSize = Math.max(a.virtualSize, f) + q, g && h && ("slide" === d.effect || "coverflow" === d.effect) && e.css({
                                    width: `${a.virtualSize+d.spaceBetween}px`
                                }), d.setWrapperSize && e.css({
                                    [b("width")]: `${a.virtualSize+d.spaceBetween}px`
                                }), y && a.grid.updateWrapperSize(z, m, b), !d.centeredSlides) {
                                let O = [];
                                for (let P = 0; P < m.length; P += 1) {
                                    let Q = m[P];
                                    d.roundLengths && (Q = Math.floor(Q)), m[P] <= a.virtualSize - f && O.push(Q)
                                }
                                m = O, Math.floor(a.virtualSize - f) - Math.floor(m[m.length - 1]) > 1 && m.push(a.virtualSize - f)
                            }
                            if (0 === m.length && (m = [0]), 0 !== d.spaceBetween) {
                                let R = a.isHorizontal() && g ? "marginLeft" : b("marginRight");
                                k.filter((a, b) => !d.cssMode || b !== k.length - 1).css({
                                    [R]: `${t}px`
                                })
                            }
                            if (d.centeredSlides && d.centeredSlidesBounds) {
                                let S = 0;
                                o.forEach(a => {
                                    S += a + (d.spaceBetween ? d.spaceBetween : 0)
                                }), S -= d.spaceBetween;
                                let T = S - f;
                                m = m.map(a => a < 0 ? -p : a > T ? T + q : a)
                            }
                            if (d.centerInsufficientSlides) {
                                let U = 0;
                                if (o.forEach(a => {
                                        U += a + (d.spaceBetween ? d.spaceBetween : 0)
                                    }), (U -= d.spaceBetween) < f) {
                                    let V = (f - U) / 2;
                                    m.forEach((a, b) => {
                                        m[b] = a - V
                                    }), n.forEach((a, b) => {
                                        n[b] = a + V
                                    })
                                }
                            }
                            if (Object.assign(a, {
                                    slides: k,
                                    snapGrid: m,
                                    slidesGrid: n,
                                    slidesSizesGrid: o
                                }), d.centeredSlides && d.cssMode && !d.centeredSlidesBounds) {
                                w(a.wrapperEl, "--swiper-centered-offset-before", `${-m[0]}px`), w(a.wrapperEl, "--swiper-centered-offset-after", `${a.size/2-o[o.length-1]/2}px`);
                                let W = -a.snapGrid[0],
                                    X = -a.slidesGrid[0];
                                a.snapGrid = a.snapGrid.map(a => a + W), a.slidesGrid = a.slidesGrid.map(a => a + X)
                            }
                            if (l !== j && a.emit("slidesLengthChange"), m.length !== r && (a.params.watchOverflow && a.checkOverflow(), a.emit("snapGridLengthChange")), n.length !== s && a.emit("slidesGridLengthChange"), d.watchSlidesProgress && a.updateSlidesOffset(), !i && !d.cssMode && ("slide" === d.effect || "fade" === d.effect)) {
                                let Y = `${d.containerModifierClass}backface-hidden`,
                                    Z = a.$el.hasClass(Y);
                                l <= d.maxBackfaceHiddenSlides ? Z || a.$el.addClass(Y) : Z && a.$el.removeClass(Y)
                            }
                        },
                        updateAutoHeight: function(a) {
                            let b = this,
                                c = [],
                                d = b.virtual && b.params.virtual.enabled,
                                e = 0,
                                f;
                            "number" == typeof a ? b.setTransition(a) : !0 === a && b.setTransition(b.params.speed);
                            let g = a => d ? b.slides.filter(b => parseInt(b.getAttribute("data-swiper-slide-index"), 10) === a)[0] : b.slides.eq(a)[0];
                            if ("auto" !== b.params.slidesPerView && b.params.slidesPerView > 1) {
                                if (b.params.centeredSlides)(b.visibleSlides || q([])).each(a => {
                                    c.push(a)
                                });
                                else
                                    for (f = 0; f < Math.ceil(b.params.slidesPerView); f += 1) {
                                        let h = b.activeIndex + f;
                                        if (h > b.slides.length && !d) break;
                                        c.push(g(h))
                                    }
                            } else c.push(g(b.activeIndex));
                            for (f = 0; f < c.length; f += 1)
                                if (void 0 !== c[f]) {
                                    let i = c[f].offsetHeight;
                                    e = i > e ? i : e
                                }(e || 0 === e) && b.$wrapperEl.css("height", `${e}px`)
                        },
                        updateSlidesOffset: function() {
                            let a = this.slides;
                            for (let b = 0; b < a.length; b += 1) a[b].swiperSlideOffset = this.isHorizontal() ? a[b].offsetLeft : a[b].offsetTop
                        },
                        updateSlidesProgress: function(a = this && this.translate || 0) {
                            let b = this,
                                c = b.params,
                                {
                                    slides: d,
                                    rtlTranslate: e,
                                    snapGrid: f
                                } = b;
                            if (0 === d.length) return;
                            void 0 === d[0].swiperSlideOffset && b.updateSlidesOffset();
                            let g = -a;
                            e && (g = a), d.removeClass(c.slideVisibleClass), b.visibleSlidesIndexes = [], b.visibleSlides = [];
                            for (let h = 0; h < d.length; h += 1) {
                                let i = d[h],
                                    j = i.swiperSlideOffset;
                                c.cssMode && c.centeredSlides && (j -= d[0].swiperSlideOffset);
                                let k = (g + (c.centeredSlides ? b.minTranslate() : 0) - j) / (i.swiperSlideSize + c.spaceBetween),
                                    l = (g - f[0] + (c.centeredSlides ? b.minTranslate() : 0) - j) / (i.swiperSlideSize + c.spaceBetween),
                                    m = -(g - j),
                                    n = m + b.slidesSizesGrid[h],
                                    o = m >= 0 && m < b.size - 1 || n > 1 && n <= b.size || m <= 0 && n >= b.size;
                                o && (b.visibleSlides.push(i), b.visibleSlidesIndexes.push(h), d.eq(h).addClass(c.slideVisibleClass)), i.progress = e ? -k : k, i.originalProgress = e ? -l : l
                            }
                            b.visibleSlides = q(b.visibleSlides)
                        },
                        updateProgress: function(a) {
                            if (void 0 === a) {
                                let b = this.rtlTranslate ? -1 : 1;
                                a = this && this.translate && this.translate * b || 0
                            }
                            let c = this.params,
                                d = this.maxTranslate() - this.minTranslate(),
                                {
                                    progress: e,
                                    isBeginning: f,
                                    isEnd: g
                                } = this,
                                h = f,
                                i = g;
                            0 === d ? (e = 0, f = !0, g = !0) : (f = (e = (a - this.minTranslate()) / d) <= 0, g = e >= 1), Object.assign(this, {
                                progress: e,
                                isBeginning: f,
                                isEnd: g
                            }), (c.watchSlidesProgress || c.centeredSlides && c.autoHeight) && this.updateSlidesProgress(a), f && !h && this.emit("reachBeginning toEdge"), g && !i && this.emit("reachEnd toEdge"), (h && !f || i && !g) && this.emit("fromEdge"), this.emit("progress", e)
                        },
                        updateSlidesClasses: function() {
                            let {
                                slides: a,
                                params: b,
                                $wrapperEl: c,
                                activeIndex: d,
                                realIndex: e
                            } = this, f = this.virtual && b.virtual.enabled;
                            a.removeClass(`${b.slideActiveClass} ${b.slideNextClass} ${b.slidePrevClass} ${b.slideDuplicateActiveClass} ${b.slideDuplicateNextClass} ${b.slideDuplicatePrevClass}`);
                            let g;
                            (g = f ? this.$wrapperEl.find(`.${b.slideClass}[data-swiper-slide-index="${d}"]`) : a.eq(d)).addClass(b.slideActiveClass), b.loop && (g.hasClass(b.slideDuplicateClass) ? c.children(`.${b.slideClass}:not(.${b.slideDuplicateClass})[data-swiper-slide-index="${e}"]`).addClass(b.slideDuplicateActiveClass) : c.children(`.${b.slideClass}.${b.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).addClass(b.slideDuplicateActiveClass));
                            let h = g.nextAll(`.${b.slideClass}`).eq(0).addClass(b.slideNextClass);
                            b.loop && 0 === h.length && (h = a.eq(0)).addClass(b.slideNextClass);
                            let i = g.prevAll(`.${b.slideClass}`).eq(0).addClass(b.slidePrevClass);
                            b.loop && 0 === i.length && (i = a.eq(-1)).addClass(b.slidePrevClass), b.loop && (h.hasClass(b.slideDuplicateClass) ? c.children(`.${b.slideClass}:not(.${b.slideDuplicateClass})[data-swiper-slide-index="${h.attr("data-swiper-slide-index")}"]`).addClass(b.slideDuplicateNextClass) : c.children(`.${b.slideClass}.${b.slideDuplicateClass}[data-swiper-slide-index="${h.attr("data-swiper-slide-index")}"]`).addClass(b.slideDuplicateNextClass), i.hasClass(b.slideDuplicateClass) ? c.children(`.${b.slideClass}:not(.${b.slideDuplicateClass})[data-swiper-slide-index="${i.attr("data-swiper-slide-index")}"]`).addClass(b.slideDuplicatePrevClass) : c.children(`.${b.slideClass}.${b.slideDuplicateClass}[data-swiper-slide-index="${i.attr("data-swiper-slide-index")}"]`).addClass(b.slideDuplicatePrevClass)), this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(a) {
                            let b = this,
                                c = b.rtlTranslate ? b.translate : -b.translate,
                                {
                                    slidesGrid: d,
                                    snapGrid: e,
                                    params: f,
                                    activeIndex: g,
                                    realIndex: h,
                                    snapIndex: i
                                } = b,
                                j = a,
                                k;
                            if (void 0 === j) {
                                for (let l = 0; l < d.length; l += 1) void 0 !== d[l + 1] ? c >= d[l] && c < d[l + 1] - (d[l + 1] - d[l]) / 2 ? j = l : c >= d[l] && c < d[l + 1] && (j = l + 1) : c >= d[l] && (j = l);
                                f.normalizeSlideIndex && (j < 0 || void 0 === j) && (j = 0)
                            }
                            if (e.indexOf(c) >= 0) k = e.indexOf(c);
                            else {
                                let m = Math.min(f.slidesPerGroupSkip, j);
                                k = m + Math.floor((j - m) / f.slidesPerGroup)
                            }
                            if (k >= e.length && (k = e.length - 1), j === g) {
                                k !== i && (b.snapIndex = k, b.emit("snapIndexChange"));
                                return
                            }
                            let n = parseInt(b.slides.eq(j).attr("data-swiper-slide-index") || j, 10);
                            Object.assign(b, {
                                snapIndex: k,
                                realIndex: n,
                                previousIndex: g,
                                activeIndex: j
                            }), b.emit("activeIndexChange"), b.emit("snapIndexChange"), h !== n && b.emit("realIndexChange"), (b.initialized || b.params.runCallbacksOnInit) && b.emit("slideChange")
                        },
                        updateClickedSlide: function(a) {
                            let b = this,
                                c = b.params,
                                d = q(a).closest(`.${c.slideClass}`)[0],
                                e = !1,
                                f;
                            if (d) {
                                for (let g = 0; g < b.slides.length; g += 1)
                                    if (b.slides[g] === d) {
                                        e = !0, f = g;
                                        break
                                    }
                            }
                            if (d && e) b.clickedSlide = d, b.virtual && b.params.virtual.enabled ? b.clickedIndex = parseInt(q(d).attr("data-swiper-slide-index"), 10) : b.clickedIndex = f;
                            else {
                                b.clickedSlide = void 0, b.clickedIndex = void 0;
                                return
                            }
                            c.slideToClickedSlide && void 0 !== b.clickedIndex && b.clickedIndex !== b.activeIndex && b.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(a = this.isHorizontal() ? "x" : "y") {
                            let {
                                params: b,
                                rtlTranslate: c,
                                translate: d,
                                $wrapperEl: e
                            } = this;
                            if (b.virtualTranslate) return c ? -d : d;
                            if (b.cssMode) return d;
                            let f = function(a, b = "x") {
                                let c = i(),
                                    d, e, f, g = function(a) {
                                        let b = i(),
                                            c;
                                        return b.getComputedStyle && (c = b.getComputedStyle(a, null)), !c && a.currentStyle && (c = a.currentStyle), c || (c = a.style), c
                                    }(a, null);
                                return c.WebKitCSSMatrix ? ((e = g.transform || g.webkitTransform).split(",").length > 6 && (e = e.split(", ").map(a => a.replace(",", ".")).join(", ")), f = new c.WebKitCSSMatrix("none" === e ? "" : e)) : d = (f = g.MozTransform || g.OTransform || g.MsTransform || g.msTransform || g.transform || g.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === b && (e = c.WebKitCSSMatrix ? f.m41 : 16 === d.length ? parseFloat(d[12]) : parseFloat(d[4])), "y" === b && (e = c.WebKitCSSMatrix ? f.m42 : 16 === d.length ? parseFloat(d[13]) : parseFloat(d[5])), e || 0
                            }(e[0], a);
                            return c && (f = -f), f || 0
                        },
                        setTranslate: function(a, b) {
                            let c = this,
                                {
                                    rtlTranslate: d,
                                    params: e,
                                    $wrapperEl: f,
                                    wrapperEl: g,
                                    progress: h
                                } = c,
                                i = 0,
                                j = 0;
                            c.isHorizontal() ? i = d ? -a : a : j = a, e.roundLengths && (i = Math.floor(i), j = Math.floor(j)), e.cssMode ? g[c.isHorizontal() ? "scrollLeft" : "scrollTop"] = c.isHorizontal() ? -i : -j : e.virtualTranslate || f.transform(`translate3d(${i}px, ${j}px, 0px)`), c.previousTranslate = c.translate, c.translate = c.isHorizontal() ? i : j;
                            let k, l = c.maxTranslate() - c.minTranslate();
                            (0 === l ? 0 : (a - c.minTranslate()) / l) !== h && c.updateProgress(a), c.emit("setTranslate", c.translate, b)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(a = 0, b = this.params.speed, c = !0, d = !0, e) {
                            let f = this,
                                {
                                    params: g,
                                    wrapperEl: h
                                } = f;
                            if (f.animating && g.preventInteractionOnTransition) return !1;
                            let i = f.minTranslate(),
                                j = f.maxTranslate(),
                                k;
                            if (k = d && a > i ? i : d && a < j ? j : a, f.updateProgress(k), g.cssMode) {
                                let l = f.isHorizontal();
                                if (0 === b) h[l ? "scrollLeft" : "scrollTop"] = -k;
                                else {
                                    if (!f.support.smoothScroll) return x({
                                        swiper: f,
                                        targetPosition: -k,
                                        side: l ? "left" : "top"
                                    }), !0;
                                    h.scrollTo({
                                        [l ? "left" : "top"]: -k,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === b ? (f.setTransition(0), f.setTranslate(k), c && (f.emit("beforeTransitionStart", b, e), f.emit("transitionEnd"))) : (f.setTransition(b), f.setTranslate(k), c && (f.emit("beforeTransitionStart", b, e), f.emit("transitionStart")), f.animating || (f.animating = !0, f.onTranslateToWrapperTransitionEnd || (f.onTranslateToWrapperTransitionEnd = function(a) {
                                f && !f.destroyed && a.target === this && (f.$wrapperEl[0].removeEventListener("transitionend", f.onTranslateToWrapperTransitionEnd), f.$wrapperEl[0].removeEventListener("webkitTransitionEnd", f.onTranslateToWrapperTransitionEnd), f.onTranslateToWrapperTransitionEnd = null, delete f.onTranslateToWrapperTransitionEnd, c && f.emit("transitionEnd"))
                            }), f.$wrapperEl[0].addEventListener("transitionend", f.onTranslateToWrapperTransitionEnd), f.$wrapperEl[0].addEventListener("webkitTransitionEnd", f.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(a, b) {
                            this.params.cssMode || this.$wrapperEl.transition(a), this.emit("setTransition", a, b)
                        },
                        transitionStart: function(a = !0, b) {
                            let {
                                params: c
                            } = this;
                            c.cssMode || (c.autoHeight && this.updateAutoHeight(), D({
                                swiper: this,
                                runCallbacks: a,
                                direction: b,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(a = !0, b) {
                            let c = this,
                                {
                                    params: d
                                } = c;
                            c.animating = !1, d.cssMode || (c.setTransition(0), D({
                                swiper: c,
                                runCallbacks: a,
                                direction: b,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(a = 0, b = this.params.speed, c = !0, d, e) {
                            if ("number" != typeof a && "string" != typeof a) throw Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof a}] given.`);
                            if ("string" == typeof a) {
                                let f = parseInt(a, 10),
                                    g = isFinite(f);
                                if (!g) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${a}] given.`);
                                a = f
                            }
                            let h = this,
                                i = a;
                            i < 0 && (i = 0);
                            let {
                                params: j,
                                snapGrid: k,
                                slidesGrid: l,
                                previousIndex: m,
                                activeIndex: n,
                                rtlTranslate: o,
                                wrapperEl: p,
                                enabled: q
                            } = h;
                            if (h.animating && j.preventInteractionOnTransition || !q && !d && !e) return !1;
                            let r = Math.min(h.params.slidesPerGroupSkip, i),
                                s = r + Math.floor((i - r) / h.params.slidesPerGroup);
                            s >= k.length && (s = k.length - 1);
                            let t = -k[s];
                            if (j.normalizeSlideIndex)
                                for (let u = 0; u < l.length; u += 1) {
                                    let v = -Math.floor(100 * t),
                                        w = Math.floor(100 * l[u]),
                                        y = Math.floor(100 * l[u + 1]);
                                    void 0 !== l[u + 1] ? v >= w && v < y - (y - w) / 2 ? i = u : v >= w && v < y && (i = u + 1) : v >= w && (i = u)
                                }
                            if (h.initialized && i !== n && (!h.allowSlideNext && t < h.translate && t < h.minTranslate() || !h.allowSlidePrev && t > h.translate && t > h.maxTranslate() && (n || 0) !== i)) return !1;
                            i !== (m || 0) && c && h.emit("beforeSlideChangeStart"), h.updateProgress(t);
                            let z;
                            if (z = i > n ? "next" : i < n ? "prev" : "reset", o && -t === h.translate || !o && t === h.translate) return h.updateActiveIndex(i), j.autoHeight && h.updateAutoHeight(), h.updateSlidesClasses(), "slide" !== j.effect && h.setTranslate(t), "reset" !== z && (h.transitionStart(c, z), h.transitionEnd(c, z)), !1;
                            if (j.cssMode) {
                                let A = h.isHorizontal(),
                                    B = o ? t : -t;
                                if (0 === b) {
                                    let C = h.virtual && h.params.virtual.enabled;
                                    C && (h.wrapperEl.style.scrollSnapType = "none", h._immediateVirtual = !0), p[A ? "scrollLeft" : "scrollTop"] = B, C && requestAnimationFrame(() => {
                                        h.wrapperEl.style.scrollSnapType = "", h._swiperImmediateVirtual = !1
                                    })
                                } else {
                                    if (!h.support.smoothScroll) return x({
                                        swiper: h,
                                        targetPosition: B,
                                        side: A ? "left" : "top"
                                    }), !0;
                                    p.scrollTo({
                                        [A ? "left" : "top"]: B,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return h.setTransition(b), h.setTranslate(t), h.updateActiveIndex(i), h.updateSlidesClasses(), h.emit("beforeTransitionStart", b, d), h.transitionStart(c, z), 0 === b ? h.transitionEnd(c, z) : h.animating || (h.animating = !0, h.onSlideToWrapperTransitionEnd || (h.onSlideToWrapperTransitionEnd = function(a) {
                                h && !h.destroyed && a.target === this && (h.$wrapperEl[0].removeEventListener("transitionend", h.onSlideToWrapperTransitionEnd), h.$wrapperEl[0].removeEventListener("webkitTransitionEnd", h.onSlideToWrapperTransitionEnd), h.onSlideToWrapperTransitionEnd = null, delete h.onSlideToWrapperTransitionEnd, h.transitionEnd(c, z))
                            }), h.$wrapperEl[0].addEventListener("transitionend", h.onSlideToWrapperTransitionEnd), h.$wrapperEl[0].addEventListener("webkitTransitionEnd", h.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(a = 0, b = this.params.speed, c = !0, d) {
                            if ("string" == typeof a) {
                                let e = parseInt(a, 10),
                                    f = isFinite(e);
                                if (!f) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${a}] given.`);
                                a = e
                            }
                            let g = a;
                            return this.params.loop && (g += this.loopedSlides), this.slideTo(g, b, c, d)
                        },
                        slideNext: function(a = this.params.speed, b = !0, c) {
                            let d = this,
                                {
                                    animating: e,
                                    enabled: f,
                                    params: g
                                } = d;
                            if (!f) return d;
                            let h = g.slidesPerGroup;
                            "auto" === g.slidesPerView && 1 === g.slidesPerGroup && g.slidesPerGroupAuto && (h = Math.max(d.slidesPerViewDynamic("current", !0), 1));
                            let i = d.activeIndex < g.slidesPerGroupSkip ? 1 : h;
                            if (g.loop) {
                                if (e && g.loopPreventsSlide) return !1;
                                d.loopFix(), d._clientLeft = d.$wrapperEl[0].clientLeft
                            }
                            return g.rewind && d.isEnd ? d.slideTo(0, a, b, c) : d.slideTo(d.activeIndex + i, a, b, c)
                        },
                        slidePrev: function(a = this.params.speed, b = !0, c) {
                            let d = this,
                                {
                                    params: e,
                                    animating: f,
                                    snapGrid: g,
                                    slidesGrid: h,
                                    rtlTranslate: i,
                                    enabled: j
                                } = d;
                            if (!j) return d;
                            if (e.loop) {
                                if (f && e.loopPreventsSlide) return !1;
                                d.loopFix(), d._clientLeft = d.$wrapperEl[0].clientLeft
                            }
                            let k = i ? d.translate : -d.translate;

                            function l(a) {
                                return a < 0 ? -Math.floor(Math.abs(a)) : Math.floor(a)
                            }
                            let m = l(k),
                                n = g.map(a => l(a)),
                                o = g[n.indexOf(m) - 1];
                            if (void 0 === o && e.cssMode) {
                                let p;
                                g.forEach((a, b) => {
                                    m >= a && (p = b)
                                }), void 0 !== p && (o = g[p > 0 ? p - 1 : p])
                            }
                            let q = 0;
                            if (void 0 !== o && ((q = h.indexOf(o)) < 0 && (q = d.activeIndex - 1), "auto" === e.slidesPerView && 1 === e.slidesPerGroup && e.slidesPerGroupAuto && (q = Math.max(q = q - d.slidesPerViewDynamic("previous", !0) + 1, 0))), e.rewind && d.isBeginning) {
                                let r = d.params.virtual && d.params.virtual.enabled && d.virtual ? d.virtual.slides.length - 1 : d.slides.length - 1;
                                return d.slideTo(r, a, b, c)
                            }
                            return d.slideTo(q, a, b, c)
                        },
                        slideReset: function(a = this.params.speed, b = !0, c) {
                            return this.slideTo(this.activeIndex, a, b, c)
                        },
                        slideToClosest: function(a = this.params.speed, b = !0, c, d = .5) {
                            let e = this,
                                f = e.activeIndex,
                                g = Math.min(e.params.slidesPerGroupSkip, f),
                                h = g + Math.floor((f - g) / e.params.slidesPerGroup),
                                i = e.rtlTranslate ? e.translate : -e.translate;
                            if (i >= e.snapGrid[h]) {
                                let j = e.snapGrid[h],
                                    k = e.snapGrid[h + 1];
                                i - j > (k - j) * d && (f += e.params.slidesPerGroup)
                            } else {
                                let l = e.snapGrid[h - 1],
                                    m = e.snapGrid[h];
                                i - l <= (m - l) * d && (f -= e.params.slidesPerGroup)
                            }
                            return f = Math.max(f, 0), f = Math.min(f, e.slidesGrid.length - 1), e.slideTo(f, a, b, c)
                        },
                        slideToClickedSlide: function() {
                            let a = this,
                                {
                                    params: b,
                                    $wrapperEl: c
                                } = a,
                                d = "auto" === b.slidesPerView ? a.slidesPerViewDynamic() : b.slidesPerView,
                                e = a.clickedIndex,
                                f;
                            if (b.loop) {
                                if (a.animating) return;
                                f = parseInt(q(a.clickedSlide).attr("data-swiper-slide-index"), 10), b.centeredSlides ? e < a.loopedSlides - d / 2 || e > a.slides.length - a.loopedSlides + d / 2 ? (a.loopFix(), e = c.children(`.${b.slideClass}[data-swiper-slide-index="${f}"]:not(.${b.slideDuplicateClass})`).eq(0).index(), r(() => {
                                    a.slideTo(e)
                                })) : a.slideTo(e) : e > a.slides.length - d ? (a.loopFix(), e = c.children(`.${b.slideClass}[data-swiper-slide-index="${f}"]:not(.${b.slideDuplicateClass})`).eq(0).index(), r(() => {
                                    a.slideTo(e)
                                })) : a.slideTo(e)
                            } else a.slideTo(e)
                        }
                    },
                    loop: {
                        loopCreate: function() {
                            let a = this,
                                b = g(),
                                {
                                    params: c,
                                    $wrapperEl: d
                                } = a,
                                e = d.children().length > 0 ? q(d.children()[0].parentNode) : d;
                            e.children(`.${c.slideClass}.${c.slideDuplicateClass}`).remove();
                            let f = e.children(`.${c.slideClass}`);
                            if (c.loopFillGroupWithBlank) {
                                let h = c.slidesPerGroup - f.length % c.slidesPerGroup;
                                if (h !== c.slidesPerGroup) {
                                    for (let i = 0; i < h; i += 1) {
                                        let j = q(b.createElement("div")).addClass(`${c.slideClass} ${c.slideBlankClass}`);
                                        e.append(j)
                                    }
                                    f = e.children(`.${c.slideClass}`)
                                }
                            }
                            "auto" !== c.slidesPerView || c.loopedSlides || (c.loopedSlides = f.length), a.loopedSlides = Math.ceil(parseFloat(c.loopedSlides || c.slidesPerView, 10)), a.loopedSlides += c.loopAdditionalSlides, a.loopedSlides > f.length && a.params.loopedSlidesLimit && (a.loopedSlides = f.length);
                            let k = [],
                                l = [];
                            f.each((a, b) => {
                                let c = q(a);
                                c.attr("data-swiper-slide-index", b)
                            });
                            for (let m = 0; m < a.loopedSlides; m += 1) {
                                let n = m - Math.floor(m / f.length) * f.length;
                                l.push(f.eq(n)[0]), k.unshift(f.eq(f.length - n - 1)[0])
                            }
                            for (let o = 0; o < l.length; o += 1) e.append(q(l[o].cloneNode(!0)).addClass(c.slideDuplicateClass));
                            for (let p = k.length - 1; p >= 0; p -= 1) e.prepend(q(k[p].cloneNode(!0)).addClass(c.slideDuplicateClass))
                        },
                        loopFix: function() {
                            let a = this;
                            a.emit("beforeLoopFix");
                            let {
                                activeIndex: b,
                                slides: c,
                                loopedSlides: d,
                                allowSlidePrev: e,
                                allowSlideNext: f,
                                snapGrid: g,
                                rtlTranslate: h
                            } = a, i;
                            a.allowSlidePrev = !0, a.allowSlideNext = !0;
                            let j = -g[b],
                                k = j - a.getTranslate();
                            if (b < d) {
                                i = c.length - 3 * d + b, i += d;
                                let l = a.slideTo(i, 0, !1, !0);
                                l && 0 !== k && a.setTranslate((h ? -a.translate : a.translate) - k)
                            } else if (b >= c.length - d) {
                                i = -c.length + b + d, i += d;
                                let m = a.slideTo(i, 0, !1, !0);
                                m && 0 !== k && a.setTranslate((h ? -a.translate : a.translate) - k)
                            }
                            a.allowSlidePrev = e, a.allowSlideNext = f, a.emit("loopFix")
                        },
                        loopDestroy: function() {
                            let {
                                $wrapperEl: a,
                                params: b,
                                slides: c
                            } = this;
                            a.children(`.${b.slideClass}.${b.slideDuplicateClass},.${b.slideClass}.${b.slideBlankClass}`).remove(), c.removeAttr("data-swiper-slide-index")
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(a) {
                            if (this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode) return;
                            let b = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
                            b.style.cursor = "move", b.style.cursor = a ? "grabbing" : "grab"
                        },
                        unsetGrabCursor: function() {
                            let a = this;
                            !a.support.touch && (!a.params.watchOverflow || !a.isLocked) && !a.params.cssMode && (a["container" === a.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let a = this,
                                b = g(),
                                {
                                    params: c,
                                    support: d
                                } = a;
                            a.onTouchStart = E.bind(a), a.onTouchMove = F.bind(a), a.onTouchEnd = G.bind(a), c.cssMode && (a.onScroll = J.bind(a)), a.onClick = I.bind(a), d.touch && !K && (b.addEventListener("touchstart", L), K = !0), M(a, "on")
                        },
                        detachEvents: function() {
                            M(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let a = this,
                                {
                                    activeIndex: b,
                                    initialized: c,
                                    loopedSlides: d = 0,
                                    params: e,
                                    $el: f
                                } = a,
                                g = e.breakpoints;
                            if (!g || g && 0 === Object.keys(g).length) return;
                            let h = a.getBreakpoint(g, a.params.breakpointsBase, a.el);
                            if (!h || a.currentBreakpoint === h) return;
                            let i = h in g ? g[h] : void 0,
                                j = i || a.originalParams,
                                k = N(a, e),
                                l = N(a, j),
                                m = e.enabled;
                            k && !l ? (f.removeClass(`${e.containerModifierClass}grid ${e.containerModifierClass}grid-column`), a.emitContainerClasses()) : !k && l && (f.addClass(`${e.containerModifierClass}grid`), (j.grid.fill && "column" === j.grid.fill || !j.grid.fill && "column" === e.grid.fill) && f.addClass(`${e.containerModifierClass}grid-column`), a.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(b => {
                                let c = e[b] && e[b].enabled,
                                    d = j[b] && j[b].enabled;
                                c && !d && a[b].disable(), !c && d && a[b].enable()
                            });
                            let n = j.direction && j.direction !== e.direction,
                                o = e.loop && (j.slidesPerView !== e.slidesPerView || n);
                            n && c && a.changeDirection(), v(a.params, j);
                            let p = a.params.enabled;
                            Object.assign(a, {
                                allowTouchMove: a.params.allowTouchMove,
                                allowSlideNext: a.params.allowSlideNext,
                                allowSlidePrev: a.params.allowSlidePrev
                            }), m && !p ? a.disable() : !m && p && a.enable(), a.currentBreakpoint = h, a.emit("_beforeBreakpoint", j), o && c && (a.loopDestroy(), a.loopCreate(), a.updateSlides(), a.slideTo(b - d + a.loopedSlides, 0, !1)), a.emit("breakpoint", j)
                        },
                        getBreakpoint: function(a, b = "window", c) {
                            if (!a || "container" === b && !c) return;
                            let d = !1,
                                e = i(),
                                f = "window" === b ? e.innerHeight : c.clientHeight,
                                g = Object.keys(a).map(a => {
                                    if ("string" == typeof a && 0 === a.indexOf("@")) {
                                        let b = parseFloat(a.substr(1)),
                                            c = f * b;
                                        return {
                                            value: c,
                                            point: a
                                        }
                                    }
                                    return {
                                        value: a,
                                        point: a
                                    }
                                });
                            g.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
                            for (let h = 0; h < g.length; h += 1) {
                                let {
                                    point: j,
                                    value: k
                                } = g[h];
                                "window" === b ? e.matchMedia(`(min-width: ${k}px)`).matches && (d = j) : k <= c.clientWidth && (d = j)
                            }
                            return d || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let a = this,
                                {
                                    isLocked: b,
                                    params: c
                                } = a,
                                {
                                    slidesOffsetBefore: d
                                } = c;
                            if (d) {
                                let e = a.slides.length - 1,
                                    f = a.slidesGrid[e] + a.slidesSizesGrid[e] + 2 * d;
                                a.isLocked = a.size > f
                            } else a.isLocked = 1 === a.snapGrid.length;
                            !0 === c.allowSlideNext && (a.allowSlideNext = !a.isLocked), !0 === c.allowSlidePrev && (a.allowSlidePrev = !a.isLocked), b && b !== a.isLocked && (a.isEnd = !1), b !== a.isLocked && a.emit(a.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            let {
                                classNames: a,
                                params: b,
                                rtl: c,
                                $el: d,
                                device: e,
                                support: f
                            } = this, g = function(a, b) {
                                let c = [];
                                return a.forEach(a => {
                                    "object" == typeof a ? Object.keys(a).forEach(d => {
                                        a[d] && c.push(b + d)
                                    }) : "string" == typeof a && c.push(b + a)
                                }), c
                            }(["initialized", b.direction, {
                                "pointer-events": !f.touch
                            }, {
                                "free-mode": this.params.freeMode && b.freeMode.enabled
                            }, {
                                autoheight: b.autoHeight
                            }, {
                                rtl: c
                            }, {
                                grid: b.grid && b.grid.rows > 1
                            }, {
                                "grid-column": b.grid && b.grid.rows > 1 && "column" === b.grid.fill
                            }, {
                                android: e.android
                            }, {
                                ios: e.ios
                            }, {
                                "css-mode": b.cssMode
                            }, {
                                centered: b.cssMode && b.centeredSlides
                            }, {
                                "watch-progress": b.watchSlidesProgress
                            }], b.containerModifierClass);
                            a.push(...g), d.addClass([...a].join(" ")), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            let {
                                $el: a,
                                classNames: b
                            } = this;
                            a.removeClass(b.join(" ")), this.emitContainerClasses()
                        }
                    },
                    images: {
                        loadImage: function(a, b, c, d, e, f) {
                            let g = i(),
                                h;

                            function j() {
                                f && f()
                            }
                            let k = q(a).parent("picture")[0];
                            k || a.complete && e ? j() : b ? ((h = new g.Image).onload = j, h.onerror = j, d && (h.sizes = d), c && (h.srcset = c), b && (h.src = b)) : j()
                        },
                        preloadImages: function() {
                            let a = this;

                            function b() {
                                null != a && a && !a.destroyed && (void 0 !== a.imagesLoaded && (a.imagesLoaded += 1), a.imagesLoaded === a.imagesToLoad.length && (a.params.updateOnImagesReady && a.update(), a.emit("imagesReady")))
                            }
                            a.imagesToLoad = a.$el.find("img");
                            for (let c = 0; c < a.imagesToLoad.length; c += 1) {
                                let d = a.imagesToLoad[c];
                                a.loadImage(d, d.currentSrc || d.getAttribute("src"), d.srcset || d.getAttribute("srcset"), d.sizes || d.getAttribute("sizes"), !0, b)
                            }
                        }
                    }
                },
                Q = {};
            class R {
                constructor(...a) {
                    let b, c;
                    if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? c = a[0] : [b, c] = a, c || (c = {}), c = v({}, c), b && !c.el && (c.el = b), c.el && q(c.el).length > 1) {
                        let d = [];
                        return q(c.el).each(a => {
                            let b = v({}, c, {
                                el: a
                            });
                            d.push(new R(b))
                        }), d
                    }
                    let e = this;
                    e.__swiper__ = !0, e.support = z(), e.device = function(a = {}) {
                        return A || (A = function({
                            userAgent: a
                        } = {}) {
                            let b = z(),
                                c = i(),
                                d = c.navigator.platform,
                                e = a || c.navigator.userAgent,
                                f = {
                                    ios: !1,
                                    android: !1
                                },
                                g = c.screen.width,
                                h = c.screen.height,
                                j = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                                k = e.match(/(iPad).*OS\s([\d_]+)/),
                                l = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                                m = !k && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                                n = "MacIntel" === d;
                            return !k && n && b.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${g}x${h}`) >= 0 && ((k = e.match(/(Version)\/([\d.]+)/)) || (k = [0, 1, "13_0_0"]), n = !1), j && "Win32" !== d && (f.os = "android", f.android = !0), (k || m || l) && (f.os = "ios", f.ios = !0), f
                        }(a)), A
                    }({
                        userAgent: c.userAgent
                    }), e.browser = (B || (B = function() {
                        let a = i();
                        return {
                            isSafari: function() {
                                let b = a.navigator.userAgent.toLowerCase();
                                return b.indexOf("safari") >= 0 && 0 > b.indexOf("chrome") && 0 > b.indexOf("android")
                            }(),
                            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(a.navigator.userAgent)
                        }
                    }()), B), e.eventsListeners = {}, e.eventsAnyListeners = [], e.modules = [...e.__modules__], c.modules && Array.isArray(c.modules) && e.modules.push(...c.modules);
                    let f = {};
                    e.modules.forEach(a => {
                        var b, d;
                        a({
                            swiper: e,
                            extendParams: (b = c, d = f, function(a = {}) {
                                let c = Object.keys(a)[0],
                                    e = a[c];
                                if ("object" != typeof e || null === e || (["navigation", "pagination", "scrollbar"].indexOf(c) >= 0 && !0 === b[c] && (b[c] = {
                                        auto: !0
                                    }), !(c in b && "enabled" in e))) {
                                    v(d, a);
                                    return
                                }!0 === b[c] && (b[c] = {
                                    enabled: !0
                                }), "object" != typeof b[c] || "enabled" in b[c] || (b[c].enabled = !0), b[c] || (b[c] = {
                                    enabled: !1
                                }), v(d, a)
                            }),
                            on: e.on.bind(e),
                            once: e.once.bind(e),
                            off: e.off.bind(e),
                            emit: e.emit.bind(e)
                        })
                    });
                    let g = v({}, O, f);
                    return e.params = v({}, g, Q, c), e.originalParams = v({}, e.params), e.passedParams = v({}, c), e.params && e.params.on && Object.keys(e.params.on).forEach(a => {
                        e.on(a, e.params.on[a])
                    }), e.params && e.params.onAny && e.onAny(e.params.onAny), e.$ = q, Object.assign(e, {
                        enabled: e.params.enabled,
                        el: b,
                        classNames: [],
                        slides: q(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal() {
                            return "horizontal" === e.params.direction
                        },
                        isVertical() {
                            return "vertical" === e.params.direction
                        },
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev,
                        touchEvents: function() {
                            let a = ["touchstart", "touchmove", "touchend", "touchcancel"],
                                b = ["pointerdown", "pointermove", "pointerup"];
                            return e.touchEventsTouch = {
                                start: a[0],
                                move: a[1],
                                end: a[2],
                                cancel: a[3]
                            }, e.touchEventsDesktop = {
                                start: b[0],
                                move: b[1],
                                end: b[2]
                            }, e.support.touch || !e.params.simulateTouch ? e.touchEventsTouch : e.touchEventsDesktop
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: e.params.focusableElements,
                            lastClickTime: s(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: e.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), e.emit("_swiper"), e.params.init && e.init(), e
                }
                enable() {
                    let a = this;
                    a.enabled || (a.enabled = !0, a.params.grabCursor && a.setGrabCursor(), a.emit("enable"))
                }
                disable() {
                    let a = this;
                    a.enabled && (a.enabled = !1, a.params.grabCursor && a.unsetGrabCursor(), a.emit("disable"))
                }
                setProgress(a, b) {
                    a = Math.min(Math.max(a, 0), 1);
                    let c = this.minTranslate(),
                        d = this.maxTranslate(),
                        e = (d - c) * a + c;
                    this.translateTo(e, void 0 === b ? 0 : b), this.updateActiveIndex(), this.updateSlidesClasses()
                }
                emitContainerClasses() {
                    let a = this;
                    if (!a.params._emitClasses || !a.el) return;
                    let b = a.el.className.split(" ").filter(b => 0 === b.indexOf("swiper") || 0 === b.indexOf(a.params.containerModifierClass));
                    a.emit("_containerClasses", b.join(" "))
                }
                getSlideClasses(a) {
                    let b = this;
                    return b.destroyed ? "" : a.className.split(" ").filter(a => 0 === a.indexOf("swiper-slide") || 0 === a.indexOf(b.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    let a = this;
                    if (!a.params._emitClasses || !a.el) return;
                    let b = [];
                    a.slides.each(c => {
                        let d = a.getSlideClasses(c);
                        b.push({
                            slideEl: c,
                            classNames: d
                        }), a.emit("_slideClass", c, d)
                    }), a.emit("_slideClasses", b)
                }
                slidesPerViewDynamic(a = "current", b = !1) {
                    let {
                        params: c,
                        slides: d,
                        slidesGrid: e,
                        slidesSizesGrid: f,
                        size: g,
                        activeIndex: h
                    } = this, i = 1;
                    if (c.centeredSlides) {
                        let j = d[h].swiperSlideSize,
                            k;
                        for (let l = h + 1; l < d.length; l += 1) d[l] && !k && (j += d[l].swiperSlideSize, i += 1, j > g && (k = !0));
                        for (let m = h - 1; m >= 0; m -= 1) d[m] && !k && (j += d[m].swiperSlideSize, i += 1, j > g && (k = !0))
                    } else if ("current" === a)
                        for (let n = h + 1; n < d.length; n += 1) {
                            let o = b ? e[n] + f[n] - e[h] < g : e[n] - e[h] < g;
                            o && (i += 1)
                        } else
                            for (let p = h - 1; p >= 0; p -= 1) {
                                let q = e[h] - e[p] < g;
                                q && (i += 1)
                            }
                    return i
                }
                update() {
                    let a = this;
                    if (!a || a.destroyed) return;
                    let {
                        snapGrid: b,
                        params: c
                    } = a;

                    function d() {
                        let b = a.rtlTranslate ? -1 * a.translate : a.translate,
                            c = Math.min(Math.max(b, a.maxTranslate()), a.minTranslate());
                        a.setTranslate(c), a.updateActiveIndex(), a.updateSlidesClasses()
                    }
                    c.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses();
                    let e;
                    a.params.freeMode && a.params.freeMode.enabled ? (d(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || a.params.slidesPerView > 1) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || d(), c.watchOverflow && b !== a.snapGrid && a.checkOverflow(), a.emit("update")
                }
                changeDirection(a, b = !0) {
                    let c = this,
                        d = c.params.direction;
                    return a || (a = "horizontal" === d ? "vertical" : "horizontal"), a === d || "horizontal" !== a && "vertical" !== a || (c.$el.removeClass(`${c.params.containerModifierClass}${d}`).addClass(`${c.params.containerModifierClass}${a}`), c.emitContainerClasses(), c.params.direction = a, c.slides.each(b => {
                        "vertical" === a ? b.style.width = "" : b.style.height = ""
                    }), c.emit("changeDirection"), b && c.update()), c
                }
                changeLanguageDirection(a) {
                    let b = this;
                    (!b.rtl || "rtl" !== a) && (b.rtl || "ltr" !== a) && (b.rtl = "rtl" === a, b.rtlTranslate = "horizontal" === b.params.direction && b.rtl, b.rtl ? (b.$el.addClass(`${b.params.containerModifierClass}rtl`), b.el.dir = "rtl") : (b.$el.removeClass(`${b.params.containerModifierClass}rtl`), b.el.dir = "ltr"), b.update())
                }
                mount(a) {
                    let b = this;
                    if (b.mounted) return !0;
                    let c = q(a || b.params.el);
                    if (!(a = c[0])) return !1;
                    a.swiper = b;
                    let d = () => `.${(b.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        e = () => {
                            if (a && a.shadowRoot && a.shadowRoot.querySelector) {
                                let b = q(a.shadowRoot.querySelector(d()));
                                return b.children = a => c.children(a), b
                            }
                            return c.children ? c.children(d()) : q(c).children(d())
                        },
                        f = e();
                    if (0 === f.length && b.params.createElements) {
                        let h = g(),
                            i = h.createElement("div");
                        f = q(i), i.className = b.params.wrapperClass, c.append(i), c.children(`.${b.params.slideClass}`).each(a => {
                            f.append(a)
                        })
                    }
                    return Object.assign(b, {
                        $el: c,
                        el: a,
                        $wrapperEl: f,
                        wrapperEl: f[0],
                        mounted: !0,
                        rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
                        rtlTranslate: "horizontal" === b.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
                        wrongRTL: "-webkit-box" === f.css("display")
                    }), !0
                }
                init(a) {
                    let b = this;
                    if (b.initialized) return b;
                    let c = b.mount(a);
                    return !1 === c || (b.emit("beforeInit"), b.params.breakpoints && b.setBreakpoint(), b.addClasses(), b.params.loop && b.loopCreate(), b.updateSize(), b.updateSlides(), b.params.watchOverflow && b.checkOverflow(), b.params.grabCursor && b.enabled && b.setGrabCursor(), b.params.preloadImages && b.preloadImages(), b.params.loop ? b.slideTo(b.params.initialSlide + b.loopedSlides, 0, b.params.runCallbacksOnInit, !1, !0) : b.slideTo(b.params.initialSlide, 0, b.params.runCallbacksOnInit, !1, !0), b.attachEvents(), b.initialized = !0, b.emit("init"), b.emit("afterInit")), b
                }
                destroy(a = !0, b = !0) {
                    let c = this,
                        {
                            params: d,
                            $el: e,
                            $wrapperEl: f,
                            slides: g
                        } = c;
                    return void 0 === c.params || c.destroyed || (c.emit("beforeDestroy"), c.initialized = !1, c.detachEvents(), d.loop && c.loopDestroy(), b && (c.removeClasses(), e.removeAttr("style"), f.removeAttr("style"), g && g.length && g.removeClass([d.slideVisibleClass, d.slideActiveClass, d.slideNextClass, d.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), c.emit("destroy"), Object.keys(c.eventsListeners).forEach(a => {
                        c.off(a)
                    }), !1 !== a && (c.$el[0].swiper = null, function(a) {
                        let b = a;
                        Object.keys(b).forEach(a => {
                            try {
                                b[a] = null
                            } catch (c) {}
                            try {
                                delete b[a]
                            } catch (d) {}
                        })
                    }(c)), c.destroyed = !0), null
                }
                static extendDefaults(a) {
                    v(Q, a)
                }
                static get extendedDefaults() {
                    return Q
                }
                static get defaults() {
                    return O
                }
                static installModule(a) {
                    R.prototype.__modules__ || (R.prototype.__modules__ = []);
                    let b = R.prototype.__modules__;
                    "function" == typeof a && 0 > b.indexOf(a) && b.push(a)
                }
                static use(a) {
                    return Array.isArray(a) ? (a.forEach(a => R.installModule(a)), R) : (R.installModule(a), R)
                }
            }
            Object.keys(P).forEach(a => {
                Object.keys(P[a]).forEach(b => {
                    R.prototype[b] = P[a][b]
                })
            }), R.use([function({
                swiper: a,
                on: b,
                emit: c
            }) {
                let d = i(),
                    e = null,
                    f = null,
                    g = () => {
                        a && !a.destroyed && a.initialized && (c("beforeResize"), c("resize"))
                    },
                    h = () => {
                        a && !a.destroyed && a.initialized && (e = new ResizeObserver(b => {
                            f = d.requestAnimationFrame(() => {
                                let {
                                    width: c,
                                    height: d
                                } = a, e = c, f = d;
                                b.forEach(({
                                    contentBoxSize: b,
                                    contentRect: c,
                                    target: d
                                }) => {
                                    d && d !== a.el || (e = c ? c.width : (b[0] || b).inlineSize, f = c ? c.height : (b[0] || b).blockSize)
                                }), (e !== c || f !== d) && g()
                            })
                        })).observe(a.el)
                    },
                    j = () => {
                        f && d.cancelAnimationFrame(f), e && e.unobserve && a.el && (e.unobserve(a.el), e = null)
                    },
                    k = () => {
                        a && !a.destroyed && a.initialized && c("orientationchange")
                    };
                b("init", () => {
                    if (a.params.resizeObserver && void 0 !== d.ResizeObserver) {
                        h();
                        return
                    }
                    d.addEventListener("resize", g), d.addEventListener("orientationchange", k)
                }), b("destroy", () => {
                    j(), d.removeEventListener("resize", g), d.removeEventListener("orientationchange", k)
                })
            }, function({
                swiper: a,
                extendParams: b,
                on: c,
                emit: d
            }) {
                let e = [],
                    f = i(),
                    g = (a, b = {}) => {
                        let c = f.MutationObserver || f.WebkitMutationObserver,
                            g = new c(a => {
                                if (1 === a.length) {
                                    d("observerUpdate", a[0]);
                                    return
                                }
                                let b = function() {
                                    d("observerUpdate", a[0])
                                };
                                f.requestAnimationFrame ? f.requestAnimationFrame(b) : f.setTimeout(b, 0)
                            });
                        g.observe(a, {
                            attributes: void 0 === b.attributes || b.attributes,
                            childList: void 0 === b.childList || b.childList,
                            characterData: void 0 === b.characterData || b.characterData
                        }), e.push(g)
                    },
                    h = () => {
                        if (a.params.observer) {
                            if (a.params.observeParents) {
                                let b = a.$el.parents();
                                for (let c = 0; c < b.length; c += 1) g(b[c])
                            }
                            g(a.$el[0], {
                                childList: a.params.observeSlideChildren
                            }), g(a.$wrapperEl[0], {
                                attributes: !1
                            })
                        }
                    },
                    j = () => {
                        e.forEach(a => {
                            a.disconnect()
                        }), e.splice(0, e.length)
                    };
                b({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), c("init", h), c("destroy", j)
            }]);
            var S = R;

            function T({
                swiper: a,
                extendParams: b,
                on: c,
                emit: d
            }) {
                let e = i();
                b({
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarget: "container",
                        thresholdDelta: null,
                        thresholdTime: null
                    }
                }), a.mousewheel = {
                    enabled: !1
                };
                let f, g = s(),
                    h, j = [];

                function k() {
                    a.enabled && (a.mouseEntered = !0)
                }

                function l() {
                    a.enabled && (a.mouseEntered = !1)
                }

                function m(b) {
                    return !(a.params.mousewheel.thresholdDelta && b.delta < a.params.mousewheel.thresholdDelta || a.params.mousewheel.thresholdTime && s() - g < a.params.mousewheel.thresholdTime) && (!!(b.delta >= 6 && s() - g < 60) || (b.direction < 0 ? a.isEnd && !a.params.loop || a.animating || (a.slideNext(), d("scroll", b.raw)) : a.isBeginning && !a.params.loop || a.animating || (a.slidePrev(), d("scroll", b.raw)), g = new e.Date().getTime(), !1))
                }

                function n(b) {
                    var c;
                    let e = b,
                        g = !0;
                    if (!a.enabled) return;
                    let i = a.params.mousewheel;
                    a.params.cssMode && e.preventDefault();
                    let k = a.$el;
                    if ("container" !== a.params.mousewheel.eventsTarget && (k = q(a.params.mousewheel.eventsTarget)), !a.mouseEntered && !k[0].contains(e.target) && !i.releaseOnEdges) return !0;
                    e.originalEvent && (e = e.originalEvent);
                    let l = 0,
                        n = a.rtlTranslate ? -1 : 1,
                        o, p, t, u, v = (o = 0, p = 0, t = 0, u = 0, "detail" in (c = e) && (p = c.detail), "wheelDelta" in c && (p = -c.wheelDelta / 120), "wheelDeltaY" in c && (p = -c.wheelDeltaY / 120), "wheelDeltaX" in c && (o = -c.wheelDeltaX / 120), "axis" in c && c.axis === c.HORIZONTAL_AXIS && (o = p, p = 0), t = 10 * o, u = 10 * p, "deltaY" in c && (u = c.deltaY), "deltaX" in c && (t = c.deltaX), c.shiftKey && !t && (t = u, u = 0), (t || u) && c.deltaMode && (1 === c.deltaMode ? (t *= 40, u *= 40) : (t *= 800, u *= 800)), t && !o && (o = t < 1 ? -1 : 1), u && !p && (p = u < 1 ? -1 : 1), {
                            spinX: o,
                            spinY: p,
                            pixelX: t,
                            pixelY: u
                        });
                    if (i.forceToAxis) {
                        if (a.isHorizontal()) {
                            if (!(Math.abs(v.pixelX) > Math.abs(v.pixelY))) return !0;
                            l = -v.pixelX * n
                        } else {
                            if (!(Math.abs(v.pixelY) > Math.abs(v.pixelX))) return !0;
                            l = -v.pixelY
                        }
                    } else l = Math.abs(v.pixelX) > Math.abs(v.pixelY) ? -v.pixelX * n : -v.pixelY;
                    if (0 === l) return !0;
                    i.invert && (l = -l);
                    let w = a.getTranslate() + l * i.sensitivity;
                    if (w >= a.minTranslate() && (w = a.minTranslate()), w <= a.maxTranslate() && (w = a.maxTranslate()), !a.params.loop && (w === a.minTranslate() || w === a.maxTranslate()) || !a.params.nested || e.stopPropagation(), a.params.freeMode && a.params.freeMode.enabled) {
                        let x = {
                                time: s(),
                                delta: Math.abs(l),
                                direction: Math.sign(l)
                            },
                            y = h && x.time < h.time + 500 && x.delta <= h.delta && x.direction === h.direction;
                        if (!y) {
                            h = void 0, a.params.loop && a.loopFix();
                            let z = a.getTranslate() + l * i.sensitivity,
                                A = a.isBeginning,
                                B = a.isEnd;
                            if (z >= a.minTranslate() && (z = a.minTranslate()), z <= a.maxTranslate() && (z = a.maxTranslate()), a.setTransition(0), a.setTranslate(z), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!A && a.isBeginning || !B && a.isEnd) && a.updateSlidesClasses(), a.params.freeMode.sticky) {
                                clearTimeout(f), f = void 0, j.length >= 15 && j.shift();
                                let C = j.length ? j[j.length - 1] : void 0,
                                    D = j[0];
                                if (j.push(x), C && (x.delta > C.delta || x.direction !== C.direction)) j.splice(0);
                                else if (j.length >= 15 && x.time - D.time < 500 && D.delta - x.delta >= 1 && x.delta <= 6) {
                                    let E = l > 0 ? .8 : .2;
                                    h = x, j.splice(0), f = r(() => {
                                        a.slideToClosest(a.params.speed, !0, void 0, E)
                                    }, 0)
                                }
                                f || (f = r(() => {
                                    let b = .5;
                                    h = x, j.splice(0), a.slideToClosest(a.params.speed, !0, void 0, b)
                                }, 500))
                            }
                            if (y || d("scroll", e), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), z === a.minTranslate() || z === a.maxTranslate()) return !0
                        }
                    } else {
                        let F = {
                            time: s(),
                            delta: Math.abs(l),
                            direction: Math.sign(l),
                            raw: b
                        };
                        j.length >= 2 && j.shift();
                        let G = j.length ? j[j.length - 1] : void 0;
                        if (j.push(F), G ? (F.direction !== G.direction || F.delta > G.delta || F.time > G.time + 150) && m(F) : m(F), function(b) {
                                let c = a.params.mousewheel;
                                if (b.direction < 0) {
                                    if (a.isEnd && !a.params.loop && c.releaseOnEdges) return !0
                                } else if (a.isBeginning && !a.params.loop && c.releaseOnEdges) return !0;
                                return !1
                            }(F)) return !0
                    }
                    return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
                }

                function o(b) {
                    let c = a.$el;
                    "container" !== a.params.mousewheel.eventsTarget && (c = q(a.params.mousewheel.eventsTarget)), c[b]("mouseenter", k), c[b]("mouseleave", l), c[b]("wheel", n)
                }

                function p() {
                    return a.params.cssMode ? (a.wrapperEl.removeEventListener("wheel", n), !0) : !a.mousewheel.enabled && (o("on"), a.mousewheel.enabled = !0, !0)
                }

                function t() {
                    return a.params.cssMode ? (a.wrapperEl.addEventListener(event, n), !0) : !!a.mousewheel.enabled && (o("off"), a.mousewheel.enabled = !1, !0)
                }
                c("init", () => {
                    !a.params.mousewheel.enabled && a.params.cssMode && t(), a.params.mousewheel.enabled && p()
                }), c("destroy", () => {
                    a.params.cssMode && p(), a.mousewheel.enabled && t()
                }), Object.assign(a.mousewheel, {
                    enable: p,
                    disable: t
                })
            }

            function U(a, b, c, d) {
                let e = g();
                return a.params.createElements && Object.keys(d).forEach(f => {
                    if (!c[f] && !0 === c.auto) {
                        let g = a.$el.children(`.${d[f]}`)[0];
                        g || ((g = e.createElement("div")).className = d[f], a.$el.append(g)), c[f] = g, b[f] = g
                    }
                }), c
            }

            function V({
                swiper: a,
                extendParams: b,
                on: c,
                emit: d
            }) {
                function e(b) {
                    let c;
                    return b && (c = q(b), a.params.uniqueNavElements && "string" == typeof b && c.length > 1 && 1 === a.$el.find(b).length && (c = a.$el.find(b))), c
                }

                function f(b, c) {
                    let d = a.params.navigation;
                    b && b.length > 0 && (b[c ? "addClass" : "removeClass"](d.disabledClass), b[0] && "BUTTON" === b[0].tagName && (b[0].disabled = c), a.params.watchOverflow && a.enabled && b[a.isLocked ? "addClass" : "removeClass"](d.lockClass))
                }

                function g() {
                    if (a.params.loop) return;
                    let {
                        $nextEl: b,
                        $prevEl: c
                    } = a.navigation;
                    f(c, a.isBeginning && !a.params.rewind), f(b, a.isEnd && !a.params.rewind)
                }

                function h(b) {
                    b.preventDefault(), (!a.isBeginning || a.params.loop || a.params.rewind) && (a.slidePrev(), d("navigationPrev"))
                }

                function i(b) {
                    b.preventDefault(), (!a.isEnd || a.params.loop || a.params.rewind) && (a.slideNext(), d("navigationNext"))
                }

                function j() {
                    let b = a.params.navigation;
                    if (a.params.navigation = U(a, a.originalParams.navigation, a.params.navigation, {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev"
                        }), !(b.nextEl || b.prevEl)) return;
                    let c = e(b.nextEl),
                        d = e(b.prevEl);
                    c && c.length > 0 && c.on("click", i), d && d.length > 0 && d.on("click", h), Object.assign(a.navigation, {
                        $nextEl: c,
                        nextEl: c && c[0],
                        $prevEl: d,
                        prevEl: d && d[0]
                    }), !a.enabled && (c && c.addClass(b.lockClass), d && d.addClass(b.lockClass))
                }

                function k() {
                    let {
                        $nextEl: b,
                        $prevEl: c
                    } = a.navigation;
                    b && b.length && (b.off("click", i), b.removeClass(a.params.navigation.disabledClass)), c && c.length && (c.off("click", h), c.removeClass(a.params.navigation.disabledClass))
                }
                b({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }), a.navigation = {
                    nextEl: null,
                    $nextEl: null,
                    prevEl: null,
                    $prevEl: null
                }, c("init", () => {
                    !1 === a.params.navigation.enabled ? m() : (j(), g())
                }), c("toEdge fromEdge lock unlock", () => {
                    g()
                }), c("destroy", () => {
                    k()
                }), c("enable disable", () => {
                    let {
                        $nextEl: b,
                        $prevEl: c
                    } = a.navigation;
                    b && b[a.enabled ? "removeClass" : "addClass"](a.params.navigation.lockClass), c && c[a.enabled ? "removeClass" : "addClass"](a.params.navigation.lockClass)
                }), c("click", (b, c) => {
                    let {
                        $nextEl: e,
                        $prevEl: f
                    } = a.navigation, g = c.target;
                    if (a.params.navigation.hideOnClick && !q(g).is(f) && !q(g).is(e)) {
                        if (a.pagination && a.params.pagination && a.params.pagination.clickable && (a.pagination.el === g || a.pagination.el.contains(g))) return;
                        let h;
                        e ? h = e.hasClass(a.params.navigation.hiddenClass) : f && (h = f.hasClass(a.params.navigation.hiddenClass)), !0 === h ? d("navigationShow") : d("navigationHide"), e && e.toggleClass(a.params.navigation.hiddenClass), f && f.toggleClass(a.params.navigation.hiddenClass)
                    }
                });
                let l = () => {
                        a.$el.removeClass(a.params.navigation.navigationDisabledClass), j(), g()
                    },
                    m = () => {
                        a.$el.addClass(a.params.navigation.navigationDisabledClass), k()
                    };
                Object.assign(a.navigation, {
                    enable: l,
                    disable: m,
                    update: g,
                    init: j,
                    destroy: k
                })
            }

            function W(a = "") {
                return `.${a.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
            }

            function X({
                swiper: a,
                extendParams: b,
                on: c,
                emit: d
            }) {
                let e = "swiper-pagination";
                b({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: a => a,
                        formatFractionTotal: a => a,
                        bulletClass: `${e}-bullet`,
                        bulletActiveClass: `${e}-bullet-active`,
                        modifierClass: `${e}-`,
                        currentClass: `${e}-current`,
                        totalClass: `${e}-total`,
                        hiddenClass: `${e}-hidden`,
                        progressbarFillClass: `${e}-progressbar-fill`,
                        progressbarOppositeClass: `${e}-progressbar-opposite`,
                        clickableClass: `${e}-clickable`,
                        lockClass: `${e}-lock`,
                        horizontalClass: `${e}-horizontal`,
                        verticalClass: `${e}-vertical`,
                        paginationDisabledClass: `${e}-disabled`
                    }
                }), a.pagination = {
                    el: null,
                    $el: null,
                    bullets: []
                };
                let f, g = 0;

                function h() {
                    return !a.params.pagination.el || !a.pagination.el || !a.pagination.$el || 0 === a.pagination.$el.length
                }

                function i(b, c) {
                    let {
                        bulletActiveClass: d
                    } = a.params.pagination;
                    b[c]().addClass(`${d}-${c}`)[c]().addClass(`${d}-${c}-${c}`)
                }

                function j() {
                    let b = a.rtl,
                        c = a.params.pagination;
                    if (h()) return;
                    let e = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.slides.length,
                        j = a.pagination.$el,
                        k, l = a.params.loop ? Math.ceil((e - 2 * a.loopedSlides) / a.params.slidesPerGroup) : a.snapGrid.length;
                    if (a.params.loop ? ((k = Math.ceil((a.activeIndex - a.loopedSlides) / a.params.slidesPerGroup)) > e - 1 - 2 * a.loopedSlides && (k -= e - 2 * a.loopedSlides), k > l - 1 && (k -= l), k < 0 && "bullets" !== a.params.paginationType && (k = l + k)) : k = void 0 !== a.snapIndex ? a.snapIndex : a.activeIndex || 0, "bullets" === c.type && a.pagination.bullets && a.pagination.bullets.length > 0) {
                        let m = a.pagination.bullets,
                            n, o, p;
                        if (c.dynamicBullets && (f = m.eq(0)[a.isHorizontal() ? "outerWidth" : "outerHeight"](!0), j.css(a.isHorizontal() ? "width" : "height", `${f*(c.dynamicMainBullets+4)}px`), c.dynamicMainBullets > 1 && void 0 !== a.previousIndex && ((g += k - (a.previousIndex - a.loopedSlides || 0)) > c.dynamicMainBullets - 1 ? g = c.dynamicMainBullets - 1 : g < 0 && (g = 0)), p = ((o = (n = Math.max(k - g, 0)) + (Math.min(m.length, c.dynamicMainBullets) - 1)) + n) / 2), m.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(a => `${c.bulletActiveClass}${a}`).join(" ")), j.length > 1) m.each(a => {
                            let b = q(a),
                                d = b.index();
                            d === k && b.addClass(c.bulletActiveClass), c.dynamicBullets && (d >= n && d <= o && b.addClass(`${c.bulletActiveClass}-main`), d === n && i(b, "prev"), d === o && i(b, "next"))
                        });
                        else {
                            let r = m.eq(k),
                                s = r.index();
                            if (r.addClass(c.bulletActiveClass), c.dynamicBullets) {
                                let t = m.eq(n),
                                    u = m.eq(o);
                                for (let v = n; v <= o; v += 1) m.eq(v).addClass(`${c.bulletActiveClass}-main`);
                                if (a.params.loop) {
                                    if (s >= m.length) {
                                        for (let w = c.dynamicMainBullets; w >= 0; w -= 1) m.eq(m.length - w).addClass(`${c.bulletActiveClass}-main`);
                                        m.eq(m.length - c.dynamicMainBullets - 1).addClass(`${c.bulletActiveClass}-prev`)
                                    } else i(t, "prev"), i(u, "next")
                                } else i(t, "prev"), i(u, "next")
                            }
                        }
                        if (c.dynamicBullets) {
                            let x = Math.min(m.length, c.dynamicMainBullets + 4),
                                y = (f * x - f) / 2 - p * f,
                                z = b ? "right" : "left";
                            m.css(a.isHorizontal() ? z : "top", `${y}px`)
                        }
                    }
                    if ("fraction" === c.type && (j.find(W(c.currentClass)).text(c.formatFractionCurrent(k + 1)), j.find(W(c.totalClass)).text(c.formatFractionTotal(l))), "progressbar" === c.type) {
                        let A;
                        A = c.progressbarOpposite ? a.isHorizontal() ? "vertical" : "horizontal" : a.isHorizontal() ? "horizontal" : "vertical";
                        let B = (k + 1) / l,
                            C = 1,
                            D = 1;
                        "horizontal" === A ? C = B : D = B, j.find(W(c.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${C}) scaleY(${D})`).transition(a.params.speed)
                    }
                    "custom" === c.type && c.renderCustom ? (j.html(c.renderCustom(a, k + 1, l)), d("paginationRender", j[0])) : d("paginationUpdate", j[0]), a.params.watchOverflow && a.enabled && j[a.isLocked ? "addClass" : "removeClass"](c.lockClass)
                }

                function k() {
                    let b = a.params.pagination;
                    if (h()) return;
                    let c = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.slides.length,
                        e = a.pagination.$el,
                        f = "";
                    if ("bullets" === b.type) {
                        let g = a.params.loop ? Math.ceil((c - 2 * a.loopedSlides) / a.params.slidesPerGroup) : a.snapGrid.length;
                        a.params.freeMode && a.params.freeMode.enabled && !a.params.loop && g > c && (g = c);
                        for (let i = 0; i < g; i += 1) b.renderBullet ? f += b.renderBullet.call(a, i, b.bulletClass) : f += `<${b.bulletElement} class="${b.bulletClass}"></${b.bulletElement}>`;
                        e.html(f), a.pagination.bullets = e.find(W(b.bulletClass))
                    }
                    "fraction" === b.type && (f = b.renderFraction ? b.renderFraction.call(a, b.currentClass, b.totalClass) : `<span class="${b.currentClass}"></span> / <span class="${b.totalClass}"></span>`, e.html(f)), "progressbar" === b.type && (f = b.renderProgressbar ? b.renderProgressbar.call(a, b.progressbarFillClass) : `<span class="${b.progressbarFillClass}"></span>`, e.html(f)), "custom" !== b.type && d("paginationRender", a.pagination.$el[0])
                }

                function l() {
                    a.params.pagination = U(a, a.originalParams.pagination, a.params.pagination, {
                        el: "swiper-pagination"
                    });
                    let b = a.params.pagination;
                    if (!b.el) return;
                    let c = q(b.el);
                    0 === c.length || (a.params.uniqueNavElements && "string" == typeof b.el && c.length > 1 && (c = a.$el.find(b.el)).length > 1 && (c = c.filter(b => q(b).parents(".swiper")[0] === a.el)), "bullets" === b.type && b.clickable && c.addClass(b.clickableClass), c.addClass(b.modifierClass + b.type), c.addClass(a.isHorizontal() ? b.horizontalClass : b.verticalClass), "bullets" === b.type && b.dynamicBullets && (c.addClass(`${b.modifierClass}${b.type}-dynamic`), g = 0, b.dynamicMainBullets < 1 && (b.dynamicMainBullets = 1)), "progressbar" === b.type && b.progressbarOpposite && c.addClass(b.progressbarOppositeClass), b.clickable && c.on("click", W(b.bulletClass), function(b) {
                        b.preventDefault();
                        let c = q(this).index() * a.params.slidesPerGroup;
                        a.params.loop && (c += a.loopedSlides), a.slideTo(c)
                    }), Object.assign(a.pagination, {
                        $el: c,
                        el: c[0]
                    }), a.enabled || c.addClass(b.lockClass))
                }

                function m() {
                    let b = a.params.pagination;
                    if (h()) return;
                    let c = a.pagination.$el;
                    c.removeClass(b.hiddenClass), c.removeClass(b.modifierClass + b.type), c.removeClass(a.isHorizontal() ? b.horizontalClass : b.verticalClass), a.pagination.bullets && a.pagination.bullets.removeClass && a.pagination.bullets.removeClass(b.bulletActiveClass), b.clickable && c.off("click", W(b.bulletClass))
                }
                c("init", () => {
                    !1 === a.params.pagination.enabled ? o() : (l(), k(), j())
                }), c("activeIndexChange", () => {
                    a.params.loop ? j() : void 0 === a.snapIndex && j()
                }), c("snapIndexChange", () => {
                    a.params.loop || j()
                }), c("slidesLengthChange", () => {
                    a.params.loop && (k(), j())
                }), c("snapGridLengthChange", () => {
                    a.params.loop || (k(), j())
                }), c("destroy", () => {
                    m()
                }), c("enable disable", () => {
                    let {
                        $el: b
                    } = a.pagination;
                    b && b[a.enabled ? "removeClass" : "addClass"](a.params.pagination.lockClass)
                }), c("lock unlock", () => {
                    j()
                }), c("click", (b, c) => {
                    let e = c.target,
                        {
                            $el: f
                        } = a.pagination;
                    if (a.params.pagination.el && a.params.pagination.hideOnClick && f && f.length > 0 && !q(e).hasClass(a.params.pagination.bulletClass)) {
                        if (a.navigation && (a.navigation.nextEl && e === a.navigation.nextEl || a.navigation.prevEl && e === a.navigation.prevEl)) return;
                        let g = f.hasClass(a.params.pagination.hiddenClass);
                        !0 === g ? d("paginationShow") : d("paginationHide"), f.toggleClass(a.params.pagination.hiddenClass)
                    }
                });
                let n = () => {
                        a.$el.removeClass(a.params.pagination.paginationDisabledClass), a.pagination.$el && a.pagination.$el.removeClass(a.params.pagination.paginationDisabledClass), l(), k(), j()
                    },
                    o = () => {
                        a.$el.addClass(a.params.pagination.paginationDisabledClass), a.pagination.$el && a.pagination.$el.addClass(a.params.pagination.paginationDisabledClass), m()
                    };
                Object.assign(a.pagination, {
                    enable: n,
                    disable: o,
                    render: k,
                    update: j,
                    init: l,
                    destroy: m
                })
            }

            function Y({
                swiper: a,
                extendParams: b,
                on: c
            }) {
                b({
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        slideLabelMessage: "{{index}} / {{slidesLength}}",
                        containerMessage: null,
                        containerRoleDescriptionMessage: null,
                        itemRoleDescriptionMessage: null,
                        slideRole: "group",
                        id: null
                    }
                }), a.a11y = {
                    clicked: !1
                };
                let d = null;

                function e(a) {
                    let b = d;
                    0 !== b.length && (b.html(""), b.html(a))
                }

                function f(a) {
                    a.attr("tabIndex", "0")
                }

                function g(a) {
                    a.attr("tabIndex", "-1")
                }

                function h(a, b) {
                    a.attr("role", b)
                }

                function i(a, b) {
                    a.attr("aria-roledescription", b)
                }

                function j(a, b) {
                    a.attr("aria-label", b)
                }

                function k(a) {
                    a.attr("aria-disabled", !0)
                }

                function l(a) {
                    a.attr("aria-disabled", !1)
                }

                function m(b) {
                    if (13 !== b.keyCode && 32 !== b.keyCode) return;
                    let c = a.params.a11y,
                        d = q(b.target);
                    a.navigation && a.navigation.$nextEl && d.is(a.navigation.$nextEl) && (a.isEnd && !a.params.loop || a.slideNext(), a.isEnd ? e(c.lastSlideMessage) : e(c.nextSlideMessage)), a.navigation && a.navigation.$prevEl && d.is(a.navigation.$prevEl) && (a.isBeginning && !a.params.loop || a.slidePrev(), a.isBeginning ? e(c.firstSlideMessage) : e(c.prevSlideMessage)), a.pagination && d.is(W(a.params.pagination.bulletClass)) && d[0].click()
                }

                function n() {
                    return a.pagination && a.pagination.bullets && a.pagination.bullets.length
                }

                function o() {
                    return n() && a.params.pagination.clickable
                }
                let p = (a, b, c) => {
                        f(a), "BUTTON" !== a[0].tagName && (h(a, "button"), a.on("keydown", m)), j(a, c),
                            function(a, b) {
                                a.attr("aria-controls", b)
                            }(a, b)
                    },
                    r = () => {
                        a.a11y.clicked = !0
                    },
                    s = () => {
                        a.a11y.clicked = !1
                    },
                    t = b => {
                        if (a.a11y.clicked) return;
                        let c = b.target.closest(`.${a.params.slideClass}`);
                        if (!c || !a.slides.includes(c)) return;
                        let d = a.slides.indexOf(c) === a.activeIndex,
                            e = a.params.watchSlidesProgress && a.visibleSlides && a.visibleSlides.includes(c);
                        d || e || (a.isHorizontal() ? a.el.scrollLeft = 0 : a.el.scrollTop = 0, a.slideTo(a.slides.indexOf(c), 0))
                    },
                    u = () => {
                        let b = a.params.a11y;
                        b.itemRoleDescriptionMessage && i(q(a.slides), b.itemRoleDescriptionMessage), b.slideRole && h(q(a.slides), b.slideRole);
                        let c = a.params.loop ? a.slides.filter(b => !b.classList.contains(a.params.slideDuplicateClass)).length : a.slides.length;
                        b.slideLabelMessage && a.slides.each((d, e) => {
                            let f = q(d),
                                g = a.params.loop ? parseInt(f.attr("data-swiper-slide-index"), 10) : e,
                                h = b.slideLabelMessage.replace(/\{\{index\}\}/, g + 1).replace(/\{\{slidesLength\}\}/, c);
                            j(f, h)
                        })
                    },
                    v = () => {
                        let b = a.params.a11y;
                        a.$el.append(d);
                        let c = a.$el;
                        b.containerRoleDescriptionMessage && i(c, b.containerRoleDescriptionMessage), b.containerMessage && j(c, b.containerMessage);
                        let e = a.$wrapperEl,
                            f = b.id || e.attr("id") || `swiper-wrapper-${function(a=16){let b=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(a).replace(/x/g,b)}(16)}`,
                            g = a.params.autoplay && a.params.autoplay.enabled ? "off" : "polite";
                        ! function(a, b) {
                            a.attr("id", b)
                        }(e, f),
                        function(a, b) {
                            a.attr("aria-live", b)
                        }(e, g), u();
                        let h, k;
                        a.navigation && a.navigation.$nextEl && (h = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (k = a.navigation.$prevEl), h && h.length && p(h, f, b.nextSlideMessage), k && k.length && p(k, f, b.prevSlideMessage), o() && a.pagination.$el.on("keydown", W(a.params.pagination.bulletClass), m), a.$el.on("focus", t, !0), a.$el.on("pointerdown", r, !0), a.$el.on("pointerup", s, !0)
                    };
                c("beforeInit", () => {
                    d = q(`<span class="${a.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
                }), c("afterInit", () => {
                    a.params.a11y.enabled && v()
                }), c("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
                    a.params.a11y.enabled && u()
                }), c("fromEdge toEdge afterInit lock unlock", () => {
                    a.params.a11y.enabled && function() {
                        if (a.params.loop || a.params.rewind || !a.navigation) return;
                        let {
                            $nextEl: b,
                            $prevEl: c
                        } = a.navigation;
                        c && c.length > 0 && (a.isBeginning ? (k(c), g(c)) : (l(c), f(c))), b && b.length > 0 && (a.isEnd ? (k(b), g(b)) : (l(b), f(b)))
                    }()
                }), c("paginationUpdate", () => {
                    a.params.a11y.enabled && function() {
                        let b = a.params.a11y;
                        n() && a.pagination.bullets.each(c => {
                            let d = q(c);
                            a.params.pagination.clickable && (f(d), a.params.pagination.renderBullet || (h(d, "button"), j(d, b.paginationBulletMessage.replace(/\{\{index\}\}/, d.index() + 1)))), d.is(`.${a.params.pagination.bulletActiveClass}`) ? d.attr("aria-current", "true") : d.removeAttr("aria-current")
                        })
                    }()
                }), c("destroy", () => {
                    if (a.params.a11y.enabled) {
                        let b, c;
                        d && d.length > 0 && d.remove(), a.navigation && a.navigation.$nextEl && (b = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (c = a.navigation.$prevEl), b && b.off("keydown", m), c && c.off("keydown", m), o() && a.pagination.$el.off("keydown", W(a.params.pagination.bulletClass), m), a.$el.off("focus", t, !0), a.$el.off("pointerdown", r, !0), a.$el.off("pointerup", s, !0)
                    }
                })
            }

            function Z({
                swiper: a,
                extendParams: b,
                on: c,
                emit: d
            }) {
                let e;

                function f() {
                    if (!a.size) {
                        a.autoplay.running = !1, a.autoplay.paused = !1;
                        return
                    }
                    let b = a.slides.eq(a.activeIndex),
                        c = a.params.autoplay.delay;
                    b.attr("data-swiper-autoplay") && (c = b.attr("data-swiper-autoplay") || a.params.autoplay.delay), clearTimeout(e), e = r(() => {
                        let b;
                        a.params.autoplay.reverseDirection ? a.params.loop ? (a.loopFix(), b = a.slidePrev(a.params.speed, !0, !0), d("autoplay")) : a.isBeginning ? a.params.autoplay.stopOnLastSlide ? i() : (b = a.slideTo(a.slides.length - 1, a.params.speed, !0, !0), d("autoplay")) : (b = a.slidePrev(a.params.speed, !0, !0), d("autoplay")) : a.params.loop ? (a.loopFix(), b = a.slideNext(a.params.speed, !0, !0), d("autoplay")) : a.isEnd ? a.params.autoplay.stopOnLastSlide ? i() : (b = a.slideTo(0, a.params.speed, !0, !0), d("autoplay")) : (b = a.slideNext(a.params.speed, !0, !0), d("autoplay")), a.params.cssMode && a.autoplay.running ? f() : !1 === b && f()
                    }, c)
                }

                function h() {
                    return void 0 === e && !a.autoplay.running && (a.autoplay.running = !0, d("autoplayStart"), f(), !0)
                }

                function i() {
                    return !!a.autoplay.running && void 0 !== e && (e && (clearTimeout(e), e = void 0), a.autoplay.running = !1, d("autoplayStop"), !0)
                }

                function j(b) {
                    a.autoplay.running && (a.autoplay.paused || (e && clearTimeout(e), a.autoplay.paused = !0, 0 !== b && a.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(b => {
                        a.$wrapperEl[0].addEventListener(b, l)
                    }) : (a.autoplay.paused = !1, f())))
                }

                function k() {
                    let b = g();
                    "hidden" === b.visibilityState && a.autoplay.running && j(), "visible" === b.visibilityState && a.autoplay.paused && (f(), a.autoplay.paused = !1)
                }

                function l(b) {
                    a && !a.destroyed && a.$wrapperEl && b.target === a.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(b => {
                        a.$wrapperEl[0].removeEventListener(b, l)
                    }), a.autoplay.paused = !1, a.autoplay.running ? f() : i())
                }

                function m() {
                    a.params.autoplay.disableOnInteraction ? i() : (d("autoplayPause"), j()), ["transitionend", "webkitTransitionEnd"].forEach(b => {
                        a.$wrapperEl[0].removeEventListener(b, l)
                    })
                }

                function n() {
                    !a.params.autoplay.disableOnInteraction && (a.autoplay.paused = !1, d("autoplayResume"), f())
                }
                a.autoplay = {
                    running: !1,
                    paused: !1
                }, b({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                }), c("init", () => {
                    if (a.params.autoplay.enabled) {
                        h();
                        let b = g();
                        b.addEventListener("visibilitychange", k), a.params.autoplay.pauseOnMouseEnter && (a.$el.on("mouseenter", m), a.$el.on("mouseleave", n))
                    }
                }), c("beforeTransitionStart", (b, c, d) => {
                    a.autoplay.running && (d || !a.params.autoplay.disableOnInteraction ? a.autoplay.pause(c) : i())
                }), c("sliderFirstMove", () => {
                    a.autoplay.running && (a.params.autoplay.disableOnInteraction ? i() : j())
                }), c("touchEnd", () => {
                    a.params.cssMode && a.autoplay.paused && !a.params.autoplay.disableOnInteraction && f()
                }), c("destroy", () => {
                    a.$el.off("mouseenter", m), a.$el.off("mouseleave", n), a.autoplay.running && i();
                    let b = g();
                    b.removeEventListener("visibilitychange", k)
                }), Object.assign(a.autoplay, {
                    pause: j,
                    run: f,
                    start: h,
                    stop: i
                })
            }
        }
    }
])