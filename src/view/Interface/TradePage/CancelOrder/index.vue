<template>
    <el-card class="whole">
        <p>订单号：{{ orderInfo.orderSn }}</p>
        <div class="goods">
            <div class="title">商品信息核对</div>
            <div class="content">
                <div class="left">
                    <p>配送方式</p>
                    <div class="a">
                        <el-button type="info">快递配送</el-button>
                    </div>
                    <div class="details">
                        预计5-30日24:00前发货，6-2日24:00前送达
                    </div>
                </div>
                <div class="right">
                    <p>
                        <span>商家:</span>
                        <span style="margin-left: 10px;color:red;">{{ info.goods.store }}</span>
                    </p>
                    <div class="main">
                        <div class="left">
                            <img :src="info.goods.imgUrl" alt="">
                        </div>
                        <div class="right">
                            <div class="name">{{ info.goods.name }}</div>
                            <div class="description">{{ info.goods.description }}</div>
                            <div class="price">￥{{ info.goods.price }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <p>订单金额：{{ orderInfo.userDetails[0].amount }}</p> -->
        <el-button type="danger" @click="cancelOrder">取消订单</el-button>
        <el-button type="primary" @click="goToPayment">前往支付</el-button>
        <el-dialog v-model="dialogFormVisible" :title="支付">
            <img :src="Payment" alt="">
        </el-dialog>
    </el-card>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useOrderStore } from '@/store/order';
import { reqQueryOrder, reqCancelOrder } from '@/api/order/index'
import { useRouter } from 'vue-router'
import D1 from '@/assets/images/digit/d1.jpg'
import Payment from '@/assets/images/payment.jpg'
const router = useRouter()
const orderStore = useOrderStore()
const { saveOrder } = orderStore
const orderInfo = ref({})
const info = ref({
    person: {
        name: "张三",
        address: "陕西省西安市长安区西安邮电大学长安校区东区",
        tel: "19999999999"
    },
    goods: {
        name: "亚马逊 Kindle 8 电纸书 4GB 白色",
        price: "3736",
        description: "vivo S18 Pro 16GB+256GB 全新未使用配件发票都有，1.28号买的手机",
        store: "店铺1",
        address: " 江蘇省蘇州市崑山市人民南路1168號",
        imgUrl: D1,
    }
})
const dialogFormVisible = ref(false)
let id
onMounted(async () => {
    id = orderStore.getOrderId
    let res1 = await reqQueryOrder(id)
    console.log(res1);
    orderInfo.value = res1.data;
})
const cancelOrder = async () => {
    let data = ref({
        orderSn: id
    })
    const res = await reqCancelOrder(data.value)
    console.log(res);
    if (res.code === '0') {
        router.push("/my_order")
        ElNotification({
            type: 'success',
            message: '欢迎',
            title: "登录成功"
        });
    }
    else {
        ElNotification({
            type: 'error',
            message: "登录失败"
        })
    }

}
const goToPayment = () => {
    console.log("前往支付");
    dialogFormVisible.value = true;
}
</script>

<style scoped lang="scss">
/* 样式可以根据需求自行调整 */
.whole {
    margin: 20px auto;
    border-radius: 20px;
    min-height: 200px;
    text-align: center;

    .goods {
        .title {
            font-weight: 700;
            margin: 10px 0;
        }

        .content {
            padding: 20px 30px;
            display: flex;
            height: 200px;

            .left {
                width: 35%;
                background-color: #f7f7f7;
                font-size: 12px;
                padding: 10px 20px;

                .a {
                    margin: 10px 50px;
                }
            }

            .right {
                padding: 10px 20px;
                width: 60%;
                font-size: 12px;
                background-color: #f3fbfe;

                p {}

                .main {
                    display: flex;

                    .left {
                        background-color: #f3fbfe;
                        width: 100px;

                        img {
                            width: 80px;
                            height: 80px;
                            border: 1px solid #f3f3f3;
                        }
                    }

                    .right {
                        .description {
                            color: red;
                        }

                        .price {
                            text-align: right;
                            font-size: 16px;
                            color: red;
                        }
                    }
                }
            }
        }
    }
}

img {
    width: 50%;
}
</style>
