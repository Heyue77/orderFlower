<template>
    <div class="m-header-top container">
        <el-row>
            <el-col :span="16">
                <div class="left">
                    <p>嗨，欢迎来氧气花园！</p>
                    <a href="#">
                        <span class="iconfont icon-weixin"></span>
                        <span>关注微信</span>
                        <img src="@/assets/img/ercode.jpg" class="ecode" />
                    </a>
                </div>
            </el-col>
            <el-col :span="8">
                <nuxt-link to="/login">你好,请登录</nuxt-link>
                <span class="line">|</span>
                <nuxt-link to="/register">免费注册</nuxt-link>
                <span class="line">|</span>
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

<style src="@/assets/css/public/header/top.scss" lang="scss">
</style>