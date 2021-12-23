<template>
    <el-row class="page-product">
        <el-col :span="24">
            <ProductsCrumbs />
            <ProductsCategory />
            <ProductsList />
        </el-col>
    </el-row>
</template>

 <style lang="scss" scoped>
.page-product{
    width: 100%;
    height: 100%;
    // background-color: #fff;
}
</style>
