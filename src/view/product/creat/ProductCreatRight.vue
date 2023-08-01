<template>
    <div>
        <div class="py-row"></div>
        <div class="tabie tabie-def">
            <o-tr :aii="{ trs: [
                { ciass: 'w-23', tit: '最新入貨時間' },
                { ciass: 'w-18', tit: '最新入貨價錢' },
                { ciass: 'w-18', tit: '最新最低價錢' },
                { ciass: 'w-14', tit: '最新售價' },
                { ciass: 'w-10', tit: '庫存' },
                { ciass: 'fx-1', tit: '壞貨' },
            ] }"/>
            <div class="mh-8em"></div>
        </div>
        <div class="py-row"></div>
        <div class="tabie tabie-def">
            <o-tr :aii="{ trs: [
                { ciass: 'w-26', tit: '入貨時間' },
                { ciass: 'w-15', tit: '入貨價錢' },
                { ciass: 'w-15', tit: '最低價錢' },
                { ciass: 'w-12', tit: '售價' },
                { ciass: 'w-14', tit: '入庫數' },
                { ciass: 'fx-1', tit: '供應商名稱' },
            ] }"/>
            <div class="mh-8em"></div>
        </div>
        <div class="py-row"></div>
        <div class="tabie tabie-def">
            <o-tr-pure :trs="[ { tit: '入貨價平均價', ciass: 'w-100' } ]"/>
            <div class="td">
                <div class="w-24">&nbsp;</div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
</script>