"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1979], {
        21979: function(a, b, c) {
            c.r(b), c.d(b, {
                default: function() {
                    return l
                }
            });
            var d = c(40872),
                e = c(85893),
                f = c(41664),
                g = c.n(f),
                h = c(85313),
                i = c(56064),
                j = c(90091),
                k = c(42158);

            function l(a) {
                var b = (0, d.Z)({}, a),
                    c = (0, i.v9)(function(a) {
                        var b;
                        return null === (b = a.appState) || void 0 === b ? void 0 : b.userLocation
                    }) || {},
                    f = c.city || b.ct,
                    l = c.area || b.area,
                    m = (null == b ? void 0 : b.islang) || "en",
                    n = b.impressionTracker,
                    o = function(a, c) {
                        var d = "web_vertical_" + a.text;
                        b.tracker({
                            li: d,
                            ll: "hmpge",
                            navigation: "1",
                            lpageval: "hmpge",
                            contracts: [],
                            gTag: {
                                event: "menu_click",
                                menu_position: "Web vertical",
                                menu_name: d,
                                menu_header: c,
                                sub_menu_name: ""
                            }
                        })
                    };
                return (null == b ? void 0 : b.data) && Object.keys(b.data).length > 0 ? (0, e.jsx)("div", {
                    className: "home_rowbox home_row_5 home_billtravel mb-50",
                    "data-tracker-id": b.displayType,
                    ref: function(a) {
                        var c;
                        return n.register(a, {
                            li: "web_".concat(b.displayType, "_impression"),
                            threshold: (null === (c = b.data) || void 0 === c ? void 0 : c.length) > 1 ? "0.25" : "0.5"
                        })
                    },
                    children: (0, e.jsx)("div", {
                        className: "home_billtravel_outer",
                        children: Object.values(b.data).map(function(a, c) {
                            var d, i, n, p = m && "en" != m ? null == a ? void 0 : null === (d = a.headinglang) || void 0 === d ? void 0 : d[m] : null == a ? void 0 : a.heading_ln,
                                q = m && "en" != m ? null == a ? void 0 : null === (i = a.descriptionlang) || void 0 === i ? void 0 : i[m] : null == a ? void 0 : a.description_ln,
                                r = m && "en" != m ? null == a ? void 0 : null === (n = a.exploremore_lang) || void 0 === n ? void 0 : n[m] : null == a ? void 0 : a.exploremoretext_ln,
                                s = null == a ? void 0 : a.explore_more;
                            s = s && s.length > 0 ? (0, h.KB)(l, f, "", "", s, !0) : (0, h.KB)(l, f, "", "", "/", !0);
                            try {
                                return (0, e.jsxs)("div", {
                                    className: "home_billtravel_ul",
                                    children: [(0, e.jsx)("div", {
                                        className: "home_billtravel_left",
                                        children: (0, e.jsxs)("div", {
                                            className: "home_billtravel_li",
                                            children: [(0, e.jsxs)("h2", {
                                                className: "font25 color111 fw700 home_billtravel_hdtxt",
                                                children: [(0, e.jsx)("span", {
                                                    className: "pr-5",
                                                    children: p
                                                }), " ", (null == a ? void 0 : a.heading) == "Bills & Recharge" ? (0, e.jsx)("img", {
                                                    className: "home_billtravel_img ",
                                                    title: "bills recharge",
                                                    alt: "bills recharge",
                                                    src: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bharat_billpay_Newlogo.svg"
                                                }) : null]
                                            }), (0, e.jsx)("div", {
                                                className: "font13 color333 fw400 home_billtravel_subtxt",
                                                children: q
                                            }), (0, e.jsx)("a", {
                                                href: s,
                                                className: "font14 color007 fw500 home_billtravel_anchortxt mt-10 pointer anchor jdwrapper",
                                                "aria-label": "Explore more in ".concat(p),
                                                onClick: function() {
                                                    (0, j.jdTracker)({
                                                        li: "web_".concat(null == p ? void 0 : p.toLowerCase(), "_exploremore"),
                                                        ll: "hmpge",
                                                        navigation: "1",
                                                        lpageval: "hmpge",
                                                        contracts: [],
                                                        search_id: "",
                                                        ncatid: "",
                                                        gTag: {
                                                            event: "menu_click",
                                                            menu_position: "Web Vertical",
                                                            menu_name: p,
                                                            menu_header: p,
                                                            sub_menu_name: ""
                                                        }
                                                    })
                                                },
                                                children: r
                                            })]
                                        })
                                    }), (0, e.jsx)("div", {
                                        className: "home_billtravel_right",
                                        children: Object.values(null == b ? void 0 : b.data[c].data).map(function(d, i) {
                                            var j, n, q = d + i + c,
                                                r = null == b ? void 0 : b.data[c].data[i].path,
                                                s = m && "en" != m ? null == d ? void 0 : null === (j = d.ln) || void 0 === j ? void 0 : j[m] : null == d ? void 0 : d.text_ln,
                                                t = s;
                                            r = r ? (0, h.KB)(l, f, "", "", r, !0) : (0, h.KB)(l, f, "", "", "/", !0);
                                            var u = (null == d ? void 0 : d.title) || t,
                                                v = m && "en" != m ? null == d ? void 0 : null === (n = d.subtextlang) || void 0 === n ? void 0 : n[m] : null == d ? void 0 : d.subtext_ln,
                                                w = null == d ? void 0 : d.inapp;
                                            return 1 == a.inapp ? (0, e.jsx)(g(), {
                                                prefetch: !1,
                                                href: w || (null == b ? void 0 : b.bot) ? r : "".concat(r),
                                                children: (0, e.jsxs)("a", {
                                                    className: "home_billtravel_li imageZoom text_center",
                                                    title: t,
                                                    onClick: function(a) {
                                                        var d;
                                                        return o(null === (d = b.data[c]) || void 0 === d ? void 0 : d.data[i], p)
                                                    },
                                                    children: [(0, e.jsx)("div", {
                                                        className: "home_billtravel_li_img mb-15",
                                                        children: (0, e.jsx)(k.Z, {
                                                            src: null == b ? void 0 : b.data[c].data[i].img,
                                                            width: "54px",
                                                            height: "54px",
                                                            alt: u,
                                                            ariaLabel: u,
                                                            title: u
                                                        })
                                                    }), (0, e.jsxs)("div", {
                                                        className: "font16 color111 fw500 home_billtravel_subtxt",
                                                        children: [s, " "]
                                                    }), (null == b ? void 0 : b.data[c].data[i].subtext) ? (0, e.jsx)("div", {
                                                        className: "home_billtravel_littxt font13 fw400 color339 mt-5 pl-4 pr-4",
                                                        children: v
                                                    }) : null]
                                                }, "vrt1_" + b.data[c].data[i].text_ln)
                                            }, "vrt_" + q) : (0, e.jsxs)("a", {
                                                href: r,
                                                className: "home_billtravel_li imageZoom text_center",
                                                title: t,
                                                onClick: function(a) {
                                                    var d;
                                                    return o(null === (d = b.data[c]) || void 0 === d ? void 0 : d.data[i], p)
                                                },
                                                children: [(0, e.jsx)("div", {
                                                    className: "home_billtravel_li_img mb-15",
                                                    children: (0, e.jsx)(k.Z, {
                                                        src: null == b ? void 0 : b.data[c].data[i].img,
                                                        width: "54px",
                                                        height: "54px",
                                                        alt: u,
                                                        ariaLabel: u,
                                                        title: u
                                                    })
                                                }), (0, e.jsxs)("div", {
                                                    className: "font16 color111 fw500 home_billtravel_subtxt",
                                                    children: [s, " "]
                                                }), "Flight " == s ? (0, e.jsxs)("div", {
                                                    className: "home_billtravel_littxt easemy font11 fw400 ",
                                                    style: {
                                                        lineHeight: 1
                                                    },
                                                    children: [(0, e.jsx)("span", {
                                                        children: "Powered By "
                                                    }), " ", (0, e.jsx)("img", {
                                                        src: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/easymytrip_logo.png",
                                                        height: "auto",
                                                        width: "auto",
                                                        className: "easeimg ml-4"
                                                    })]
                                                }) : (null == b ? void 0 : b.data[c].data[i].subtext) ? (0, e.jsx)("div", {
                                                    className: "home_billtravel_littxt font13 fw400 color339 mt-5 pl-4 pr-4",
                                                    children: v
                                                }) : null]
                                            }, "vrt1_" + b.data[c].data[i].text_ln)
                                        })
                                    })]
                                }, c)
                            } catch (t) {
                                console.log(t)
                            }
                        })
                    })
                }) : null
            }
        }
    }
])