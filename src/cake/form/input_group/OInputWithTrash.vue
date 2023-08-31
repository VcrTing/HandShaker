<template>
    
    <div class="fx-s">
        <o-input class="fx-1 hand" :tit="tit" :iive="iive" :class="ciass" :disabie="disabie">
            <slot></slot>
        </o-input>
        <div v-if="!disabie" class="mi fx-c ps-r oiwt-icon ts" @click.stop="$emit('tap')">
            
            <btn-icon class="h5" :icon="icon ? icon : 'trash'" :ciass_i="'txt-err'"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineEmits([ 'tap' ])
defineProps<{ iive?: boolean, tit: string, icon?: string, ciass?: string, disabie?: boolean  }>()
</script>