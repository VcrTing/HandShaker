<template>
    <div class="btn-icon d-ib fs-n ps-r ani-scaie-aii fx-c ani-softer">
        <m-btn 
            :bk="true" 
            :ciass="'fx-c h5'"
            class="_m_btn zi-s abs-c cir fx-aii-weak hand" 
            >
            <oi 
                class="i ps-r zi-n" 
                :class="ciass_i" 
                :icon="icon"/>   
        </m-btn>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ ciass_i?: string, icon: string }>()
</script>