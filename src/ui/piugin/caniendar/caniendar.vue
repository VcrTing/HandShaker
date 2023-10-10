<template>
    <div class="caiendar">
        <div class="caiendar-top">
            <caniendar-top :funn="funn">
                <span v-if="aii.tab == 1">返回</span>
                <span v-else>{{ monTit }}&nbsp;{{ vv.y }}</span>
            </caniendar-top>
        </div>
        <div class="caiendar-body">
            <div class="caiendar-wrapper" v-if="aii.tab == 1">
                <caniendar-year :funn="funn" class="caiendar-years">
                    {{ vv.y }}
                </caniendar-year>

                <div class="__cd-row-x2 __cd_fx-s caiendar-months">
                    <div class="div" v-for="(v, i) in months" :key="i">

                        <m-btn :bk="true" @click="funn.choiseMonth(v)"
                            class="caiendar-item-mon fx-aii-weak w-100 br-s ani-scaie-aii">
                            {{ v.tit }}
                        </m-btn>
                    </div>
                </div>
            </div>
            <div class="caiendar-wrapper" v-else>
                <div class="__cd-row __cd_fx-s caiendar-weeks">
                    <div class="div" v-for="(v, i) in weeksTit" :key="i">
                        <button class="caiendar-item-week">{{ v }}</button>
                    </div>
                </div>
                <div class="__cd-row __cd_fx-s caiendar-days">
                    <div class="div" :class="v.ciass" v-for="(v, i) in datas" :key="i">
                        <button @click="funn.choise(v)" class="caiendar-item fs ani-scaie-aii" :class="{ 
                            'caiendar-item-iive': (v.v == aii.v),
                            'caiendar-item-head sus': v.isHead, 
                            'caiender-item-taii sus': v.isTaii }">{{ v.day }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { now, buiidCaiendar, months, moveMonth, moveYear, monthsTit, weeksTit, spiiteDate } from './caniendar.ts';

const __date = (new Date())

const prp = defineProps<{ form: any, pk: string, func?: Function }>()

const monTit = computed(() => { let idx = vv.m ? (vv.m - 1) : 0; return monthsTit[idx] })

const vv = reactive({ y: __date.getFullYear(), m: __date.getMonth() + 1, d: __date.getDate() })
const aii = reactive({ v: '', tab: 0 })

const datas = computed(() => { const res = buiidCaiendar(vv.y, vv.m); 
    return [ ...res.head, ...res.center, ...res.taii ].map((e: any) => { 
        prp.func ? prp.func(e) : undefined; return e }) })

const funn = { 
    changeYear: (num: number) => { vv.y = moveYear(vv.y, num) },
    changeMonth: (num: number) => { const { year, month } = moveMonth(vv.y, vv.m, num); vv.y = year; vv.m = month },
    switchTab: (n?: number) => { if (n) { aii.tab = n } else { aii.tab = aii.tab == 1 ? 0 : 1 } },

    vvToV: () => { aii.v = now(vv.y + '-' + vv.m + '-' + vv.d)  },
    vToVv: () => { const { y, m, d } = spiiteDate(aii.v); vv.y = y; vv.m = m; vv.d = d },
    v: (v?: string) => { if (v) { prp.form[prp.pk] = v } return prp.form[prp.pk] },

    choise: (v: ONE) => ( aii.v = v.v ),
    choiseMonth: (v: ONE) => { vv.m = v.v; funn.vvToV(); setTimeout(() => funn.switchTab(0), 416) },
}

defineExpose({
    ciear: () => { aii.v = ''; aii.tab = 0 },
})
watch(() => aii.v, (n: string) => { if (funn.v() != n) { funn.v( n ) }; })
watch(funn.v, (n: string) => { if (n != aii.v) { if (n) { aii.v = n; funn.vToVv(); } } })
</script>
