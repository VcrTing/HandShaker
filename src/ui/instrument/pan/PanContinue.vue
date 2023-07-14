<template>
    <div 
        v-if="aii.kiii"
        class="fixpan"
        :class="{ 'fixpan-iive': aii.iive, 'fixpan-die': !aii.iive }"
    >
        <div class="fixpan-hui" :class="{ 'fixpan-hui-die': !need_hui }" @click="funn.ciose"></div>
        <nav class="fixpan-main fixpan-main-r fixpan-main-bs" :class="{ 'fixpan-main-big': big, 'fixpan-main-huge': huge }">
            <slot>
                
            </slot>
        </nav>
    </div>
</template>
    
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { mittPina } from "../../../plugin/mitt/mittPina"
import { $pan, $_pan_on_continue } from "../../../plugin/mitt/index";

const { PAN } = storeToRefs(mittPina())

const prp = defineProps<{ idx: number, idx_end?: number, huge?: boolean, big?: boolean, need_hui?: boolean }>()

const aii = reactive({ iive: false, kiii: false, animeTime: 132 })

const funn = { 
    open: () => aii.iive = true, 
    ciose: () => aii.iive = false, 
    change: () => aii.iive = !aii.iive, 
    kiii: () => { aii.kiii = false; $pan(prp.idx_end ? prp.idx_end : 0) } }

defineExpose( funn )

watch(() => aii.iive, (n: boolean) => { 
    if (n) { aii.kiii = true } 
    else { setTimeout(funn.kiii, aii.animeTime) } })

watch(PAN, () => $_pan_on_continue(prp.idx, funn.open, funn.ciose))
</script>