<template>
    <div class="whole">
        <div class="authenticated" v-if="isAuthenticated">
            已认证
        </div>
        <div class="notAuthenticated" v-else>
            <el-form style="width: 80%;" :model="trademarkParams" :rules="rules" ref="formRef">
                <el-form-item label="真实姓名" label-width="100px" prop="name">
                    <el-input placeholder="请您输入真实姓名" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="身份证号" label-width="100px" prop="idNumber">
                    <el-input placeholder="请您输入身份证号" v-model="form.idNumber"></el-input>
                </el-form-item>
                <el-form-item label="账号密码" label-width="100px" prop="password">
                    <el-input placeholder="请您输入账号密码" v-model="form.password"></el-input>
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
                <el-button type=primary>提交认证</el-button>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const isAuthenticated = ref(false);
const authenticatedInfo = ref({
    idNumber: '',
    // other authenticated information fields
});
const form = ref({
    name: "",
    idNumber: "",
    password: "",
    imgUrl: ""
});
let formRef = ref()
const fileList = ref([]);
const submitting = ref(false);

const rules = {
    name: [
        { required: true, message: '请输入真实姓名', trigger: 'blur' },
        // other custom validation rules
    ],
    idNumber: [
        { required: true, message: '请输入身份证号', trigger: 'blur' },
        // other custom validation rules
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        // other custom validation rules
    ],
    imgUrl: [
        {
            required: true, message: "请上传身份证图片"
        }
    ]
};

const submitForm = () => {
    const { value: formValue } = form;
    const isValid = validateForm();
    if (isValid) {
        submitting.value = true;
        // simulate authentication submission
        setTimeout(() => {
            // assuming authentication is successful, update authentication status and information
            isAuthenticated.value = true;
            authenticatedInfo.value.idNumber = formValue.idNumber;
            // other actions after successful authentication
            submitting.value = false;
        }, 1500); // simulate submission delay
    }
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
