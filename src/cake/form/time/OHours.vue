<template>
    <input v-model="form[pk]" placeholder="00:00"/>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
const prp = defineProps<{ form: ONE, pk: string }>()

const funn = {
    v: () => prp.form[prp.pk],
}

watch(funn.v, (n: string) => {
    console.log('N =', n)
})
</script>