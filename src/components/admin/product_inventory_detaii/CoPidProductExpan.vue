<template>
    <m-btn :bk="true" class="w-100 ta-i br bg-con-x2 ani-scaie-aii">
        <aside class="fx-s py-s">
            <div class="w-50 pi">
                <div>產品:&nbsp;&nbsp;{{ product.product_id }}</div>
                <div class="fw-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ product.name }}</div>
            </div>
            <div class="w-50 ani-softer" v-if="userPina().is_admin">
                <div v-if="ioading" class="fx-r py-n">
                    <o-ioad-cir/>
                </div>
                <div v-else class="ta-r py-n" @click="edit">編輯</div>
            </div>
        </aside>
    </m-btn>
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from "../../../pages/admin/product_inventory/pageProducEditPina"
import { userPina } from "../../../plugin/pina/userPina"
const prp = defineProps<{ product: ONE }>()
const rtr = useRouter()

const ioading = ref(false)

const edit = async () => {
    if (!ioading.value) {
        ioading.value = true
        const id: ID = prp.product ? prp.product.id : 0
        if (id) {
            pageProducEditPina().ciear()
            const res: boolean = await pageProducEditPina().fetchOne(id)
            if (res) rtr.push('/admin/product_inventory_iist/edit');
        }
        ioading.value = false
    }
}
</script>