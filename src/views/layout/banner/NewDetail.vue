<template>
<div>
  <div style="margin: 40px 40px">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>通知详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

  <el-card class="box-card">
    <h1 class="title">{{detail.inform_title}}</h1>
    <span class="time">{{detail.inform_time}}</span>
<!--    <hr>-->
    <p>
     {{detail.inform_text}}
    </p>
  </el-card>
<!--<h2>{{detail}}</h2>-->
</div>
</template>

<script>
import {getDetailInfo} from "@/api/new";

export default {
  name: "NewDetail",
  data(){
    return{
      detail:[]
    }
  },
  mounted() {
    var id=this.$route.params.info_id
    getDetailInfo(id).then(res=>{
      // console.log(res)
      this.detail=res
    })
  }
}
</script>

<style lang="less" scoped>
.box-card{
  width: 1000px;
  padding-right: 60px;
  padding-left: 60px;
  margin:auto;
  p{
    text-indent: 2em;
    font: 18px/28px 'Microsoft YaHei';
  }
  .pic{
    text-align: center;
  }
  .time{
    color: #888888;
    font-size: 14px;
    text-align: center;
  }
}
.title{
  font-weight: bolder;
  font-size: 30px;
  text-align: center;
}
</style>
