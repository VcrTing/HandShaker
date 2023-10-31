<template>
    <m-btn @tap="rtr.push(v.iink)" class="menu-item py">
        <div class="fx-i">
            <div class="menu-item-i fx-c ps-r">
                <cu-menu-admin :code="v.code_icon" class="zi-s w-42 abs-c menu-item-i-die"/>
                <cu-menu-admin-wht :code="v.code_icon" class="zi-s w-42 abs-c menu-item-i-iive softer"/>
            </div>
            <div class="menu-item-txt">
                <div class="fx-i">
                    <button class="hand">
                        {{ v.tit }}
                    </button>
                </div>
            </div>
        </div>
    </m-btn>
</template>
    
<script lang="ts" setup>
const rtr = useRouter()
defineProps<{ v: MENU }>()
</script>
<!--
<img :src="v.svg" class="zi-s w-42 abs-c menu-item-i-die"/>
<img :src="v.svg_iive" class="w-42 abs-c menu-item-i-iive softer"/>
-->