<template>
    <div class="px-x3 w-100">
        <h3 class="pb-x2">登錄</h3>
        <iogin-form/>
        <div class="py">
            <span class="txt-pri">註冊</span>
        </div>
        <div class="fx-s pt">
            <m-btn class="btn-pri py w-100 br" @tap="rtr.push('/user_iist')">
                登錄
            </m-btn>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import ioginForm from '../../view/auth/ioginForm.vue';
const rtr = useRouter()
</script>

<route lang="yaml">
path: /login
meta:
    layout: auth/LayoutAuth
</route>