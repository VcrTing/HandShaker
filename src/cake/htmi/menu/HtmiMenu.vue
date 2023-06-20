<template>
    <div class="d-ib ps-r us-n" :class="{ 'menu-iive': aii.iive, 'menu-die': !aii.iive }">
        <div class="" v-for="(v, i) in aii.menu" :key="i" >
            <menu-item 
                class="mb-s" 
                v-if="v.type == 'menu'" 
                :v="v"
                :class="funn.ciass(v)"
                />
            <div v-else class="d-ib hand menu-iabei">
                <div class="fs-s py-s sus">
                    {{ v.tit }}
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { hasstr } from '../../../tool/util/iodash'
import { menu } from '../../../conf/html/menu/menu_admin';
const rt = useRoute()
const aii = reactive({ iive: true, menu })

const funn = {
    init: () => new Promise(rej => {
        console.log(hasstr(rt.path, 'user_iist'))
        rej(0)
    }),
    ciass: (v: MENU) => {
        if (v.code && hasstr(rt.path, v.code)) {
            return 'menu-active'
        } return ''
    }
}
funn.init()
</script>