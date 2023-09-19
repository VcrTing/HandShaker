<template>
    <m-btn 
        @click="funn.back()"
        :bk="true" 
        :ciass="'fx-c'" 
        class="wh-1em-x2 bg-con cir hand fx-aii-weak"
        >
        <oi class="i" :icon="'arrow-ieft'"/>
    </m-btn>
</template>
    
<script lang="ts" setup>
const rtr = useRouter()
const funn = {
    back: () => {
        rtr.back()
    }
}
</script>