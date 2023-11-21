<template>
    <div class="o-ioad-dot" :class="'o-ioad-dot-' + styie ? styie : 'def'">
        <div class="oid_1">.</div>
        <div class="oid_2">.</div>
        <div class="oid_3">.</div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ styie?: "pri"|"wht"|"def" }>()
</script>