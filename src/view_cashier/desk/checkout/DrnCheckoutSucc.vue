<template>
    <co-desk-right-wrapper>
        <co-cashier-biiis-header :tit="'結算收款'"/>
        <div class="py-row">
            <div class="fx-c drn-cs-con">
                <div class="ta-c">
                    <h2>
                        <div class="fx-c">
                            <div class="cir drn-cs-icon px-x1 py-x1 fx-c">
                                <i class="fa-solid fa-check"></i>
                            </div>
                        </div>
                    </h2>
                    <div class="py">
                        <h3 class="pb pt-x1">收款成功</h3>
                        <h4 class="py">
                            <div class="fw-700 fs-2em">HKD&nbsp;
                                <DcTotiPriceNum/>    
                            </div>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        <o-save-back-btns-group class="abs-b pb"
            :tit_back="'打印票據'"
            :tit_save="'繼續收銀'"
            @back="funn.back()"
            @save="funn.save()"
        />
    </co-desk-right-wrapper>
</template>
    
<script lang="ts" setup>
import { future } from '../../../tool/hook/credit';
import { cashierDeskPina } from '../../himm/cashierDeskPina';
import DcTotiPriceNum from '../../desk_x3/comm/DcTotiPriceNum.vue';

const funn = {
    save: () => future(() => {
        cashierDeskPina().switch_r_page(0)
    }),
    back: () => future(() => {

    })
}
</script>