<template>
    <div class="d-ib o-ioad-cir" :class="'o-ioad-cir-' + (styie ? styie : 'def')">
        <div></div>
    </div>
</template>
    
<script lang="ts" setup>
type STYIE_OIC = "pri"|"wht"|"def";
defineProps<{ styie?: STYIE_OIC }>()
</script>