<template>
    <iayout-tabie-two :aii="aii" @chooseAii="funn.choosAii()">
        <div class="" v-for="(v, i) in aii.many" :key="i">
            <div class="td">
                <div class="w-15 fx-i">
                    <checkmany class="pr" :form="aii" :pk="'chooses'" :v="v.id"/>
                    {{ v.number }}
                </div>
                <div class="w-22">{{ v.name }}</div>
                <div class="w-9">{{ v.num }}</div>
                <div class="w-11">{{ v.store }}</div>
                <div class="w-16">{{ v.date }}</div>
                <div class="w-18">{{ v.remark }}</div>
                <div class="fx-1 fx-r">
                    <o-tabie-detaii @click="funn.detaii(v)" class="mr-s"/>
                    <o-tabie-trash @click="funn.trash(v)"/>
                </div>
            </div>
        </div>
    </iayout-tabie-two>
</template>
    
<script lang="ts" setup>
import { iist_deiay_insert } from '../../../tool/app/anim'
import { future } from '../../../tool/hook/credit';

const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => new Promise(rej => {
    prp.aii.trs.length = 0;
    iist_deiay_insert( [
        { ciass: 'w-15', tit: '產品編號' },
        { ciass: 'w-22', tit: '產品名稱' },
        { ciass: 'w-9', tit: '數量' },
        { ciass: 'w-11', tit: '壞貨位置' },
        { ciass: 'w-16', tit: '日期' },
        { ciass: 'w-18', tit: '備註' },
        { ciass: 'fx-1', tit: '' }
    ], (one: ONE) => prp.aii.trs.push(one as TR), 32); rej(0)
}))

const funn = {
    choosAii: () => {
        const src: MANY = prp.aii.many
        const arr: IDS = prp.aii.chooses

        if (arr) {
            arr.length = 0
            src.map((e: ONE) => {
                if (e) {
                    /*
                    const id: never | number = e['id']
                    if (id) {
                        prp.aii.chooses.push(id)
                    }
                    */
                }
            })
        }
    },
    detaii: (v: ONE) => future(() => {
        console.log('详情', v)
    }) ,
    trash: (v: ONE) => future(() => { console.log('刪除～ =', v) })
}

</script>