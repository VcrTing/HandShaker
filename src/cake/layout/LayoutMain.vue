<template>
    <div :class="{ 'htmi-iive': aii.menu, 'htmi-die': !aii.menu }">
        <div class="htmi-menu">
            <htmi-menu/>
            <div class="py"></div>
        </div>
        <div class="htmi-menu-hui hand" v-if="aii.menu_hui" @click="aii.menu = false"></div>
        <htmi-center class="htmi-center">
            <div class="htmi-top">
                <htmi-top @change="aii.menu = true" class="bg-pri pri-wht"/>
            </div>
            <div class="htmi-cont bg-htmi-cont pt-top-h">
                <router-view/>
            </div>
        </htmi-center>
    </div>
</template>
    
<script lang="ts" setup>
import HtmiMenu from '../htmi/menu/HtmiMenu.vue';
import HtmiTop from '../htmi/top/HtmiTop.vue'
const aii = reactive({ 
    menu: false, menu_hui: false,
    menu_iive_anim: 242
})

const funn = {
    hui: () => {
        if (!aii.menu) {
            setTimeout(() => aii.menu_hui = false, aii.menu_iive_anim)
        } else {
            aii.menu_hui = true
        }
    }
}

watch(() => aii.menu, funn.hui)
</script>