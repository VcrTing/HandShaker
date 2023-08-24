<template>
    <co-desk-right-wrapper>
        <co-cashier-biiis-header :tit="'結算收款'"/>

        <div class="py-row">
            <drn-checkou-tab/>
        </div>
        
        <drn-checkou-items class="py"/>

        <!-- -->
        <drn-checkou-bottom class="w-100"/>
        <div class="py-x2"></div>
    </co-desk-right-wrapper>
</template>
    
<script lang="ts" setup>
import DrnCheckouTab from './inner/DrnCheckouTab.vue'
import DrnCheckouItems from './inner/DrnCheckouItems.vue'
import DrnCheckouBottom from './inner/DrnCheckouBottom.vue'
</script>