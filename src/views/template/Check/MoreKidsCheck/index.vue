<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>多子组件校验和watch的使用</span>
      </div>
      <div class="btnBox">
        <el-button type="primary" size="mini" @click="save">保存</el-button>
      </div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>子组件一</span>
        </div>
        <div>
          <children-one ref="form" />
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>子组件二</span>
        </div>
        <div>
          <children-two
            ref="table"
            :list="data"
          />
        </div>
      </el-card>
    </el-card>
  </div>
</template>

<script>
import ChildrenOne from '@/views/template/Check/MoreKidsCheck/ChildrenOne'
import ChildrenTwo from '@/views/template/Check/MoreKidsCheck/ChildrenTwo'
import { getList } from '@/api/template/table/table.js'
export default {
  name: 'MoreKidsCheck',
  components: {
    ChildrenOne,
    ChildrenTwo
  },
  data() {
    return {
      activeNames: ['1'], // 选中的面板
      data: [] // 数据源
    }
  },
  created() {
    // 初始化数据
    this.initData()
  },
  methods: {
    // 初始化数据
    initData() {
      const params = {
        id: '001'
      }
      // 引入封装的axios接口地址
      getList(params).then(res => {
        if (res.code === 20000) {
          this.data = res.data.RetList
        }
      })
    },
    // 校验子组件一
    checkKidsOne() {
      return new Promise((resolve, reject) => {
        this.$refs['form'].$refs['ruleForm'].validate((valid) => {
          if (valid) {
            resolve('success')
          } else {
            reject('error')
          }
        })
      })
    },
    // 校验子组件二
    checkKidsTwo() {
      return new Promise((resolve, reject) => {
        this.$refs['table'].$refs['tableForm'].validate((valid) => {
          if (valid) {
            resolve('success')
          } else {
            reject('error')
          }
        })
      })
    },
    // 保存
    save() {
      Promise.all([this.checkKidsOne(), this.checkKidsTwo()]).then(res => {
        const params = {
          childOneForm: this.$refs['form'].formData,
          childTwoList: this.data
        }
        console.log('params', JSON.stringify(params))
        this.$message({
          type: 'success',
          message: '保存成功'
        })
      }).catch(err => {
        this.$message({
          type: 'error',
          message: err
        })
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
.box-card{
  margin-bottom: 20px;
}
</style>
