<template>
  <div>
    <el-dialog
      title="组织树"
      :visible="visible"
      width="40%"
      :before-close="modalClose"
    >
      <el-tree
        :data="groupList"
        :props="defaultProps"
        @node-click="handleNodeClick"
      />
      <div class="rightBtn">
        <el-button type="primary" size="mini" @click="save">保存</el-button>
        <el-button size="mini" @click="modalClose">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getGroupList } from '@/api/template/tree/tree.js'
export default {
  props: ['visible'],
  data() {
    return {
      groupList: [], // 数据源
      defaultProps: {
        children: 'children',
        label: 'groupNm'
      },
      treeRowData: {} // 树选中的数据
    }
  },
  created() {
    // 初始化
    getGroupList().then(res => {
      if (res) {
        this.groupList = res.data.RetList
      }
    })
  },
  methods: {
    // 点击树节点
    handleNodeClick(data) {
	    this.treeRowData = data
    },
    // 关闭弹窗
    modalClose() {
      this.$emit('changeVisible', false)
    },
    // 点击确定
    save() {
      this.$emit('save', this.treeRowData)
    }
  }
}
</script>

<style lang="scss" scoped>
.rightBtn{
  text-align: right;
  margin-top: 20px;
}
</style>
