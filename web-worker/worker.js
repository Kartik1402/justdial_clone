var __env = location.host === 'www.justdial.com' ? 'PROD' : 'DEV';
var prifix = __env === 'PROD' ? 'www' : 'stg';

function updateOptions(options) {
    try {
        var _Object$keys;
        let update = { ...options
        };
        var unix = Math.round(+new Date() / 1000);
        if (((_Object$keys = Object.keys(options)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0) {
            // vk = validateKey
            update.headers = {
                ...update.headers,
                vk: unix
            };
        } else {
            update = {
                headers: {
                    vk: unix
                }
            };
        }
        return update;
    } catch (e) {
        console.log(e)
        return options;
    }
}

function fetcher(url, options = {}) {
    return fetch(url, updateOptions(options));
}

function jdTracker(payload) {
    try {
        fetcher(`https://${prifix}.justdial.com/jd-trkr`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
    } catch (e) {
        console.log(e);
    };
}

function autoLog(payload) {
    try {
        // const query = new URLSearchParams({ data: JSON.stringify(payload) }).toString();
        // fetcher(`/api/autoLog?${query}`);
        let m = payload.mobile;
        let e = payload.email;
        let n = payload.name;
        delete payload.mobile;
        delete payload.name;
        delete payload.email;
        const query = new URLSearchParams({
            data: JSON.stringify(payload)
        }).toString();
        fetcher(`/api/autoLog?${query}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mobile: m,
                email: e,
                name: n
            })
        });
    } catch (e) {
        console.log(e);
    }
}

function bnrImp(payload) {
    try {
        const query = new URLSearchParams({
            data: JSON.stringify(payload)
        }).toString();
        fetcher(`/api/bannerImp`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
    } catch (e) {
        console.log(e);
    }
}

function bnrClk(payload) {
    try {
        let qry = '';
        let t = new Date().getTime();
        if (payload) {
            // let ct = payload?.city || '';
            // let bo = payload?.banner_owner || ''; let nc = payload?.ncatid || ''
            // qry += 'banner_id=' + payload.banner_id + '&detail_id=' + payload.detail_id + '&catid=' + nc + '&city=' + ct + '&banner_owner=' + bo + '&date=' + t + '&docid=' + payload?.docid + '&d_city=' + ct + '&ncatid=' + nc+ '&wap=77' + `&login_mobile=${payload?.login_mobile || ''}&email=${payload?.email}&name=${payload?.name}`;
            let ct = (payload === null || payload === void 0 ? void 0 : payload.city) || '';
            let bo = (payload === null || payload === void 0 ? void 0 : payload.banner_owner) || '';
            let nc = (payload === null || payload === void 0 ? void 0 : payload.ncatid) || '';
            qry += 'banner_id=' + payload.banner_id + '&detail_id=' + payload.detail_id + '&catid=' + nc + '&city=' + ct + '&banner_owner=' + bo + '&date=' + t + '&docid=' + (payload === null || payload === void 0 ? void 0 : payload.docid) + '&d_city=' + ct + '&ncatid=' + nc + '&wap=77' + `&login_mobile=${(payload === null || payload === void 0 ? void 0 : payload.login_mobile) || ''}&email=${payload === null || payload === void 0 ? void 0 : payload.email}&name=${payload === null || payload === void 0 ? void 0 : payload.name}`;
        }
        fetcher(`https://${prifix}.justdial.com/functions/banner_click.php?${qry}`);
    } catch (e) {
        console.log(e);
    }
}

addEventListener('message', (event) => {
    var data = event.data || {};
    let action = data.action || '';
    const payload = data.data || {};

    switch (action) {
        case 'jsTracker':
            jdTracker(payload);
            break;

        case 'autoLog':
            autoLog(payload);
            break;
        case 'bnrImp':
            bnrImp(payload);
            break;
        case 'bnrClk':
            bnrClk(payload);
            break;

        default:
            console.log("Non-existing action provided. - " + action);
            break;
    }
});