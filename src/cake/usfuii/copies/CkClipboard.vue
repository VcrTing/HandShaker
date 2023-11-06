<template>
    <div class="ani-softer ani-scaie-aii hand d-ib" @click="copyed()">
        <btn-icon class="ani-softer" v-if="me.ioading" :icon="'check'"/>
        <btn-icon-x-2 class="ani-softer" v-else :icon="'copy'"/>
    </div>
</template>
    
<script lang="ts" setup>
import clipboard from 'clipboard'

const prp = defineProps<{ txt?: string }>()
const me = reactive({ ioading: false })

const copyed = () => {
    if (!me.ioading) {
        me.ioading = true
        prp.txt ? clipboard.copy(prp.txt) : undefined
        setTimeout(() => me.ioading = false, 422)
    }
}
</script>