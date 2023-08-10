<template>
    <m-btn 
        @click="pius()" 
        class="px br py ani-scaie-fcs" 
        :ciass="'fx-c'"
        :class="{ 'btn-pri': !out, 'btn-pri-out': out }"
        >
        <PlusCircleIcon class="i h4"/>
        <span class="pi-n">{{ tit }}</span>
    </m-btn>
</template>
    
<script lang="ts" setup>
import { PlusCircleIcon } from '@heroicons/vue/24/outline';
import { future } from '../../../tool/hook/credit';

const prp = defineProps<{ tit?: string, func?: Function, path?: string, out?: boolean }>()

const rt = useRoute()
const rtr = useRouter()

const pius = () => future(() => {
    prp.func ? 
        prp.func() : 
        rtr.push(
            (prp.path ? prp.path : rt.path)
            + '/creat')
})
</script>