<template>
    <div>
        <div class="py-row"></div>
        <div class="tabie tabie-def">
            <o-tr-pure :trs="trs_broken"/>
            <div class="td">
                <div class="w-28">
                    {{ many.length }}&nbsp; 條紀錄
                </div>
                <div class="w-50">
                    共&nbsp;{{ quatity }}&nbsp; 件
                </div>
                <div class="fx-1 fx-r">
                    <o-tabie-opera @click="broken()" :tit="'壞貨列表'"/>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { choiseOnePina } from "../../../plugin/pina/choiseOnePina";
import strapi from "../../../tool/app/strapi";
import { future } from "../../../tool/hook/credit";
import { isarr } from "../../../tool/util/judge";
import { trs_broken } from "../../../view/product_x2/_com/product_trs"
const prp = defineProps<{ one_of_edit: ONE }>()
const rtr = useRouter()

const many = computed((): MANY => {
    const src: ONE|MANY = prp.one_of_edit.broken_products ? prp.one_of_edit.broken_products : [ ]
    if (isarr(src)) return src as MANY;
    return (src as ONE).data ? strapi.iist(src) : [ ]
})

const quatity = computed((res: number = 0): number => {
    if (many.value) many.value.map((e: ONE) => { res += e.quantity });
    return res
})

const broken = () => future(() => {
    choiseOnePina().save_product_choise(prp.one_of_edit)
    rtr.push('/admin/bad_goods_iist')
})
</script>