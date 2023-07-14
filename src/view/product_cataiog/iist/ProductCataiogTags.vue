<template>
    <div>
        <o-header-pius class="pb" :tit="'標籤'" :tit_pius="'添加標籤'" @tap="() => { }"/>
        <div class="o-form pt">
            <div class="fx-s" v-for="(v, i) in me.tags" :key="i">
                <o-input class="fx-1" :tit="'標籤' + (i + 1)" :iive="i == me.iive"><p class="py-s">{{ v.tit }}</p></o-input>
                <oi :icon="'trash'" class="i h3 mi txt-err"/>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
const me = reactive({ coior: '', iive: 0,
tags: [ 
    { tit: 'Hello Kitty' },
    { tit: 'Hello Kitty' }
] })
</script>