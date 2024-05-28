<template>
  <el-card class="whole">
    <h2>{{ title }}</h2>
    <div class="content">
      <div class="lists">
        <div v-for="item in moduleData" :key="item.id" @click="turnToDetail(item.id)" class="item">
          <div class="image">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="description">
            <span class="name">{{ item.name }}</span>
            <span class="price">￥{{ item.price }}</span>
            <!-- <div class="city">{{ item.name }}</div> -->
          </div>
          <div class="store">
            <img :src="Store" alt="">
            <span>{{ item.store }}</span>
          </div>
        </div>
      </div>
      <div class="more">
        <span @click="turnToPage()">查看更多</span>
      </div>
    </div>
  </el-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
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
const title = ref("电子数码产品")
const moduleData: any = ref([
  {
    id: 1,
    name: "iPhone 12 ProMax",
    price: "3736",
    store: "店铺1",
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
const turnToDetail = (id: any) => {
  console.log(id);
  router.push("/commodity_detail")
}
const turnToPage = () => {
  router.push("/commodity_list")
}
</script>
<style lang="scss" scoped>
.whole {
  border-radius: 20px;

  h2 {
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
          }
        }

        .description {
          span {
            display: inline-block;
            width: 50%;
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .price {
            color: red;
            font-style: italic;
          }
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