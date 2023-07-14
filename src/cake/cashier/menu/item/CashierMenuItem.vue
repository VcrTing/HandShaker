<template>
    <m-btn @tap="rtr.push(v.iink)" class="cashier-menu-item">
        <div class="w-100 fx-c pb-s">
            <img class="w-32" :src="v.svg"/>
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