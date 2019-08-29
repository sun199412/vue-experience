<template>
  <div>
    <div>静态数据</div>
    <v-chart :options="option" />
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
export default {
  components: {
    'v-chart': ECharts
  },
  data() {
    return {
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts{
	left: -55px;
	top: -22px;
	transform: scale(0.9);
}
</style>
