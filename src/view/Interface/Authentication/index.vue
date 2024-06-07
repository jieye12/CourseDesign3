<template>
    <div class="whole">
        <div class="authenticated" v-if="isAuthenticated">
            已认证
        </div>
        <div class="notAuthenticated" v-else>
            <el-form style="width: 80%;" :model="form" :rules="rules" ref="formRef">
                <el-form-item label="真实姓名" label-width="100px" prop="realName">
                    <el-input placeholder="请您输入真实姓名" v-model="form.realName"></el-input>
                </el-form-item>
                <el-form-item label="证件类型" label-width="100px" prop="idType">
                    <el-input placeholder="请您输入证件类型" v-model="form.idType" disabled value="居民身份证"></el-input>
                </el-form-item>
                <el-form-item label="身份证号" label-width="100px" prop="idCard">
                    <el-input placeholder="请您输入身份证号" v-model="form.idCard"></el-input>
                </el-form-item>
                <el-form-item label="地址" label-width="100px" prop="address">
                    <el-input placeholder="请您输入身份证号" v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="区域" label-width="100px" prop="region">
                    <el-input placeholder="请您输入身份证号" v-model="form.region"></el-input>
                </el-form-item>
                <el-form-item label="身份证照片" label-width="100px" prop="imgUrl">
                    <!-- upload组件属性:action图片上传路径书写/api,代理服务器不发送这次post请求  -->
                    <el-upload class="avatar-uploader" action="/api/admin/product/fileUpload" :show-file-list="false"
                        :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="form.logoUrl" :src="form.logoUrl" class="avatar" />
                        <el-icon v-else class="avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>

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
import { reqAuthenticate } from '@/api/user/index.ts'
import { useRouter } from 'vue-router'
const router = useRouter()
const isAuthenticated = ref(false);
const authenticatedInfo = ref({
    idNumber: '',
    // other authenticated information fields
});
const form = ref({
    realName: "杜成友",
    idType: 1,
    idCard: "123456789",
    address: "陕西省西安市长安区",
    region: "中国大陆",
});
let formRef = ref()
const fileList = ref([]);
const submitting = ref(false);

const rules = {
    realName: [
        { required: true, message: '请输入真实姓名', trigger: 'blur' },
        // other custom validation rules
    ],
    idType: [
        { required: true, message: '请输入身份证号', trigger: 'blur' },
        // other custom validation rules
    ],
    idCard: [
        { required: true, message: '请输入身份证号', trigger: 'blur' },
        // other custom validation rules
    ],
    address: [
        { required: true, message: '请输入地址', trigger: 'blur' },
        // other custom validation rules
    ],
    region: [
        { required: true, message: '请输入区域', trigger: 'blur' },
        // other custom validation rules
    ],
};

const submitForm = () => {
    formRef.value.validate(async (valid: any) => {
        if (valid) {
            console.log(form.value);
            const res = await reqAuthenticate(form.value)
            console.log(res);
            if (res.code === '0') {
                router.push("/apply_store")
                ElNotification({
                    type: 'success',
                    message: '请申请个人店铺',
                    title: "身份认证完成"
                });
            }
            else {
                ElNotification({
                    type: 'error',
                    message: "身份认证失败"
                })
            }
        }
    })
};

const validateForm = () => {
    return new Promise((resolve) => {
        const { value: formValue } = form;
        resolve($refs.form.validate());
    });
};

const beforeUpload = (file) => {
    const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJPG) {
        ElMessage.error('Uploaded images must be in JPG or PNG format!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        ElMessage.error('Uploaded image size cannot exceed 2MB!');
    }
    return isJPG && isLt2M;
};

const handlePreview = (file) => {
    console.log('handle preview', file);
};

const handleRemove = (file) => {
    console.log('handle remove', file);
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
