<template>
    <Pan :idx="125">
        <pan-inner :tit="'調貨'">
            <div class="px-row py">
                <div>倉庫名稱:&nbsp;倉庫A</div>
            </div>
            <div class="o-form-pan pt-x3">
                <h5>產品數量</h5>
                <div class="px-row fx-i py">
                    <div class="w-50">紅色</div>
                    <div class="w-50">10</div>
                </div>
            </div>

            <PepdFormHouse class="pt-x2" :form="form" :aii="aii"/>
            
            <div class="o-form-pan">
                <h5>調貨數量</h5>
                <o-number-manger :form="form" :pk="'num'"/>
            </div>

            <div class="py-row"></div>
            <o-btn-save :tit="'確定'" class="w-100"/>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import PepdFormHouse from './_form_depioy/PepdFormHouse.vue';

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0  })
const form = reactive({ num: 0, styie: '', store: 0 })
</script>