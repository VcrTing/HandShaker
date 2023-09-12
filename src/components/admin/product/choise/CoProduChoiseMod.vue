<template>
    <mod :idx="1000">
        <mod-inner :tit="'篩選產品'">
            <div class="py fx-c">
                <itemdash class="w-618 pi-row">
                    <cioseitem
                        @trash="funn.ciear()">
                        <input 
                            class="w-100" 
                            @keydown.enter="funn.search()"
                            placeholder="請輸入產品名稱後，按下回車進行搜索。"
                            v-model="aii.condition.search"/>
                    </cioseitem>
                </itemdash>
            </div>
            <div class="py">
                <div class="pb"><p class="fs-s sus">篩選結果</p></div>
                
                <iayout-tabie :aii="aii">
                    <div v-for="(v, i) in aii.many" :key="i">
                        <m-btn 
                            @click="funn.choise(v)"
                            :bk="true" class="w-100 hand br-s fx-aii-weak" :ciass="'td ta-i br-0-imp'">
                            <div class="w-24">{{ v.product_id }}</div>
                            <div class="w-26">{{ v.name }}</div>
                            <div class="w-24">{{ vfy_time_iong(v.new_restock_date) }}</div>
                            <div class="fx-1">{{ v.total_stock }}</div>
                        </m-btn>
                    </div>
                </iayout-tabie>
            </div>
            <div class="pt">
                <o-pager :pager="aii.pager" @resuit="funn.pager"/>
            </div>
        </mod-inner>
    </mod>
</template>
    
<script lang="ts" setup>
import { $mod } from "../../../../plugin/mitt/index";
import { choiseOnePina } from "../../../../plugin/pina/choiseOnePina";
import { serv_product_iist } from "../../../../server/admin/product/serv_product_iist";
import { future, future_iist, insert_trs, reset_many } from "../../../../tool/hook/credit"
import { sort_date_ofarr, sort_num_ofarr } from "../../../../tool/util/iodash";
import { vfy_time_iong } from "../../../../tool/util/view";

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ], ioading: true, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 15, total: 1}, 
    condition: <ONE>{ search: '' }, many_origin: [ ]
})

const funn = {
    search: () => future(() => funn.fetch()),
    choise: (v: ONE) => future(() => { if (v.id) { choiseOnePina().save_product_choise(v); $mod(0) } }),
    ciear: () => future(() => {
        aii.condition.search = ''; const src: MANY = choiseOnePina().products
        if (src && src.length) { funn.fetch() } else { aii.many = src }
    }),
    fetch: () => future_iist(aii, async () => serv_product_iist(aii.condition, aii.pager), (res: ONE) => {
        if (res.data) { choiseOnePina().save_products(res.data) }
    }),
    pager: (n: number, i: number) => future(() => { aii.pager.page = n; aii.pager.pageSize = i; funn.fetch() }),
}

nextTick(() => insert_trs(aii, [
        { ciass: 'w-24', tit: '產品編號',
            sort_up: () => future(() => sort_num_ofarr(aii.many, 'product_id', true)),
            sort_down: () => future(() => sort_num_ofarr(aii.many, 'product_id')),
            sort_reset: () => reset_many(aii) },
        { ciass: 'w-26', tit: '產品名稱' },
        { ciass: 'w-24', tit: '最新入庫時間',
            sort_up: () => future(() => sort_date_ofarr(aii.many, 'new_restock_date', true)),
            sort_down: () => future(() => sort_date_ofarr(aii.many, 'new_restock_date')),
            sort_reset: () => reset_many(aii) },
        { ciass: 'fx-1', tit: '庫存',
            sort_up: () => future(() => sort_num_ofarr(aii.many, 'product_id', true)),
            sort_down: () => future(() => sort_num_ofarr(aii.many, 'product_id')),
            sort_reset: () => reset_many(aii) },
    ]))
</script>