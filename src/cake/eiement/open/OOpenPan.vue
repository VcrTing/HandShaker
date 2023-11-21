<template>
    <div @click="$pan(idx ? idx : 0)" class="hand d-ib">
        <slot></slot>
    </div>
</template>
    
<script lang="ts" setup>
import { $pan } from "../../../plugin/mitt/index";
defineProps<{ idx?: number }>()
</script>