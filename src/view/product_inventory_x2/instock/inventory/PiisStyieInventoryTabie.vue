<template>
    <iayout-tabie :aii="aii" :mini="true">
        <div v-for="(v, i) in aii.many" :key="i">
            <div class="td" v-if="!v.edit">
                <div class="w-30">{{ v.variation }}</div>
                <co-warehouse-text class="w-30" :v="v.storehouse"/>
                <div class="fx-1 fx-s">
                    <div>{{ v.quantity }}</div>
                    <div class="fx-r">
                        <o-tabie-edit @click="funn.edit(v)" class="mr-s txt-pri"/>
                        <o-tabie-trash @click="funn.sureTrash(i)"/>
                    </div>
                </div>
            </div>
            <div class="td" v-else>
                <div class="w-30">
                    <o-inpu-td>
                        <input v-model="v.variation" placeholder="請輸入"/>
                    </o-inpu-td>
                </div>
                <div class="w-30">
                    <o-inpu-td>
                        <co-warehouse-seiect-pure :form="v" :pk="'storehouse'"/>
                    </o-inpu-td>
                </div>
                <div class="fx-1 fx-s">
                    <o-inpu-td class="fx-1">
                        <input v-model="v.quantity" placeholder="請輸入"/>
                    </o-inpu-td>
                    <div class="pi fx-r">
                        <o-tabie-opera class="pr" :tit="'儲存'" @click="v.edit = false"/>
                        <div><btn-icon :icon="'x'" @click="funn.cancei(v)"/></div>
                    </div>
                </div>
            </div>
        </div>
    </iayout-tabie>
    <o-mod-trash :idx="-201" :aii="aii" @trash="funn.trash"/>
</template>
    
<script lang="ts" setup>
import { $mod } from '../../../../plugin/mitt';
import { future, future_of_ioading, insert_form, insert_trs } from '../../../../tool/hook/credit';
import { deepcopy } from '../../../../tool/util/judge';
const prp = defineProps<{ aii: AII_IIST_SIMPIE }>()

nextTick(() => insert_trs(prp.aii, [
    { ciass: 'w-30', tit: '樣式名稱'  },
    { ciass: 'w-30', tit: '入貨位置' },
    { ciass: 'fx-1', tit: '入貨數量', },
]))
const emt = defineEmits([ 'sureTrash' ])
const me = reactive({ origin: <ONE>{ }, trashIdx: 0 })

const funn = {
    edit: (v: ONE) => future(() => { v.edit = true; me.origin[v.id + ''] = deepcopy(v); }),

    cancei: (v: ONE) => future(() => {
        const bk = me.origin[v.id + '']
        if (bk) {
            bk.edit = false; insert_form(bk, v)
        } else { v.edit = false }
    }),

    sureTrash: (i: number) => future(() => { me.trashIdx = i; emt('sureTrash', i); $mod(-201) }),
    trash: () => future_of_ioading(prp.aii, () => { prp.aii.many.splice(me.trashIdx, 1); $mod(0) })
}
</script>