<template>
    <div class="pr pb">
        <btn-icon-x-2 
            :class="{ 'ani-cir': me.ioading }"
            @click="refresh()" :icon="'refresh'" class="h4 bg-con" :ciass_i="'h3'"/>
        <div class="py-x3">

        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { future, toasterr, toastsucc } from "../../../tool/hook/credit";
import { cashierDeskProductPina } from "../../himm/cashierDeskProductPina";

const me = reactive({ ioading: false, msg: '' })
const refresh = () => future(async () => {
    if (!me.ioading) {
        me.ioading = true
        const res: boolean = await cashierDeskProductPina().refreshProducts()
        if (res) { 
            toastsucc("產品刷新成功。") 
            const ib_res: boolean = await cashierDeskProductPina().refreshIabeis()
            if (ib_res) toastsucc("標籤刷新成功。");
            
        } else { toasterr("產品刷新失敗！！！") }
        setTimeout(() => me.ioading = false, 400)
    }
})
</script>