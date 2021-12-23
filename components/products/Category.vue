<template>
  <div class="category">
    <!--<el-row>
  <el-col :span=4>用途
        
    </el-col>
    <el-col :span=20>1</el-col>
</el-row>
<el-row>
    <el-col :span=4>花材</el-col>
    <el-col :span=20>2</el-col>
</el-row>
<el-row>
    <el-col :span=4>类别</el-col>
    <el-col :span=20>3</el-col>
</el-row>
<el-row>
    <el-col :span=4>枝数</el-col>
    <el-col :span=20>4</el-col>
    </el-row>-->
    <div class="topType">
      <dl class="type">
        <dt>用途</dt>
        <dd>爱情鲜花</dd>
        <dd>生日鲜花</dd>
        <dd>友情鲜花</dd>
        <dd>探病问候</dd>
        <dd>道歉鲜花</dd>
        <dd>问候长辈</dd>
        <dd>感谢老师</dd>
        <dd>哀思鲜花</dd>
        <dd>商务鲜花</dd>
        <dd>菊花</dd>
        <dd>其他</dd>
      </dl>
      <dl class="type">
        <dt>花材</dt>
        <dd>玫瑰</dd>
        <dd>百合</dd>
        <dd>康乃馨</dd>
        <dd>向日葵</dd>
        <dd>满天星</dd>
        <dd>郁金香</dd>
      </dl>
      <dl class="type">
        <dt>类别</dt>
        <dd>花束</dd>
        <dd>礼盒</dd>
        <dd>蛋糕</dd>
        <dd>花篮</dd>
        <dd>绿植</dd>
        <dd>周花</dd>
        <dd>手提花篮</dd>
        <dd>桌花</dd>
        <dd>其他</dd>
      </dl>
      <dl class="type noBorder">
        <dt>枝数</dt>
        <dd>11枝</dd>
        <dd>19枝</dd>
        <dd>21枝</dd>
        <dd>33枝</dd>
        <dd>52枝</dd>
        <dd>66枝</dd>
        <dd>99枝</dd>
        <dd>其他</dd>
      </dl>
    </div>
    <div class="bottomType">
      <dl class="type noBorder last-dl">
        <dt>综合排序</dt>
        <dd>销量</dd>
        <dd>最新</dd>
        <dd>价格</dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.topType,.bottomType{
    margin-bottom: 10px;
}
.type {
  width: 1200px;
  display: flex;
  border-bottom: 1px dashed #ccc;

  margin: 0;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;

  dt {
    margin-right: 40px;
  }
  dd {
    margin: 0;
    margin-right: 30px;
  }
}
.last-dl{
    padding: 10px;
}
.noBorder {
  border: none;
}
</style>