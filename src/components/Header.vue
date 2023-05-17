<template>
<div>
  <div class="header">
    <div class="logo">
      <img src="../assets/img/logo1.png">
    </div>
  <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#10b041" router>
    <el-menu-item index="/">首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">走进社区</template>
      <el-menu-item index="/community">关于社区</el-menu-item>
      <el-menu-item index="/admins">办公人员一览</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">办事大厅</template>
      <el-menu-item index="/addAbno">异常登记</el-menu-item>
      <el-menu-item index="/addMate">物资申请</el-menu-item>
    </el-submenu>
    <el-menu-item index="/serve">志愿服务</el-menu-item>
  </el-menu>
    <div class="headerRight">
      <el-link @click="userlogin()">
        登录
      </el-link>

    </div>
</div>

</div>
</template>

<script>
import Cookie from "js-cookie";

export default {
  name: "Header",
  data(){
    return {
    }
  },
  methods:{
    userlogin(){
      Cookie.remove('token')
      this.$router.push('/login')
    }
  },
  created() {
    this.activeIndex=this.$route.path
  }
}
</script>

<style   lang="less" scoped>
.header{
  display: flex;
  background: #323232;
  color: #fff;

  .logo,.headerRight{
    padding: 0 30px;
    line-height: 40px;
  }
  .el-menu-demo{
    flex: 1;
    font-size: 16px;
    font-weight: 700;
    .el-menu-item{
      height: 40px;
      line-height: 40px;
    }
  }
  /deep/.el-menu--horizontal>.el-submenu .el-submenu__title{
    height: 40px !important;
    line-height: 40px;
  }

  .el-menu.el-menu--horizontal{
    border-bottom: none;
  }
}

</style>
