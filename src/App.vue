<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
onMounted(() => {
  router.push("/home")
})
</script>
<style lang="scss" scoped></style>
