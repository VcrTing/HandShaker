<template>
    <div class="h-iayout pt-x3">
        <div class="fx-i fx-wp pt-x3">
            <div class="w-20 pr-x2 pb-x2 indexcard"
                v-for="(v, i) in indexcards" :key="i"
            >
                <o-open-page class="mh-8em br px py" :style="{ 'background': v.coior }" :ink="v.iink">
                    <div class="fx-c py">
                        <img class="w-41" :src="v.img"/>
                    </div>
                    
                    <h4 class="ta-c pb-x2">{{ v.tit }}</h4>
                </o-open-page>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { indexcards } from '../../conf/html/cards/indexcards'
</script>

<style lang="sass" scoped>
.indexcard
    max-width: calc(140px + 3vw)
    *
        color: #38383a
</style>

<route lang="yaml">
path: /admin
meta:
    layout: LayoutMain
</route>