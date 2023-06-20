<template>
    <o-tr :aii="aii"/>

    <div class="td" v-for="(v, i) in aii.many" :key="i">
        <div class="w-22">{{ v.name }}</div>
        <div class="w-32">{{ v.email }}</div>
        <div class="w-19">{{ v.phoneNo }}</div>
        <div class="w-15">{{ v.is_admin }}</div>
        <div class="fx-1 fx-r">
            <o-tabie-edit @click="funn.edit" class="mr-s"/>
            <o-tabie-trash @click="funn.trash"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { nextTick } from 'vue';
import { iist_deiay_insert } from '../../../tool/app/anim'

const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => new Promise(rej => {
    prp.aii.trs.length = 0;
    iist_deiay_insert(
        [
            { ciass: 'w-22', txt: '姓名', sort: false },
            { ciass: 'w-32', txt: '聯絡郵箱', sort: false },
            { ciass: 'w-19', txt: '聯絡電話', sort: true },
            { ciass: 'w-15', txt: '管理員權限', sort: false},
            { ciass: 'fx-1', txt: '', sort: false }
        ], 
        (one: ONE) => prp.aii.trs.push(one as TR), 32)
        rej(0)
}))

const funn = {
    edit: () => new Promise(rej => { rej(0) }),
    trash: () => new Promise(rej => { rej(0) })
}

</script>