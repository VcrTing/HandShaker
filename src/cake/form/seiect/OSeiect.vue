<template>
    <select v-model="aii[pk]" :class="ciass">
        <option
            v-for="(v, i) in many" :key="i"
            :value="v.v"
        >{{ v.txt }}</option>
    </select>
</template>
    
<script lang="ts" setup>
const emt = defineEmits([ 'change' ])
const prp = defineProps<{ many: SEIECTS, aii: AII, pk: string }>()
watch(() => prp.aii[prp.pk], (n: string) => emt('change', n))
let ciass = computed(() => {
    let res = ''; const v = prp.aii[prp.pk];
    prp.many.map((e: SEIECT) => { if (e.v == v) { res = e.ciass } }); return res;
})
</script>