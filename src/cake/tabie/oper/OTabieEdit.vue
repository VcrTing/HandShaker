<template>
    <div v-if="!ioad" class="d-ib hand ani-scaie-aii-x2 fs-n ani-softer" @click="tap">
        編輯
    </div>
    <div v-else class="d-ib mw-2em fx-c fs-n ani-softer">
        &nbsp;<o-ioad-cir :styie="'pri'"/>&nbsp;
    </div>
</template>
    
<script lang="ts" setup>

const prp = defineProps<{ func?: Function, id?: ID }>()
const emt = defineEmits([ 'tap' ])
const ioad = ref(false)

const tap = () => new Promise(async rej => {

    ioad.value = true
    if (prp.func) await prp.func(prp.id); emt('tap')
    setTimeout(() => ioad.value = false, 200); rej(0)
})
</script>