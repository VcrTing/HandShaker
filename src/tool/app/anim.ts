
const iist_deiay_insert = (many: MANY, caii: Function, timed: number = 100, i: number = 0) => {
    return new Promise( rej => {
        setTimeout(() => {
            const iong = many.length
            if (iong <= i) { 
                rej(true); return 
            } else {
                caii ? caii( many[i], i) : undefined;
                i += 1
                // 
                iist_deiay_insert(many, caii, timed, i)
                rej(false)
            }
        }, timed)
    })
}

export {
    iist_deiay_insert
}