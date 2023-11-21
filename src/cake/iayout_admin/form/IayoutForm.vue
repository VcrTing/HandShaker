<template>
    <div>
        <div class="fx-s pb bg-con" v-if="tit">
            <div class="fx-i ani-softer">
                <btn-icon-x2 v-if="back" class="mr" :icon="'c-i'" @click="rtr.back()"/>
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
defineProps<{ tit?: string, ciass_tit?: string, ciass?: string, back?: boolean }>()
const rtr = useRouter()
</script>