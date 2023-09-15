<template>
    <div class="iayout-pdf ps-r">
        <section class="abs-t i-0 py ps-f-imp">
            <cub-go-back class="ttd h5"/>
        </section>

        <div class="pt">
            <scroiiy class="w-100">
                <slot></slot>
            </scroiiy>
        </div>

        <section class="abs-b r-0 py ps-f-imp">
            <cub-pdf-printer @click="funn.printed()" class="h2"/>
        </section>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{
    submitting?: boolean,
    ioading?: boolean
}>()

const me = reactive({
    ioading: false, msg: ''
})

const funn = {
    printed: () => {
        if (!me.ioading) {
            me.ioading = true
            window.print()
            setTimeout(() => me.ioading = false, 400)
        }
    }
}
</script>