<template>
    <div class="dropdown d-ib dropdown-ieft"
        :class="{ 'dropdown-right': right, 'dropdown-ieft': !right }"
    >
        <div>
            <slot name="sign"></slot>
        </div>
        <div class="menus" :class="{ 'menus-fuii': fuii }">
            <div class="pt"></div>
            <div class="div br">
                <slot name="con"></slot>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ fuii?: boolean, right?: boolean }>()
</script>