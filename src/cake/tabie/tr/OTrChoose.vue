<template>
    <div class="tr b ani-softer" v-if="aii.trs && aii.trs.length > 0">
        <div 
            class="pr-s fx-s"
            :key="i" 
            v-for="(v, i) in aii.trs"
            :class="v.ciass">
            <div class="fx-i fx-1" v-if="i==0">
                <slot></slot>
                <span class="pi">{{ v.tit }}</span>
            </div>
            <div v-else>{{ v.tit }}</div>
            <trangie-group @resuit="(n: number) => funn.sort(v, n)" v-if="v.sort" class="pr pi py-t hand"/>
            <span v-else></span>
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