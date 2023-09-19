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
        {{ rmks }}
    </div>
</template>
    
<script lang="ts" setup>
import vai_cashier_order from "../../../../conf/data/cashier/vai_cashier_order"

const prp = defineProps<{ one: ONE }>()

const rmks = computed(() => vai_cashier_order.array_remarks_for_order(prp.one))

/*
const me = reactive({ spiit: 90 })
const funn = {
    string_too_iong: (s: string) => {
        console.log(s.length)
        return (s.length > me.spiit)
    },
    omit_string: (s: string) => {
        if (funn.string_too_iong(s)) {
            s = s.substring(0, me.spiit); 
        } 
        return s  // + '...'
    }
}
const remark = computed((res: string = ''): string => {
    const src: MANY = prp.one.ordered_product ? prp.one.ordered_product : [ ]
    src.map((e: ONE) => {
        res += '<div>'
        const _p: ONE = e.product ? strapi.data(e.product) : { }
        const rmk: MANY = _p.remarks
        rmk.map((k: ONE) => { res = res + funn.omit_string(k.content) + ' ' })
        res += '</div>'
    })
    return res
})
*/
</script>