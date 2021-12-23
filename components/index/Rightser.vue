<template>
    <div class="side">
        <div>
            <a href="#" class="rightSer">
                <span class="telephone">400-060-1521</span>
                <span class="iconfont icon-dianhua"></span>
            </a>
        </div>
        <div>
            <a class="rightSer" href="#">
                <span class="iconfont icon-kefu"></span>
            </a>
        </div>
        <div>
            <a class="rightSer" @mouseenter="aenter" @mouseleave="aleave">
                <span class="iconfont icon-erweima"></span>
            </a>
        </div>
        <div class="r-erCode" v-if="tag">
            <img src="@/assets/img/ercode.jpg" alt />
            <span>微信扫码关注</span>
        </div>
        <div>
            <a class="rightSer" >
                <span class="iconfont icon-shouye" @click="goHome"></span>
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props=defineProps({
    home:{
        type:String,
        default:()=>{
            return ''
        }
    }
})
const tag = ref(false)

const aenter = () => {
    tag.value = true
}
const aleave = () => {
    tag.value = false
}
</script>

<style lang="scss">
.side {
    width: 30px;
    position: fixed;
    right: 0px;
    top: 0px;
    background-color: #b89485;
    height: 100%;
    z-index: 10;
    padding: 200px 0;
    // position: relative;
    .r-erCode {
        position: absolute;
        top: 270px;
        left: -105px;
        background-color: #fff;
        width: 100px;
    }
    div {
        margin: 10px 0;
        a.rightSer {
            display: inline-block;
            text-decoration: none;
            color: #fff !important;
            position: relative;
            .telephone {
                position: absolute;
                top: -11px;
                left: -111px;
                display: none;
                background-color: #fff;
                padding: 5px;
                color: #333;
                font-size: 16px;
                // p{
                //   padding: 0!important;
                //   margin:0!important;
                // }
            }
            .rCode {
                display: none;
                position: absolute;
                top: -11px;
                left: -111px;
            }

            &:hover .telephone {
                display: block;
            }
            span {
                color: #fff;
                font-size: 27px;
            }
        }
    }
}
</style>