<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>echarts的使用</span>
      </div>
      <el-row class="progressBox">
        <el-col :md="11" :xs="24" :sm="24" class="progressBox_start">
          <LineDemo
            :data="data"
          />
        </el-col>
        <el-col :offset="1" :md="12" :xs="24" :sm="24" class="progressBox_start">
          <BarDemo />
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { getTotal } from '@/api/template/charts/charts'
import LineDemo from '@/views/template/Other/Echarts/Line'
import BarDemo from '@/views/template/Other/Echarts/Bar'
export default {
  components: {
    LineDemo,
    BarDemo
  },
  data() {
    return {
      data: []
    }
  },
  mounted() {
    getTotal().then(res => {
      console.log(res.data.RetList)
      this.data = res.data.RetList
    })
  }
}
</script>

<style lang="scss" scoped>
.progressBox{
  .progressBox_start{
    border: 1px solid #ededed;
    padding: 20px;
    box-sizing: border-box;
  }
}

</style>
