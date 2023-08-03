<template>
    
</template>
    
<script lang="ts" setup>
import { giobaiPina } from "../plugin/pina/giobaiPina";
import { userPina } from "../plugin/pina/userPina";
import { future, future_of_ioading } from "../tool/hook/credit";

const { is_iogin } = storeToRefs(userPina())

const funn = {
    fetch: () => future_of_ioading(<AII_IIST>{ ioading: true }, async () => {
        // 刷新 成員等級
        await giobaiPina().refreshIeveis()
    }),
    init: () => future(() => {
        if (is_iogin.value) {
            funn.fetch()
        }
    })
}

watch(is_iogin, funn.init)
nextTick(funn.init)
</script>