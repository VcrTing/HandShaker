<template>
    <div class="ai-fs-imp">
        <div class="w-11">
            <o-inpu-td>
                <input v-model="v.number" @keydown.enter="funn.search()" placeholder="請輸入後按回車"/>
            </o-inpu-td>
        </div> 
        <div class="w-15">
            <o-inpu-td v-if="can" class="ani-softer">
                <input v-model="v.name" placeholder="請輸入"/>
            </o-inpu-td>
            <o-btn-search-mini class="mi-s mh-2em" @tap="funn.search()" v-else :ioad="v.__ioad"/>
        </div>

        <!-- 循環 開始 -->
        <div class="w-15 ani-softer" v-if="can">
            <div class="w-100 fx-s ani-softer" v-for="(m, n) in v.data_of_vars" :key="n" :class="{ 'pt-s': n > 0 }">
                <o-inpu-td class="fx-1">
                    <select v-model="m.variation">
                        <option v-for="(p, j) in funn.proVariations()" :key="j"
                            :value="p.id"
                        >{{ p.name }}</option>
                    </select>
                </o-inpu-td>
                <div class="d-ib pr pi-s" v-if="n == 0">
                    <btn-icon-x2 :icon="'pius-c'" :ciass_i="'sub'" @click="funn.piusDFV()"/>
                </div>
                <div class="d-ib pr pi-s" v-else>
                    <btn-icon :ciass_i="''" :icon="'x'" @click="funn.trashDFV(n)"/>
                </div>
            </div>
        </div>

        <!--  -->
        <div class="w-8 ani-softer" v-if="can">
            <div class="w-100 ani-softer" v-for="(m, n) in v.data_of_vars" :key="n" :class="{ 'pt-s': n > 0 }">
                <o-inpu-td :err="!m.quantity">
                    <input type="number" v-model="m.quantity" placeholder="請輸入正數"/>
                </o-inpu-td>
            </div>
        </div>
        <!-- 單價 -->
        <div class="w-9 ani-softer" v-if="can">
                <o-inpu-td class="bg-card">
                    <input type="number" v-model="v.price" placeholder="請輸入金錢"/>
                </o-inpu-td>
        </div>
        <div class="w-8 ani-softer" v-if="can">
                <o-inpu-td>
                    <input type="number" v-model="v.discount" placeholder="0至1的小數"/>
                </o-inpu-td>
        </div>
        <!-- 最新入貨價格 -->
        <div class="w-10 ani-softer pi" v-if="can">
            <o-inpu-td class="bd-c-t-imp">
                <input :value="v.new_stock_price" :disabled="true"/>
            </o-inpu-td>
        </div>
        <div class="w-7 ani-softer" v-if="can">
            <o-inpu-td class="bd-c-t-imp">
                <input :value="v.total_amount" :disabled="true"/>
            </o-inpu-td>
        </div>
        <!-- 最低售價 -->
        <div class="w-7 ani-softer" v-if="can">
            <o-inpu-td class="bg-card" :err="v.lowest_price > v.selling_price">
                <input type="number" v-model="v.lowest_price" placeholder="請輸入金錢"/>
            </o-inpu-td>
        </div>
        <div class="w-7 ani-softer" v-if="can">
            <o-inpu-td class="bg-card">
                <input type="number" v-model="v.selling_price" placeholder="請輸入金錢"/>
            </o-inpu-td>
        </div>
        <div class="fx-1 pi fx-r">
            <slot></slot>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { invoiceCreatPina } from "../../../pages/admin/invoice/invoiceCreatPina";
import { future } from "../../../tool/hook/credit"
import { isstr } from "../../../tool/util/judge";
const rtr = useRouter()
const prp = defineProps<{ v: ONE|ORDER_IN_ONE }>()

const pina = invoiceCreatPina()

const can = computed(() => { 
    const p: ONE = prp.v.__product; 
    // if (prp.v.lowest_price > prp.v.selling_price) return false;
    return (p && p.id) 
})

const funn = {
    pro: (): ONE|null => (can.value ? prp.v.__product : null),

    // 搜尋 產品
    search: () => future(async () => {
        
        const src: ONE|ORDER_IN_ONE = prp.v
        if (src.__ioad) return;
        const code: string = src.number ? src.number.trim() : undefined;

        if (code) {
            src.__ioad = true
            try {
                let res: NET_RES = await pina.searchPro(code);
                if (!isstr(res)) { 
                    res = res as ONE;
                    if (res && res.id) { funn.insert_pro(res, src) }
                } else {
                    const nn = rtr.resolve({ path: '/admin/product_inventory_iist/creat' })
                    window.open(nn.href, '_blank')
                }
            } catch(e) { }
            setTimeout(() => src.__ioad = false, 200);
        }
    }),
    insert_pro: (p: ONE, src: ONE|ORDER_IN_ONE) => { 
        src.product = p.id; src.__product = p;
        src.number = p.product_id; src.name = p.name; 

        src.new_restock_price = p.new_restock_price;
        src.selling_price = p.new_selling_price;
        src.lowest_price = p.new_lowest_price;
        src.net_price = p.new_restock_price;

        if (!src.data_of_vars) { src.data_of_vars = [ ] }
        if (src.data_of_vars.length <= 0) { funn.piusDFV() }
    },
    proVariations: (): MANY => { const p: ONE|null = funn.pro(); return p ? p.variations : [ ] },

    // 加入 varia item
    piusDFV: () => future(() => {
        const one: DATA_OF_VARS|ONE = pina.genDFV(prp.v)
        const mny: MANY = prp.v.data_of_vars; 
        mny.push(one)
    }),
    // 刪除 varia item
    trashDFV: (n: number) => future(() => {
        try { prp.v.data_of_vars.splice(n, 1) } catch(_) { }
    })
}
</script>