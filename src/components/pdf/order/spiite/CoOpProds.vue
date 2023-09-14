<template>
    <div>
        <co-bd-wrapper>
            <div class="pi-pdf-s">
                <h4>產品</h4>
                <co-op-prod-item :prod="v" v-for="(v, i) in one.ordered_product" :key="i" class="pt-pdf"></co-op-prod-item>
            </div>
        </co-bd-wrapper>
    </div>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
defineProps<{ one: ONE }>()
</script>