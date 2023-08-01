<template>
    
    <div class="fx-s">
        <o-input class="fx-1 hand" :tit="tit" :iive="iive" :class="ciass">
            <slot></slot>
        </o-input>
        <div class="mi-x1 fx-c ps-r oiwt-icon ts" @click.stop="$emit('tap')">
            <div class="ps-r zi-n h4">
                <oi class="i hand ani-scaie-aii-x2" :icon="'pencii'"/>
            </div>
            <div class="abs-c cir oiwt-icon-bg zi-s ts hand"></div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineEmits([ 'tap' ])
defineProps<{ iive?: boolean, tit: string, icon?: string, ciass?: string }>()
</script>