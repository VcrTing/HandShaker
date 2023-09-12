<template>
    <m-btn :bk="true" class="w-100 ta-i br bg-con-x2 ani-scaie-aii">
        <aside class="fx-s py-s">
            <div class="w-50 pi">
                <div>產品:&nbsp;&nbsp;{{ product.product_id }}</div>
                <div class="fw-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ product.name }}</div>
            </div>
            <div class="w-50">
                <!--
                <div class="ta-r">詳情</div>
                -->
            </div>
        </aside>
    </m-btn>
</template>
    
<script lang="ts" setup>
defineProps<{ product: ONE }>()
</script>