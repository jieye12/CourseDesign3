<template>
    <el-card class="whole">
        <div class="item">
            <div class="left">
                <img :src="commodityDetail.imgUrl" alt="">
            </div>
            <div class="right">
                <div class="name">{{ commodityDetail.name }}</div>
                <div class="description">{{ commodityDetail.description }}</div>
                <div class="price">
                    ￥{{ commodityDetail.price }}
                </div>
                <div class="store">
                    <div class="top">
                        <img :src="Store" alt="">
                        <div class="storeName">{{ commodityDetail.store }}</div>
                    </div>
                    <div class="address">
                        <span>当前地址:</span>
                        <span style="color:red;">{{ commodityDetail.address }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn">
            <el-button type="danger" @click="goRouter1()">交易</el-button>
        </div>
    </el-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import Store from '@/assets/images/store1.jpg'
import D1 from '@/assets/images/digit/d1.jpg'
const router = useRouter()
const commodityDetail = ref({
    id: 1,
    name: "亚马逊 Kindle 8 电纸书 4GB 白色",
    price: "3736",
    description: "vivo S18 Pro 16GB+256GB 全新未使用配件发票都有，1.28号买的手机",
    store: "店铺1",
    address: " 江蘇省蘇州市崑山市人民南路1168號",
    imgUrl: D1,
})
const goRouter1 = () => {
    router.push("/order_info")
}
</script>
<style lang="scss" scoped>
.whole {
    margin: 10px 0;

    .item {
        display: flex;
        height: 200px;

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

    .btn {
        text-align: right;
        padding: 10px 100px;
    }
}
</style>