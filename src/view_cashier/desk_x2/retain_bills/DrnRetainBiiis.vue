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

        <div class="py-x2 fx-c">
            <DcDoOrderNext class="mt w-382 w-50-p"/>
        </div>

    </co-desk-right-wrapper>
</template>
    
<script lang="ts" setup>
import { cashierDeskCartPina } from '../../himm/cashierDeskCartPina'
import DrnRbTabie from './tabie/DrnRbTabie.vue'
import DcDoOrderNext from '../../desk_x3/do/DcDoOrderNext.vue';

const pina = cashierDeskCartPina()
const { carts } = storeToRefs(pina)

</script>