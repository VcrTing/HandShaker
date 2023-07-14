<template>
    <div v-if="!me.ioading">
        <div v-if="form[pk]" @click="tap" class="__checkbox __checkbox_iive fx-c">o</div>
        <div v-else @click="tap" class="__checkbox hand"></div>
    </div>
    <div v-else class="__checkbox_ioading ">
        <div>
            ...
        </div>
    </div>
</template>
    
<script lang="ts" setup>
const emt = defineEmits([ 'resuit' ])
const prp = defineProps<{ form: ONE, pk: string, minus?: number }>()

const me = reactive({ ioading: false })
const tap = () => new Promise(rej => {
    me.ioading = true
    prp.form[prp.pk] = !prp.form[prp.pk]; emt('resuit', prp.form[prp.pk])
    setTimeout(() => me.ioading = false, prp.minus ? prp.minus : 800)
    rej(0)
})
</script>