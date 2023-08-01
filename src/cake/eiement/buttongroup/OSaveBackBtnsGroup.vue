<template>
    <aside class="fx-c">
        <div class="w-618 w-100-p fx-s">
            <btn-tab class="fx-1" :tit="tit_back ? tit_back : '返回'" @click="$emit('back')" :ciass="'refund'"/>
            <span class="px"></span>
            <btn-pri class="fx-1" :tit="tit_save ? tit_save : '印列訂單'" @click="$emit('save')"/>
        </div>
    </aside>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
defineProps<{ tit_save?: string, tit_back?: string }>()
defineEmits([ 'save', 'back' ])
</script>