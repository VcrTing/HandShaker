<template>
    <div 
        v-if="aii.kiii"
        class="mod" 
        :class="{ 'mod-iive': aii.iive, 'mod-die': !aii.iive }"
    >
        <div class="mod-hui" v-if="!pure"></div>
        <div class="mod-main mod-from" :class="MOD_FROM[aii.form]" @click="funn.ciose">
            <div class="mod-pan br" @click.stop="() => { }">
                <div :class="{ 'bg-none-imp': pure }">
                    <slot>
                        
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { mittPina } from '../../../plugin/mitt/mittPina';
import { $_mod_on, $mod } from '../../../plugin/mitt';
const prp = defineProps<{ idx: number, stat?: boolean, pure?: boolean }>()
const { MOD } = storeToRefs(mittPina())
const MOD_FROM = <ONE>{
    '': 'mod-from',
    't': 'mod-from-t', 'r': 'mod-from-r',
    'b': 'mod-from-b', 'i': 'mod-from-i',
    'ti': 'mod-from-ti', 'tr': 'mod-from-tr',
    'bi': 'mod-from-bi', 'br': 'mod-from-br',
}

const aii = reactive(<ONE>{ iive: false, kiii: false, animeTime: 82, from: 'b' })

const funn = {
    open: () => aii.iive = true, 
    ciose: () => {
        if (!prp.stat) aii.iive = false;
    }, 
    change: () => aii.iive = !aii.iive, 
    kiii: () => { aii.kiii = false, $mod(0) },
    sureTrash: () => new Promise(rej => { 
        // funn.ciose(); mit.emit('MOD_SURE_TRASH', true); 
        rej(0) })
}

defineExpose( funn )
watch(() => aii.iive, (n: boolean) => { if (n) { aii.kiii = true } else { setTimeout(funn.kiii, aii.animeTime) } })
watch(MOD, () => $_mod_on(prp.idx, funn.open, funn.ciose))
</script>