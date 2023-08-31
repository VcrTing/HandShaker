<template>
    <div class="fx-c">
        <div class="w-618 w-100-p fx-s ani-bar-bottom" :class="ciass">
            <btn-tab class="fx-1 ani-scaie-fcs" :tit="tit_back ? tit_back : '返回'" @click="$emit('back')" :ciass="'refund'"/>
            <span class="px-s"></span>
            <o-btn-save :aii="aii" class="fx-1 ani-scaie-fcs" :tit="tit_save ? tit_save : '印列訂單'" @click="$emit('save')"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ tit_save?: string, tit_back?: string, ciass?: string, aii?: ONE }>()
defineEmits([ 'save', 'back' ])
</script>