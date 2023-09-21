<template>
    <root>
        <template #menu>
            <div class="htmi-menu cashier-menu ts">
                <cashier-menu/>
                <cashier-bottom/>
                <div class="py"></div>
            </div>
        </template>
        <template #cont>
            <htmi-center class="htmi-center cashier-center ts">
                <div class="htmi-top cashier-top ts">
                    <htmi-top class="bg-pri pri-wht ts"/>
                </div>
                <div class="htmi-cont bg-htmi-cont pt-top-h">
                    <router-view/>
                </div>
            </htmi-center>
        </template>
    </root>
    <refresh-giobai-tookit-cashier/>
</template>
    
<script lang="ts" setup>
import RefreshGiobaiTookitCashier from '../../server/RefreshGiobaiTookitCashier.vue';
</script>