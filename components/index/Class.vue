<template>
    <div class="h-nav">
        <el-row class="nav">
            <el-col :span="5">
                <div class="all">
                    全部商品分类
                    <span class="iconfont icon-xiangxia2" @click="shouf"></span>
                    <div class="fclass">
                        <div class="fite" v-for="item in classTdata" :key="item">
                            <span class="title">{{ item.class }}</span>
                            <div class="f-cont">
                                <nuxt-link
                                    v-for="type in item.cont"
                                    :key="type"
                                    :to="{path:'products',query:{type:type}}"
                                >{{ type }}</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="18" class="flower">
                <nuxt-link
                    :to="{ path: '/products', query: { type: item } }"
                    v-for="item in navData"
                    :key="item"
                >{{ item }}</nuxt-link>
            </el-col>
        </el-row>
    </div>
</template>


<script setup>
const props = defineProps({
    navData: {
        type: Array,
        default: () => {
            return []
        }
    },
    classTdata: {
        type: Array,
        default: () => {
            return []
        }
    }
})



</script>

<style lang="scss">
.h-nav {
    background-color: #fff;
    margin-top: -1px;
    .nav {
        height: 40px;
        line-height: 40px;
        margin: 0 85px !important;

        .all {
            position: relative;
            .fclass {
                position: absolute;
                top: 42px;
                left: 0;
                width: 198px;
                background-color: #fff;
                z-index: 999;
                padding: 10px;
                .fite {
                    text-align: left;
                    .title {
                        margin-left: 5px;
                        color: #333;
                    }
                }
                .f-cont {
                    text-align: left;
                    line-height: 20px !important;
                    a {
                        font-size: 14px;
                        color: #aaa;
                        margin: 5px;
                        text-decoration: none;
                        &:hover {
                            color: #b89485;
                        }
                    }
                }
            }
            div {
                // padding-left: 20px;
                .iconfont {
                    margin-left: 80px;
                }
            }
            width: 218px;
            font-size: 16px;
            color: white;
            background-color: #b89485;
            margin-right: 20px;
        }
        .flower {
            font-size: 16px;
            text-align: left;
            a {
                font-weight: bold;
                padding: 0 20px;
                text-decoration: none;
                color: #333;
                &:hover {
                    text-decoration: none;
                    color: #b89485;
                }
            }
        }
    }
}
</style>