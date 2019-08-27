<template>
  <div class="body">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>单层弹窗</span>
      </div>
      <div class="btnBox">
        <el-button type="primary" size="mini" @click="addList">新增</el-button>
      </div>
      <el-table
        :data="data"
        border
        style="width: 100%"
        @row-click="getRowData"
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
    <Add
      v-if="visible"
      ref="addRef"
      :visible="visible"
      @changeVisible="updateVisible"
      @save="saveList"
    />
  </div>
</template>

<script>
import { getList, addList } from '@/api/template/table/table.js'
import Add from '@/views/template/Dialog/DialogMore/Add'
export default {
  name: 'DialogOne',
  components: {
    Add
  },
  data() {
    return {
      data: [], // 数据源
      rowNo: '', // 单选框绑定的数据
      rowData: {}, // 选中当前行
      visible: false // 弹窗状态
    }
  },
  created() {
    // 初始化
    const params = {
      id: '001'
    }
    this.initData(params)
  },
  methods: {
    // 初始化
    initData(params) {
      // 引入封装的axios接口地址
      getList(params).then(res => {
        if (res.code === 20000) {
          this.data = res.data.RetList
          this.visible = false
        }
      })
    },
    // 选中的当前行
    getTemplateRow(index, row) {
      this.rowData = row
      this.rowNo = row.id
    },
    // 点击当前行
    getRowData(row, column, event) {
      this.rowData = row
      this.rowNo = row.id
    },
    // 新增
    addList() {
      this.visible = true
    },
    // 获取子组件传来的弹窗状态
    updateVisible(code) {
      console.log('code', code)
      this.visible = code
    },
    // 子组件点击保存
    saveList() {
      this.$refs['addRef'].$refs['ruleForm'].validate((valid) => {
        if (valid) {
          addList(this.$refs['addRef'].ruleForm).then(res => {
            if (res) {
              this.$message({
                type: 'success',
                message: res.data.message
              })
            }
            const params = {
              id: '001'
            }
            this.initData(params)
          })
        }
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
