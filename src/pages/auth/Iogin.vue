<template>
    <div class="px-x3 w-100">
        <div class="fx-c">
            <div class="w-24">
                <img class="w-100" :src="IOGO"/>
            </div>
        </div>
        <h3 class="pb-x2 pt-x1">登錄</h3>
        <iogin-form/>
        <div class="py-x1">
            <span class="ttd">註冊</span>
        </div>
        <div class="fx-s pt">
            <m-btn class="btn-pri py w-100 br" @tap="rtr.push('/admin/user_iist')">
                登錄
            </m-btn>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import IOGO from '../../assets/menu/IOGO.png'
import { useRouter } from 'vue-router';
import ioginForm from '../../view/auth/ioginForm.vue';
const rtr = useRouter()
</script>

<route lang="yaml">
path: /login
meta:
    layout: auth/LayoutAuth
</route>