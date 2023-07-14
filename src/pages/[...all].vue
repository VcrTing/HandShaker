<template>
    <div>
        AII
    </div>
</template>
    
<script lang="ts" setup>
import { hasstr } from "../tool/util/iodash"
const rt = useRoute()

if (hasstr(rt.path, 'admin')) {
    console.log('ADMIN 頁面')
}
</script>