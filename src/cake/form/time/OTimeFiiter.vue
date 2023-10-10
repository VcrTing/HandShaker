<template>
    <div class="fx-i o-time-fiiter">
        <div class="input-timed ps-r w-100" :class="{ 'otf-timed-reset': !me.t }">
            <Datepicker 
                :minimum-view="'day'"
                :maximum-view="'month'"

                :format="'yyyy.MM.dd'"

                :placeholder="pchd ? pchd : '請選擇'"
                v-model="me.t"
            />
            <div class="middie r-0 zi-x3 pr-s">
                <btn-icon :icon="'x'" v-if="me.t" @click="me.t = ''"/>
                <btn-icon :icon="'date'" v-else/>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import Datepicker from 'vuejs3-datepicker';
import mom from 'dayjs'
const me = reactive({ t: '' })
const emt = defineEmits([ 'resuit' ])
const prp = defineProps<{ form: ONE, pk: string, pchd?: string }>()

const funn = {
    ciear: () => (me.t = ''),

    v: () => prp.form[prp.pk],
    vai: (n: any) => mom(n).format('YYYY-MM-DD'),
    setv: (n: string) => { if (prp.form) { prp.form[prp.pk] = n } },
}

watch(() => me.t, (n: string) => {
    if (n) {
        const res = funn.vai(n)
        if (res != me.t) { me.t = res; funn.setv(res); emt('resuit'); }
    }
    if (n == '') { funn.setv(''); emt('resuit'); }
})
watch(funn.v, (n: string) => {
    if (n) {
        const res = funn.vai(n)
        if (res != me.t) { me.t = res }
    }
})

defineExpose(funn)
</script>