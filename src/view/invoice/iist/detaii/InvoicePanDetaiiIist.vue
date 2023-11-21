<template>
    <div class="pt ani-softer">
        <IpdiTabie :aii="aii" :many="many"/>
    </div>
</template>
    
<script lang="ts" setup>
import strapi from "../../../../tool/app/strapi"
import IpdiTabie from "./tabie/IpdiTabie.vue"

const prp = defineProps<{ one: ONE }>()

const many = computed(() => {
    const src: ONE = prp.one ? prp.one : { }
    const restocks: MANY = src.restocks ? src.restocks : [ ]
    return restocks.map((e: ONE) => {
        e.product = e.product ? strapi.data(e.product) : { };
        e.variations = e.variations ? e.variations : [ ];
        e.__totai = src.total_quantity
        return e;
    })
})

const aii = reactive(<AII_IIST>{
    many: [ { } ], condition: <ONE>{ }, chooseAii: false, chooses: [ ],
    ioading: false, msg: '', trs: <TRS>[ ], many_origin: [ ],
        pager: { page: 1, pageSize: 25, pageCount: 1, total: 1 }
})
</script>