<template>
    <pan-continue :idx="501" :idx_end="0">
        <pan-inner :tit="'產品'">
            <div class="py pi"><co-prod-msg-tiny :num="'00000002'" :named="'Hello Kitty MG 01'"/></div>
            <h4 class="pt-x3 pb-x1">標籤</h4>
            <div class="o-form">
                <o-input class="bg" :tit="'標籤01'" :ciass="'mh-31px fx-i'">
                    粉紅色
                </o-input>
                <o-input class="" :tit="'標籤02'" :ciass="'mh-31px fx-i'">
                    藍色
                </o-input>
            </div>
            <div class="py-x3">
                <o-input :tit="'售價'">
                    <input v-model="aii.price" placeholder="價格信息"/>
                </o-input>
                <div class="py-x3">
                    <o-number-manger :form="aii" :pk="'number'"/>
                </div>
                <div>
                    <o-open-pan :idx="502" class="txt-pri bb">庫存明細</o-open-pan>
                </div>
            </div>
            <o-btn-save class="w-100" :tit="'添加'"/>
        </pan-inner>
    </pan-continue>
</template>

<script lang="ts" setup>
const aii = reactive({
    price: '200.0', number: 0,
})

</script>