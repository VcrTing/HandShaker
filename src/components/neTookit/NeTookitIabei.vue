<template>
    
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'

import { future } from "../../tool/hook/credit"

// defineProps<{ }>()
const funn = {
    many: future(() => {
        
    })
}
defineExpose(funn)
</script>