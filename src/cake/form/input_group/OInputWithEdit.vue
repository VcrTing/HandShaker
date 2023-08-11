<template>
    
    <div class="fx-s">
        <m-btn v-if="materiai" :bk="true" class="fx-1 br">
            <o-input class="hand ta-i" :tit="tit" :iive="iive" :class="ciass">
                <slot></slot>
            </o-input>
        </m-btn>
        <o-input v-else class="hand fx-1" :tit="tit" :iive="iive" :class="ciass">
            <slot></slot>
        </o-input>

        <div class=" fx-c ps-r pi-x1 oiwt-icon ts" @click.stop="$emit('tap')">
            
            <btn-icon class="h5" :icon="'pencii'" :ciass_i="''"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineEmits([ 'tap' ])
defineProps<{ 
    materiai?: boolean,
    iive?: boolean, tit: string, icon?: string, ciass?: string }>()
</script>