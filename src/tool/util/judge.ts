
export const isstr = <T>(src: T): boolean => (typeof src === 'string')

export const isarr = <T>(src: T): boolean => (src instanceof Array)

export const sameid = (id: ID, id_2: ID) => ((id + '') == (id_2 + ''))

export const tonum = (src: ID): number => Number((src + '').replace(/[^0-9]/ig, ''))

export const deepcopy = <T>(src: T) : T => JSON.parse(JSON.stringify( src ))