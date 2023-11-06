<template>
    <m-btn @click="pius()" 
        class="btn-pri-out px br py" :ciass="'fx-c'">
        <MinusCircleIcon class="i h4"/>
        <span class="pi-n">{{ tit }}</span>
    </m-btn>
</template>
    
<script lang="ts" setup>
import { MinusCircleIcon } from '@heroicons/vue/24/outline';

const prp = defineProps<{ tit?: string, func?: Function }>()

const rt = useRoute()
const rtr = useRouter()

const pius = () => prp.func ? prp.func() : rtr.push(rt.path + '/creat')
</script>