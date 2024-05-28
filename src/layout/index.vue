<template>
    <el-container class="layout_container">
        <el-header>
            <div class="logo">
                <Logo></Logo>
            </div>
            <div class="layout_tabbar">
                <Tabbar></Tabbar>
            </div>
        </el-header>
        <el-container class="main">
            <el-aside :class="{ fold: LayOutSettingStore.fold ? true : false }">
                <el-scrollbar class="scrollbar">
                    <el-menu :collapse="LayOutSettingStore.fold ? true : false" :default-active="$route.path"
                        background-color="#001529" text-color="white" active-text-color="yellowgreen">
                        <Menu :menuList="asyncRoute"></Menu>
                    </el-menu>
                </el-scrollbar>
            </el-aside>
            <el-main :class="{ fold: LayOutSettingStore.fold ? true : false }" class="layout_main">
                <Main></Main>
            </el-main>
        </el-container>
    </el-container>
    <!-- 左侧菜单 -->
    <!-- <div class="layout_slider">
    </div> -->
</template>

<script setup lang="ts">
//获取路由对象
import { useRoute } from 'vue-router'
import { asyncRoute } from '@/router';
//引入左侧菜单logo子组件
import Logo from './logo/index.vue'
//引入菜单组件
import Menu from './menu/index.vue'
//右侧内容展示区域
import Main from './main/index.vue';
//引入顶部tabbar组件
import Tabbar from './tabbar/index.vue';
//获取用户相关的小仓库
// import useUserStore from '@/store/modules/user';
import useLayOutSettingStore from '@/store/modules/setting';
// let userStore = useUserStore();
//获取layout配置仓库

let LayOutSettingStore = useLayOutSettingStore();

//获取路由对象
let $route = useRoute();
// 
</script>

<script lang="ts">
export default {
    name: "Layout"
}
</script>
<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;

    .el-header {
        display: flex;
        padding: 0;
        height: $base-menu-logo-height;

        .logo {
            width: 200px;
            height: $base-menu-logo-height;
            line-height: $base-menu-logo-height
        }
    }

    .main {
        height: calc(100vh - $base-menu-logo-height);
        max-height: calc(100vh - $base-menu-logo-height);

        .el-aside {
            overflow: hidden;
            height: 100%;
            padding: 0;
            width: $base-menu-width;
            background: $base-menu-background;
            transition: all 0.3s;

            .scrollbar {
                width: 100%;
                height: calc(100vh - $base-menu-logo-height);

                .el-menu {
                    border-right: none;
                }
            }
        }

        .el-main {
            height: 100%;
        }

    }

    .layout_slider {
        color: white;
        width: $base-menu-width;
        max-height: 100vh;
        background: $base-menu-background;
        transition: all 0.3s;
    }

    .layout_tabbar {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        top: 0px;
        left: $base-menu-width;
        transition: all 0.3s;

        &.fold {
            width: calc(100vw - $base-menu-min-width );
            left: $base-menu-min-width;
        }
    }

    .layout_main {
        background-color: #f3f3f3;
        // position: absolute;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-tabbar-height);
        // left: $base-menu-width;
        // top: $base-tabbar-height;
        padding: 20px;
        overflow: auto;
        transition: all 0.3s;

        &.fold {
            width: calc(100vw - $base-menu-min-width );
        }

    }
}
</style>