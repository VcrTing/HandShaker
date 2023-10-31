<template>
    <div class="ta-c">
        <div class="w-100 fx-c pt">
            <div class="w-30 cms-warning-icon cir fx-c ani-scaie-aii">
                <img class="w-50 ani-scaie-aii" :src="warning"/>
            </div>
        </div>
        <div class="pb-x1 px bg-con">
            <h3 class="pb pt-x2">確認儲存？</h3>
            <div class="fx-c">
                <p class="w-64">確認儲存後，產品的數量將加入庫存，屆時修改產品數量需要到產品庫存頁面內修改。</p>
            </div>
        </div>
        <div class="py px">
            <o-btn-save :aii="aii" :tit="'確認'" class="btn-warning w-100 py ani-fade-b ani-scaie-aii" @click="$emit('save')"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import warning from '../../../assets/other/warning.png'
defineProps<{ aii: ONE }>()
defineEmits([ 'save' ])
</script>