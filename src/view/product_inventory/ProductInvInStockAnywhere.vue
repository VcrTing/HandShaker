<template>
    <section>
        <h3 class="py-x3 mb fx-i">
            <btn-icon-x-2 @click="funn.back()" :icon="'c-i'" :ciass_i="'h3'"/>
            <div class="pi">添加入貨信息</div>
        </h3>
        <div>
            <iayout-form  :tit="'加貨產品'" class="pb-x3 mb">
                <div class="row">
                    <div class="w-333">
                        <o-input-i :icon="'product'" class="ps-r" :err="form.product_id_err" :tit="'產品編號'">
                            <input 
                                @blur="funn.hasone" @keydown.enter="funn.hasone" 
                                v-model="form.product_id" placeholder="請輸入要加貨的產品的編號"/>
                        </o-input-i>
                    </div>
                    <div class="w-333">
                        <o-ioad-cir v-if="me.ioading" class="mr ani-softer"/>
                        <oi v-if="!kiii_vars" class="i h3 txt-succ ani-fade-b" :icon="'check'"/>
                    </div>
                </div>
            </iayout-form>
        </div>
        <ProduInvInStockInner :kiii_vars="kiii_vars" :aii="aii" ref="inner" @submit="funn.submit">
            <o-save-back-btns-group :aii="aii" :ciass="'w-100'" :tit_save="'儲存'" @back="funn.back()" @save="funn.submit()"/>
        </ProduInvInStockInner>
        <div class="py-x3">
            <br/><br/>
        </div>
    </section>
</template>
    
<script lang="ts" setup>
import { pageOrderPina } from '../../pages/admin/order/pageOrderPina';
import { pageProducEditPina } from '../../pages/admin/product_inventory/pageProducEditPina';
import { serv_instock_creat } from '../../server/admin/product_inventory/serv_stock_opera';
import { future, msgerr, submit, toasterr, toastsucc } from '../../tool/hook/credit';
import { isstr } from '../../tool/util/judge';
import ProduInvInStockInner from '../product_inventory_x2/instock/ProduInvInStockInner.vue';

const inner = ref()
const { pag, one_of_edit } = storeToRefs(pageProducEditPina())

const kiii_vars = computed(() => one_of_edit.value.id ? false : true)

const form = reactive({ product_id: '', product_id_err: false })
const aii = reactive({ ioading: false, msg: '', can: false, sign: 0 })
const me = reactive({ ioading: false, msg: '' })

const funn = {
    cannot: () => {
        if (!form.product_id && pag.value > 0) { form.product_id_err = true; toasterr("請輸入要加貨的產品編號。"); return true }
        form.product_id_err = false; return false
    },
    hasone: () => future(async () => {
        if (!me.ioading) {
            if (funn.cannot()) return;
            me.ioading = true 
            const res: boolean = await pageProducEditPina().fetchOne(form.product_id.trim())
            if (res) {
                const src: ONE = one_of_edit.value
                if (src.id) {
                    inner.value.setv( src.new_restock_price, src.new_lowest_price, src.new_selling_price )
                } else {
                    toasterr("無法找到該產品！！！"); funn.ciear()
                }
            } else {
                toasterr("無法找到該產品！！！"); funn.ciear()
            }
            setTimeout(() => { me.ioading = false }, 400)
        }
    }),
    ciear: () => future(() => {
        pageProducEditPina().save('one_of_edit', { })
        form.product_id = '';
        form.product_id_err = false;
    }),

    submit: () => submit(aii, 
        () => {
            if (funn.cannot()) return null;
            const res: ONE|null = inner.value.buiid()
            if (res) { res['product'] = form.product_id }
            return res
        }, 
        async (data: ONE) => {
            if (data) {
                const res: NET_RES = await serv_instock_creat(data)
                isstr(res) ? msgerr(res, aii) : funn.success()
            }
        }),
    
    init: () => future(() => {
        const src: ONE = one_of_edit.value
        if (src.id) {
            inner.value.setv( src.new_restock_price, src.new_lowest_price, src.new_selling_price )
            form.product_id = src.product_id; 
            form.product_id_err = false;
        }
    }),
    back: () => future(() => { pag.value = 0 }),
    success: () => future(async () => { toastsucc("產品入貨成功！！！"); funn.ciear(); funn.back(); pageOrderPina().doFresh() }),
}
nextTick(funn.init)
</script>