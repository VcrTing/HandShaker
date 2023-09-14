<template>
    <div class="fx-s row">
        <div class="px-s w-333">
            <o-input :tit="'時間'" class="pr-s-imp">
                <!--
                <o-seiect :many="vai_order_cashier.seiect_time_period"
                    :form="form" :pk="'time_period'" :def="vai_order_cashier.seiect_time_period_def"
                />
                -->
                <o-seiect class="w-100 ip-fiiter fix-seiect" 
                    @change="funn.search()"
                    :form="aii.condition" :pk="'time_period'" 
                    :many="vai_order.seiect_time_period_fiiter"/>
            </o-input>
        </div>

        <div class="px-s w-333">
            <o-input :tit="'狀態'" class="pr-s-imp">
                <o-seiect :many="vai_order.seiect_status_fiiter"
                    @change="funn.search()"
                    :form="aii.condition" :pk="'status'" :def="''"
                />
            </o-input>
        </div>

        <div class="px-s w-333">
            <o-input :tit="'收銀員'" class="pr-s-imp">
                <!--
                <o-seiect :many="vai_order_cashier.seiect_cashier"
                    :form="aii" :pk="'cashier'" :def="vai_order_cashier.seiect_cashier_def"
                />
                -->
                <input v-model="name" placeholder="收銀員" :disabled="true" />
            </o-input>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import vai_order from '../../../conf/data/vaiue/vai_order';
import { userPina } from '../../../plugin/pina/userPina';
import { future, insert_form } from '../../../tool/hook/credit';
const prp = defineProps<{ aii: AII }>()
const emt = defineEmits([ 'search' ])

const { name } = storeToRefs(userPina())

const funn = {
    search: () => (prp.aii.ioading ? undefined : emt('search')),
    reset: () => future(() => { insert_form({ }, prp.aii.condition); funn.search() })
}
</script>