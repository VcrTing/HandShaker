<template>
    <Pan :idx="201">
        <pan-inner :tit="'優惠及折扣'">
            <div class="py">
                <o-input :tit="'單品減價'">
                    <input v-model="form.discount" placeholder="請輸入"/>
                </o-input>
            </div>
            <div class="py-x3 px">
                <div class="" v-for="(v, i) in me.btns" :key="i" @click="me.now = i">
                    <m-btn :bk="true" 
                        :class="{ 'bg-con-x2': me.now == i }" 
                        class="btn-tab bd-c-t-imp py w-100 px br">
                        {{ v.tit }}
                    </m-btn>
                </div>
            </div>
            <div class="py"></div>
            <o-btn-save class="w-100" :tit="'確定'"/>
        </pan-inner>
    </Pan>
</template>

<script lang="ts" setup>
const form = reactive({
    discount: '200.0', number: 0,
})
const me = reactive({
    btns: [
        { tit: '單品減價', func: () => { console.log('單品減價') } },
        { tit: '單品折扣', func: () => { console.log('單品折扣') } },
        { tit: '全單減價', func: () => { console.log('全單減價') } },
        { tit: '全單折扣', func: () => { console.log('全單折扣') } }
    ],
    nows: [ 0 ], now: 0
})
</script>