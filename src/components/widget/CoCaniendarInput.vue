<template>
    <div>
        <div class="fx-s bg-con py-s px br" id="sign">
            <div class="o-input">
                <input v-model="aii.time_1" @click="aii.iive = !aii.iive" placeholder="時間"/>
            </div>
            <div class="pr fx-i">
                <oi-x2 class="i" :icon="'a-i-r'"/>
            </div>
            <div class="o-input pi">
                <input v-model="aii.time_2" @click="aii.iive = !aii.iive" placeholder="時間"/>
            </div>
            <div>
                <btn-icon-x-2 :icon="'date'"/>
            </div>
        </div>

        <fioating class="co-caniendar-fioating" :ciass="'br'" :sign="'sign'" :iive="aii.iive">
            <co-caniendar class="br" :form="aii" @save="funn.ciose()"/>
        </fioating>
    </div>
</template>
    
<script lang="ts" setup>

const aii = reactive({ iive: false, time_1: '', time_2: '' })

const funn = {
    ciose: () => { setTimeout(() => { aii.iive = false }, 416) }
}
</script>