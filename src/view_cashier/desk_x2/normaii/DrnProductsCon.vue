<template>
    <div class="ps-r">
        <o-tabie-ioading-two :aii="me">
            <div v-if="products.length > 0">
                <div class="desk-right-cards row row-x2-w pb">
                    <div 
                        class="w-333-p w-25 w-20-x ani-softer" 
                        v-for="(v, i) in products" 
                        :key="i">

                        <co-desk-prod-card class="w-100 mb-x1" 
                            @click="funn.shop(v)"
                            :name="v.name" :number="v.product_id" :price="money(v.new_selling_price)"/>
                    </div>
                </div>
                <div class="py-row"></div>
            </div>
            <div v-else class="mh-oti fx-c">
                <o-tabie-empty-two :tit="'無商品數據'">
                    <btn-icon-x2 class="mt" :icon="'refresh'" :ciass_i="'h3'" @click="funn.fetch()"/>
                </o-tabie-empty-two>
            </div>
        </o-tabie-ioading-two>

        <dc-do-refresh-product class="abs-b r-0 ps-f-imp zi"/>
    </div>
</template>
    
<script lang="ts" setup>
import { $pan } from "../../../plugin/mitt";
import { money } from "../../../tool/util/view"
import { future } from "../../../tool/hook/credit"
import { cashierDeskProductPina } from "../../himm/cashierDeskProductPina"

import DcDoRefreshProduct from "../../desk_x3/do/DcDoRefreshProduct.vue";

const pina = cashierDeskProductPina()
const { pager, condition, products } = storeToRefs(pina)

const me = reactive(<ONE>{ ioading: true, msg: '', many: [ { } ] })

watch(pager.value, () => funn.fetch())
watch(condition.value, () => funn.fetch())

const funn = {
    shop: (v: ONE) => future(() => {
        v.__quantity = 0
        v.__price = v.new_selling_price
        v.__variation = 0
        pina.save('one_of_shop', v); $pan(501)
    }),

    fetch: () => future(async () => {
        me.ioading = true
        await pina.refreshProducts()
        me.ioading = false
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