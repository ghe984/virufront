<template>
  <div>
    <div v-if="tableData !== undefined">
      <el-table
          :data="tableData"
          stripe
          style="width: 100%"
          max-height="500"
          height="500"

      >
        <el-table-column
            prop="id"
            label="序号"
            align="center"
            width="50">
        </el-table-column>
        <el-table-column
            prop="res_name"
            label="申请人"
            align="center"
            width="80">
          <!--          <template slot-scope="scope">-->
          <!--            <span>{{scope.row.res_sex===1 ? '男':'女'}}</span>-->
          <!--          </template>-->
        </el-table-column>

        <el-table-column
            prop="applicant_id"
            label="申请人编号"
            align="center"
            width="100">
        </el-table-column>
        <el-table-column
            prop="material"
            label="申请物资"
            align="center"
            width="150"
            show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
            prop="res_address"
            label="具体地址"
            align="center"
            width="100">
        </el-table-column>
        <el-table-column
            prop="res_tel"
            label="电话"
            align="center"
            width="120">
        </el-table-column>
        <el-table-column
            prop="apply_time"
            label="申请时间"
            align="center"
            width="180">
        </el-table-column>
        <el-table-column
            prop="update_time"
            label="更新时间"
            align="center"
            width="180">
        </el-table-column>
        <el-table-column
            prop="iscompleted"
            label="未解决"
            align="center"
            width="90">
          <template slot-scope="scope" >
            <el-switch
                :disabled="true"
                v-model="scope.row.iscompleted"
                active-color="#13ce66"
                inactive-color="#ff4949"
                :active-value="1"
                :inactive-value="0"
                @change="changeState(scope.row)"
            >
            </el-switch>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <span class="is-null" v-else>暂无数据</span>

  </div>
</template>

<script>
import { getMats} from "@/api/new";

export default {
  name: "matelog",
  data(){
    return{
      tableData:[],
    }
  },
  methods:{
    getData(){
      getMats({page:this.pageNum}).then(response=>{
        this.tableData=response
        // this.total=response.data.count
        console.log(response.data)
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
