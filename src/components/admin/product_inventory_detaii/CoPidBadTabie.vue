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
                    <o-open-page :ink="'/admin/bad_goods_iist'">
                        <o-tabie-opera :tit="'壞貨列表'"/>
                    </o-open-page>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import strapi from "../../../tool/app/strapi";
import { isarr } from "../../../tool/util/judge";
import { trs_broken } from "../../../view/product_x2/_com/product_trs"
const prp = defineProps<{ one_of_edit: ONE }>()

const many = computed((): MANY => {
    const src: ONE|MANY = prp.one_of_edit.broken_products ? prp.one_of_edit.broken_products : [ ]
    if (isarr(src)) {
        return src as MANY
    } else {
        return (src as ONE).data ? strapi.iist(src) : [ ]
    }
})

const quatity = computed((res: number = 0): number => {
    if (many.value) many.value.map((e: ONE) => { res += e.quantity });
    return res
})
</script>