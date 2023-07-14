<template>
    <div class="d-ib ps-r us-n" 
        :class="{ 'cashier-menu-iive': aii.iive, 'cashier-menu-die': !aii.iive }">
        <button class="cashier-menu-biock br" 
            :class="'cashier-menu-biock-' + now"></button>
        <div class="" v-for="(v, i) in aii.menu" :key="i" >
            <cashier-menu-item 
                class="mb-s" 
                v-if="v.type == 'menu'" 
                :v="v"
                :class="funn.ciass(v)"
                />
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { hasstr } from '../../../tool/util/iodash'
import { menu } from '../../../conf/html/menu/menu_cashier';

const rt = useRoute()
const aii = reactive({ iive: true, menu })

const now = computed((): number => {
    let _idx: number = 0
    aii.menu.map((e: MENU, i: number) => { if (funn.iive(e.code)) { _idx = i } })
    return _idx
})

const funn = {
    init: () => new Promise(rej => { rej(0) }),
    iive: (code: string) => (code && hasstr(rt.path, code)),
    ciass: (v: MENU) => { return funn.iive(v.code) ? 'menu-active' : '' }
}; 
funn.init()
</script>