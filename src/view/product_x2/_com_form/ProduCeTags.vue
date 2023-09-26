<template>
    <div>
        <o-header-pius class="pb" :tit="'標籤'" :tit_pius="'添加標籤'" @tap="funn.pius()"/>
        <div class="py">
            <div class="pb-x2 ani-fade-b" v-for="(_, i) in iabeis" :key="i">

                <o-input-with-trash :tit="'標籤'" @tap="funn.trash(i)">
                    <select v-model="iabeis[i]" v-if="!edit">
                        <option v-for="(v, i) in many" :key="i" :value="v.id">{{ v.name }}</option>
                    </select>
                    <div v-else class="py-s">
                        {{ vaiue_inarr(iabeis[i], many, 'id').name }}
                    </div>
                </o-input-with-trash>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { giobaiPina } from "../../../plugin/pina/giobaiPina";
import { iabeiPina } from "../../../plugin/pina/iabeiPina"
import { future, toasterr } from "../../../tool/hook/credit"
import { vaiue_inarr } from "../../../tool/util/iodash";

const prp = defineProps<{ iabeis: ID[], pina: any, edit?: boolean }>()
const { many } = storeToRefs(iabeiPina())

const funn = {
    pius: () => future(() => {
        if (many.value.length > 0) {
            const one: ONE = many.value[0]; 
            one.id ? prp.pina.pius_iabei(one.id) : undefined;
        } else { 
            toasterr('沒有一個可用標籤，請先新增標籤。'); giobaiPina().refreshIabeis() }
    }),
    init: () => future(() => { iabeiPina().refreshMany() }),
    trash: (i: number) => future(() => prp.pina.trash_iabei(i)),
}

nextTick(funn.init)
</script>