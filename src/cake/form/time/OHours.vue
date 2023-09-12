<template>
    <dropdown>
        <template #sign>
            <slot></slot>
        </template>
        <template #con>
            <div class="o-hour-minus ps-r bg-con zi-x3">
                <div class="fx-s abs-t i-0 r-0 bg-con">
                    <div class="w-382 pi pb-x1 sus">時</div>
                    <div class="w-618 pi pb-x1 sus">分</div>
                </div>
                <div class="fx-s fx-t">
                    <div class="o-hours w-382 pt-s">
                        <button>0</button>
                        <div class="pi br br-i-0 fx-aii-weak ani-scaie-fcs hand" 
                            @click="funn.setv_hour(h)"
                            v-for="(h, i) in me.hours" :key="i">
                            {{ h }}
                        </div>
                    </div>
                    <div class="o-minus w-618 pt-s">
                        <button>0</button>
                        <div class="py-t pi br br-r-0 fx-aii-weak ani-scaie-fcs hand"
                            @click="funn.setv_minus(m)" 
                            v-for="(m, i) in me.minus" :key="i">
                            {{ m }}
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </dropdown>
</template>
    
<script lang="ts" setup>
import { gen_numbers } from "../../../tool/util/iodash"
const prp = defineProps<{ form: ONE, pk_hours: string, pk_minus: string }>()

const me = reactive({ hours: gen_numbers(24), minus: gen_numbers(60) })

const funn = {
    v_minus: () => (prp.form[prp.pk_minus]),
    v_hour: () => (prp.form[prp.pk_hours]),
    v: () => (funn.v_hour()+':'+funn.v_minus()),

    setv_minus: (i: number) => { prp.form[prp.pk_minus] = i },
    setv_hour: (i: number) => { prp.form[prp.pk_hours] = i }
}
</script>