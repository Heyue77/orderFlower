<template>
    <div class="m-help-nav">
        <el-table :data="tableData" style="width: 222px" border>
            <el-table-column label="帮助中心" width="221" align="center" style="color: #333">
                <!--自定义表格-->
                <template #default="scope">
                    <p class="stitle">{{ scope.row.title }}</p>
                    <li v-for="ite in scope.row.navItem" :key="ite.name">
                        <nuxt-link
                        :to="{ path: 'helpCenter', query: { el: ite.name, til: scope.row.title } }"
                           
                            @click="navClick(ite.name, scope.row.title)"
                            :class="[tag == ite.name ? 'active' : '']"
                            
                        >{{ ite.name }}</nuxt-link>
                    </li>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { ref, getCurrentInstance, watch } from 'vue'
const { ctx } = getCurrentInstance()

const props = defineProps({
    tableData: {
        type: Array,
        default: () => {
            return []
        }
    },
    query: {
        type: Object,
        default: () => {
            return {}
        }
    }
})

const emit = defineEmits(['func'])
const tag = ref()

const navClick = (el, til) => {
    emit('func', el)
    props.tableData.map((item) => {
        item.navItem.map((ite, index) => {
            if (item.title === til && ite.name === el) {
                tag.value = ite.name;
            }
        })
    })
}

navClick('关于我们', '公司简介')

// console.log(props.query, "query")
navClick(props.query.el, props.query.til)

</script>
<style lang="scss" src="@/assets/css/help/nav.scss"></style>