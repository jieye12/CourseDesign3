<template>
    <div class="profile-page">
        <!-- 用户信息展示 -->
        <el-card class="info-card">
            <h2>{{ !editMode ? "个人信息展示" : "修改个人信息" }}</h2>
            <div v-if="!editMode" class="init-form">
                <el-form :model="userInfo" :rules="rules" ref="editForm" label-width="100px">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="userInfo.name" :disabled="!editMode"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄" prop="age">
                        <el-input v-model.number="userInfo.age" :disabled="!editMode"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="gender">
                        <el-radio-group v-model="userInfo.gender">
                            <el-radio label="male">男</el-radio>
                            <el-radio label="female">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="userInfo.email" :disabled="!editMode"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码" prop="phone">
                        <el-input v-model="userInfo.phone" :disabled="!editMode"></el-input>
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
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="userInfo.name"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄" prop="age">
                        <el-input v-model.number="userInfo.age"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="gender" :disabled="!editMode">
                        <el-radio-group v-model="userInfo.gender" :disabled="!editMode">
                            <el-radio label="male" :disabled="!editMode">男</el-radio>
                            <el-radio label="female" :disabled="!editMode">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="userInfo.email"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码" prop="phone">
                        <el-input v-model="userInfo.phone"></el-input>
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
import { ref } from 'vue';
const userInfo = ref({
    name: "张三",
    age: 30,
    gender: "male",
    email: 'jieye122@qq.com',
    phone: "123456789"
})
const rules = ref({
    username: [{
        required: true,
        message: '请输入密码',
        trigger: 'blur',
    }],
    password: [{
        required: true,
        message: "请输入密码",
        trigger: 'blur',
    }]
})
const editMode = ref(false)
const submitForm = () => {

}
const resetForm = () => {

}
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