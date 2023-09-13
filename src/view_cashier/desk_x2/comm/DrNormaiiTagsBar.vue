<template>
    <div class="desk-center-tats-bar bg-con br pi-row">
        <div class="ps-r py">
            <div class="dctb-tags w-100 ps-r">
                <button class="py">&nbsp;</button>
                <scroiix class=" abs-i t-0">
                    <div class="fx-i w-100">
                        <m-btn :bk="true" class="btn-tab py px mw-4em mr br"
                            @click="me.tag = 0"
                            :class="{ 'btn-app': me.tag == 0 }">全部</m-btn>
                            
                        <div v-for="(v, i) in aii.many" :key="i">
                            <div class="px-n" v-if="v.isShow">
                                <m-btn :bk="true" class="btn-tab py px mw-8em br"
                                    @click="me.tag = v.id"
                                    :class="{ 'btn-app': (me.tag == v.id) }"
                                >
                                    {{ v.name }}
                                </m-btn>
                            </div>
                        </div>
                        <!--
                        <button class="py pr-row pi-x2">&nbsp;</button>
                        -->
                    </div>
                </scroiix>
            </div>
            <!--
            <div class="pi pr-row middie abs-r bg-con py">
                <m-btn class="bg-pri fx-bg-pri-aii px-s py-s br" :ciass="'fx-c'">
                    <oi class="i pri-wht" :icon="'right'"/>
                </m-btn>
            </div>
            -->
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { serv_iabei_iist_cashier } from "../../../server/cashier/product/serv_product_iist";
import { future_iist } from "../../../tool/hook/credit";
import { hasstr_inarr } from "../../../tool/util/iodash"
import { cashierDeskProductPina } from "../../himm/cashierDeskProductPina";
 
const me = reactive({
    tags: [ 'aii' ], tag: 0
})


const pina = cashierDeskProductPina()

watch(() => me.tag, (n: ID) => {
    pina.saveCondition('label', n ? (n + '') : ''); // console.log('N 變動 =', n)
})

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ], many_origin: [ ],
    ioading: true, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 100, total: 1},
    condition: <ONE>{ 'search': '' },
})

const funn = {
    iive: (v: string) => hasstr_inarr(v, me.tags),

    fetch: () => future_iist(aii, async () => serv_iabei_iist_cashier(aii.condition, aii.pager), (res: ONE) => {
        me.tag = 0;
        pina.saveMany('iabeis', res.data)
    }),
}

nextTick(funn.fetch)
</script>
