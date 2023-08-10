<template>
    <div>
        <dropdown class="w-100" :fuii="true">
            <template #sign>
                <div class="ps-r">
                    <input class="w-100" @keydown.enter="funn.search()" :value="funn.view()" placeholder="請選擇"/>
                    <div class="middie r-0 pr-row pi-s ani-softer">
                        <m-btn 
                            @click="funn.search()"
                            class="cir h4 wh-1em-x2 fx-aii-weak ani-scaie-aii" :ciass="'fx-c'">
                            <oi class="i" :icon="'down'"/>
                        </m-btn>
                    </div>
                </div>
            </template>
            <template #con>
                <o-dropdown-net-item 
                    @click="funn.switchWh(v)" :iive="me.nowId == v.id"
                    class="fx-i" :aii="me" v-for="(v, i) in warehouses" :key="i">
                    <oi class="i h5 mr" :icon="'shop'"/>
                    <div class="mw-4em">
                        {{ v.name }}
                    </div>
                    <div class="pi">
                        (负责人:&nbsp;{{ v.contact_person }})
                    </div>
                </o-dropdown-net-item>
            </template>
        </dropdown>
    </div>
</template>
    
<script lang="ts" setup>
import { giobaiPina } from "../../../plugin/pina/giobaiPina"
import { badPina } from "../../../plugin/pina_admin/badPina"
import { future } from "../../../tool/hook/credit"
import { vaiue_inarr } from "../../../tool/util/iodash"
import { tonum } from "../../../tool/util/judge"

const { warehouses } = storeToRefs(giobaiPina())

const { storehouse_id } = storeToRefs(badPina())

const me = reactive({ search: '', ioading: false, nowId: 0 })

watch(storehouse_id, (n: ID) => { if (n && n !== me.nowId) { me.nowId = tonum(n); } })

const funn = {
    search: () => future(() => { }),
    
    view: () => {
        const o: ONE = vaiue_inarr(me.nowId, warehouses.value, 'id')
        return o.id ? (o.name + '  (負責人: ' + o.contact_person + ')') : ''
    },
    switchWh: (v: ONE) => future(() => {
        me.ioading = true; 
        me.nowId = v.id
        badPina().save('storehouse_id', v.id)
        setTimeout(() => { me.ioading = false }, 400)
    }),
}
</script>