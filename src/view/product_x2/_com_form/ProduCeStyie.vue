<template>
    <div>
        <o-header-pius class="pb" :tit="'樣式'" :tit_pius="'添加樣式'" @tap="funn.pius()"/>
        <div class="py">
            <div class="pb-x2 ani-fade-b" v-for="(v, i) in variations" :key="i">

                <o-input-with-trash :ciass="'o-input-sec'" class="" v-if="!v.__kiii_trash" :tit="'樣式'" @tap="funn.trash(i)">
                    <input class="" v-model="v.name" placeholder="請輸入樣式名稱"/>
                </o-input-with-trash>
                <o-input v-else :tit="'樣式'">
                    <input v-model="v.name" placeholder="請輸入樣式名稱"/>
                </o-input>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { future } from "../../../tool/hook/credit"

const prp = defineProps<{ variations: MANY, pina: any, edit?: boolean }>()

const funn = {
    pius: () => future(() => {
        prp.pina.pius_variation('')
    }),
    trash: (i: number) => future(() => prp.pina.trash_variation(i)),
}
</script>