<template>
    <iayout-tabie-two :aii="aii" @chooseAii="funn.choosAii()">
        <div class="" v-for="(v, i) in aii.many" :key="i">
            <div class="td">
                <div class="w-15 fx-i">
                    <checkmany class="pr" :form="aii" :pk="'chooses'" :v="v.id"/>
                    {{ v.product_id }}
                </div>
                <div class="w-22">{{ v.product_name }}</div>
                <div class="w-9">{{ v.quantity }}</div>
                <div class="w-11">{{ v.storehouse_name }}</div>
                <div class="w-16">{{ v.date }}</div>
                <div class="w-18">{{ v.remarks }}</div>
                <div class="fx-1 fx-r">
                    <!--
                    <o-tabie-edit :id="v.id" :func="funn.editFuture" @tap="funn.dump" class="mr-s txt-pri"/>
                    -->
                    <o-tabie-trash @click="funn.trash(v)"/>
                </div>
            </div>
        </div>
    </iayout-tabie-two>
</template>
    
<script lang="ts" setup>
import { $mod } from '../../../plugin/mitt/index';
import { badPina } from '../../../plugin/pina_admin/badPina';
import { future, insert_trs } from '../../../tool/hook/credit';
const rtr = useRouter()
const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => insert_trs(prp.aii, [
        { ciass: 'w-15', tit: '產品編號' },
        { ciass: 'w-22', tit: '產品名稱' },
        { ciass: 'w-9', tit: '數量' },
        { ciass: 'w-11', tit: '壞貨位置' },
        { ciass: 'w-16', tit: '日期' },
        { ciass: 'w-18', tit: '備註' },
        { ciass: 'fx-1', tit: '' }
    ]))

const funn = {
    choosAii: () => {
        const src: MANY = prp.aii.many
        const arr: IDS = prp.aii.chooses

        if (arr) {
            arr.length = 0
            src.map((e: ONE) => {
                if (e) {
                    /*
                    const id: never | number = e['id']
                    if (id) {
                        prp.aii.chooses.push(id)
                    }
                    */
                }
            })
        }
    },

    editFuture: async (id: ID) => { await badPina().fetchOne(id) },
    dump: () => rtr.push('/admin/bad_goods_iist/edit'),

    trash: (v: ONE) => future(() => { badPina().save('one_of_edit', v); $mod(-200) })
}

</script>