<template>
<div>
  <div style="margin: 20px 30px">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>志愿服务</el-breadcrumb-item>
<!--      <el-breadcrumb-item>关于社区</el-breadcrumb-item>-->
    </el-breadcrumb>
  </div>
  <div>
  <el-card style="margin: 20px 200px">
    <el-button type="text" @click="openDrawer()">你的历史记录</el-button>
    <el-drawer
        title="志愿服务历史记录"
        :visible.sync="table"
        direction="ltr"
        size="50%">
      <el-table
          :data="tableData"
          stripe
          style="width: 95%;margin: 0 20px">
        <el-table-column
            prop="serve_id"
            label="活动编号"
            align="center"
            width="50">
        </el-table-column>
<!--        <el-table-column-->
<!--            prop="res_name"-->
<!--            label="参与人员"-->
<!--            align="center"-->
<!--            width="150">-->
<!--        </el-table-column>-->
        <el-table-column
            prop="serve_title"
            label="活动名称"
            align="center"
            width="100">
          <!--          <template slot-scope="scope">-->
          <!--            <span>{{scope.row.res_sex===1 ? '男':'女'}}</span>-->
          <!--          </template>-->
        </el-table-column>

        <el-table-column
            prop="serve_text"
            label="活动内容"
            align="center"
            width="120">
        </el-table-column>
        <el-table-column
            prop="start_time"
            label="开始时间"
            align="center"
            width="200">
        </el-table-column>
        <el-table-column
            prop="span_time"
            label="志愿时长"
            align="center"
            width="150">
        </el-table-column>
        <el-table-column
            prop="adm_name"
            label="负责人"
            align="center"
            width="100">
        </el-table-column>
        <el-table-column
            v-slot="scope"
            label="报名中"
            width="90"
            align="center"
            header-align="center"
        >
          <el-switch
              disabled="false"
              v-model="scope.row.isend"
              active-color="#13ce66"
              :active-value="0"
              :inactive-value="1"
          >
          </el-switch>
        </el-table-column>

      </el-table>
    </el-drawer>
<!--    志愿活动列表-->
    <div >
      <el-descriptions v-for="item in cardData" :key="item.serve_id" class="margin-top" :title="item.serve_title" :column="3" :size="size" style="margin-top: 10px" border>
        <template slot="extra">
          <el-button type="primary" size="small" @click="addServe(item.serve_id)" >报名</el-button>
        </template>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            活动名称
          </template>
          {{item.serve_title}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            开始时间
          </template>
          {{item.start_time}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            志愿时长
          </template>
          {{item.span_time}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            负责人编号
          </template>
          <el-tag size="small">{{item.manager}}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            具体内容
          </template>
          {{item.serve_text}}
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </el-card>
  </div>
</div>
</template>

<script>
import {getServeCardInfo, getServeInfo, postServeReg} from "@/api/new";

export default {
  name: "index",
  data(){
    return{
      table:false,
      tableData:[],
      cardData:[],

    }
  },
  methods:{

    getdata(){
      getServeInfo().then(response=>{
        this.tableData=response
        console.log(response.data,'Serveinfo')
      })
    },
    openDrawer(){
      this.table = true
      this.getdata()
    },
    getCardData(){
      getServeCardInfo().then(res=>{
        this.cardData=res
      })
    },
    addServe(id) {
      this.$confirm('请注意你的时间安排，确认报名?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        postServeReg(id).then(res => {
          console.log(res)
        })
        this.$message({
          //调用删除API接口  参数里面有row，参数使用row.id即可
          type: 'success',
          message: '报名成功!',
        });
        this.getdata()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消报名'
        });
      });
    }
  },
  mounted() {
    this.getdata()
    this.getCardData()
  }
}
</script>

<style scoped>

</style>
