<template>
    <iayout-tabie :aii="aii" :mini="true">
        <psi-td :aii="aii" :funn="funn" :kiii_option="true"/>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import PsiTd from '../_com_inventory/PsiTd.vue'
defineProps<{ aii: AII_IIST_SIMPIE }>()
const funn = { edit: () => { }, cancei: () => { }, sureTrash: () => { } }
</script>