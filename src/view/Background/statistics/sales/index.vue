<template>
  <el-card class="whole">
    <div class="top">
      <div class="left">
        <el-radio-group v-model="radio1" size="middle">
          <el-radio-button label="今日" value="0" />
          <el-radio-button label="昨天" value="1" />
          <el-radio-button label="本周" value="2" />
          <el-radio-button label="本月" value="3" />
        </el-radio-group>
      </div>
      <div class="center">
        <span class="demonstration">自定义时间：</span>
        <el-date-picker v-model="value1" type="datetimerange" start-placeholder="2024.05.31"
          end-placeholder="2024.06.10" :default-time="defaultTime1" />
      </div>
    </div>
    <div class="next">
      <div class="left">
        <span class="word">交易次数：</span>
        <span class="data">{{ 12 }}</span>
      </div>
      <div class="center">
        <span class="word">交易人数：</span>
        <span class="data">{{ 12 }}</span>
      </div>
      <div class="right">
        <span class="word">交易金额：</span>
        <span class="data">{{ 12 }}</span>
      </div>
    </div>
    <div class="main">
      <el-table @selection-change="selectChange" style="margin: 10px 0px;" border :data="data">
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column label="#" align="center" type="index"></el-table-column>
        <el-table-column label="订单ID" align="center" prop="id"></el-table-column>
        <el-table-column label="用户名字" align="center" prop="username" show-overflow-tooltip></el-table-column>
        <el-table-column label="店铺名称" align="center" prop="storeName" show-overflow-tooltip></el-table-column>
        <el-table-column label="交易金额" align="center" prop="amount" show-overflow-tooltip></el-table-column>
        <el-table-column label="创建时间" align="center" prop="createTime" show-overflow-tooltip></el-table-column>
        <el-table-column label="交易状态" align="center" prop="status" show-overflow-tooltip></el-table-column>
      </el-table>
    </div>
  </el-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const radio1 = ref(0)
const data = ref([
  {
    id: "19083784238899",
    username: "jieye",
    storeName: "小李的小店",
    amount: "1200",
    createTime: "2024-06-02",
    status: "已完成"
  },
  {
    id: "19083784238908",
    username: "william_wilson",
    storeName: "Home Appliances",
    amount: "2000",
    createTime: "2024-06-11",
    status: "已完成"
  },
  {
    id: "19083784238907",
    username: "olivia_brown",
    storeName: "Fashion Trends",
    amount: "3000",
    createTime: "2024-06-10",
    status: "已完成"
  },
  {
    id: "19083784238899",
    username: "jieye",
    storeName: "小李的小店",
    amount: "1200",
    createTime: "2024-06-02",
    status: "已完成"
  },
  {
    id: "19083784238900",
    username: "john_doe",
    storeName: "Fashion Hub",
    amount: "800",
    createTime: "2024-06-03",
    status: "已完成"
  },
  {
    id: "19083784238901",
    username: "emma_smith",
    storeName: "Tech Solutions",
    amount: "3500",
    createTime: "2024-06-04",
    status: "已完成"
  },
  {
    id: "19083784238902",
    username: "alex_jones",
    storeName: "Garden Paradise",
    amount: "250",
    createTime: "2024-06-05",
    status: "已完成"
  },
  {
    id: "19083784238903",
    username: "sarah_miller",
    storeName: "Beauty Emporium",
    amount: "1800",
    createTime: "2024-06-06",
    status: "已完成"
  },
  {
    id: "19083784238904",
    username: "james_williams",
    storeName: "Home Essentials",
    amount: "500",
    createTime: "2024-06-06",
    status: "已完成"
  },
  {
    id: "19083784238906",
    username: "michael_thomas",
    storeName: "Sports Zone",
    amount: "120",
    createTime: "2024-06-06",
    status: "已完成"
  }








])
</script>
<style lang="scss" scoped>
.whole {
  padding: 10px 20px;

  .top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    line-height: 40px;

    .left {}

    .center {
      font-size: 14px;
      line-height: 40px;
    }
  }

  .next {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;

    .word {}

    .data {
      color: red;
      font-style: italic;
    }
  }

  .main {}

}
</style>