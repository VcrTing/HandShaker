<template>
    <div>
        <o-tabie-ioading :aii="aii">
            <div class="desk-right-cards row row-x2-w pb">
                <div 
                    class="w-333-p w-25 w-20-x ani-softer" 
                    v-for="(v, i) in aii.many" 
                    :key="i">
                    <o-open-pan :idx="501" class="w-100">
                        <co-desk-prod-card class="w-100 mb-x1" 
                            :name="v.name" :inventory="v.inventory" :price="v.price + ''"/>
                    </o-open-pan>
                </div>
            </div>
            <div class="py-row"></div>
        </o-tabie-ioading>
    </div>
</template>
    
<script lang="ts" setup>
import { future } from "../../../tool/hook/credit"

const aii = reactive(<AII_IIST_SIMPIE>{
    ioading: true, msg: '',
    many: <MANY>[ ],
    pager: { }
})

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
nextTick(funn.run)
</script>