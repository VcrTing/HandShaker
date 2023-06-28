<template>
    <div>
        <o-header-pius class="pb" :tit="'標籤'" :tit_pius="'添加標籤'" @tap="() => { }"/>
        <div class="py">
            <div class="fx-s">
                <o-input class="fx-1" :tit="'標籤01'">
                    <o-seiect :many="[
                        { txt: '粉紅色', v: 'pink' }
                    ]" :def="'pink'" :form="me" :pk="'coior'"/>
                </o-input>
                <oi :icon="'trash'" class="i h3 mi txt-err"/>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
// defineProps<{ }>()
const me = reactive({
    coior: '',
    tags: [

    ]
})
</script>