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
import { iabeiPina } from "../../../plugin/pina/iabeiPina"
import { future, toasterr } from "../../../tool/hook/credit"

const prp = defineProps<{ styie: ID[], pina: any }>()

const { styies } = storeToRefs(iabeiPina())

const funn = {
    pius: () => future(() => {
        if (styies.value.length > 0) {
            const one: ONE = styies.value[0]; 
            one.id ? prp.pina.pius_styie(one.id) : undefined;
        } else { 
            toasterr('沒有一個可用標籤，請先新增標籤。') }
    }),
    trash: (i: number) => future(() => prp.pina.trash_styie(i)),
}

// nextTick(funn.init) init: () => future(() => { iabeiPina().refreshMany() }),
</script>