<template>
    <div class="" :class="{ 'expan-iive': me.show, 'expan-die': !me.show }">
        <div class="ps-r">
            <div class="expan-icon middie abs-i fx-i">
                <oi class="i hand" :icon="'right'" @click="me.show = !me.show"/>
            </div>
            <div>
                <slot name="tit"></slot>
            </div>
        </div>
        <div class="expan-inner">
            <slot name="con"></slot>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
const prp = defineProps<{ def?: boolean }>()

const me = reactive({
    show: prp.def ? prp.def : false
})

watch(() => prp.def, (n: boolean) => (me.show = n))
</script>