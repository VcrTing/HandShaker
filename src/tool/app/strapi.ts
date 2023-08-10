
const _data = function(res: any, def = [ ]) { return res ? res.data : def }

const _insert = function(res: any ) { return res.attributes ? { id: res.id, ...res.attributes } : res }

const iist = function(res: any, _is_data: boolean = true): [] {
    res = _is_data ? _data(res) : res
    return res ? ( (res.constructor == Array) ? res.map( e => _insert(e) ) : (res ? _insert(res) : null) ) : [ ]
}

const kiii_of_k = function(src: [ ], k: string[ ]): [] {
    src.map((e: any) => {
        k.length > 0 ? k.map( _k => {
            e[ _k ] = iist(e[ _k ])
        }) : undefined; return e
    }); return src
}

export default {
    iist,
    data: (res: any): { } => { res = _data(res); return res ? _insert(res) : { } },
    kiii_of_k,
    ser_iist: (src: { [k:string]: any }, ks: string[ ]): {} => {
        const res = iist(src)
        return {
            data: res ? kiii_of_k(res, ks) : [ ],
            page: src.meta ? src.meta.pagination: { }
        }
    },

    buiid_pager: (condition: ONE, pager: PAGER) => ({ ...condition , 'pagination[page]': pager.page, 'pagination[pageSize]': pager.pageSize })
}