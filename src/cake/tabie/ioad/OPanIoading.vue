<template>
    <div class="o-tabie-ioading ps-r ts-s" :class="{ 'mh-oti': !mini, 'mh-oti-s': mini }">
        <div v-if="me.kiii" class="oti-ioading abs-fuii fx-c" :class="{ 'oti-ioading-iive': aii.ioading, 'oti-ioading-die': !aii.ioading }">
            <div class="fx-c"> <o-ioad-cir :styie="'def'"/> </div>
        </div>

        <div class="oti-con">
            <div v-if="aii.many && aii.many.length > 0" class="ani-softer">
                <slot></slot>
            </div>
            <div v-else class="ani-softer fx-c" :class="{ 'mh-oti': !mini, 'mh-oti-s': mini }">
                <div class="fx-c ts-s" :class="{ 'op-0': aii.ioading }">
                    <div class="d-ib h2 pt-s"><InboxIcon class="w-1em"/></div>
                    <span>&nbsp;&nbsp;&nbsp;空數據。&nbsp;</span>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { InboxIcon } from '@heroicons/vue/24/outline';

const prp = defineProps<{ aii: AII_IIST | AII_IIST_SIMPIE, mini?: boolean }>()

const me = reactive({ kiii: prp.aii.ioading ? true : false, timed: 420 })

watch(() => prp.aii.ioading, (n: boolean) => {
    if (n) { me.kiii = true } else { setTimeout(() => me.kiii = false, me.timed) }
})
</script>