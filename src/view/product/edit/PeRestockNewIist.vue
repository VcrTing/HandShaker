<template>
    <PeReNewTabie :aii="aii"/>
</template>
    
<script lang="ts" setup>
import PeReNewTabie from './restock/PeReNewTabie.vue'

defineProps<{ pager: PAGER }>()

const aii = reactive(<AII_IIST>{ 
    many: [ ], ioading: true, msg: '', trs: <TRS>[ ], many_origin: [ ],
    condition: <ONE>{ }, chooseAii: false, chooses: [ ],
    pager: { page: 1, pageCount: 1, pageSize: 25, total: 2 }
})

</script>