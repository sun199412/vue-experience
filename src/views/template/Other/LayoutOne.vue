<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>表单单行展示</span>
      </div>
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        size="mini"
      >
        <el-row>
          <el-col :md="20" :xs="20" :sm="20">
            <el-form-item
              prop="projectName"
              label="项目名称"
              label-width="150px"
            >
              <el-input
                v-model="ruleForm.projectName"
              />
            </el-form-item>
          </el-col>
          <el-col :md="20" :xs="20" :sm="20">
            <el-form-item
              prop="begainDate"
              label="开始时间"
              label-width="150px"
            >
              <el-date-picker
                v-model="ruleForm.begainDate"
                type="date"
                placeholder="选择日期"
                size="mini"
              />
            </el-form-item>
          </el-col>
          <el-col :md="20" :xs="20" :sm="20">
            <el-form-item
              prop="projectState"
              label="形象进度"
              label-width="150px"
            >
              <el-select
                v-model="ruleForm.projectState"
                clearable
                placeholder="请选择"
                style="width: 100%"
              >
                <el-option
                  v-for="item in systemDicList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="btnBox">
        <el-button type="primary" size="mini" @click="searchItem">查询</el-button>
        <el-button type="primary" size="mini" @click="resetItem">重置</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        projectName: '',
        projectState: '',
        begainDate: ''
      },
      rules: {
        projectName: { required: true, message: '请输入项目名称', trigger: 'blur' },
        projectState: { required: true, message: '请选择形象进度', trigger: 'change' },
        begainDate: { required: true, message: '请选择开始时间', trigger: 'change' }
      },
      systemDicList: [ // 形象进度
        {
          'id': 1543,
          'label': '前期',
          'value': 'project_state_01',
          'sort': '1'
        },
        {
          'id': 1548,
          'label': '在建',
          'value': 'project_state_02',
          'sort': '2'
        },
        {
          'id': 1551,
          'label': '完工',
          'value': 'project_state_03',
          'sort': '3'
        }
      ]
    }
  },
  methods: {
    // 查询
    searchItem() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.$message({
            type: 'success',
            message: '查询成功'
          })
        }
      })
    },
    resetItem() {
      this.$refs['ruleForm'].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.btnBox{
  margin-bottom: 21px;
  text-align: right;
  margin-right: 30px;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner{
  width: 100%;
}
</style>
