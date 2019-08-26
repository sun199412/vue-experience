<template>
  <div class="body">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>后端分页</span>
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
      <el-pagination
        :current-page="pageNo"
        :page-sizes="[10, 20, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
  </div>
</template>

<script>
import { getPaginationList } from '@/api/template/table/table.js'
export default {
  name: 'Pagination',
  data() {
    return {
      data: [],
      pageNo: 1, // 当前页
      pageSize: 10, // 每页显示数量
      total: 0 // 总数
    }
  },
  created() {
    const params = {
      pageNo: 1,
      pageSize: 10,
      id: '0001'
    }
    this.initData(params)
  },
  methods: {
    // 初始化数据
    initData(params) {
      getPaginationList(params).then(res => {
        if (res.code === 20000) {
          this.total = res.data.total
          this.data = res.data.RetList
          this.pageNo = res.data.pageNo
          this.pageSize = res.data.pageSize
        }
      })
    },
    // 选中不同的每页条数
    handleSizeChange(val) {
      const params = {
        pageNo: this.pageNo,
        pageSize: val,
        id: '0001'
      }
      this.initData(params)
    },
    // 页码改变的时候触发
    handleCurrentChange(val) {
      const params = {
        pageNo: val,
        pageSize: this.pageSize,
        id: '0001'
      }
      this.initData(params)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
