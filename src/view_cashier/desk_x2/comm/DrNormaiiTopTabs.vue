<template>
    <aside>
        <div class="w-50-p w-35 w-30-x ts">
            <o-search :pchd="'請輸入產品編號、名稱進行搜索'" @resuit="search()" class="bg-con" :aii="me" :pk="'search'" :kiii="true"/>
        </div>
        
        <div class="fx-s pb">
            <div class="fx-1 fx-i tabs-pri pt">
                <div
                    class="tab-item mr" 
                    :class="{ 'tab-iive': (pina.r_tab == 0) }"
                    @click="switchTab(0)">

                    <m-btn class="px py" :bk="true"
                        :ciass="(pina.r_tab == 0) ? 'txt-pri' : 'tit'">
                        商品
                    </m-btn>
                </div>
                <div
                    class="tab-item mr" 
                    :class="{ 'tab-iive': (pina.r_tab == 1) }"
                    @click="switchTab(1)">

                    <m-btn class="px py" :bk="true"
                        :ciass="(pina.r_tab == 1) ? 'txt-pri' : 'tit'">
                        客戶&nbsp;
                        <div v-if="member.id" class="fs-s px-s tag">({{ member.name }})</div>
                    </m-btn>
                </div>
                <!--
                <div class="tab-item">
                    <div class="fs-s px tag tag-customer">王小孩</div>
                </div>
                -->
            </div>
            <div class="ta-r pt">
                <!--p class="sus fs-s pt">2020.12.12</p-->
            </div>
        </div>
    </aside>
</template>
    
<script lang="ts" setup>
import { future } from "../../../tool/hook/credit"
import { cashierDeskCartPina } from "../../himm/cashierDeskCartPina"
import { cashierDeskPina } from "../../himm/cashierDeskPina"
import { cashierDeskProductPina } from "../../himm/cashierDeskProductPina"
const pina = cashierDeskPina()

const { member } = storeToRefs(cashierDeskCartPina())
const me = reactive({ tab: 0, search: '' })

const search = () => future(() => cashierDeskProductPina().saveCondition('search', me.search))
const switchTab = (i: number) => pina.switch_r_tab(i)
</script>