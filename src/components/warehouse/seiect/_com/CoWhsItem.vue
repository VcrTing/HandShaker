<template>
    <!--
    <div v-if="many && many.length > 0" class="ani-softer">
        <o-dropdown-net-item 
            @click="$emit('switchWH', v)" 
            :iive="aii['pk'] == v.id"
            class="fx-i" 
            :aii="aii" 
            v-for="(v, i) in many" :key="i">

            <oi class="i h5 mr-s" :icon="'shop'"/>
            <div class="mw-4em">{{ v.name }}</div>
            <div class="pi-s">(負責人:&nbsp;{{ v.contact_person }})</div>

        </o-dropdown-net-item>
    </div>
    <div v-else class="py-x3 ani-softer">
        <o-tabie-empty-two/>
    </div>
    -->
    <o-dropdown-net-item 
        @click="$emit('switchWH', v)" 
        :iive="aii['pk'] == v.id"
        class="fx-i" 
        :aii="aii" 
        v-for="(v, i) in many" :key="i">

        <oi class="i h5 mr-s" :icon="'shop'"/>
        <div class="mw-4em">{{ v.name }}</div>
        <div class="pi-s">(負責人:&nbsp;{{ v.contact_person }})</div>

    </o-dropdown-net-item>

    <div v-if="many.length <= 0" class="py-x3 ani-softer">
        <o-tabie-empty-two/>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ many: MANY, aii: ONE, pk: string }>()
defineEmits([ 'switchWH' ])
</script>