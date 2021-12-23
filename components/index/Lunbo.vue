<template>
  <div>
    <div class="slide">
      <!-- <button @click="getArtisticList()">111</button> -->
      <el-carousel height="350px">
        <el-carousel-item v-for="item in banner" :key="item">
          <img :src="item" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  banner: {
    type: Array,
    default: () => {
      return []
    }
  },
})
// console.log(props.banner, "banner")

const list2 = ref([
  "https://upyun.dinghuale.com/uploads/20211202/202112021026598995.jpg",
  "https://upyun.dinghuale.com/uploads/20210426/202104261423579213.jpg",
  "https://upyun.dinghuale.com/uploads/20201229/202012291153442076.jpg",
]);


</script>

<style scoped lang="scss">
.slide {
  border-top: 9px solid #b89485;
  cursor: pointer;
  img {
    height: 350px;
    width: 100%;
  }
}
</style>