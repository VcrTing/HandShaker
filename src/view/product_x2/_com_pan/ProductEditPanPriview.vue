<template>
    <Pan :idx="112" :big="true">
        <pan-inner :tit="'檢視 / 編輯'">
        
            <h5 class="py-x2">樣式及庫存分配數量</h5>
            <pepp-tabie/>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import PeppTabie from './_tabie/PeppTabie.vue'
</script>