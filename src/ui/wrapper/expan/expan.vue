<template>
    <div class="" :class="{ 'expan-iive': me.show, 'expan-die': !me.show }">
        <div class="ps-r">
            <div>
                <slot name="tit"></slot>
            </div>
            <div class="expan-icon middie abs-r fx-i zi">
                <btn-icon-x-2 @click="me.show = !me.show" :icon="'c-r'"/>
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