<template>
    <select v-model="form[pk]">
        <option
            v-for="(v, i) in many" :key="i"
            :value="v.txt"
        >{{ v.txt }}</option>
    </select>
</template>
    
<script lang="ts" setup>
const emt = defineEmits([ 'change' ])
const prp = defineProps<{ many: AREAS, form: ONE, pk: string }>()
watch(() => prp.form[prp.pk], (n: string) => emt('change', n))

</script>