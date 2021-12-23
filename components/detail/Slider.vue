<template>
  <div class="slider">
    <el-carousel height="400px">
      <el-carousel-item v-for="item in list" :key="item.url">
        <img :src="item.img" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="scss" scoped>
.el-carousel {
  width: 400px;
  margin: 0;
  img {
    width: 400px;
    height: 400px;
  }
}
.slider {
  width: 400px;
  height: 400px;
  // margin: 0px;
  display: inline-block;
  // overflow: hidden;
}
</style>

<script setup>
import { ref } from "vue";
const list = ref([
  {
    url: "#abc",
    img: "../../assets/img/浪漫满屋01.jpg"
  },
  {
    url: "#bsbsb",
    img: "../../assets/img/浪漫满屋02.jpg"
  },
  {
    url: "#sjfkajfj",
    img: "../../assets/img/浪漫满屋01.jpg"
  }
]);
</script>