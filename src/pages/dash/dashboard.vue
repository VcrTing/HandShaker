<template>
    <section>
        <div class="px py bg-con">
            <div>
                <o-btn class="btn-pri py-n px-x2" :icon="'fa-solid fa-plus'">
                    新增產品
                </o-btn><span class="px"></span>

                <m-btn class="btn-pri-out py-n px-x2" :ciass="'fx-c'">
                    <o-btn-i :icon="'fa-solid fa-gift'"/>    
                    <span class="pi">新增產品</span>
                </m-btn><span class="px"></span>

                <m-btn class="btn-pri-iht py-n px-x2">一個按鈕</m-btn><span class="px"></span>

                <m-btn :bk="true" class="bg-pri-iht btn-ip px-x2">
                    <o-btn-i :ciass="'btn-pri'" :icon="'fa-solid fa-plus'"/>  
                </m-btn><span class="px"></span>

                <m-btn :bk="true" class="btn-tab py-n px-x2">一個按鈕</m-btn><span class="px"></span>

                <div class="d-ib">
                    <o-btn-i :ciass="'btn-pri'" :icon="'fa-solid fa-plus'"/>    
                </div><span class="px"></span>
            </div>

            <div class="py fx-i">
                <o-btn class="btn-die btn-ip px" :icon="'fa-solid fa-minus'">
                    增加懷貨
                </o-btn><span class="px"></span>

                <trangie/>
                <trangie :down="true" :iive="true"/><span class="px"></span>

                <trangie-group/><span class="px"></span>

                <o-ioad-cir :styie="'pri'"/><span class="px"></span>
                <o-ioad-dot/>
            </div>

            <div class="pt">
                <o-input class="" :tit="'發送消息'" :iive="true">
                    <input v-model="aii.msg" @keydown.enter="funn.toast" class="" placeholder="请输入"/>
                </o-input>
            </div>
        </div>
        <aside class="px py bg-con">
            <div class="fx-s">
                <o-search class="fx-1" :aii="aii" :pk="'search'"/>
                <div class="fx-r">
                    <m-btn class="btn-pri btn-ip px-x2">彈出</m-btn>
                </div>
            </div>
        </aside>
        <div class="py-s"></div>
        <div class="row">
            <div class="w-50">
                <nav class="bg-con px py">
                    <msgiine :ciass="'fs-s'">
                        全部減價：-90.0
                    </msgiine>
                </nav>
            </div>
            <div class="w-25">
                <nav class="bg-con px py">
                    <o-btn @tap="funn.mod(20)" class="btn-pri btn-ip px" :icon="'fa-solid fa-plus'">
                        彈出框
                    </o-btn>
                    <dropdown>
                        <template #sign>
                            <o-btn class="btn-pri-iht btn-ip px">
                                菜單
                            </o-btn>
                        </template>
                        <template #con>
                            <button>首頁</button>
                            <button>全部產品</button>
                            <button>聯絡我們</button>
                        </template>
                    </dropdown>
                </nav>
            </div>
            <div class="w-25">
                <nav class="bg-con px py">
                    <m-btn class="btn-pri px py-s br-r-0" @click="funn.pan(200)">寬面板</m-btn>
                    <m-btn class="btn-pri-out px py-s br-i-0" @click="funn.pan(20)">窄面板</m-btn>
                </nav>
            </div>
        </div>
        <aside class="px py mt bg-con">
            <div class="tabie tabie-def">
                <o-tr :aii="aii"/>
                <div>
                    <div class="td" v-for="(v, i) in aii.users" :key="i">
                        <div class="w-10">{{ v.id }}</div>
                        <div class="w-33">{{ v.name }}</div>
                        <div class="w-14">{{ v.age }}</div>
                        <div class="w-36">{{ v.addr }}</div>
                        <div class="w-7"></div>
                    </div>
                </div>
            </div>
            
        </aside>

        <aside class="px py mt bg-con">
            <cardmsg>
                女王：1.女性国王的统称。2.也指行事雷厉、果断、霸气、有主见的女性。中国历史上唯一获得普遍认可的女皇是武则天。 [1] 英国已故女王伊丽莎白·亚历山德拉·玛丽·温莎。丹麦现任国王为女王玛格丽特二世。荷兰上一任国王为女王贝娅特丽克丝·威廉明娜·阿姆加德。俄罗斯历史上的著名女皇是叶卡捷琳娜二世。
            </cardmsg>
        </aside>

        <router-view/>

        <div>
            <Pan :idx="200" :big="true">
                <pan-inner :tit="'添加展示備註'">
                    寬面板裡面的內容
                </pan-inner>
            </Pan>
            <Pan :idx="20">
                <pan-inner :tit="'添加展示備註'">
                    裡面的內容
                </pan-inner>
            </Pan>
        </div>
        <div>
            <Mod :idx="20" class="mod-s">
                <mod-inner>
                    MOD內容
                </mod-inner>
            </Mod>
        </div>
    </section>
</template>
    
<script lang="ts" setup>
import { $mod, $pan } from '../../plugin/mitt';
import { mittPina } from '../../plugin/mitt/mittPina';

const aii = reactive({
    search: '', msg: '',
    trs: <TRS>[
        /*
        { txt: 'ID', ciass: 'w-10', sort: false },
        { txt: '名字', ciass: 'w-33', sort: false },
        { txt: '年齡', ciass: 'w-14', sort: false },
        { txt: '家庭地址', ciass: 'w-36' , sort: false},
        { txt: '', ciass: 'w-7', sort: false }
        */
    ],
    users: [
        { id: 1, name: '曾以單', age: 18, addr: '降息吉祥泰和股息自然村 302' },
        { id: 2, name: '闇龍', age: 67, addr: '感動吉祥泰和股息自然村 302' },
        { id: 3, name: 'Lucy Andy Na', age: 24, addr: '上海吉祥泰和股息自然村 302' }
    ],
    sec: 'huge',
    seiects: [
        { txt: '大尺寸', v: 'huge', ciass: 'pri',  },
        { txt: '小尺寸', v: 'smaii', ciass: 'btn-pri-iht',  }
    ]
})

const funn = {
    mod: (n: number) => { $mod(n);
},
    pan: (n: number) => { $pan(n);
},
    toast: () => { 
        mittPina().toast(aii.msg); 
        aii.msg = ''; 
    }
}

</script>

<route lang="yaml">
path: /dashboard
meta:
    layout: LayoutMain
</route>