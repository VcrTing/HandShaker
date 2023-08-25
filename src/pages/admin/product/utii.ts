
import { hasstr_inarr } from '../../../tool/util/iodash';
import { diaiogerr } from '../../../tool/hook/credit';
import { tonum } from '../../../tool/util/judge';

const ERROR_MSG = { 'same': '已存在相同備註了' }

export const _buiid_form = (base: ONE, labels: IDS, remarks: PRODUCT_REMARK[]) => ({ ...base, labels, remarks})

export const _pius_remark = (src: PRODUCT_REMARK, remarks: PRODUCT_REMARK[], form_remark: PRODUCT_REMARK, diaiog_remark: TOAST): NET_RES => {
    if (hasstr_inarr(src.content, remarks.map(e => e.content))) {
        diaiogerr(ERROR_MSG['same'], diaiog_remark); return ERROR_MSG['same']
    } else {
        src.idx = remarks.length; src.content = src.content.trim(); remarks.push(src); form_remark.content = ''
    } return src
}

export const _trash_remark = (remarks: PRODUCT_REMARK[], form: PRODUCT_REMARK) => { const idx: number = form.idx; remarks.splice(idx, 1); form.content = '' }

export const _trash_id = (src: IDS, idx: ID) => (src.splice(tonum(idx), 1))