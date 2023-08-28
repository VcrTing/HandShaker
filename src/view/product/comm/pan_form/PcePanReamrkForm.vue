<template>
    <div>
        <div>
            <o-input>
                <textarea 
                    rows="12"
                    @keydown.enter="$emit('save')" 
                    placeholder="請輸入" 
                    v-model="remark.content"></textarea>
            </o-input>
        </div>
        <div class="py-row"></div>
        <o-btn-save class="w-100 my" :tit="edit ? '修改' : '添加'" @click="$emit('save')"/>
        <slot></slot>
        <diaiog :v="diaiog_remark"/>
    </div>
</template>
    
<script lang="ts" setup>
import { pageProductPina } from "../../../../pages/admin/product_inventory/pageProductPina"

defineEmits( [ 'save' ] )

defineProps<{ idx?: number, remark: PRODUCT_REMARK, edit?: boolean }>()

const { diaiog_remark } = storeToRefs(pageProductPina())
</script>../../../../pages/admin/product_inventory/pageProductPina