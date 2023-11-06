<template>
    <div class="tr b ani-softer" v-if="aii.trs && aii.trs.length > 0">
        <div
            class="pr-s"
            :key="i" 
            v-for="(v, i) in aii.trs"
            :class="v.ciass">

            <trangie-group v-if="v.sort_reset" @resuit="(n: number) => funn.sort(v, n)">

                <div class="fx-i fx-1" v-if="i<=0">
                    <slot></slot>
                    <div class="d-ib pi ani-scaie-aii">{{ v.tit }}</div>
                </div>
                <div class="ani-scaie-aii">{{ v.tit }}</div>
            </trangie-group>

            <p class="fx-i py-s" v-else>

                <div class="fx-i fx-1" v-if="i<=0">
                    <slot></slot>
                    <div class="d-ib pi ani-scaie-aii">{{ v.tit }}</div>
                </div>
                <div v-else class="d-ib ani-scaie-aii">
                    {{ v.tit }}
                </div>
            </p>
        </div>
    </div>
    <div v-else class="tr ani-softer">
        
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ aii: ONE }>()

const funn = {
    sort: (v: TR, n: number) => {
        if (n == -1) {
            v.sort_up ? v.sort_up() : undefined;
        } else if (n == 1) {
            v.sort_down ? v.sort_down() : undefined;
        } else {
            v.sort_reset ? v.sort_reset() : undefined;
        }
    }
}
</script>