<template>
  <div class="body">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>表格的多选删除</span>
      </div>
      <div class="btnBox">
        <el-button type="primary" size="mini" @click="addList">新增</el-button>
        <el-button type="danger" size="mini" @click="deleteItem">删除</el-button>
      </div>
      <el-table
        ref="table"
        :data="data"
        border
        style="width: 100%"
        @row-click="getRowData"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
        />
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
  name: 'CheckboxDeleteTable',
  data() {
    return {
      data: [], // 数据源
      rowNo: [], // 复选框选中的数据
      rowData: {} // 选中的当前行
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
    // 点击当前行
    getRowData(row, column, event) {
      this.$refs['table'].toggleRowSelection(row)
    },
    // 选中复选框
    handleSelectionChange(val) {
      this.rowNo = val
    },
    // 新增
    addList() {
      const obj = {}
      obj.id = Math.random()
      obj.projectType = Math.random()
      this.data.push(obj)
    },
    // 删除
    deleteItem() {
      this.data.forEach((item, index) => {
        this.rowNo.forEach(it => {
          if (item.id === it.id) {
            this.data.splice(it, 1)
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.btnBox{
  margin-bottom: 21px;
  text-align: right;
}
</style>
