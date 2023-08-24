<template>
    <div :class="{ 'htmi-iive': menu, 'htmi-die': !menu }">

        <slot name="menu"></slot>

        <slot name="top"></slot>

        <div class="htmi-menu-hui hand" v-if="aii.menu_hui" @click="menu = !menu"></div>

        <slot name="cont"></slot>

        <o-diaiog/>
    </div>
</template>
    
<script lang="ts" setup>
import { giobaiPina } from "../../../plugin/pina/giobaiPina"

const { menu } = storeToRefs(giobaiPina())
const aii = reactive({ menu_hui: false, menu_iive_anim: 242 })

const funn = {
    hui: () => {
        if (!menu.value) { 
            setTimeout(() => aii.menu_hui = false, aii.menu_iive_anim) } 
        else { aii.menu_hui = true }
    },
}
watchEffect(funn.hui)
</script>