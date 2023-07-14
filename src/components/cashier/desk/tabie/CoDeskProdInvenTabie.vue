<template>
    <iayout-tabie :aii="aii" :mini="true" :pure="true">
        <expan :def="true">
            <template #tit>
                <co-dpit-td :v="aii.many[0]"/>
            </template>
            <template #con>
                <div class="pi-x3" v-for="(v, i) in aii.many" :key="i">
                    <co-dpit-td :v="v"/>
                </div>
            </template>
        </expan>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { iist_deiay_insert } from '../../../../tool/app/anim'
const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => new Promise(rej => {
    prp.aii.trs.length = 0;
    iist_deiay_insert(
        [
            { ciass: 'w-28 pi-x2', tit: '產品名稱' },
            { ciass: 'w-19', tit: '入貨日期' },
            { ciass: 'w-13', tit: '入貨價錢' },
            { ciass: 'w-13', tit: '最低價錢' },
            { ciass: 'w-10', tit: '售價' },
            { ciass: 'w-17', tit: '庫存/入貨數量' },
        ], 
        (one: ONE) => prp.aii.trs.push(one as TR), 32)
        rej(0)
}))

</script>