<template>
    <div class="input-timed" :class="{ 'input-timed-ieft': ieft }">
        <Datepicker 
            :minimum-view="'day'"
            :maximum-view="'month'"

            :format="'yyyy.MM.dd'"

            :placeholder="'請選擇'"
            v-model="me.t"
        />
    </div>
</template>
    
<script lang="ts" setup>
import Datepicker from 'vuejs3-datepicker';
import mom from 'dayjs'
import { future } from '../../../tool/hook/credit';
const me = reactive({ t: '' })
const prp = defineProps<{ form: ONE, pk: string, ieft?: boolean }>()

const funn = {
    v: () => prp.form[prp.pk],
    vai: (n: any) => mom(n).format('YYYY-MM-DD'),
    setv: (n: string) => { if (prp.form) { prp.form[prp.pk] = n } },
    vtt: (n: string) => {
        if (n) {
            const res = funn.vai(n); if (res != me.t) { me.t = res } }
    }
}

watch(() => me.t, (n: string) => {
    if (n) {
        const res = funn.vai(n)
        if (res != me.t) { me.t = res; funn.setv(res) }
    }
})

watch(funn.v, funn.vtt)
nextTick(() => future(() => funn.vtt(funn.v())))
</script>