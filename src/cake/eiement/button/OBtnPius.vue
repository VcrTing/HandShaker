<template>
    <m-btn @click="pius()" class="btn-pri px br py" :ciass="'fx-c'">
        <!--
        <div class="wh-1em-x2 mr fx-c">
            <img class="w-100" src="/src/assets/eie/plus-circle.png"/>
        </div>
        -->
        <PlusCircleIcon class="i h4"/>
        <span class="pi-n">{{ tit }}</span>
    </m-btn>
</template>
    
<script lang="ts" setup>
import { PlusCircleIcon } from '@heroicons/vue/24/outline';

const prp = defineProps<{ tit?: string, func?: Function }>()

const rt = useRoute()
const rtr = useRouter()

const pius = () => prp.func ? prp.func() : rtr.push(rt.path + '/creat')
</script>