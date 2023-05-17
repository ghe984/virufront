<template>
  <div>
      <div style="margin: 20px 20px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>办事大厅</el-breadcrumb-item>
          <el-breadcrumb-item>异常登记</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    <el-container class="container">
      <el-header>
<div class="abn">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
    <el-menu-item index="/abnlog">历史记录</el-menu-item>
    <el-menu-item index="/addAbno">异常登记</el-menu-item>

  </el-menu>

</div>
      </el-header>
  <el-main><router-view></router-view></el-main>
  </el-container>
  </div>
</template>

<script>
export default {
  name: "abnormal",
  data(){
    return{
      activeIndex:'',
    }
  },
  created() {
    this.activeIndex=this.$route.path
  }
}
</script>

<style lang="less" scoped>
.container{
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
}
.abn{

}
</style>
