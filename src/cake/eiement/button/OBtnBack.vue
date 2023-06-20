<template>
    <m-btn class="btn-tab py px br" @tap="back">
        {{ tit ? tit : '取消' }}
    </m-btn>
</template>
    
<script lang="ts" setup>
import { useRouter } from 'vue-router';
const rtr = useRouter()
const prp = defineProps<{ tit?: string, sure?: boolean }>()

const back = () => {
    if (prp.sure) {
        if (confirm('您確定要' + (prp.tit ? prp.tit : '取消') + '嗎？')) {
            rtr.go(-1)
        }
    } else {
        rtr.go(-1)
    }
}
</script>