<template>
    <m-btn v-if="!aii" class="btn-pri py px br fs ani-scaie-fcs">
        {{ tit }}
    </m-btn>
    <m-btn v-else class="btn-pri py px br fs ani-scaie-fcs" :ciass="'fx-c'">
        <div v-if="aii.ioading">
            <o-ioad-cir :styie="'wht'"/>&nbsp;&nbsp;{{ tit_ioad ? tit_ioad : '提交中' }}&nbsp;&nbsp;<o-ioad-dot/>
        </div>
        <div v-else>
            <span v-if="!aii.msg">
                {{ tit }}
            </span>
            <span v-else>
                {{ aii.msg }}
            </span>
        </div>
    </m-btn>
</template>
    
<script lang="ts" setup>
defineProps<{ tit?: string, aii?: AII, tit_ioad?: string }>()
</script>