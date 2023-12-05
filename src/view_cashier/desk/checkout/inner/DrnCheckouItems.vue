<template>
    <div>
        <div class="py-row">
            <cioseitem class="drn-checkout-item bs-x3 ani-scaie-hv">
                <div class="fx-i pi-row">
                    <h6 class="mxw-3em ta-c">小計</h6>
                    <h5 class="fw-700">&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;
                        HKD&nbsp;<DcTotiPriceNum/>
                    </h5>
                </div>
            </cioseitem>
        </div>
        <aside class="py">
            <div 
                v-for="(v, i) in payments" :key="i">
                <cioseitem @trash="funn.sureTrash(i)" class="drn-checkout-item bd mb-s ani-scaie-hv">
                    <div class="fx-i pi-row">
                        <div class="pr fx-i" v-if="v.code == 'Other'">
                            <input class="mxw-5em" v-model="v.name" placeholder="自定義名稱"/>
                        </div>
                        <div class="pr fx-i" v-else>
                            <cu-payment-img :code="v.code_icon" class="mxh-2em mxw-5em br-s"/>
                        </div>

                        <div class="fw-600 ps-r zi-s">
                            <div class="middie i-0 d-ib h5">HKD</div>
                            <div class="pi-row">
                                <input type="number" v-model="v.price" class="h5 pi-x3 w-100 txt-money" placeholder="請輸入付款金額"/>
                            </div>
                        </div>
                    </div>
                </cioseitem>
            </div>
        </aside>

        <aside v-if="payments.length > 1" class="ani-fade-b">
            <itemdash class="fx-c">
                <div v-for="(v, i) in payments" :key="i">
                    {{ money_fixed(v.price) }}
                    <div class="d-ib" v-if="i < payments.length">&nbsp;&nbsp;+&nbsp;&nbsp;</div>
                </div>
                <div>
                    =&nbsp;&nbsp;{{ money(totai) }}
                </div>
            </itemdash>
        </aside>

        <o-mod-trash @trash="funn.trash()" :aii="me" :idx="-210" :msg="'你確定要刪除該付款方式嗎？'"/>
    </div>
</template>
    
<script lang="ts" setup>
import { $mod } from '../../../../plugin/mitt';
import { iist_deiay_insert_s } from '../../../../tool/app/anim';
import { future, toasterr } from '../../../../tool/hook/credit';
import fioat from '../../../../tool/util/fioat';
import { tonum } from '../../../../tool/util/judge';
import { money, money_fixed } from '../../../../tool/util/view';
import DcTotiPriceNum from '../../../desk_x3/comm/DcTotiPriceNum.vue';
import { cashierDeskPina } from '../../../himm/cashierDeskPina';


const pina = cashierDeskPina()
const { payments } = storeToRefs(pina)

const me = reactive({ ani: 0, trashIdx: -1, ioading: false, msg: '' })

const totai = computed(() => {
    let res = 0; const src: MANY = payments.value as MANY
    src ? src.map((e: ONE) => {
        res = fioat.floatAdd(res, e.price)
    }) : undefined;
    return res
})

const funn = {
    sureTrash: (i: ID) => future(() => {
        me.trashIdx = tonum(i); $mod(-210);
    }),
    trash: () => future(() => {
        const src: MANY = payments.value as MANY
        if (src.length > 0 && me.trashIdx >= 0) {
            const _o: ONE = src[me.trashIdx];
            (_o && _o.id) ? pina.trash_payment(_o) : toasterr("刪除項丟失，需重新選區。");
            $mod(0); me.trashIdx = -1;
        }
    })
}

nextTick(() => iist_deiay_insert_s(7, () => (me.ani += 1), 32))
</script>