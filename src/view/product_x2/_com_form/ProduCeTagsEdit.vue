<template>
    <div>
        <o-header-pius class="pb" :tit="'標籤'" :tit_pius="'添加標籤'" @tap="funn.pius()"/>
        <div class="py">
            <div class="pb-x2 ani-fade-b" v-for="(ib, i) in labels_exist" :key="i">

                <o-input-with-trash class="ani-scaie-hv" :iive="true" :tit="'已存在的標籤'" @tap="funn.sureTrash(ib)">
                    <div class="py-s">
                        {{ vaiue_inarr(ib, many, 'id').name }}
                    </div>
                </o-input-with-trash>
            </div>

            <div class="pb-x2 ani-fade-b" v-for="(_, i) in labels" :key="i">

                <o-input-with-trash :tit="'新加入的標籤'" @tap="pina.trash_iabei(i)">
                    <select v-model="labels[i]">
                        <option v-for="(v, i) in many" :key="i" :value="v.id">{{ v.name }}</option>
                    </select>
                </o-input-with-trash>
            </div>
        </div>
        <o-mod-trash :aii="me" :idx="-202" @trash="funn.trash()"
            :msg="'此次操作系聯網操作，您確定要移除該標籤嗎？'"
        />
    </div>
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from "../../../pages/admin/product_inventory/pageProducEditPina";
import { $mod } from "../../../plugin/mitt";
import { iabeiPina } from "../../../plugin/pina/iabeiPina"
import { future, toasterr } from "../../../tool/hook/credit"
import { vaiue_inarr } from "../../../tool/util/iodash";
import { tonum } from "../../../tool/util/judge";

const prp = defineProps<{ labels_exist: IDS, labels: IDS }>()
const { many } = storeToRefs(iabeiPina())
const me = reactive({ activeId: 0, ioading: false, msg: "" })

const pina = pageProducEditPina()

const { one_of_edit } = storeToRefs(pina)

const funn = {
    pius: () => future(() => {
        if (many.value.length > 0) {
            const one: ONE = many.value[0]; 
            one.id ? pina.pius_iabei(one.id) : undefined;
        } else { 
            toasterr('沒有一個可用標籤，請先新增標籤。') }
    }),
    init: () => future(() => { iabeiPina().refreshMany() }),

    sureTrash: (_id: ID) => future(() => { $mod(-202); me.activeId = tonum(_id) }),
    trash: () => future(async () => {
        const res: boolean = await pina.tag_trash(one_of_edit.value.id, me.activeId)
        if (res) {
            prp.labels_exist.map((_i: ID, i: number) => {
                if (_i == me.activeId) { pina.trash_iabei_exist(i) }
            }); me.activeId = 0
        }
        $mod(0)
    }),
}

nextTick(funn.init)
</script>