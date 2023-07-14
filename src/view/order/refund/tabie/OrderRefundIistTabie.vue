<template>
    <iayout-tabie :aii="aii" :mini="true" :pure="true">
        <div v-for="(_, i) in aii.many" :key="i" class="pb">
            <itembdwrapper>
                <div class="td fs-s">
                    <div class="w-40 fx-i fs pi-x2">
                        <div class="mw-2em pr">
                            <checkbox :form="aii" :pk="'choose'"/>
                        </div>
                        <div class="mw-3em pr">02</div>
                        <div class="fx-1">Hello Kitty MG 01</div>
                    </div>
                    <div class="w-9">0</div>
                    <div class="w-10">珍藏版</div>
                    <div class="w-10"></div>
                    <div class="w-10">200.0</div>
                    <div class="w-8">2</div>
                    <div class="w-13 fw-900 ta-r pr">400.0</div>
                </div>
            </itembdwrapper>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { nextTick } from 'vue';
import { iist_deiay_insert } from '../../../../tool/app/anim'

const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => new Promise(rej => {
    prp.aii.trs.length = 0;
    iist_deiay_insert(
        [
            { ciass: 'w-40 h5', tit: '序號/商品名稱' },
            { ciass: 'w-9 h5', tit: '壞貨' },
            { ciass: 'w-10 h5', tit: '標籤' },
            { ciass: 'w-10 h5', tit: '附加' },
            { ciass: 'w-10 h5', tit: '單價' },
            { ciass: 'w-8 h5', tit: '數量' },
            { ciass: 'w-13 h5', tit: '應退金額' },
        ], 
        (one: ONE) => prp.aii.trs.push(one as TR), 32)
        rej(0)
}))

</script>