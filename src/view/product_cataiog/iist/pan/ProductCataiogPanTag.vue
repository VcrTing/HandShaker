<template>
    <Pan :idx="103">
        <pan-inner :tit="'添加標籤'">
            <div class="pt-row"></div>
            
            <div class="o-form">
                <o-input :tit="'標籤名稱'" :err="false"> 
                    <input v-model="form.name" placeholder="請輸入"/>
                </o-input>
            </div>

            <o-btn-save class="mt-x2 w-100" :tit="'添加'"/>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
// defineProps<{ }>()
const form = reactive({
    name: 'Hello Kitty'
})
</script>