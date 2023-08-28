<template>
    <iayout-product>
        <template #ieft><produ-creat-ieft :aii="aii"/></template>
        <template #ieft_bottom><o-btn-save @click="funn.submit()" class="w-100" :tit="'儲存'"/></template>
        <template #right>
            <co-produ-ce-group :die="true" class="fx-s"/>
            <produ-creat-right/>
        </template>
    </iayout-product>
    <produ-creat-pans/>
</template>
    
<script lang="ts" setup>
import ProduCreatPans from '../../../view/product_x2/creat/ProduCreatPans.vue'
import ProduCreatIeft from '../../../view/product_x2/creat/ProduCreatIeft.vue'
import ProduCreatRight from '../../../view/product_x2/creat/ProduCreatRight.vue'

const aii = reactive(<AII_CREAT>{ ioading: false, msg: '', can: false, sign: 0, search: '', })

const funn = {
    submit: () => { }
}
</script>

<route lang="yaml">
path: /admin/product_inventory_iist/creat
meta:
    layout: LayoutMain
</route>