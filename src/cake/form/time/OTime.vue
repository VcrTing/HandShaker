<template>
    <div class="input-timed">
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
const me = reactive({ t: '' })
const prp = defineProps<{ form: ONE, pk: string }>()

const funn = {
    v: () => prp.form[prp.pk],
    vai: (n: any) => mom(n).format('YYYY-MM-DD'),
    setv: (n: string) => { if (prp.form) { prp.form[prp.pk] = n } }
}

watch(() => me.t, (n: string) => {
    if (n) {
        const res = funn.vai(n)
        if (res != me.t) { me.t = res; funn.setv(res) }
    }
})
watch(funn.v, (n: string) => {
    if (n) {
        const res = funn.vai(n)
        if (res != me.t) { me.t = res }
    }
})
</script>