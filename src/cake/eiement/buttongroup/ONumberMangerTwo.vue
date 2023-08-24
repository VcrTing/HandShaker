<template>
    <div class="o-number-manager-two">
        <div class="fx-c">
            <m-btn class="onmt-btn br ani-scaie-hv" @click="funn.add()" :ciass="'fx-c'">
                <oi class="i h4 pri-wht ani-scaie-hv" :icon="'pius'"/>
            </m-btn>
        </div>
        <h4 class="px ta-c py-x1 ani-scaie-hv">
            {{ form[pk] }}
        </h4>
        <div class="fx-c">
            <m-btn class="onmt-btn br ani-scaie-hv" @click="funn.min()" :ciass="'fx-c'">
                <oi class="i h4 pri-wht ani-scaie-hv" :icon="'min'"/>
            </m-btn>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
const prp = defineProps<{ form: ONE, pk: string }>()
const v = (): number => prp.form[prp.pk]
const funn = {
    setv: (v: number) => { prp.form[prp.pk] = v },
    min: () => {
        let fut: number = v() - 1
        fut = fut <= 0 ? 0 : fut; funn.setv(fut)
    },
    add: () => {
        let fut: number = v() + 1; funn.setv(fut)
    }
}
</script>