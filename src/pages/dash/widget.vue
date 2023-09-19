<template>
    <div>
        <br/>
        <br/>
        <br/>
        <div class="fx-i pi">
            <checkbox :form="aii" :pk="'choosAii'" @resuit="funn.choosAii"/>
            <h6 class="pi">全選</h6>
        </div>
        <br/>
        <div class="pt">
            <div class="px pb fx-i" v-for="(v, i) in aii.many" :key="i">
                <div class="w-10">
                    <o-check-one :chooses="aii.chooses" :id="v.id" :totai="aii.many.length" @choosAii="(n: boolean) => (aii.choosAii = n)"/>
                </div>
                <div class="w-10">{{ i + 1 }}</div>
                <div class="w-30">{{ v.name }}</div>
                <div>{{ v.age }}</div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { future } from "../../tool/hook/credit"

const aii = reactive({ choosAii: false, chooses: <IDS>[ ], many: <MANY>[ ] })

const funn = {
    choosAii: (n: boolean) => future(() => {
        aii.chooses.length = 0
        if (n) { aii.many.map((e: ONE) => { aii.chooses.push(e.id) }) }
    })
}

nextTick(() => { aii.many.push({ id: 1, name: '張三', age: 12, }, { id: 2, name: '張三', age: 12, }) })
</script>

<route lang="yaml">
path: /admin/widget
meta:
    layout: LayoutMain
</route>