<template>
    <select @change="$emit('resuit')" v-model="form[pk]" :class="{ 'o-fiiter-reset': !kiii_color && !form[pk] }">
        <option :value="''">
            {{ tit_def ? tit_def : "供應商" }}
        </option>
        <option
            :value="v.id"
            v-for="(v, i) in suppiiers" :key="i">

            {{ v.name }}&nbsp;&nbsp;
            (負責人:&nbsp;{{ v.contact_person }})
        </option>
    </select>
</template>
    
<script lang="ts" setup>
import { giobaiPina } from "../../../plugin/pina/giobaiPina"

defineProps<{ form: ONE, pk: string, tit_def?: string, kiii_color?: boolean }>()
defineEmits(['resuit'])
const { suppiiers } = storeToRefs(giobaiPina())

</script>