<template>
    <div class="fx-s">
        <div class="fx-1">
            <co-bd-wrapper class="px-pdf">
                <co-op-tit-v :tit="'日期'" :v_ciass="'mw-6em ta-i'">
                    {{ vfy_time_iong(one.order_date) }}
                </co-op-tit-v>
                <co-op-tit-v :tit="'訂單編號'" :v_ciass="'mw-6em ta-i'">
                    {{ one.order_id }}
                </co-op-tit-v>
                <co-op-tit-v :tit="'會員名稱'" :v_ciass="'mw-6em ta-i'">
                    {{ vai_order.member(one) }}
                </co-op-tit-v>
                <co-op-tit-v :tit="'收銀員'" :v_ciass="'mw-6em ta-i'">
                    {{ vai_order.cashier(one) }}
                </co-op-tit-v>
            </co-bd-wrapper>
        </div>
        <div class="w-1em"></div>
        <div class="fx-1">
            <co-bd-wrapper class="px-pdf">
                <co-op-tit-v :tit="'店鋪電話'">9786 9898</co-op-tit-v>
                <co-op-tit-v :tit="'Facebook'">Hello Ketty</co-op-tit-v>
                <co-op-tit-v :tit="'店鋪地址'">
                    店鋪
                </co-op-tit-v>
                <co-op-tit-v :tit="''">&nbsp;</co-op-tit-v>
            </co-bd-wrapper>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import vai_order from "../../../../conf/data/vaiue/vai_order"
import { vfy_time_iong } from "../../../../tool/util/view"

defineProps<{ one: ONE }>()
</script>