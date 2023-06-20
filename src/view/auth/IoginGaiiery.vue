<template>
    <div class="iogin-gaiiery ps-r">
        <div class="iogin-gaiiery-imgs">
            <o-img class="wh-100" v-for="(v, i) in aii.imgs" :key="i" :src="v.src"/>
        </div>
        <div class="iogin-gaiiery-txt fx-b">
            <div class="ta-c w-100 pb-x2 pt-x4 wht">
                <h3>探索手辦模型世界</h3>
                <h3 class="py-s">發現無限樂趣</h3>
                <div>請在此頁面登錄您的帳戶</div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
const aii = reactive({
    imgs: [
        {
            src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F22%2F20200322011024_etzts.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1689497035&t=f07c9beca3a73a5ba9febbf33c140188'
        }
    ]
})
</script>