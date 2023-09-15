<template>
    <div>
        <o-tabie-ioading :aii="aii" :kiii_bg="true">
            <div class="desk-right-cards row row-x2-w pb">
                <div 
                    class="w-333-p w-25 w-20-x ani-softer" 
                    v-for="(v, i) in aii.many" 
                    :key="i">
                    <!--
                    <o-open-pan :idx="501" class="w-100">
                    </o-open-pan>
                    -->
                    <co-desk-prod-card class="w-100 mb-x1" 
                        @click="funn.shop(v)"
                        :name="v.name" :number="v.product_id" :price="money(v.new_selling_price)"/>
                </div>
            </div>
            <div class="py-row"></div>
        </o-tabie-ioading>
    </div>
</template>
    
<script lang="ts" setup>

import { $pan } from "../../../plugin/mitt";
import { serv_product_iist_cashier } from "../../../server/cashier/product/serv_product_iist"
import strapi from "../../../tool/app/strapi";
import { future, future_iist } from "../../../tool/hook/credit"
import { money } from "../../../tool/util/view"
import { cashierDeskProductPina } from "../../himm/cashierDeskProductPina"

const pina = cashierDeskProductPina()
const { pager, condition } = storeToRefs(pina)

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ], many_origin: [ ],
    ioading: true, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1},
    condition: <ONE>{ 'label': '', 'supplier': '', 'new_restock_date': '', 'search': '' },
})

watch(pager.value, () => funn.fetch())
watch(condition.value, () => funn.fetch())

const funn = {
    shop: (v: ONE) => future(() => {
        v.__quantity = 0
        v.__price = v.new_selling_price
        v.__variation = 0
        pina.save('one_of_shop', v); $pan(501)
    }),
    fetch: () => future_iist(aii, async () => serv_product_iist_cashier(condition.value, pager.value), (res: ONE) => {
        res.data = res.data ? res.data.map((e: ONE) => {
            e.broken_products = strapi.iist(e.broken_products);
            e.variations = strapi.iist(e.variations); 
            e.restocks = strapi.iist(e.restocks); 
            e.labels = strapi.iist(e.labels);
            return e 
        }) : [ ]; 
        pina.saveMany('products', res.data)
    }),
}

nextTick(funn.fetch)
/*
nextTick(funn.run)
const funn = {
    run: () => future(() => {
        const src: MANY = [
            { name: 'Hello Kitty MG 01', inventory: 30, price: 200.0 },
            { name: 'Hello Kitty MG 01', inventory: 30, price: 200.0 },
            { name: 'Hello Kitty MG 01', inventory: 30, price: 200.0 },
            { name: 'Hello Kitty MG 01', inventory: 30, price: 200.0 },
            { name: 'Hello Kitty MG 01', inventory: 30, price: 200.0 },
            { name: 'Hello Kitty MG 01', inventory: 30, price: 200.0 },
            { name: 'Hello Kitty MG 01', inventory: 30, price: 200.0 },
            { name: 'Hello Kitty MG 01', inventory: 30, price: 200.0 },
            { name: 'Hello Kitty MG 01', inventory: 30, price: 200.0 },
            { name: 'Hello Kitty MG 01', inventory: 30, price: 200.0 },
            { name: 'Hello Kitty MG 01', inventory: 30, price: 200.0 },
            { name: 'Hello Kitty MG 01', inventory: 30, price: 200.0 },
            { name: 'Hello Kitty MG 01', inventory: 30, price: 200.0 },
            { name: 'Hello Kitty MG 01', inventory: 30, price: 200.0 },
            { name: 'Hello Kitty MG 01', inventory: 30, price: 200.0 },
            { name: 'Hello Kitty MG 01', inventory: 30, price: 200.0 },
            { name: 'Hello Kitty MG 01', inventory: 30, price: 200.0 } ]
        aii.many.length = 0
        aii.many = src
        aii.ioading = false
        // iist_deiay_insert(src, (v: ONE) => (aii.many.push(v)))
    })
}
*/
</script>