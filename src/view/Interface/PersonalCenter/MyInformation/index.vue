<template>
    <div class="profile-page">
        <!-- 用户信息展示 -->
        <el-card class="info-card">
            <h2>{{ !editMode ? "个人信息展示" : "修改个人信息" }}</h2>
            <div v-if="!editMode" class="init-form">
                <el-form :model="userInfo" :rules="rules" ref="editForm" label-width="100px">
                    <el-form-item label="姓名" prop="username">
                        <el-input v-model="userInfo.username" :disabled="!editMode"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="mail">
                        <el-input v-model="userInfo.mail" :disabled="!editMode"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码" prop="phone">
                        <el-input v-model="userInfo.phone" :disabled="!editMode"></el-input>
                    </el-form-item>
                    <el-form-item label="地址" prop="address">
                        <el-input v-model="userInfo.address" :disabled="!editMode"></el-input>
                    </el-form-item>
                    <el-form-item label="区域" prop="region">
                        <el-input v-model="userInfo.region" :disabled="!editMode"></el-input>
                    </el-form-item>
                    <!--  -->
                </el-form>
                <div class="btn">
                    <el-button @click="editMode = !editMode" type="primary">修改</el-button>
                </div>
                <!-- 可以根据需要展示更多的个人信息字段 -->
            </div>
            <div v-else>
                <!-- 编辑个人信息表单 -->
                <el-form :model="userInfo" :rules="rules" ref="editForm" label-width="100px">
                    <el-form-item label="姓名" prop="username">
                        <el-input v-model="userInfo.username"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="mail">
                        <el-input v-model="userInfo.mail"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码" prop="phone">
                        <el-input v-model="userInfo.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="地址" prop="address">
                        <el-input v-model="userInfo.address"></el-input>
                    </el-form-item>
                    <el-form-item label="区域" prop="region">
                        <el-input v-model="userInfo.region"></el-input>
                    </el-form-item>
                    <!-- 可以根据需要添加更多的个人信息字段 -->
                </el-form>
                <div class="btn">
                    <el-button type="primary" @click="submitForm">保存</el-button>
                    <el-button @click="editMode = !editMode">取消</el-button>
                </div>
            </div>
        </el-card>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { reqQuery, reqUpdate } from '@/api/user/index'
const userInfo = ref({
    username: "张三",
    age: 30,
    gender: "male",
    mail: 'jieye122@qq.com',
    phone: "123456789",
    address: "陕西省",
})
const rules = ref({
    username: [{
        required: true,
        message: '请输入密码',
        trigger: 'blur',
    }],
    address: [{
        required: true,
        message: "请输入地址",
        trigger: 'blur',
    }],
    region: [{
        required: true,
        message: "请输入区域",
        trigger: 'blur',
    }],
    mail: [{
        required: true,
        message: "请输入密码",
        trigger: 'blur',
    }],
    phone: [{
        required: true,
        message: "请输入密码",
        trigger: 'blur',
    }],
})
const editMode = ref(false)
const submitForm = () => {

}
onMounted(async () => {
    let username = localStorage.getItem("username")
    const res = await reqQuery(username)
    console.log(res);
    userInfo.value = res.data
})
</script>
<style lang="scss" scoped>
.profile-page {
    max-width: 600px;
    margin: 0 auto;

    .info-card {
        padding: 0 20px;

        h2 {
            text-align: center;
            margin-bottom: 20px;
        }

        .btn {
            text-align: right;
        }

        .init-form {
            .btn {
                text-align: right;
            }
        }
    }
}
</style>