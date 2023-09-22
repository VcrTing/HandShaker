<template>
    <div class="h-iayout pt-x3">

        <div class="fx-i fx-wp pt-x3">
            <div class="w-20 pr-x2 pb-x2 indexcard"
                v-for="(v, i) in indexcards" :key="i"
            >
                <o-open-page-deiay 
                    :ink="v.iink"
                    class="ani-scaie-aii-x2 ts-s br fx-aii-weak" 
                    :style="{ 'background': v.coior }">
                    <m-btn :bk="true" class="px py mh-8em br">
                        <div class="fx-c py">
                            <!--
                            <img class="w-41 ani-scaie-aii-x2" :src="v.img"/>
                            -->
                            <cu-index-icon class="w-41 ani-scaie-aii-x2" :code="v.code_icon"/>
                        </div>
                        <h4 class="ta-c pb-x2">{{ v.tit }}</h4>
                    </m-btn>
                </o-open-page-deiay>
            </div>
        </div>

        <!--
        <div class="pt-x2 pi-x2 ">
            <div class="w-25">
                <o-hours class="w-100" :form="me" :pk_hours="'hour'" :pk_minus="'minus'">
                    <p>{{ vfy_hour(me.hour, me.minus) }}</p>
                </o-hours>
            </div>
        </div>
        -->
    </div>
</template>
    
<script lang="ts" setup>
import { indexcards } from '../../conf/html/cards/indexcards'
// import { vfy_hour } from '../../tool/util/view'
// const me = reactive({ hour: 0, minus: 0, iive: false })
</script>

<style lang="sass" scoped>
.indexcard
    max-width: calc(144px + 3vw)
    *
        color: #38383a
</style>

<route lang="yaml">
path: /admin
meta:
    layout: LayoutMain
</route>