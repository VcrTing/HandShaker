<template>
    <co-desk-right-wrapper>

        <co-cashier-biiis-header />

        <div class="py-row">
            <itembdwrapper class="py-row px-row">
                <div class="pt"></div>
                <co-cashier-biiis-msg-card/>
                <div class="py-row">
                    <drn-rb-tabie class="py-s"/>
                </div>
                <co-cashier-biiis-totai-bar/>
            </itembdwrapper>
        </div>

    </co-desk-right-wrapper>
</template>
    
<script lang="ts" setup>
import DrnRbTabie from './tabie/DrnRbTabie.vue'
</script>