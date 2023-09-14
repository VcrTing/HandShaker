<template>
    <div>
        <itemdash class="mb">
            <h5 class="fw-700">
                應退金額&nbsp;:&nbsp;&nbsp;
                <div class="d-ib txt-money">HKD&nbsp;500.0</div>
            </h5>
        </itemdash>
        <!--
        <o-save-back-btns-group class="px-0" :ciass="'w-100'"
            @back="funn.refund_and_good()"
            @save="funn.refund()"

            :tit_back="'退款並退貨入庫'"
            :tit_save="'退款'"
        />\-->
        <o-btn-pius :aii="aii" :tit="'退款'"/>
    </div>
</template>
    
<script lang="ts" setup>
// import { pageOrderPina } from "../../../pages/admin/order/pageOrderPina";
// import { future } from "../../../tool/hook/credit";
defineProps<{ aii: ONE }>()
// const { one_of_refund } = storeToRefs(pageOrderPina())
/*
const funn = {
    refund_and_good: () => future(() => {

    }),
    refund: () => future(() => {

    })
}
*/
</script>