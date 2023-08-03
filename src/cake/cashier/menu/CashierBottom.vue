<template>
    <div class="cashier-bottom">
        <m-btn class="w-100 py" @click="pina.iogout()">
            <div class="fx-c">
                <div class="fx-c btn-cashier-bottom cir">
                    <oi class="i" :icon="'arrow-up'"/>
                </div>
            </div>
            <div class="ta-c pb pt-x1">登出</div>
        </m-btn>
    </div>
</template>
    
<script lang="ts" setup>
import { userPina } from "../../../plugin/pina/userPina";

const pina = userPina()
</script>