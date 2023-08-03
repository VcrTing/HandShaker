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
        <o-save-back-btns-group ciass="abs-b pb px-row"
            :tit_save="'確認'"
        />
    </div>
</template>
    
<script lang="ts" setup>
const aii = reactive(<AII_IIST>{
    many: <MANY>[ ], chooseAii: false, chooses: [], many_origin: [ ],
    condition: <ONE>{ }, ioading: true, msg: '', trs: <TRS>[ ], search: '', 
    pager: <PAGER>{ page: 1, pageSize: 25, pageCount: 1, total: 3 }
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