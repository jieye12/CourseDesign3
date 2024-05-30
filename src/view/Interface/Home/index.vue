<template>
  <div class="whole">
    <!-- 导航栏 -->
    <div class="nav">
      <h1>物品交易平台</h1>
      <div class="right">
        <div class="logged" v-if="userLoginState">
          <div class="avatar">
            <img src="../../../assets/images/avatar.jpeg" alt="">
          </div>
          <!--  -->
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ "jieye" }}
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="goToPersonalCenter()">个人中心</el-dropdown-item>
              </el-dropdown-menu>
              <el-dropdown-menu>
                <el-dropdown-item @click="logout()">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div class="notLogged" v-else>
          <span>
            <router-link to="/login">登录 | 注册</router-link>
          </span>
        </div>
      </div>
    </div>
    <!-- 主体 -->
    <div class="main">
      <div class="center">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useUserStateStore } from '@/store/user';
const store = useUserStateStore()
const router = useRouter()
const { userLoginState } = store
const goToPersonalCenter = () => {
  router.push("/personal_center")
}
const logout = () => {
  router.push("/login")
}
</script>
<style lang="scss" scoped>
.whole {
  .nav {
    position: relative;
    height: $nav_height;
    line-height: $nav_height;
    text-align: center;
    background-color: #434343;
    color: #ffffff;

    .right {
      position: absolute;
      right: 30px;
      top: 0;

      .logged {
        display: flex;

        .avatar {
          padding: 5px 0;

          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
        }

        .el-dropdown {
          margin-left: 2px;
          padding: 0 20px;
          border: none;
          outline: none;

          :deep(.el-tooltip__trigger:focus-visible) {
            outline: unset;
          }

          span {
            display: inline-block;
            height: 50px;
            line-height: 50px;
            color: #ffffff;
          }
        }

      }

      .notLogged {
        a {
          color: #ffffff;
        }
      }
    }
  }

  .main {
    background: #f8f8f8;
    min-height: calc(100vh - $nav_height);

    .center {
      width: 75%;
      margin: 0 auto;
      min-height: calc(100vh - $nav_height);
    }
  }
}
</style>