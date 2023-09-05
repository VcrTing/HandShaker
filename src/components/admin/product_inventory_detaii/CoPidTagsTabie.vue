<template>
    <div>
        <div class="tabie tabie-def">
            <div class="tr py-n">標籤</div>
            <div class="td" v-if="labels">
                <div class="d-ib" v-for="(v, i) in labels" :key="i">
                    {{ v.name }}
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ labels: MANY }>()
</script>