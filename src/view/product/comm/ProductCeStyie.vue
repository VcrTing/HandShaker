<template>
    <div>
        <o-header-pius class="pb" :tit="'樣式'" :tit_pius="'添加樣式'" @tap="funn.pius()"/>
        <div class="py">
            <div class="pb-x2 ani-fade-b" v-for="(_, i) in styie" :key="i">

                <o-input-with-trash :tit="'樣式'" @tap="funn.trash(i)">
                    <select v-model="styie[i]">
                        <option v-for="(v, i) in styies" :key="i" :value="v.id">{{ v.name }}</option>
                    </select>
                </o-input-with-trash>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { pageProductPina } from "../../../pages/admin/product_inventory/pageProductPina";
import { iabeiPina } from "../../../plugin/pina/iabeiPina"
import { future, toasterr } from "../../../tool/hook/credit"

defineProps<{ styie: ID[] }>()

const { styies } = storeToRefs(iabeiPina())

const me = reactive({ coior: '', trashIdx: -1 })

const funn = {
    pius: () => future(() => {
        if (styies.value.length > 0) {
            const one: ONE = styies.value[0]
            one.id ? pageProductPina().pius_styie(one.id) : undefined;
        } else { toasterr('沒有一個可用樣式，請先新增樣式。') }
    }),
    trash: (i: number) => future(() => { me.trashIdx = i; pageProductPina().trash_styie(i) }),
}

</script>