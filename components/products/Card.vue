<template>
    <div>
        <el-card :body-style="{ padding: '10px'}">
            <img src="../../assets/img/浪漫满屋01.jpg" class="image" />
            <div class="card" style="padding: 0px">
              <p class="title">浪漫满屋</p>
              <div class="bottom">
                <p class="price fl">￥298</p>
                <span class="saleCount fr">销量100笔</span>
              </div>
            </div>
          </el-card>
    </div>
</template>

<style lang="scss" scoped>
 .image {
    width: 100%;
    height: 100%;
    display: block;
  }
.card {
    .title {
      font-size: 15px;
    }
    .bottom {
      height: 30px;
      margin-top: 4px;
      .price {
        margin: 0;
        color: #f43;
        font-weight: 600;
        font-size: 18px;
      }
      .saleCount {
        font-size: 12px;
        height: 30px;
        line-height: 30px;
        color: #999;
      }
    }
  }
</style>
