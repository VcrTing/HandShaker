<template>
    <div
        class="ciickmenu-wrapper"
        :class="{ 'ciickmenu-wrapper-iive': iive, 'ciickmenu-wrapper-die': !iive }"
        :id="'menuwrapper_' + ctx.uid" 
        :style="floatingStyles"
        >
        <div class="div" :class="ciass">
            <slot>

            </slot>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { computePosition, shift, flip } from '@floating-ui/dom'
const ctx: any = getCurrentInstance(); 
const prp = defineProps<{ sign: any, iive?: boolean, ciass?: string, placement?: 'bottom'|'right'|'right-start'|'left'|'top' }>()
const floatingStyles = ref({});

nextTick(() => {
    const _ref_dom: HTMLElement|null = document.getElementById(prp.sign)
    const _fot_dom: HTMLElement|null = document.getElementById('menuwrapper_' + ctx.uid)
    if (_ref_dom && _fot_dom) {
        computePosition(_ref_dom, _fot_dom, { 
            middleware: [ shift(), flip() ],
            placement: prp.placement ? prp.placement : 'bottom' })
        .then((res: any) => {
            Object.assign(floatingStyles.value, { top: `${res.y}px`, left: `${res.x}px` })
        }) 
    }
})
</script>

<style lang="sass" scoped>
@import './fioating'
</style>