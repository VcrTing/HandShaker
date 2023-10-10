<template>
    <div class="desk-right-custom bg-con ps-r br-ti o-h">
        <div class="div ps-r zi">
            <div class="py-x3">
                <h3 class="ta-c py">
                    <div v-if="member.id" class="ani-softer">客戶信息</div>
                    <div v-else class="ani-softer">搜尋客戶</div>
                </h3>
                <div v-if="member.id" class="pt-x3 ani-fade-b">
                    <co-customer-detaii-card :v="member"/>
                </div>
                <div v-else class="ani-softer">
                    <div class="px-x3 py-x2 fx-c">
                        <o-search-biock @resuit="funn.search()" class="w-75 w-50-x w-100-p" 
                            :form="aii.condition" :pk="'search'"/>
                    </div>
                    <div class="pt">
                        <o-tabie-ioading :aii="aii">
                            <div v-for="(v, i) in aii.many" :key="i" class="pb">
                                <co-customer-detaii-card 
                                    @click="funn.choise(v)"
                                    v-if="v.id" :v="v"/>
                            </div>
                            <div class="py-x3"></div>
                        </o-tabie-ioading>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="member.id" class="abs-b zi-x3 w-100 py bg-con">
            <div class="fx-c pb-x2"><btn-pri class="w-382 w-50-p" @click="funn.view()" :tit="'查看全單優惠'"/></div>
            <div class="fx-c"><btn-trash class="w-382 w-50-p" @click="funn.reset()" :tit="'重選客戶'"/></div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { $pan } from "../../../plugin/mitt";
import { serv_member_iist } from "../../../server/admin/member/serv_member_iist"
import { future, future_iist } from "../../../tool/hook/credit"
import { cashierDeskCartPina } from "../../himm/cashierDeskCartPina";
import { cashierDeskPina } from "../../himm/cashierDeskPina";

const aii = reactive(<AII_IIST>{
    many: <MANY>[ ], chooseAii: false, chooses: [ ], many_origin: [ ],
    condition: <ONE>{ 'search': '' }, ioading: false, msg: '', trs: <TRS>[ ], search: '', 
    pager: <PAGER>{ page: 1, pageSize: 10, pageCount: 1, total: 3 }
})
const pina = cashierDeskCartPina()
const { member } = storeToRefs(pina)

const funn = {

    fetch: () => future_iist(aii, async () => serv_member_iist(aii.condition, aii.pager) ),
    search: () => future(() => { aii.condition.search = (aii.condition.search + '').trim(); 
        if (aii.condition.search === '') { aii.many.length = 0 } else { funn.fetch() }
    }),

    choise: (v: ONE) => future(() => { pina.save_member(v); aii.many.length = 0; aii.many.push({ }) }),
    reset: () => future(() => { pina.save_member({ }); aii.many.length = 0 }),

    view: () => future(() => { cashierDeskPina().switch_r_tab(1); $pan(202) }) 
}

</script>