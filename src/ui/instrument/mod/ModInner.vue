<template>
    <div class="mod-pa">
        <div class="fx-s">
            <h4 class="fx-1" v-if="tit">{{ tit }}</h4>
            <span v-else></span>
            <m-btn class="btn-tab btn-i h4" v-if="stat" :ciass="'fx-c'" @tap="$mod(0)">
                <i class="fa-solid fa-xmark fs"></i>
            </m-btn>
        </div>
        <div class="pt ps-r zi-s">
            <slot></slot>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { $mod } from '../../../plugin/mitt';
defineProps<{ tit?: string, stat?: boolean }>()
</script>