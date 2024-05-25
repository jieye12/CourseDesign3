<template>
  <div class="whole">
    <!-- 导航栏 -->
    <div class="nav">
      <div class="left">
        <ul v-for="item in navData">
          <router-link :to="item.router">
            <li>
              {{ item.content }}
            </li>
          </router-link>
        </ul>
      </div>
      <div class="center"></div>
    </div>
    <!-- 主体 -->
    <div class="main">
        <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
const navData:any = ref([
  {
    router:"/attraction",
    content:"景点",
  },
  {
    router:"/food",
    content:"美食",
  },  
  {
    router:"/hotel",
    content:"酒店",
  },  {
    router:"/leisure",
    content:"休闲娱乐",
  },  {
    router:"/market",
    content:"商场",
  },  {
    router:"/travel",
    content:"出行",
  },
])
</script>
<style lang="scss" scoped>
.whole{
    .nav {

    }
}
</style>