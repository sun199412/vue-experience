<template>
  <div class="body">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>表格自定义校验</span>
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
            width="150"
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
            width="150"
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
            label="项目位置"
            width="150"
          >
            <template slot-scope="scope">
              <el-form-item
                :prop="'list.'+scope.$index+'.projectLocaltion'"
                :rules="[
                  {
                    required: true,
                    message: '请输入',
                    trigger: 'blur'
                  },
                ]"
              >
                <el-input
                  v-model="scope.row.projectLocaltion"
                  size="mini"
                />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            label="汇水面积（平方米）"
            width="150"
          >
            <template slot-scope="scope">
              <el-form-item
                :prop="'list.'+scope.$index+'.catchmentArea'"
                :rules="[
                  {
                    validator: (rule, value, callback)=>{getParseFloat(rule, value, callback)},
                    trigger: ['blur']
                  }
                ]"
              >
                <el-input
                  v-model="scope.row.catchmentArea"
                  size="mini"
                />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            label="总投资（万）"
            width="150"
          >
            <template slot-scope="scope">
              <el-form-item
                :prop="'list.'+scope.$index+'.totalInvestment'"
                :rules="[
                  {
                    validator: (rule, value, callback)=>{getParseFloat(rule, value, callback)},
                    trigger: ['blur']
                  }
                ]"
              >
                <el-input
                  v-model="scope.row.totalInvestment"
                  size="mini"
                />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            prop="finishedInvestment"
            label="完成投资（万）"
            width="150"
          >
            <template slot-scope="scope">
              <el-form-item
                :prop="'list.'+scope.$index+'.finishedInvestment'"
                :rules="[
                  {
                    validator: (rule, value, callback)=>{getParseFloatFinishedInvestment(rule, value, callback, scope.$index)},
                    trigger: ['blur']
                  }
                ]"
              >
                <el-input
                  v-model="scope.row.finishedInvestment"
                  size="mini"
                />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            prop="projectState"
            label="形象进度"
            width="150"
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
                    v-for="item in stateList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            label="建设方"
            width="150"
          >
            <template slot-scope="scope">
              <el-form-item
                :prop="'list.'+scope.$index+'.buildComp'"
                :rules="[
                  {
                    required: true,
                    message: '请输入',
                    trigger: 'blur'
                  },
                ]"
              >
                <el-input
                  v-model="scope.row.buildComp"
                  size="mini"
                />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            label="联系人"
            width="150"
          >
            <template slot-scope="scope">
              <el-form-item
                :prop="'list.'+scope.$index+'.contacts'"
                :rules="[
                  {
                    required: true,
                    message: '请输入',
                    trigger: 'blur'
                  },
                ]"
              >
                <el-input
                  v-model="scope.row.contacts"
                  size="mini"
                />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            prop="teleNum"
            label="电话"
            width="150"
          >
            <template slot-scope="scope">
              <el-form-item
                :prop="'list.'+scope.$index+'.teleNum'"
                :rules="[
                  {
                    validator: (rule, value, callback)=>{getTel(rule, value, callback)},
                    trigger: ['blur']
                  }
                ]"
              >
                <el-input
                  v-model="scope.row.teleNum"
                  size="mini"
                />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            prop="begainDate"
            label="开工时间"
            width="150"
          >
            <template slot-scope="scope">
              <el-form-item
                :prop="'list.'+scope.$index+'.begainDate'"
                :rules="[
                  {
                    required: true,
                    message: '请输入',
                    trigger: 'change'
                  },
                ]"
              >
                <el-date-picker
                  v-model="scope.row.begainDate"
                  type="date"
                  size="mini"
                  placeholder="选择日期"
                />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            prop="endDate"
            label="完工时间"
            width="150"
          >
            <template slot-scope="scope">
              <el-form-item
                :prop="'list.'+scope.$index+'.endDate'"
                :rules="[
                  {
                    required: true,
                    message: '请输入',
                    trigger: 'change'
                  },
                ]"
              >
                <el-date-picker
                  v-model="scope.row.endDate"
                  type="date"
                  placeholder="选择日期"
                  size="mini"
                />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="150"
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
      <li>电话只能为正整数</li>
      <li>汇水面积，总投资，完成投资必须为数字且保留两位小数，不能为负数</li>
      <li>总投资额大于完成投资额</li>
      <li>所有表单都为必输</li>
    </ol>
  </div>
</template>

<script>
import { getList, getProject, getState } from '@/api/template/table/table.js'
export default {
  name: 'CustomCheckTable',
  data() {
    return {
      formData: {
        list: [] // 数据源
      },
      rowData: {}, // 选中的当前行
      projectList: [], // 项目类别
      stateList: [] // 形象进度
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
          this.formData.list = res.data.RetList
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
      obj.id = Math.random()
      obj.catchmentArea = '0'
      obj.totalInvestment = '0'
      obj.finishedInvestment = '0'
      this.formData.list.push(obj)
    },
    // 删除
    deleteItem(index) {
      this.$confirm('确认删除该记录吗?', '提示', {
        type: 'warning'
      }).then(() => {
        this.formData.list.splice(index, 1)
      })
    },
    // 校验电话
    getTel(rule, value, callback) {
      const reg = /^[1-9]\d*$/
      if (!value) {
        callback('请输入')
      }
      if (!reg.test(value)) {
        callback('输入内容不合法')
      }
      callback()
    },
    // 校验非负数
    getParseFloat(rule, value, callback) {
      // 对完成投资额的非负数校验
      const reg = /^([1-9]\d*|0)(\.\d*[1-9])?$/
      if (!value) {
        callback('请输入')
      }
      if (!reg.test(value)) {
        callback('输入内容不合法')
      }
      callback()
    },

    // 校验完成投资额
    getParseFloatFinishedInvestment(rule, value, callback, index) {
      const reg = /^([1-9]\d*|0)(\.\d*[1-9])?$/
      // 匹配正则
      if (!reg.test(value)) {
        callback('输入内容不合法')
        // 比较完成投资额与总投资额
      } else if (Number(this.formData.list[index].totalInvestment) < Number(value)) {
        callback('完成投资不能大于总投资')
      }
      callback()
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
            type: 'error',
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
