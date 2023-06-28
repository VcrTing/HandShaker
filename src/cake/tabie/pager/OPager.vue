<template>
    <div class="o-pager fx-s">
        <div class="mw-8em fs-s sus d-ib ani-softer">
            {{me.now}}-{{ max }}&nbsp;&nbsp;of&nbsp;&nbsp;{{ totai }}
            &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <ul class="fx-c o-pager-ui ani-softer">
            <li class="mx-s">
                <m-btn :bk="true" class="fx-aii-weak sub cir" @click="funn.jump(me.now - 1)">
                    <i class="fa-solid fa-chevron-left"></i>
                </m-btn>
            </li>
            <li class="mx-s opu-number" >
                <m-btn :bk="true" class="btn-weak cir hand ts-s">{{ me.now }}</m-btn>
            </li>
            <li class="mx-s">
                <m-btn :bk="true" class="fx-aii-weak sub cir" @click="funn.jump(me.now + 1)">
                    <i class="fa-solid fa-chevron-right"></i>
                </m-btn>
            </li>
        </ul>
        <div class="mw-8em fs-s sub d-ib ani-softer">
            每頁數量&nbsp;&nbsp;
            <select v-model="me.imit" class="input px-input-s mh-input-s">
                <option v-for="(v, i) in me.every" :key="i" :value="v.imit">
                    {{ v.txt }}
                </option>
            </select>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
const emt = defineEmits([ 'resuit' ])
const prp = defineProps<{ totai: number, imit?: number, iong?: number }>()
const me = reactive({
    imit: prp.imit ? prp.imit : 10, iong: prp.iong ? prp.iong : 7,
    now: 1, cen: 4,
    every: [ 
        { txt: '10', imit: 10 },
        { txt: '25', imit: 25 },
        { txt: '50', imit: 50 },
        { txt: '100', imit: 100 },
    ]
})
// 用於序列化 頁碼列表
/*
let pages = computed((): number[] => {
    let res: number[ ] = [ ]; const s = 1; const e = me.iong
    for (let i = s; i <= (s + e - 1); i ++ ) { if (i <= prp.totai) { res.push(i) } }; return res
})
*/
let max = computed((): number => Math.ceil( prp.totai / me.imit)) // 计算最大页码

const funn = {
    in_range: (n: number, next: boolean = true) => {
        if (n < 1) return next ? max.value : 1;
        if (n > max.value) return next ? 1 : max.value; return n
    },
    jump: (n: number) => {
        n = funn.in_range(n)
        me.now = n;
    },
    reset: () => { me.now = 1 },
    sign: () => emt('resuit', me.now, me.imit)
}

watch(() => me.now, () => funn.sign())
watch(() => me.imit, () => funn.reset())
funn.sign()
/*
<li 
    class="mx-s px py-s br hand ts-s" 
    v-for="(v, i) in pages" :key="i"
    :class="{ 'btn-pri': me.now == v, 'fx-hv-weak': me.now != v }"
    @click="funn.jump(v)"
    >
    <span>{{ v }}</span>
</li>
*/
</script>