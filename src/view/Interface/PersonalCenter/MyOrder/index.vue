<template>
    <div class="whole">
        <div class="top">
            <span class="info">订单详情</span>
            <span class="person">收货人</span>
            <span class="money">金额</span>
            <span class="state">状态</span>
        </div>
        <div class="list" v-for="order in orderList" :key="order.id">
            <div class="title">
                <div class="time">{{ order.time }}</div>
                <div class="orderId">订单号：{{ order.orderId }}</div>
                <div class="store">{{ order.store }}</div>
            </div>
            <div class="main">
                <div class="info">
                    <img :src="order.imgUrl" alt="">
                    <div class="details">{{ order.details }}</div>
                </div>
                <div class="person">{{ order.person }}</div>
                <div class="money">{{ order.money }}</div>
                <div class="state">{{ order.state }}</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import D1 from '@/assets/images/digit/d1.jpg'
import D2 from '@/assets/images/digit/d2.jpg'
import D3 from '@/assets/images/digit/d3.jpg'
import D4 from '@/assets/images/digit/d4.jpg'
const orderList = ref([
    {
        id: 1,
        time: "2024-05-28",
        orderId: "123435454",
        store: "小张的店铺",
        imgUrl: D1,
        details: "我买一差不多好v富滇银行才德兼备v附属",
        person: "jieye",
        money: "120",
        state: "已完成"
    },
    {
        id: 1,
        time: "2024-05-28",
        orderId: "123435454",
        store: "小张的店铺",
        imgUrl: D2,
        details: "我买一差不多好v富滇银行才德兼备v附属",
        person: "jieye",
        money: "120",
        state: "已完成"
    }, {
        id: 1,
        time: "2024-05-28",
        orderId: "123435454",
        store: "小张的店铺",
        imgUrl: D3,
        details: "我买一差不多好v富滇银行才德兼备v附属",
        person: "jieye",
        money: "120",
        state: "已完成"
    }, {
        id: 1,
        time: "2024-05-28",
        orderId: "123435454",
        store: "小张的店铺",
        imgUrl: D4,
        details: "我买一差不多好v富滇银行才德兼备v附属",
        person: "jieye",
        money: "120",
        state: "已完成"
    }
])
</script>
<style lang="scss" scoped>
.whole {
    text-align: center;

    .top {
        background-color: #f3f3f3;
        display: flex;
        justify-content: space-around;
        margin: 0 0 10px 0;

        span {
            display: inline-block;
        }
    }

    .list {
        border: 1px solid #e5e5e5;
        margin: 10px 0;

        .title {
            padding: 2px 50px;
            display: flex;
            font-size: 12px;
            background-color: #f3f3f3;

            div {
                margin: 0 20px;
            }

            .store {
                font-weight: 400;
            }
        }

        .main {
            display: flex;
            align-items: center;
            justify-content: space-around;
            font-size: 14px;
            padding: 10px;

            .info {
                display: flex;


                img {
                    width: 50px;
                    height: 50px;
                }

                .details {
                    line-height: 50px;
                }
            }
        }

    }
}

.info {
    width: 40%;
}

.person,
.money,
.state {
    width: 20%;
}
</style>