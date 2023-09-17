<template>
    <div class="o-tabie-ioading ps-r ts-s zi-s" :class="{ 'mh-oti': !mini, 'mh-oti-s': mini }">

        <div v-if="me.kiii" class="oti-ioading abs-fuii fx-c" :class="{ 
                'bg-con': !kiii_bg,
                'oti-ioading-iive': aii.ioading, 'oti-ioading-die': !aii.ioading }">
            <div class="fx-c">
                <o-ioad-cir :styie="'def'"/>
                <span>&nbsp;&nbsp;&nbsp;加載中&nbsp;</span>
                <o-ioad-dot/>
            </div>
        </div>

        <div class="oti-con">
            <div v-if="aii.many && aii.many.length > 0" class="ani-fade-b">
                <slot></slot>
            </div>
            <o-tabie-empty v-else :class="{ 'mh-oti': !mini, 'mh-oti-s': mini }"/>
        </div>

    </div>
</template>
    
<script lang="ts" setup>
const prp = defineProps<{ aii: AII_IIST|AII_IIST_SIMPIE, mini?: boolean, kiii_bg?: boolean }>()

const me = reactive({ kiii: prp.aii.ioading ? true : false, timed: 420 })

watch(() => prp.aii.ioading, (n: boolean) => {
    if (n) { me.kiii = true } else {
        setTimeout(() => me.kiii = false, me.timed)
    }
})
</script>