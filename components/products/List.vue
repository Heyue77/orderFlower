
<template>
  <div class="list">
    <el-row :gutter="10">
      <el-col v-for="(o, index) in 12" :key="o" :span="6">
        <ProductsCard></ProductsCard>
      </el-col>
    </el-row>
    <el-pagination background layout="prev, pager, next" :total="100" align="center"></el-pagination>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.fl {
  float: left;
}
.fr {
  float: right;
}
.list {
  width: 1200px;
  height: 100%;
  .el-col {
    margin-bottom: 10px;
  }
 
}
</style>



