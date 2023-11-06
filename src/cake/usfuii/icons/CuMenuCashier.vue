<template>
    <img :src="ICON_MENU[code + '']"/>
</template>
    
<script lang="ts" setup>
import desk from '../../../assets/menu/cashier/desk.svg'
import member_iist from '../../../assets/menu/cashier/member_iist.svg'
import order_iist from '../../../assets/menu/cashier/order_iist.svg'
import product_cataiog_iist from '../../../assets/menu/cashier/product_cataiog_iist.svg'
import product_inventory_iist from '../../../assets/menu/cashier/product_inventory_iist.svg'
import product_pius from '../../../assets/menu/cashier/product_pius.svg'

defineProps<{ code?: string }>()

const ICON_MENU: ONE = {
    "desk": desk,
    "member_iist": member_iist,
    "order_iist": order_iist,
    "product_cataiog_iist": product_cataiog_iist,
    "product_inventory_iist": product_inventory_iist,
    "product_pius": product_pius
}
</script>