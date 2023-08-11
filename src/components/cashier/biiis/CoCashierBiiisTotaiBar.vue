<template>
    <div>
        <div class="fx-s">
            <div class="fx-1">
                <h3 class="fw-700">
                    <span>共3件&nbsp;</span>
                    <span class="txt-money">
                        HKD&nbsp;1190.0
                    </span>
                </h3>
            </div>
            <div class="fx-1 fx-r">
                <btn-tab class="mw-6em" :tit="'作廢'"/>
                <span class="px-s"></span>
                <btn-pri class="mw-6em" :tit="tit_save ? tit_save : '保留收據'"/>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ tit_save?: string }>()
</script>