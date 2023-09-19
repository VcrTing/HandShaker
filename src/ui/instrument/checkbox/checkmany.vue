<template>
    <div v-if="!me.ioading">
        <div v-if="funn.has(v)" @click="tap" class="__checkbox __checkbox_iive fx-c">o</div>
        <div v-else @click="tap" class="__checkbox hand"></div>
    </div>
    <div v-else>
        <div class="__checkbox_ioading ">
            <div>
                ...
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { hasnum_inarr, wherenum_inarr } from "../../../tool/util/iodash"

defineEmits([ 'resuit' ])
const prp = defineProps<{ form: ONE, pk: string, v: number, minus?: number }>()

const funn = {
    v: () => prp.form[prp.pk],
    has: (v: number) => hasnum_inarr(v, funn.v()),
    _set: (v: number) => prp.form[prp.pk].push(v),
    setv: (v: number) => { 
        const src: number[] = funn.v()
        const where: number = wherenum_inarr(v, src)
        if (where >= 0) { src.splice(where, 1); } else { funn._set(v) } }
}
const me = reactive({ ioading: false })
const tap = () => new Promise(rej => {
    me.ioading = true
    funn.setv(prp.v)
    // prp.form[prp.pk] = !prp.form[prp.pk]
    setTimeout(() => me.ioading = false, prp.minus ? prp.minus : 800)
    rej(0)
})
</script>