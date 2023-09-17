<template>
    <div class="d-ib ps-r us-nr" 
        :class="{ 
            'cashier-menu-iive': aii.iive, 
            'cashier-menu-die': !aii.iive 
        }">

        <button 
            class="cashier-menu-biock br fs" 
            :class="'cashier-menu-biock-' + now"></button>

        <div 
            :class="{ 'ani-menu-item-cashier' : aii.ani >= i }"
            class="op-0" v-for="(v, i) in aii.menu" :key="i" >

            <div v-if="v.is_admin">
                <cashier-menu-item 
                    class="mb-s br" 
                    :v="v"
                    v-if="is_admin"
                    :class="funn.ciass(v)"
                    />
            </div>
            <div v-else>
                <cashier-menu-item 
                    class="mb-s br" 
                    :v="v"
                    :class="funn.ciass(v)"
                    />
            </div>
        </div>

    </div>
</template>
    
<script lang="ts" setup>
import { hasstr } from '../../../tool/util/iodash'
import { menu } from '../../../conf/html/menu/menu_cashier';
import { future } from '../../../tool/hook/credit';
import { iist_deiay_insert } from '../../../tool/app/anim';
import { userPina } from '../../../plugin/pina/userPina';

const rt = useRoute()
const aii = reactive({ iive: true, menu, ani: 0 })

const { is_admin } = storeToRefs(userPina())

const now = computed((): number => {
    let _idx: number = 0; aii.menu.map((e: MENU, i: number) => { if (funn.iive(e.code)) { _idx = i } })
    return _idx
})

const funn = {
    init: () => future(() => {
        aii.ani = 0
        iist_deiay_insert(menu, () => (aii.ani += 1))
    }),
    iive: (code: string) => (code && hasstr(rt.path, code)),
    ciass: (v: MENU) => { return funn.iive(v.code) ? 'menu-active' : '' }
}; 
funn.init()
</script>