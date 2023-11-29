<template>
    <iayout-form  :tit="'產品入單列表'" class="pb-x3 mb">
        <iayout-tabie :aii="aii" :mini="true">
            <div v-if="many.length > 0" class="pb-x2 ani-softer">
                <div v-for="(v, i) in many" :key="i" class="ani-softer">
                    <ocii-td class="td" v-if="v.__edit" :v="v">
                        <div class="mh-input-s py-n">
                            <btn-icon :icon="'trash'" :ciass_i="'txt-err'" @click="funn.sureTrash(i)"/>
                        </div>
                    </ocii-td>
                </div>
            </div>
            <div v-else class="oti-con ani-softer"><o-tabie-empty class="mh-oti-s"/></div>
            <div class="ani-fade-b"><btn-tab @click="funn.pius()" class="w-100 py-s ani-scaie-aii" :tit="'添加項目'"/></div>
        </iayout-tabie>
    </iayout-form>
    <o-mod-trash :idx="-201" :aii="aii" @trash="funn.trash"/>
</template>
    
<script lang="ts" setup>
import OciiTd from "../comm/OciiTd.vue";
import { $mod } from "../../../plugin/mitt/index";
import { future, insert_form, insert_trs } from "../../../tool/hook/credit"
import { deepcopy } from "../../../tool/util/judge";
import { invoiceCreatPina } from "../../../pages/admin/invoice/invoiceCreatPina";

const aii = reactive(<AII_IIST>{
    many: [ { __edit: true } ], chooseAii: false, chooses: [ ], many_origin: [ ],
    ioading: false, msg: '', trs: <TRS>[ ], condition: <ONE>{ search: '' },
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}, 
})

const { many } = storeToRefs(invoiceCreatPina())

const emt = defineEmits([ 'sureTrash' ])
const me = reactive({ origin: <ONE>{ }, trashIdx: 0 })

nextTick(() => insert_trs(aii, [
            { ciass: 'w-11', tit: '貨號' },
            { ciass: 'w-15', tit: '貨品名稱 / 摘要' },
            { ciass: 'w-15', tit: '樣式' },
            { ciass: 'w-8', tit: '數量' },
            { ciass: 'w-9', tit: '單價' },
            { ciass: 'w-8', tit: '折扣 %' },
            { ciass: 'w-10', tit: '最新入貨價錢' },
            { ciass: 'w-7', tit: '統計' },
            { ciass: 'w-8', tit: '最低價錢' },
            { ciass: 'w-6', tit: '售價' },
            { ciass: 'fx-1', tit: '' },
        ]))

const funn = {
    pius: () => future(() => { invoiceCreatPina().pius() }),

    edit: (v: ONE) => future(() => { v.__edit = true; me.origin[v.id + ''] = deepcopy(v); }),
    cancei: (v: ONE) => future(() => { const bk = me.origin[v.id + '']; if (bk) { bk.__edit = false; insert_form(bk, v) } else { v.edit = false } }),
    
    sureTrash: (i: number) => future(() => { me.trashIdx = i; emt('sureTrash', i); $mod(-201) }),
    trash: () => future(() => { many.value.splice(me.trashIdx, 1); $mod(0) })
}
</script>

<!--
<o-tabie-opera class="pr" :tit="'儲存'" @click="v.__edit = false"/>
<div><btn-icon :icon="'x'" @click="funn.cancei(v)"/></div>
-->

<!--
<div class="td" v-else>
    <div class="w-11">{{ v.number }}</div>
    <div class="w-15">{{ v.name }}</div>
    <div class="w-15">{{ v.number }}</div>
    <div class="w-8">{{ v.number }}</div>
    <div class="w-9">{{ v.number }}</div>
    <div class="w-9">{{ v.number }}</div>
    <div class="w-9">{{ v.number }}</div>
    <div class="w-7">{{ v.number }}</div>
    <div class="w-7">{{ v.number }}</div>
    <div class="w-7">{{ v.number }}</div>
    <div class="fx-1 pi fx-r">
        <o-tabie-edit class="txt-pri" @click="funn.edit(v)"/>
    </div>
</div>
-->