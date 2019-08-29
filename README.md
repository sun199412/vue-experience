# 基于vue-admin-template的vue日常学习开发，总结

关注src/views/template文件夹

## 构建环境
```bash
# 下载
git clone https://github.com/PanJiaChen/vue-admin-template.git

# 进入该项目
cd vue-admin-template

# 下载依赖包
npm install

# 启动
npm run dev
```

This will automatically open http://localhost:9528

## 打包

```bash
# 打包测试环境
npm run build:stage

# 打包生产环境
npm run build:prod
```

# 组件介绍
## [不走vuex的数据交互](https://github.com/sun199412/vue-experience/blob/master/src/views/template/Table/NotGoVuexTable.vue)

1. 在src/api/template/table/table.js里，创建相关的api接口地址
```
  import request from '@/utils/request'
  // 查询列表
  export function getList(params) {
    return request({
      url: '/template/table/list',
      method: 'post',
      params
    })
  }
```

2.在页面src/views/template/Table/NotGoVuexTable.vue中引入并使用该方法
```
  import { getList } from '@/api/template/table/table.js'
  export default {
    name: 'NotGoVuexTable',
    data() {
      return {
        data: []
      }
    },
    created() {
      const params = {
        id: '001'
      }
      // 引入封装的axios接口地址
      getList(params).then(res => {
        if (res.code === 20000) {
          this.data = res.data.RetList
        }
      })
    }
  }
```

## [走vuex的数据交互](https://github.com/sun199412/vue-experience/blob/master/src/views/template/Table/GoVuexTable.vue)

1. 在src/api里，创建相关的api接口地址
```
  import request from '@/utils/request'
  // 查询列表
  export function getList(params) {
    return request({
      url: '/template/table/list',
      method: 'post',
      params
    })
  }
```

2. 在mock/template/table/table.js文件夹里，模拟对应的数据
```
  const state = {
    'content': [
      {
        "id":1543,
        "label":"前期",
        "value":"project_state_01",
        "sort":"1"
      },
      {
        "id":1548,
        "label":"在建",
        "value":"project_state_02",
        "sort":"2"
      },
      {
        "id":1551,
        "label":"完工",
        "value":"project_state_03",
        "sort":"3"
      }
    ]
  }

  export default [
    {
      url: '/template/dic/state',
      type: 'post',
      response: config => {
        console.log('config', config.body)
        return {
          code: 20000,
          data: {
            Total: state.content.length,
            ResPonseBody: state
          }
        }
      }
    }
  ]
```

3. 在src/store/modules/template/table/table.js里，写对应的vuex逻辑
```
  import { getList } from '@/api/template/table/table'

  const state = {
    dataSource: {} // 数据源
  }

  const mutations = {
    setData: (state, data) => {
      state.dataSource = data
    }
  }

  const actions = {
    // 查询数据
    getList({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        getList(userInfo).then(response => {
          commit('setData', response)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }

  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
```

4. 写完之后，在src/store/index.js里引入
```
  import table from './modules/template/table/table'

  Vue.use(Vuex)
  const store = new Vuex.Store({
    modules: {
      app,
      table
    },
    getters
  })

  export default store
```

5. 在src/views/temlate/Table/GoVuexTable.vue里，使用
```
  export default {
    data() {
      return {
        data: []
      }
    },
    // 初始化
    created() {
      const params = {
        id: '001'
      }
      this.$store.dispatch('table/getList', params).then(() => {
        this.data = this.$store.state.table.dataSource.data.RetList
      })
    }
  }
```

## [表格单选删除](https://github.com/sun199412/vue-experience/blob/master/src/views/template/Table/RadioDeleteTable.vue)

1. 给table添加一个单选选项, 并在data里，定义一个属性rowNo来绑定model
```
  <el-table-column label width="65">
    <template slot-scope="scope">
      <el-radio
        v-model="rowNo"
        :label="scope.row.id"
        @change.native="getTemplateRow(scope.$index,scope.row)"
      >&nbsp;</el-radio>
    </template>
  </el-table-column>
```

2. 通过@change方法，传入**scope.$index**(当前数组的下标), **scope.row**(当前行的数据),让单选选中
```
    getTemplateRow(index, row) {
      this.rowData = row
      this.rowNo = row.id
    },
```

3. 通过table的row-click方法，实现点击行选中当前的radio
```
  <el-table
    :data="data"
    border
    style="width: 100%"
    @row-click="getRowData"
  >

  // 点击当前行
  getRowData(row, column, event) {
    this.rowData = row
    this.rowNo = row.id
  },
```

4.删除逻辑
```
  deleteItem() {
    this.data.forEach((item, index) => {
      if (item.id === this.rowData.id) {
        this.data.splice(index, 1)
      }
    })
  }
```

## [表格的多选删除](https://github.com/sun199412/vue-experience/blob/master/src/views/template/Table/CheckboxDeleteTable.vue)

1. 在table里，设置一个单元格，并在table里绑定selection-change方法
```
  <el-table
    ref="table"
    :data="data"
    border
    style="width: 100%"
    @row-click="getRowData"
    @selection-change="handleSelectionChange"
  >
    <el-table-column
      type="selection"
      width="55"
    />

  data() {
    return {
      data: [], // 数据源
      rowNo: [], // 复选框选中的数据
      rowData: {} // 选中的当前行
    }
  },
```

2. 设置table的ref，通过toggleRowSelection这个方法设置复选框选中的状态
```
  // 点击当前行
  getRowData(row, column, event) {
    this.$refs['table'].toggleRowSelection(row)
  },
  // 选中复选框
  handleSelectionChange(val) {
    this.rowNo = val
  },
```

3. 多选删除逻辑，先判断是否有选中的值rowNo，再循环这个rowNo和data,比较他们的id是否相等，相等就删除
```
  // 删除
  deleteItem() {
    if (this.rowNo.length !== 0) {
      this.rowNo.forEach((item, index) => {
        this.data.forEach((item1, index1) => {
          if (item.id === item1.id) {
            this.data.splice(index1, 1)
          }
        })
      })
    }
  }
```


## [可编辑表格及校验](https://github.com/sun199412/vue-experience/blob/master/src/views/template/Table/Editable.vue)

1. 在table外面，使用el-form包起来，然后每一行的el-table-colimn使用template
```
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
    </el-table>
  </el-form>
```

2. 注意：
   1.  **el-form里**绑定的model一定要是一个**对象**
   
   2.  **el-form-item里**绑定的prop要写成**数组+下标+字段**，:prop="'list.'+scope.$index+'.projectType'"

3. 保存逻辑:
```
  save() {
    this.$refs['tableForm'].validate((valid) => {
      if (valid) {
        this.$message({
          type: 'success',
          message: '保存成功'
        })
      } else {
        this.$message({
          type: 'success',
          message: '保存失败'
        })
        return false
      }
    })
  }
```

## [表格自定义校验](https://github.com/sun199412/vue-experience/blob/master/src/views/template/Check/CustomCheckTable.vue)

1. 通过给表单加入blur方法，来校验并修改值
```
  <el-table-column
    label="汇水面积（平方米）"
    width="150"
  >
    <template slot-scope="scope">
      <el-form-item
        :prop="'list.'+scope.$index+'.catchmentArea'"
        :rules="[
          {
            required: true,
            message: '请输入',
            trigger: 'blur'
          },
        ]"
      >
        <el-input
          v-model="scope.row.catchmentArea"
          size="mini"
          @blur="(value)=>getParseFloat(value, scope.$index, 'catchmentArea')"
        />
      </el-form-item>
    </template>
  </el-table-column>

  // 校验汇水面积，总投资额，完成投资额
  getParseFloat(e, index, item) {
    // 对完成投资额的非负数校验
    const reg = /^([1-9]\d*|0)(\.\d*[1-9])?$/
    if (!reg.test(e.target.value)) {
      this.$set(this.formData.list[index], item, '')
    } else {
      const num = this.formData.list[index][item]
      this.$set(this.formData.list[index], item, Number(num).toFixed(2))
    }
  },
```

## [表格自定义校验2](https://github.com/sun199412/vue-experience/blob/master/src/views/template/Table/CustomCheckTable2.vue)

1. 标准的自定义校验，通过rules里的validate方法来校验
```
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
```

## [计算属性传参数](https://github.com/sun199412/vue-experience/blob/master/src/views/template/Other/ComputedToParams.vue)

1. 需求: 形象进度，历史数据里如果是完工则不能选在建或者前期，不是历史数据就是都可以选

2. 定义属性projectStateList，并传入当前行和当前下标，在computed里，通过闭包形式接收
```
  <el-table-column
    prop="projectState"
    label="形象进度"
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
            v-for="item in projectStateList(scope.$index, scope.row)"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
    </template>
  </el-table-column>

  computed: {
    projectStateList: function() {
      // 计算属性传参数
      return (index, row) => this.getProjectState(index, row)
    }
  },
```

3. 通过判断有没有id来确定是否为历史数据，
```
  // 计算形象进度展示
  getProjectState(index, row) {
    // 如果是历史数据
    if (row.id) {
      if (row.projectState === 'project_state_03') {
        const arr = []
        this.stateList.forEach(item => {
          if (row.projectState === item.value) {
            arr.push(item)
          }
        })
        return arr
      } else {
        return this.stateList
      }
    } else {
      return this.stateList
    }
  },
```

## [下拉框禁用](https://github.com/sun199412/vue-experience/blob/master/src/views/template/Other/SelectDisabled.vue)

1. 需求: 形象进度，历史数据里如果是完工则不能选在建或者前期，不是历史数据就是都可以选

2. 定义属性projectStateList，并传入当前行和当前下标，在computed里，通过闭包形式接收
```
  <el-table-column
    prop="projectState"
    label="形象进度"
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
            v-for="item in projectStateList(scope.$index, scope.row)"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          />
        </el-select>
      </el-form-item>
    </template>
  </el-table-column>

  computed: {
    projectStateList: function() {
      // 计算属性传参数
      return (index, row) => this.getProjectState(index, row)
    }
  },
```

3. 给数据源对应的对象添加disabled: true的键值对，再设置的option的disabled属性
```
  // 计算下拉框的展示
  getProjectState(index, row) {
    // 如果是历史数据
    if (row.id) {
      this.stateList.forEach(item => {
        if (row.projectState === 'project_state_03') {
          if (row.projectState === item.value) {
            item.disabled = false
          } else {
            item.disabled = true
          }
        } else {
          item.disabled = false
        }
      })
      return this.stateList
    } else {
      this.stateList.forEach(item => {
        item.disabled = false
      })
      return this.stateList
    }
  },
```

## [多子组件校验和watch的使用](https://github.com/sun199412/vue-experience/blob/master/src/views/template/Check/MoreKidsCheck/index.vue)

1. 在index.vue里，created调完接口后，传给childrenTwo组件，子组件要用watch监听值的改变
```
index.vue里:

  <children-two
    ref="table"
    :list="data"
  />

  created() {
    // 初始化数据
    this.initData()
  },

  methods: {
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
  }

childrenTwo.vue里:

  props: ['list'],
  data() {
    return {
      formData: {
        list: this.list // 数据源
      },
    }
  },

  watch: {
    list: function(newVal, oldVal) {
      this.formData.list = newVal
    }
  },
```

2. 父组件校验每个子组件的form，先给组件设置ref，通过ref来控制,然后每个子组件的校验封装成promise,通过promise.all去校验所有的子组件表单
```
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
```

3. 父组件获取子组件的data: 通过ref拿到
```
  // 保存
  save() {
    Promise.all([this.checkKidsOne(), this.checkKidsTwo()]).then(res => {
      // 获取子组件的data
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
```

## [前端分页](https://github.com/sun199412/vue-experience/blob/master/src/views/template/Other/Pagination.vue)

1. 使用element的分页组件，再在data里，定义currentPage， totalPage， pageSize， currentPageData4个变量
```
  <el-pagination
    :current-page="currentPage"
    :page-sizes="[10, 20, 50]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="data.length"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />

  data() {
    return {
      data: [],
      currentPage: 1, // 当前页，默认1
      totalPage: 1, // 总共多少页，默认1
      pageSize: 10, // 每页显示数量
      currentPageData: [] // 当前页显示内容
    }
  },
```

2. 在created初始化的时候计算每页对应的数据
```
  created() {
    const params = {
      id: '001'
    }
    // 引入封装的axios接口地址
    getPaginationList(params).then(res => {
      if (res.code === 20000) {
        this.data = res.data.RetList
        // 计算一共多少页
        this.totalPage = Math.ceil(this.data.length / this.pageSize)
        // 计算=0时设置为1
        this.totalPage = this.totalPage === 0 ? 1 : this.totalPage
        // 获取当页的数据
        this.getCurrentPageData()
      }
    })
  },

  // 选中不同的每页条数
  handleSizeChange(val) {
    console.log(`每页 ${val} 条`)
  },
  // 页码改变的时候触发
  handleCurrentChange(val) {
    console.log(`当前页: ${val}`)
    this.currentPage = val
    this.getCurrentPageData()
  },
  // 获取当页的数据
  getCurrentPageData() {
    const begin = (this.currentPage - 1) * this.pageSize
    const end = this.currentPage * this.pageSize
    this.currentPageData = this.data.slice(begin, end)
  }
```

## [后端分页](https://github.com/sun199412/vue-experience/blob/master/src/views/template/Other/Pagination2.vue)

1. 后端分页的核心就是在初始化，size-change，current-change这三个方法里，传入对应的pageNo和pageSize调查询接口
```
  <el-pagination
    :current-page="pageNo"
    :page-sizes="[10, 20, 50]"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />

  data() {
    return {
      data: [],
      pageNo: 1, // 当前页
      pageSize: 10, // 每页显示数量
      total: 0 // 总数
    }
  },

  created() {
    const params = {
      pageNo: 1,
      pageSize: 10,
      id: '0001'
    }
    this.initData(params)
  },

  initData(params) {
    getPaginationList(params).then(res => {
      if (res.code === 20000) {
        this.total = res.data.total
        this.data = res.data.RetList
        this.pageNo = res.data.pageNo
        this.pageSize = res.data.pageSize
      }
    })
  },
  // 选中不同的每页条数
  handleSizeChange(val) {
    const params = {
      pageNo: this.pageNo,
      pageSize: val,
      id: '0001'
    }
    this.initData(params)
  },
  // 页码改变的时候触发
  handleCurrentChange(val) {
    const params = {
      pageNo: val,
      pageSize: this.pageSize,
      id: '0001'
    }
    this.initData(params)
  }
```

## [单层弹窗](https://github.com/sun199412/vue-experience/blob/master/src/views/template/Dialog/DialogOne/index.vue)

1. 一个普通的单层弹框，将校验放在了父组件进行

## [多层弹窗](https://github.com/sun199412/vue-experience/blob/master/src/views/template/Dialog/DialogMore/index.vue)

1. 多层弹框，点击新增弹窗第一层，点击汇水面积弹出第二层

## [表单单行展示](https://github.com/sun199412/vue-experience/blob/master/src/views/template/Other/LayoutOne.vue)

## [表单两行展示](https://github.com/sun199412/vue-experience/blob/master/src/views/template/Other/LayoutTwo.vue)

## [普通的树节点](https://github.com/sun199412/vue-experience/blob/master/src/views/template/Tree/NoChildTree/index.vue)

1. 这是一个普通的树节点展示，通过绑定props定义展示字段来展示树，用node-click方法获取点击的树节点数据
```
  <el-tree
    :data="groupList"
    :props="defaultProps"
    @node-click="handleNodeClick"
  />

  data() {
    return {
      groupList: [], // 数据源
      defaultProps: { // 配置项
        children: 'children',
        label: 'groupNm'
      },
      treeRowData: {} // 树选中的数据
    }
  },

  // 点击树节点
  handleNodeClick(data) {
    this.treeRowData = data
  },
```

## [异步树](https://github.com/sun199412/vue-experience/blob/master/src/views/template/Tree/AsyncTree/index.vue)

1. 异步树就是每个叶子节点点击调一次接口，通过props配置节点数据，lazy属性实现懒加载
```
  <el-tree
    :props="defaultProps"
    node-key="_id"
    highlight-current
    lazy
    :load="loadNode"
    @node-click="handleNodeClick"
  />

  data() {
    return {
      data: [], // 数据源
      defaultProps: { // 配置项
        children: 'children',
        label: 'enumName',
        isLeaf: 'leaf'
      },
      treeRowData: {} // 树选中的数据
    }
  },
```

2. 绑定load属性，实现懒加载，通过判断节点中的level,如果是0则调初始化接口，如果大于1则调异步接口，传参数的时候注意，要父节点=当前的子节点(parentEnumKey = node.data.enumKey),再接口返回时，还要判断是否为叶子节点(leaf), 如果leaf为false，则为叶子节点，true则不为叶子节点，继续掉接口
```
  // 异步树叶子节点懒加载逻辑
  loadNode(node, resolve) {
    // 一级节点处理
    if (node.level === 0) {
      this.requestTree(resolve)
    }
    // 其余节点处理
    if (node.level >= 1) {
      // 注意！把resolve传到你自己的异步中去
      this.getIndex(node, resolve)
    }
  },

  // 首次加载一级节点数据函数
  requestTree(resolve) {
    const params = {
      parentEnumKey: '01'
    }
    getOrgList(params).then(res => {
      if (res) {
        this.data = res.data.RetList
        this.data.forEach(item => {
          if (item.isLeaf === '1') {
            item.leaf = false // 为叶子节点
          } else {
            item.leaf = true // 不为叶子节点
          }
        })
        resolve(this.data)
      }
    })
  },

  // 异步加载叶子节点数据函数
  getIndex(node, resolve) {
    const params = {
      parentEnumKey: node.data.enumKey
    }
    getOrgList(params).then(res => {
      if (res) {
        this.data = res.data.RetList
        this.data.forEach(item => {
          if (item.isLeaf === '1') {
            item.leaf = false // 为叶子节点
          } else {
            item.leaf = true // 不为叶子节点
          }
        })
        resolve(this.data)
      }
    })
  },
```