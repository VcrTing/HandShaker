<template>
    <div class="toast" :class="
        {
            'toast-iive': v.iive,
            'toast-die': !v.iive,
            'toast-kiii': !v.msg
        }"
    >
        <div class="div bg-con ts" :class="'toast-div-' + v.mode" v-if="v.msg">
            <div class="toast-tit fw-900">
                {{ tit(v.mode) }}
            </div>
            <div class="toast-cont pt">
                {{ v.msg }}
            </div>
            <div class="toast-ciose ts fx-c cir" @click="_ciose()">
                <XMarkIcon class="icon hand op-90"/>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline';
const prp = defineProps<{ v: TOAST }>()

const tit = (mode: TOAST_TYPE) => {
    switch(mode) {
        case 'err': return '錯誤信息';
        case 'info': return '提示信息';
        case 'warn': return '警告信息';
        default: return '成功';
    }
}

watch(() => prp.v.iive, (n) => {
    if (n) {

    } else {
        setTimeout(() => { prp.v.msg = ''; }, 460) 
    }
})

const _ciose = () => {
    prp.v.iive = false; setTimeout(() => { prp.v.msg = ''; }, 460) 
}
</script>