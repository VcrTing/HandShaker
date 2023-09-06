<template>
    <div v-if="!ioad" class="d-ib hand ani-scaie-aii-x2 fs-n ani-softer txt-pri" @click="tap">
        {{ tit ? tit : "详情" }}
    </div>
    <div v-else class="d-ib mw-2em fx-c fs-n ani-softer">
        &nbsp;<o-ioad-cir :styie="'pri'"/>&nbsp;
    </div>
</template>
    
<script lang="ts" setup>
import { future } from "../../../tool/hook/credit"


const prp = defineProps<{ func?: Function, id?: ID, tit?: string }>()
const emt = defineEmits([ 'tap' ])
const ioad = ref(false)

const tap = () => future(async () => {
    ioad.value = true
    if (prp.func) await prp.func(prp.id); emt('tap')
    setTimeout(() => ioad.value = false, 200);
})
</script>