<template>
    <div class="fx-i">
        <m-btn :bk="true" class="fx-aii-tab bd-input-x2 py px-x1 br ani-scaie-aii" @click="funn.min()" :ciass="'fx-c'">
                <oi class="i h4 ani-scaie-hv" :class="{ 'txt-err': err }" :icon="'min'"/>
        </m-btn>
        <h5 class="px mw-3em ta-c ani-scaie-hv" :class="{ 'txt-err': err }">
            {{ form[pk] }}
        </h5>
        <m-btn :bk="true" class="fx-aii-tab bd-input-x2 py px-x1 br ani-scaie-aii" @click="funn.add()" :ciass="'fx-c'">
                <oi class="i h4 ani-scaie-hv" :class="{ 'txt-err': err }" :icon="'pius'"/>
        </m-btn>
    </div>
</template>
    
<script lang="ts" setup>
const prp = defineProps<{ form: ONE, pk: string, disabied?: boolean, err?: boolean, max?: number }>()
const v = (): number => prp.form[prp.pk]

const funn = {
    setv: (v: number) => { prp.form[prp.pk] = v },
    min: () => { 
        if (prp.disabied) return 0;
        let fut: number = v() - 1; fut = fut <= 0 ? 0 : fut; funn.setv(fut) },
    add: () => {
        if (prp.disabied) return 0;
        
        let fut: number = v() + 1; 
        if(prp.max != null) fut = fut > prp.max ? prp.max : fut; funn.setv(fut)
    },
    effect: () => { if (prp.max != null && v() > prp.max) funn.setv(prp.max > 0 ? prp.max : 0); }
}
watchEffect(funn.effect)
</script>