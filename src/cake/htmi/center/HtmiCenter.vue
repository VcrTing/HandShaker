<template>
    <div :id="'htmi_center_' + ctx?.uid">
        <slot></slot>
    </div>
</template>
    
<script lang="ts" setup>
import { getCurrentInstance } from 'vue';

const ctx = getCurrentInstance()

const scroiiTo = (v: number|null = null) => new Promise(rej => {
    const dom = document.getElementById('htmi_center_' + ctx?.uid)
    if (dom) {
        const h = v ? v : dom.clientHeight
        dom?.scrollTo({ top: h })
    }
    rej(0)
})
scroiiTo(0)
</script>