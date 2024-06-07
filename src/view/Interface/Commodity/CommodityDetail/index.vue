<template>
    <el-card class="whole">
        <div class="item">
            <div class="left">
                <img :src="commodityDetail.imageUrl" alt="">
            </div>
            <div class="right">
                <div class="name">{{ commodityDetail.name }}</div>
                <div class="description">{{ commodityDetail.description }}</div>
                <div class="price">
                    ￥{{ commodityDetail.price }}
                </div>
                <div class="status">
                    {{ commodityDetail.status }}
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
    <el-card class="about">
        <h1>相关推荐</h1>
        <module></module>
        <!-- <div class="content">
            <div class="lists">
                <div v-for="item in moduleData" :key="item.id" @click="turnToDetail(item.id)" class="item">
                    <div class="image">
                        <img :src="item.imageUrl" alt="">
                    </div>
                    <div class="description">
                        <span class="name">{{ item.productName }}</span>
                        <span class="price">￥{{ item.price }}</span>
                    </div>
                    <div class="details">
                        {{ item.description }}
                    </div>
                </div>
            </div>
        </div> -->
    </el-card>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { useCommodityStore } from '@/store/commodity';
import { reqViewProductDetails, reqSearchProduct } from '@/api/commodity/index'
import Module from '@/components/module.vue'
import Store from '@/assets/images/store1.jpg'
import D1 from '@/assets/images/digit/d1.jpg'
const router = useRouter()
const commodityStore = useCommodityStore()
const { saveCommodity } = commodityStore
const commodityDetail = ref({
    id: 1,
    name: "亚马逊 Kindle 8 电纸书 4GB 白色",
    price: "3736",
    description: "vivo S18 Pro 16GB+256GB 全新未使用配件发票都有，1.28号买的手机",
    store: "店铺1",
    address: " 江蘇省蘇州市崑山市人民南路1168號",
    imageUrl: D1,
})
let moduleData: any = ref([

])
const turnToDetail = (item: any) => {
    console.log(item);
    saveCommodity(item.id, item.productType, item.price)
    router.push("/commodity_detail")
}
const goRouter1 = () => {
    router.push("/order_info")
}
let id
let type
onMounted(async () => {
    id = commodityStore.getCommodityId
    type = commodityStore.getCommodityType
    const res = await reqViewProductDetails(id);
    commodityDetail.value = res.data
    const res2 = await reqSearchProduct("type", type);
    console.log(res2);
    moduleData.value = res2.data.products
})
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

.about {
    border-radius: 20px;

    h1 {
        text-align: center;
    }

    .content {
        .lists {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            .item {
                width: 18%;
                text-align: center;
                border: 1px solid #00ffff;
                padding: 10px;
                margin: 5px;
                box-sizing: border-box;

                .image {
                    width: 80%;
                    margin: 0px auto;

                    img {
                        width: 100%;
                        max-height: 100px;
                    }
                }

                .description {
                    span {
                        display: inline-block;
                        width: 50%;
                        font-size: 12px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }

                    .price {
                        color: red;
                        font-style: italic;
                    }
                }

                .details {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                .store {
                    display: flex;
                    line-height: 30px;
                    font-size: 13px;

                    img {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                    }
                }
            }
        }

        .more {
            width: 100%;
            text-align: center;

            span {
                display: inline-block;
                width: 150px;
                height: 40px;
                color: aqua;
                font-weight: 700;
                line-height: 40px;
                margin: 10px auto;
                border: 2px solid #00ffff;
            }
        }
    }
}
</style>