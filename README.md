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

## [表格自定义校验](https://github.com/sun199412/vue-experience/blob/master/src/views/template/Table/CustomCheckTable.vue)

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