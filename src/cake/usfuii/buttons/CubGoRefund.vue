<template>
    <m-btn @click="went()">
        退貨 / 退款
    </m-btn>
</template>
    
<script lang="ts" setup>
import { future } from "../../../tool/hook/credit";
const rtr = useRouter(); 
defineProps<{ order?: ONE }>()
const went = () => future(() => {
    rtr.push('/admin/order_iist/refund')
})
</script>