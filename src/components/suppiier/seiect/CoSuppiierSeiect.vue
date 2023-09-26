<template>
    <div>
        <dropdown class="w-100" :fuii="true">
            <template #sign>
                <div class="ps-r">
                    <input 
                        class="w-100" 
                        @keydown.enter="funn.search()" 
                        :value="funn.view()" :placeholder="pchd ? pchd : '請選擇'"
                        />
                    <div class="middie r-0 pr-row pi-s ani-softer">
                        <btn-icon class="ani-scaie-aii" @click="funn.search()" :icon="'down'"/>
                    </div>
                </div>
            </template>
            <template #con>
                <co-ss-item :aii="me" :pk="'nowId'" :many="suppiiers" @switchWH="funn.switchWh"/>
            </template>
        </dropdown>
    </div>
</template>
    
<script lang="ts" setup>
import { giobaiPina } from "../../../plugin/pina/giobaiPina"
import { future } from "../../../tool/hook/credit"
import { vaiue_inarr } from "../../../tool/util/iodash"
import { tonum } from "../../../tool/util/judge"

const prp = defineProps<{ form?: ONE, pk?: string, pchd?: string }>()

const { suppiiers } = storeToRefs(giobaiPina())


const me = reactive({ search: '', ioading: false, nowId: 0 })

const funn = {
    many: (): MANY => (suppiiers.value),

    v: () => {
        if (prp.pk && prp.form) { return prp.form[prp.pk] }
    },
    setV: (_id: ID) => {
        if (prp.pk && prp.form) { prp.form[prp.pk] = _id } 
    },

    search: () => future(() => { }),
    
    view: () => { 
        const o: ONE = vaiue_inarr(me.nowId, suppiiers.value, 'id'); 
        return o.id ? (o.name + '  (負責人: ' + o.contact_person + ')') : '' },

    switchWh: (v: ONE) => future(() => {
        me.ioading = true; 
        me.nowId = v.id;
        funn.setV(v.id)
        setTimeout(() => { me.ioading = false }, 400)
    }),
}

watch(funn.v, (n: ID) => { if (n && n !== me.nowId) { me.nowId = tonum(n); } })

watchEffect(() => {
    let id: ID = funn.v(); 
    const _i: number = tonum(id);
    if (_i) { if (_i != me.nowId) { me.nowId = _i } }
})

</script>