<template>
    <m-btn @click="() => aii[pk] = !aii[pk]" :bk="true" class="w-100 btn-weak o-checkbox-ione" :ciass="'fx-i px-input'">
        <input 
            class="hand"
            type="checkbox" 
            v-model="aii[pk]" 
            :id="'iabei_' + ctx?.uid"/>

        <div class="pi-x1">
            <label class="hand" :for="'iabei_' + ctx?.uid">

                <slot></slot>
            </label>
        </div>
    </m-btn>
</template>
    
<script lang="ts" setup>
const ctx = getCurrentInstance()
defineProps<{ aii: AII, pk: string }>()
</script>