<template>
  <div id="app">
    <div id="searchBox">

    </div>
    <div class="contant">
      <router-view/>
    </div>
    <van-tabbar v-model="active" @change="changeBar">
      <van-tabbar-item v-for="(item,index) in barArr" :key="index">{{item.barItemName}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 1,
      barArr: [
        {
          url: 'vueCli',
          barItemName: 'vue'
        },{
          url: 'python',
          barItemName: 'python'
        },{
          url: 'server',
          barItemName: 'server'
        },{
          url: 'computer',
          barItemName: 'computer'
        },{
          url: 'more',
          barItemName: 'more'
        },
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.active = 0
      this.changeBar(0)
    })
  },
  methods: {
    changeBar (active) {
      this.$router.push({path: this.barArr[active].url})
    }
  }
}
</script>

<style lang="scss">
#app {
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
}
.contant{
  position: fixed;
  top: 50px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: auto;
}
#searchBox {
  width: 375px;
  height: 50px;
  background: red;
}
*{
  padding: 0;
  margin: 0;
  border: 0;
}
a{
  color:#333;
  text-decoration: none;
}
</style>
