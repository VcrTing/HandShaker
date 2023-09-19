<template>
    <div class="desk-center-tats-bar bg-con br pi-row">
        <div class="ps-r py">
            <div class="dctb-tags w-100 ps-r">
                <button class="py">&nbsp;</button>
                <scroiix class=" abs-i t-0">
                    <div class="fx-i w-100">
                        <m-btn :bk="true" class="btn-tab py px mw-4em mr br"
                            @click="me.tag = 0"
                            :class="{ 'btn-app': me.tag == 0 }">全部</m-btn>
                            
                        <div v-if="me.ioading" class="ani-softer fx-c pi py-s abs-r middie bg-con">
                            <o-ioad-cir :styie="'pri'"/>
                        </div>

                        <div v-for="(v, i) in iabeis" :key="i">
                            <div class="px-n" v-if="v.isShow">
                                <m-btn :bk="true" class="btn-tab py px mw-8em br"
                                    @click="me.tag = v.id"
                                    :class="{ 'btn-app': (me.tag == v.id) }"
                                >
                                    {{ v.name }}
                                </m-btn>
                            </div>
                        </div>
                    </div>
                </scroiix>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { future_of_ioading } from "../../../tool/hook/credit";
import { hasstr_inarr } from "../../../tool/util/iodash"
import { cashierDeskProductPina } from "../../himm/cashierDeskProductPina";
 
const me = reactive({ tags: [ 'aii' ], tag: 0, ioading: true, msg: '', many: [ {} ] })

const pina = cashierDeskProductPina()

const { iabeis } = storeToRefs(cashierDeskProductPina())

watch(() => me.tag, (n: ID) => {
    pina.saveCondition('label', n ? (n + '') : '');
})

const funn = {
    iive: (v: string) => hasstr_inarr(v, me.tags),

    fetch: () => future_of_ioading(me, async () => await pina.refreshIabeis()),
}

nextTick(funn.fetch)
/*
            <!--
            <button class="py pr-row pi-x2">&nbsp;</button>
            -->
            <!--
            <div class="pi pr-row middie abs-r bg-con py">
                <m-btn class="bg-pri fx-bg-pri-aii px-s py-s br" :ciass="'fx-c'">
                    <oi class="i pri-wht" :icon="'right'"/>
                </m-btn>
            </div>
            -->
*/
</script>
