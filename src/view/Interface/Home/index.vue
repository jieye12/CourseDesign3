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
          <div class="nickname">
            <router-link to="/personal_center">jieye</router-link>
          </div>
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
import { useUserStateStore } from '@/store/user';
const store = useUserStateStore()
const { userLoginState } = store
</script>
<style lang="scss" scoped>
.whole {
  .nav {
    position: relative;
    height: $nav_height;
    line-height: $nav_height;
    text-align: center;

    .right {
      position: absolute;
      right: 100px;
      top: 0;

      .logged {
        display: flex;

        .avatar {
          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
        }

        .nickname {
          margin-left: 20px;
        }
      }
    }
  }

  .main {
    background: #f8f8f8;
    ;
    min-height: calc(100vh - $nav_height);

    .center {
      width: 80%;
      margin: 0 auto;
    }
  }
}
</style>