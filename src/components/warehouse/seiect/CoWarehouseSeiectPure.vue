<template>
    <select v-model="form[pk]">
        <option value="">
            {{ tit_def ? tit_def : "-- 請選 --" }}
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
import { giobaiPina } from "../../../plugin/pina/giobaiPina"

defineProps<{ form: ONE, pk: string, tit_def?: string }>()

const { warehouses } = storeToRefs(giobaiPina())
</script>