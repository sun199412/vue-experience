<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>折叠表格树</span>
    </div>
    <el-table
      :data="deptList"
      row-key="deptId"
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="deptName" label="部门名称" />
      <el-table-column prop="orderNum" label="排序" />
      <el-table-column prop="status" label="状态" />
    </el-table>
  </el-card>
</template>

<script>
import { getTableTree } from '@/api/template/table/table.js'
export default {
  data() {
    return {
      deptList: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      getTableTree().then(res => {
        this.deptList = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
