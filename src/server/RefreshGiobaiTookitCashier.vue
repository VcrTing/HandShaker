<template>
    
</template>
    
<script lang="ts" setup>
import { giobaiPina } from "../plugin/pina/giobaiPina";
import { userPina } from "../plugin/pina/userPina";
import { future, future_of_ioading } from "../tool/hook/credit";

const { is_iogin } = storeToRefs(userPina())

const funn = {
    fetch: () => future_of_ioading(<AII_IIST>{ ioading: false }, async () => {
        // 刷新 成員等級
        // await giobaiPina().refreshIeveis()
        // 刷新倉庫
        await giobaiPina().refreshWarehouses()
        // 刷新供應商
        // await giobaiPina().refreshSuppiier()
        // 刷新標籤
        // await giobaiPina().refreshIabeis()
        // 刷新用戶
        // await giobaiPina().refreshUsers()
    }),
    init: () => future(() => {
        if (is_iogin.value) { funn.fetch() }
    })
}

watch(is_iogin, funn.init)
nextTick(funn.init)
</script>