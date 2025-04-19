"use strict";
(self.webpackChunkjustdial = self.webpackChunkjustdial || []).push([
    [1215], {
        45552: (e, t, a) => {
            a.d(t, {
                Id: () => l,
                fY: () => i,
                l: () => o,
                mh: () => n,
                rd: () => r
            });
            var n = function() {
                    var e = document.getElementById("root");
                    e && e.classList.add("bdyFixed")
                },
                i = function() {
                    var e = document.getElementById("root");
                    e && e.classList.remove("bdyFixed")
                },
                o = function() {
                    window.requestAnimationFrame((function() {
                        var e = document.getElementById("root"),
                            t = "-" + window.scrollY + "px";
                        e && (e.style.position = "fixed", e.style.top = t)
                    }))
                },
                l = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).preserveScrollPosition,
                        t = void 0 === e || e;
                    window.requestAnimationFrame((function() {
                        var e = document.getElementById("root"),
                            a = e.style.top;
                        e && (e.style.position = "relative", e.style.top = "", t && window.scrollTo({
                            left: 0,
                            top: -1 * parseInt(a || 1, 10),
                            behavior: "auto"
                        }))
                    }))
                },
                r = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    window.requestAnimationFrame((function() {
                        var t = document.getElementById("appWrapper");
                        t && (!0 === e ? t.classList.add("blurbodyonly") : t.classList.remove("blurbodyonly"))
                    }))
                }
        },
        51215: (e, t, a) => {
            a.d(t, {
                A: () => k
            });
            var n = a(96540),
                i = a(80083),
                o = a(57757),
                l = a(17201),
                r = a(70771),
                c = a(97553),
                d = a(65977),
                p = a(56404),
                s = a(39191),
                m = a(68118),
                u = a(27105),
                v = a(41569),
                b = a(49621),
                w = a(3685),
                f = a(45552),
                _ = a(26565),
                y = a(80467),
                g = a(49392),
                h = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                },
                A = function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function(e, t) {
                        var a = [],
                            n = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var l, r = e[Symbol.iterator](); !(n = (l = r.next()).done) && (a.push(l.value), !t || a.length !== t); n = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !n && r.return && r.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return a
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                },
                C = ["rsltpge"];
            const k = (0, i.Ng)((function(e) {
                return {
                    callerDialupConfig: e.app.callerDialupConfig,
                    leadGenerate: e.app.leadGenerate
                }
            }), (function(e) {
                return {
                    openCallerDialupAction: function(t) {
                        return e((0, o.bj)(t))
                    },
                    closeCallerDialupAction: function(t) {
                        return e((0, o.h5)(t))
                    },
                    resetCallerDialupAction: function(t) {
                        return e((0, o.A1)(t))
                    },
                    launchLeadCollectionAction: function(t) {
                        return e((0, o.a)(t))
                    },
                    updateContactListAction: function(t) {
                        return e((0, o.Az)(t))
                    }
                }
            }))((0, n.memo)((function(e) {
                var t = e.callerDialupConfig,
                    a = e.closeCallerDialupAction,
                    i = e.resetCallerDialupAction,
                    o = e.ll,
                    k = e.launchLeadCollectionAction,
                    j = e.leadGenerate,
                    D = e.fromPage,
                    I = e.updateContactListAction,
                    L = e.location,
                    N = (0, n.useState)(null),
                    P = A(N, 2),
                    E = (P[0], P[1]),
                    T = (0, n.useState)(!1),
                    S = A(T, 2),
                    x = S[0],
                    B = S[1],
                    V = function() {
                        if ("rsltpge" !== D) {
                            var e;
                            if ((e = b.A.get("bddataDtls")) && Object.keys(e).length > 0) {
                                var t = e.frmpg,
                                    a = void 0 === t ? "" : t;
                                [y.Z, y.M].includes(a) && b.A.set("bddataDtls", h({}, e, {
                                    frmpg: L.pathname.includes("/jdmart") ? "catalogue" : "dtlpg"
                                }))
                            }
                        }
                    },
                    H = function() {
                        return b.A.get("rsltpge" === D ? "bddataRslt" : "bddataDtls")
                    },
                    M = function(a, n) {
                        var i = a.noToDial,
                            l = void 0 === i ? "" : i,
                            c = a.callType,
                            p = void 0 === c ? "an" : c,
                            s = a.gotVn,
                            b = void 0 !== s && s,
                            w = n.city,
                            f = n.datacity,
                            _ = n.askmobile,
                            y = n.keyword,
                            A = n.companyname,
                            k = n.b2bpg,
                            j = void 0 === k ? 0 : k,
                            I = n.area,
                            N = n.contactList.vnumber,
                            P = n.docid,
                            E = (n.pid, n.paidstatus),
                            T = void 0 === E ? 0 : E,
                            S = n.ncatid,
                            x = void 0 === S ? "" : S,
                            B = n.sponsoredcall,
                            M = n.individualNumber,
                            O = n.barea,
                            z = n.bcity,
                            F = n.bd;
                        if (l) {
                            var W = o;
                            "catalogueHome" !== D || t.ncatid || "footer" !== t.type ? "catalogueHome" !== D || t.ncatid || "header" !== t.type || (W = "hm_b2bcataloguetop") : W = "hm_b2bcataloguefooter", t.ll && (W = t.ll);
                            var J = "dvn" === p,
                                q = "vn" === p || J,
                                R = H();
                            (0, d._K)({
                                docid: P,
                                keyword: y,
                                askmobile: _,
                                datacity: f,
                                city: w,
                                b2bpg: j,
                                companyname: A,
                                area: I,
                                isDvnCall: J,
                                isVnCall: q,
                                noToDial: l,
                                vnumber: q ? l : N,
                                ll: W,
                                li: t.li,
                                gotVn: b,
                                pstatus: T,
                                ncatid: x || R.ncatid,
                                individualNumber: M,
                                searchId: t.searchId || "",
                                pid: t.pid || "",
                                pname: t.pname || "",
                                position: t.position || "",
                                leadtype: t.leadtype || "call",
                                pagename: t.pagename || "",
                                ds: t.ds || "",
                                jtkr: t.jtkr || "",
                                pincode: t.pincode,
                                from: t.from,
                                eventData: t.eventData || e.eventData || {},
                                interactionHeader: t.interactionHeader,
                                interactionText: t.interactionText,
                                productName: t.productName,
                                sellerName: t.sellerName,
                                vid: t.vid || e.vid,
                                location: L,
                                barea: O,
                                bcity: z,
                                bd: F,
                                nctB2b: t.nctB2b,
                                callType: p,
                                dlb2b: t.dlb2b,
                                mp: t.mp
                            }), B || function(e) {
                                var a = e.askmobile,
                                    n = e.callType,
                                    i = H();
                                t && t.ll && ["dtlpg_footer", "banner_rsltpge", "Social_Feed"].includes(t.ll) && (i = h({}, i, {
                                    frmpg: t.ll
                                })), 1 === parseInt(a, 10) && u.A.get("/api/" + v.A.LeadWriteApi + "sms_email.php", {
                                    params: h({}, i, {
                                        is_verified: 1,
                                        calltype: n,
                                        position: t.position || "",
                                        leadtype: t.leadtype || "call",
                                        pagename: t.pagename || "",
                                        pid: t.pid || "",
                                        pname: t.pname || ""
                                    })
                                }), V()
                            }({
                                askmobile: _,
                                callType: p
                            }), (0, r.A)(l), C.includes(D) && !(0, m.x3)() && g.A.set("numberDialedNct", x), "dtlspge" === D && g.A.set("numberDialedDocid", P)
                        }
                    },
                    O = function() {
                        for (var a = arguments.length, n = Array(a), i = 0; i < a; i++) n[i] = arguments[i];
                        var l = n[0],
                            r = void 0 === l ? "" : l,
                            d = n[1],
                            p = t.contactList,
                            s = void 0 === p ? {} : p;
                        "useNumberFromDvnApiResp" === r && (s = d, I({
                            contactList: d
                        }));
                        var m = o;
                        if ("catalogueHome" !== D || t.ncatid || "footer" !== t.type ? "catalogueHome" !== D || t.ncatid || "header" !== t.type || (m = "hm_b2bcataloguetop") : m = "hm_b2bcataloguefooter", t.ll && (m = t.ll), "AbortError" === r && (0, c.A)({
                                ll: m,
                                li: "vn-abort",
                                docid: t.docid || "",
                                nid: t.ncatid || "",
                                searchId: t.searchId,
                                pid: t.pid || "",
                                pname: t.pname || "",
                                position: t.position,
                                cname: t.companyname,
                                paid: t.paidstatus,
                                ds: t.ds,
                                datacity: t.city,
                                spincode: t.pincode,
                                from: t.from
                            }), s.vnumber || s.list && 1 === s.list.length) M({
                            noToDial: s.list[0],
                            callType: s.vnumber ? "vn" : "an"
                        }, t);
                        else if (s.list && s.list.length > 1)
                            if (x) document.getElementById("appWrapper").classList.remove("blurbody"), B(!1);
                            else {
                                B(!0);
                                var u = window.jd.trackerParams && window.jd.trackerParams.vid ? window.jd.trackerParams.vid : "";
                                (0, c.A)({
                                    ll: t && t.ll ? t.ll || "" : m,
                                    li: "number_list",
                                    vid: u || e.vid || t.vid || "",
                                    docid: t.docid || "",
                                    nid: t.ncatid || "",
                                    searchId: t.searchId,
                                    pid: t.pid || "",
                                    pname: t.pname || "",
                                    position: t.position,
                                    cname: t.companyname,
                                    paid: t.paidstatus,
                                    ds: t.ds,
                                    spincode: t.pincode,
                                    from: t.from,
                                    event_data: t.eventData || e.eventData || {},
                                    city: t.city || ""
                                }), document.getElementById("appWrapper").classList.add("blurbody")
                            }
                    };
                return (0, n.useEffect)((function() {
                    (0, s.JgZ)().then((function(e) {
                        E(e.default)
                    }))
                }), []), (0, n.useEffect)((function() {
                    if (t.initCA) {
                        if (!t.allocateid && !1 === t.uplinkCall) throw k({
                            open: !0
                        }), new Error("Lead collect triggered - unreachable");
                        if (t.allocateid && !t.contactList.vnumber) {
                            var a = new _.A,
                                n = new window.AbortController,
                                i = n.signal;
                            setTimeout((function() {}), 1e3);
                            var l = o;
                            "catalogueHome" !== D || t.ncatid || "footer" !== t.type ? "catalogueHome" !== D || t.ncatid || "header" !== t.type || (l = "hm_b2bcataloguetop") : l = "hm_b2bcataloguefooter", t.ll && (l = t.ll);
                            var r = window.jd.trackerParams && window.jd.trackerParams.vid ? window.jd.trackerParams.vid : "";
                            (0, c.A)({
                                onPriority: !0,
                                ll: t && t.ll ? t.ll || "" : l,
                                li: "call_init",
                                calltype: "dvn",
                                vid: r || e.vid || t.vid || "",
                                docid: t.docid || "",
                                nid: t.ncatid || "",
                                searchId: t.searchId,
                                pid: t.pid || "",
                                pname: t.pname || "",
                                position: t.position,
                                cname: t.companyname,
                                paid: t.paidstatus,
                                ds: t.ds,
                                spincode: t.pincode,
                                from: t.from,
                                event_data: t.eventData || e.eventData || {},
                                city: t.city || ""
                            });
                            var d = H();
                            a.get("/api/" + v.A.IndiaJulyWriteApi + "callallocate.php", {
                                params: {
                                    allocateid: decodeURIComponent(t.allocateid),
                                    is_verified: (0, m.SM)() ? 1 : 0,
                                    ll: l,
                                    ncatid: t.ncatid || d.ncatid,
                                    bd: d.bd,
                                    searchId: t.searchId,
                                    pid: t.pid || "",
                                    pname: t.pname || "",
                                    deviceId: w.A.get("deviceId") || "",
                                    sieve: {
                                        name: "resultModel",
                                        selector: "makeCall",
                                        runInit: !1
                                    }
                                },
                                signal: i
                            }).then((function(e) {
                                e.main && 1 === e.main.cancall && e.main.vnumber ? M({
                                    noToDial: e.main.vnumber,
                                    callType: "dvn",
                                    gotVn: !!e.main.vnumber
                                }, t) : O("useNumberFromDvnApiResp", e.main)
                            })).catch((function(e) {
                                "AbortError" === e.error.name && O("AbortError")
                            }))
                        } else O()
                    }
                }), [t.initCA]), (0, n.useEffect)((function() {
                    !0 === j.open ? (0, f.mh)() : (0, f.fY)()
                }), [j.open]), (0, n.useEffect)((function() {
                    x ? (0, f.l)() : (0, f.Id)({
                        preserveScrollPosition: !0
                    })
                }), [x]), (0, n.useEffect)((function() {
                    return function() {
                        (0, f.Id)({
                            preserveScrollPosition: !1
                        }), document.getElementById("appWrapper") && document.getElementById("appWrapper").classList.remove("blurbody"), i()
                    }
                }), []), n.createElement(l.A, null, x && !j.open && n.createElement("div", {
                    className: x ? "calpop1" : "",
                    onClick: function(e) {
                        return function(e) {
                            e.stopPropagation(), B(!1), document.getElementById("appWrapper").classList.remove("blurbody"), a(), V()
                        }(e)
                    }
                }, n.createElement("div", {
                    className: x ? "calwpr1 dt" : "calwpr1"
                }, n.createElement("div", {
                    className: "tbcalWpr",
                    onClick: function(e) {
                        return e.stopPropagation()
                    }
                }, n.createElement("span", {
                    className: "tbcaltxt"
                }, (0, p.A)({
                    text: "Tap to Call"
                }))), n.createElement("ul", {
                    className: "calnbrwp"
                }, t.contactList.list && t.contactList.list.map((function(e, a) {
                    return n.createElement("li", {
                        key: e.split("_")[0],
                        onClick: function() {
                            return M({
                                noToDial: e,
                                callType: "" !== t.contactList.vnpos && t.contactList.vnpos === a + 1 ? "vn" : "an"
                            }, t)
                        }
                    }, e.split("_")[0])
                })))), n.createElement("span", {
                    className: x ? "cancelbtn dt" : "cancelbtn",
                    onClick: function() {
                        return V()
                    }
                }, (0, p.A)({
                    text: "Cancel"
                }))))
            })))
        },
        65977: (e, t, a) => {
            a.d(t, {
                a1: () => d,
                _K: () => m
            });
            var n = a(27105),
                i = a(68118),
                o = a(97553),
                l = a(41569);
            var r = a(67448),
                c = (a(27156), Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }),
                d = function(e) {
                    var t = e.docid,
                        a = e.companyname,
                        i = e.datacity,
                        o = e.city,
                        l = e.mobile,
                        r = e.askmobile,
                        c = void 0 === r ? "" : r,
                        d = e.b2bpg,
                        p = e.vnumber,
                        s = e.gotVn,
                        m = e.ll,
                        u = e.pstatus,
                        v = e.ncatid,
                        b = e.area,
                        w = e.isVnCall,
                        f = void 0 !== w && w,
                        _ = e.isDvnCall,
                        y = e.searchId,
                        g = e.position,
                        h = e.ds,
                        A = e.jtkr,
                        C = e.barea,
                        k = void 0 === C ? "" : C,
                        j = e.bcity,
                        D = void 0 === j ? "" : j,
                        I = e.bd,
                        L = e.isJdMart,
                        N = void 0 !== L && L,
                        P = e.nctB2b,
                        E = e.leadtype,
                        T = void 0 === E ? "" : E,
                        S = e.pagename,
                        x = void 0 === S ? "" : S,
                        B = e.callType,
                        V = e.pid,
                        H = void 0 === V ? "" : V,
                        M = e.pname,
                        O = void 0 === M ? "" : M,
                        z = document.querySelector("html").getAttribute("amp-call-done"),
                        F = {};
                    return F = {
                        et: window.et || "",
                        ct: Date.now()
                    }, new Promise((function(e, r) {
                        n.A.get("/api/php/appUserId/callDetails.php", {
                            params: {
                                contractid: t,
                                city: o || i || "",
                                datacity: i || "",
                                area: b,
                                companyName: a,
                                phoneNo: l,
                                vnumber: f && s ? l : p,
                                source: 1,
                                ask_mobile: c,
                                isDn: _ ? 1 : 0,
                                skipsieve: 1,
                                ll: m,
                                b2b: d || "b2b_prsltpg" === m || N ? 1 : 0,
                                pstatus: u,
                                ncatid: v,
                                searchId: y,
                                position: g,
                                pagename: x,
                                leadtype: T,
                                ds: h,
                                pid: H || "",
                                pname: O || "",
                                jtkr: A || "",
                                barea: k || "",
                                bcity: D || "",
                                bd: I || "",
                                vid: d || "b2b_prsltpg" === m || N ? 311 : 2,
                                nct_b2b: P,
                                calltype: B,
                                clkcl: window.jd.fromAMP && "1" !== z ? 1 : 0,
                                et: F ? F.et : "",
                                ct: F ? F.ct : ""
                            }
                        }).then((function(t) {
                            window.jd.fromAMP && document.querySelector("html").setAttribute("amp-call-done", 1), e(t)
                        }), (function(e) {
                            window.jd.fromAMP && document.querySelector("html").setAttribute("amp-call-done", 1), r(e)
                        })), window.et && (window.et = "")
                    }))
                },
                p = function(e) {
                    window.makevnLoginApiCAll(e)
                };
            var s = function(e) {
                    var t = e.isDirectCall,
                        a = void 0 !== t && t,
                        n = "",
                        o = "";
                    if (!(0, i.x3)()) {
                        var l = e.mobile,
                            r = e.data_city,
                            d = e.ctime,
                            s = void 0 === d ? "" : d,
                            m = e.docid,
                            u = e.isVnCall,
                            v = void 0 !== u && u;
                        if (o = l, -1 !== l.indexOf("-")) {
                            var b = l.split("-");
                            o = b[1]
                        }
                        var w = new Date;
                        n = s || w.getHours() + ":" + w.getMinutes() + ":" + w.getSeconds(), window.localStorage.setItem("vnNumberLoginData", JSON.stringify({
                            mobile: o,
                            docid: m,
                            isVnCall: v,
                            city: r,
                            ctime: n
                        }))
                    }
                    if (a) window.makevnLoginApiCAll && p(c({}, e, {
                        ctime: n,
                        mobile: o
                    }));
                    else var f = setInterval((function() {
                        window.makevnLoginApiCAll && (! function(e, t, a, n) {
                            window.__CALL__ = {
                                active: 1
                            };
                            var i = 0;
                            window.__CALL__.params = t, window.__CALL__.intervalRef = window.setInterval((function() {
                                i < n ? (i += 1, e(t)) : window.clearInterval(window.__CALL__.intervalRef)
                            }), a), window.__CALL__.onTabFocus = function() {
                                1 === window.__CALL__.active ? (e(window.__CALL__.params), window.__CALL__.active = 0) : window.__CALL__.active = 0
                            }
                        }(p, c({}, e, {
                            ctime: n,
                            mobile: o
                        }), 9e4, 2), clearInterval(f))
                    }), 500)
                },
                m = function(e) {
                    var t = e.location,
                        a = e.ll,
                        n = e.docid,
                        p = e.datacity,
                        m = e.city,
                        u = e.companyname,
                        v = e.keyword,
                        b = e.askmobile,
                        w = e.area,
                        f = e.b2bpg,
                        _ = void 0 === f ? 0 : f,
                        y = e.noToDial,
                        g = e.vnumber,
                        h = e.pstatus,
                        A = void 0 === h ? 0 : h,
                        C = e.ncatid,
                        k = e.individualNumber,
                        j = e.isVnCall,
                        D = void 0 !== j && j,
                        I = e.gotVn,
                        L = e.position,
                        N = e.searchId,
                        P = e.ds,
                        E = e.jtkr,
                        T = e.pincode,
                        S = e.from,
                        x = e.eventData,
                        B = e.interactionText,
                        V = e.interactionHeader,
                        H = e.sellerName,
                        M = e.productName,
                        O = e.barea,
                        z = e.bcity,
                        F = e.bd,
                        W = e.vid,
                        J = void 0 === W ? "" : W,
                        q = e.nctB2b,
                        R = e.leadtype,
                        Y = e.pagename,
                        G = e.callType,
                        Q = e.li,
                        K = e.dlb2b,
                        Z = e.isDvnCall,
                        U = e.pid,
                        X = void 0 === U ? "" : U,
                        $ = e.pname,
                        ee = void 0 === $ ? "" : $,
                        te = e.mp,
                        ae = void 0 === te ? "" : te,
                        ne = t && t.pathname.includes("/jdmart") ? 311 : "",
                        ie = window.jd.trackerParams && window.jd.trackerParams.vid ? window.jd.trackerParams.vid : ne,
                        oe = {
                            event: "callButtonClickEvent",
                            isVnCall: D,
                            isDn: Z ? 1 : 0,
                            docid: n,
                            companyname: u,
                            datacity: p,
                            vnumber: g.length > 0 ? 1 : 0,
                            ll: a,
                            pstatus: A,
                            ncatid: C,
                            env: "https://www.justdial.com" === window.location.origin ? "p" : "d",
                            version: l.A.VERSION,
                            b2b: K
                        };
                    if (window.dataLayer.push(oe), window.clevertap && window.clevertap.event.push("callanalyticallog", oe), "dtlpg" === a) {
                        var le = g.split("_")[0];
                        if (le = le.replace(/\+\(91\)-/g, "").split(","), g.split("_")[0] === y.split("_")[0]) {
                            try {
                                window.goog_report_conversion("P-9SCN2VvGoQjJLC5AM", 1016105228)
                            } catch (e) {}(0, i.x3)() || s({
                                mobile: y.split("_")[0],
                                city: m,
                                data_city: p || m,
                                ctime: "",
                                docid: n,
                                isVnCall: D,
                                isDvnCall: Z
                            })
                        } else try {
                            window.goog_report_conversion("DlpvCJqXvGoQjJLC5AM", 1016105228)
                        } catch (e) {}(0, i.x3)() && function(e) {
                            e.docid, e.call, e.cta;
                            var t = new Date;
                            t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), new Promise((function(e, t) {
                                e()
                            }))
                        }({
                            docid: n,
                            call: y.split("_")[0],
                            cta: "call"
                        })
                    }
                    if ("dtlpg" !== a)
                        if (D || g.split("_")[0] === y.split("_")[0]) {
                            try {
                                window.goog_report_conversion("t1thCKm60YABEIySwuQD", 1016105228)
                            } catch (e) {}
                            if (!(0, i.x3)()) {
                                var re = y.split("_")[0].replace(/\+\(91\)-/g, "").split(",");
                                s({
                                    mobile: re[0],
                                    data_city: p || m,
                                    ctime: "",
                                    docid: n,
                                    isVnCall: D,
                                    isDvnCall: Z
                                })
                            }
                        } else try {
                            window.goog_report_conversion("phobCICv0YABEIySwuQD", 1016105228)
                        } catch (e) {}
                    var ce = "Call",
                        de = {};
                    "Call_number" === (ce = window.jd.trackerParams && 1 === window.jd.trackerParams.nopriceCall ? "call_noprice" : 1 === k ? "Call_number" : window.jd.trackerParams && "call_pp" === window.jd.trackerParams.call_pp ? "Call_pp" : window.jd.trackerParams && "call_products" === window.jd.trackerParams.call_pp ? "call_products" : window.jd.trackerParams && "call_topcard" === window.jd.trackerParams.call_pp ? "call_topcard" : window.jd.trackerParams && "call_floating" === window.jd.trackerParams.call_pp ? "call_floating" : window.jd.trackerParams && "call_vendor" === window.jd.trackerParams.call_pp ? "call_vendor" : window.jd.trackerParams && "call_pop_up" === window.jd.trackerParams.call_pp ? "call_pop_up" : window.jd.trackerParams && window.jd.trackerParams.tabname && ("dtlpg_footer" === a || "gallery" === a) ? "Call_" + window.jd.trackerParams.tabname : "Call") && "dtlpg" === a ? (de = c({}, (0, r.z)({
                        event: "bzdet_page_interaction",
                        ctaName: "phone_number",
                        businessName: u
                    })), window.clevertap && window.clevertap.event.push("callnumber_dtlpg", {
                        event: "bzdet_page_interaction",
                        ctaName: "phone_number",
                        businessName: u
                    })) : "call_topcard" === ce && "b2b_catalogue" === a ? de = c({}, (0, r.z)({
                        event: "catalouge_page_interaction",
                        ctaName: " call_topcard",
                        sellerName: u
                    })) : "call_floating" === ce && "b2b_catalogue" === a ? de = c({}, (0, r.z)({
                        event: "catalouge_page_interaction",
                        ctaName: " call_footer",
                        sellerName: u
                    })) : "call_products" === ce && "b2b_catalogue" === a ? de = c({}, (0, r.z)({
                        event: "catalouge_page_interaction",
                        ctaName: " call_products",
                        sellerName: u
                    })) : "call_pp" === ce && "b2b_catalogue" === a ? de = c({}, (0, r.z)({
                        event: "cta_click",
                        ctaName: "call",
                        ctaHeader: u,
                        ctaPosition: "CTA"
                    })) : "b2b_prsltpg" === a ? de = c({}, (0, r.z)({
                        event: "cta_click",
                        ctaName: "call",
                        interactionType: "call_now",
                        interactionHeader: V,
                        interactionText: B
                    })) : "b2b_pdp" === a || "b2b_pdp_gallery" === a ? de = c({}, (0, r.z)({
                        event: "pid_page_interaction",
                        ctaName: "call",
                        interactionType: "call_now",
                        interactionHeader: V,
                        interactionText: B,
                        sellerName: H,
                        productName: M
                    })) : "b2b_srsltpg" === a && (de = c({}, (0, r.z)({
                        event: "cta_click",
                        ctaName: "call",
                        interactionType: "call_now",
                        interactionHeader: V,
                        interactionText: B,
                        sellerName: H,
                        productName: M
                    }))), (0, o.A)(c({
                        onPriority: !0,
                        ll: a,
                        li: Q || ce,
                        vid: ie || J,
                        nid: C || "",
                        docid: n || "",
                        position: L || "",
                        searchId: N || "",
                        city: m || "",
                        datacity: p || "",
                        ds: P || "",
                        paid: A,
                        cname: u,
                        spincode: T,
                        from: S,
                        event_data: x,
                        mp: ae
                    }, D && {
                        calltype: "dvn"
                    }, de)), d({
                        docid: n,
                        area: w,
                        companyname: u,
                        askmobile: b,
                        keyword: v,
                        b2bpg: _,
                        gotVn: I,
                        mobile: y.split("_")[0],
                        datacity: p,
                        city: m,
                        vnumber: g,
                        ll: a,
                        pstatus: A,
                        ncatid: C,
                        isVnCall: D,
                        isDvnCall: Z,
                        searchId: N,
                        position: L,
                        leadtype: R,
                        pagename: Y,
                        ds: P,
                        jtkr: E,
                        barea: O,
                        bcity: z,
                        bd: F,
                        isJdMart: ne,
                        nctB2b: q,
                        callType: G,
                        pid: X,
                        pname: ee
                    })
                }
        },
        70771: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            var n = a(53004),
                i = function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function(e, t) {
                        var a = [],
                            n = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var l, r = e[Symbol.iterator](); !(n = (l = r.next()).done) && (a.push(l.value), !t || a.length !== t); n = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !n && r.return && r.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return a
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                };

            function o(e) {
                var t = e.split("_"),
                    a = i(t, 2),
                    o = a[0],
                    l = a[1];
                o = o.replace(",", "").trim(), "vndtlpg" === l && (o.startsWith(0) && (o = o.substr(1, o.length)), o = "+91" + o), window.myjio ? (0, n.wh)(o) : window.location.href = "tel:" + o
            }
        },
        80467: (e, t, a) => {
            a.d(t, {
                M: () => i,
                Z: () => n
            });
            var n = "b2b_catalogue_3dots",
                i = "dtlpg_3dots"
        }
    }
]);