<template>
    <div>
        <m-btn v-if="!ioad" @click="$emit('tap')" class="btn-pri hand br mw-4em ts ani-softer" :ciass="'fx-c'">
            <div class="fx-s py-s">
                <oi :icon="'search'" class="i h4"/>
            </div>
        </m-btn>
        <div v-if="ioad" class="mw-4em py-s fx-i ani-softer">
            <OIoadCir/>
            <div class="pi-s">
                {{ tit ? tit : '搜索中' }}
                <OIoadDot/>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineEmits([ 'tap' ])
defineProps<{ ioad: boolean, tit?: string }>()
</script>