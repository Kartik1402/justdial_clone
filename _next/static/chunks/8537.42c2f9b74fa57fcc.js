"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8537], {
        8537: function(a, b, c) {
            c.r(b);
            var d = c(85893),
                e = c(60536),
                f = c.n(e),
                g = c(67294),
                h = c(73935),
                i = c(56064),
                j = c(32718),
                k = c(77943),
                l = {
                    header_login: {
                        message: "Login/ Sign up with your mobile number for more personalized experience",
                        className: "login"
                    },
                    header_leads: {
                        message: (0, d.jsx)("span", {
                            children: "Manage your leads and view dashboard"
                        }),
                        className: "login"
                    },
                    popular_categories: {
                        message: "Click here to explore more popular categories",
                        className: "popularcategories"
                    },
                    rate_your_experience: {
                        message: (0, d.jsx)("span", {
                            children: "Click here to quickly rate your Experience with the business"
                        }),
                        className: "login"
                    },
                    whatsapp_support: {
                        message: (0, d.jsx)("span", {
                            children: "Click to get instant support"
                        }),
                        className: "login"
                    },
                    header_advertise: {
                        message: "Click here to Advertise your business for more leads",
                        className: "login"
                    },
                    header_mybusiness: {
                        message: "Click here to edit and manage your business",
                        className: "login"
                    },
                    header_language: {
                        message: (0, d.jsx)("span", {
                            children: "Justdial is also available in Hindi language. Click to try"
                        }),
                        className: "login"
                    },
                    header_freelisting: {
                        message: "Click here to Instantly free list your business with Justdial",
                        className: "login"
                    }
                },
                m = (0, g.forwardRef)(function(a, b) {
                    var c = (0, i.v9)(function(a) {
                            var b, c;
                            return (null == a ? void 0 : null === (b = a.user) || void 0 === b ? void 0 : null === (c = b.data) || void 0 === c ? void 0 : c.data) || {}
                        }),
                        e = (0, g.useState)(!0),
                        m = e[0],
                        n = e[1],
                        o = (0, g.useState)(),
                        p = o[0],
                        q = o[1],
                        r = function() {
                            var a, b, d, e = (0, k.S8)();
                            e || ((0, k.jh)("header_login"), e = "header_login"), (null == c ? void 0 : c.mobile) && "header_login" === e && ((0, k.jh)("header_freelisting"), e = "header_freelisting");
                            var f = (null === (a = c.mobile) || void 0 === a ? void 0 : a.length) > 0 && (null === (b = c.sdid) || void 0 === b ? void 0 : b.length) > 0 && (null === (d = c.bid) || void 0 === d ? void 0 : d.length) > 10,
                                g = j.m.getCookie("jdvn"),
                                h = !f && !("1" == g && (null == c ? void 0 : c.mobile));
                            "header_freelisting" !== e || h || ((0, k.jh)("popular_categories"), e = "popular_categories"), q(e)
                        },
                        s = p && l[p] ? document.getElementById(p) : null,
                        t = s && l[p] || {};
                    return (0, g.useImperativeHandle)(b, function() {
                        return {
                            check: function(a) {
                                a === p && (n(!0), r())
                            }
                        }
                    }, [p]), (0, g.useEffect)(function() {
                        s && setTimeout(function() {
                            (0, k.jh)()
                        }, 1e3)
                    }, [s]), (0, g.useEffect)(function() {
                        r();
                        var a = setTimeout(function() {
                            n(!1)
                        }, 5e3);
                        return function() {
                            window.clearTimeout(a)
                        }
                    }, []), (0, d.jsxs)(d.Fragment, {
                        children: [s && m ? (0, d.jsx)(d.Fragment, {
                            children: (0, h.createPortal)((0, d.jsx)("div", {
                                className: "jsx-22062671675d0464 " + "ctatooltip ctatooltip_header ctatooltip_bottom ".concat(t.className),
                                children: (0, d.jsx)("div", {
                                    className: "jsx-22062671675d0464 ctatooltip_textbox",
                                    children: (0, d.jsx)("div", {
                                        className: "jsx-22062671675d0464 font13 fw400 colorFFF mt-5",
                                        children: t.message
                                    })
                                })
                            }), s)
                        }) : null, (0, d.jsx)(f(), {
                            id: "22062671675d0464",
                            children: '.guide-container{position:absolute;z-index:10000000;inset:0}.guide-container div{background-color:rgba(0,0,0,.3);position:absolute}.ctatooltip_header .ctaarrow_icon{background-image:url(https://akam.cdn.jdmagicbox.com/images/icontent/web2022/ctaarrow_icon.svg);width:16px;height:16px}.ctatooltip_header.ctatooltip_bottom{position:absolute;padding:14px;border:solid 1px#ffffff80;background-color:#000;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;z-index:5;width:275px;-webkit-animation:bounce 1.5s infinite;-moz-animation:bounce 1.5s infinite;-o-animation:bounce 1.5s infinite;animation:bounce 1.5s infinite;-webkit-animation-delay:.2s;-moz-animation-delay:.2s;-o-animation-delay:.2s;animation-delay:.2s;opacity:0}.ctatooltip_header.ctatooltip_bottom:before{content:"";width:0;height:0;border-right:7px solid#0000;border-left:7px solid#0000;border-top:15px solid#0000;border-bottom:15px solid rgba(255,255,255,.5);position:absolute;right:70px;top:-30px;z-index:2}.ctatooltip_header.ctatooltip_bottom:after{content:"";width:0;height:0;border-right:7px solid#0000;border-left:7px solid#0000;border-top:15px solid#0000;border-bottom:15px solid#000;position:absolute;right:70px;top:-30px;z-index:3}.ctatooltip_header.ctatooltip_left{position:absolute;padding:14px;border:solid 1px#ffffff80;background-color:#000;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;z-index:5;width:275px;-webkit-animation:bounce 1.5s infinite;-moz-animation:bounce 1.5s infinite;-o-animation:bounce 1.5s infinite;animation:bounce 1.5s infinite;-webkit-animation-delay:.2s;-moz-animation-delay:.2s;-o-animation-delay:.2s;animation-delay:.2s;opacity:0}.ctatooltip_header.ctatooltip_left:before{content:"";width:0;height:0;border-right:7px solid#0000;border-left:7px solid#0000;border-top:15px solid#0000;border-bottom:15px solid rgba(255,255,255,.5);position:absolute;right:70px;top:-30px;z-index:2}.ctatooltip_header.ctatooltip_left:after{content:"";width:0;height:0;border-right:7px solid#0000;border-left:7px solid#0000;border-top:15px solid#0000;border-bottom:15px solid#000;position:absolute;right:70px;top:-30px;z-index:3}.ctatooltip_header .ctatooltip_textbox{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%}.ctatooltip_header .ctatooltip_buttton{min-width:80px;height:30px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;line-height:1.1;border:none;cursor:pointer}.ctatooltip_header .ctatooltip_buttton.filled{background-color:#fff;border:solid 1px#fff}.ctatooltip_header .ctatooltip_buttton.unfilled{background-color:#0000;border:solid 1px#afafaf;color:#afafaf}.ctatooltip_header .ctatooltip_btnbox{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%}.ctatooltip_header.login{top:50px;right:0px}.ctatooltip_header.login:before{content:"";width:0;height:0;border-right:7px solid#0000;border-left:7px solid#0000;border-top:15px solid#0000;border-bottom:15px solid rgba(255,255,255,.5);position:absolute;right:70px;top:-30px;z-index:2}.ctatooltip_header.login:after{content:"";width:0;height:0;border-right:7px solid#0000;border-left:7px solid#0000;border-top:15px solid#0000;border-bottom:15px solid#000;position:absolute;right:70px;top:-30px;z-index:3}.ctatooltip_header.callnow{top:unset;bottom:60px;right:0px}.ctatooltip_header.callnow:before{content:"";width:0;height:0;border-right:7px solid#0000;border-left:7px solid#0000;border-bottom:15px solid#0000;border-top:15px solid rgba(255,255,255,.5);position:absolute;right:70px;bottom:-30px;z-index:2;top:unset}.ctatooltip_header.callnow:after{content:"";width:0;height:0;border-right:7px solid#0000;border-left:7px solid#0000;border-bottom:15px solid#0000;border-top:15px solid#000;position:absolute;right:70px;bottom:-30px;z-index:3;top:unset}.ctatooltip_header.popularcategories{top:-85px;bottom:unset;right:0px}.ctatooltip_header.popularcategories:before{content:"";width:0;height:0;border-right:7px solid#0000;border-left:7px solid#0000;border-bottom:15px solid#0000;border-top:15px solid rgba(255,255,255,.5);position:absolute;right:70px;bottom:-30px;z-index:2;top:unset}.ctatooltip_header.popularcategories:after{content:"";width:0;height:0;border-right:7px solid#0000;border-left:7px solid#0000;border-bottom:15px solid#0000;border-top:15px solid#000;position:absolute;right:35px;bottom:-30px;z-index:3;top:unset}.ctatooltip_header.review{top:unset;bottom:60px;right:-20px}.ctatooltip_header.review:before{content:"";width:0;height:0;border-right:7px solid#0000;border-left:7px solid#0000;border-bottom:15px solid#0000;border-top:15px solid rgba(255,255,255,.5);position:absolute;right:70px;bottom:-30px;z-index:2;top:unset}.ctatooltip_header.review:after{content:"";width:0;height:0;border-right:7px solid#0000;border-left:7px solid#0000;border-bottom:15px solid#0000;border-top:15px solid#000;position:absolute;right:70px;bottom:-30px;z-index:3;top:unset}.ctatooltip_header.share{top:unset;bottom:60px;right:-46px}.ctatooltip_header.share:before{content:"";width:0;height:0;border-right:7px solid#0000;border-left:7px solid#0000;border-bottom:15px solid#0000;border-top:15px solid rgba(255,255,255,.5);position:absolute;right:70px;bottom:-30px;z-index:2;top:unset}.ctatooltip_header.share:after{content:"";width:0;height:0;border-right:7px solid#0000;border-left:7px solid#0000;border-bottom:15px solid#0000;border-top:15px solid#000;position:absolute;right:70px;bottom:-30px;z-index:3;top:unset}.ctatooltip_header.addphoto{top:unset;bottom:60px;right:0px}.ctatooltip_header.addphoto:before{content:"";width:0;height:0;border-right:7px solid#0000;border-left:7px solid#0000;border-bottom:15px solid#0000;border-top:15px solid rgba(255,255,255,.5);position:absolute;right:70px;bottom:-30px;z-index:2;top:unset}.ctatooltip_header.addphoto:after{content:"";width:0;height:0;border-right:7px solid#0000;border-left:7px solid#0000;border-bottom:15px solid#0000;border-top:15px solid#000;position:absolute;right:70px;bottom:-30px;z-index:3;top:unset}'
                        })]
                    })
                });
            b.default = m
        }
    }
])