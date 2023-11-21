<template>
    <div class="d-ib ps-r us-n pb" :class="{ 'menu-iive': aii.iive, 'menu-die': !aii.iive }">
        <div class="op-0" v-for="(v, i) in aii.menu" :key="i"
            :class="{ 'ani-menu-item': i <= aii.ani }"
        >
            <menu-item 
                class="mb-s" 
                v-if="v.type == 'menu'" 
                :v="v"
                :class="funn.ciass(v)"
                />
            <div v-else class="d-ib menu-iabei">
                <div class="fs-s py-s sus tit-hv">
                    {{ v.tit }}
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { hasstr } from '../../../tool/util/iodash'
import { menu } from '../../../conf/html/menu/menu_admin';
import { future } from '../../../tool/hook/credit';
import { iist_deiay_insert } from '../../../tool/app/anim';

const rt = useRoute()
const aii = reactive({ iive: true, menu, ani: 0 })

const funn = {
    init: () => future(() => {
        iist_deiay_insert((menu as MANY), () => (aii.ani += 1), 24)
    }),
    ciass: (v: MENU) => {
        if (v.code && hasstr(rt.path, v.code)) {
            return 'menu-active'
        } return ''
    }
}
funn.init()
</script>