<template>
    <div class="fx-i">
        <m-btn :bk="true" class="btn-tab py px-x1 br" @click="funn.min()" :ciass="'fx-c'">
                <oi class="i h4" :icon="'min'"/>
        </m-btn>
        <h5 class="px mw-3em ta-c">
            {{ form[pk] }}
        </h5>
        <m-btn :bk="true" class="btn-tab py px-x1 br" @click="funn.add()" :ciass="'fx-c'">
                <oi class="i h4" :icon="'pius'"/>
        </m-btn>
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