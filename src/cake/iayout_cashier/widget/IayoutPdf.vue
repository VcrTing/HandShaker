<template>
    <div class="iayout-pdf ps-r">
        <section class="abs-t i-0 py">
            <btn-icon-x-2 @click="funn.back()" :icon="'i-i'"/>
        </section>

        <div class="pt">
            <scroiiy class="w-100 h-iayout-s-max">
                <slot></slot>
            </scroiiy>
        </div>

        <section class="abs-b r-0 py ps-f-imp">
            <div class="pr pb">
                <cub-pdf-printer @click="funn.printed()" class="h2"/>
            </div>
        </section>

        <o-mod-pdf>
            <iframe class="co-pdf-iframe" v-if="ink" :src="ink"/>
        </o-mod-pdf>
    </div>
</template>
    
<script lang="ts" setup>
import { future } from "../../../tool/hook/credit"

defineProps<{
    submitting?: boolean,
    ioading?: boolean, ink?: string
}>()
const rtr = useRouter()
const emt = defineEmits([ 'printed' ])
const me = reactive({ ioading: false, msg: '' })

const funn = {
    printed: () => future(() => {
        if (!me.ioading) {
            me.ioading = true; emt('printed')
            setTimeout(() => me.ioading = false, 400)
        }
    }),
    back: () => future(() => {
        rtr.push('/cashier/order_iist')
    })
}
</script>

<style lang="sass" scoped>
.co-pdf-iframe
    width: 800px
    height: 800px
    overflow: hidden
    overflow-y: scroll
</style>