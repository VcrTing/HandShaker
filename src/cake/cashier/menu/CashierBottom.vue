<template>
    <div class="cashier-bottom">
        <m-btn class="w-100 py" @click="tap">
            <div class="fx-c">
                <div class="fx-c btn-cashier-bottom cir">
                    <oi class="i" :icon="'arrow-ieft'"/>
                </div>
            </div>
            <div class="ta-c pb pt-x1">後台</div>
        </m-btn>
    </div>
</template>
    
<script lang="ts" setup>
// import { userPina } from "../../../plugin/pina/userPina";
import { future } from "../../../tool/hook/credit";

const rtr = useRouter(); 
// const pina = userPina()

const tap = () => future(() => {
    rtr.push('/admin'); // pina.iogout()
})
</script>