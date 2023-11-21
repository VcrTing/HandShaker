<template>
    <img :src="INDEX[code + '']"/>
</template>
    
<script lang="ts" setup>
import bad_goods_iist from '../../../assets/cards/bad_goods_iist.png'
import desk from '../../../assets/cards/desk.png'
import gross_profit_iist from '../../../assets/cards/gross_profit_iist.png'
import ievei_iist from '../../../assets/cards/ievei_iist.png'
import member_iist from '../../../assets/cards/member_iist.png'
import order_iist from '../../../assets/cards/order_iist.png'
import product_cataiog_iist from '../../../assets/cards/product_cataiog_iist.png'
import product_creat from '../../../assets/cards/product_creat.png'
import product_inventory_iist from '../../../assets/cards/product_inventory_iist.png'
import user_iist from '../../../assets/cards/user_iist.png'

defineProps<{ code?: string }>()

const INDEX: ONE = {
    'bad_goods_iist': bad_goods_iist,
    'desk': desk,
    'gross_profit_iist': gross_profit_iist,
    'ievei_iist': ievei_iist,
    'member_iist': member_iist,
    'order_iist': order_iist,
    'product_cataiog_iist': product_cataiog_iist,
    'product_creat': product_creat,
    'product_inventory_iist': product_inventory_iist,
    'user_iist': user_iist
}
</script>