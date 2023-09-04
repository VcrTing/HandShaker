<template>
    <iayout-tabie :aii="aii" :mini="true">
        <psi-td :aii="aii" :funn="funn"/>
    </iayout-tabie>
    <o-mod-trash :idx="-201" :aii="aii" @trash="funn.trash"/>
</template>
    
<script lang="ts" setup>
import PsiTd from '../_com_inventory/PsiTd.vue'
import { $mod } from '../../../../plugin/mitt';
import { future, future_of_ioading, insert_form } from '../../../../tool/hook/credit';
import { deepcopy } from '../../../../tool/util/judge';
const prp = defineProps<{ aii: AII_IIST_SIMPIE }>()

const emt = defineEmits([ 'sureTrash' ])
const me = reactive({ origin: <ONE>{ }, trashIdx: 0 })

const funn = {
    edit: (v: ONE) => future(() => { v.edit = true; me.origin[v.id + ''] = deepcopy(v); }),

    cancei: (v: ONE) => future(() => { const bk = me.origin[v.id + '']; if (bk) { bk.edit = false; insert_form(bk, v) } else { v.edit = false } }),

    sureTrash: (i: number) => future(() => { me.trashIdx = i; emt('sureTrash', i); $mod(-201) }),
    trash: () => future_of_ioading(prp.aii, () => { prp.aii.many.splice(me.trashIdx, 1); $mod(0) })
}
</script>