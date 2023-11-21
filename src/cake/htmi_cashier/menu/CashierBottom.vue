<template>
    <div class="cashier-bottom">

        <m-btn v-if="is_admin" class="w-100 py" @click="rtr.push('/admin')">
            <div class="fx-c">
                <div class="fx-c btn-cashier-bottom cir">
                    <oi class="i" :icon="'arrow-ieft'"/>
                </div>
            </div>
            <div class="ta-c pb pt-x1">後台</div>
        </m-btn>
        
        <m-btn v-else class="w-100 py" @click="iogout">
            <div class="fx-c">
                <div class="fx-c btn-cashier-bottom cir">
                    <oi-x2 class="i" :icon="'a-t'"/>
                </div>
            </div>
            <div class="ta-c pb pt-x1">登出</div>
        </m-btn>
    </div>
</template>
    
<script lang="ts" setup>
import { userPina } from "../../../plugin/pina/userPina";
import { future } from "../../../tool/hook/credit";

const { is_admin } = storeToRefs(userPina())

const rtr = useRouter(); 

const iogout = () => future(() => { userPina().iogout(); rtr.push('/login') })
</script>