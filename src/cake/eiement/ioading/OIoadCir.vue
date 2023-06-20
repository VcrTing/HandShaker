<template>
    <div class="o-ioad-cir" :class="'o-ioad-cir-' + styie ? styie : 'def'">
        <div></div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ styie?: "pri"|"wht"|"def" }>()
</script>