<template>
    <m-btn 
        @click="funn.printed()" 
        :bk="true" 
        class="wh-1em-x2 bg-con cir hand fx-aii-weak" 
        :ciass="'fx-c'"
        >
        <DocumentArrowDownIcon class="i"/>
    </m-btn>
</template>
    
<script lang="ts" setup>
import { DocumentArrowDownIcon } from '@heroicons/vue/24/outline';

const funn = {
    printed: () => {
        console.log('打印訂單')
    }
}
</script>