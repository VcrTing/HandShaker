<template>
    <div class="fixpan-pa">
        <div class="fx-s">
            <h4 class="fx-1">{{ tit }}</h4>
            <m-btn class="btn-tab h4 br wh-1em-x2" :ciass="'fx-c'" @tap="$pan(0)">
                <oi class="i" :icon="'x'"/>
            </m-btn>
        </div>
        <div class="py" :class="ciass">
            <slot></slot>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { $pan } from '../../../plugin/mitt';

defineProps<{ tit?: string, ciass?: string }>()

</script>