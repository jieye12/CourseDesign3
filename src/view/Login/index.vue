<template>
    <div class="all">
        <div class="form">
            <el-form :model="formData" ref="form" :rules="rules">
                <el-form-item label="账号 :" prop="usernameOrMailOrPhone">
                    <el-input placeholder="请输入账号" v-model="formData.usernameOrMailOrPhone"></el-input>
                </el-form-item>
                <el-form-item label="密码 :" prop="password">
                    <el-input placeholder="请输入密码" v-model="formData.password"></el-input>
                </el-form-item>
                <el-form-item class="btn">
                    <el-button @click="register()" class="btn1">前往注册</el-button>
                    <el-button @click="login()" type="primary" class="btn2">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useUserStateStore } from '@/store/user';
import { useRouter } from 'vue-router'
import { reqLogin } from '@/api/login/index'
import { ElNotification } from 'element-plus';
const router = useRouter()
const loginStore = useUserStateStore()
const { userLogin } = loginStore
// 
const formData = ref({
    usernameOrMailOrPhone: 'jieye',
    password: '123456'
})
const form = ref()
const rules = ref({
    usernameOrMailOrPhone: [{
        required: true,
        message: '请输入账号',
        trigger: 'blur',
    }],
    password: [{
        required: true,
        message: "请输入密码",
        trigger: 'blur',
    }]
})
// const login = () => {
//     router.push("/layout")
// }
const register = () => {
    router.push("/register");
}
const login = () => {
    form.value.validate(async (valid: any) => {
        if (valid) {
            console.log(formData.value);
            const res = await reqLogin(formData.value)
            console.log(res);
            if (res.code === '0') {
                userLogin();
                localStorage.setItem('token', res.data.accessToken);
                localStorage.setItem('userId', res.data.userId);
                localStorage.setItem('username', res.data.username)
                router.push("/home")
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
    })

}


onMounted(() => {

})
</script>

<style lang="scss" scoped>
.all {
    width: 100%;
    min-height: 100vh;
    background: url(../../assets/images/bg.png);

    .form {
        position: absolute;
        width: 400px;
        height: 200px;
        top: 50%;
        left: 50%;
        margin-left: -200px;
        margin-top: -100px;
        border: 3px solid #00d0ff;
        box-shadow: 1px #00d0ff;
        padding: 50px 20px;
        box-sizing: border-box;
        border-radius: 10px;
        color: #000000;

        .el-form {

            .el-form-item {
                ::v-deep .el-form-item__label {
                    color: #000000;
                    color: #00d0ff;
                }

                .el-input {
                    width: 300px;
                    background-color: transparent;
                    outline: #00d0ff;
                    // border: 1px solid #00d0ff;
                }

                ::v-deep .el-input__wrapper {
                    box-shadow: 0 0 0 1px #00d0ff inset;
                }

                ::v-deep .el-input__inner {
                    outline: #00d0ff;
                }
            }

            .btn {
                display: flex;
                // justify-content: end;
                justify-content: flex-end;

                .el-button {
                    margin: 0 30px 0 20px;
                    display: inline-block;
                }

                .btn1 {
                    margin: 0 0 0 170px;
                }

                .btn2 {
                    margin: 0 0 0 10px;
                }
            }
        }
    }
}
</style>