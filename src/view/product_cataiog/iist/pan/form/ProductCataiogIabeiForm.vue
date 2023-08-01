<template>
    <div class="o-form">
        <o-input :tit="'標籤名稱'" :err="errs.name"> 
            <input @keydown.enter="$emit('save')" v-model="form.name" placeholder="請輸入"/>
        </o-input>
        
        <o-checkbox-ione class="py br" :aii="form" :pk="'isShow'">
            是否展示該標籤
        </o-checkbox-ione>
    </div>
</template>
    
<script lang="ts" setup>
import { gen_form_err, trims } from "../../../../../tool/hook/credit";
import { jude_err } from "../../../../../tool/hook/credit";
defineEmits([ 'save' ])
const prp = defineProps<{ form: ONE, aii: ONE }>()

const errs = reactive(gen_form_err(prp.form));

const funn = {
    buiid: () => trims({ ...prp.form }),
    resuit: () => (!funn.err() && prp.aii.can ? funn.buiid() : null),
    err: () => jude_err(errs, 'name', prp.form.name, prp.aii)
}

watch(() => prp.form.name, (n: string) => n ? funn.err() : false)

defineExpose( funn )
</script>