var authlogin = function(t) {
    var n = 0,
        r = 0,
        a = 0,
        e = "",
        i = 36e5,
        o = setInterval(D, i);
    const h = ["01", "02", "03", "04", "05", "06", "07"],
        s = {
            "01": "Y",
            "02": "m",
            "03": "d",
            "04": "H",
            "05": "i",
            "06": "s",
            "07": "ml"
        },
        c = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "15", "16"];
    var d = {
            "01": "entityidmd5",
            "02": "ssn",
            "03": "lcl",
            "04": "hst",
            "05": "athv",
            "06": "bid",
            "07": "uid",
            "08": "nh",
            "09": "nw",
            10: "npd",
            11: "act",
            12: "pto",
            13: "src",
            14: "bsrorgn",
            15: "dmn",
            16: "stn"
        },
        u = {
            Y: "00000",
            m: "00000",
            d: "00000",
            H: "00000",
            i: "00000",
            s: "00000",
            ml: "00000"
        },
        g = {
            dttmrid: L(h),
            kystnmp: L(c),
            bsragnt: "",
            entityidmd5: "",
            ssn: "NA",
            lcl: "NA",
            hst: "0000",
            athv: "0001",
            bid: "",
            uid: "",
            bsrorgn: "0",
            nh: "000000",
            nw: "000000",
            npd: "000000",
            act: "dflt",
            pto: "ABCDEF",
            src: "00",
            techtrm: "",
            dmn: "",
            stn: "",
            dtobj: u,
            tidx: r
        };
    try {
        var l = t.navigator;
        g.bsragnt = l.userAgent, g.bid = l.userAgent.replace(/\D+/g, "")
    } catch (t) {
        g.techtrm += "navigator_"
    }
    try {
        var f = void 0 !== t.screen ? t.screen : {
            width: 0,
            height: 0,
            pixelDepth: 0
        };
        void 0 !== f.height && (g.nh = B(f.height, 6, 0)), void 0 !== f.width && (g.nw = B(f.width, 6, 0)), void 0 !== f.pixelDepth && (g.npd = B(f.pixelDepth, 6, 0))
    } catch (t) {
        g.techtrm += "screen_"
    }
    try {
        void 0 !== t.sessionStorage ? g.ssn = "YY" : g.ssn = "NA"
    } catch (t) {
        g.techtrm += "sessnstorg_"
    }
    try {
        void 0 !== t.localStorage ? g.lcl = "YY" : g.lcl = "NA"
    } catch (t) {
        g.techtrm += "loclstrg_"
    }
    try {
        void 0 !== t.history ? g.hst = B(history.length, 4, 0) : g.hst = "0000"
    } catch (t) {
        g.techtrm += "hstry_"
    }
    try {
        var y = new URL(t.location.origin);
        g.bsrorgn = y.origin, g.dmn = g.bsrorgn.replace(/[^A-Za-z0-9]/gi, "")
    } catch (t) {
        g.techtrm += "URL-origin_"
    }
    g.uid = g.bid + g.nh + g.nw + g.npd;
    var m = Uint8Array,
        v = Uint32Array,
        p = Math.pow,
        w = new v(8),
        b = [],
        S = new v(64);

    function k(t) {
        return (t - (0 | t)) * p(2, 32) | 0
    }
    for (var A = 2, j = 0; j < 64;) {
        for (var C = !0, M = 2; M <= A / 2; M++) A % M == 0 && (C = !1);
        C && (j < 8 && (w[j] = k(p(A, .5))), b[j] = k(p(A, 1 / 3)), j++), A++
    }
    var x = !!new m(new v([1]).buffer)[0];

    function D() {
        e = ""
    }

    function N(t) {
        return x ? t >>> 24 | (t >>> 16 & 255) << 8 | (65280 & t) << 8 | t << 24 : t
    }

    function Y(t, n) {
        return t >>> n | t << 32 - n
    }
    const H = new TextEncoder("utf-8");

    function U(t) {
        return function(t) {
            var n, r = w.slice(),
                a = t.length,
                e = 8 * a,
                i = 512 - (e + 64) % 512 - 1 + e + 65,
                o = new m(i / 8),
                h = new v(o.buffer);
            o.set(t, 0), o[a] = 128, h[h.length - 1] = N(e);
            for (var s = 0; s < i / 32; s += 16) {
                var c = r.slice();
                for (n = 0; n < 64; n++) {
                    var d;
                    if (n < 16) d = N(h[s + n]);
                    else {
                        var u = S[n - 15],
                            g = S[n - 2];
                        d = S[n - 7] + S[n - 16] + (Y(u, 7) ^ Y(u, 18) ^ u >>> 3) + (Y(g, 17) ^ Y(g, 19) ^ g >>> 10)
                    }
                    S[n] = d |= 0;
                    for (var l = (Y(c[4], 6) ^ Y(c[4], 11) ^ Y(c[4], 25)) + (c[4] & c[5] ^ ~c[4] & c[6]) + c[7] + d + b[n], f = (Y(c[0], 2) ^ Y(c[0], 13) ^ Y(c[0], 22)) + (c[0] & c[1] ^ c[2] & (c[0] ^ c[1])), y = 7; y > 0; y--) c[y] = c[y - 1];
                    c[0] = l + f | 0, c[4] = c[4] + l | 0
                }
                for (n = 0; n < 8; n++) r[n] = r[n] + c[n] | 0
            }
            return new m(new v(r.map((function(t) {
                return N(t)
            }))).buffer)
        }(H.encode(t)).reduce(((t, n) => t + ("00" + n.toString(16)).substr(-2)), "")
    }
    var E = function(t) {
        var n = function(t) {
            for (var n, r = "0123456789ABCDEF", a = "", e = 0; e < t.length; e++) n = t.charCodeAt(e), a += r.charAt(n >>> 4 & 15) + r.charAt(15 & n);
            return a
        }(function(t) {
            for (var n = "", r = 0; r < 32 * t.length; r += 8) n += String.fromCharCode(t[r >> 5] >>> r % 32 & 255);
            return n
        }(function(t, n) {
            t[n >> 5] |= 128 << n % 32, t[14 + (n + 64 >>> 9 << 4)] = n;
            for (var r = 1732584193, a = -271733879, e = -1732584194, i = 271733878, o = 0; o < t.length; o += 16) {
                var h = r,
                    s = a,
                    c = e,
                    d = i;
                a = T(a = T(a = T(a = T(a = O(a = O(a = O(a = O(a = J(a = J(a = J(a = J(a = F(a = F(a = F(a = F(a, e = F(e, i = F(i, r = F(r, a, e, i, t[o + 0], 7, -680876936), a, e, t[o + 1], 12, -389564586), r, a, t[o + 2], 17, 606105819), i, r, t[o + 3], 22, -1044525330), e = F(e, i = F(i, r = F(r, a, e, i, t[o + 4], 7, -176418897), a, e, t[o + 5], 12, 1200080426), r, a, t[o + 6], 17, -1473231341), i, r, t[o + 7], 22, -45705983), e = F(e, i = F(i, r = F(r, a, e, i, t[o + 8], 7, 1770035416), a, e, t[o + 9], 12, -1958414417), r, a, t[o + 10], 17, -42063), i, r, t[o + 11], 22, -1990404162), e = F(e, i = F(i, r = F(r, a, e, i, t[o + 12], 7, 1804603682), a, e, t[o + 13], 12, -40341101), r, a, t[o + 14], 17, -1502002290), i, r, t[o + 15], 22, 1236535329), e = J(e, i = J(i, r = J(r, a, e, i, t[o + 1], 5, -165796510), a, e, t[o + 6], 9, -1069501632), r, a, t[o + 11], 14, 643717713), i, r, t[o + 0], 20, -373897302), e = J(e, i = J(i, r = J(r, a, e, i, t[o + 5], 5, -701558691), a, e, t[o + 10], 9, 38016083), r, a, t[o + 15], 14, -660478335), i, r, t[o + 4], 20, -405537848), e = J(e, i = J(i, r = J(r, a, e, i, t[o + 9], 5, 568446438), a, e, t[o + 14], 9, -1019803690), r, a, t[o + 3], 14, -187363961), i, r, t[o + 8], 20, 1163531501), e = J(e, i = J(i, r = J(r, a, e, i, t[o + 13], 5, -1444681467), a, e, t[o + 2], 9, -51403784), r, a, t[o + 7], 14, 1735328473), i, r, t[o + 12], 20, -1926607734), e = O(e, i = O(i, r = O(r, a, e, i, t[o + 5], 4, -378558), a, e, t[o + 8], 11, -2022574463), r, a, t[o + 11], 16, 1839030562), i, r, t[o + 14], 23, -35309556), e = O(e, i = O(i, r = O(r, a, e, i, t[o + 1], 4, -1530992060), a, e, t[o + 4], 11, 1272893353), r, a, t[o + 7], 16, -155497632), i, r, t[o + 10], 23, -1094730640), e = O(e, i = O(i, r = O(r, a, e, i, t[o + 13], 4, 681279174), a, e, t[o + 0], 11, -358537222), r, a, t[o + 3], 16, -722521979), i, r, t[o + 6], 23, 76029189), e = O(e, i = O(i, r = O(r, a, e, i, t[o + 9], 4, -640364487), a, e, t[o + 12], 11, -421815835), r, a, t[o + 15], 16, 530742520), i, r, t[o + 2], 23, -995338651), e = T(e, i = T(i, r = T(r, a, e, i, t[o + 0], 6, -198630844), a, e, t[o + 7], 10, 1126891415), r, a, t[o + 14], 15, -1416354905), i, r, t[o + 5], 21, -57434055), e = T(e, i = T(i, r = T(r, a, e, i, t[o + 12], 6, 1700485571), a, e, t[o + 3], 10, -1894986606), r, a, t[o + 10], 15, -1051523), i, r, t[o + 1], 21, -2054922799), e = T(e, i = T(i, r = T(r, a, e, i, t[o + 8], 6, 1873313359), a, e, t[o + 15], 10, -30611744), r, a, t[o + 6], 15, -1560198380), i, r, t[o + 13], 21, 1309151649), e = T(e, i = T(i, r = T(r, a, e, i, t[o + 4], 6, -145523070), a, e, t[o + 11], 10, -1120210379), r, a, t[o + 2], 15, 718787259), i, r, t[o + 9], 21, -343485551), r = I(r, h), a = I(a, s), e = I(e, c), i = I(i, d)
            }
            return Array(r, a, e, i)
        }(function(t) {
            for (var n = Array(t.length >> 2), r = 0; r < n.length; r++) n[r] = 0;
            for (r = 0; r < 8 * t.length; r += 8) n[r >> 5] |= (255 & t.charCodeAt(r / 8)) << r % 32;
            return n
        }(t), 8 * t.length)));
        return n.toLowerCase()
    };

    function _(t, n, r, a, e, i) {
        return I(function(t, n) {
            return t << n | t >>> 32 - n
        }(I(I(n, t), I(a, i)), e), r)
    }

    function F(t, n, r, a, e, i, o) {
        return _(n & r | ~n & a, t, n, e, i, o)
    }

    function J(t, n, r, a, e, i, o) {
        return _(n & a | r & ~a, t, n, e, i, o)
    }

    function O(t, n, r, a, e, i, o) {
        return _(n ^ r ^ a, t, n, e, i, o)
    }

    function T(t, n, r, a, e, i, o) {
        return _(r ^ (n | ~a), t, n, e, i, o)
    }

    function I(t, n) {
        var r = (65535 & t) + (65535 & n);
        return (t >> 16) + (n >> 16) + (r >> 16) << 16 | 65535 & r
    }

    function B(t, n, r) {
        return r = r || "0", (t += "").length >= n ? t : new Array(n - t.length + 1).join(r) + t
    }

    function L(t) {
        let n, r = t.length;
        for (; r > 0;) n = Math.floor(Math.random() * r), r--, [t[r], t[n]] = [t[n], t[r]];
        return t
    }

    function R(t, n) {
        return t = Math.ceil(t), n = Math.floor(n), Math.floor(Math.random() * (n - t + 1)) + t
    }

    function q(t, r) {
        var h = new Date,
            s = new Date(r.data.dt);
        a = 1, n = Math.ceil((s.getTime() - h.getTime()) / 1e3), g.stn = r.data.tn, 1 == t.ndauth || "lgn" == t.actmn || (e = r.data.tn, clearInterval(o), o = setInterval(D, i))
    }
    var K = async function(t = {}) {
        r++, g.act = void 0 !== t.act && t.act ? t.act : "dflt", g.pto = void 0 !== t.pto && t.pto ? t.pto : "ABCDEF", g.src = void 0 !== t.src && t.src ? t.src : 2, g.actmn = void 0 !== t.actmn && t.actmn ? t.actmn : "", g.ndauth = void 0 !== t.ndauth && t.ndauth ? t.ndauth : 0, 1 == g.ndauth || "lgn" == g.act ? g.stn = g.stn : g.stn = e, g.dtkymp = s, g.kystmp = d, g.datetimeshflarr = L(h), g.kystnshflidarr = L(c), g.dtobj = function(t) {
            try {
                var r = new Date;
                return a && n && r.setSeconds(r.getSeconds() + n), t.Y = B(r.getFullYear(), 5, "0"), t.m = B(r.getMonth() + 1, 5, "0"), t.d = B(r.getDate(), 5, "0"), t.H = B(r.getHours(), 5, "0"), t.i = B(r.getMinutes(), 5, "0"), t.s = B(r.getSeconds(), 5, "0"), t.ml = B(r.getMilliseconds(), 5, "0"), t
            } catch (n) {
                return t
            }
        }(u), g.entityid = t.entityid, g.entityidmd5 = E(t.entityid), g.hashkyidx = R(1, h.length - 2), g.secndhashkyidx = R(2, c.length - 2), g.hashky = "", g.hashkyval = "", g.hash250ky = "", g.hash250val = "";
        for (var i = 1; i <= h.length; i++) i <= g.hashkyidx ? (g.hashky += g.datetimeshflarr[i - 1].toString(), g.hashkyval += g.dtobj[s[g.datetimeshflarr[i - 1]]].toString()) : (g.hash250ky += g.datetimeshflarr[i - 1].toString(), g.hash250val += g.dtobj[s[g.datetimeshflarr[i - 1]]].toString());
        for (i = 1; i <= c.length; i++) i <= g.secndhashkyidx ? (g.hash250ky += g.kystnshflidarr[i - 1].toString(), g.hash250val += g[d[g.kystnshflidarr[i - 1]]].toString()) : (g.hashky += g.kystnshflidarr[i - 1].toString(), g.hashkyval += g[d[g.kystnshflidarr[i - 1]]].toString());
        return g.hashstr = U(g.hashkyval), g.hmacstr = await async function(t, n) {
            const r = t => new Uint8Array([...unescape(encodeURIComponent(t))].map((t => t.charCodeAt(0)))),
                a = r(t),
                e = r(n),
                i = await crypto.subtle.importKey("raw", a, {
                    name: "HMAC",
                    hash: "SHA-256"
                }, !0, ["sign"]),
                o = await crypto.subtle.sign("HMAC", i, e);
            return [...new Uint8Array(o)].map((t => t.toString(16).padStart(2, "0"))).join("")
        }(g.hash250val, g.entityidmd5.toString() + g.entityid.toString()), g.enc = B(g.hashkyidx, 2, 0).toString() + g.hashky.toString() + g.hash250ky.toString() + B(g.secndhashkyidx, 2, 0).toString(), g.tmr = g.dtobj.Y.toString() + g.dtobj.m.toString() + g.dtobj.d.toString() + g.dtobj.H.toString() + g.dtobj.i.toString() + g.dtobj.s.toString() + g.dtobj.ml.toString(), g.rowdt = {
            bsragnt: g.bsragnt,
            entityidmd5: g.entityidmd5,
            ssn: g.ssn,
            lcl: g.lcl,
            hst: g.hst,
            athv: g.athv,
            bid: g.bid,
            uid: g.uid,
            nh: g.nh,
            nw: g.nw,
            npd: g.npd,
            act: g.act,
            pto: g.pto,
            src: g.src,
            bsrorgn: g.bsrorgn,
            techtrm: g.techtrm,
            dmn: g.dmn,
            stn: g.stn,
            actmn: g.actmn,
            ndauth: g.ndauth,
            tc: r
        }, {
            data: {
                src: g.src,
                entityid: g.entityid,
                qryprm: g.entityid + "-" + g.tmr + "-" + g.uid,
                authtkn: g.hashstr + "." + btoa(JSON.stringify({
                    enc: g.enc,
                    tmr: g.tmr,
                    rowdt: g.rowdt
                })) + "." + g.hmacstr
            }
        }
    };
    return {
        getauthobj: async function(t = {}) {
            if (t.ndauth = void 0 !== t.ndauth && t.ndauth ? t.ndauth : 0, "lgn" === t.act || t.ndauth || !a) {
                var n = JSON.parse(JSON.stringify(t));
                n.act = "gtath", n.pto = "", n.actmn = t.act;
                var r = await K(n);
                return await async function(t, n) {
                    const r = await fetch(g.bsrorgn + "/y805gE5FGWSdjKNjEAhJ?act=gtath&ky=" + n.data.qryprm + "&source=" + n.data.src, {
                        method: "POST",
                        cache: "no-cache",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        referrerPolicy: "no-referrer",
                        body: JSON.stringify(n)
                    });
                    var a = await r.json();
                    return q(t, a), a
                }(n, r), await K(t)
            }
            return await K(t)
        }
    }
}(window);
authlogin.getauthobj({
    entityid: "entityid",
    act: "dflt",
    src: "101010"
});