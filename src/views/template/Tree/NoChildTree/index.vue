<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>树</span>
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
              label="组织树:"
              label-width="150px"
              style="width: 80%"
              prop="groupNm"
              :rules="[
                {
                  required: true,
                  message: '请输入',
                  trigger: 'blur'
                },
              ]"
            >
              <el-input
                v-model="formData.groupNm"
                placeholder="组织树"
                @focus="openGroupTree"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <Child
      v-if="groupStatus"
      :visible="groupStatus"
      @changeVisible="updateVisible"
      @save="saveGroup"
    />
  </div>
</template>

<script>
import Child from '@/views/template/Tree/NoChildTree/Child'
export default {
  components: {
    Child
  },
  data() {
    return {
      formData: {
        groupNm: '',
        groupNo: ''
      },
      groupStatus: false // 组织树弹窗
    }
  },
  methods: {
    // 打开弹窗
    openGroupTree() {
      this.groupStatus = true
    },
    // 接收子组件关闭弹窗的方法
    updateVisible(code) {
      this.groupStatus = code
    },
    // 点击确定
    saveGroup(code) {
      if (JSON.stringify(code) === '{}') {
        this.$message({
          type: 'error',
          message: '请选择一条数据'
        })
        return
      }
      this.groupStatus = false
      this.$set(this.formData, 'groupNm', code.groupNm)
      this.formData.groupNo = code.groupNo
      this.$refs['ruleForm'].clearValidate()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
