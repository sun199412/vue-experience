<template>
  <div>
    <div>动态数据</div>
    <v-chart :options="option" />
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
export default {
  components: {
    'v-chart': ECharts
  },
  props: {
    'data': {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      option: {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.xData
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#5fa1e1'
            }
          }
        },
        series: [
          {
            data: this.yData,
            type: 'line',
            areaStyle: {
              color: '#d0e9ff'
            },
            lineStyle: {
              color: '#5fa1e1'
            },
            itemStyle: {
              color: '#5fa1e1'
            },
            smooth: true
          }
        ]
      }
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    xData: function() {
      if (JSON.stringify(this.data) !== '{}') {
        const arr = this.data
        const x = []
        arr.forEach(item => {
          x.push(item.tradeDate)
        })
        return x
      }
    },
    // eslint-disable-next-line vue/return-in-computed-property
    yData: function() {
      if (JSON.stringify(this.data) !== '{}') {
        const arr = this.data
        const y = []
        arr.forEach(item => {
          y.push(item.totalNum)
        })
        return y
      }
    }
  },
  watch: {
    xData: function(newVal, oldVal) {
      this.option.xAxis.data = newVal
    },
    yData: function(newVal, oldVal) {
      this.option.series[0].data = newVal
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
