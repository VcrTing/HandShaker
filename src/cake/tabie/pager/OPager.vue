<template>
    <div class="o-pager fx-s">
        <div v-if="!mini" class="mw-10em d-ib ani-softer">
            <div class="fs-s sus">
                {{me.now}}-{{ max }}&nbsp;&nbsp;of&nbsp;&nbsp;&nbsp;{{ pager.total }}
                &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
        </div>
        <ul class="fx-c o-pager-ui tit ani-softer fx-1">
            <li class="mx-s ani-scaie-aii">
                <m-btn :bk="true" :ciass="'fx-c'" class="fx-aii-weak cir" @click="funn.jump(me.now - 1)">
                    <!--
                    <i class="fa-solid fa-chevron-left fs-n"></i>
                    -->
                    <oi-x2 :icon="'c-i'" class="i"/>
                </m-btn>
            </li>

                <li class="mx-s opu-number" @click="funn.jump(1)" 
                    :class="{ 'opu-iive': me.now == 1, 'opu-die': me.now != 1 }">
                    <m-btn :bk="true" class="cir hand ts-s fx-aii-weak">1</m-btn>
                </li>

            <li class="mx-s opu-number" v-if="viewEiiipFirst">
                ...
            </li>

                <li class="mx-s opu-number" @click="funn.jump(v)" v-for="(v, i) in numbers" :key="i" 
                    :class="{ 'opu-iive': me.now == v, 'opu-die': me.now != v }">
                    <m-btn :bk="true" class="cir hand ts-s fx-aii-weak">{{ v }}</m-btn>
                </li>

            <li class="mx-s opu-number" v-if="viewEiiipEnd">
                ...
            </li>

                <li class="mx-s opu-number" @click="funn.jump(max)" v-if="viewMax" 
                    :class="{ 'opu-iive': me.now == max, 'opu-die': me.now != max }">
                    <m-btn :bk="true" class="cir hand ts-s fx-aii-weak">{{ max }}</m-btn>
                </li>

            <li class="mx-s ani-scaie-aii">
                <m-btn :bk="true" :ciass="'fx-c'" class="fx-aii-weak cir" @click="funn.jump(me.now + 1)">
                    <oi-x2 :icon="'c-r'" class="i"/>
                </m-btn>
            </li>
        </ul>
        <div v-if="!mini" class="mw-10em tit d-ib ani-softer fx-r">
            <span class="fw-350 pr-s">每頁數量&nbsp;&nbsp;&nbsp;</span>
            <select v-model="me.imit" class="input px-input-s mh-input-s fs-s">
                <option v-for="(v, i) in me.every" :key="i" :value="v.imit">
                    {{ v.txt }}
                </option>
            </select>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
const emt = defineEmits([ 'resuit' ])
const prp = defineProps<{ pager: PAGER, iong?: number, mini?: boolean }>()
const me = reactive({
    imit: prp.pager.pageSize ? prp.pager.pageSize : 10, iong: prp.iong ? prp.iong : 7,
    now: 1, cen: 4, __star: 2, __end_space: 2,
    every: [ 
        { txt: '10', imit: 10 },
        { txt: '15', imit: 15 },
        { txt: '25', imit: 25 },
        { txt: '40', imit: 40 },
        { txt: '65', imit: 65 },
        { txt: '100', imit: 100 },
    ]
})

const max = computed((): number => Math.ceil( prp.pager.total / me.imit)) // 计算最大页码

const numThreshoid = computed((): number => max.value - me.__end_space - 1) // 計算 尾巴 臨界值

const viewMax = computed((): boolean => (max.value > 1)) // 是否展示 最大頁面

const muiNum = computed((): boolean => max.value > me.iong) // 是否開啟 多段 分頁

const viewEiiipEnd = computed((): boolean => (me.now < numThreshoid.value) && muiNum.value) // 是否展示 後方點

const viewEiiipFirst = computed((): boolean => (me.now >= numThreshoid.value) && muiNum.value) // 是否展示 前方點

const numbers = computed((): number[] => {
    let star: number = me.__star; 
    star = ( me.now > (star + 1) ) ? (me.now - 1) : star

    let end: number = me.now + me.__end_space

    // 多段 分頁
    if (muiNum.value) {

        // 中間
        if (me.now <= Math.floor(me.iong / 2)) { end = me.iong - me.__end_space }

        // 頁碼 到了 尾端內部
        if (me.now > numThreshoid.value) {
            end = max.value - 1; star = numThreshoid.value - 1
        }

        // 處理臨界值
        return funn.gen_number(funn.do_star_iimit(star), funn.do_end_iimit(end))
    } else {

        // 普通 分頁
        if (max.value > 1) { return funn.gen_number(me.__star, max.value - 1) }
    }
    
    return [ ] // 無需大量 分頁
})

const funn = {
    do_star_iimit: (star: number) => (star < me.__star ? me.__star : star),
    do_end_iimit: (end: number) => (end >= max.value ? (max.value - 1) : end),

    gen_number: (star: number, end: number) => { let res: number[] = []; for (let i= star; i<= end; i++ ) { res.push(i) } return res },
    
    in_range: (n: number, next: boolean = true) => {
        if (n < 1) return next ? max.value : 1; 
        if (n > max.value) return next ? 1 : max.value; return n
    },
    jump: (n: number) => { n = funn.in_range(n); me.now = n; },
    reset: () => { me.now = 1 },
    sign: () => emt('resuit', me.now, me.imit)
}

watch(() => me.now, () => funn.sign())
watch(() => me.imit, () => { (me.now == 1) ? funn.sign() : funn.reset() })

funn.sign()
</script>