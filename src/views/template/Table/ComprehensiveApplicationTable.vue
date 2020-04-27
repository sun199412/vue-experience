<template>
  <div class="body">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>综合练习</span>
      </div>
      <el-table :data="data" border style="width: 100%" show-summary>
        <el-table-column prop="name" label="商品种类" width="160" />
        <el-table-column prop="price" label="价格" width="160" />
        <el-table-column prop="count" label="总数" width="160" />
        <el-table-column prop="countmount" label="剩余数量" width="160" />
        <el-table-column prop="buycount" label="购买数量" width="400">
          <template slot-scope="scope">
            <el-button @click="addCount(scope.row, scope.$index)">
              <i class="el-icon-plus"></i>
            </el-button>
            <el-input
              v-model="scope.row.buycount"
              @change="(value)=>changeCount(value, scope.row, scope.$index)"
              placeholder="请输入内容"
              maxlength="10"
            ></el-input>
            <el-button @click="deleteCount(scope.row, scope.$index)">
              <i class="el-icon-minus"></i>
            </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="sum" label="总计" width="160" />
        <el-table-column label="操作" width="280">
          <template slot-scope="scope">
            <el-button size="mini">编辑</el-button>
            <el-button size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ComprehensiveApplicationTable",
  data() {
    return {
      data: [] // 数据源
    };
  },
  created() {
    this.data = [
      {
        id: "20410851122539196",
        name: "洗衣机",
        price: "1000",
        count: 50,
        countmount: 46,
        buycount: 4,
        sum: "4000"
      },
      {
        id: "13211960391062804",
        name: "空调",
        price: "2000",
        count: 100,
        countmount: 90,
        buycount: 10,
        sum: "20000"
      },
      {
        id: "37735956037033830",
        name: "电视",
        price: "6000",
        count: 20,
        countmount: 19,
        buycount: 1,
        sum: "6000"
      }
    ];
  },
  methods: {
    // 点击新增
    addCount(row, index) {
      // 增加的数量
      if (this.data[index].buycount < this.data[index].count) {
        const count = this.data[index].buycount++;
      }
      this.sumResult(row, index);
    },
    // 点击删除
    deleteCount(row, index) {
      // 减少的数量
      if (this.data[index].buycount > 0) {
        this.data[index].buycount--;
      }
      this.sumResult(row, index);
    },

    // 输入
    changeCount(value, row, index) {
      if(value === '' || value === undefined || value === null) {
        this.data[index].buycount = 0
      } else {
        this.data[index].buycount = value
      }
      this.sumResult(row, index);
    },

    // 计算返回
    sumResult(row, index) {
      // 总计
      const newSum = this.data[index].buycount * this.data[index].price;
      // 剩余数量
      const restCount = this.data[index].count - this.data[index].buycount;
      this.$set(this.data[index], "sum", newSum);
      this.$set(this.data[index], "countmount", restCount);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-input {
  width: 60%;
}
</style>
