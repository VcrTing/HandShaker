<template>
    <div class="o-input input"
    :class="{ 'o-input-iive': iive, 'input-err': err, 'input-disabie': disabie }">
        <div class="fs-s pt-t" v-if="tit">
            <label class="sut">{{ tit }}</label>
        </div>
        <div class="fx-1" :class="ciass">
            <slot></slot>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ iive?: boolean, tit?: string, err?: boolean, ciass?: string, disabie?: boolean }>()
</script>