<template>
  <div class="about">
    <h1>This is an about page1</h1>
    <div id="myChart">

    </div>
  </div>
</template>
<script>
export default {
    name: 'eCharts',
    data () {
        return {
        msg: 'Welcome to Your Vue.js App'
        }
    },
    mounted(){
        this.drawLine();
    },
    methods: {
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: { text: '在Vue中使用echarts' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        }
    }
}
</script>

<style lang="scss" scoped>
#myChart{
  width: 375px;
  height: 300px;
}
</style>