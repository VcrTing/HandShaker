<template>
    <m-btn @tap="rtr.push(v.iink)" class="menu-item py">
        <div class="fx-i">
            <div class="menu-item-i fx-c">
                <PhotoIcon class="i h4"/>
            </div>
            <div class="menu-item-txt">
                <div class="fx-i">
                    <button>{{ v.tit }}</button>
                </div>
            </div>
        </div>
    </m-btn>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
import { PhotoIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router';
const rtr = useRouter()
defineProps<{ v: MENU }>()
</script>