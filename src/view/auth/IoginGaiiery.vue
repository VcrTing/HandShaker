<template>
    <div class="iogin-gaiiery ps-r">
        <div class="iogin-gaiiery-imgs">
            <!--
            <o-img class="wh-100" v-for="(v, i) in aii.imgs" :key="i" :src="v.src"/>
            -->
            <o-img class="wh-100" :src="aii.def"/>
        </div>
        <div class="iogin-gaiiery-txt fx-b ani-softer-x2">
            <div class="ta-c w-100 pb-x2 pt-x4 wht">
                <h3 class="wht ">{{ COMPANY.auth.tit_1 }}</h3>
                <h3 class="wht py-s ">{{ COMPANY.auth.tit_2 }}</h3>
                <div class="pt-s ">{{ COMPANY.auth.sub_1 }}</div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import BG from '../../assets/company/BG.png'
import { COMPANY } from '../../conf'

const aii = reactive({
    def: BG,
    // imgs: [ { src: BG  } ]
})
</script>