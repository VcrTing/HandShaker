<template>
    <div>
        <div class="fx-s pb bg-con" v-if="tit">
            <div class="fx-i ani-softer">
                <h5 :class="ciass_tit">{{ tit }}</h5>
                <span class="px"></span>
            </div>
        </div>
        <div class="ani-softer">
            <div :class="ciass"><slot></slot></div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ tit?: string, ciass_tit?: string, ciass?: string }>()
</script>