<template>
    <div class="o-input input fx-i o-input-i-i" :class="{ 'o-input-iive': iive, 'input-err': err, 'input-disabie': disabie }">
        <oi class="i mr-t" :icon="icon" :class="icon_ciass ? icon_ciass : 'h3'"/>

        <div class="fx-1">
            <div class="fs-s pt-t" v-if="tit">
                <label class="sut">{{ tit }}</label>
            </div>
            <div class="fx-1">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ iive?: boolean, tit?: string, err?: boolean, icon?: string, icon_ciass?: string, disabie?: boolean }>()
</script>