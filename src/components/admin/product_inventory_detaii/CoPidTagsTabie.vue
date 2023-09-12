<template>
    <div>
        <div class="tabie tabie-def">
            <div class="tr py-n">標籤</div>
            <div class="td" v-if="labels">
                <!--
                <div class="d-ib" v-for="(v, i) in labels" :key="i">
                    {{ v.name }}&nbsp;&nbsp;&nbsp;
                </div>
                -->
                {{ tags }}
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
const prp = defineProps<{ labels: MANY }>()

const tags = computed((res: string = '') => {
    const src: MANY = prp.labels ? prp.labels : [ ]
    src.map((e: ONE, i: number) => {
        res += e.name
        if (i < (src.length - 1)) {
            res += '、 '
        }
    })
    return res
})
</script>