<template>
  <div class="whole">
    <div class="title">{{ title }}</div>
    <div class="content">
        <div class="lists"></div>
        <div class="more"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
const title = ref("人气推荐")
</script>
<style lang="scss" scoped>

</style>