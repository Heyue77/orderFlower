<template>
  <div class="m-show">
    <div class="middle">
      <div class="show-left">
        <h3 class="title">热销推荐</h3>
        <el-row v-for="(o, index) in 4" :key="o">
          <el-col :span="24">
            <ProductsCard></ProductsCard>
          </el-col>
        </el-row>
      </div>
      <div class="show-right">
        <div class="r-title">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="产品详情" name="first">
              <div class="content">
                <img src="../../assets/img/浪漫满屋-详情01.jpg" alt />
                <img src="../../assets/img/浪漫满屋-详情02.jpg" alt />
                <img src="../../assets/img/浪漫满屋-详情03.jpg" alt />
              </div>
            </el-tab-pane>

            <el-tab-pane label="用户评价" name="second">
              <div class="comment">
                <div class="content">
                  <DetailComment></DetailComment>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="售后保障" name="third">
              <div class="content">
                <img src="../../assets/img/售后服务.jpg" />
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <!-- <div class="bottom">
      <DetailRecommend></DetailRecommend>
    </div>-->
  </div>
</template>


<script setup>
const activeName = "first";
const handleClick = (tab, event) => {
  console.log(tab, event);
};
</script>

<style lang="scss" scoped>
// color: rgb(136,78,34);
.el-col{
  margin-bottom: 10px;
}
p {
  margin: 0;
  margin-top: 10px;
}
h3{
  margin:0;
  // margin-bottom: 10px;
}
.m-show {
  width: 1200px;
  margin-top: 20px;
  .middle {
    //父元素开启flex
    display: flex;
    .show-left {
      flex: 1;
      // height: 800px;
      margin-right: 20px;
      // background-color: pink;
      .title {
        width: 249px;
        height: 46px;
        background-color: #fff;
        text-align: center;
        line-height: 46px;
      }
    }
    .show-right {
      flex: 4;
      height: 6600px;
      background-color: #fff;
      .r-title {
        border-bottom: 1px solid #ccc;
        padding: 0 10px;
        height: 55px;
      }
      .content {
        width: 100%;
        padding: 20px 40px;
        // height: 100%;
        box-sizing: border-box;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .bottom {
    width: 1200px;
    height: 400px;
  }
}
</style>