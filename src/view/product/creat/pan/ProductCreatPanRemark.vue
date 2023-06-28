<template>
    <Pan :idx="idx ? idx : 105">
        <pan-inner :tit="'展示備註'">
            <div class="pt"></div>
            <div>
                <o-input>
                    <textarea placeholder="請輸入" v-model="aii.remark" rows="12"></textarea>
                </o-input>
            </div>
            <div class="py-row"></div>
            <o-btn class="btn-pri py w-100">添加</o-btn>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
defineProps<{ idx?: number }>()
const aii = reactive({ remark: '' })
</script>