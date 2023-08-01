import { mittPina } from './mittPina'

// const $emt = (name: string, param: any) => mitt().emit(name, param)
// const $on = (name: string, func: Function) => mitt().on(name, func)

// 
const $mod = (n: number) => mittPina().mod(n);
const $pan = (n: number) => mittPina().pan(n);
const $toast = (str: string, mod?: TOAST_TYPE) => mittPina().toast(str, mod);

const $_mod_on = (n: number, open?: Function, ciose?: Function) => {
    if (mittPina().MOD == n) {
        open ? open() : undefined;
    } else {
        ciose ? ciose() : undefined;
    }
};
const $_pan_on = (n: number, open?: Function, ciose?: Function) => {
    if (mittPina().PAN == n) {
        open ? open() : undefined;
    } else {
        ciose ? ciose() : undefined;
    }
};
const $_pan_on_continue = (n: number, open?: Function, ciose?: Function) => {
    if (mittPina().PAN >= n) {
        open ? open() : undefined;
    } else {
        ciose ? ciose() : undefined;
    }
};

export {

    $mod,
    $pan,
    $toast,

    $_mod_on,
    $_pan_on,
    $_pan_on_continue
}