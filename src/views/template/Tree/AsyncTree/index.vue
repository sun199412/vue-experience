<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>异步树</span>
      </div>
      <el-form
        ref="ruleForm"
        :model="formData"
        class="login-info"
        size="mini"
      >
        <el-row>
          <el-col :md="12" :xs="24" :sm="24">
            <el-form-item
              label="机构树:"
              label-width="150px"
              style="width: 80%"
              prop="orgNm"
              :rules="[
                {
                  required: true,
                  message: '请输入',
                  trigger: 'blur'
                },
              ]"
            >
              <el-input
                v-model="formData.orgNm"
                placeholder="机构树"
                @focus="openOrgTree"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <AsyncTree
      v-if="orgStatus"
      :visible="orgStatus"
      @changeVisible="updateVisible"
      @save="saveOrg"
    />
  </div>
</template>

<script>
import AsyncTree from '@/views/template/Tree/AsyncTree/AsyncTree'
export default {
  components: {
    AsyncTree
  },
  data() {
    return {
      formData: {
        orgNm: '',
        orgNo: ''
      },
      orgStatus: false // 机构树弹窗
    }
  },
  methods: {
    // 打开弹窗
    openOrgTree() {
      this.orgStatus = true
    },
    // 接收子组件关闭弹窗的方法
    updateVisible(code) {
      this.orgStatus = code
    },
    // 点击确定
    saveOrg(code) {
      if (JSON.stringify(code) === '{}') {
        this.$message({
          type: 'error',
          message: '请选择一条数据'
        })
        return
      }
      this.$set(this.formData, 'orgNm', code.enumName)
      this.formData.orgNo = code.enumKey
      this.$refs['ruleForm'].clearValidate()
      this.orgStatus = false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
