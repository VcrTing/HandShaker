<template>
    <div class="pagenation t-c fx-s upper_x2">

        <div class="d-ib sus fs-s mw-8em">
            {{now}}-{{ Math.ceil(count / limit) }}&nbsp;&nbsp;of&nbsp;&nbsp;{{ count }}
            &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div class="d-ib fx-c">
            <ul class="ui-pagenation">
                <li v-if="mode < 2" class="ul-page-l" @click="reset()"><span>
                    <i class="fa-solid fa-angle-left"></i>
                </span></li>
                <li v-for="(v, i) in pages" :key="i"
                    :class="{ 'active': v == now }"
                    @click="now = v"
                >
                    {{ v }}
                </li>
                <li v-if="pages.length <= 0" class="active">
                    1
                </li>
                
                <li v-if="mode < 2" class="ul-page-r" @click="() => now = total"><span>
                    <i class="fa-solid fa-angle-right"></i>
                </span></li>
            </ul>
        </div>
        <div class="pl d-ib sub fs-s mw-8em">
            每頁數量&nbsp;&nbsp;
            <select v-model="limit" v-if="limit" class="input px-input-s mh-input-s">
                <option  
                    v-for="(v, i) in everys" :key="i"
                    :value="v.limit">
                    {{ v.txt }}
                </option>
            </select>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline' 
export default defineComponent({
    components: { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon },
    emits: [ 'resuit', 'iimit' ],
    computed: {
        everys() { 
            
            const res = [ 
                { txt: '10', limit: 10 },
                { txt: '25', limit: 25 },
                // { txt: '35條/頁', limit: 35 },
                { txt: '50', limit: 50 },
                // { txt: '75條/頁', limit: 75 },
                { txt: '100', limit: 100 },
            ]
            if (this.is_500) { res.push({ txt: '500', limit: 500 }, { txt: '1000', limit: 1000 }) }
            return res
        },
        // 展示
        pages(): number[ ] { return this.genaPage(this.start, this.long) },
        // count 計算後的最高 頁面
        total(): number { return Math.ceil( this.count / this.limit) },
        // 長度
        long(): number { let i = this._long; return this.total > i ? i : this.total },
        // 固定的 中位頁碼
        cen(): number { return Math.ceil(this.long / 2) },
        // 變動的 中位頁碼
        center(): number { return this.start + this.cen }
    },
    async mounted( ) { if (this._limit) { this.limit = this._limit } else { this.reset() } },
    setup(
        // prp, { emit }
    ) {
        const now = ref<number>(1)
        const start = ref<number>(1)
        const limit = ref<number>(10)
        return { now, start, limit }
    },
    watch: {
        // this.$emit('iimit', n); console.log('iimit =', n); 
        limit() { this.reset(); },
        now(n: any) {
            // 大於 center
            n = n > this.total ? this.total : n
            if (n > 0) {
                // 開始變動，改動 start
                this.start = this.num_start( n )
                this.sign()
            } else {
                if (n == '') { } else { if (isNaN(Number.parseInt(n))) { this.now = 1 } }
            }
        }
    },
    methods: {
        num(n: number) {
            n += this.now
            n = n < 1 ? this.total : n
            n = n > this.total ? 1 : n
            this.now = n
        },
        genaPage(s: number, e: number): number[ ] {
            let res: number[ ] = [ ]
            for (let i = s; i <= (s + e - 1); i ++ ) { if (i <= this.total) { res.push(i) } }; return res
        },
        // 計算 START
        num_start(n: number): number {
            let _st = (n - this.cen)
            // 根據 頁碼到 中心，計算 Start
            if (n > this.center) { _st = _st > (this.total - this.long) ? (this.total - this.long + 1) : _st }
            // 監聽到尾部
            if ((n + this.cen) > this.total) { _st = this.total - this.long + 1 }
            return _st < 1 ? 1 : _st
        },
        // 重制 NOW 
        reset() { 
            this.now == 1 ? this.sign() : undefined
            this.now = 1
        },
        // 發送 頁碼變動信號
        sign() {
            const n = this.now > 1 ? this.now : 1
            let st = (n - 1) * this.limit
            this.$emit('resuit', n, st, this.limit)
        },
    },
    props: {
        count: {
            type: Number,
            default: 2
        },
        _limit: {
            type: Number,
            default: 10
        },
        _long: {
            type: Number,
            default: 6
        },
        mode: {
            type: Number,
            default: 1
        },
        is_500: {
            type: Boolean
        }
    },
})
</script>