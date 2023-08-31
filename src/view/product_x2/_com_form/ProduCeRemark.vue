<template>
    <div>
        <o-header-pius :die="edit" class="pb" :tit="'帳單展示備註'" :tit_pius="'添加展示備註'" @tap="$pan(105)"/>
        <div class="py" v-if="!edit">
            <cardmsg 
                class="mb-x2 ani-softer ani-scaie-aii" 
                @view="editRemark(v)"
                v-for="(v, i) in remarks" :key="i">
                {{ v.content }}
            </cardmsg>
        </div>
        <div v-else class="py">
            <cardmsg :disabie="edit"
                class="mb-x2 ani-softer ani-scaie-aii" 
                v-for="(v, i) in remarks" :key="i">
                {{ v.content }}
            </cardmsg>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { $pan } from "../../../plugin/mitt/index";
import { future } from "../../../tool/hook/credit";
const prp = defineProps<{ remarks: PRODUCT_REMARK[], pina: any, edit?: boolean }>()

const editRemark = (v: PRODUCT_REMARK) => future(() => {
    prp.pina.save('form_remark_of_edit', v)
    $pan(106)
})
</script>