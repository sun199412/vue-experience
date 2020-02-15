<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>echarts地图</span>
      </div>
      <div ref="map" class="box-content" />
    </el-card>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
import jsonp from 'jsonp'
export default {
  data() {
    return {
      options: {
        title: {
          text: '疫情地图'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '确诊人数',
            type: 'map',
            mapType: 'china',
            label: {
              show: true
            },
            data: [], // 数据源
            emphasis: {
              label: {
                color: '#fff'
              },
              itemStyle: {
                areaColor: '#ccc'
              }
            }
          }
        ],
        visualMap: {
          type: 'piecewise',
          splitNumber: 5,
          color: ['#9c0505', '#ffc0b1'],
          align: 'right',
          itemWidth: 20,
          itemHeight: 10,
          pieces: [
            { min: 10000 },
            { min: 1000, max: 9999 },
            { min: 100, max: 999 },
            { min: 10, max: 99 },
            { min: 1, max: 9 }
          ]
        }
      }
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427', {}, (err, data) => {
        if (!err) {
          this.options.series[0].data = data.data.list
          const dom = echarts.init(this.$refs.map)
          dom.setOption(this.options)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.box-content {
  width: 100%;
  height: 700px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}
</style>
