<template>
    <div class="logo" v-if="setting.logoHidden">
        <img :src="setting.logo" alt="">
        <p>{{ setting.title }}</p>
    </div>
</template>

<script setup lang="ts">
//引入设置标题与logo这配置文件
import setting from '@/setting';

</script>
<script lang="ts">
export default {
    name: "Logo"
}
</script>
<style scoped lang="scss">
.logo {
    width: 100%;
    height: $base-menu-logo-height;
    line-height: $base-menu-logo-height;
    color: white;
    display: flex;
    align-items: center;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    p {
        font-size: $base-logo-title-fontSize;
        color: #000000;
    }
}
</style>