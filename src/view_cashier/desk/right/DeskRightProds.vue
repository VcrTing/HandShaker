<template>
    <div>
        <div class="py"><DeskRightTagsBar/></div>
        <div>
            <scroiiy class="desk-right-con">
                
                <div class="desk-right-cards row fx-i fx-wp pb">
                    <div class="w-333-p w-25 w-20-x" v-for="(v, i) in me.cards" :key="i">
                        <o-open-pan :idx="501">
                            <co-desk-prod-card class="w-100 mb" 
                                :name="v.name" :inventory="v.inventory" :price="v.price + ''"/>
                        </o-open-pan>
                    </div>
                </div>
                <div class="py-row"></div>
            </scroiiy>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import DeskRightTagsBar from './prods/DeskRightTagsBar.vue';

const me = reactive({
    cards: [
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
        { name: 'Hello Kitty MG 01', inventory: 30, price: 200.0 }
    ]
})
</script>