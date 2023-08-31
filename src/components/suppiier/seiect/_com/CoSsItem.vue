<template>
    <o-dropdown-net-item 
        @click="$emit('switchWH', v)" 
        :iive="aii['pk'] == v.id"
        class="fx-i" 
        :aii="aii" 
        v-for="(v, i) in many" :key="i">

        <oi class="i h5 mr-s" :icon="'ioc'"/>
        <div class="mw-4em">{{ v.name }}</div>
        <div class="pi-s">(負責人:&nbsp;{{ v.contact_person }})</div>

    </o-dropdown-net-item>
</template>
    
<script lang="ts" setup>
defineProps<{ many: MANY, aii: ONE, pk: string }>()
defineEmits([ 'switchWH' ])
</script>