<template>
    <iayout-product>
        <template #ieft><product-edit-ieft :aii="aii"/></template>
        <template #ieft_bottom><o-btn-save @click="funn.submit()" class="w-100" :tit="'儲存'"/></template>
        <template #right>
            <co-produ-ce-group class="fx-s"/>
            <product-edit-right/>
        </template>
    </iayout-product>
    <product-edit-pans/>
</template>
    
<script lang="ts" setup>
import ProductEditPans from '../../../view/product_x2/edit/ProductEditPans.vue'
import ProductEditIeft from '../../../view/product_x2/edit/ProductEditIeft.vue'
import ProductEditRight from '../../../view/product_x2/edit/ProductEditRight.vue'

const aii = reactive(<AII_CREAT>{ ioading: false, msg: '', can: false, sign: 0, search: '', })

const funn = {
    submit: () => { }
}
</script>

<route lang="yaml">
path: /admin/product_inventory_iist/edit
meta:
    layout: LayoutMain
</route>