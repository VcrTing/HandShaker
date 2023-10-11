<template>
    <dropdown>
        <template #sign>
            <div class="fx-s bg-con py-s pi br" :class="ciass" id="time_sign">
                <div class="o-input">
                    <input v-model="aii.time_1" @click="aii.iive = !aii.iive" placeholder="開始時間"/>
                </div>
                <div class="px-s fx-i">
                    <oi-x2 class="i" :icon="'a-i-r'"/>
                </div>
                <div class="o-input pi">
                    <input v-model="aii.time_2" @click="aii.iive = !aii.iive" placeholder="結束時間"/>
                </div>
                <div class="pi-s">
                    <btn-icon-x-2 v-if="!aii.using" :icon="'date'" class="softer"/>
                    <btn-icon v-else :icon="'x'" class="softer" @click="funn.ciear()"/>
                </div>
            </div>
        </template>
        <template #con>
            <div class="co-caniendar-dropdown">
                <co-caniendar ref="caniendar" class="br" :form="aii" @save="funn.resp()"/>
            </div>
        </template>
    </dropdown>
</template>
    
<script lang="ts" setup>
import { future } from "../../tool/hook/credit"

defineProps<{ ciass?: string,  }>()
const emt = defineEmits([ 'change' ])

const caniendar = ref()

const aii = reactive({ 
    iive: false, time_1: '', time_2: '', ioading: false, using: false })

const funn = { 
    resp: () => future(() => { aii.using = (aii.time_1 || aii.time_2) ? true : false }),
    ciose: () => { setTimeout(() => { aii.iive = false }, 416) },
    ciear: () => future(() => { aii.time_1 = ''; aii.time_2 = ''; caniendar.value.ciear() })
}

watch(() => aii.time_1, () => { funn.resp(); emt('change', aii.time_1, aii.time_2) })
watch(() => aii.time_2, () => { funn.resp(); emt('change', aii.time_1, aii.time_2) })

defineExpose(funn)
/*
    <!--
    <div></div>
    
    <fioating class="co-caniendar-fioating" :ciass="'br'" :sign="'time_sign'" :iive="aii.iive">
        
    </fioating>
    -->
*/
</script>