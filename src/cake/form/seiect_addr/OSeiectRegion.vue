<template>
    <select
        v-model="form[pk]"
    >
        <option
            v-for="(_, k) in areas" :key="k"
            :value="k"
        >
            {{ k }}
        </option>
    </select>
</template>
    
<script lang="ts" setup>
import { areas, area_def } from '../../../tool/data/region'
const emt = defineEmits([ 'sign' ])
const prp = defineProps<{ form: ONE, pk: string, pk_dis?: string }>()

watch(() => prp.form[prp.pk], (n: string) => {
    const dis: AREAS = areas[n];
    if (prp.pk_dis) { prp.form[prp.pk_dis] = dis[0].txt }
    emt('sign', dis)
} )

nextTick(() => {
    const src = prp.form[prp.pk]
    if (!src) { prp.form[prp.pk] = area_def }
})
</script>