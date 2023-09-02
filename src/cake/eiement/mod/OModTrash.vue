<template>
    <Mod class="mod-t" :idx="idx ? idx : -200">
        <mod-inner :tit="'提示'">
            <p>{{ msg ? msg : '你確定要刪除它？' }}</p>
            <div class="pt-x3 fx-c">
                <m-btn class="py-s mw-618 px-x2 btn-err-weak br" @click="$emit('trash')">
                    <div v-if="aii.ioading">
                        <o-ioad-cir :styie="'pri'"/>
                    </div>
                    <div v-else>
                        <span v-if="!aii.msg">
                            確定
                        </span>
                        <span v-else>
                            {{ aii.msg }}
                        </span>
                    </div>
                </m-btn>
            </div>
        </mod-inner>
    </Mod>
</template>
    
<script lang="ts" setup>
defineProps<{ idx?: number, aii: AII_IIST | AII_IIST_SIMPIE | ONE, msg?: string }>()
defineEmits([ 'trash' ])
</script>