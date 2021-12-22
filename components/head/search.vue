<template>
    <div class="m-header-search">
        <el-input
            v-model="search"
            placeholder="请输入要搜索的关键字"
            @focus="focus"
            @blur="blur"
            @input="inputSearch"
        />
        <router-link
            :to="{ path: '/products', query: { name: search } }"
            class="el-button el-button--primary"
            tag="button"
            style="background:#b89485"
        >
            <span class="iconfont icon-sousuo"></span>
        </router-link>
        <!--热门搜索的导航-->
        <div class="suggset">
            <nuxt-link
                v-for="(item, index) in hotWord"
                :key="index"
                :to="{ path: '/products', query: { name: item } }"
            >{{ item }}</nuxt-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const search = ref('')


const focus=()=>{}
const blur=()=>{}
const inputSearch=()=>{}

const config = useRuntimeConfig();
const { hotWord } = usehotWord()


if (config.API_BASE) {
    let { data } = await useFetch(`${config.API_BASE}/api/home/`)
    const {homeData}=data.value
    hotWord.value=homeData[0].data[0].hotWord
    console.log(hotWord.value, "XXX")
} else {
    let { data } = await useFetch(`http://localhost:9999/api/home/`);
    console.log(data,"sss")
}

</script>

<style lang="scss" src="@/assets/css/public/header/search.scss">
</style>