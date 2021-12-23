<template>
    <div class="m-header">
        <HeadTop></HeadTop>
        <div class="m-header-cont">
            <el-row class="container">
                <el-col :span="5">
                    <nuxt-link to="/">
                        <img src="@/assets/img/logo.png" alt class="logo" />
                    </nuxt-link>
                </el-col>
                <el-col :span="13">
                    <div v-if="stag">
                        <HeadHsearch></HeadHsearch>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="m-phone">
                        <span class="iconfont icon-dianhua"></span>
                        <span>400-060-1521</span>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>


<script setup>

const props = defineProps({
    stag: {
        type: Boolean,
        default: () => {
            return false
        }
    }
})

</script>

<style  src="@/assets/css/public/header/index.scss" lang="scss">
</style>
