<template>
    <div class="desk-center pt-x2">
        <o-number-manger-two :form="me" :pk="'num'"/>
        <div class="py"></div>
        <div class="o-form pt-row">
            <div v-for="(v, i) in me.btns" :key="i">
                <o-open-pan 
                    :idx="v.pan" class="w-100">
                    <m-btn :bk="true"
                        class="btn-tab sub w-100 py br"
                        v-if="!hasnum_inarr(i, me.actives)"
                        >
                        {{ v.tit }}
                    </m-btn>
                    <m-btn
                        class="bg-pri pri-wht fx-bg-pri-aii w-100 py br"
                        v-else
                    >
                        {{ v.tit }}
                    </m-btn>
                </o-open-pan>
            </div>
        </div>

        <desk-center-discount-pan/>
        <desk-center-profitrate-pan/>
    </div>
</template>
    
<script lang="ts" setup>
import { hasnum_inarr } from '../../tool/util/iodash'
import DeskCenterDiscountPan from './center_pan/DeskCenterDiscountPan.vue'
import DeskCenterProfitratePan from './center_pan/DeskCenterProfitratePan.vue'

const me = reactive({ 
    num: 0,
    actives: [ 0, 3 ],
    btns: [
        { tit: '優惠及折扣', pan: 201, func: () => { } },
        { tit: '單件取消', pan: 202, func: () => { } },
        { tit: '整單取消', pan: 203, func: () => { } },
        { tit: '保留單據', pan: 204, func: () => { } },
        { tit: '取回單據', pan: 205, func: () => { } },
        { tit: '壞貨', pan: 206, func: () => { } },
        { tit: '統計毛利率', pan: 207, func: () => { } }
    ]
})
</script>