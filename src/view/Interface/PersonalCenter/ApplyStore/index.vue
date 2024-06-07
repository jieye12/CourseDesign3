<template>
    <div class="whole">
        <div class="authenticated" v-if="isAuthenticated">
            申请成功
        </div>
        <div class="notAuthenticated" v-else>
            <el-form style="width: 80%;" :model="form" :rules="rules" ref="formRef">
                <el-form-item label="店铺名称" label-width="100px" prop="storeName">
                    <el-input placeholder="请您输入店铺名称" v-model="form.storeName"></el-input>
                </el-form-item>
                <el-form-item label="店铺描述" label-width="100px" prop="description">
                    <el-input placeholder="请您输入店铺描述" v-model="form.description"></el-input>
                </el-form-item>
                <el-form-item label="服务保障" label-width="100px" prop="serviceGuarantee">
                    <el-input placeholder="请您输入服务保障" v-model="form.serviceGuarantee"></el-input>
                </el-form-item>
            </el-form>
            <div class="btn">
                <el-button type=primary @click="submitForm()">提交认证</el-button>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { reqApplyStore } from '@/api/store/index'
import { useRouter } from 'vue-router'
const router = useRouter()
const isAuthenticated = ref(false);
const form = ref({
    storeName: "我的小店",
    description: "这是我的小店，欢迎来到我的小店来购买商品",
    serviceGuarantee: "7天无理由退货",
});
let formRef = ref()

const rules = {
    storeName: [
        { required: true, message: '请输入店铺名称', trigger: 'blur' },
        // other custom validation rules
    ],
    description: [
        { required: true, message: '请输入店铺描述', trigger: 'blur' },
        // other custom validation rules
    ],
    serviceGuarantee: [
        { required: true, message: '请输入店铺的服务保障', trigger: 'blur' },
        // other custom validation rules
    ],
};

const submitForm = () => {
    formRef.value.validate(async (valid: any) => {
        if (valid) {
            console.log(form.value);
            const res = await reqApplyStore(form.value)
            console.log(res);
            if (res.code === '0') {
                router.push("/my_store")
                ElNotification({
                    type: 'success',
                    message: '欢迎来到我的店铺',
                    title: "申请成功"
                });
            }
            else {
                ElNotification({
                    type: 'error',
                    message: "申请失败"
                })
            }
        }
    })
};


</script>

<style>
.notAuthenticated {
    width: 60%;
    margin: auto;
    /* padding: 20px; */
    text-align: center;
}

.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}

.btn {
    text-align: right
}
</style>
