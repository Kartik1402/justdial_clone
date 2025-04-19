self.__BUILD_MANIFEST = function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: "/icc-cricket-world-cup",
                destination: "/world-cup?vid=567"
            }, {
                source: "/Indian-Premier-League",
                destination: "/world-cup?vid=616"
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/appointment",
                destination: x
            }, {
                source: "/:city/:festName-(Festival-Collections-[0-9]{3})+",
                destination: o
            }, {
                source: "/:city/:festName-(Seasonal-Collections-[0-9]{3})+",
                destination: o
            }, {
                source: "/:city/all-hotkeys/All-Categories",
                destination: y
            }, {
                source: p,
                destination: p
            }, {
                source: "/Deals-and-Offers/:search",
                destination: z
            }, {
                source: "/:city/:search/:mct(mct-[0-9]+)",
                destination: A
            }, {
                source: "/:city/:vid/:search([a-zA-Z0-9,-]+)_fil",
                destination: B
            }, {
                source: "/:city/:vid/:vmapid/:search([a-zA-Z0-9,-]+)_b2c",
                destination: C
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/events",
                destination: D
            }, {
                source: "/:city/:search/:ncatid(nct-[0-9]+)",
                destination: k
            }, {
                source: "/:language/:city/:search/:ncatid(nct-[0-9]+)",
                destination: k
            }, {
                source: "/:city/:search/:ncatid(nct-[0-9]+)/page-:pageNo",
                destination: k
            }, {
                source: "/:city/:search/:ncatid(nct-[0-9]+)-att-:ncatidfilter",
                destination: k
            }, {
                source: "/:language/:city/:search/:ncatid(nct-[0-9]+)-att-:ncatidfilter",
                destination: k
            }, {
                source: "/:city/:search/:ncatid(nct-[0-9]+)-att-:ncatidfilter/page-:pageNo",
                destination: k
            }, {
                source: "/:language/:city/:search/:ncatid(nct-[0-9]+)-att-:ncatidfilter/page-:pageNo",
                destination: k
            }, {
                source: "/:city/Restaurant-Collections",
                destination: E
            }, {
                source: "/:city/Restaurant-Collections/:search([a-zA-Z0-9,-]+)",
                destination: F
            }, {
                source: "/:city/:search/group",
                destination: G
            }, {
                source: "/:city/:search/group/page-:pageNo",
                destination: G
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET",
                destination: H
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/locations",
                destination: I
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/gallery",
                destination: J
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/product-catalogue-brochure",
                destination: K
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/photos",
                destination: L
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/vouchers",
                destination: M
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/reviews",
                destination: q
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/reviews/page-:pageIndex",
                destination: q
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/DL-:offerId",
                destination: N
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/offers",
                destination: O
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/doctors",
                destination: r
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/stores",
                destination: P
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/real-estate-agents",
                destination: Q
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/properties",
                destination: R
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/uploadphoto",
                destination: S
            }, {
                source: "/:city/:search/:mct(mct-[0-9]+)/writereview",
                destination: T
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/writereview",
                destination: U
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/qna",
                destination: V
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/doctors/page-:pageIndex",
                destination: r
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/about-information",
                destination: W
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/show-timings",
                destination: X
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/clinic-locations",
                destination: Y
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/bookings",
                destination: Z
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/products",
                destination: $
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/products-:type",
                destination: $
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/services",
                destination: _
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/services-:type",
                destination: _
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/service-catalog-:type",
                destination: "/detailspage?pagetype=:type*&pagefrom=service-catalog"
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/service-catalog",
                destination: aa
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/menu",
                destination: aa
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/videos",
                destination: "/detailspage?pagefrom=videos"
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/compare",
                destination: ab
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/things-to-do",
                destination: ac
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/categories",
                destination: ad
            }, {
                source: "/:city/:search/:docid([a-zA-Z0-9,-]+)_BZDET/reels",
                destination: ae
            }, {
                source: s,
                destination: s
            }, {
                source: t,
                destination: t
            }, {
                source: u,
                destination: u
            }, {
                source: "/Movies/:moviename([a-zA-Z0-9\\(\\),-]+)/:movieid([0-9]+)",
                destination: af
            }, {
                source: "/:city/:search([a-zA-Z0-9,-]+)-Movies-in-:inarea([a-zA-Z0-9,-]+)",
                destination: l
            }, {
                source: "/:city/Movies-in-:inarea([a-zA-Z0-9,-]+)",
                destination: l
            }, {
                source: "/:city/:search([a-zA-Z0-9,-]+)-Movies",
                destination: l
            }, {
                source: "/:city/Movies",
                destination: l
            }, {
                source: "/:city/:search([a-zA-Z0-9,-]+Dish-Restaurants)/page-:pageNo",
                destination: k
            }, {
                source: "/:city((?!api).*)/:search(search)",
                destination: k
            }, {
                source: "/:city((?!api).*)/:search([a-zA-Z0-9,-]+)",
                destination: k
            }, {
                source: v,
                destination: v
            }, {
                source: "/:city((?!api).*)",
                destination: ag
            }, {
                source: w,
                destination: w
            }],
            fallback: []
        },
        "/": [a, c, d, b, e, "static/chunks/pages/index-09defc1b6f9b7bb4.js"],
        "/404": ["static/chunks/pages/404-707c283e465054b9.js"],
        "/JD-ON-MOBILE": [a, c, d, b, f, e, "static/chunks/5800-fb9279f4740f59f2.js", "static/chunks/pages/JD-ON-MOBILE-6f48dd89a51e819d.js"],
        "/_error": ["static/chunks/pages/_error-3f70f2d61eb8c6dd.js"],
        "/allhotkeys": [a, d, b, e, "static/chunks/pages/allhotkeys-4ac500fd3c4b6a34.js"],
        "/bookmytrain": [a, c, d, b, f, e, "static/chunks/pages/bookmytrain-82e86c909287b11b.js"],
        "/contact": [a, "static/chunks/pages/contact-bf6c2831cfc71bdb.js"],
        "/deals": [a, c, d, b, f, e, "static/chunks/pages/deals-adbedd4b6cf2dbb0.js"],
        "/detail-appointment": [a, c, d, b, f, e, g, h, i, j, "static/chunks/pages/detail-appointment-ec4e1c738ea83048.js"],
        "/detail-events": [a, c, d, b, f, e, g, h, i, j, "static/chunks/pages/detail-events-6df4ccbfdfcbf09f.js"],
        "/detail-gallery": [a, ah, ai, "static/chunks/8550-6e46c93254e9a0fb.js", b, g, i, "static/chunks/8130-9222a7895d835fde.js", "static/chunks/pages/detail-gallery-f2b4c4bcdf584c2e.js"],
        "/detail-locations": [a, c, d, b, f, e, h, i, j, aj, "static/chunks/pages/detail-locations-ada57c51552bfcc6.js"],
        "/detail-offers": [a, c, d, b, f, e, g, h, i, j, "static/chunks/pages/detail-offers-c9586690539402a4.js"],
        "/detail-outlet": [a, c, d, b, f, e, g, h, i, j, "static/chunks/pages/detail-outlet-357049d5f79933c3.js"],
        "/detail-photos": [a, c, d, b, f, e, g, h, i, j, "static/chunks/pages/detail-photos-c11c57b31d7af258.js"],
        "/detail-products": [a, c, d, b, f, e, h, i, j, "static/chunks/pages/detail-products-a6e632fe31a03415.js"],
        "/detail-properties": [a, c, d, m, n, b, f, e, h, i, j, "static/css/2c197cf7cdb27a7a.css", "static/chunks/pages/detail-properties-d0e6dec73bf8b908.js"],
        "/detail-re-agents": [a, c, d, b, f, e, h, i, j, aj, "static/chunks/pages/detail-re-agents-a5c7df19dd9b4eca.js"],
        "/detail-reviews": [a, c, d, b, f, e, g, h, i, j, "static/chunks/pages/detail-reviews-9785ec6206dc3c82.js"],
        "/detail-service-catalog": [a, c, d, b, f, e, g, h, i, j, "static/chunks/pages/detail-service-catalog-c01a3cabe1932cc8.js"],
        "/detail-vendor-offers": [a, c, d, m, n, b, f, e, g, h, "static/css/6831dcde9f07264e.css", "static/chunks/pages/detail-vendor-offers-0062f292ff30cddf.js"],
        "/detail-voucher-summary": [a, c, d, b, f, e, g, "static/chunks/pages/detail-voucher-summary-4d8e73c78bd72f7f.js"],
        "/detail-writereview": [a, c, d, b, f, e, g, ak, "static/chunks/pages/detail-writereview-5dbafe4f4705fbf8.js"],
        "/detail-writereview-movie": [a, c, d, b, f, e, g, ak, "static/chunks/pages/detail-writereview-movie-5221eabb423f58bc.js"],
        "/details-about": [a, c, d, b, f, e, g, h, i, j, "static/chunks/pages/details-about-b43f9519b97f6b8c.js"],
        "/details-booking": [a, c, d, "static/css/b44e452a9b15cc82.css", "static/chunks/4544-f8135b2b0754e2f1.js", b, f, e, g, h, i, j, "static/chunks/9880-9093d736977f9387.js", "static/chunks/pages/details-booking-8c3dc40eab93cf97.js"],
        "/details-categories": [a, c, d, b, f, e, h, i, j, "static/chunks/pages/details-categories-6dedf11f8ecd72de.js"],
        "/details-compare": [a, c, d, b, f, e, g, "static/chunks/7156-f97533e7864b5993.js", "static/chunks/9142-d5d3ca01c6e2bc44.js", "static/chunks/pages/details-compare-ec9e3fd58cc799c2.js"],
        "/details-movie-shows": [a, c, d, b, f, e, g, h, i, j, "static/chunks/pages/details-movie-shows-9257df8b7b5c7506.js"],
        "/details-photo-upload": [a, c, d, b, f, e, "static/chunks/pages/details-photo-upload-4b87c422cc6a4d6a.js"],
        "/details-qna": [a, c, d, b, f, e, g, h, i, j, "static/chunks/pages/details-qna-3b8313166a639b1b.js"],
        "/details-reels": [a, "static/chunks/5636-4ef01e3c0016a3c6.js", b, g, h, "static/chunks/1312-51bdf35ffdd01022.js", "static/chunks/pages/details-reels-97a52ede9ee216d5.js"],
        "/details-services": [a, c, d, b, f, e, g, h, i, j, "static/chunks/pages/details-services-1e9e02cdafbba682.js"],
        "/details-things-todo": [a, c, d, b, f, e, g, h, i, j, "static/chunks/5704-1d8a6642a341ba76.js", "static/chunks/pages/details-things-todo-fc23dbb83da23fd3.js"],
        "/detailspage": [a, c, d, b, f, e, i, "static/chunks/pages/detailspage-29feffcbbd18bc80.js"],
        "/doctors-list": [a, c, d, b, f, e, g, h, i, j, "static/chunks/pages/doctors-list-543011a5e0479682.js"],
        "/doctors-location": [a, c, d, b, f, e, g, h, i, j, "static/chunks/8519-0a83a90d971c1913.js", "static/chunks/pages/doctors-location-6d3367be3a286e8b.js"],
        "/empty-favorite": ["static/chunks/pages/empty-favorite-5b422477c30fa3c9.js"],
        "/favorites": [a, c, d, b, f, e, "static/chunks/pages/favorites-e116e6f52aebfe90.js"],
        "/festival-collection": [a, c, m, n, al, g, h, i, am, an, "static/chunks/pages/festival-collection-736144df1a09adc3.js"],
        "/filter": [a, c, d, b, f, e, g, "static/chunks/pages/filter-5a9dbec9c8718af1.js"],
        "/filterb2c": [a, c, d, b, f, e, g, "static/chunks/pages/filterb2c-2f7519c7bfe2224c.js"],
        "/login": ["static/chunks/2837-9ed69b8e6ba7979e.js", "static/chunks/pages/login-52589e9cb54ff1e1.js"],
        "/movies": [a, c, d, b, f, e, "static/chunks/pages/movies-a74413c804cc3655.js"],
        "/movies-details": [a, c, d, b, f, e, "static/chunks/pages/movies-details-27c7a3a886c2df57.js"],
        "/movies-results-page": [a, c, d, b, f, e, g, h, "static/chunks/pages/movies-results-page-8ed63a64b60569d8.js"],
        "/mybusiness": [a, c, d, b, f, e, "static/chunks/pages/mybusiness-50b687877f5a3513.js"],
        "/mytransaction": [a, c, d, b, f, e, "static/chunks/pages/mytransaction-f72da56ecbb6bd7e.js"],
        "/new_index": [a, c, "static/chunks/2001-06eaeda94a5ea2e5.js", b, f, g, "static/chunks/pages/new_index-6c936dd29689806f.js"],
        "/notification": [a, c, d, b, f, e, "static/chunks/pages/notification-6cc364ebfb37a45d.js"],
        "/product-catalogue-brochure": [a, c, ah, ai, b, g, "static/chunks/9413-6ef422bbd3c0de5b.js", "static/chunks/pages/product-catalogue-brochure-d8cd4ed61331b91e.js"],
        "/restaurants-filter": [a, c, d, b, f, e, g, "static/chunks/pages/restaurants-filter-f4e726df2cb66484.js"],
        "/restaurants-sub-filter": [a, c, d, b, f, e, g, "static/chunks/pages/restaurants-sub-filter-f6d6cf56076e84d3.js"],
        "/resultspage": [a, c, d, b, e, i, "static/chunks/pages/resultspage-9a06afcc9119a5ac.js"],
        "/saved-items": [a, c, d, b, f, e, "static/chunks/pages/saved-items-5666b38ec55c0741.js"],
        "/world-cup": [a, m, n, al, am, an, "static/chunks/pages/world-cup-7f225d3b4eb7868e.js"],
        sortedPages: [ag, "/404", "/JD-ON-MOBILE", "/_app", "/_error", y, t, "/contact", z, x, D, J, I, O, P, L, "/detail-products", R, Q, q, "/detail-service-catalog", N, M, U, T, W, Z, ad, ab, X, S, V, ae, "/details-services", ac, H, r, Y, "/empty-favorite", s, o, B, C, v, l, af, A, "/mybusiness", u, "/new_index", w, K, E, F, k, p, "/world-cup"]
    }
}("static/chunks/1664-5fe238b459685415.js", "static/chunks/143-a9ad2e34967abfaa.js", "static/chunks/5675-9442cb56498b491a.js", "static/chunks/8759-993e83c223eb351a.js", "static/chunks/9188-ba0a4edfa3342495.js", "static/chunks/6151-eb887d45da984399.js", "static/chunks/1370-b379c7639600465e.js", "static/chunks/3648-621d218dc7f45727.js", "static/chunks/1673-10f7fa1a3067fac0.js", "static/chunks/7111-a0da88d1bc71ff7e.js", "/resultspage", "/movies", "static/chunks/1911-4ef5fdf0296c500b.js", "static/chunks/4366-1d1f8ec17628db7a.js", "/festival-collection", "/saved-items", "/detail-reviews", "/doctors-list", "/favorites", "/bookmytrain", "/mytransaction", "/login", "/notification", "/detail-appointment", "/allhotkeys", "/deals", "/movies-results-page", "/filter", "/filterb2c", "/detail-events", "/restaurants-filter", "/restaurants-sub-filter", "/resultspage?group=1", "/detailspage", "/detail-locations", "/detail-gallery", "/product-catalogue-brochure", "/detail-photos", "/detail-voucher-summary", "/detail-vendor-offers", "/detail-offers", "/detail-outlet", "/detail-re-agents", "/detail-properties", "/details-photo-upload", "/detail-writereview-movie", "/detail-writereview", "/details-qna", "/details-about", "/details-movie-shows", "/doctors-location", "/details-booking", "/detailspage?pagefrom=products", "/detailspage?pagefrom=services", "/detailspage?pagefrom=service-catalog", "/details-compare", "/details-things-todo", "/details-categories", "/details-reels", "/movies-details", "/", "static/chunks/2004-bbea7670cf7e4d09.js", "static/chunks/6658-4ac774fe90fd212e.js", "static/chunks/9463-9d112559c85c4128.js", "static/chunks/9412-cf9682c75c703d66.js", "static/chunks/493-c6b8c2a96d2c4078.js", "static/chunks/7001-6264aef04702c97b.js", "static/css/5ff0d40026122dc7.css"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()