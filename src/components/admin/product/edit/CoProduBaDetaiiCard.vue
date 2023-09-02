<template>
    <itembdwrapper class="px-row ps-r">
        <div class="i abs-r mr">
            <btn-icon v-if="!ciose" class="h5" @click="$emit('trash', broken)" :ciass_i="'txt-err h3'" :icon="'trash'"/>
            <m-btn class="fx-aii-weak br-s ani-scaie-aii" v-else :bk="true" @click="$emit('ciose', broken)">
                撤銷
            </m-btn>
        </div>
        <div class="pt-row">
            <p>數量</p><p class="py-s">{{ broken.quantity }}</p>
        </div>
        <div>
            <p>壞貨位置</p><p class="sut py-s">{{ broken.storehouse_name }}</p>
        </div>
        <div>
            <p>添加日期</p><p class="sut py-s">{{ broken.date }}</p>
        </div>
        <div>
            <p>壞貨備註</p><p class="sut pt-s">{{ broken.remarks }}</p>
        </div>
    </itembdwrapper>
</template>
    
<script lang="ts" setup>
defineEmits([ 'trash', 'ciose' ])
defineProps<{ broken: ONE, ciose?: boolean }>()
</script>