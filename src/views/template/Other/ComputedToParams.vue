<template>
  <div class="body">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>计算属性传参数</span>
      </div>
      <div class="btnBox">
        <el-button type="primary" size="mini" @click="addList">新增</el-button>
        <el-button type="primary" size="mini" @click="save">保存</el-button>
      </div>
      <el-form
        ref="tableForm"
        :model="formData"
      >
        <el-table
          :data="formData.list"
          border
          style="width: 100%"
          @row-click="getRowData"
        >
          <el-table-column
            label="项目类别"
          >
            <template slot-scope="scope">
              <el-form-item
                :prop="'list.'+scope.$index+'.projectType'"
                :rules="[
                  {
                    required: true,
                    message: '请选择',
                    trigger: 'change'
                  },
                ]"
              >
                <el-select
                  v-model="scope.row.projectType"
                  placeholder="请选择项目类别"
                  size="small"
                >
                  <el-option
                    v-for="item in projectList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            prop="projectName"
            label="项目名称"
          >
            <template slot-scope="scope">
              <el-form-item
                :prop="'list.'+scope.$index+'.projectName'"
                :rules="[
                  {
                    required: true,
                    message: '请输入',
                    trigger: 'blur'
                  },
                ]"
              >
                <el-input
                  v-model="scope.row.projectName"
                  size="mini"
                />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            prop="projectState"
            label="形象进度"
          >
            <template slot-scope="scope">
              <el-form-item
                :prop="'list.'+scope.$index+'.projectState'"
                :rules="[
                  {
                    required: true,
                    message: '请选择',
                    trigger: 'change'
                  },
                ]"
              >
                <el-select
                  v-model="scope.row.projectState"
                  placeholder="请选择"
                  size="small"
                >
                  <el-option
                    v-for="item in projectStateList(scope.$index, scope.row)"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
          >
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="deleteItem(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form>
    </el-card>
    <ol>
      需求:
      <li>形象进度，历史数据里如果是完工则不能选在建或者前期，不是历史数据就是都可以选</li>
    </ol>
  </div>
</template>

<script>
import { getList, getProject, getState } from '@/api/template/table/table.js'
export default {
  name: 'ComputedToParams',
  data() {
    return {
      formData: {
        list: [] // 数据源
      },
      rowData: {}, // 当前行
      projectList: [], // 项目类别
      stateList: [] // 形象进度
    }
  },
  computed: {
    projectStateList: function() {
      // 计算属性传参数
      return (index, row) => this.getProjectState(index, row)
    }
  },
  created() {
    // 初始化
    this.initData()
    // 初始化查询项目类别
    this.initprojectType()
    // 初始化查询形象进度
    this.initProjectState()
  },
  methods: {
    // 初始化方法
    initData() {
      const params = {
        id: '001'
      }
      // 引入封装的axios接口地址
      getList(params).then(res => {
        if (res.code === 20000) {
          const data = res.data.RetList
          data.forEach(item => {
            item.rowNo = Math.random()
          })
          this.formData.list = data
        }
      })
    },
    // 初始化查询项目类别
    initprojectType() {
      const params = {
        dicName: 'project'
      }
      getProject(params).then(res => {
        if (res.code === 20000) {
          this.projectList = res.data.ResPonseBody.content
        }
      })
    },
    // 初始化查询形象进度
    initProjectState() {
      const params = {
        dicName: 'state'
      }
      getState(params).then(res => {
        if (res.code === 20000) {
          this.stateList = res.data.ResPonseBody.content
        }
      })
    },
    // 点击当前行
    getRowData(row, column, event) {
      this.rowData = row
    },
    // 新增
    addList() {
      const obj = {}
      // 主键
      obj.rowNo = Math.random()
      this.formData.list.push(obj)
    },
    // 删除
    deleteItem(index) {
      this.formData.list.splice(index, 1)
    },
    // 计算形象进度展示
    getProjectState(index, row) {
      // 如果是历史数据
      if (row.id) {
        if (row.projectState === 'project_state_03') {
          const arr = []
          this.stateList.forEach(item => {
            if (row.projectState === item.value) {
              arr.push(item)
            }
          })
          return arr
        } else {
          return this.stateList
        }
      } else {
        return this.stateList
      }
    },
    // 保存
    save() {
      this.$refs['tableForm'].validate((valid) => {
        if (valid) {
          this.$message({
            type: 'success',
            message: '保存成功'
          })
        } else {
          this.$message({
            type: 'success',
            message: '保存失败'
          })
          return false
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
.el-date-editor.el-input, .el-date-editor.el-input__inner{
  width: 100%;
}
ol{
  background: #fff;
  font-size: 18px;
  color:red;
  li {
    margin: 5px 0;
  }
}
</style>
