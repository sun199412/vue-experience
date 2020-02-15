<template>
  <div>
    <el-dialog
      title="汇水面积新增"
      :visible.sync="visible"
      :before-close="modalClose"
      width="40%"
      append-to-body
    >
      <el-form
        ref="childForm"
        :model="ruleForm"
        :rules="rules"
      >
        <el-row>
          <el-col :md="20" :xs="20" :sm="20">
            <el-form-item
              prop="areaOne"
              label="单个面积"
              label-width="150px"
            >
              <el-input
                v-model="ruleForm.areaOne"
              />
            </el-form-item>
          </el-col>
          <el-col :md="20" :xs="20" :sm="20">
            <el-form-item
              prop="sum"
              label="项目数"
              label-width="150px"
            >
              <el-input
                v-model="ruleForm.sum"
              />
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
        areaOne: '',
        sum: ''
      },
      rules: {
        areaOne: { required: true, message: '请输入单个项目面积', trigger: 'blur' },
        sum: { required: true, message: '请输入项目数', trigger: 'blur' }
      }
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
