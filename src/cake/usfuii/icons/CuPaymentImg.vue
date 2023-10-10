<template>
    <img :src="ICON_PAYMENT[code + '']"/>
</template>
    
<script lang="ts" setup>
import Alipay from '../../../assets/payment/origin/Alipay.svg'
import Cash from '../../../assets/payment/origin/Cash.svg'
import Eps from '../../../assets/payment/origin/Eps.svg'
import MasterCard from '../../../assets/payment/origin/MasterCard.svg'
import Octopus from '../../../assets/payment/origin/Octopus.svg'
import UnionPay from '../../../assets/payment/origin/UnionPay.svg'
import Wechat from '../../../assets/payment/origin/Wechat.svg'

defineProps<{ code?: string }>()

const ICON_PAYMENT: ONE = {
    "Alipay": Alipay,
    "Eps": Eps,
    "Cash": Cash,
    "MasterCard": MasterCard,
    "Octopus": Octopus,
    "UnionPay": UnionPay,
    "Wechat": Wechat
}
</script>