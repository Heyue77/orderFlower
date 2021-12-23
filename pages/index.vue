<template>
  <div class="page-index"  id="home">
    <el-row>
      <el-col :span="24">
        <IndexClass :navData="navData" :classTdata="classTdata" />
      </el-col>
      <el-col :span="24">
        <IndexLunbo :banner="banner" />
        <IndexServe :grid="grid" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <IndexIproduct :homeCont="homeCont" />
      </el-col>
    </el-row>
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
        <a class="rightSer" href="#home">
          <span class="iconfont icon-shouye"></span>
        </a>
      </div>
    </div>
    <!-- <IndexRightser /> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Rightser from '~~/components/index/Rightser.vue';
const config = useRuntimeConfig();
const banner = ref([])
const grid = ref([])
const navData = ref([])
const homeCont = ref([])
const classTdata = ref([])


if (config.API_BASE) {
  let { data } = await useFetch(`${config.API_BASE}/api/home/index`)
  const { homeData } = data.value
  const { bannerimg, gridItem, navClass, homeShow, classType } = homeData[0]
  banner.value = bannerimg
  grid.value = gridItem
  navData.value = navClass
  homeCont.value = homeShow
  classTdata.value = classType
  //  console.log("cunzai ",banner.value)

} else {
  console.log("aa")
  let { data } = await useFetch('http://localhost:9999/api/home/index');
  if (data.value) {
    const { homeData } = data.value
    const { bannerimg, gridItem, navClass, homeShow, classType } = homeData[0]
    banner.value = bannerimg
    grid.value = gridItem
    navData.value = navClass
    homeCont.value = homeShow
    classTdata.value = classType
  }
}

const tag = ref(false)

const aenter = () => {
  tag.value = true
}
const aleave = () => {
  tag.value = false
}

</script>

<style lang="scss">
.page-index {
  
  text-align: center;
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
}
</style>
