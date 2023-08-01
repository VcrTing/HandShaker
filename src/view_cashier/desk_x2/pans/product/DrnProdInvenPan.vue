<template>
    <pan-continue :idx="502" :big="true" :idx_end="501">
        <pan-inner :tit="'產品'" :ciass="'px'">
            <div class="pt pi"><co-prod-msg-tiny :num="'00000002'" :named="'Hello Kitty MG 01'"/></div>
            <div class="py-x3">
                <div>
                    <co-desk-prod-inven-iist/>
                </div>
            </div>
            <div class="py"></div>
            <o-btn-save class="w-100" :tit="'確定'" @click="$pan(501)"/>
        </pan-inner>
    </pan-continue>
</template>

<script lang="ts" setup>
import { $pan } from "../../../../plugin/mitt/index"

</script>