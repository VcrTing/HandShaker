<template>
    <div>
        <o-header-pius class="pb" :tit="'標籤'" :tit_pius="'添加標籤'" @tap="funn.pius()"/>
        <div class="py">
            <div class="pb-x2 ani-fade-b" v-for="(_, i) in iabeis" :key="i">

                <o-input-with-trash :tit="'標籤'" @tap="funn.trash(i)">
                    <select v-model="iabeis[i]">
                        <option v-for="(v, i) in many" :key="i" :value="v.id">{{ v.name }}</option>
                    </select>
                </o-input-with-trash>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { pageProductPina } from "../../../pages/admin/product/pageProductPina";
import { iabeiPina } from "../../../plugin/pina/iabeiPina"
import { future, toasterr } from "../../../tool/hook/credit"

defineProps<{ iabeis: ID[] }>()

const { many } = storeToRefs(iabeiPina())

const me = reactive({ coior: '', trashIdx: -1 })

const funn = {
    pius: () => future(() => {
        if (many.value.length > 0) {
            const one: ONE = many.value[0]
            one.id ? pageProductPina().pius_iabei(one.id) : undefined;
        } else { toasterr('沒有一個可用標籤，請先新增標籤。') }
    }),
    trash: (i: number) => future(() => { me.trashIdx = i; pageProductPina().trash_iabei(i) }),
    init: () => future(() => { iabeiPina().refreshMany() }),
}

nextTick(funn.init)
</script>