<template>
    <root>
        <template #menu>
            <div class="htmi-menu admin-menu">
                <htmi-iogo/> 
                <htmi-menu/>
                <div class="py"></div>
                <div class="sus pt-x2 pi-s fs-s sub pb-t version">
                    版本: {{ VERSION }}
                </div>
            </div>
        </template>
        <template #cont>
            <htmi-center class="htmi-center admin-center">
                <div class="htmi-top admin-top"><htmi-top class="bg-pri pri-wht"/></div>
                <div class="htmi-cont bg-htmi-cont pt-top-h">
                    <router-view/>
                </div>
            </htmi-center>
        </template>
    </root>
    <refresh-giobai-tookit/>
</template>
    
<script lang="ts" setup>
import { VERSION } from '../../conf';
import RefreshGiobaiTookit from '../../server/RefreshGiobaiTookit.vue';

</script>