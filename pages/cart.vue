<template>
  <div class="page-cart">
    <el-row>
      <el-col v-if="tag" :span="24" class="m-cart">
        <!--购物车列表-->
        <CartList :cart-data="cart" />
        <p>
          应付金额：
          <em class="money">￥{{ total }}</em>
        </p>
        <!--提交订单按钮-->
        <div class="post">
          <el-button
            type="primary"
            @click="submit"
            style="background-color: #13d1be"
            >提交订单</el-button
          >
        </div>
      </el-col>
      <!--如果购物车为空-->
      <el-col v-else class="empty">购物车为空</el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const cart = ref([]);
const tag = ref(false);

const submit = () => {
  console.log("提交订单");
};

//获取购物车数据
let { data } = await useFetch("/api/cart/getCart", {
  server: false,
});
if (data.value) {
  cart.value = data.value;
  tag.value = true;
  console.log(data.value, "cartDataxxxxxxxxxxxxxxxxxxxxxxxxx");
  // cartDat.value = data.value
}
</script>

<style lang="scss">
@import "@/assets/css/cart/index.scss";
</style>