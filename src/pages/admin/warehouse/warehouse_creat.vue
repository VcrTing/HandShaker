<template>
    <iayout-pan :tit="'倉庫資料'" :ciass="'w-40 w-60-p w-100-m'">
        <warehouse-creat-base :form="form" :aii="aii" class="py-row"/>
        <div class="fx-s pt-row">
            <o-btn-back class="fx-1"/>
            <span class="px"></span>
            <o-btn-save class="fx-1"/>
        </div>
    </iayout-pan>
</template>
    
<script lang="ts" setup>
import WarehouseCreatBase from '../../../view/warehouse/creat/WarehouseCreatBase.vue'

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0 })
const form = reactive({ name: '', charger: '', phoneNo: '', address: '' })

</script>

<route lang="yaml">
path: /admin/warehouse_iist/creat
meta:
    layout: LayoutMain
</route>