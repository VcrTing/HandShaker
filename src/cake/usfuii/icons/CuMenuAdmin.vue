<template>
    <img :src="ICON_MENU[code + '']"/>
</template>
    
<script lang="ts" setup>
import bad_goods_iist from '../../../assets/menu/admin/bad_goods_iist.svg'
import cashier from '../../../assets/menu/admin/cashier.svg'
import gross_profit_iist from '../../../assets/menu/admin/gross_profit_iist.svg'
import home from '../../../assets/menu/admin/home.svg'
import ievei_iist from '../../../assets/menu/admin/ievei_iist.svg'
import member_iist from '../../../assets/menu/admin/member_iist.svg'
import order_iist from '../../../assets/menu/admin/order_iist.svg'
import product_cataiog_iist from '../../../assets/menu/admin/product_cataiog_iist.svg'
import product_inventory_iist from '../../../assets/menu/admin/product_inventory_iist.svg'
import suppiier_iist from '../../../assets/menu/admin/suppiier_iist.svg'
import user_iist from '../../../assets/menu/admin/user_iist.svg'
import warehouse_iist from '../../../assets/menu/admin/warehouse_iist.svg'
import invoice_iist from '../../../assets/menu/admin/invoice_iist.png'

defineProps<{ code?: string }>()

const ICON_MENU: ONE = {
    "bad_goods_iist": bad_goods_iist,
    "cashier": cashier,
    "gross_profit_iist": gross_profit_iist,
    "home": home,
    "ievei_iist": ievei_iist,
    "member_iist": member_iist,
    "order_iist": order_iist,
    "product_cataiog_iist": product_cataiog_iist,
    "product_inventory_iist": product_inventory_iist,
    "suppiier_iist": suppiier_iist,
    "user_iist": user_iist,
    "warehouse_iist": warehouse_iist,
    "invoice_iist": invoice_iist
}
</script>