(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4269], {
        73060: function(a, b, c) {
            "use strict";
            c.r(b), c.d(b, {
                default: function() {
                    return p
                }
            });
            var d = c(40872),
                e = c(85893),
                f = c(60536),
                g = c.n(f),
                h = c(41664),
                i = c.n(h),
                j = c(85313),
                k = c(56064),
                l = c(42158),
                m = c(30719);
            c(30933), c(68770);
            var n = c(71911),
                o = c(67294);

            function p(a) {
                var b = (0, d.Z)({}, a),
                    c = (0, k.v9)(function(a) {
                        var b;
                        return null === (b = a.appState) || void 0 === b ? void 0 : b.userLocation
                    }) || {},
                    f = c.city || b.ct,
                    h = c.area || b.area,
                    p = (0, o.useRef)(null),
                    q = (null == b ? void 0 : b.displayType) || "locality",
                    r = (null == b ? void 0 : b.islang) || "en",
                    s = b.impressionTracker;
                (0, o.useEffect)(function() {
                    null != p.current && p.current.slideTo(0)
                }, [h, f]);
                var t = function(a, c) {
                        var d, e = "".concat((null == a ? void 0 : a.text) ? null == a ? void 0 : null === (d = a.text) || void 0 === d ? void 0 : d.toLowerCase() : a, "_").concat(q);
                        b.tracker({
                            li: e,
                            ll: "hmpge",
                            navigation: "1",
                            lpageval: "hmpge",
                            contracts: [],
                            gTag: {
                                event: "menu_click",
                                menu_position: "Web locality",
                                menu_name: e,
                                menu_header: c,
                                sub_menu_name: ""
                            }
                        })
                    },
                    u = function(a) {
                        var c = a.itm,
                            d = a.j,
                            e = a.i;
                        try {
                            var g, i = c + d + e,
                                k = null == b ? void 0 : b.data[e].data[d].path,
                                l = r && "en" != r && (null == c ? void 0 : null === (g = c.ln) || void 0 === g ? void 0 : g[r]) || (null == c ? void 0 : c.text_ln),
                                m = l;
                            k = k ? (0, j.KB)(h, f, "", "", k, !0) : (0, j.KB)(h, f, "", "", "/", !0);
                            var n = (null == c ? void 0 : c.title) || m,
                                o = null == c ? void 0 : c.inapp;
                            return {
                                a: i,
                                title: n,
                                categoryName: l,
                                inApp: o,
                                url: k
                            }
                        } catch (p) {
                            console.log(p)
                        }
                    },
                    v = function(a) {
                        var b = a.item;
                        try {
                            var c, d, e = r && "en" != r && (null == b ? void 0 : null === (c = b.headinglang) || void 0 === c ? void 0 : c[r]) || (null == b ? void 0 : b.heading_ln),
                                g = r && "en" != r && (null == b ? void 0 : null === (d = b.descriptionlang) || void 0 === d ? void 0 : d[r]) || (null == b ? void 0 : b.description_ln),
                                i = "";
                            return i = i && i.length > 0 ? (0, j.KB)(h, f, "", "", i, !0) : (0, j.KB)(h, f, "", "", "/", !0), {
                                categoryHeading: e,
                                categoryDescription: g,
                                url: i
                            }
                        } catch (k) {
                            console.log(k)
                        }
                    };
                return (null == b ? void 0 : b.data) && Object.keys(b.data).length > 0 ? (0, e.jsxs)(e.Fragment, {
                    children: ["seasonal" == q && (null == b ? void 0 : b.bot) != 1 ? (0, e.jsx)("div", {
                        "data-tracker-id": b.displayType,
                        ref: function(a) {
                            var c;
                            return s.register(a, {
                                li: "web_".concat(b.displayType, "_impression"),
                                threshold: (null === (c = b.data) || void 0 === c ? void 0 : c.length) > 1 ? "0.25" : "0.5"
                            })
                        },
                        className: "jsx-1d7a2efb5087c378 home_rowbox home_row_10 home_locality mb-50",
                        children: Object.values(b.data).map(function(a, c) {
                            var d = v({
                                    item: a
                                }),
                                f = d.categoryHeading,
                                g = d.categoryDescription;
                            try {
                                return (0, e.jsxs)("div", {
                                    className: "jsx-1d7a2efb5087c378 locality__box locality__seasonal",
                                    children: [(0, e.jsxs)("div", {
                                        className: "jsx-1d7a2efb5087c378 locality__heading",
                                        children: [(0, e.jsxs)("h2", {
                                            className: "jsx-1d7a2efb5087c378 locality__head font25 fw700 color111",
                                            children: [f, " ", (0, e.jsx)("span", {
                                                className: "jsx-1d7a2efb5087c378 font13 fw700 colorFFF newtag ml-8 text_uppercase",
                                                children: "Seasonal"
                                            })]
                                        }), (0, e.jsx)("div", {
                                            className: "jsx-1d7a2efb5087c378 font13 color333 fw400 ",
                                            children: g
                                        })]
                                    }), (0, e.jsx)("div", {
                                        className: "jsx-1d7a2efb5087c378 " + (((null == b ? void 0 : b.bot) ? "mt-25 botloc" : "mt-25") || ""),
                                        children: (0, e.jsx)(m.tq, {
                                            className: "locality__listone",
                                            a11y: !0,
                                            "aria-label": "swiper",
                                            role: "button",
                                            tabIndex: 0,
                                            prevSlideMessage: "Previous Slide",
                                            nextSlideMessage: "Next Slide",
                                            allowTouchMove: !0,
                                            pagination: !1,
                                            onSwiper: function(a) {
                                                p.current = a
                                            },
                                            modules: [n.W_, n.s5, n.Gk],
                                            breakpoints: {
                                                768: {
                                                    slidesPerView: 2,
                                                    spaceBetween: 15
                                                },
                                                1024: {
                                                    slidesPerView: 3,
                                                    spaceBetween: 15
                                                },
                                                1120: {
                                                    slidesPerView: 3,
                                                    spaceBetween: 15
                                                },
                                                1280: {
                                                    slidesPerView: 3,
                                                    spaceBetween: 15
                                                },
                                                1360: {
                                                    slidesPerView: 4,
                                                    spaceBetween: 15
                                                }
                                            },
                                            spaceBetween: 15,
                                            slidesPerView: 4,
                                            navigation: !0,
                                            onNavigationNext: function() {
                                                return t("web_popularsearches_cta_next", {
                                                    event: "banner_interaction",
                                                    banner_name: "web_popularsearches_cta_next",
                                                    banner_position: ""
                                                })
                                            },
                                            onNavigationPrev: function() {
                                                return t("web_popularsearches_cta_prev", {
                                                    event: "banner_interaction",
                                                    banner_name: "web_popularsearches_cta_prev",
                                                    banner_position: ""
                                                })
                                            },
                                            children: (0, e.jsx)("div", {
                                                className: "jsx-1d7a2efb5087c378 locality__list ",
                                                children: Object.values(null == b ? void 0 : b.data[c].data).map(function(d, g) {
                                                    var h = u({
                                                            itm: d,
                                                            j: g,
                                                            i: c
                                                        }),
                                                        j = h.a,
                                                        k = h.title,
                                                        n = h.inApp,
                                                        o = h.categoryName,
                                                        p = h.url;
                                                    return k = f + " - " + (null == k ? void 0 : k.toLowerCase()), (0, e.jsx)(m.o5, {
                                                        children: 1 == a.inapp ? (0, e.jsx)(i(), {
                                                            prefetch: !1,
                                                            href: n || (null == b ? void 0 : b.bot) ? p : "".concat(p),
                                                            children: (0, e.jsxs)("a", {
                                                                title: k,
                                                                onClick: function(a) {
                                                                    var d;
                                                                    return t(null === (d = b.data[c]) || void 0 === d ? void 0 : d.data[g], f)
                                                                },
                                                                className: "jsx-1d7a2efb5087c378 locality__item",
                                                                children: [(0, e.jsx)("div", {
                                                                    className: "jsx-1d7a2efb5087c378 locality__imgbox",
                                                                    children: (0, e.jsx)(l.Z, {
                                                                        src: null == b ? void 0 : b.data[c].data[g].img,
                                                                        width: "104px",
                                                                        height: "104px",
                                                                        objectFit: "cover",
                                                                        alt: k,
                                                                        ariaLabel: k,
                                                                        title: k,
                                                                        fallbackSrc: "https://akam.cdn.jdmagicbox.com/images/icontent/jdmart/jdmart_placeholder_65x65.svg"
                                                                    })
                                                                }), (0, e.jsxs)("div", {
                                                                    className: "jsx-1d7a2efb5087c378 locality__txtbox",
                                                                    children: [(0, e.jsxs)("div", {
                                                                        className: "jsx-1d7a2efb5087c378 locality__name font20 fw700 color111",
                                                                        children: [o, " "]
                                                                    }), (0, e.jsxs)("div", {
                                                                        className: "jsx-1d7a2efb5087c378 locality__explore font16 fw500 color007",
                                                                        children: ["Explore ", (0, e.jsx)("span", {
                                                                            role: "none",
                                                                            className: "jsx-1d7a2efb5087c378 arrowu_icon jdicon"
                                                                        })]
                                                                    })]
                                                                })]
                                                            }, "vrt1_" + b.data[c].data[g].text_ln)
                                                        }, "vrt_" + j) : (0, e.jsxs)("a", {
                                                            href: p,
                                                            title: k,
                                                            onClick: function(a) {
                                                                var d;
                                                                return t(null === (d = b.data[c]) || void 0 === d ? void 0 : d.data[g], f)
                                                            },
                                                            className: "jsx-1d7a2efb5087c378 locality__item",
                                                            children: [(0, e.jsx)("div", {
                                                                className: "jsx-1d7a2efb5087c378 locality__imgbox",
                                                                children: (0, e.jsx)(l.Z, {
                                                                    src: null == b ? void 0 : b.data[c].data[g].img,
                                                                    width: "104px",
                                                                    height: "104px",
                                                                    objectFit: "cover",
                                                                    alt: k,
                                                                    ariaLabel: k,
                                                                    title: k,
                                                                    fallbackSrc: "https://akam.cdn.jdmagicbox.com/images/icontent/jdmart/jdmart_placeholder_65x65.svg"
                                                                })
                                                            }), (0, e.jsxs)("div", {
                                                                className: "jsx-1d7a2efb5087c378 locality__txtbox",
                                                                children: [(0, e.jsxs)("div", {
                                                                    className: "jsx-1d7a2efb5087c378 locality__name font20 fw700 color111 line_clamp_2",
                                                                    children: [o, " "]
                                                                }), (0, e.jsxs)("div", {
                                                                    className: "jsx-1d7a2efb5087c378 locality__explore font16 fw500 color007",
                                                                    children: ["Explore ", (0, e.jsx)("span", {
                                                                        role: "none",
                                                                        className: "jsx-1d7a2efb5087c378 arrowu_icon jdicon"
                                                                    })]
                                                                })]
                                                            })]
                                                        }, "vrt1_" + b.data[c].data[g].text_ln)
                                                    }, j)
                                                })
                                            })
                                        })
                                    })]
                                }, c)
                            } catch (h) {
                                console.log(h)
                            }
                        })
                    }) : (0, e.jsx)("div", {
                        "data-tracker-id": b.displayType,
                        ref: function(a) {
                            var c;
                            return s.register(a, {
                                li: "web_".concat(b.displayType, "_impression"),
                                threshold: (null === (c = b.data) || void 0 === c ? void 0 : c.length) > 1 ? "0.25" : "0.5"
                            })
                        },
                        className: "jsx-1d7a2efb5087c378 home_rowbox home_row_10 home_locality mb-50",
                        children: Object.values(b.data).map(function(a, c) {
                            var d = v({
                                    item: a
                                }),
                                f = d.categoryHeading,
                                g = d.categoryDescription;
                            try {
                                return (0, e.jsxs)("div", {
                                    className: "jsx-1d7a2efb5087c378 locality__box ",
                                    children: [(0, e.jsxs)("div", {
                                        className: "jsx-1d7a2efb5087c378 locality__heading mb-20",
                                        children: [(0, e.jsxs)("h2", {
                                            className: "jsx-1d7a2efb5087c378 locality__head font25 fw700 color111",
                                            children: [f, " ", (0, e.jsx)("span", {
                                                className: "jsx-1d7a2efb5087c378 font13 fw700 colorFFF newtag ml-8 text_uppercase",
                                                children: "New"
                                            })]
                                        }), g && (0, e.jsx)("div", {
                                            className: "jsx-1d7a2efb5087c378 font13 color333 fw400",
                                            children: g
                                        })]
                                    }), (0, e.jsx)(m.tq, {
                                        className: (null == b ? void 0 : b.bot) ? "botloc locality__listone" : "locality__listone",
                                        a11y: !0,
                                        "aria-label": "swiper",
                                        role: "button",
                                        tabIndex: 0,
                                        prevSlideMessage: "Previous Slide",
                                        nextSlideMessage: "Next Slide",
                                        allowTouchMove: !0,
                                        pagination: !1,
                                        onSwiper: function(a) {
                                            p.current = a
                                        },
                                        modules: [n.W_, n.s5, n.Gk],
                                        breakpoints: {
                                            768: {
                                                slidesPerView: 2,
                                                spaceBetween: 15
                                            },
                                            1024: {
                                                slidesPerView: 3,
                                                spaceBetween: 15
                                            },
                                            1120: {
                                                slidesPerView: 3,
                                                spaceBetween: 15
                                            },
                                            1280: {
                                                slidesPerView: 3,
                                                spaceBetween: 15
                                            },
                                            1300: {
                                                slidesPerView: 4,
                                                spaceBetween: 15
                                            },
                                            1360: {
                                                slidesPerView: 4,
                                                spaceBetween: 15
                                            }
                                        },
                                        spaceBetween: 15,
                                        slidesPerView: 4,
                                        navigation: !0,
                                        onNavigationNext: function() {
                                            return t("web_popularsearches_cta_next", {
                                                event: "banner_interaction",
                                                banner_name: "web_popularsearches_cta_next",
                                                banner_position: ""
                                            })
                                        },
                                        onNavigationPrev: function() {
                                            return t("web_popularsearches_cta_prev", {
                                                event: "banner_interaction",
                                                banner_name: "web_popularsearches_cta_prev",
                                                banner_position: ""
                                            })
                                        },
                                        children: (0, e.jsx)("div", {
                                            className: "jsx-1d7a2efb5087c378 locality__list mt-25",
                                            children: Object.values(null == b ? void 0 : b.data[c].data).map(function(d, g) {
                                                var h = u({
                                                        itm: d,
                                                        j: g,
                                                        i: c
                                                    }),
                                                    j = h.a,
                                                    k = h.title,
                                                    n = h.inApp,
                                                    o = h.categoryName,
                                                    p = h.url;
                                                return k = f + " - " + (null == k ? void 0 : k.toLowerCase()), (0, e.jsx)(m.o5, {
                                                    children: 1 == a.inapp ? (0, e.jsx)(i(), {
                                                        prefetch: !1,
                                                        href: n || (null == inpData ? void 0 : inpData.bot) ? p : "".concat(p),
                                                        children: (0, e.jsxs)("a", {
                                                            title: k,
                                                            onClick: function(a) {
                                                                var b;
                                                                return t(null === (b = inpData.data[c]) || void 0 === b ? void 0 : b.data[g], f)
                                                            },
                                                            className: "jsx-1d7a2efb5087c378 locality__item",
                                                            children: [(0, e.jsx)("div", {
                                                                className: "jsx-1d7a2efb5087c378 locality__imgbox",
                                                                children: (0, e.jsx)(l.Z, {
                                                                    src: null == b ? void 0 : b.data[c].data[g].img,
                                                                    width: "104px",
                                                                    height: "104px",
                                                                    alt: k,
                                                                    ariaLabel: k,
                                                                    title: k,
                                                                    fallbackSrc: "https://akam.cdn.jdmagicbox.com/images/icontent/jdmart/jdmart_placeholder_65x65.svg"
                                                                })
                                                            }), (0, e.jsxs)("div", {
                                                                className: "jsx-1d7a2efb5087c378 locality__txtbox",
                                                                children: [(0, e.jsxs)("div", {
                                                                    className: "jsx-1d7a2efb5087c378 locality__name font20 fw700 color111",
                                                                    children: [o, " "]
                                                                }), (0, e.jsxs)("div", {
                                                                    className: "jsx-1d7a2efb5087c378 locality__explore font16 fw500 color007",
                                                                    children: ["Explore ", (0, e.jsx)("span", {
                                                                        role: "none",
                                                                        className: "jsx-1d7a2efb5087c378 arrowu_icon jdicon"
                                                                    })]
                                                                })]
                                                            })]
                                                        }, "vrt1_" + inpData.data[c].data[g].text_ln)
                                                    }, "vrt_" + j) : (0, e.jsxs)("a", {
                                                        href: p,
                                                        title: k,
                                                        onClick: function(a) {
                                                            var d;
                                                            return t(null === (d = b.data[c]) || void 0 === d ? void 0 : d.data[g], f)
                                                        },
                                                        className: "jsx-1d7a2efb5087c378 locality__item",
                                                        children: [(0, e.jsx)("div", {
                                                            className: "jsx-1d7a2efb5087c378 locality__imgbox",
                                                            children: (0, e.jsx)(l.Z, {
                                                                src: null == b ? void 0 : b.data[c].data[g].img,
                                                                width: "104px",
                                                                height: "104px",
                                                                alt: k,
                                                                ariaLabel: k,
                                                                title: k,
                                                                fallbackSrc: "https://akam.cdn.jdmagicbox.com/images/icontent/jdmart/jdmart_placeholder_65x65.svg"
                                                            })
                                                        }), (0, e.jsxs)("div", {
                                                            className: "jsx-1d7a2efb5087c378 locality__txtbox",
                                                            children: [(0, e.jsxs)("div", {
                                                                className: "jsx-1d7a2efb5087c378 locality__name font20 fw700 color111",
                                                                children: [o, " "]
                                                            }), (0, e.jsxs)("div", {
                                                                className: "jsx-1d7a2efb5087c378 locality__explore font16 fw500 color007",
                                                                children: ["Explore ", (0, e.jsx)("span", {
                                                                    role: "none",
                                                                    className: "jsx-1d7a2efb5087c378 arrowu_icon jdicon"
                                                                })]
                                                            })]
                                                        })]
                                                    }, "vrt1_" + b.data[c].data[g].text_ln)
                                                }, j)
                                            })
                                        })
                                    })]
                                }, c)
                            } catch (h) {
                                console.log(h)
                            }
                        })
                    }), (0, e.jsx)(g(), {
                        id: "1d7a2efb5087c378",
                        children: '.home_locality{padding:0 45px}.home_locality .locality__box{padding:25px 30px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;border:solid 1px#ccc;background-color:#fff}.home_locality .locality__list{width:100%;display:inline-grid;grid-template-columns:repeat(4,minmax(-webkit-calc((100%/4) - 15px),1fr));grid-template-columns:repeat(4,minmax(-moz-calc((100%/4) - 15px),1fr));grid-template-columns:repeat(4,minmax(calc((100%/4) - 15px),1fr));grid-gap:15px}.home_locality .locality__item{-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;border:solid 1px#ccc;background-color:#fff;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;overflow:hidden;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:100%}.home_locality .locality__imgbox{width:max(50px,104px);height:max(50px,104px);-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;position:relative;overflow:hidden;background:#f5f5f5}.home_locality .locality__imgbox img{width:100%;height:100%;-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1);-webkit-animation-duration:.3s;-moz-animation-duration:.3s;-o-animation-duration:.3s;animation-duration:.3s;-webkit-transition:-webkit-transform 1.25s cubic-bezier(.165,.84,.44,1)0s,-webkit-transform 1.25s cubic-bezier(.165,.84,.44,1)0s;-moz-transition:-moz-transform 1.25s cubic-bezier(.165,.84,.44,1)0s,-webkit-transform 1.25s cubic-bezier(.165,.84,.44,1)0s;-o-transition:-o-transform 1.25s cubic-bezier(.165,.84,.44,1)0s,-webkit-transform 1.25s cubic-bezier(.165,.84,.44,1)0s;transition:-webkit-transform 1.25s cubic-bezier(.165,.84,.44,1)0s,-webkit-transform 1.25s cubic-bezier(.165,.84,.44,1)0s;transition:-moz-transform 1.25s cubic-bezier(.165,.84,.44,1)0s,-webkit-transform 1.25s cubic-bezier(.165,.84,.44,1)0s;transition:-o-transform 1.25s cubic-bezier(.165,.84,.44,1)0s,-webkit-transform 1.25s cubic-bezier(.165,.84,.44,1)0s;transition:transform 1.25s cubic-bezier(.165,.84,.44,1)0s,-webkit-transform 1.25s cubic-bezier(.165,.84,.44,1)0s;-o-object-fit:contain;object-fit:contain}.home_locality .locality__imgbox:after{position:absolute;inset:0px;background:#282c3f0d;content:"";background-blend-mode:overlay}.home_locality .locality__txtbox{padding:0 5px 0 15px}.home_locality .locality__name{font-weight:700;word-break:break-word}.home_locality .newtag{padding:1px 5px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;background-color:#d0382d}.home_locality .locality__head{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:100%}.home_locality .arrowu_icon{background-image:url(https://akam.cdn.jdmagicbox.com/images/icontent/jdmart/jdmart_blue_arrowright_icon.svg);width:10px;height:10px;-webkit-background-size:6px;-moz-background-size:6px;-o-background-size:6px;background-size:6px}.home_locality .locality__item:hover .locality__imgbox img{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1);-webkit-animation-duration:.3s;-moz-animation-duration:.3s;-o-animation-duration:.3s;animation-duration:.3s}.home_locality .swiper-button-next{width:47px;height:62px;background-image:none;top:-webkit-calc(50% - 31px);top:-moz-calc(50% - 31px);top:calc(50% - 31px);background-image:url(https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/slider_arrow.svg);margin:0;right:-4px;left:unset;position:absolute;z-index:1;cursor:pointer}.home_locality .swiper-button-prev{right:unset;width:47px;height:62px;background-image:url(https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/slider_arrow.svg);top:-webkit-calc(50% - 31px);top:-moz-calc(50% - 31px);top:calc(50% - 31px);left:-4px;margin:0;-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg);position:absolute;z-index:1;cursor:pointer}.home_locality .swiper-button-next:after,.home_locality .swiper-button-prev:after,.home_locality .swiper-button-next.swiper-button-disabled,.home_locality .swiper-button-prev.swiper-button-disabled{display:none}.home_locality .swiper{width:100%}.home_locality .locality__seasonal{padding:25px 0}.home_locality .locality__seasonal .locality__heading{padding:0 30px}.home_locality .locality__seasonal .locality__listone{padding:0 30px}.botloc{position:relative}.botloc .swiper-wrapper{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:100%;overflow-y:auto}.botloc .swiper-slide{-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;width:-webkit-calc((100%/4) - 12px);width:-moz-calc((100%/4) - 12px);width:calc((100%/4) - 12px);margin-right:15px}'
                    })]
                }) : null
            }
        },
        68770: function() {}
    }
])