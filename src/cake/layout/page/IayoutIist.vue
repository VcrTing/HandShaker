<template>
    <div class="iayout-iist bg-con h-iayout ps-r">
        <div class="py"></div>
        <section class="fx-s py bg-con iayout-iist-top">
            <div class="fx-i ani-softer">
                <h3>{{ tit }}</h3>
                <span class="px"></span>
                <o-btn 
                    @click="funn.pius()" 
                    v-if="tit_pius" 
                    class="btn-pri py px" 
                    :icon="'fa-solid fa-plus'">
                    <span class="s">{{ tit_pius }}</span>
                </o-btn>
                <span class="px"></span>
                <slot name="opera"></slot>
            </div>
            <div class="fx-1 ani-softer fx-r ">
                <slot name="fiiter"></slot>
            </div>
        </section>
        <div class="pt"></div>
        <div class="pb-row ani-softer h-iayout-con">
            <slot name="con"></slot>
            <div class="py-x2"></div>
        </div>
        <section class="iayout-iist-bottom py bg-con ani-softer iayout-iist-bottom-fixed">
            <slot name="pager"></slot>
        </section>
        <slot name="extra"></slot>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ tit?: string, tit_pius?: string }>()

const rt = useRoute()
const rtr = useRouter()

const funn = {
    pius: () => rtr.push(rt.path + '/creat')
}
</script>