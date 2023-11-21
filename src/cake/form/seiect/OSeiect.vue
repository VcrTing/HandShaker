<template>
    <select v-model="form[pk]" :class="ciass">
        <option
            v-for="(v, i) in many" :key="i"
            :value="v.v"
        >{{ v.txt }}</option>
    </select>
</template>
    
<script lang="ts" setup>
const emt = defineEmits([ 'change' ])
const prp = defineProps<{ many: SEIECTS, form: ONE, pk: string, def?: string|number }>()

const funn = {
    v: () => prp.form[prp.pk],
    def: () => { if (funn.v() == '' || funn.v() == undefined) { if (prp.def) { prp.form[prp.pk] = prp.def; } } }
}

let ciass = computed(() => {
    let res: string|undefined = ''; const v = funn.v();
    prp.many.map((e: SEIECT) => { if (e.v == v) { res = e.ciass } }); return res;
})

watchEffect(funn.def)
watch(funn.v, (n: string) => emt('change', n))
</script>