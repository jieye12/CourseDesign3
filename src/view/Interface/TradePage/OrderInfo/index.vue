<template>
    <el-card class="whole">
        <h1>核对订单信息</h1>
        <!-- 地址部分 -->
        <div class="person">
            <div class="title">收货人信息</div>
            <el-form :model="formData" ref="form" :rules="rules">
                <el-form-item label="姓名 :" prop="name" label-width="100px">
                    <el-input placeholder="请输入姓名" v-model="formData.name"></el-input>
                </el-form-item>
                <el-form-item label="地址 :" prop="address" label-width="100px">
                    <el-input placeholder="请输入收货地址" v-model="formData.address"></el-input>
                </el-form-item>
                <el-form-item label="联系电话 :" prop="telphone" label-width="100px">
                    <el-input placeholder="请输入联系电话" v-model="formData.telphone"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <!-- 支付方式 -->
        <div class="way">
            <div class="title">选择支付方式</div>
            <div class="list">
                <el-button type="info" disabled>货到付款</el-button>
                <el-button type="success">在线支付</el-button>
            </div>
        </div>
        <!-- 商品核对 -->
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
        <!-- 前往支付 -->
        <div class="btn">
            <el-button type="danger">前往支付</el-button>
        </div>
    </el-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import D1 from '@/assets/images/digit/d1.jpg'
const formData = ref({
    name: '',
    address: '',
    telphone: '',
})
const form = ref()
const rules = ref({
    name: [{
        required: true,
        message: '请输入收货人姓名',
        trigger: 'blur',
    }],
    address: [{
        required: true,
        message: "请输入收货地址",
        trigger: 'blur',
    }],
    telphone: [{
        required: true,
        message: "请输入联系电话",
        trigger: 'blur',
    }],
})
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
</script>
<style lang="scss" scoped>
.whole {
    margin: 20px 0;
    border-radius: 20px;

    h1 {
        text-align: center;
    }

    .person {
        .title {
            font-weight: 700;
            margin: 10px 0;
        }

        .el-form {
            font-size: 12px;
        }
    }

    .way {
        .title {
            font-weight: 700;
            margin: 10px 0;
        }

        .list {
            padding: 10px 40px;
        }
    }

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

    .btn {
        text-align: right;
        margin: 30px;
    }
}
</style>