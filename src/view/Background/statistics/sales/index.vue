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
      <el-table @selection-change="selectChange" style="margin: 10px 0px;" border :data="userArr">
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column label="#" align="center" type="index"></el-table-column>
        <el-table-column label="ID" align="center" prop="id"></el-table-column>
        <el-table-column label="用户名字" align="center" prop="username" show-overflow-tooltip></el-table-column>
        <el-table-column label="用户名称" align="center" prop="name" show-overflow-tooltip></el-table-column>
        <el-table-column label="用户角色" align="center" prop="roleName" show-overflow-tooltip></el-table-column>
        <el-table-column label="创建时间" align="center" prop="createTime" show-overflow-tooltip></el-table-column>
        <el-table-column label="更新时间" align="center" prop="updateTime" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作" width="300px" align="center">
          <template #="{ row, $index }">
            <el-button type="primary" size="small" icon="User" @click="setRole(row)">分配角色</el-button>
            <el-button type="primary" size="small" icon="Edit" @click="updateUser(row)">编辑</el-button>
            <el-popconfirm :title="`你确定要删除${row.username}?`" width="260px" @confirm="deleteUser(row.id)">
              <template #reference>
                <el-button type="primary" size="small" icon="Delete">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const radio1 = ref(0)
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