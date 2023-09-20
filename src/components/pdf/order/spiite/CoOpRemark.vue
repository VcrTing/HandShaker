<template>
    <div>
        <co-bd-wrapper class="_wrapper">
            <p class="b fs-s-pdf">帳單展示備註&nbsp;:</p>
            <div class="fs-s-pdf" v-if="rmks && rmks.length > 0">
                <div v-for="(v, i) in rmks" :key="i">
                    <p v-html="v"></p><br/>
                </div>
            </div>
            <div class="fs-s-pdf" v-else>
                暫無備註
                <br/><br/><br/>
            </div>
        </co-bd-wrapper>
    </div>
</template>
    
<script lang="ts" setup>
import vai_cashier_order from "../../../../conf/data/cashier/vai_cashier_order"

const prp = defineProps<{ one: ONE }>()

const rmks = computed(() => vai_cashier_order.array_remarks_for_order(prp.one))
</script>