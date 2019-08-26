<template>
  <div class="body">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>前端分页</span>
      </div>
      <el-table
        :data="currentPageData"
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
        :current-page="currentPage"
        :page-sizes="[10, 20, 50]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="data.length"
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
      currentPage: 1, // 当前页，默认1
      totalPage: 1, // 总共多少页，默认1
      pageSize: 10, // 每页显示数量
      currentPageData: [] // 当前页显示内容
    }
  },
  created() {
    const params = {
      id: '001'
    }
    // 引入封装的axios接口地址
    getPaginationList(params).then(res => {
      if (res.code === 20000) {
        this.data = res.data.RetList
        // 计算一共多少页
        this.totalPage = Math.ceil(this.data.length / this.pageSize)
        // 计算=0时设置为1
        this.totalPage = this.totalPage === 0 ? 1 : this.totalPage
        // 获取当页的数据
        this.getCurrentPageData()
      }
    })
  },
  methods: {
    // 选中不同的每页条数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    // 页码改变的时候触发
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
      this.getCurrentPageData()
    },
    // 获取当页的数据
    getCurrentPageData() {
      const begin = (this.currentPage - 1) * this.pageSize
      const end = this.currentPage * this.pageSize
      this.currentPageData = this.data.slice(begin, end)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
