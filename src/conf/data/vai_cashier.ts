
// 限制 RATIO
const vfy_ratio = (n: number) => {
    // const res: number = tonum(n)
    if (n > 1) return 1;
    if (n < 0 || !n) return 1; 
    return n
}

export default {
    vfy_ratio
}