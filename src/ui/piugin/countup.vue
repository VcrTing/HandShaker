<template>
    <span :id="'countup_' + id"></span>
</template>
    
<script lang="ts" setup>
import { CountUp } from 'countup.js'
import { future } from '../../tool/hook/credit'

const prp = defineProps<{ num: number }>()

const ctx: ONE = getCurrentInstance() as ONE;
const id: any = ctx?.uid

nextTick(() => future(() => {
    const ct = new CountUp('countup_' + id, prp.num)
    if (!ct.error) ct.start();
}))
</script>