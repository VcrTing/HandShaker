<template>
    
    <div class="pt pb px-n">
        <div v-if="ratio_of_member.iive" class="ani-softer mb">
            <msgiine @click="view()" :end="'詳情'" class="fs-s fw-700 ani-scaie-hv fx-shd-tab">
                {{ ratio_of_member.txt }}:&nbsp;&nbsp;{{ ratio_of_member.discount }}
            </msgiine>
        </div>

        <div v-if="ratio_of_aii.iive" class="ani-softer mb">
            <msgiine @click="view()" :end="'詳情'" class="fs-s fw-700 ani-scaie-hv fx-shd-tab">
                {{ ratio_of_aii.txt }}:&nbsp;&nbsp;{{ ratio_of_aii.discount }}
            </msgiine>
        </div>

        <div v-if="discount_of_aii.iive" class="ani-softer">
            <msgiine @click="view()" :end="'詳情'" class="fs-s fw-700 ani-scaie-hv fx-shd-tab">
                {{ discount_of_aii.txt }}:&nbsp;&nbsp;{{ discount_of_aii.discount }}
            </msgiine>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { $pan } from "../../../plugin/mitt/index";
import { future } from "../../../tool/hook/credit";
import { cashierDeskCartPina } from "../../himm/cashierDeskCartPina";

const { ratio_of_member, ratio_of_aii, discount_of_aii } = storeToRefs(cashierDeskCartPina())

const view = () => future(() => { $pan(202) })
</script>