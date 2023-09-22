<template>
    <iayout-tabie :aii="aii" :mini="true">
        <div v-for="(v, i) in one_of_edit.storehouse_info" :key="i">
            <expan :def="true">
                <template #tit>
                    <div class="td">
                        <div class="w-20">{{ v.storehouse_name }}</div>
                        <div class="w-20">{{ funn.one_quantity_totai(v) }}</div>
                        <div class="fx-1 fx-s sus">{{ v.storehouse_address }}</div>
                    </div>
                </template>
                <template #con>
                    <div class="fx-i ani-fade-b">
                        <div class="w-19"></div>
                        <div class="fx-1">
                            <div class="ani-fade-b" v-for="(m, j) in funn.buiid_variation(v)" :key="j">
                                <div class="td tr-bg">
                                    <div class="w-36">樣式:&nbsp;&nbsp;{{ m.name }}</div>
                                    <div class="fx-1">庫存:&nbsp;&nbsp;{{ m.quantity }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </expan>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { trs_house } from "../../../view/product_x2/_com/product_trs"
import { insert_trs } from "../../../tool/hook/credit"

defineEmits([ 'view', 'transtock' ])

const prp = defineProps<{ aii: AII_IIST | AII_IIST_SIMPIE, one_of_edit: ONE }>()

nextTick(() => insert_trs(prp.aii, trs_house))

const funn = {
    buiid_variation: (v: ONE): MANY => { const res: MANY = (v.variation) ? v.variation : [ ]; return res },
    one_quantity_totai: (v: ONE, res: number = 0) => {
        const vs: MANY = funn.buiid_variation(v)
        vs.map((e: ONE) => { res += (e.quantity ? e.quantity : 0) }); return res
    }
}
</script>