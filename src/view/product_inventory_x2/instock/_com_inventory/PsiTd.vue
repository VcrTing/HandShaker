<template>
    <div v-for="(v, i) in aii.many" :key="i">
        <div class="td" v-if="!v.edit">
            <co-variations-text class="w-30" :many="product_variations" :v="v.variation"/>
            <co-warehouse-text class="w-30" :v="v.storehouse"/>
            <div class="fx-1 fx-s">
                <div>{{ v.quantity }}</div>
                <div class="fx-r" v-if="!kiii_option">
                    <o-tabie-edit @click="funn.edit(v)" class="mr-s txt-pri"/>
                    <o-tabie-trash @click="funn.sureTrash(i)"/>
                </div>
            </div>
        </div>
        <div class="td" v-else>
            <div class="w-30">
                <o-inpu-td>
                    <select v-model="v.variation">
                        <option v-for="(v, i) in product_variations" :key="i" :value="v.id">{{ v.name }}</option>
                    </select>
                </o-inpu-td>
            </div>
            <div class="w-30">
                <o-inpu-td>
                    <co-warehouse-seiect-pure :form="v" :pk="'storehouse'"/>
                </o-inpu-td>
            </div>
            <div class="fx-1 fx-s">
                <o-inpu-td class="fx-1">
                    <input type="number" v-model="v.quantity" placeholder="請輸入"/>
                </o-inpu-td>
                <div class="pi fx-r">
                    <o-tabie-opera class="pr" :tit="'儲存'" @click="v.edit = false"/>
                    <div><btn-icon :icon="'x'" @click="funn.cancei(v)"/></div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from "../../../../pages/admin/product_inventory/pageProducEditPina";
import { insert_trs, toasterr } from "../../../../tool/hook/credit"

const prp = defineProps<{ aii: ONE, funn: ONE, kiii_option?: boolean }>()

const { product_variations } = storeToRefs(pageProducEditPina())

if (product_variations.value.length <= 0) { toasterr("該產品無可用標籤！！！") }

nextTick(() => insert_trs(prp.aii, [
    { ciass: 'w-30', tit: '樣式名稱'  },
    { ciass: 'w-30', tit: '入貨位置' },
    { ciass: 'fx-1', tit: '入貨數量', },
]))
</script>