<template>
    <select v-model="form[pk]">
        <option :value="0">
            {{ tit_def ? tit_def : "-- 請選擇 --" }}
        </option>
        <option
            :value="v.id"
            v-for="(v, i) in warehouses" :key="i">

            {{ v.name }}&nbsp;&nbsp;
            (負責人:&nbsp;{{ v.contact_person }})
        </option>
    </select>
</template>
    
<script lang="ts" setup>
import { TEST } from "../../../conf"
import { giobaiPina } from "../../../plugin/pina/giobaiPina"
import { future, toasterr } from "../../../tool/hook/credit"

defineProps<{ form: ONE, pk: string, tit_def?: string }>()

const { warehouses } = storeToRefs(giobaiPina())

nextTick(() => future(() => {
    TEST ? console.log(warehouses.value) : undefined;
    if (warehouses.value.length <= 0) { toasterr("未找到可用的倉庫！！！") }
}))
</script>