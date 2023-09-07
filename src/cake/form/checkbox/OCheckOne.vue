<template>
    <btn-icon v-if="funn.has()" @click="funn.tap" class="h6 ani-scaie-aii" :ciass_i="'h4'" :icon="'check-circie'"/>
    <btn-icon v-else @click="funn.tap" class="h6 __checkbox_empty ani-scaie-aii" :ciass_i="'h3'" :icon="'stop'"/>
</template>
    
<script lang="ts" setup>
import { future } from "../../../tool/hook/credit"
import { hasid_inarr } from "../../../tool/util/iodash"

const emt = defineEmits( [ 'choosAii' ] )
const prp = defineProps<{ id: ID, chooses: IDS, totai: number }>()

const funn = {
    has: () => hasid_inarr(prp.id, prp.chooses),

    tap: () => future(() => {
        if (funn.has()) {
            let idx: number = -1;
            prp.chooses.map((_id: ID, i: number) => { if (_id == prp.id) { idx = i } })
            prp.chooses.splice(idx, 1)
        } 
        else { prp.chooses.push(prp.id) }
        
        emt('choosAii', (prp.chooses.length == prp.totai))
    })
}
</script>