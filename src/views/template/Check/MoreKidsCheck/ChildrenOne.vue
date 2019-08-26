<template>
  <div>
    <el-form
      ref="ruleForm"
      :model="formData"
      class="login-info"
      size="mini"
    >
      <el-row>
        <el-col :md="12" :xs="24" :sm="24">
          <el-form-item
            label="建成面积:"
            label-width="150px"
            prop="buildedArea"
            :rules="[
              {
                required: true,
                message: '请输入',
                trigger: 'blur'
              },
            ]"
          >
            <el-input
              v-model="formData.buildedArea"
              placeholder="建成面积"
            />
          </el-form-item>
        </el-col>
        <el-col :md="12" :xs="24" :sm="24">
          <el-form-item
            label="在建面积:"
            label-width="150px"
            prop="buldingArea"
            :rules="[
              {
                required: true,
                message: '请输入',
                trigger: 'blur'
              },
            ]"
          >
            <el-input
              v-model="formData.buldingArea"
              placeholder="在建面积"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        buldingArea: '',
        buildedArea: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
