<template>
    <div class="whole">
        <!-- 搜索框 -->
        <div class="searchBox">
            <div class="btn-box mb20">
                <input type="text" placeholder=" " />
                <span @click="goRouter()">搜索</span>
            </div>
        </div>
        <!-- 路由跳转 -->
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
let router = useRouter()
const goRouter = () => {
    router.push("/commodity_list")
}
</script>
<style lang="scss" scoped>
.whole {
    padding: 10px 0;
    // background-color: #ffffff;


    .searchBox {
        text-align: center;
        // margin: 10px 0;
        // padding: 10px 0;
        // background-color: #ffffff;

        .btn-box {
            position: relative;
            color: #fff;
            width: 500px;
            border-radius: 20px;
            height: 40px;
            line-height: 40px;
            display: inline-block;
            // opacity: 0.5;
            background-image: linear-gradient(315deg, #6772FF 0, #00F9E5 100%);
            cursor: pointer;
        }


        .btn-box input {
            position: absolute;
            left: 0;
            display: inline-block;
            background: 0 0;
            border: none;
            color: #fff;
            padding-left: 50px;
            outline: none;
            // padding-left: 20px;
            // line-height: 50px !important;
            height: 40px;
            box-sizing: border-box;
            vertical-align: 4px;
            font-size: 16px;
            width: 400px;
            font-style: italic;
            letter-spacing: 2px;
        }

        .btn-box span {
            position: absolute;
            right: 0;
            top: 0;
            width: 100px;
            height: 40px;
            border-radius: 25px;
            border-color: #00F9E5;
            text-align: center;
            font-size: 18px;
            cursor: pointer;
        }


    }

    .main {}
}
</style>