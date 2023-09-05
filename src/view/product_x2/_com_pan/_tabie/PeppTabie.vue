<template>
    <div class="pb-x3">
        <iayout-tabie :aii="sii" :mini="true">
            <psi-td :aii="sii" :funn="funn" :kiii_option="true"/>
        </iayout-tabie>
    </div>
</template>
    
<script lang="ts" setup>
import PsiTd from '../../../product_inventory_x2/instock/_com_inventory/PsiTd.vue'
import { pageProductInstockPina } from "../../../../pages/admin/product_inventory/pageProductInstockPina";

const sii = reactive({ msg: '', many: <MANY>[ ], trashIdx: 0, pager: <PAGER>{ }, ioading: false, trs: <TRS>[ ] })

const { inventory_and_variation_of_view } = storeToRefs( pageProductInstockPina() )

const funn = { edit: () => { }, cancei: () => { }, sureTrash: () => { },
    effect: () => {
        inventory_and_variation_of_view.value.map((e: ONE, i: number) => {
            e.idx = i; sii.many.push(e)
        })
    }
}
watchEffect(funn.effect)
</script>