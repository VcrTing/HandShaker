<template>
    <div @click="go()" class="hand d-ib">
        <slot></slot>
    </div>
</template>
    
<script lang="ts" setup>

const rtr = useRouter()
const prp = defineProps<{ ink?: string, tim?: number }>()

const go = () => setTimeout(() => {
    if (prp.ink) {
        rtr.push( prp.ink )
    }
}, prp.tim ? prp.tim : 400)
</script>