<template>
  <div class="whole">
    <div class="top">
      <el-menu default-active="/my_information" class="el-menu-demo" mode="horizontal" router :ellipsis="false">
        <el-menu-item index="/my_information" class="nav">个人信息</el-menu-item>
        <el-menu-item index="/authentication" class="nav">卖家认证</el-menu-item>
        <el-menu-item index="/my_order" class="nav">我的订单</el-menu-item>
        <el-sub-menu class="nav">
          <template #title>我的店铺</template>
          <el-menu-item index="/my_store">商品列表</el-menu-item>
          <el-menu-item index="/hang_out">新增商品</el-menu-item>
          <el-menu-item index="/statistics">数据统计</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    <el-card class="main">
      <router-view></router-view>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
// 个人信息

// 卖家认证

// 订单

// 店铺
//------- 查看（撤销）
//------- 挂出
//------- 数据统计
</script>
<style lang="scss" scoped>
.whole {
  .top {
    width: 100%;
    padding: 10px 0;

    .el-menu {
      width: 80%;
      height: 40px;
      margin: auto;

      .nav {
        width: 25%;
      }
    }
  }
}
</style>