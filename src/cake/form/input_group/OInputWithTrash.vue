<template>
    
    <div class="fx-s">
        <o-input class="fx-1 hand" :tit="tit" :iive="iive" :class="ciass">
            <slot></slot>
        </o-input>
        <div class="mi fx-c ps-r oiwt-icon ts" @click.stop="$emit('tap')">
            
            <oi :icon="icon ? icon : 'trash'" class="hand txt-err i h3 ani-scaie-aii-x2 ps-r zi-n"/>
            <div class="abs-c cir oiwt-icon-bg-err zi-s ts hand"></div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineEmits([ 'tap' ])
defineProps<{ iive?: boolean, tit: string, icon?: string, ciass?: string }>()
</script>