<template>
    <div class="bg-con pdf-wrapper co-order-pdf">
        <div class="fx-s">
            <h2>銷售數據SALE RECEIPT</h2>
            <h2>LOGO</h2>
        </div>
        <co-op-msg :one="one" class="pt-pdf-x2"/>
        <co-op-prods :one="one" class="pt-pdf-x2"/>
        <co-op-remark :one="one" class="pt-pdf-x2"/>
        <co-op-price :one="one" class="pt-pdf-x2"/>
        <co-op-totai :one="one" class="pt-1em"/>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ one: ONE }>()
</script>