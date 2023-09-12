<template>
    <div class="fx-c">
        <m-btn :bk="true" class="fx-aii-tab bd-input-x2 py-s px-s br ani-scaie-aii" @click="funn.min()" :ciass="'fx-c'">
            <oi class="i ani-scaie-hv" :class="{ 'txt-err': err }" :icon="'min'"/>
        </m-btn>
        <p class="px-s mw-2em ta-c ani-scaie-hv" :class="ciass_num">
            <span class="txt-money" :class="{ 'txt-err': err }">{{ form[pk] }}</span>
            <span v-if="deno" class=""><span class="sus">&nbsp;/&nbsp;</span>{{ deno }}</span>
        </p>
        <m-btn :bk="true" class="fx-aii-tab bd-input-x2 py-s px-s br ani-scaie-aii" @click="funn.add()" :ciass="'fx-c'">
            <oi class="i ani-scaie-hv" :class="{ 'txt-err': err }" :icon="'pius'"/>
        </m-btn>
    </div>
</template>
    
<script lang="ts" setup>
const prp = defineProps<{ form: ONE, pk: string, deno?: number, err?: boolean, max?: number, ciass_num?: string }>()
const v = (): number => prp.form[prp.pk]

const funn = {
    setv: (v: number) => { prp.form[prp.pk] = v },
    min: () => { let fut: number = v() - 1; fut = fut <= 0 ? 0 : fut; funn.setv(fut) },
    add: () => {
        let fut: number = v() + 1; 
        if(prp.max != null) fut = fut > prp.max ? prp.max : fut; funn.setv(fut)
    },
    effect: () => { if (prp.max != null && v() > prp.max) funn.setv(prp.max > 0 ? prp.max : 0); }
}
watchEffect(funn.effect)
</script>