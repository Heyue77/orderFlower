<template>
  <div class="recommend">
    <div class="title">相似产品</div>
    <div class="content">
      <el-row :gutter="70">
        <el-col v-for="o in 4" :key="o" :span="6">
          <ProductsCard></ProductsCard>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.recommend {
    width:1200px;
    //  overflow: hidden;
    
  .title {
      width:100%;
      height: 70px;
      line-height: 70px;
      text-align: center;
  }
  .content {
      width:100%;
      height: 322px;
    
      .image {
        width: 238px;
        height: 230px;
      }
    

  }
}
</style>