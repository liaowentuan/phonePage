<template>
  <div class="about">
    <van-tabs v-model="active"  type="card">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" v-for="item in 8" :key="item">标签</van-tabbar-item>
    </van-tabbar>
    <h1>This is an about page</h1>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <div class="test">
      123
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>
<style lang="scss" scoped>
  .test{
    width: 300px;
    height: 30px;
    background: red;
  }
</style>
