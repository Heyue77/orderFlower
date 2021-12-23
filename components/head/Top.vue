<template>
    <div class="m-header-top container">
        <el-row>
            <el-col :span="15">
                <div class="left">
                    <p>嗨，欢迎来氧气花园！</p>
                    <a href="#">
                        <span class="iconfont icon-weixin"></span>
                        <span>关注微信</span>
                        <img src="@/assets/img/ercode.jpg" class="ecode" />
                    </a>
                </div>
            </el-col>
            <el-col :span="9">
                <div v-if="user.login " class="top-block">
                    <p>
                        亲爱的
                        <span class="top-username">{{ user.name}}</span>,终于等到你~
                        <span class="iconfont icon-morentupian_xiaolian_yiqueren"></span>
                        <span class="line">|</span>
                    </p>
                </div>
                <div v-else class="top-block">
                    <nuxt-link to="/userLogin">你好,请登录</nuxt-link>
                    <span class="line">|</span>
                    <nuxt-link to="/register">免费注册</nuxt-link>
                    <span class="line">|</span>
                </div>

                <nuxt-link to="/order">我的订单</nuxt-link>
                <span class="line">|</span>
                <nuxt-link to="/cart">
                    <span class="iconfont icon-gouwuchekong"></span>
                    购物车(0)
                </nuxt-link>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const tag = ref(null)
const userName = ref('')
const { user } = useUser();
if (user.value.name!=null) {
    tag.value = true
    userName.value = user.value.name
}else{
    tag.value=false
}


</script>

<style src="@/assets/css/public/header/top.scss" lang="scss">
</style>