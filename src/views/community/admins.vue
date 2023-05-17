<template>
<div>
  <div class="box-card">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>走进社区</el-breadcrumb-item>
      <el-breadcrumb-item>社区工作人员</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
<!--  <div class="pic" >-->
<!--   <img src="../../assets/img/dangzheng.png" alt="">-->
<!--  </div>-->
  <div class="introCard">
  <el-card class="box-card" v-for="item in cardData" :key="item.adm_id" :body-style="{display:'flex',padding:0}">

    <el-descriptions class="margin-top" :title="item.adm_id" :column="3" :size="size" border>
      <template slot="extra">
        <el-button type="primary" size="small">管理员编号</el-button>
      </template>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          姓名
        </template>
        {{item.adm_name}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          手机号
        </template>
        {{item.adm_tel}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          出生日期
        </template>
        {{item.adm_birth}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          岗位
        </template>
        <el-tag size="small">{{item.adm_position}}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          联系地址
        </template>
        {{item.adm_address}}
      </el-descriptions-item>
    </el-descriptions>

  </el-card>
</div>
</div>
</template>

<script>


import {getAdmins} from "@/api/new";

export default {
  name: "admins",
  data(){
    return{

      cardData:[],
    }
  },
  methods:{
    getList(){
      getAdmins().then(res=>{
        console.log(res)
        this.cardData=res
        console.log(this.NewList,'newlist')
      })
    }
  },
  created() {
    this.getList()
  }

}
</script>

<style lang="less" scoped>
.introCard{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.box-card{
  padding: 20px 20px;
  margin: 20px 30px;
}
.pic{
  height: 400px;
  width: 1000px;
  margin: auto;
}
</style>
