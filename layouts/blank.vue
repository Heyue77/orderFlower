<template>
    <el-container>
        <el-header height="176px">
            <HeadHindex></HeadHindex>
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

</script>
<style lang="scss">
  @import '@/assets/css/public/layout.scss';
</style>