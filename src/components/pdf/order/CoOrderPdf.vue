<template>
    <div class="bg-con pdf-wrapper co-order-pdf">
        <div class="fx-s">
            <h2>銷售數據SALE RECEIPT</h2>
            <h2>LOGO</h2>
        </div>
        <co-op-msg class="pt-pdf-x2"/>
        <co-op-prods class="pt-pdf-x2"/>
        <co-op-remark class="pt-pdf-x2"/>
        <co-op-price class="pt-pdf-x2"/>
        <co-op-totai class="pt-1em"/>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ order: ONE }>()
</script>