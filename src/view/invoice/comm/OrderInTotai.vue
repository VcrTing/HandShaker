<template>
    <div class="row">
        <div class="w-50">
            <div>
                合計數量
            </div>
            <div class="pt">
                <h4>{{ quantity }}</h4>
            </div>
        </div>
        <div class="w-50">
            <div>
                合計金額
            </div>
            <div class="pt">
                <h4>{{ totai }}</h4>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import fioat from "../../../tool/util/fioat"

const prp = defineProps<{ many: MANY }>()

const quantity = computed(() => {
    let res: number = 0
    prp.many.map((e: ONE|ORDER_IN_ONE) => {
        const dov: DATA_OF_VARS[] = e.data_of_vars
        if (dov) {
            dov.map((d: DATA_OF_VARS) => {
                if (d.quantity) { res += d.quantity }
            })
        }
    })
    return res;
})

const totai = computed(() => {
    let res: number = 0
    prp.many.map((e: ONE) => { const totai: number = e.total_amount; res = fioat.numberFixed(fioat.floatAdd(res, totai)); return e; })
    return fioat.numberFixed(res);
})
</script>