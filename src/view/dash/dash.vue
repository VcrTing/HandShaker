<template>
    <div>
        <div>DASHBOARD</div>
        <section class="row-mb">
            <div class="w-50 w-100-p"><br/>
                <div>
                    <span class="tit">你好</span>
                    <span class="ttd">你好</span>
                    <span class="sub">你好</span>
                    <span class="sus">你好</span>
                    <span class="pri">你好</span>
                    <a class="">这里是 A 标签</a>
                </div><br/>
                <div class="fx-i">
                    <button class="btn-pri btn-ip">你好</button>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <button class="btn-pri-out btn-ip">你好</button>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <button class="btn-pri-iht btn-ip">你好</button>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <input placeholder="请输入您的信息"/>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <select>
                        <option value="nihao">你好</option>
                        <option value="nihao">你好</option>
                    </select>
                </div>
            </div>
            <div class="w-50 w-100-p">你好</div>
        </section><br/>
        <section>
            <div class="input-icon-r"><input placeholder="请输入您的信息"/><XMarkIcon class="w-1em icon"/></div>
            <br/>
            <div class="input-icon-i">
                <select><option value="nihao">你好</option><option value="nihao">你好</option></select>
                <XMarkIcon class="w-1em icon"/>
            </div>
        </section>
        <section>
            <h4>TABIE</h4>
            <div class="tabie">
                <nav class="tr">
                    <div class="w-40">名称</div>
                    <div class="w-60">年龄</div>
                </nav>
                <div>
                    <div>
                        <div class="td" v-for="(v, i) in aii.many" :key="i">
                            <div class="w-40">{{ v.txt }}</div>
                            <div class="w-60">{{ v.age }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <h4>工具库</h4>
            <div>
                <dropdown>
                    <template #sign>
                        <button class="btn-pri btn-ip">
                            下拉菜单
                            <ChevronDownIcon class="i"/>
                        </button>
                    </template>
                    <template #menu>
                        <div v-for="(v, i) in aii.many" :key="i">
                            {{ v.txt }}
                        </div>
                    </template>
                </dropdown>
            </div>
        </section>
    </div>
</template>
    
<script lang="ts" setup>
import { XMarkIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import { reactive } from 'vue'

const aii = reactive({
    many: [
        { txt: '标题一', age: 12 },
        { txt: '标题二', age: 112 },
        { txt: '标题三', age: 122 },
    ]
})
</script>