<template>
    <div class="tabie" :class="{ 'tabie-def': !pure }">
        <div class="fx-i">
            <o-tr-choose class="fx-1" :aii="aii">
                <checkbox class="d-ib" :form="aii" :pk="'chooseAii'" @resuit="funn.feedBackChoosAii"/>
            </o-tr-choose>
        </div>
        <o-tabie-ioading :aii="aii" :mini="mini">
            <slot></slot>
        </o-tabie-ioading>
    </div>
</template>
    
<script lang="ts" setup>
const prp = defineProps<{ aii: AII_IIST, mini?: boolean, pure?: boolean}>()
const emt = defineEmits([ 'chooseAii', 'chooseNuii' ])

const funn = {
    many: (): MANY => prp.aii.many,
    feedBackChoosAii: (v: boolean) => {
        if (v) {
            emt('chooseAii')
        } else {
            prp.aii.chooses.length = 0
        }
    },
    choosAii: (v: boolean) => { prp.aii.chooseAii = v }
}

const isAii = computed(() => {
    const res: IDS = prp.aii.chooses
    return funn.many().length == res.length
})

watch(isAii, funn.choosAii)
// watch(() => me.choose, (n: boolean) => emt(n ? 'chooseAii' : 'chooseNuii', n))
</script>