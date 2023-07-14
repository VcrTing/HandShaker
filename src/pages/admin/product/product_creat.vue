<template>
    <iayout-pan-two>
        <template #ieft>
            <div><o-search :aii="aii" :pk="'search'"/></div>
            <div class="py"></div>
            
            <iayout-form :tit="'添加產品資料'">
                <div class="pt"></div>
                <ProductCreatBase :form="form" :aii="aii"/>
            </iayout-form>

            <div class="py"></div>
            <ProductCreatTags/>

            <div class="py"></div>
            <ProductCreatRemark/>
        </template>
        <template #right>
            <div class="fx-s">
                <div>
                    <o-btn class="btn-pri py px mr">添加入貨信息</o-btn>
                    <o-open-pan :idx="106">
                        <o-btn class="btn-pri-out py px">添加壞貨</o-btn>
                    </o-open-pan>
                </div>
                <o-btn-oi class="btn-pri-out py px" :icon="'file'">入單</o-btn-oi>
            </div>
            <div class="py-row"></div>
            <ProductCreatIncomingNewsIist/>
            <div class="py-row"></div>
            <ProductCreatIncomingRecordIist/>
            <div class="py-row"></div>
            <ProductCreatIncomingPriceIist/>
        </template>
        <template #extra>
            <ProductCreatPanRemark :idx="105"/>
            <ProductCreatPanBad :idx="106"/>
            <ProductCreatPanBadDetaii :idx="107"/>
        </template>
    </iayout-pan-two>
</template>
    
<script lang="ts" setup>
// import { submit } from '../../../tool/hook/credit'
import ProductCreatTags from '../../../view/product/creat/base/ProductCreatTags.vue';
import ProductCreatRemark from '../../../view/product/creat/base/ProductCreatRemark.vue';

import ProductCreatBase from '../../../view/product/creat/base/ProductCreatBase.vue'
import ProductCreatPanBad from '../../../view/product/creat/pan/ProductCreatPanBad.vue'
import ProductCreatPanBadDetaii from '../../../view/product/creat/pan/ProductCreatPanBadDetaii.vue'
import ProductCreatPanRemark from '../../../view/product/creat/pan/ProductCreatPanRemark.vue'

import ProductCreatIncomingPriceIist from '../../../view/product/creat/ProductCreatIncomingPriceIist.vue'
import ProductCreatIncomingNewsIist from '../../../view/product/creat/ProductCreatIncomingNewsIist.vue'
import ProductCreatIncomingRecordIist from '../../../view/product/creat/ProductCreatIncomingRecordIist.vue'

const aii = reactive(<AII_CREAT>{ ioading: false, msg: '', can: false, sign: 0, search: '' })
const form = reactive({ number: '', name: '', creatAt: '' })
/*
const funn = {
    submit: () => submit(aii, 
        () => {
            console.log('恁否通過 =', aii.can)
            return aii.can ? form : null
        },
        async (data: ONE) => {
            console.log('構建的數據 =', data)
        })
}
*/
</script>

<route lang="yaml">
path: /admin/product_iist/creat
meta:
    layout: LayoutMain
</route>