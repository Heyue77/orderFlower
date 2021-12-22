<template>
    <div>
        <div class="m-foot">
            <el-row class="container">
                <el-col :span="5">
                    <img src="@/assets/img/logo.png" />
                </el-col>
                <el-col :span="4">
                    <dt>热门导航</dt>
                    <dd>
                        <nuxt-link to="/">网站首页</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to="/">爱情鲜花</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to="/">订单查询</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to="/">全部商品</nuxt-link>
                    </dd>
                </el-col>
                <el-col :span="5" class="fline">
                    <dt>客户服务</dt>
                    <dd class="sline">
                        <nuxt-link to="/helpCenter?el=关于我们&til=公司简介">关于我们</nuxt-link>
                        <nuxt-link to="/helpCenter?el=配送说明&til=购买须知">配送说明</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to="/helpCenter?el=服务声明&til=服务声明">服务声明</nuxt-link>
                        <nuxt-link to="/helpCenter?el=售后服务&til=售后保障">售后服务</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to="/helpCenter?el=订花流程'&til=购买须知">订花流程</nuxt-link>
                        <nuxt-link to="/helpCenter?el=隐私条款&til=服务声明">隐私条款</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to="/helpCenter?el=支付方式&til=购买须知">支付方式</nuxt-link>
                        <nuxt-link to="/helpCenter?el=联系我们&til=公司简介">联系我们</nuxt-link>
                    </dd>
                </el-col>
                <el-col :span="7">
                    <dt>联系我们</dt>
                    <dd>
                        <nuxt-link to="/">意见反馈</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to="/">工作时间：07:00-23:00</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to="/">7*24小时在线订购</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to="/">全国热线：400-060-1521</nuxt-link>
                    </dd>
                </el-col>
                <el-col :span="3">
                    <img src="@/assets/img/ercode.jpg" class="fcodeborder" />
                    <div class="fcode">扫码关注微信</div>
                </el-col>
            </el-row>
        </div>
        <div class="conf">Copyright©2020 无锡氧星科技有限公司</div>
        <div class="conf">苏ICP备07504282号-2</div>
    </div>
</template>


<style lang="scss" src="@/assets/css/public/foot/foot.scss"></style>