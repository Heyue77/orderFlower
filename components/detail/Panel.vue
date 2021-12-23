<template>
  <div class="m-panel">
    <el-card :body-style="{ padding: '20px'}">   
          <DetailSlider></DetailSlider>
          <!-- <DetailSwiper></DetailSwiper> -->
      <div class="right fr">
        <div class="content">
          <h3 class>浪漫满屋</h3>
          <dl class="info">
            <dt>材料：</dt>
            <dd class="info-text">红玫瑰33枝，石竹梅外围点缀</dd>
          </dl>
          <dl class="info">
            <dt>包装：</dt>
            <dd class="info-text">白色棉纸内包，黑色包装纸外围圆形包装，红色丝带蝴蝶结</dd>
          </dl>
          <dl class="info">
            <dt>附送：</dt>
            <dd class="info-text">下单填写留言，免费赠送贺卡</dd>
          </dl>
          <dl class="info">
            <dt>配送：</dt>
            <dd class="info-text">全国送货上门，市区免运费</dd>
          </dl>
          <dl class="info">
            <dt>优惠卷：</dt>
            <dd class="info-text">暂无优惠卷</dd>
          </dl>

          <dl class="info deliveryTime">
            <dt>配送时间：</dt>
            <dd class="input-group">
              <input
                type="text"
                readonly
                class="layui-input"
                id="test1"
                style="width: 140px;"
                lay-key="1"
              />
            </dd>
            <dd>
              <select id="freight" class="selectInput">
                <option value="1">不限时间</option>
                <option value="2">8:00-10:00</option>
                <option value="3">10:00-12:00</option>
                <option value="4">12:00-14:00</option>
                <option value="5">14:00-16:00</option>
                <option value="6">16:00-18:00</option>
                <option value="7">18:00-20:00</option>
                <option value="8">20:00-22:00</option>
                <option value="15">上午</option>
                <option value="16">下午</option>
                <option value="17">晚上</option>
              </select>
            </dd>
            <dd>
              <select name id="transport" class="selectInput">
                <option value="0">市区免费配送</option>
                <option value="30.00">近郊+30.00运费</option>
                <option value="50.00">远郊+50.00运费</option>
              </select>
            </dd>
          </dl>
          <div class="info-price">
            <dl>
              <dt>店铺价：</dt>
              <dd class="sale">
                ￥
                <span id="sale-price">298</span>
              </dd>
            </dl>
            <dl>
              <dt>市场价：</dt>
              <dd class="market del">
                ￥
                <span id="market-price">359</span>
              </dd>

              <dd class="saleCount">
                销量
                <span class="count">16022</span>笔
              </dd>
            </dl>
          </div>
        </div>
      
        <div class="btn">
          <dl>
            <dt>数量：</dt>
            <dd>
              <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
            </dd>
            <dd class="button">
              <el-button class="addCart">加入购物车</el-button>
              <el-button class="buy">立即购买</el-button>
            </dd>
          </dl>
        </div>
      </div>     
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
    const num = ref(1)
    const handleChange = (value) => {
      console.log(value)
    }
</script>


<style lang="scss" scoped>
.fl {
  float: left;
}
.fr {
  float: right;
}
p {
  margin: 0;
}
.flex {
  display: flex;
}
.del {
  text-decoration: line-through;
}
  //修改el-card组件样式
  .el-card {
    width: 1200px;
    height: 574px;
    // display: flex;
    img {
      width: 400px;
      height: 400px;
    }
  }
.m-panel {
  width: 1200px;
  height: 574px;
  //   height: 100%;
  //   background-color: #fff;
  dl {
    display: flex;
    dd {
      margin-inline-start: 20px;
    }
  }
  .right {
    width: 700px;
    height: 526px;

    .content {
      width: 660px;
      height: 400px;
      border: 1px solid rgb(136, 78, 34);
      padding-left: 20px;

      h3 {
        margin-top: 10px;
      }

      .info {
        width: 500px;
        height: 22px;
        text-align: left;
        // margin-top: 10px;
        font-size: 14px;
        color: #666;
      }
      .deliveryTime {
        margin-bottom: 36px;
      }
      .info-price {
        width: 500px;
        height: 90px;
        background-color: rgb(240, 240, 240);
        overflow: hidden;
        padding-left: 10px;
        border-radius: 5px;
        // margin: 60px 0;
        .sale {
          color: #f43;
          font-weight: 600;
          font-size: 20px;
        }
        .saleCount {
          width: 300px;
          text-align: right;
          font-size: 14px;
          color: #666;
          .count {
            color: #f43;
          }
        }
      }
    }
    .btn {
      width: 660px;
      height: 60px;
      margin-top: 20px;
      padding-left: 40px;
      overflow: hidden;
      .button {
        margin-left: 180px;
        .addCart {
          border: 1px solid rgb(136, 78, 34);
        }
        .buy {
          background-color: rgb(136, 78, 34);
          color: #fff;
        }
      }
    }
  }
}
</style>