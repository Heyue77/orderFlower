<template>
    <div class="serve">
        <el-row>
            <el-col :span="4.8" v-for="item in list" :key="item.icon">
                <el-card :body-style="{ padding: '0px' }" class="card" shadow="hover">
                    <img :src="item.icon" class="image" />
                    <div class="info" style="padding: 14px;">
                        <span>{{ item.title }}</span>
                        <p>{{ item.info }}</p>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
    
<script setup>
import { ref } from 'vue'
const list = ref([
    {
        "icon": "https://upyun.dinghuale.com/uploads/images/nav1.png",
        "title": "知名鲜花电商",
        "info": "权威认证企业，深受用户喜爱"
    },
    {
        "icon": "https://upyun.dinghuale.com/uploads/images/nav2.png",
        "title": "品牌保证 口碑真实",
        "info": "累计好评50w+条"
    },
    {
        "icon": "https://upyun.dinghuale.com/uploads/images/nav3.png",
        "title": "鲜花实拍秀展示",
        "info": "敢展示派送前实拍的鲜花网"
    },
    {
        "icon": "https://upyun.dinghuale.com/uploads/images/nav4.png",
        "title": "快至1小时送达",
        "info": "保证新鲜 实时制作"
    },
    {
        "icon": "https://upyun.dinghuale.com/uploads/images/nav5.png",
        "title": "退赔承诺",
        "info": "值得信赖的售后服务保障"
    }
])
</script>


<style lang="scss" scoped>
.serve {
    margin: 20px 85px !important;
   .card{
       margin-left: 0px;
       :first-child{
           margin-left: 0;
       }
       .image {
        padding: 40px 72px 5px 72px;
        width: 80px;
    }
    .info {
        text-align: center;
        span {
            font-weight: 600;
            font-size: 16px;
        }
        p {
            font-size: 14px;
            color: #999;
            margin-bottom: 30px;
        }
    } 
   }
}
</style>