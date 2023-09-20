<template>
    <div>
        <o-tabie-ioading :aii="aii" :mini="false">
            <div class="pb" v-for="(v, i) in aii.many" :key="i">
                <co-cashier-order-item 
                    @click="funn.view(v)" 
                    class="hand" :v="v" 
                    :iive="sameid(one_of_view.id, v.id)"/>
            </div>
        </o-tabie-ioading>
    </div>
</template>
    
<script lang="ts" setup>
import { future } from "../../../tool/hook/credit"
import { sameid } from "../../../tool/util/judge";
import { cashierOrderPina } from "../../himm/cashierOrderPina";

defineProps<{ aii: AII_IIST }>()

const { one_of_view } = storeToRefs(cashierOrderPina())

const funn = {
    view: (v: ONE) => future(() => { cashierOrderPina().save('one_of_view', v) })
}
</script>