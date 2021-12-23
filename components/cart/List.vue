<template>
    <el-table :data="cartData">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="name" label="项目" width="232" />
        <el-table-column prop="oldprice" label="市场价" width="232" />
        <el-table-column prop="newprice" label="店铺价" width="232" />

        <el-table-column label="数量" width="232">
            <!--自定义表格-->
            <template #default="scope">
                <!--双向绑定数据，表示绑定当前一行的个数。这边实际绑定的是父亲传递过来的cart，但是因为修改的是cart里面的信息，而不是修改cart本身，所以不会报错-->
                <el-input-number v-model="scope.row.count" :min="0" />
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <div @click="deleteitem()">删除</div>
        </el-table-column>
    </el-table>
</template>

<script setup>

const props = defineProps({
    cartData: {
        type: Array,
        default: () => {
            return []
        }
    }
})
const deleteitem = () => {

    console.log("删除购物车")
}
</script>
