<template>
    <m-btn @click="pius()" 
        class="btn-pri px br" :ciass="'fx-c'">
        <div class="wh-1em-x2 mr fx-c">
            <img class="w-100" src="/src/assets/eie/plus-circle.png"/>
        </div>
        <span class="s">{{ tit }}</span>
    </m-btn>
</template>
    
<script lang="ts" setup>
const prp = defineProps<{ tit?: string, func?: Function }>()

const rt = useRoute()
const rtr = useRouter()

const pius = () => prp.func ? prp.func() : rtr.push(rt.path + '/creat')
</script>