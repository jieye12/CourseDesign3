<template>
  <el-card class="whole">
    <h2>{{ title }}</h2>
    <div class="content">
      <div class="lists">
        <div v-for="item in moduleData" :key="item.id" @click="turnToDetail(item)" class="item">
          <div class="image">
            <img :src="item.imageUrl" alt="">
          </div>
          <div class="description">
            <span class="name">{{ item.productName }}</span>
            <span class="price">￥{{ item.price }}</span>
            <!-- <div class="city">{{ item.name }}</div> -->
          </div>
          <div class="details">
            {{ item.description }}
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
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { reqGetProduct } from '@/api/commodity/index'
import { useCommodityStore } from '@/store/commodity';
const commodityStore = useCommodityStore()
const { saveCommodity } = commodityStore
const router = useRouter()

let title = ref("电子数码产品")
let moduleData: any = ref([
])
const turnToDetail = (item: any) => {
  console.log(item);
  saveCommodity(item.id, item.productType, item.price)
  router.push("/commodity_detail")
}
const turnToPage = () => {
  router.push("/commodity_list")
}
onMounted(async () => {
  let res = await reqGetProduct("手机");
  console.log(res);
  moduleData.value = res.data.products
}) 
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