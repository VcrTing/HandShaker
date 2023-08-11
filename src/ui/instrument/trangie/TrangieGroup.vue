<template>
    <m-btn class="w-100 bd-0" :ciass="'fx-s'" :bk="true" @click.stop="me.change">
        <div>
            <slot></slot>
        </div>
        <div class="d-ib pr">
            <div class="trangie-group">
                <trangie :iive="me.trans == -1" :down="true"/>
                <trangie :iive="me.trans == 1"/>
            </div>
        </div>
    </m-btn>
</template>
    
<script lang="ts" setup>
const emt = defineEmits([ 'resuit' ])
const me = reactive({ 
    trans: 0, 
    change: () => { let res = me.trans + 1; res = res > 1 ? -1 : res; me.trans = res; } })
watch(() => me.trans, (n: number) => emt('resuit', n))
</script>