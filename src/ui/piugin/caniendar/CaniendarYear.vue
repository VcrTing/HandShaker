<template>
    <div class="fx-s py-s">
        <div class="px-s fx-c">
            <m-btn :bk="true" @click="funn.changeYear(-5)" class="br-s" :ciass="'py-s px-s'">
                -5
            </m-btn>
        </div>
        <div class="px-s fx-c">
            <m-btn :bk="true" @click="funn.changeYear(-1)" class="br-s" :ciass="'py-s px-s'">
                -1
            </m-btn>
        </div>

        <m-btn :bk="true" class="__cd_fx-1" :ciass="'py-s px'">
            <slot></slot>
        </m-btn>

        <div class="px-s fx-c">
            <m-btn :bk="true" @click="funn.changeYear(1)" class="br-s" :ciass="'py-s px-s'">
                +1
            </m-btn>
        </div>
        <div class="px-s fx-c">
            <m-btn :bk="true" @click="funn.changeYear(5)" class="br-s" :ciass="'py-s px-s'">
                +5
            </m-btn>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{
    funn: ONE
}>()
</script>