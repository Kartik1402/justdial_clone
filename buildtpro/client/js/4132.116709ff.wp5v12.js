"use strict";
(self.webpackChunkjustdial = self.webpackChunkjustdial || []).push([
    [4132], {
        16322: (t, a, e) => {
            e.d(a, {
                A: () => y
            });
            var i = e(96540),
                n = e(80083),
                r = e(5556),
                d = e.n(r),
                o = e(94895),
                s = e(36117),
                l = e(57757),
                c = e(85198),
                p = e(63989),
                u = e(97553),
                b = e(67448),
                m = e(76166),
                g = e(45213),
                h = Object.assign || function(t) {
                    for (var a = 1; a < arguments.length; a++) {
                        var e = arguments[a];
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                    }
                    return t
                },
                _ = null,
                f = null;

            function w(t) {
                var a = t.index,
                    e = t.children,
                    n = t.listing,
                    r = t.columns,
                    d = t.viewflag,
                    o = t.b2bflg,
                    l = t.hoteldata,
                    w = t.ishotel,
                    y = t.fratingdata,
                    v = t.nationalCatid,
                    k = t.search,
                    A = t.apiCatId,
                    x = t.keyword,
                    T = t.bdcaptiontype,
                    S = t.bdmsgtype,
                    P = t.bdText,
                    j = t.location,
                    I = t.history.push,
                    C = t.isMaps,
                    N = t.searchId,
                    L = t.openShareBoxAction,
                    B = t.jdmarttab,
                    q = t.searchLocation,
                    R = t.dlb2bflg,
                    D = t.addword,
                    O = t.openAbd,
                    E = t.isb2b,
                    F = t.setThumbnailTagAction,
                    U = j && j.query || {},
                    J = U.frt,
                    M = void 0 === J ? "" : J,
                    H = U.term,
                    V = void 0 === H ? "" : H,
                    z = U.trkid,
                    K = void 0 === z ? "" : z,
                    G = function(t) {
                        var a = encodeURIComponent(x || ""),
                            e = j.query.stype || "category_list",
                            i = n[r.catalog_flag] ? parseInt(n[r.catalog_flag], 10) : 0,
                            d = n[r.web_url] && n[r.web_url].card_url ? n[r.web_url].card_url : "/";
                        return n[r.web_url] && n[r.web_url].card_url && !(0, g.Sr)(n[r.docid]) ? (1 === i && 1 === n[r.inapp] ? d = d + "?nid=" + (v || "") : 1 === n[r.inapp] && (d = d + "?catid=" + A + "&checkin=" + (j.query.checkin || "") + "&checkout=" + (j.query.checkout || "") + "&vpfs=&stxt=" + a + "&nid=" + (v || "") + "&stype=" + e + "&search=" + k + "&area=" + n[r.NewAddress] + "&type=" + n[r.type] + "&totalJdReviews=" + n[r.totJdReviews] + "&bdmsgtype=" + S + "&bdcaptiontype=" + T + "&bdpage=rsltpge&slectedDimgTag=" + (f || "") + "&show_open_abd=" + (O && Object.keys(O).length > 0 ? 1 : 0) + "&isb2b=" + E + "&thumbnail_tag=" + (n[r.thumbnail_tag] && "" !== n[r.thumbnail_tag] ? n[r.thumbnail_tag] : "")), d) : (0 !== n[r.inapp] && !o || "sellers" === j.query.pgtyp ? 1 === n[r.inapp] && 1 === n[r.useshare] ? (-1 === (d = n[r.sharedt_url]).indexOf("?") && -1 === d.indexOf("nid=") ? d = d + "?nid=" + v : d.indexOf("?") > -1 && -1 === d.indexOf("nid=") && (d = d + "&nid=" + v), d = d.replace("https://www.justdial.com", "")) : (d = (0, c.universalLinkCreator)({
                            landingPageName: "DETAIL_PAGE",
                            routeParams: {
                                city: n[r.city] || "",
                                area: n[r.NewAddress] || "",
                                compName: n[r.name],
                                docId: n[r.docid]
                            },
                            queryString: 1 !== i ? "?catid=" + A + "&checkin=" + (j.query.checkin || "") + "&checkout=" + (j.query.checkout || "") + "&vpfs=&stxt=" + a + "&nid=" + (v || "") + "&stype=" + e + "&search=" + k + "&area=" + n[r.NewAddress] + "&type=" + n[r.type] + "&totalJdReviews=" + n[r.totJdReviews] + "&bdmsgtype=" + S + "&bdcaptiontype=" + T + "&bdpage=rsltpge&slectedDimgTag=" + (f || "") + "&show_open_abd=" + (O && Object.keys(O).length > 0 ? 1 : 0) + "&isb2b=" + E + "&thumbnail_tag=" + (n[r.thumbnail_tag] && "" !== n[r.thumbnail_tag] ? n[r.thumbnail_tag] : "") : null,
                            queryParams: 1 !== i ? {
                                bdText: P || ""
                            } : null,
                            editListFlag: 1
                        }), 1 === i && (d = d + "/catalogue?nid=" + (v || ""))) : ("" === (d = n[r.sharedt_url]) && t && (d = t[r.sharedt_url]), -1 === d.indexOf("?") && -1 === d.indexOf("nid=") ? d = d + "?nid=" + v : d.indexOf("?") > -1 && -1 === d.indexOf("nid=") && (d = d + "&nid=" + v)), d)
                    },
                    W = function(t, a) {
                        (0, u.A)(h({
                            li: t,
                            ll: "rsltpge",
                            vid: 2,
                            city: q.city,
                            nid: v || "",
                            event_data: n[r.event_data] || []
                        }, (0, b.z)(a)))
                    },
                    Z = function(t) {
                        t.stopPropagation(), t.preventDefault(), W("addphoto", {
                            event: "list_page_interaction",
                            interactionType: "Add_Photo",
                            interactionText: n[r.name],
                            interactionHeader: k,
                            positionNo: String(a + 1)
                        }), I("/" + n[r.city] + "/" + n[r.name] + "/" + n[r.docid] + "_BZDET/uploadphoto?bname=" + n[r.name] + "&city=" + n[r.city] + "&paidStatus=" + n[r.paidStatus] + "&source=RESULT-PAGE")
                    },
                    Q = function(t) {
                        t.stopPropagation(), t.preventDefault(), W("share_listing", {
                            event: "list_page_interaction",
                            interactionType: "Share_listing",
                            interactionText: n[r.name],
                            interactionHeader: k,
                            positionNo: String(a + 1)
                        }), L({
                            url: n[r.sharedt_url],
                            shareTxt: "",
                            ll: "rsltpge",
                            vid: 2,
                            docid: n[r.docid],
                            bname: n[r.name],
                            paid: n[r.paidStatus],
                            searchId: N
                        })
                    },
                    X = function(t, a, e, i) {
                        if (e.stopPropagation(), e.preventDefault(), "view_more" === a) {
                            var n = G().split("?")[0] + "/photos?" + G().split("?")[1] + "&isImageFullView=1&tab=all&galtype=all&pselect=";
                            I(n), W("morephotos", {})
                        } else f = i[t], I(G()), W("imageclick_" + (t + 1), {})
                    },
                    Y = function() {
                        var t, e = {
                            search_id: N,
                            price_available: l[n[r.docid]] && l[n[r.docid]].actual_price ? 1 : 0,
                            contracts: [{
                                docid: n[r.docid],
                                cname: 1 === o ? n[r.compName] : n[r.name],
                                position: a,
                                paid: n[r.paidStatus],
                                ds: n[r.ds]
                            }],
                            national_catid: v,
                            page_type: (t = "rsltpge", window.rsltTabSelected && "prdctView" === window.rsltTabSelected ? t = "prsltpge" : C && (t = "maps_rsltpge"), t),
                            event_type: "impression",
                            city: q.city,
                            data_city: q.dcity,
                            area: q.area,
                            category_name: x || "",
                            campaign_id: "0",
                            referrer: (0, m.qL)(),
                            jtkr: n[r.jtkr],
                            event_data: h({}, n[r.event_data], {
                                price_available: l[n[r.docid]] && l[n[r.docid]].actual_price ? 1 : 0
                            }) || [],
                            vid: 1 === o ? 311 : 2,
                            trkid: K
                        };
                        return 1 === parseInt(M, 10) && (e = h({}, e, {
                            fsearch: V
                        })), e
                    },
                    $ = function() {
                        if (n[r.web_url] && n[r.web_url].cname_url) {
                            var t = encodeURIComponent(x || ""),
                                a = j.query.stype || "category_list";
                            return n[r.web_url].cname_url + "?catid=" + A + "&checkin=" + (j.query.checkin || "") + "&checkout=" + (j.query.checkout || "") + "&vpfs=&stxt=" + t + "&nid=" + (v || "") + "&stype=" + a + "&search=" + k + "&area=" + n[r.NewAddress] + "&type=" + n[r.type] + "&totalJdReviews=" + n[r.totJdReviews] + "&bdmsgtype=" + S + "&bdcaptiontype=" + T + "&bdpage=rsltpge&slectedDimgTag=" + (f || "") + "&show_open_abd=" + (O && Object.keys(O).length > 0 ? 1 : 0) + "&thumbnail_tag=" + (n[r.thumbnail_tag] && "" !== n[r.thumbnail_tag] ? n[r.thumbnail_tag] : "")
                        }
                        return null
                    },
                    tt = function(t) {
                        t.target.dataset.preventimpression || (0, p.A)({
                            msg: "ADD_TASK",
                            payload: h({}, Y(), {
                                event_type: C ? "map_click_" + (a + 1) : "listing"
                            }, (0, b.z)({
                                event: "list_page_interaction",
                                interactionType: "card_click",
                                interactionHeader: x || "",
                                interactionText: 1 === o ? n[r.compName] : n[r.name],
                                positionNo: String(a + 1),
                                ncatid: v || "",
                                b2b: R
                            }))
                        }), n[r.thumbnail_tag] && "" !== n[r.thumbnail_tag] && F({
                            thumbnailTag: n[r.thumbnail_tag]
                        })
                    },
                    at = function() {
                        (0, p.A)({
                            msg: "ADD_TASK",
                            payload: Y()
                        })
                    };

                function et(t, a) {
                    var e = a.url,
                        i = a.tracker,
                        n = a.dService,
                        r = void 0 === n ? 0 : n;
                    e && !r && (t.preventDefault(), t.stopPropagation(), I(e)), 1 === i && W(r ? "view_service_catalog" : "product_available_listing", {})
                }(0, i.useEffect)((function() {
                    return _ = new s.A,
                        function() {
                            _.destroy(), f = null
                        }
                }), []), (0, i.useEffect)((function() {
                    _.revalidateImages()
                }), [n]);
                var it = function() {
                    var t = n;
                    return {
                        area: t[r.area],
                        attrData: !C && t[r.attr_data],
                        b2bflg: o,
                        datacity: t[r.data_city],
                        city: t[r.city],
                        compName: !C && t[r.compName],
                        compRating: t[r.compRating] ? t[r.compRating].toFixed(1) : t[r.compRating],
                        dimages: C ? [] : t[r.dimages] || [],
                        distance: t[r.distance],
                        docid: t[r.docid],
                        generateLinkFn: G,
                        handleShareURLFn: Q,
                        hotelListingData: l[t[r.docid]] || {},
                        infoarr: C ? [] : t[r.infoarr],
                        isHotel: w,
                        isMaps: C,
                        jdmartTab: B,
                        jdtTrustLine: !C && t[r.attr_data],
                        linefive: !C && t[r.linefive],
                        location: j,
                        name: t[r.name],
                        nameln: t[r.nameln],
                        NewAddress: !C && t[r.NewAddress],
                        opennow: !C && t[r.opennow],
                        opstring: !C && t[r.opstring],
                        paid: !C && t[r.paidStatus],
                        pdg: !C && t[r.pdg],
                        quickInfoTags: C ? [] : t[r.quickInfoTags],
                        rateColor: t[r.rateColor],
                        redirectToUploadPhotoFn: Z,
                        spTag: t[r.spTag] || {},
                        tag: !C && t[r.tag],
                        thumbnail: t[r.thumbnail],
                        totalReviews: t[r.totalReviews],
                        verified: t[r.verified],
                        viewflag: C ? 0 : d,
                        busTypeTag: n[r.bus_type_tag] || "",
                        photoCnt: n[r.photocnt] || "",
                        moq: n[r.moq] || "",
                        dtglink: n[r.dtglink] || "",
                        dimagesTag: n[r.dimages_tag] || "",
                        uqkey: t.uqKey,
                        handleClickOnCard: tt,
                        handleMakeImpressionCall: at,
                        columns: r,
                        index: a,
                        handleClickonImage: X,
                        isExternal: 1 !== n[r.inapp],
                        actionNode: n[r.action_node] || "",
                        addword: D,
                        keyword: x,
                        searchLocation: q,
                        nationalCatid: v,
                        push: I,
                        isLawyer: t[r.is_lawyer],
                        redirectToProductFn: et,
                        handleClickOnCompNameFn: $,
                        webUrl: n[r.web_url],
                        adArr: n[r.ad_arr],
                        adListing: n[r.ad_listing],
                        addTracker: W
                    }
                };
                if (!n) return null;
                var nt = {
                    fratingdata: y[n[r.docid]] || {
                        ratings: {
                            present: ""
                        }
                    },
                    docid: n[r.docid],
                    name: n[r.name],
                    b2bflg: o
                };
                return !it().docid && 1 !== o && it().actionNode && "owner_business_card" !== it().actionNode ? null : e.map((function(t) {
                    return (0, i.cloneElement)(t, "friendRating" === t.key ? nt : it())
                }))
            }
            w.propTypes = {
                listing: d().array.isRequired,
                history: d().object.isRequired,
                columns: d().object.isRequired,
                isMaps: d().bool
            }, w.defaultProps = {
                hoteldata: {},
                frating: {},
                isHotel: "0",
                insideCarasule: !1,
                categoryname: "",
                isExternal: !1
            };
            const y = (0, n.Ng)((function(t, a) {
                return {
                    listing: t.result.data.main.data[a.index],
                    loaded: t.result.loaded,
                    columns: t.result.data.main.columns,
                    listSnippet: t.result.data.main.listSnippet,
                    viewflag: t.result.data.init.viewflag,
                    b2bflg: t.result.data.init.b2bflg,
                    ishotel: t.result.data.init.ishotel,
                    hoteldata: t.result.hoteldata.data.main,
                    fratingdata: t.result.friendData.data,
                    nationalCatid: t.result.data.init.nationalCatid,
                    search: t.result.data.init._search,
                    apiCatId: t.result.data.init.catid,
                    keyword: t.result.data.init.keyword,
                    bdcaptiontype: t.result.data.init.bdcaptiontype,
                    bdmsgtype: t.result.data.init.bdmsgtype,
                    bdText: t.result.data.init.bdtext,
                    searchId: t.result.data.init.searchId,
                    jdmarttab: t.result.data.init.tabs,
                    openAbd: t.result.data.init.openAbd,
                    searchLocation: t.app.searchLocation,
                    dlb2bflg: t.result.data.init.dlb2bflg,
                    addword: t.result.data.init.addword,
                    passParams: t.result.data.init.passParams,
                    isb2b: t.result.data.init.isb2b
                }
            }), (function(t) {
                return {
                    toggleLoginPopUpAction: function(a) {
                        return t((0, l.a6)(a))
                    },
                    openShareBoxAction: function(a) {
                        return t((0, l.Zk)(a))
                    },
                    setThumbnailTagAction: function(a) {
                        return t((0, l.p1)(a))
                    }
                }
            }))((0, o.y)((0, i.memo)(w)))
        },
        21079: (t, a, e) => {
            e.d(a, {
                A: () => c
            });
            var i = e(96540),
                n = e(80083),
                r = e(94895),
                d = e(68118),
                o = e(97553),
                s = e(20402),
                l = Object.assign || function(t) {
                    for (var a = 1; a < arguments.length; a++) {
                        var e = arguments[a];
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                    }
                    return t
                };
            const c = (0, n.Ng)((function(t, a) {
                return {
                    listing: t.result.data.main.data[a.index],
                    columns: t.result.data.main.columns,
                    b2bflg: t.result.data.init.b2bflg,
                    tabs: t.result.data.init.tabs,
                    listSnippet: t.result.data.main.listSnippet
                }
            }), null)((0, r.y)((0, i.memo)((function(t) {
                var a = t.children,
                    e = t.columns,
                    n = t.history,
                    r = t.b2bflg,
                    c = t.location.query,
                    p = (t.tabs, t.flowType),
                    u = t.sliderIndex,
                    b = t.listSnippet,
                    m = t.listing;
                "productSlider" !== p || m[e.docid] || (m = b[m[e.action_node]].list[u]);
                var g, h = m[e.attr_data],
                    _ = l({}, m[e.jdpay], {
                        docId: m[e.docid],
                        compname: m[e.name]
                    }),
                    f = m[e.tag] || [],
                    w = h.node3 || [],
                    y = {
                        since: r && "sellers" !== c.pgtyp ? (g = Array.isArray(w) && w.length > 0 ? w[0] && w[0].split("|") : [], {
                            show: g.length > 0,
                            data: g
                        }) : {
                            show: !1,
                            data: ""
                        },
                        jdTrust: {
                            show: 1 === w[2]
                        },
                        jdVerified: {
                            show: 1 === w[1]
                        },
                        position3: {
                            show: w[3] && "" !== w[3] && w[3],
                            data: w[3]
                        },
                        jdPay: {
                            show: !!_.img,
                            data: _,
                            onClick: function(t) {
                                return function(t, a) {
                                    t.preventDefault(), a && ((0, o.A)({
                                        ll: "rsltpg",
                                        li: "jdpay",
                                        docid: _.docId
                                    }), (0, d.x3)() ? (0, s.A)({
                                        redirectionURL_not_used: a,
                                        docid: _.docId.replace(/-/g, "."),
                                        compName: _.compname,
                                        businessIds: [],
                                        query: {
                                            jdtab: "1"
                                        }
                                    }, (function() {
                                        return n.go(-1)
                                    })) : n.push("/login?from=rsltpg&redirect=jdpay&jdtab=1&docid=" + _.docId.replace(/-/g, ".") + "&compName=" + _.compname))
                                }(t, _.redirection_url)
                            }
                        },
                        tags: {
                            show: f.length > 0,
                            data: f
                        },
                        videoConsult: {
                            show: !!w[3],
                            img: w[3]
                        }
                    };
                return (0, i.cloneElement)(a, {
                    config: y
                })
            }))))
        },
        45213: (t, a, e) => {
            e.d(a, {
                Ay: () => l,
                Sr: () => s,
                UU: () => o
            });
            var i = e(68118),
                n = e(49392),
                r = e(41569);

            function d(t) {
                if (Array.isArray(t)) {
                    for (var a = 0, e = Array(t.length); a < t.length; a++) e[a] = t[a];
                    return e
                }
                return Array.from(t)
            }

            function o(t) {
                var a = n.A.get("businessIds");
                return [].concat(d(a)).indexOf(t.replace(/-/g, ".")) > -1 ? 1 : 0
            }

            function s(t) {
                var a = n.A.get("bizedit");
                return [].concat(d(a)).indexOf(t.replace(/-/g, ".")) > -1
            }

            function l(t) {
                var a = t.companydocid,
                    e = t.datacity,
                    n = void 0 === e ? "" : e,
                    d = t.companyname,
                    s = void 0 === d ? "" : d,
                    l = t.sharedturl;
                if (!a) throw new Error("Business docId not provided..");
                var c = (window && window.jd && window.jd.appStore && window.jd.appStore.getState("app").app.userData && window.jd.appStore.getState("app").app.userData.userProfile).mobile,
                    p = void 0 === c ? "" : c,
                    u = ((0, i.Eq)() || (0, i.x3)()) && "" !== p && 1 === o(a) ? "/edit_list/index.php" : "jd-business/edit-profile",
                    b = new URL(u, 1 === o(a) ? r.A.WAP_SITE_URL : "https://m.justdial.com");
                if (b.searchParams.set("hide_header", 1), b.searchParams.set("wap", 2), b.searchParams.set("isdcode", "0091"), b.searchParams.set("mobtyp", 3), b.searchParams.set("source", 2), b.searchParams.set("version", "10.3"), b.searchParams.set("native", 0), b.searchParams.set("concode", "0091"), b.searchParams.set("mvbksrc", "ft,pvr,cinemax,fc"), b.searchParams.set("city", n), b.searchParams.set("cont", s), b.searchParams.set("docid", a.replace(/-/g, ".")), b.searchParams.set("owner", o(a)), !(0, i.x3)()) {
                    var m = l.split(/https?:/);
                    m = "https:" + m[1], b.searchParams.set("shorturl", m)
                }
                return {
                    link: b.href,
                    isOwner: o(a)
                }
            }
        },
        86393: (t, a, e) => {
            e.d(a, {
                A: () => p
            });
            var i = e(80083),
                n = e(44765),
                r = e(3685),
                d = e(49621),
                o = e(37260),
                s = e(57757),
                l = e(68118),
                c = e(53004);

            function p(t) {
                var a = t.index,
                    e = t.transactionBtnAction,
                    p = t.bestDealBtnAction,
                    u = t.chatBtnAction,
                    b = t.flowType,
                    m = t.sliderIndex,
                    g = t.isMaps,
                    h = t.location,
                    _ = (0, i.d4)((function(t) {
                        return {
                            newbddesign: t.result.data.init.newbddesign,
                            columns: t.result.data.main.columns,
                            b2bflg: t.result.data.init.b2bflg,
                            dlb2bflg: t.result.data.init.dlb2bflg,
                            nationalCatid: t.result.data.init.nationalCatid,
                            searchLocation: t.app.searchLocation,
                            searchId: t.result.data.init.searchId,
                            btnProps: t.result.data.init.btnProps,
                            viewFlag: t.result.data.init.viewFlag,
                            listSnippet: t.result.data.main.listSnippet,
                            waLead: t.result.data.init.waLead
                        }
                    }), i.bN),
                    f = _.newbddesign,
                    w = _.columns,
                    y = _.b2bflg,
                    v = _.dlb2bflg,
                    k = _.nationalCatid,
                    A = _.searchLocation,
                    x = _.searchId,
                    T = _.listSnippet,
                    S = _.btnProps,
                    P = void 0 === S ? {} : S,
                    j = _.viewFlag,
                    I = _.waLead,
                    C = h && h.pathname && h.pathname.includes("/jdmart"),
                    N = (0, i.d4)((function(t) {
                        return {
                            listing: t.result.data.main.data[a]
                        }
                    }), i.bN).listing;
                if ("productSlider" === b && !N[w.docid]) {
                    var L = N[w.action_node];
                    N = T[L].list[m]
                }
                var B = (0, o.A)(s.bj),
                    q = N[w.vertical_data] || {},
                    R = N[w.VNumber] || {},
                    D = function() {
                        return g && C ? "b2b_srsltpg" : g && !C ? "b2b_rsltpg" : "rsltpge"
                    },
                    O = function(t) {
                        t.preventDefault(), d.A.merge("bddataRslt", {
                            docid: N[w.docid] || "",
                            cname: 1 === y ? N[w.compName] : N[w.name],
                            ask_mobile: N[w.ask_mobile],
                            hcatarr: N[w.hcatarr],
                            ncatid: "" === k ? N[w.hcatarr] && N[w.hcatarr].nid ? N[w.hcatarr].nid : N[w.ncatid] : k,
                            paidstatus: N[w.paidStatus],
                            pname: N[w.name],
                            bCity: N[w.city],
                            bArea: N[w.web_url] && N[w.web_url].area ? N[w.web_url].area : N[w.area],
                            bd: k ? 1 : 2,
                            vid: 1 === y ? 311 : 2,
                            b2bpg: 1 === y ? 1 : 0,
                            frmpg: D()
                        }), B({
                            contactList: N[w.VNumber],
                            allocateid: N[w.callalocation],
                            docid: N[w.docid] || "",
                            companyname: 1 === y ? N[w.compName] : N[w.name],
                            city: A.city || "",
                            area: A.area || "",
                            datacity: N[w.city] || "",
                            paidstatus: N[w.paidStatus],
                            askmobile: N[w.ask_mobile],
                            keyword: 1 === y ? N[w.name] : "",
                            ncatid: k || N[w.ncatid],
                            searchId: x || "",
                            ll: D(),
                            fromPage: g ? "maps_rsltpge" : "rsltpge",
                            paid: N[w.paidStatus],
                            ds: N[w.ds],
                            jtkr: N[w.jtkr],
                            bd: k || N[w.ncatid] ? 1 : 2,
                            bcity: N[w.city] || "",
                            barea: N[w.web_url] && N[w.web_url].area ? N[w.web_url].area : N[w.area],
                            b2bpg: C || 1 === y ? 1 : 0,
                            eventData: N[w.event_data] || [],
                            vid: 1 === y ? 311 : 2,
                            nctB2b: 1 === y ? 1 : 0,
                            position: g ? "mapview" : "listing_" + (2 === j ? "Call" : "Call Now"),
                            pagename: "rsltpge",
                            dlb2b: v,
                            skipLead: (0, l.Ri)() || r.A.get("bdusrmob") || 0 === N[w.ask_mobile] ? 1 : 0
                        })
                    };
                var E, F, U;
                return [{
                    showCall: {
                        show: "1" === f && 1 === R.cancall,
                        clsName: 0 === q.multplBtn ? "callbuttonbox100" : "callbuttonbox",
                        text: 2 === j ? "Call" : P.call_btn_text || "Call Now",
                        onClick: function(t) {
                            (0, n.A)(O, t), window.et = Date.now()
                        },
                        ButtonStyle: P.call_btn,
                        callIcon: P.call_icon
                    },
                    showTransactionBtn: (E = "", F = "", U = d.A.get("waBdFailed"), !Number(I) || !0 === U || (0, l.x3)() || (0, l.SM)() || (0, c.nr)() || 1 === q.verticalBtn.show ? (E = "", F = "") : (E = "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newicon/whatsappIcn2308x48.png", F = "WhatsApp"), {
                        show: !("1" !== f && "2" !== f || 1 !== q.verticalBtn.show && 1 !== q.bdbtn.show),
                        clsName: 0 === q.multplBtn ? "bestdealbuttonbox100" : "bestdealbuttonbox",
                        text: "" !== F ? F : 1 === q.verticalBtn.show ? q.verticalBtn.btnTxt : 0 === q.verticalBtn.show && q.bdbtn.btnTxt,
                        onClick: function(t) {
                            return (0, n.A)(q.verticalBtn.wpChat ? u : 1 === q.verticalBtn.show ? e : 0 === q.verticalBtn.show ? p : function() {}, t)
                        },
                        ButtonStyle: P && P.bd_btn,
                        icon: q.verticalBtn.buttonIcon || "",
                        bdicon: E || P.bd_icon,
                        showIconOnBdBtn: "" !== E || 1 === q.bdbtn.show,
                        subText: 0 === q.verticalBtn.show && 1 === q.bdbtn.show && N[w.web_url] && N[w.web_url].response_time ? N[w.web_url].response_time : ""
                    })
                }]
            }
        }
    }
]);