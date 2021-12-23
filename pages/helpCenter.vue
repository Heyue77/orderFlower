<template>
    <div class="m-help">
        <div class="container">
            <div class="help-ntop">首页 > 帮助中心</div>
            <el-row>
                <el-col :span="6">
                    <HelpNav
                        :tableData="tableData"
                        @func="getTitle"
                        :query="query"
                        :refrensh="refrensh"
                        :key="timer"
                    ></HelpNav>
                </el-col>
                <el-col :span="18" class="hborder">
                    <div class="hright">
                        <h2 class="h-title">{{ rtitle }}</h2>
                        <div v-html="rcont" class="rcont"></div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'


const route = useRoute()
// console.log(route.query, "qqu")
const query = ref(route.query)
const refrensh = ref(true);
const timer=ref('')

const config = useRuntimeConfig();
const tableData = ref([])
if (config.API_BASE) {
    let { data } = await useFetch(`${config.API_BASE}/api/home/help`)
    const { helpData } = data.value
    tableData.value = helpData

} else {
    let { data } = await useFetch(`/api/home/help`);
    if (data.value) {
        const { helpData } = data.value
        tableData.value = helpData
    }


}


//接收孩子数据
const rtitle = ref('')
const rcont = ref('')

const getTitle = (data) => {
    tableData.value.map((item) => {
        item.navItem.map((ite) => {
            if (ite.name === data) {
                rtitle.value = data;
                rcont.value = ite.content
            }
        })
    })
}
getTitle()



watch(() => route.query, (nque) => {
    // console.log("路由变了")
    refrensh.value = false;
    timer.value = new Date().getTime()
    query.value = nque;
    refrensh.value = true;
    getTitle()
    // console.log(rtitle.value, rcont.value)
})

</script>

<script >
export default {
    layout: 'blank'
}
</script>

<style lang="scss" src="@/assets/css/help/index.scss"></style>
