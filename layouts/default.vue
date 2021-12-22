<template>
    <el-container>
        <el-header height="176px">
            <HeadHindex :stag="stag"></HeadHindex>
        </el-header>
        <el-main>
            <slot></slot>
        </el-main>
        <el-footer height="100%">
            <FootFindex></FootFindex>
        </el-footer>
    </el-container>
</template>


<script setup>
import {ref} from 'vue'
const stag=ref(true);

</script>
<style lang="scss">
  @import '@/assets/css/public/layout.scss';
</style>