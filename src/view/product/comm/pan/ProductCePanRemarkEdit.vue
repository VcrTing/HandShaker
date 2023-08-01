<template>
    <Pan :idx="106">
        <pan-inner :tit="'修改展示備註'">
            <pce-pan-reamrk-form :remark="form_remark_of_edit" @save="edit()" class="pt" :edit="true">
                <btn-trash class="mb" :tit="'刪除該備註'" @click="trash()"/>
            </pce-pan-reamrk-form>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import { pageProductPina } from '../../../../pages/admin/product/pageProductPina';
import { $pan } from '../../../../plugin/mitt/index';
import { future } from '../../../../tool/hook/credit';
import PcePanReamrkForm from '../pan_form/PcePanReamrkForm.vue';

const { form_remark_of_edit } = storeToRefs(pageProductPina())

const edit = () => future(() => { $pan(0) })

const trash = () => future(() => { pageProductPina().trash_remark(); $pan(0) })
</script>