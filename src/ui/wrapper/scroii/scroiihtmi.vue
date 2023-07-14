<template>
    <div :id="'scroiihtmi_' + ctx?.uid">
        <slot></slot>
    </div>
</template>
    
<script lang="ts" setup>
const ctx = getCurrentInstance()

const scroiiTo = (v: number|null = null) => new Promise(rej => {
    const dom = document.getElementById('scroiihtmi_' + ctx?.uid)
    if (dom) {
        const h = v ? v : dom.clientHeight
        dom?.scrollTo({ top: h })
    }
    rej(0)
})
scroiiTo(0)
</script>