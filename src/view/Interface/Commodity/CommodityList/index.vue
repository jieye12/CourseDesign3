<template>
    <el-card class="whole">
        <div class="item" v-for="item in searchData" :key="item.id">
            <div class="left">
                <img :src="item.imgUrl" alt="">
            </div>
            <div class="right">
                <div class="name">{{ item.name }}</div>
                <div class="description">{{ item.description }}</div>
                <div class="price">
                    ￥{{ item.price }}
                </div>
                <div class="store">
                    <div class="top">
                        <img :src="Store" alt="">
                        <div class="storeName">{{ item.store }}</div>
                    </div>
                    <div class="address">
                        <span>当前地址:</span>
                        <span style="color:red;">{{ item.address }}</span>
                    </div>
                </div>
            </div>
        </div>
    </el-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Store from '@/assets/images/store1.jpg'
import D1 from '@/assets/images/digit/d1.jpg'
import D2 from '@/assets/images/digit/d2.jpg'
import D3 from '@/assets/images/digit/d3.jpg'
import D4 from '@/assets/images/digit/d4.jpg'
import D5 from '@/assets/images/digit/d5.jpg'
import D6 from '@/assets/images/digit/d6.jpeg'
import D7 from '@/assets/images/digit/d7.png'
import D8 from '@/assets/images/digit/d8.png'
import D9 from '@/assets/images/digit/d9.jpg'
import D10 from '@/assets/images/digit/d10.png'
const searchData: any = ref([
    {
        id: 1,
        name: "亚马逊 Kindle 8 电纸书 4GB 白色",
        price: "3736",
        description: "vivo S18 Pro 16GB+256GB 全新未使用配件发票都有，1.28号买的手机",
        store: "店铺1",
        address: " 江蘇省蘇州市崑山市人民南路1168號",
        imgUrl: D1
    },
    {
        id: 2,
        name: "iPhone 12",
        price: "2274",
        store: "店铺2",
        imgUrl: D2,
    },
    {
        id: 3,
        name: "vivo X80(5G)",
        price: "1736",
        store: "店铺3",
        imgUrl: D3,
    },
    {
        id: 4,
        name: "苹果 21年 14寸",
        price: "13593",
        store: "店铺4",
        imgUrl: D4,
    },
    {
        id: 5,
        name: "苹果 21年 16寸",
        price: "14270",
        store: "店铺5",
        imgUrl: D5,
    },
    {
        id: 6,
        name: "iPad 8代",
        price: "1330",
        store: "店铺6",
        imgUrl: D6,
    },
    {
        id: 7,
        name: "iPad Pro 11寸",
        price: "3072",
        store: "店铺7",
        imgUrl: D7,
    },
    {
        id: 8,
        name: "iPad Air2",
        price: "521",
        store: "店铺8",
        imgUrl: D8,
    },
    {
        id: 9,
        name: "华为 Watch GT 2",
        price: "264",
        store: "店铺9",
        imgUrl: D9,
    },
    {
        id: 10,
        name: "Apple Watch",
        price: "663",
        store: "店铺10",
        imgUrl: D10,
    }
])
</script>
<style lang="scss" scoped>
.whole {
    .item {
        display: flex;
        height: 200px;
        // border-bottom: 1px solid #f3f3f3;
        border-bottom: 1px solid #000000;

        .left {
            width: 30%;
            text-align: center;

            img {
                width: 200px;
            }
        }

        .right {
            width: 70%;
            padding: 10px 0;


            .description {
                font-size: 12px;
                color: red;
                line-height: 2;
            }

            .price {
                color: red;
                margin: 3px 0;
            }

            .store {
                background-color: #f3f3f3;
                font-size: 12px;
                padding: 5px;

                .top {
                    display: flex;

                    img {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                    }

                    .storeName {
                        line-height: 50px;
                        margin-left: 20px;
                    }
                }

                .address {
                    padding-left: 10px;
                    line-height: 50px;
                }

            }
        }
    }
}
</style>