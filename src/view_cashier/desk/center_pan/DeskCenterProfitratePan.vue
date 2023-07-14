<template>
    <Pan :idx="207" :big="true">
        <pan-inner :tit="'統計毛利率'">
            <div class="pt-row">
                <co-statistics-profirate-iists/>
            </div>
            <div class="py-row"></div>
            <div class="fx-c pt">
                <o-btn-save class="w-30" :tit="'確定'"/>
            </div>
        </pan-inner>
    </Pan>
</template>

<script lang="ts" setup>

</script>