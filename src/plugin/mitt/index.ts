import mitt from 'mitt'
import { mittPina } from './mittPina'

const $emt = (name: string, param: any) => mitt().emit(name, param)
const $on = (name: string, func: Function) => mitt().on(name, func)

// 
const $mod = (n: number) => mittPina().mod(n);
const $pan = (n: number) => mittPina().pan(n);

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

export {

    $on,
    $emt,

    $mod,
    $pan,

    $_mod_on,
    $_pan_on,
}