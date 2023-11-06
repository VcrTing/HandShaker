<template>
    <div @click="rtr.push(ink ? ink : (rt.path + '/' + to))" class="hand d-ib">
        <slot></slot>
    </div>
</template>
    
<script lang="ts" setup>
const rtr = useRouter()
const rt = useRoute()
defineProps<{ to?: string, ink?: string }>()
</script>