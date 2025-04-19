"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5278, 6262], {
        15278: function(a, b, c) {
            c.r(b), c.d(b, {
                default: function() {
                    return n
                }
            });
            var d = c(26042),
                e = c(85893),
                f = c(60536),
                g = c.n(f);
            c(67294);
            var h = c(16262),
                i = c(90091),
                j = c(41664),
                k = c.n(j),
                l = c(42158),
                m = c(56064);

            function n(a) {
                var b, c, f, j, n, o = ((0, m.v9)(function(a) {
                        var b;
                        return null === (b = a.appState) || void 0 === b ? void 0 : b.userLocation
                    }) || {}).city || a.ct,
                    p = (null == a ? void 0 : a.data[0]) || [],
                    q = ((null == p ? void 0 : p.heading_ln) ? null == p ? void 0 : p.heading_ln : null == p ? void 0 : p.heading) || "Latest Movies & Review",
                    r = function(a, b) {
                        var c = {
                            li: a,
                            ll: "hmpge",
                            contracts: [],
                            search_id: "",
                            ncatid: ""
                        };
                        c = b ? (0, d.Z)({}, c, b) : c, (0, i.jdTracker)(c)
                    };
                return (0, e.jsxs)(e.Fragment, {
                    children: [(null == a ? void 0 : a.bot) ? (0, e.jsx)("div", {
                        "data-tracker-id": "web_".concat(a.displayType, "_impression"),
                        ref: function(b) {
                            var c;
                            return null === (c = a.impressionTracker) || void 0 === c ? void 0 : c.register(b)
                        },
                        className: "jsx-b5cc4760a1cb0f4 home_rowbox home_row_9 home_movies mb-50",
                        children: (0, e.jsxs)("div", {
                            className: "jsx-b5cc4760a1cb0f4 jdwrapper jddtl_slider ",
                            children: [(0, e.jsx)("div", {
                                className: "jsx-b5cc4760a1cb0f4 dtlboxleft_headbox mb-20",
                                children: (0, e.jsx)("a", {
                                    href: "/".concat(o, "/Movies"),
                                    className: "jsx-b5cc4760a1cb0f4 pointer",
                                    children: (0, e.jsx)("h2", {
                                        className: "jsx-b5cc4760a1cb0f4 dtlboxleft_heading font25 fw600 color111",
                                        children: q
                                    })
                                })
                            }), (null == p ? void 0 : p.data) && (null == p ? void 0 : null === (b = p.data) || void 0 === b ? void 0 : b.length) > 0 ? (0, e.jsx)("div", {
                                className: "jsx-b5cc4760a1cb0f4 jddtl_slider_box",
                                children: null === (f = null == p ? void 0 : null === (c = p.data) || void 0 === c ? void 0 : c.slice(0, 6)) || void 0 === f ? void 0 : f.map(function(a, b) {
                                    var c = (null == a ? void 0 : a.url) || "";
                                    return (0, e.jsx)(k(), {
                                        href: c,
                                        children: (0, e.jsx)("a", {
                                            title: null == a ? void 0 : a.name,
                                            className: "jsx-b5cc4760a1cb0f4",
                                            children: (0, e.jsxs)("div", {
                                                tabIndex: 0,
                                                onClick: function() {
                                                    return r("web_movies_".concat(a.name || ""))
                                                },
                                                className: "jsx-b5cc4760a1cb0f4 jddtl_slide movies_slide pointer",
                                                children: [(0, e.jsxs)("div", {
                                                    className: "jsx-b5cc4760a1cb0f4 movies_slide_imgbox",
                                                    children: [(0, e.jsx)("div", {
                                                        className: "jsx-b5cc4760a1cb0f4 movies_slide_imginner",
                                                        children: (0, e.jsx)(l.Z, {
                                                            bot: 1,
                                                            layout: "fill",
                                                            tabIndex: -1,
                                                            className: "movies_slide_image",
                                                            src: null == a ? void 0 : a.img,
                                                            alt: null == a ? void 0 : a.name,
                                                            title: null == a ? void 0 : a.name,
                                                            onError: function(a) {
                                                                return a.target.src = "https://akam.cdn.jdmagicbox.com/images/icontent/jdmart/jdmart_placeholder_150x150.svg"
                                                            }
                                                        })
                                                    }), (null == a ? void 0 : a.jd_rating) / 5 * 100 > 0 && (0, e.jsxs)("div", {
                                                        className: "jsx-b5cc4760a1cb0f4  movies_btnbox",
                                                        children: [(0, e.jsxs)("div", {
                                                            role: "presentation",
                                                            tabIndex: 0,
                                                            className: "jsx-b5cc4760a1cb0f4  movies_imgrate mb-10",
                                                            children: [(0, e.jsx)("span", {
                                                                role: "presentation",
                                                                tabIndex: 0,
                                                                className: "jsx-b5cc4760a1cb0f4  movies_imgrate_icon jdicon"
                                                            }), (0, e.jsxs)("span", {
                                                                className: "jsx-b5cc4760a1cb0f4  font16 fw500 color111 pl-4",
                                                                children: [(100 * Number((null == a ? void 0 : a.jd_rating) / 5)).toFixed(0), "%"]
                                                            })]
                                                        }), (0, e.jsx)("div", {
                                                            className: "jsx-b5cc4760a1cb0f4 movies_btninner animated fadeIn",
                                                            children: (0, e.jsx)("button", {
                                                                style: {
                                                                    minHeight: "30px"
                                                                },
                                                                className: "jsx-b5cc4760a1cb0f4 movies_button blue_whitefill_animate font16 fw600 color007",
                                                                children: "Book Now"
                                                            })
                                                        })]
                                                    })]
                                                }), (0, e.jsx)("div", {
                                                    style: {
                                                        marginTop: "15px"
                                                    },
                                                    className: "jsx-b5cc4760a1cb0f4  movies_titlebox",
                                                    children: (0, e.jsx)("div", {
                                                        role: "none",
                                                        "aria-label": null == a ? void 0 : a.name_ln,
                                                        className: "jsx-b5cc4760a1cb0f4 movies_title font18 fw600 color111 line_clamp_2 pr-10",
                                                        children: null == a ? void 0 : a.name_ln
                                                    })
                                                }), (0, e.jsxs)("div", {
                                                    className: "jsx-b5cc4760a1cb0f4 movies_tagbox mt-8",
                                                    children: [(0, e.jsxs)("div", {
                                                        role: "button",
                                                        className: "jsx-b5cc4760a1cb0f4 movies_tag font14 fw400 color111",
                                                        children: [(0, e.jsx)("span", {
                                                            role: "button",
                                                            style: {
                                                                cursor: "text"
                                                            },
                                                            className: "jsx-b5cc4760a1cb0f4",
                                                            children: "Hindi"
                                                        }), (0, e.jsx)("div", {
                                                            className: "jsx-b5cc4760a1cb0f4 movinfo_dot"
                                                        })]
                                                    }), (0, e.jsx)("div", {
                                                        role: "button",
                                                        className: "jsx-b5cc4760a1cb0f4 movies_tag font14 fw400 color111",
                                                        children: (0, e.jsx)("span", {
                                                            role: "link",
                                                            style: {
                                                                color: "#111111"
                                                            },
                                                            href: "/Bangalore/Sikandar-2025-Film-Hindi-Movie-in-Link-Road-Malad-West/mct-16139134",
                                                            className: "jsx-b5cc4760a1cb0f4",
                                                            children: "2D"
                                                        })
                                                    })]
                                                })]
                                            }, null == a ? void 0 : a.name)
                                        })
                                    })
                                })
                            }) : null]
                        })
                    }) : (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)("div", {
                            "data-tracker-id": "web_".concat(a.displayType, "_impression"),
                            ref: function(b) {
                                var c;
                                return null === (c = a.impressionTracker) || void 0 === c ? void 0 : c.register(b)
                            },
                            className: "jsx-b5cc4760a1cb0f4 home_rowbox home_row_9 home_movies mb-50",
                            children: (0, e.jsxs)("div", {
                                className: "jsx-b5cc4760a1cb0f4 jdwrapper jddtl_slider ",
                                children: [(0, e.jsx)(k(), {
                                    href: "/".concat(o, "/Movies"),
                                    children: (0, e.jsx)("a", {
                                        tabIndex: 0,
                                        className: "jsx-b5cc4760a1cb0f4 ank pointer",
                                        children: (0, e.jsxs)("div", {
                                            className: "jsx-b5cc4760a1cb0f4 dtlboxleft_headbox mb-20",
                                            children: [(0, e.jsx)("h2", {
                                                className: "jsx-b5cc4760a1cb0f4 dtlboxleft_heading font25 fw600 color111",
                                                children: q
                                            }), (0, e.jsx)("div", {
                                                className: "jsx-b5cc4760a1cb0f4 dtlboxleft_view jdicon"
                                            })]
                                        })
                                    })
                                }), (0, e.jsx)(h.u, {
                                    onNavButtonClicked: function(a) {
                                        r("web_movies_cta_".concat(a.forward ? "next" : "prev"), {
                                            event: "banner_interaction",
                                            banner_name: "web_movies_cta_".concat(a ? "next" : "prev"),
                                            banner_position: ""
                                        })
                                    },
                                    children: (null == p ? void 0 : p.data) && (null == p ? void 0 : null === (j = p.data) || void 0 === j ? void 0 : j.length) > 0 ? null == p ? void 0 : null === (n = p.data) || void 0 === n ? void 0 : n.map(function(a, b) {
                                        var c = (null == a ? void 0 : a.url) || "/";
                                        return (0, e.jsx)(h.F, {
                                            className: "movies_slidebox",
                                            children: (0, e.jsx)(k(), {
                                                href: c,
                                                children: (0, e.jsx)("a", {
                                                    title: null == a ? void 0 : a.name,
                                                    tabIndex: 0,
                                                    className: "jsx-b5cc4760a1cb0f4 anchor",
                                                    children: (0, e.jsxs)("div", {
                                                        onClick: function() {
                                                            return r("web_movies_".concat(a.name))
                                                        },
                                                        className: "jsx-b5cc4760a1cb0f4 jddtl_slide movies_slide pointer",
                                                        children: [(0, e.jsxs)("div", {
                                                            className: "jsx-b5cc4760a1cb0f4 movies_slide_imgbox",
                                                            children: [(0, e.jsx)("div", {
                                                                className: "jsx-b5cc4760a1cb0f4 movies_slide_imginner",
                                                                children: (0, e.jsx)(l.Z, {
                                                                    layout: "fill",
                                                                    tabIndex: -1,
                                                                    className: "movies_slide_image",
                                                                    src: null == a ? void 0 : a.img,
                                                                    fallbackSrc: "https://akam.cdn.jdmagicbox.com/images/icons/website/new/Touch-Coming-Soon-Poster@2x.png",
                                                                    alt: null == a ? void 0 : a.name,
                                                                    title: null == a ? void 0 : a.name,
                                                                    onError: function(a) {
                                                                        return a.target.src = "https://akam.cdn.jdmagicbox.com/images/icontent/jdmart/jdmart_placeholder_150x150.svg"
                                                                    }
                                                                })
                                                            }), (0, e.jsxs)("div", {
                                                                className: "jsx-b5cc4760a1cb0f4  movies_btnbox",
                                                                children: [(null == a ? void 0 : a.jd_rating) / 5 * 100 > 0 && (0, e.jsxs)("div", {
                                                                    role: "presentation",
                                                                    className: "jsx-b5cc4760a1cb0f4  movies_imgrate mb-10",
                                                                    children: [(0, e.jsx)("span", {
                                                                        role: "presentation",
                                                                        className: "jsx-b5cc4760a1cb0f4  movies_imgrate_icon jdicon"
                                                                    }), (0, e.jsxs)("span", {
                                                                        className: "jsx-b5cc4760a1cb0f4  font16 fw500 color111 pl-4",
                                                                        children: [(100 * Number((null == a ? void 0 : a.jd_rating) / 5)).toFixed(0), "%"]
                                                                    })]
                                                                }), (0, e.jsx)("div", {
                                                                    className: "jsx-b5cc4760a1cb0f4 movies_btninner animated fadeIn",
                                                                    children: (0, e.jsx)("button", {
                                                                        style: {
                                                                            minHeight: "30px"
                                                                        },
                                                                        className: "jsx-b5cc4760a1cb0f4 movies_button blue_whitefill_animate font16 fw600 color007",
                                                                        children: "Book Now"
                                                                    })
                                                                })]
                                                            })]
                                                        }), (0, e.jsx)("div", {
                                                            style: {
                                                                marginTop: "15px"
                                                            },
                                                            className: "jsx-b5cc4760a1cb0f4  movies_titlebox",
                                                            children: (0, e.jsx)("div", {
                                                                role: "none",
                                                                "aria-label": null == a ? void 0 : a.name_ln,
                                                                className: "jsx-b5cc4760a1cb0f4  movies_title font18 fw600 color111 line_clamp_2 pr-10",
                                                                children: null == a ? void 0 : a.name_ln
                                                            })
                                                        }), (null == a ? void 0 : a.ln_tg) && (0, e.jsxs)("div", {
                                                            className: "jsx-b5cc4760a1cb0f4 movies_tagbox mt-8",
                                                            children: [(0, e.jsxs)("div", {
                                                                role: "button",
                                                                className: "jsx-b5cc4760a1cb0f4 movies_tag font14 fw400 color111",
                                                                children: [(0, e.jsx)("span", {
                                                                    role: "button",
                                                                    style: {
                                                                        cursor: "text"
                                                                    },
                                                                    className: "jsx-b5cc4760a1cb0f4",
                                                                    children: (null == a ? void 0 : a.ln_tg) || ""
                                                                }), (0, e.jsx)("div", {
                                                                    className: "jsx-b5cc4760a1cb0f4 movinfo_dot"
                                                                })]
                                                            }), (0, e.jsx)("div", {
                                                                role: "button",
                                                                "aria-label": "2D",
                                                                className: "jsx-b5cc4760a1cb0f4 movies_tag font14 fw400 color111",
                                                                children: (0, e.jsx)("span", {
                                                                    role: "link",
                                                                    "aria-label": "2D",
                                                                    style: {
                                                                        color: "#111111"
                                                                    },
                                                                    className: "jsx-b5cc4760a1cb0f4",
                                                                    children: "2D"
                                                                })
                                                            })]
                                                        })]
                                                    }, null == a ? void 0 : a.name)
                                                })
                                            })
                                        }, b)
                                    }) : null
                                })]
                            })
                        })
                    }), (0, e.jsx)(g(), {
                        id: "b5cc4760a1cb0f4",
                        children: ".ank:focus-visible{border:none;outline:0;-webkit-box-shadow:0 0 0 2px#000f4b;-moz-box-shadow:0 0 0 2px#000f4b;box-shadow:0 0 0 2px#000f4b;text-decoration:none}.movies_slidebox:focus-visible{border:none;outline:0;-webkit-box-shadow:0 0 0 2px#000f4b;-moz-box-shadow:0 0 0 2px#000f4b;box-shadow:0 0 0 2px#000f4b}.jddtl_slide .movies_slide:focus-visible{border:none;outline:0;-webkit-box-shadow:0 0 0 2px#000f4b;-moz-box-shadow:0 0 0 2px#000f4b;box-shadow:0 0 0 2px#000f4b}.home_movies{padding:0 45px;width:100%}.home_movies .jddtl_slider .jddtl_slider_box{position:relative;width:100%;display:inline-grid;width:100%;grid-template-columns:repeat(5,minmax(-webkit-calc((100%/5) - 20px),1fr));grid-template-columns:repeat(5,minmax(-moz-calc((100%/5) - 20px),1fr));grid-template-columns:repeat(5,minmax(calc((100%/5) - 20px),1fr));grid-gap:20px}.home_movies .jddtl_slider .jddtl_slide{width:100%}.home_movies .jddtl_slider .jddtl_slide.movies_slide{-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:100%}.brand_slide a{display:block;line-height:0}.home_movies .swiper-button-next{width:47px;height:62px;background-image:none;top:-webkit-calc(50% - 80px);top:-moz-calc(50% - 80px);top:calc(50% - 80px);background-image:url(https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/slider_arrow.svg);margin:0;right:-4px;left:unset;position:absolute;z-index:1;cursor:pointer}.home_movies .swiper-button-prev{right:unset;width:47px;height:62px;background-image:url(https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/slider_arrow.svg);top:-webkit-calc(50% - 80px);top:-moz-calc(50% - 80px);top:calc(50% - 80px);left:-4px;margin:0;-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg);position:absolute;z-index:1;cursor:pointer}.home_movies .swiper-button-next:after,.home_movies .swiper-button-prev:after,.home_movies .swiper-button-next.swiper-button-disabled,.home_movies .swiper-button-prev.swiper-button-disabled{display:none}.home_movies .swiper{width:100%}.home_movies .movies_slide_imgbox{width:100%;position:relative;overflow:hidden;-webkit-border-radius:10px 10px 0 0;-moz-border-radius:10px 10px 0 0;border-radius:10px 10px 0 0}.home_movies .movies_slide_imginner{width:100%;max-height:344px;position:relative;overflow:hidden;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;cursor:pointer;aspect-ratio:21/33;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.home_movies .movies_slide_image{cursor:pointer;-o-object-fit:cover;object-fit:cover;position:absolute;left:0;top:0;-webkit-transform:scale(1);-ms-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);max-width:100%;max-height:100%;-webkit-transition:-webkit-transform 1.25s cubic-bezier(.165,.84,.44,1);-webkit-transition:transform 1.25s cubic-bezier(.165,.84,.44,1);-moz-transition:-moz-transform 1.25s cubic-bezier(.165,.84,.44,1);-o-transition:-o-transform 1.25s cubic-bezier(.165,.84,.44,1);transition:-webkit-transform 1.25s cubic-bezier(.165,.84,.44,1);transition:-moz-transform 1.25s cubic-bezier(.165,.84,.44,1);transition:-o-transform 1.25s cubic-bezier(.165,.84,.44,1);transition:transform 1.25s cubic-bezier(.165,.84,.44,1);width:100%;height:100%}.home_movies .movies_slide:hover .movies_slide_image{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1);-webkit-animation-duration:.3s;-moz-animation-duration:.3s;-o-animation-duration:.3s;animation-duration:.3s}.home_movies .movies_category{min-height:50px;line-height:1.3}.home_movies .movies_txtbox{-webkit-border-radius:0 0 12px 12px;-moz-border-radius:0 0 12px 12px;border-radius:0 0 12px 12px;background-color:#0f76d7;padding:7px 16px 16px}.home_movies .movies_btnbox{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;position:absolute;bottom:0;left:0;width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.home_movies .movies_imgrate{background:#fff;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;-webkit-box-shadow:0 0 2px 0#0000004d;-moz-box-shadow:0 0 2px 0#0000004d;box-shadow:0 0 2px 0#0000004d;min-width:61px;height:27px;line-height:16px;color:#111;text-align:right;padding:0 4px;z-index:3;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px}.home_movies .movies_imgrate_icon{background:url(https://akam.cdn.jdmagicbox.com/images/icontent/newwap/prot_072018/jd_likerednew.svg)no-repeat;width:14px;height:14px;-webkit-background-size:14px;-moz-background-size:14px;-o-background-size:14px;background-size:14px}.home_movies .movies_titlebox{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:100%;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.home_movies .movies_title{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;line-height:1.6}.home_movies .movies_tagbox{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap}.home_movies .movies_tag{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.home_movies .movinfo_dot{width:3px;height:3px;background:#777;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;margin:0 8px}.home_movies .movies_btninner{display:none;padding:10px;background:#fff;width:100%;border-left:solid 1px#eee;border-right:solid 1px#eee;border-bottom:solid 1px#eee;-webkit-border-radius:0 0 10px 10px;-moz-border-radius:0 0 10px 10px;border-radius:0 0 10px 10px}.home_movies .movies_button{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:36px;padding:0 10px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;cursor:pointer;position:relative;width:100%}.home_movies .movies_slide:hover .movies_btninner{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex}.home_movies .dtlboxleft_headbox{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:100%;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.home_movies .dtlboxleft_view{background-image:url(http://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/movie_right_arrow.svg);width:22px;height:22px}.home_movies .jddtl_slider .carousel_item{-webkit-box-flex:0;-webkit-flex:0 0 15.46%;-moz-box-flex:0;-ms-flex:0 0 15.46%;flex:0 0 15.46%;text-align:left}.home_movies .jddtl_slider .carousel_control.right{top:-82px}.home_movies .jddtl_slider .carousel_control.left{top:-82px}@media(max-width:1360px){.home_movies .jddtl_slider .carousel_item{-webkit-box-flex:0;-webkit-flex:0 0 18.66%;-moz-box-flex:0;-ms-flex:0 0 18.66%;flex:0 0 18.66%}}@media(max-width:1280px){.home_movies .jddtl_slider .carousel_item{-webkit-box-flex:0;-webkit-flex:0 0 23.46%;-moz-box-flex:0;-ms-flex:0 0 23.46%;flex:0 0 23.46%}}@media(max-width:1024px){.home_movies .jddtl_slider .carousel_item{-webkit-box-flex:0;-webkit-flex:0 0 23.46%;-moz-box-flex:0;-ms-flex:0 0 23.46%;flex:0 0 23.46%}}@media(max-width:768px){.home_movies .jddtl_slider .carousel_item{-webkit-box-flex:0;-webkit-flex:0 0 23.46%;-moz-box-flex:0;-ms-flex:0 0 23.46%;flex:0 0 23.46%}}@media only screen and (min-device-width:768px)and (max-device-width:1024px)and (-webkit-min-device-pixel-ratio:1)and (-webkit-min-device-pixel-ratio:2){.home_movies{padding:0 15px}}@media only screen and (orientation:portrait)and (min-device-width:768px)and (max-device-width:1024px)and (-webkit-min-device-pixel-ratio:1)and (-webkit-min-device-pixel-ratio:2){.home_movies{padding:0 15px}}@media only screen and (orientation:landscape)and (min-device-width:768px)and (max-device-width:1024px)and (-webkit-min-device-pixel-ratio:1)and (-webkit-min-device-pixel-ratio:2){.home_movies{padding:0 15px}}"
                    })]
                })
            }
        },
        16262: function(a, b, c) {
            c.d(b, {
                F: function() {
                    return q
                },
                u: function() {
                    return p
                }
            });
            var d = c(26042),
                e = c(69396),
                f = c(99534),
                g = c(828),
                h = c(85893),
                i = c(60536),
                j = c.n(i),
                k = c(67294),
                l = c(82476),
                m = c(51340),
                n = (0, l.D)(),
                o = (0, m.F)() ? k.useLayoutEffect : k.useEffect,
                p = k.forwardRef(function(a, b) {
                    var c = a.children,
                        i = a.className,
                        l = a.onNavButtonClicked,
                        m = void 0 === l ? function() {} : l,
                        p = (0, f.Z)(a, ["children", "className", "onNavButtonClicked"]),
                        q = (0, g.Z)(k.useState({
                            hiddenButtons: {
                                prev: !0,
                                next: !0
                            }
                        }), 2),
                        r = q[0].hiddenButtons,
                        s = q[1],
                        t = k.useRef(null);
                    k.useImperativeHandle(b, function() {
                        return {
                            swiper: {
                                slideTo: function(a, b, c) {
                                    var d = t.current;
                                    d && (c || d.classList.add("flash-scroll"), d.scrollTo(a, b), c || d.classList.remove("flash-scroll"))
                                }
                            }
                        }
                    }, []), o(function() {
                        var a = t.current,
                            b = a.scrollWidth,
                            f = a.clientWidth;
                        (null == c ? void 0 : c.length) > 1 && u({
                            hiddenButtons: (0, e.Z)((0, d.Z)({}, r), {
                                next: f >= b
                            })
                        })
                    }, [null == c ? void 0 : c.length]);
                    var u = k.useCallback(function(a) {
                            s(function(b) {
                                return (0, d.Z)({}, b, a)
                            })
                        }, [s]),
                        v = function() {
                            n(function() {
                                var a = t.current || {},
                                    b = a.scrollWidth - (a.scrollLeft + a.offsetWidth),
                                    c = {
                                        prev: a.scrollLeft < 48,
                                        next: b < 48
                                    };
                                u({
                                    hiddenButtons: c
                                })
                            }, 50)
                        },
                        w = function() {
                            var a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (t.current) {
                                var b = (t.current.querySelector(".carousel_item") || {}).clientWidth + 20,
                                    c = Math.floor(t.current.clientWidth / b) || 1;
                                a ? t.current.scrollLeft += c * b : t.current.scrollLeft -= c * b, m({
                                    forward: a
                                }), setTimeout(function() {
                                    v()
                                }, 300)
                            }
                        };
                    return (0, k.useEffect)(function() {
                        v()
                    }, [c]), (0, h.jsxs)(h.Fragment, {
                        children: [(0, h.jsxs)("div", (0, e.Z)((0, d.Z)({}, p), {
                            className: "jsx-df012ec363083314 " + (p && null != p.className && p.className || "carousel_container ".concat((void 0 === i ? "" : i) || "")),
                            children: [(0, h.jsx)("div", {
                                ref: t,
                                onScroll: function() {
                                    v()
                                },
                                className: "jsx-df012ec363083314 carousel",
                                children: c
                            }), (0, h.jsxs)("div", {
                                className: "jsx-df012ec363083314 carousel_controls",
                                children: [r.prev ? null : (0, h.jsx)("span", {
                                    tabIndex: 0,
                                    role: "button",
                                    "aria-label": "carousel control previous",
                                    onClick: function() {
                                        w()
                                    },
                                    className: "jsx-df012ec363083314 carousel_control left"
                                }), r.next ? null : (0, h.jsx)("span", {
                                    tabIndex: 0,
                                    role: "button",
                                    "aria-label": "carousel control next",
                                    onClick: function() {
                                        w(!0)
                                    },
                                    className: "jsx-df012ec363083314 carousel_control right"
                                })]
                            })]
                        })), (0, h.jsx)(j(), {
                            id: "df012ec363083314",
                            children: ".carousel_container{width:min(100%,1440px);position:relative;overflow:hidden;z-index:1}.carousel{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow:auto;width:100%;position:relative;scroll-behavior:smooth;-ms-overflow-style:none;scrollbar-width:none}.carousel.flash-scroll{scroll-behavior:unset}.carousel::-webkit-scrollbar{display:none}.carousel_item{-webkit-box-flex:0;-webkit-flex:0 0 25%;-moz-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;text-align:center;margin-right:20px}.carousel_item:last-child{margin-right:0px}.carousel_item img{max-width:100%;height:auto;width:100%}.carousel_controls{position:absolute;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);width:100%;z-index:1}.carousel_control{background:#0000;top:-webkit-calc(50% - 47px);top:-moz-calc(50% - 47px);top:calc(50% - 47px);cursor:pointer;border:none;outline:none;position:absolute;width:47px;height:62px}.carousel_control.left{background-image:url(https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/slider_arrow.svg);left:-4px;-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg)}.carousel_control.right{background-image:url(https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/slider_arrow.svg);right:-4px}@-webkit-keyframes slide{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}40%{-webkit-transform:translateX(-200%);transform:translateX(-200%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@-moz-keyframes slide{0%{-moz-transform:translateX(0);transform:translateX(0)}20%{-moz-transform:translateX(-100%);transform:translateX(-100%)}40%{-moz-transform:translateX(-200%);transform:translateX(-200%)}100%{-moz-transform:translateX(0);transform:translateX(0)}}@-o-keyframes slide{0%{-o-transform:translateX(0);transform:translateX(0)}20%{-o-transform:translateX(-100%);transform:translateX(-100%)}40%{-o-transform:translateX(-200%);transform:translateX(-200%)}100%{-o-transform:translateX(0);transform:translateX(0)}}@keyframes slide{0%{-webkit-transform:translateX(0);-moz-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0)}20%{-webkit-transform:translateX(-100%);-moz-transform:translateX(-100%);-o-transform:translateX(-100%);transform:translateX(-100%)}40%{-webkit-transform:translateX(-200%);-moz-transform:translateX(-200%);-o-transform:translateX(-200%);transform:translateX(-200%)}100%{-webkit-transform:translateX(0);-moz-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0)}}@media(max-width:1360px){.carousel_item{-webkit-box-flex:0;-webkit-flex:0 0 33.3%;-moz-box-flex:0;-ms-flex:0 0 33.3%;flex:0 0 33.3%}}@media(max-width:1280px){.carousel_item{-webkit-box-flex:0;-webkit-flex:0 0 40%;-moz-box-flex:0;-ms-flex:0 0 40%;flex:0 0 40%}}@media(max-width:1024px){.carousel_item{-webkit-box-flex:0;-webkit-flex:0 0 50%;-moz-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%}}"
                        })]
                    })
                }),
                q = function(a) {
                    var b = a.children,
                        c = a.className,
                        g = (0, f.Z)(a, ["children", "className"]);
                    return (0, h.jsx)("div", (0, e.Z)((0, d.Z)({
                        className: "".concat(void 0 === c ? "" : c, " carousel_item")
                    }, g), {
                        children: b
                    }))
                }
        },
        82476: function(a, b, c) {
            c.d(b, {
                D: function() {
                    return d
                }
            });
            var d = function() {
                var a = null;
                return function(b) {
                    var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                        d = function() {
                            null != a && (window.clearTimeout(a), a = null)
                        };
                    return d(), a = setTimeout(function() {
                        b()
                    }, c), {
                        revoke: d
                    }
                }
            }
        }
    }
])