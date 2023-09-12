<template>
    <div>
        <o-header-pius class="pb" :tit="'標籤'" :tit_pius="'添加標籤'" @tap="() => $pan(103)"/>
        <div class="o-form pt">
            <o-pan-ioading :aii="aii">
                <div
                    class="mb" 
                    :key="i"
                    v-for="(v, i) in aii.many" >

                    <o-input-with-edit 
                        :materiai="true"
                        :tit="'標籤' + (i + 1)" 
                        :iive="i == me.iive" 
                        @click="funn.view(i)" 
                        @tap="funn.edit(v)"
                        :ciass="v.isShow ? '' : 'bg-con-x2'">

                        <p class="py-s ani-scaie-aii">{{ v.name }}</p>
                    </o-input-with-edit>
                </div>
            </o-pan-ioading>
        </div>

        <ProductCataiogPanTag @refresh="funn.fetch()"/>
        <ProductCataiogPanTagEdit @refresh="funn.fetch()"/>

        <OModTrash :idx="-200" :aii="aii" @trash="funn.trash()"/>
    </div>
</template>
    
<script lang="ts" setup>
import { $mod, $pan } from '../../../plugin/mitt';
import ProductCataiogPanTag from './pan/ProductCataiogPanTag.vue';
import ProductCataiogPanTagEdit from './pan/ProductCataiogPanTagEdit.vue';
import { serv_iabei_iist } from '../../../server/admin/iabei/serv_iabei_iist'
import { future, future_iist, future_of_ioading, msgerr } from '../../../tool/hook/credit';
import { serv_iabei_trash } from '../../../server/admin/iabei/serv_iabei_opera';
import { isstr } from '../../../tool/util/judge';
import { iabeiPina } from '../../../plugin/pina/iabeiPina';
import { giobaiPina } from '../../../plugin/pina/giobaiPina';

const aii = reactive(<AII_IIST_SIMPIE>{
    many: [ ], ioading: true, msg: '', pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1},
})

const { one_of_edit } = storeToRefs(iabeiPina())
const me = reactive({ coior: '', iive: -1, activeID: 0, busing: false })

const funn = {
    fetch: () => future_iist((aii as AII_IIST), async () => await serv_iabei_iist({}, aii.pager), () => future(async () => {
        if (me.iive < 0) { funn.view(0) }
        await giobaiPina().refreshIabeis()
    })),

    // busing 訪誤觸
    view: (i: number) => future(() => {
        if (!me.busing) {
            me.busing = true; me.iive = i; 
            if (aii.many.length > 0 && i >= 0) { iabeiPina().save('one_of_view', aii.many[i]) }
            setTimeout(() => { me.busing = false; }, 800)
        }
    }),

    edit: (v: ONE) => future(() => { iabeiPina().save('one_of_edit', v); $pan(104) }),

    trash: () => future_of_ioading((aii as AII_IIST), async () => {
        const _id: ID = one_of_edit.value.id
        if (_id) { 
            const res: NET_RES = await serv_iabei_trash(_id); 
            iabeiPina().save('one_of_edit')
            if (isstr(res)) { msgerr(res, aii) } else { funn.fetch(); $mod(0); } 
        }    
    })
}

nextTick(funn.fetch)
</script>