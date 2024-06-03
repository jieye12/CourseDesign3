<template>
    <div class="all">
        <div class="form">
            <el-form :model="formData" ref="form" :rules="rules">
                <el-form-item label="账号 :" prop="username" label-width="80px">
                    <el-input placeholder="请输入账号" v-model="formData.username"></el-input>
                </el-form-item>
                <el-form-item label="密码 :" prop="password" label-width="80px">
                    <el-input placeholder="请输入密码" v-model="formData.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="confirmPassword" label-width="80px">
                    <el-input v-model="formData.confirmPassword" show-password placeholder="请确认密码"></el-input>
                </el-form-item>
                <el-form-item class="btn">
                    <el-button @click="log()" type="primary">立即注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
// import { useLoginStateStore } from '@/store';
import { useRouter } from 'vue-router'
// import { reqLogin } from '@/api/login/index'
// import { ElNotification } from 'element-plus';
const router = useRouter()
// const login = useLoginStateStore()
// const { logIn } = login
// 
const formData = ref({
    username: '',
    password: '',
    confirmPassword: '',
})
const validateConfirmPassword = (rule: any, value: any, callback: any) => {
    if (value !== formData.value.password) {
        callback(new Error('两次输入的密码不一致'));
    } else {
        callback();
    }
};
const form = ref()
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
    }],
    confirmPassword: [
        { required: true, message: '请再次输入密码', trigger: 'blur' },
        { validator: validateConfirmPassword, trigger: 'blur' },
    ],
})
const log = () => {
    router.push("/layout")
}
// const log = () => {
//     form.value.validate(async (valid: any) => {
//         if (valid) {
//             const res = await reqLogin(formData.value)
//             if (res.code === '0') {
//                 logIn();
//                 localStorage.setItem('token', res.data.accessToken);
//                 localStorage.setItem('userId', res.data.userId);
//                 const path = String(router.currentRoute.value.query.from)
//                 if (path != 'undefined') {
//                     router.push(path)
//                 }
//                 else {
//                     router.push("/attractions")
//                 }
//                 ElNotification({
//                     type: 'success',
//                     message: '欢迎',
//                     title: "登录成功"
//                 });
//             }
//             else {
//                 ElNotification({
//                     type: 'error',
//                     message: "登录失败"
//                 })
//             }

//         }
//     })

// }


onMounted(() => {
    // console.log(route.meta.nav);
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
        height: 280px;
        top: 50%;
        left: 50%;
        margin-left: -200px;
        margin-top: -140px;
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
                justify-content: flex-end;

                .el-button {
                    margin-left: 260px;
                    display: inline-block;
                    // color: #00d0ff;
                }
            }
        }
    }
}
</style>