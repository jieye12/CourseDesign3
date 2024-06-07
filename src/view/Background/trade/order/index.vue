<template>
  <el-card class="whole">
    <div class="top">
      <span class="info">订单详情</span>
      <span class="person">收货人</span>
      <span class="address">收货地址</span>
      <span class="money">金额</span>
      <span class="state">状态</span>
      <span class="ensure">确认</span>

    </div>
    <div class="list" v-for="order in orderList" :key="order.id">
      <div class="title">
        <div class="time">{{ order.orderTime }}</div>
        <div class="orderId">订单号：{{ order.orderSn }}</div>
      </div>
      <div class="main">
        <div class="info">
          <img :src="order.commodity.imageUrl" alt="">
          <div class="details">{{ order.commodity.productName }}</div>
        </div>
        <div class="person">{{ order.username }}</div>
        <div class="address">{{ order.address }}</div>
        <div class="money">{{ order.amount }}</div>
        <div class="state">{{ order.status }}</div>
        <div class="ensure">
          <el-button type="danger" v-if="!order.ensure" @click="order.ensure = !order.ensure">确认订单</el-button>
          <el-button type="primary" v-else>已确认</el-button>
        </div>
      </div>
    </div>
  </el-card>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { reqGetOrdersByUserId } from '@/api/order/index'
import { reqViewProductDetails } from '@/api/commodity/index'
import D1 from '@/assets/images/digit/d1.jpg'
import D2 from '@/assets/images/digit/d2.jpg'
import D3 from '@/assets/images/digit/d3.jpg'
import D4 from '@/assets/images/digit/d4.jpg'
const orderList = ref([
  {
    id: 1,
    orderTime: "2024-05-28",
    orderSn: "123435454",
    commodity: {
      imageUrl: D1,
      orderSn: 1,
    },
    details: "我买一差不多好v富滇银行才德兼备v附属",
    username: "jieye",
    address: "陕西省西安市长安区",
    amount: "120",
    status: "已完成"
  },
])
onMounted(async () => {
  let data = ref({
    current: 1,
    size: 5,
  })
  const res = await reqGetOrdersByUserId(data.value)
  console.log(res);
  orderList.value = res.data.records
  for (let i = 0; i < orderList.value.length; i++) {
    let temp = await reqViewProductDetails(orderList.value[i].productId)
    console.log(temp);
    orderList.value[i].commodity = temp.data
    orderList.value[i].ensure = false
  }
})
</script>
<style lang="scss" scoped>
.whole {
  text-align: center;

  .top {
    background-color: #f3f3f3;
    display: flex;
    justify-content: space-around;
    margin: 0 0 5px 0;

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
  width: 35%;
}

.person,
.money,
.state,
.address,
.ensure {
  width: 14%;
}
</style>