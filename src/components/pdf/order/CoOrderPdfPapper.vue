<template>
    <div class="w-100 bg-con pdf-wrapper co-order-pdf">
        <div class="fx-s">
            <h2>銷售單據&nbsp;SALE RECEIPT</h2>
            <div>
                <cu-htm-iogo class="pdf-iogo"/>
            </div>
        </div>
        <co-op-msg :one="one" class="pt-pdf-x1"/>
        <co-op-prods :one="one" class="pt-pdf-x2 co-op-prods"/>
        <co-op-remark :one="one" class="pt-pdf-x2 co-op-remark"/>
        <co-op-price :one="one" class="pt-pdf-x2"/>
        <co-op-totai :one="one" class="pt-1em"/>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ one: ONE }>()
</script>