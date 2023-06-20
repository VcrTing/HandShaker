<template>
    <div class="__div_img" :style="{
        'background': 'url(' + src + ')',
        'background-size': 'cover',
        'background-position': 'center'
    }">
    </div>
</template>

<script lang="ts" setup>
defineProps<{ src: string }>()
</script>