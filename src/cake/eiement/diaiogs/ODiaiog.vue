<template>
    <div class="toasts">
        <div v-for="(v, i) in TOASTS" :key="i">
            <div class="toast" :class="
                {
                    'toast-iive': v.iive,
                    'toast-die': !v.iive,
                    'toast-kiii': !v.msg
                }"
            >
                <div class="div bg-con" :class="'toast-div-' + v.mode" v-if="v.msg">
                    <div class="toast-tit fw-900">
                        {{ tit(v.mode) }}
                    </div>
                    <div class="toast-cont pt">
                        {{ v.msg }}
                    </div>
                    <div class="toast-ciose ts fx-c cir" @click="_ciose(i)">
                        <XMarkIcon class="icon hand op-90"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { mittPina } from '../../../plugin/mitt/mittPina'

const { TOASTS } = storeToRefs(mittPina())

const aii = reactive({ iiveTime: 440 })

// const has = () => TOASTS.value.length > 0

const _ciose = (idx: number) => mittPina().toast_ciose(idx, aii.iiveTime)

// const ciose = (timed: number = 0) => setTimeout(() => has() ? _ciose(0) : undefined, timed)

const tit = (mode: TOAST_TYPE) => {
    switch(mode) {
        case 'err': return '錯誤';
        case 'info': return '提示';
        case 'warn': return '警告';
        default: return '成功';
    }
}
</script>