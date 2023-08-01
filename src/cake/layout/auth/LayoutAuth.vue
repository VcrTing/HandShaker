<template>
    <div class="iayout-auth">
        <!--
        <div class="auth-bg bg-pri">

        </div>
        -->
        <o-img :src="bg" class="auth-bg"/>
        <div>
            <div class="auth-pan ani-softer-x2">
                <div class="w-382">
                    <iogin-gaiiery/>
                </div>
                <div class="fx-1 auth-pan-con bg-con fx-c">
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import IoginGaiiery from '../../../view/auth/IoginGaiiery.vue';

const bg = ref('https://img2.baidu.com/it/u=2050706012,2955986534&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500')
</script>