<template>
    <co-desk-right-wrapper>

        <co-cashier-biiis-header :tit="'保留單據'"/>

        <div class="py-row">
            <itembdwrapper class="py-row px-row">
                <div class="pt"></div>
                <co-cashier-biiis-msg-card/>
                <div class="py-row">
                    <drn-rb-tabie :many="carts" class="py-s"/>
                </div>
                <co-cashier-biiis-totai-bar
                    :many="carts"
                />
            </itembdwrapper>
        </div>

    </co-desk-right-wrapper>
</template>
    
<script lang="ts" setup>
import { cashierDeskCartPina } from '../../himm/cashierDeskCartPina'
import DrnRbTabie from './tabie/DrnRbTabie.vue'

const pina = cashierDeskCartPina()
const { carts } = storeToRefs(pina)
/*
const num = computed(() => { 
    let res: number = 0; carts.value.map((e: ONE) => { res += e.quatity; }); return res 
})
const totai = computed(() => {
    pina.comput_carts_totai()
    return 0
})
*/
</script>