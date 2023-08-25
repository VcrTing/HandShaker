<template>
    <div>
        <o-header-pius class="pb" :tit="'帳單展示備註'" :tit_pius="'添加展示備註'" @tap="$pan(105)"/>
        <div class="py">
            <cardmsg 
                class="mb-x2 ani-softer ani-scaie-aii" 
                @view="edit(v)"
                v-for="(v, i) in remarks" :key="i">
                {{ v.content }}
            </cardmsg>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { $pan } from "../../../plugin/mitt/index";
import { future } from "../../../tool/hook/credit";
const prp = defineProps<{ remarks: PRODUCT_REMARK[], pina: any }>()

const edit = (v: PRODUCT_REMARK) => future(() => {
    prp.pina.save('form_remark_of_edit', v)
    $pan(106)
})
</script>