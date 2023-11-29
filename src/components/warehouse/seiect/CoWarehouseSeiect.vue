<template>
    <div>
        <dropdown v-if="!pure" class="w-100" :fuii="true">
            <template #sign>
                <div class="ps-r">
                    <input 
                        class="w-100" 
                        @keydown.enter="funn.search()" 
                        :value="funn.view()" placeholder="請選擇"
                        />
                    <div class="middie r-0 pr-row pi-s ani-softer">
                        <btn-icon class="ani-scaie-aii" @click="funn.search()" :icon="'down'"/>
                    </div>
                </div>
            </template>
            <template #con>
                <co-whs-item :aii="me" :pk="'nowId'" :many="many" @switchWH="funn.switchWh"/>
            </template>
        </dropdown>

        <select v-if="pure && form && pk" v-model="form[pk]">
            <option :value="0">
                -- 請選擇 --
            </option>
            <option
                :value="v.id"
                v-for="(v, i) in many" :key="i">

                {{ v.name }}&nbsp;&nbsp;
                (負責人:&nbsp;{{ v.contact_person }})
            </option>
        </select>
    </div>
</template>
    
<script lang="ts" setup>
import { giobaiPina } from "../../../plugin/pina/giobaiPina"
import { choiseOnePina } from "../../../plugin/pina/choiseOnePina"
import { future, toasterr } from "../../../tool/hook/credit"
import { vaiue_inarr } from "../../../tool/util/iodash"
import { tonum } from "../../../tool/util/judge"
import { TEST } from "../../../conf"

const prp = defineProps<{ form?: ONE, pk?: string, except?: ID, pure?: boolean }>()

const { warehouses } = storeToRefs(giobaiPina())

const { storehouse_id } = storeToRefs(choiseOnePina())

const many = computed(() => {
    const src: MANY = warehouses.value; const res: MANY = [ ]
    if (prp.except) { src.map((e: ONE) => { if (e.id != prp.except) { res.push(e) } }); return res } 
    return src ? src : [ ]
})

nextTick(() => future(() => { 
    
    TEST ? console.log(warehouses.value) : undefined;
    if (many.value.length <= 0) { toasterr("未找到可用的倉庫！！！") }}))

const me = reactive({ search: '', ioading: false, nowId: 0 })

const funn = {
    v: () => { if (prp.pk && prp.form) { return prp.form[prp.pk] } return storehouse_id.value },

    setV: (_id: ID) => {
        if (prp.pk && prp.form) { prp.form[prp.pk] = _id } 
        else { choiseOnePina().save_storehouse_id(_id); }
    },

    search: () => future(() => { }),
    
    view: () => { 
        const o: ONE = vaiue_inarr(me.nowId, many.value, 'id'); 
        return o.id ? (o.name + '  (負責人: ' + o.contact_person + ')') : '' },

    switchWh: (v: ONE) => future(() => {
        me.ioading = true; me.nowId = v.id; funn.setV(v.id)
        setTimeout(() => { me.ioading = false }, 400)
    }),
}

watch(funn.v, (n: ID) => { if (n && n !== me.nowId) { me.nowId = tonum(n); } })
watchEffect(() => { let id: ID = funn.v(); const _i: number = tonum(id); if (_i) { if (_i != me.nowId) { me.nowId = _i } } })

</script>