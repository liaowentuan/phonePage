<template>
  <div class="about">
    <van-collapse v-model="activeName" accordion @change="changeCollapse">
      <van-collapse-item title="条形图" name="1">
        <div id="drawLine">
        </div>
      </van-collapse-item>
      <van-collapse-item title="折线图" name="2">
        <div id="drawCategory">
        </div>
      </van-collapse-item>
      <van-collapse-item title="有赞美业" name="3">
        线上拓客，随时预约，贴心顺手的开单收银
      </van-collapse-item>
    </van-collapse>
    
  </div>
</template>
<script>
export default {
    name: 'eCharts',
    data () {
        return {
            activeName: 1,
            eventData: [
                {
                    funcName: 'drawLine'
                },
                {
                    funcName: 'drawCategory'
                }
            ]
        }
    },
    mounted(){
        this.$nextTick(() => {
            // this.drawLine()
        })
    },
    methods: {
        changeCollapse(item) {
            setTimeout(() => {
                let funcName = this.eventData[item - 1].funcName
                this[funcName]()
            }, 20)
        },
        drawLine(){ // 绘制条形图
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.echarts.init(document.getElementById('drawLine'))
            // 绘制图表
            myChart.setOption({
                title: { text: '条形图' },
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
        },
        drawCategory() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.echarts.init(document.getElementById('drawCategory'))
            // 绘制图表
            myChart.setOption({
                title: { text: '折线图' },
                tooltip: {},
                xAxis: {
                    type: 'category',
                    data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [82, 93, 90, 93, 129, 133, 132],
                    type: 'line'
                }]
            });
        }
    }
}
</script>

<style lang="scss" scoped>
#drawLine, #drawCategory{
  width: 315px;
  height: 240px;
}
</style>