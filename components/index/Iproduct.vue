<template>
  <!-- <div>{{list[0].icon}}1111111</div> -->
  <div class="prolist" v-for="item in homeCont" :key="item.class">
    <div class="title">
      <span class="iconfont icon-huahonghuazhiwuhuaduo"></span>
      <span class="iconfont icon-shuxian"></span>
      <span class="t-title">{{ item.class }}</span>
      <!-- <img :src="item.class" alt /> -->
    </div>
    <div class="more">
      <nuxt-link to="#">
        <span>查看更多></span>
      </nuxt-link>
    </div>
    <div class="contain">
      <el-row>
        <el-col :span="3.5" class="left">
          <nuxt-link to="/#">
            <div class="left_image">
              <img :src="item.leftImg" alt />
            </div>
          </nuxt-link>
        </el-col>
        <el-col :span="19" class="right">
          <el-row>
            <el-col :span="6" v-for="item2 in item.rightItem" :key="item2.img">
              <nuxt-link :to="{path:'detail',query:{name:item2.name}}">
                <el-card :body-style="{ padding: '0px' }" class="card" shadow="hover">
                  <img :src="item2.img" alt class="image" />
                  <div class="info" style="padding: 14px">
                    <span>{{ item2.name }}</span>
                    <div class="price">
                      <p>{{ item2.price }}</p>
                      <span>销量{{ item2.sales }}笔</span>
                    </div>
                  </div>
                </el-card>
              </nuxt-link>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.prolist {
  margin: 20px 85px !important;
  .title {
    float: left;
    font-size: 20px;
    padding: 5px 0;
    line-height: 20px;
    overflow: hidden;
    
    .t-title ,.icon-shuxian{
      color: #b89485;
      line-height: 30px;
      font-weight: 700;
      margin-top: -5px;
      float: left;
    }
    .icon-shuxian{
      font-size: 25px;
    }
    .icon-huahonghuazhiwuhuaduo{
      font-size: 25px;
      font-weight: 500;
      margin-bottom: -5px;
      color:#d11e27;
      float: left;
    }
  }
  .more {
    a {
      &:hover {
        text-decoration: none;
      }
    }
    float: right;
    span {
      color: #666;
      font-size: 14px;
      margin-right: 20px;
    }
  }
  .contain {
    clear: both;
    .left {
      .left_image {
        width: 232px;
        height: 650px;
        overflow: hidden;
        img {
          transition: all 0.3s ease-in;
          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }
    .right {
      a {
        &:hover {
          text-decoration: none;
        }
        .card {
          &:hover {
            transform: scale(1.05);
          }
          padding: 6px;
          margin-left: 5px;
          margin-bottom: 20px;
          .image {
            width: 215px;
            // margin-left: 5px;
          }
          .info {
            span {
              font-size: 15px;
              margin-top: 8px;
              color: #666;
            }
            .price {
              padding: 15px 0;
              p {
                color: #f43;
                font-weight: 600;
                font-size: 18px;
                float: left;
              }
              span {
                font-size: 12px;
                color: #999;
                float: right;
              }
            }
          }
        }
      }
    }
  }
}
</style>

<script setup>
import { ref } from "vue";
const list = ref([
  {
    class: "爱情鲜花",
    icon: "https://cs.dinghuale.com/uploads/20200624/202006241318265370.png",
    leftImg: "https://cs.dinghuale.com/uploads/20200624/202006241117412831.jpg",
    rightItem: [
      {
        img: "https://upyun.dinghuale.com/uploads/20200630/202006301617407670.jpg",
        name: "浪漫满屋",
        price: "￥263",
        sales: 17229,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20210426/202104260950064701.jpg",
        name: "此生不渝",
        price: "￥193",
        sales: 16256,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20210426/202104261052034321.jpg",
        name: "粉色公主",
        price: "￥194",
        sales: 14875,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20201026/202010260915414084.jpg",
        name: "永恒回忆",
        price: "￥343",
        sales: 16022,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20210519/202105191204581151.jpg",
        name: "为你心动",
        price: "￥367",
        sales: 16877,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20210426/202104261306508528.jpg",
        name: "如约而至",
        price: "￥574",
        sales: 15598,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20210426/202104261339329479.jpg",
        name: "你是唯一",
        price: "￥758",
        sales: 12821,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200826/202008261128401632.jpg",
        name: "幸福之约",
        price: "￥689",
        sales: 13459,
      },
    ],
  },
  {
    class: "友情鲜花",
    icon: "https://cs.dinghuale.com/uploads/20200624/202006241318424882.png",
    leftImg: "https://cs.dinghuale.com/uploads/20200624/202006241319037651.jpg",
    rightItem: [
      {
        img: "https://upyun.dinghuale.com/uploads/20201208/202012081501255872.jpg",
        name: "温暖阳光",
        price: "￥309",
        sales: 12710,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200630/202006301623486849.jpg",
        name: "恋恋情深",
        price: "￥229",
        sales: 11522,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200630/202006301514481588.jpg",
        name: "不忘初心",
        price: "￥217",
        sales: 10548,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20210426/202104261310519646.jpg",
        name: "满天繁星",
        price: "￥344",
        sales: 14598,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20210426/202104261056513801.jpg",
        name: "美丽心情",
        price: "￥275",
        sales: 7548,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20210426/202104261138142574.jpg",
        name: "你的笑靥",
        price: "￥309",
        sales: 7895,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200713/202007131442249878.jpg",
        name: "相依相伴",
        price: "￥320",
        sales: 6985,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200708/202007081525027185.jpg",
        name: "一生有你",
        price: "￥447",
        sales: 8454,
      },
    ],
  },
  {
    class: "鲜花礼盒",
    icon: "https://cs.dinghuale.com/uploads/20200624/202006241319241592.png",
    leftImg:
      "https://upyun.dinghuale.com/uploads/20201019/202010191328128403.jpg",
    rightItem: [
      {
        img: "https://upyun.dinghuale.com/uploads/20200826/202008261130205022.jpg",
        name: "幸福守候",
        price: "￥275",
        sales: 15632,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200630/202006301719514798.jpg",
        name: "绵绵情谊",
        price: "￥275",
        sales: 11897,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200707/202007071003531298.jpg",
        name: "挚爱一生",
        price: "￥217",
        sales: 9856,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200630/202006301732128936.jpg",
        name: "亲密无间",
        price: "￥275",
        sales: 12248,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200630/202006301737379714.jpg",
        name: "全心全意",
        price: "￥217",
        sales: 12354,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200818/202008181659388005.jpg",
        name: "一生所爱",
        price: "￥390",
        sales: 11366,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200713/202007131620544163.jpg",
        name: "爱情时光",
        price: "￥413",
        sales: 8957,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20210426/202104261257415133.jpg",
        name: "缘分天空",
        price: "￥390",
        sales: 13960,
      },
    ],
  },
  {
    class: "开业花篮",
    icon: "https://cs.dinghuale.com/uploads/20200624/202006241319423049.png",
    leftImg: "https://cs.dinghuale.com/uploads/20200624/202006241326302151.jpg",
    rightItem: [
      {
        img: "https://upyun.dinghuale.com/uploads/20200629/202006291536431010.jpg",
        name: "大吉大利（一对）",
        price: "￥297",
        sales: 10245,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200629/202006291732318324.jpg",
        name: "喜气迎门（一对）",
        price: "￥377",
        sales: 11897,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200629/202006291712209904.jpg",
        name: "生意兴隆（一对）",
        price: "￥459",
        sales: 11265,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200629/202006291551446068.jpg",
        name: "好运连连（一对）",
        price: "￥458",
        sales: 10711,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200629/202006291728114941.jpg",
        name: "喜气洋洋（一对）",
        price: "￥436",
        sales: 7698,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200629/202006291709582518.jpg",
        name: "张灯结彩（一对）",
        price: "￥573",
        sales: 8736,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200628/202006281521087286.jpg",
        name: "开业大卖",
        price: "￥413",
        sales: 6358,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200629/202006291723422114.jpg",
        name: "万事如意（一对）",
        price: "￥654",
        sales: 5512,
      },
    ],
  },
  {
    class: "绿植",
    icon: "https://cs.dinghuale.com/uploads/20200624/202006241319599360.png",
    leftImg: "https://cs.dinghuale.com/uploads/20200624/202006240927558865.jpg",
    rightItem: [
      {
        img: "https://upyun.dinghuale.com/uploads/20200623/202006231630429791.jpg",
        name: "辫子发财树盆栽",
        price: "￥620",
        sales: 2549,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200623/202006231727316935.jpg",
        name: "单柱发财树盆栽",
        price: "￥562",
        sales: 4563,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200623/202006231216548078.jpg",
        name: "绿宝盆栽",
        price: "￥455",
        sales: 845,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200623/202006231241078043.jpg",
        name: "天堂鸟盆栽",
        price: "￥758",
        sales: 1125,
      },

      {
        img: "https://upyun.dinghuale.com/uploads/20200623/202006231759215799.jpg",
        name: "落地大富贵竹",
        price: "￥504",
        sales: 2312,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200623/202006231723354886.jpg",
        name: "三株鸿运当头盆栽",
        price: "￥654",
        sales: 2376,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200623/202006231652049943.jpg",
        name: "虎皮兰盆栽",
        price: "￥447",
        sales: 2335,
      },
      {
        img: "https://upyun.dinghuale.com/uploads/20200624/202006240941393839.jpg",
        name: "心叶藤盆栽",
        price: "￥493",
        sales: 1211,
      },
    ],
  },
]);

const props = defineProps({
  homeCont: {
    type: String,
    default: () => {
      return []
    }
  }
})
console.log(props.homeCont, "homeCont")
</script>