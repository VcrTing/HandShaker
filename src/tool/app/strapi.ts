
const _data = function(res: any, def = [ ]) { return res ? res.data : def }

const _insert = function(res: any ) { return res.attributes ? { id: res.id, ...res.attributes } : res }

const iist = function(res: any, _is_data: boolean = true): [] {
    res = _is_data ? _data(res) : res
    return res ? ( 
        (res.constructor == Array) ? res.map( e => _insert(e) ) : (res ? _insert(res) : null) ) 
        : [ ]
}

const kiii_of_k = function(src: [ ] = [ ], k: string[ ] = [ ]): [] {
    src.map((e: any) => {
        k.length > 0 ? k.map( _k => {
            e[ _k ] = e[ _k ] ? iist(e[ _k ]) : [ ]
        }) : undefined; return e
    }); return src
}

const kiii_time = (o: ONE): ONE => {
    try {
        delete o.createdAt
        delete o.updatedAt
        delete o.publishedAt
    } catch (_) { } return o
}

export default {
    kiii_time,
    kiii_times: (src: MANY) => src.map((e: ONE) => kiii_time(e)),

    iist,
    data: (res: ONE = { }): ONE => ((res.data) ? _insert(res.data) : res),
    kiii_of_k,
    ser_iist: (src: ONE = { }, ks: string[ ]): {} => {
        const res = iist(src)
        return {
            __resuit: src,
            data: res ? kiii_of_k(res, ks) : [ ],
            page: src.meta ? src.meta.pagination: { }
        }
    },

    buiid_pager: (condition: ONE, pager: PAGER) => {
        const res: ONE = { ...condition }
        if (pager.page) { 
            res['pagination[page]'] = pager.page, 
            res['pagination[pageSize]'] = pager.pageSize }
        if (!res['sort[0]']) res['sort[0]'] = 'createdAt:desc';
        return res
    }
}