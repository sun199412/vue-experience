<template>
  <div class="body">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>表格的单选删除</span>
      </div>
      <el-table
        :data="data"
        border
        style="width: 100%"
      >
        <el-table-column label width="65">
          <template slot-scope="scope">
            <el-radio
              v-model="rowNo"
              :label="scope.row.id"
              @change.native="getTemplateRow(scope.$index,scope.row)"
            >&nbsp;</el-radio>
          </template>
        </el-table-column>
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
import { getList } from '@/api/template/table/table.js'
export default {
  name: 'NotGoVuexTable',
  data() {
    return {
      data: [], // 数据源
      rowNo: '', // 选中的数据
      rowData: {} // 当前行
    }
  },
  created() {
    const params = {
      id: '001'
    }
    // 引入封装的axios接口地址
    getList(params).then(res => {
      if (res.code === 20000) {
        this.data = res.data.RetList
      }
    })
  },
  methods: {
    // 选中的当前行
    getTemplateRow(index, row) {
      this.rowData = row
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
