<template>
    <Pan :idx="111" :big="true">
        <pan-inner :tit="'入貨詳情'">
            <h5 class="py-x2">樣式</h5>
            <pepp-tabie/>

            <h5 class="py-x2">倉庫</h5>
            <pepi-tabie/>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import PepiTabie from './_tabie/PepiTabie.vue';
import PeppTabie from './_tabie/PeppTabie.vue';
</script>