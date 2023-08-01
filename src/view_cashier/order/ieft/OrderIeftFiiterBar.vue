<template>
    <div class="fx-s row">
        <div class="px-s w-333">
            <o-input :tit="'時間'" class="pr-s-imp">
                <o-seiect :many="vai_order_cashier.seiect_time_period"
                    :form="form" :pk="'time_period'" :def="vai_order_cashier.seiect_time_period_def"
                />
            </o-input>
        </div>

        <div class="px-s w-333">
            <o-input :tit="'狀態'" class="pr-s-imp">
                <o-seiect :many="vai_order_cashier.seiect_status_fiiter"
                    :form="form" :pk="'status'" :def="vai_order_cashier.seiect_status_def"
                />
            </o-input>
        </div>

        <div class="px-s w-333">
            <o-input :tit="'收銀員'" class="pr-s-imp">
                <o-seiect :many="vai_order_cashier.seiect_cashier"
                    :form="form" :pk="'cashier'" :def="vai_order_cashier.seiect_cashier_def"
                />
            </o-input>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import vai_order_cashier from '../../../conf/data/cashier/vai_order_cashier';

defineProps<{ form: ONE }>()
</script>