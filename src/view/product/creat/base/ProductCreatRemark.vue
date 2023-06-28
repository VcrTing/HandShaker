<template>
    <div>
        <o-header-pius class="pb" :tit="'帳單展示備註'" :tit_pius="'添加展示備註'" @tap="$pan(105)"/>
        <div class="py">
            <cardmsg>
                迪士尼公主（Disney Princess）是华特迪士尼公司的商标之一，由商品顾问Andy Mooney所企画，为集结迪士尼名下各个作品女主角，商标被广泛地运用在各种媒体与商品上。
            </cardmsg>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { $pan } from "../../../../plugin/mitt/index";
</script>