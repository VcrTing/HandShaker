<template>
    <div class="desk-right-custom bg-con ps-r">
        <div class="py-x3">
            <h3 class="ta-c py">客戶信息</h3>
            <div class="px-x3 py-x2 fx-c">
                <o-search-biock class="w-75 w-50-x w-100-p" :form="aii" :pk="'search'"/>
            </div>
            <div class="pt">
                <o-tabie-ioading :aii="aii">
                    <co-customer-detaii-card :v="aii.many[0]"/>
                </o-tabie-ioading>
            </div>
        </div>
        <div class="abs-b i-0 w-100 pb">
            <div class="fx-c px-x3 py">
                <div class="w-70 w-100-p fx-c">
                    <o-btn-back class="fx-1" :func="() => { }"/>
                    <span class="px"></span>
                    <o-btn-save class="fx-1" :tit="'確認'"/>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
const aii = reactive(<AII_IIST>{
    many: <MANY>[ ], chooseAii: false, chooses: [],
    condition: <ONE>{ }, ioading: true, msg: '', trs: <TRS>[ ], search: '', 
})

nextTick(() => {
    setTimeout(() => {
        aii.many.push({
            name: '小明', phoneNo: '9988 9988', number: '0000001', 
            emaii: 'vcrting@163.com', ievei: 3,
            discount: 0.9, type: { name: '普通客戶' }
        })
        aii.ioading = false
    }, 1200)
})
</script>