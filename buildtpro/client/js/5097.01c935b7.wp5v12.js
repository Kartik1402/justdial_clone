"use strict";
(self.webpackChunkjustdial = self.webpackChunkjustdial || []).push([
    [5097], {
        95097: (a, t, n) => {
            n.d(t, {
                A: () => l
            });
            var e = n(73773),
                r = n(85198);
            const i = function(a) {
                var t = a.listing,
                    n = a.columns,
                    e = a.query,
                    i = a.b2bflg,
                    d = a.nationalCatid,
                    o = t[n.catalog_flag] ? parseInt(t[n.catalog_flag], 10) : 0,
                    u = "/";
                return 0 !== t[n.inapp] && !i || "sellers" === e.pgtyp ? 1 === t[n.inapp] && 1 === t[n.useshare] ? u = t[n.sharedt_url].replace("https://www.justdial.com", "") : (u = (0, r.universalLinkCreator)({
                    landingPageName: "DETAIL_PAGE",
                    routeParams: {
                        city: t[n.city] || "",
                        area: t[n.NewAddress] || "",
                        compName: t[n.name],
                        docId: t[n.docid]
                    }
                }), 1 === o && (u = u + "/catalogue?nid=" + (d || ""))) : u = "" + (u = t[n.sharedt_url]), u
            };
            var d = n(85905),
                o = Object.assign || function(a) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (a[e] = n[e])
                    }
                    return a
                };

            function u(a, t, n) {
                return t in a ? Object.defineProperty(a, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : a[t] = n, a
            }

            function s(a) {
                if (Array.isArray(a)) {
                    for (var t = 0, n = Array(a.length); t < a.length; t++) n[t] = a[t];
                    return n
                }
                return Array.from(a)
            }
            var c = {
                loaded: !1,
                loading: !1,
                pfLoading: !1,
                pfLoaded: !1,
                paginationLoading: !1,
                hideNavShell: !1,
                ncatid: "",
                keyword: "",
                docidPointer: 9,
                nextdocid: [],
                requiredDocid: "",
                dHash: "",
                sHash: "",
                currentPage: 1,
                page: 1,
                data: {
                    init: {},
                    main: {}
                },
                hoteldata: {
                    hash: "",
                    data: {
                        main: {}
                    }
                },
                friendData: {
                    hash: "",
                    data: {}
                },
                storeFilter: {},
                topPaidListings: [],
                primarySecFilters: {
                    main: {
                        results: {
                            primary: [{
                                cnt: "5",
                                d: [],
                                ds: 0,
                                f: 1,
                                f_mv: "10000",
                                i: "j_sortby.png",
                                is: "",
                                mh: "Sort by",
                                ms: "0",
                                mv: "10000",
                                s: 0,
                                uqKey: "10000"
                            }, {
                                cnt: "",
                                d: [],
                                ds: 0,
                                f: 1,
                                f_mv: "0",
                                i: "j_filter.png",
                                is: "",
                                mh: "Filters",
                                ms: "0",
                                mv: "1000",
                                s: 0,
                                uqKey: "1000"
                            }, {
                                cnt: "",
                                d: [],
                                ds: 0,
                                f: 1,
                                f_mv: "0",
                                i: "j_map.png",
                                is: "",
                                mh: "Map",
                                ms: "0",
                                mv: "5000",
                                s: 0,
                                uqKey: "5000"
                            }],
                            secondary: {}
                        }
                    },
                    statusCode: ""
                },
                filters: {
                    filterLoading: !0,
                    filterLoaded: !1,
                    main: {
                        results: {}
                    }
                },
                filterCall: !1,
                seoFooterData: {
                    loading: !0
                },
                abdData: {
                    hash: "",
                    loaded: !1,
                    nid: "",
                    questionData: {}
                },
                abd_info: {
                    showpopup: !1,
                    popupInfo: {}
                },
                requestedURL: {
                    pathname: ""
                },
                resultSectionData: {},
                pasfData: {
                    loaded: !1,
                    data: {}
                },
                openAbdData: {
                    loading: !1,
                    data: {}
                }
            };
            const l = function() {
                var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                    t = arguments[1],
                    n = t.type,
                    r = t.payload,
                    l = t.payload,
                    f = (l = void 0 === l ? {} : l).response,
                    h = void 0 === f ? "" : f,
                    p = l.pathname;
                switch (n) {
                    case d.iz:
                        return (0, e.handle)(a, t, {
                            start: function(a) {
                                return o({}, a, {
                                    loading: !0,
                                    loaded: !1,
                                    currentPage: 1
                                })
                            },
                            success: function(a) {
                                return o({}, a, {
                                    loaded: !0,
                                    docidPointer: r.extraData.docidPointer,
                                    currentPage: r.extraData.currentPage,
                                    data: r,
                                    keyword: r.init.keyword,
                                    ncatid: r.init.nationalCatid,
                                    sHash: r.init.sHash || "",
                                    dHash: r.main.dHash || "",
                                    nextdocid: r.init.nextdocid,
                                    topPaidListings: (t = r.main, n = r.main.columns, e = r.main.listSnippet, d = {
                                        nationalCatid: r.init.nationalCatid,
                                        b2bflg: r.init.b2bflg,
                                        query: r.extraData.query
                                    }, u = d.nationalCatid, s = void 0 === u ? "" : u, c = d.b2bflg, l = d.query, f = void 0 === l ? {} : l, h = [], t && t.data.length > 0 && t.data.map((function(a) {
                                        if ("" !== a[n.docid] && Number(a[n.paidStatus]) > 0) h.push({
                                            name: a[n.nameln] || a[n.name],
                                            link: i({
                                                listing: a,
                                                nationalCatid: s,
                                                columns: n,
                                                b2bflg: c,
                                                query: f
                                            })
                                        });
                                        else if ("" !== a[n.action_node]) {
                                            var t = e[a[n.action_node]] && e[a[n.action_node]].list ? e[a[n.action_node]].list[0] : {};
                                            Number(t[n.paidStatus]) > 0 && h.push({
                                                name: t[n.nameln] || t[n.name],
                                                link: i({
                                                    listing: t,
                                                    nationalCatid: s,
                                                    columns: n,
                                                    b2bflg: c,
                                                    query: f
                                                })
                                            })
                                        }
                                        return null
                                    })), h)
                                });
                                var t, n, e, d, u, s, c, l, f, h
                            },
                            failure: function(a) {
                                return o({}, a, {
                                    loaded: !1
                                })
                            },
                            finish: function(a) {
                                return o({}, a, {
                                    loading: !1
                                })
                            }
                        });
                    case d.UE:
                        return o({}, a, {
                            loaded: !0,
                            docidPointer: r.extraData ? r.extraData.docidPointer : 9,
                            currentPage: r.extraData.currentPage,
                            data: h,
                            keyword: h.init.keyword,
                            ncatid: h.init.nationalCatid,
                            sHash: h.init.sHash || "",
                            dHash: h.main.dHash || "",
                            nextdocid: h.init.nextdocid,
                            requestedURL: {
                                pathname: p || ""
                            }
                        });
                    case d.xo:
                        return (0, e.handle)(a, t, {
                            start: function(a) {
                                return a
                            },
                            success: function(a) {
                                return a
                            },
                            failure: function(a) {
                                return a
                            },
                            finish: function(a) {
                                return a
                            }
                        });
                    case d.jn:
                        return (0, e.handle)(a, t, {
                            start: function(a) {
                                return a
                            },
                            success: function(a) {
                                return o({}, a, {
                                    hoteldata: o({}, a.hoteldata, {
                                        hash: r.main.hash,
                                        data: {
                                            main: r.main.data
                                        }
                                    })
                                })
                            },
                            failure: function(a) {
                                return a
                            },
                            finish: function(a) {
                                return a
                            }
                        });
                    case d.Iw:
                        return (0, e.handle)(a, t, {
                            start: function(a) {
                                return a
                            },
                            success: function(a) {
                                return o({}, a, {
                                    friendData: o({}, a.friendData, {
                                        hash: r.main.hash,
                                        data: r.main.data
                                    })
                                })
                            },
                            failure: function(a) {
                                return a
                            },
                            finish: function(a) {
                                return a
                            }
                        });
                    case d.J9:
                        return (0, e.handle)(a, t, {
                            start: function(a) {
                                return o({}, a, {
                                    paginationLoading: !0
                                })
                            },
                            success: function(a) {
                                return o({}, a, {
                                    paginationLoading: !1,
                                    docidPointer: r.extraData.docidPointer,
                                    dHash: r.main.dHash || "",
                                    sHash: r.init.sHash || "",
                                    currentPage: r.extraData.currentPage,
                                    data: o({}, a.data, {
                                        main: o({}, a.data.main, {
                                            data: [].concat(s(a.data.main.data), s(r.main.data)),
                                            listSnippet: o({}, a.data.main.listSnippet, r.main.listSnippet)
                                        }),
                                        init: o({}, a.data.init, {
                                            pharmacyData: o({}, a.data.init.pharmacyData, {
                                                pecounter: r.init.pharmacyData.pecounter || 0,
                                                posarr: [].concat(s(a.data.init.pharmacyData.posarr), s(r.init.pharmacyData.posarr))
                                            }),
                                            adwordpos: o({}, a.data.init.adwordpos, r.init.adwordpos),
                                            addword: o({}, r.init.addword, a.data.init.addword),
                                            lazyLoadComponentConfig: o({}, r.init.lazyLoadComponentConfig, a.data.init.lazyLoadComponentConfig),
                                            openAbd: o({}, a.data.init.openAbd, r.init.openAbd),
                                            googleAdsData: [].concat(s(a.data.init.googleAdsData), s(r.init.googleAdsData))
                                        })
                                    })
                                })
                            },
                            failure: function(a) {
                                return o({}, a, {
                                    paginationLoading: !1
                                })
                            },
                            finish: function(a) {
                                return a
                            }
                        });
                    case d.OJ:
                        return (0, e.handle)(a, t, {
                            start: function(a) {
                                return a
                            },
                            success: function(a) {
                                return o({}, a, {
                                    hoteldata: o({}, a.hoteldata, {
                                        hash: r.main.hash,
                                        data: {
                                            main: o({}, a.hoteldata.data.main, r.main.data)
                                        }
                                    })
                                })
                            },
                            failure: function(a) {
                                return a
                            },
                            finish: function(a) {
                                return a
                            }
                        });
                    case d.Zh:
                        return (0, e.handle)(a, t, {
                            start: function(a) {
                                return a
                            },
                            success: function(a) {
                                return o({}, a, {
                                    friendData: o({}, a.friendData, {
                                        hash: r.main.hash,
                                        data: o({}, a.friendData.data, r.main.data)
                                    })
                                })
                            },
                            failure: function(a) {
                                return a
                            },
                            finish: function(a) {
                                return a
                            }
                        });
                    case d.MB:
                        return (0, e.handle)(a, t, {
                            start: function(a) {
                                return o({}, a, {
                                    filterLoading: !0
                                })
                            },
                            success: function(a) {
                                return o({}, a, {
                                    filterLoaded: !0,
                                    filters: {
                                        main: r.main,
                                        init: r.init
                                    }
                                })
                            },
                            failure: function(a) {
                                return o({}, a, {
                                    filterLoaded: !1,
                                    filters: {
                                        main: {},
                                        init: {}
                                    }
                                })
                            },
                            finish: function(a) {
                                return o({}, a, {
                                    filterLoading: !1
                                })
                            }
                        });
                    case d.u2:
                        return (0, e.handle)(a, t, {
                            start: function(a) {
                                return o({}, a, {
                                    pfLoading: !0,
                                    pfLoaded: !1
                                })
                            },
                            success: function(a) {
                                return o({}, a, {
                                    pfLoaded: !0,
                                    primarySecFilters: {
                                        main: r.main,
                                        init: r.init
                                    }
                                })
                            },
                            failure: function(a) {
                                return o({}, a, {
                                    pfLoaded: !1,
                                    primarySecFilters: {
                                        main: o({}, a.primarySecFilters.main),
                                        statusCode: r.statusCode
                                    }
                                })
                            },
                            finish: function(a) {
                                return o({}, a, {
                                    pfLoading: !1
                                })
                            }
                        });
                    case d.cn:
                        return o({}, a, {
                            storeFilter: o({}, t.extraData)
                        });
                    case d.vM:
                        return o({}, a, {
                            storeFilter: o({}, a.storeFilter, {
                                reSetFilter: t.resetFlag
                            })
                        });
                    case d.yo:
                        return o({}, a, {
                            filterCall: t.filterCall
                        });
                    case d.gI:
                        return o({}, a, {
                            FilterData: {}
                        });
                    case d.LQ:
                        return o({}, a, {
                            storeFilter: o({}, t.extraData)
                        });
                    case d.qF:
                        return (0, e.handle)(a, t, {
                            start: function(a) {
                                return o({}, a, {
                                    seoFooterData: {
                                        loading: !0
                                    }
                                })
                            },
                            success: function(a) {
                                return o({}, a, {
                                    seoFooterData: o({}, r.main || {}, {
                                        loading: !1
                                    })
                                })
                            },
                            failure: function(a) {
                                return o({}, a, {
                                    seoFooterData: {
                                        loading: !1
                                    }
                                })
                            },
                            finish: function(a) {
                                return a
                            }
                        });
                    case d.K1:
                        return (0, e.handle)(a, t, {
                            start: function(a) {
                                return o({}, a, {
                                    abdData: o({}, a.abdData, {
                                        loaded: !1,
                                        nid: r && r.extraData && r.extraData.nid ? r.extraData.nid : "",
                                        questionData: {}
                                    })
                                })
                            },
                            success: function(a) {
                                return o({}, a, {
                                    abdData: {
                                        hash: r.extraData.hash,
                                        loaded: !0,
                                        nid: r && r.extraData && r.extraData.nid ? r.extraData.nid : "",
                                        questionData: r.results && r.results.question && r.results.question.length > 0 ? r.results.question[0] : {}
                                    }
                                })
                            },
                            failure: function(a) {
                                return o({}, a)
                            },
                            finish: function(a) {
                                return o({}, a)
                            }
                        });
                    case d.Zs:
                        return (0, e.handle)(a, t, {
                            start: function(a) {
                                return o({}, a, {
                                    resultSectionData: o({}, a.resultSectionData, {
                                        loaded: !1
                                    })
                                })
                            },
                            success: function(a) {
                                return o({}, a, {
                                    resultSectionData: o({}, r.main, {
                                        loaded: !0
                                    })
                                })
                            },
                            failure: function(a) {
                                return o({}, a)
                            },
                            finish: function(a) {
                                return o({}, a)
                            }
                        });
                    case d.Fm:
                        return o({}, a, {
                            requestedURL: t.requestedURL
                        });
                    case d.hP:
                        return (0, e.handle)(a, t, {
                            start: function(a) {
                                return a
                            },
                            success: function(a) {
                                if (r.extraData.docid) {
                                    var t = u({}, r.extraData.docid, o({}, a.friendData.data[r.extraData.docid], {
                                        blc: o({}, a.friendData.data[r.extraData.docid].blc, {
                                            fav: Number(!a.friendData.data[r.extraData.docid].blc.fav)
                                        })
                                    }));
                                    return o({}, a, {
                                        friendData: {
                                            data: o({}, a.friendData.data, t)
                                        }
                                    })
                                }
                                return a
                            },
                            failure: function(a) {
                                return a
                            },
                            finish: function(a) {
                                return a
                            }
                        });
                    case d.j_:
                        return a.data.main.data[r.index] = o({}, a.data.main.data[r.index], u({}, a.data.main.columns.favflag, "add" === r.case ? "0" : "1")), o({}, a);
                    case d.kq:
                        return (0, e.handle)(a, t, {
                            start: function(a) {
                                return a
                            },
                            success: function(a) {
                                if (r.extraData.docid) {
                                    var t = u({}, r.extraData.docid, o({}, a.friendData.data[r.extraData.docid], {
                                        blc: o({}, a.friendData.data[r.extraData.docid].blc, {
                                            me: Number(!a.friendData.data[r.extraData.docid].blc.me)
                                        })
                                    }));
                                    return o({}, a, {
                                        friendData: {
                                            data: o({}, a.friendData.data, t)
                                        }
                                    })
                                }
                                return a
                            },
                            failure: function(a) {
                                return a
                            },
                            finish: function(a) {
                                return a
                            }
                        });
                    case d.q5:
                        if (t.docid) {
                            var m = u({}, t.docid, o({}, a.friendData.data[t.docid], {
                                blc: o({}, a.friendData.data[t.docid].blc, {
                                    l: a.friendData.data[t.docid].blc.l + t.like,
                                    s: a.friendData.data[t.docid].blc.s + t.share
                                })
                            }));
                            return o({}, a, {
                                friendData: {
                                    data: o({}, a.friendData.data, m)
                                }
                            })
                        }
                        return a;
                    case d.ED:
                        var D = a.data.init.nextdocid.splice(0, 9);
                        return o({}, a, {
                            requiredDocid: D.join(","),
                            page: t.page
                        });
                    case d.ku:
                        return o({}, a, {
                            abd_info: {
                                showpopup: r.popupStatus,
                                popupInfo: r.popupInfo
                            }
                        });
                    case d.fy:
                        return (0, e.handle)(a, t, {
                            start: function(a) {
                                return o({}, a)
                            },
                            success: function(a) {
                                return o({}, a, {
                                    pasfData: {
                                        loaded: !0,
                                        data: r.main
                                    }
                                })
                            },
                            failure: function(a) {
                                return o({}, a, {
                                    pasfData: {
                                        loaded: !1,
                                        data: {}
                                    }
                                })
                            },
                            finish: function(a) {
                                return o({}, a)
                            }
                        });
                    case d.bI:
                        return (0, e.handle)(a, t, {
                            start: function(a) {
                                return o({}, a, {
                                    openAbdData: {
                                        data: {},
                                        loading: !0,
                                        pathName: ""
                                    }
                                })
                            },
                            success: function(a) {
                                return o({}, a, {
                                    openAbdData: {
                                        data: r && r.abd_resp && r.abd_resp.question && Array.isArray(r.abd_resp.question) ? r.abd_resp.question[0] : [],
                                        loading: !0,
                                        pathName: r.extraData && r.extraData.pathName
                                    }
                                })
                            },
                            failure: function(a) {
                                return o({}, a)
                            },
                            finish: function(a) {
                                return o({}, a)
                            }
                        });
                    default:
                        return a
                }
            }
        }
    }
]);