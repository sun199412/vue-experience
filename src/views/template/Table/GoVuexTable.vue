<template>
  <div class="body">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>走vuex的数据交互</span>
      </div>
      <el-table
        :data="data"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="projectType"
          label="项目类别"
          width="150"
        />
        <el-table-column
          prop="projectName"
          label="项目名称"
          width="150"
        />
        <el-table-column
          prop="projectLocaltion"
          label="项目位置"
          width="150"
        />
        <el-table-column
          prop="catchmentArea"
          label="汇水面积（平方米）"
          width="150"
        />
        <el-table-column
          prop="totalInvestment"
          label="总投资（万）"
          width="150"
        />
        <el-table-column
          prop="finishedInvestment"
          label="完成投资（万）"
          width="150"
        />
        <el-table-column
          prop="projectState"
          label="形象进度"
          width="150"
        />
        <el-table-column
          prop="buildComp"
          label="建设方"
          width="150"
        />
        <el-table-column
          prop="contacts"
          label="联系人"
          width="150"
        />
        <el-table-column
          prop="teleNum"
          label="电话"
          width="150"
        />
        <el-table-column
          prop="begainDate"
          label="开工时间"
          width="150"
        />
        <el-table-column
          prop="endDate"
          label="完工时间"
          width="150"
        />
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'GoVuexTable',
  data() {
    return {
      data: []
    }
  },
  // 初始化
  created() {
    const params = {
      id: '001'
    }
    this.$store.dispatch('table/getList', params).then(() => {
      this.data = this.$store.state.table.dataSource.data.RetList
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
