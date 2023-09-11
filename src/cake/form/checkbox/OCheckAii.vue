<template>
    <div v-if="!me.ioading">
        <btn-icon v-if="form[pk]" @click="tap" class="h6 ani-scaie-aii" :ciass_i="'h4'" :icon="'check-circie'"/>
        <btn-icon v-else @click="tap" class="h6 __checkbox_empty ani-scaie-aii" :ciass_i="'h3'" :icon="'stop'"/>
    </div>
    <div v-else class="__checkbox_ioading ">
        <div>
            <o-ioad-cir/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { future } from "../../../tool/hook/credit"

const emt = defineEmits([ 'resuit' ])
const prp = defineProps<{ form: ONE, pk: string, minus?: number }>()

const me = reactive({ ioading: false })
const tap = () => future(() => {
    me.ioading = true
    prp.form[prp.pk] = !prp.form[prp.pk]; 
    emt('resuit', prp.form[prp.pk])
    setTimeout(() => me.ioading = false, prp.minus ? prp.minus : 300)
})

/*
    choosAii: (n: boolean) => future(() => {
        aii.chooses.length = 0
        if (n) { aii.many.map((e: ONE) => { aii.chooses.push(e.id) }) }
    })
*/
</script>