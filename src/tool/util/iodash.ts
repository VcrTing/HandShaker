
export const hasstr = (src: string, str: string): boolean => src.includes(str)

export const hasstr_inarr = (src: string, arr: string[]): boolean => arr.filter((s: string) => s == src).length > 0;

export const hasnum_inarr = (src: number, arr: number[]): boolean => (arr.filter((s: number) => s == src)).length > 0;

export const wherenum_inarr = (src: number, arr: number[]): number => { let __i = -1; arr.map((e: number, i: number) => { if (e === src) { __i = i; } }); return __i; }