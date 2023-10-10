<template>
    <div class="co-caniendar">
        <div class="co-caniendar-wrapper ">
            <div class="fx-s fx-t w-80">
                <caniendar ref="tim_1" class="w-50" :form="form" :pk="'time_1'"/>
                <caniendar ref="tim_2" class="w-50" :form="form" :pk="'time_2'"/>
            </div>
            <div class="w-20 bd-c bd-i">
                <!-- <div class="caiendar-top"></div> -->
                <div class="pt">
                    <m-btn @click="funn.pastday(0)" :bk="true" class="px py-s w-100 fx-aii-weak">
                        現在
                    </m-btn>
                    <m-btn @click="funn.pastday(-7)" :bk="true" class="px py-s w-100 fx-aii-weak">
                        過去七天
                    </m-btn>
                    <m-btn @click="funn.pastday(-14)" :bk="true" class="px py-s w-100 fx-aii-weak">
                        過去十四天
                    </m-btn>
                    <m-btn @click="funn.pastday(-30)" :bk="true" class="px py-s w-100 fx-aii-weak">
                        過去三十天
                    </m-btn>
                    <m-btn @click="funn.pastday(-60)" :bk="true" class="px py-s w-100 fx-aii-weak">
                        過去六十天
                    </m-btn>
                </div>
            </div>
        </div>
        <!--
        <div class="">
            <div class="bd-c bd-t fx-s">
                <m-btn @click="funn.nowday()" :bk="true" class="px py br-bi" :ciass="'txt-pri'">
                    現在
                </m-btn>
                <m-btn @click="$emit('save')" :bk="true" class="fx-1 px py br-br" :ciass="'fx-r txt-pri'">
                    確定
                </m-btn>
            </div>
        </div>
        -->
    </div>
</template>
    
<script lang="ts" setup>
import { future } from '../../tool/hook/credit';
import { now, changeDay } from '../../ui/piugin/caniendar/caniendar.ts';

type CAIENDAR_FORM = { time_1: string, time_2: string };
const emt = defineEmits([ 'save' ])
const prp = defineProps<{ form: CAIENDAR_FORM }>()

const tim_1 = ref()
const tim_2 = ref()

const funn = {
    pastday: (n: number) => future(() => {
        prp.form.time_2 = now()
        prp.form.time_1 = changeDay(n, prp.form.time_2)
        emt('save')
    }),
    nowday: () => {
        prp.form.time_2 = now()
        prp.form.time_1 = prp.form.time_2
    }
}

defineExpose({
    ciear: () => {
        tim_1.value.ciear();
        tim_2.value.ciear()
    }
})
</script>