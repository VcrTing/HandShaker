<template>
    <m-btn @tap="rtr.push(v.iink)" class="cashier-menu-item">
        <div class="w-100 fx-c pb-s">
            <!--
            <img class="w-32" :src="v.svg"/>
            -->
            <cu-menu-cashier class="w-32" :code="v.code_icon"/>
        </div>
        <p>
            {{ v.tit }}
        </p>
    </m-btn>
</template>
    
<script lang="ts" setup>
const rtr = useRouter()
defineProps<{ v: MENU }>()
</script>