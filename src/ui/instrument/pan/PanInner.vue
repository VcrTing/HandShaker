<template>
    <div class="fixpan-pa">
        <div class="fx-s">
            <h4 class="fx-1">{{ tit }}</h4>
            <m-btn class="btn-tab h4 br" :ciass="'fx-c'" @tap="$pan(0)">
                <i class="fa-solid fa-xmark"></i>
            </m-btn>
        </div>
        <div class="py">
            <slot></slot>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { $pan } from '../../../plugin/mitt';

// import { reactive } from 'vue'
defineProps<{ tit?: string }>()

</script>