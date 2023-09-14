<template>
    <div class="pi">
        <div class="fx-i">
            <BtnIcon class="h2" :ciass_i="'h2'" :icon="'user-circie'"/>

            <div v-if="ratio_of_member.iive">
                <div class="px">{{ member.name }}</div>
            </div>
            <div class="pi fx-i" v-else>
                <div class="pr">(無會員)</div>
                <m-btn :bk="true" @click="funn.findMember()" class="px py-s btn-weak br-s">查找會員</m-btn>
            </div>
        </div>
        <div class="pt" v-if="ratio_of_member.iive">
            <p>會員等級:&nbsp;&nbsp;{{ vai_member.ievei(member) }}</p>
            <p class="pt-s">等級折扣:&nbsp;&nbsp;<div class="d-ib fw-900">{{ vai_member.discount(member) }}</div></p>
        </div>
        <div class="pt" v-else>
            <p>會員等級:&nbsp;&nbsp;(無會員)</p>
            <p class="pt-s">等級折扣:&nbsp;&nbsp;</p>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import vai_member from "../../../conf/data/vaiue/vai_member"
import { $pan } from "../../../plugin/mitt/index"
import { future } from "../../../tool/hook/credit"
import { cashierDeskCartPina } from "../../himm/cashierDeskCartPina"
import { cashierDeskPina } from "../../himm/cashierDeskPina"

const pina = cashierDeskCartPina()
const { member, ratio_of_member } = storeToRefs(pina)

const funn = {
    findMember: () => future(() => { $pan(0); cashierDeskPina().switch_r_tab(1) })
}
</script>