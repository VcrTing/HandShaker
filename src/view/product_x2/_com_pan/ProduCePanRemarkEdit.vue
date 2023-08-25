<template>
    <Pan :idx="106">
        <pan-inner :tit="'修改展示備註'">
            <pcpr-form
                :remark="form_remark_of_edit" 
                :edit="true"
                @save="edit()" 
                class="pt" 
                >
                <btn-trash 
                    class="mb" 
                    :tit="'刪除該備註'" 
                    @click="trash()"/>
            </pcpr-form>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import { $pan } from '../../../plugin/mitt/index';
import { future } from '../../../tool/hook/credit';
import PcprForm from './_form_remark/PcprForm.vue';

const prp = defineProps<{ pina: any }>()

const { form_remark_of_edit } = storeToRefs(prp.pina)

const edit = () => future(() => { $pan(0) })

const trash = () => future(() => { prp.pina.trash_remark(); $pan(0) })
</script>