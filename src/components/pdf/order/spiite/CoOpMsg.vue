<template>
    <div class="fx-s">
        <div class="fx-1">
            <co-bd-wrapper class="px-pdf">
                <co-op-tit-v :tit="'日期'" :v_ciass="'mw-6em ta-i'">
                    {{ vfy_time_beauty(one.order_date, true) }}
                </co-op-tit-v>
                <co-op-tit-v :tit="'訂單編號'" :v_ciass="'mw-6em ta-i'">
                    {{ one.order_id }}
                </co-op-tit-v>
                <co-op-tit-v :tit="'會員名稱'" :v_ciass="'mw-6em ta-i'">
                    {{ vai_order.member(one, '普通會員') }}
                </co-op-tit-v>
                <co-op-tit-v :tit="'收銀員'" :v_ciass="'mw-6em ta-i'">
                    {{ vai_order.cashier(one) }}
                </co-op-tit-v>
            </co-bd-wrapper>
        </div>
        <div class="w-1em"></div>
        <div class="fx-1">
            <co-bd-wrapper class="px-pdf">
                <co-op-tit-v :tit="'店鋪電話'">
                    <span v-if="shop.id">{{ shop.phone_no }}</span>
                    <span v-else>Hello Kitty 官方</span>
                </co-op-tit-v>
                <co-op-tit-v :tit="'關注/FOLLOW'">
                    <span v-if="shop.facebook">{{ shop.facebook }}</span>
                    <span v-else>Hello Kitty 官方</span>
                </co-op-tit-v>
                <co-op-tit-v :tit="'店鋪地址'" :v_ciass="'mh-2em-pdf'">
                    {{ shop.address }}
                </co-op-tit-v>
                <co-op-tit-v v-if="!shop.id">&nbsp;</co-op-tit-v>
            </co-bd-wrapper>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import vai_order from "../../../../conf/data/vaiue/vai_order"
import { vfy_time_beauty } from "../../../../tool/util/view"

const prp = defineProps<{ one: ONE }>()

const shop = computed((): ONE => {
    const sp: ONE = prp.one.order_shop ? prp.one.order_shop : { }
    return sp
})
</script>