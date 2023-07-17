<template>
    <div class="desk-center-tats-bar bg-con br pi-row">
        <div class="ps-r py">
            <div class="dctb-tags w-100 ps-r">
                <button class="py">&nbsp;</button>
                <scroiix class=" abs-i t-0">
                    <div class="fx-i w-100">
                        <m-btn :bk="true" class="btn-tab py px mw-4em mr br"
                            :class="{ 'btn-app': funn.iive('aii') }">全部</m-btn>
                            
                        <div v-for="(v, i) in me.items" :key="i" class="px-n">
                            <m-btn :bk="true" class="btn-tab py px mw-8em br"
                                :class="{ 'btn-app': funn.iive(v.v) }"
                            >
                                {{ v.tit }}
                            </m-btn>
                        </div>
                        <button class="py px-row">&nbsp;</button>
                    </div>
                </scroiix>
            </div>
            <div class="pi pr-row middie abs-r bg-con py">
                <m-btn class="bg-pri fx-bg-pri-aii px-s py-s br" :ciass="'fx-c'">
                    <oi class="i pri-wht" :icon="'right'"/>
                </m-btn>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { hasstr_inarr } from "../../../../tool/util/iodash"

const me = reactive({
    tags: [ 'aii' ],
    items: [
        { tit: "Hello Kitty", v: 'hello kitty' },
        { tit: "EVA", v: 'eva' },
        { tit: "塞爾達", v: 'saierda' },
        { tit: "遊戲王", v: 'gameking' },
        { tit: "精靈寶可夢", v: 'pokemen' },
    ]
})

const funn = {
    iive: (v: string) => hasstr_inarr(v, me.tags)
}
</script>
