<template>
<div>
  <div v-if="tableData !== undefined">
    <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        max-height="500"
        height="500">
      <el-table-column
          prop="abnormal_id"
          label="住户编号"
          align="center"
          width="120">
      </el-table-column>
      <el-table-column
          prop="res_name"
          label="姓名"
          align="center"
          width="100">
      </el-table-column>
      <el-table-column
          prop="abcondition"
          label="症状"
          align="center"
          header-align="center"
          show-overflow-tooltip
          width="150">
      </el-table-column>

      <el-table-column
          prop="res_address"
          label="地址"
          align="center"
          header-align="center"
          width="100">
      </el-table-column>
      <el-table-column
          prop="res_tel"
          label="联系电话"
          align="center"
          header-align="center"
          width="150">
      </el-table-column>
      <el-table-column
          prop="regis_time"
          label="登记日期"
          align="center"
          header-align="center"
          width="200">
      </el-table-column>
      <el-table-column
          prop="update_time"
          label="更新日期"
          align="center"
          header-align="center"
          width="200">
      </el-table-column>
      <el-table-column
          v-slot="scope"
          label="未解决"
          width="90"
          align="center"
          header-align="center"
      >
        <el-switch
            :disabled="true"
            v-model="scope.row.ishealed"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="0"
        >
        </el-switch>
      </el-table-column>
    </el-table>
  </div>
  <span class="is-null" v-else>暂无数据</span>
</div>
</template>

<script>
import {getAbnList} from "@/api/new";

export default {
  name: "historyAbn",
  data(){
    return{
      tableData:[],
    }
  },
  methods:{
  getData(){
    getAbnList().then(res=>{
      this.tableData=res
    })
  }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>

</style>
