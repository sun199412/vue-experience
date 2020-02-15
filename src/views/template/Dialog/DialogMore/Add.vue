<template>
  <div>
    <el-dialog
      title="新增"
      :visible.sync="visible"
      :before-close="modalClose"
      width="60%"
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
              class="formItem"
            >
              <el-input
                v-model="ruleForm.catchmentArea"
                disabled
              />
              <el-button
                type="primary"
                class="moreBtn"
                @click.native.prevent="showList"
              >
                ...
              </el-button>
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
      <more
        ref="more"
        :visible="moreStatus"
        @changeVisible="updateVisible"
        @save="saveArea"
      />
    </el-dialog>
  </div>
</template>

<script>
import More from '@/views/template/Dialog/DialogMore/More'
export default {
  components: {
    More
  },
  props: {
    'visible': Boolean
  },
  data() {
    return {
      moreStatus: false, // 弹窗
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
    },
    // 打开子弹窗
    showList() {
      this.moreStatus = true
    },
    // 关闭子弹窗
    updateVisible(code) {
      this.moreStatus = false
    },
    saveArea() {
      this.$refs['more'].$refs['childForm'].validate((valid) => {
        if (valid) {
          const form = this.$refs['more'].ruleForm
          const res = Number(form.areaOne) * Number(form.sum)
          this.$set(this.ruleForm, 'catchmentArea', res.toString())
          this.moreStatus = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.formItem{
  position: relative;
  .el-input{
    width: 91%;
  }
  .moreBtn{
    position: absolute;
  }
}
</style>
