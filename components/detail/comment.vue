<template>
  <div class="comment">
    <el-row v-for="(o, index) in 5" :key="o">
      <el-col :span="6">
        <div class="avatar">
          <img src="../../assets/img/userlog.png" />
          <!-- <el-avatar :icon="UserFilled"></el-avatar> -->
          <p class="userNum">147****1234</p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="text">一大束玫瑰花，老婆非常喜欢。花也很新鲜，推荐大家买</div>
      </el-col>
      <el-col :span="6">
        <div class="img-div">
          <img src="../../assets/img/买家秀.jpeg" />
        </div>
      </el-col>
    </el-row>
    <el-pagination background layout="prev, pager, next" :total="100" align="center"></el-pagination>
  </div>
</template>

<script setup>
// import { UserFilled } from '@element-plus/icons'
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
.el-row {
  width: 850px;
  height: 67px;
  padding: 30px 0;
  //   background-color: pink;
  box-sizing: content-box;
  margin-bottom: 20px;
  border-bottom: 1px dashed #ccc;
  &:nth-last-of-type() {
    border: none;
  }
  .el-col {
    margin: auto 0;
  }
}
.comment {
  //   width: 1200px;
  .avatar {
    display: flex;
    width: 40px;
    height: 40px;
    align-items: center;
    border-radius: 20px;
    border: 1px solid rgb(136, 78, 34);
    img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }
  }
  .text {
    height: 40px;
    line-height: 40px;
  }
  .img-div {
    width: 67px;
    height: 67px;
    line-height: 67px;
    border-radius: 2px;
    border: 1px solid rgb(136, 78, 34);
    img {
      width: 67px;
      height: 67px;
    }
  }
}
</style>