<template>
  <div>
    <el-dialog
      title="新增"
      :visible.sync="visible"
      :before-close="modalClose"
      width="40%"
    >
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
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
              prop="catchmentArea"
              label="汇水面积（平方米）"
              label-width="150px"
            >
              <el-input
                v-model="ruleForm.catchmentArea"
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
      <div slot="footer" class="dialog-footer">
        <el-button @click="modalClose">取 消</el-button>
        <el-button type="primary" @click="sure">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    'visible': Boolean
  },
  data() {
    return {
      ruleForm: {
        projectName: '',
        catchmentArea: '',
        projectState: ''
      },
      rules: {
        projectName: { required: true, message: '请输入项目名称', trigger: 'blur' },
        catchmentArea: { required: true, message: '请输入汇水面积', trigger: 'blur' },
        projectState: { required: true, message: '请选择形象进度', trigger: 'change' }
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
    // 关闭弹窗
    modalClose() {
      this.$emit('changeVisible', false)
    },
    // 点击确定
    sure() {
      this.$emit('save')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
