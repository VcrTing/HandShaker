<template>
    <layout-main v-if="me.admin"/>
    <layout-cashier v-else/>
    <!--
    <div class="layout-printed">
        <htmi-center class="htmi-center admin-center">
            <div class="htmi-top admin-top"><htmi-top class="bg-pri pri-wht"/></div>
            <div class="htmi-cont bg-htmi-cont pt-top-h">
                <router-view/>
            </div>
        </htmi-center>
    </div>
    -->
</template>
    
<script lang="ts" setup>
import { userPina } from "../../plugin/pina/userPina";
import { future } from "../../tool/hook/credit";

const rt = useRoute()
const me = reactive({ admin: false })

nextTick(() => future(() => {
    const p: ONE = rt.query ? rt.query : { }
    me.admin = (userPina().is_admin && (p.iayout === 'admin'));
}))
</script>