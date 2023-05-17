<template>
<div>
<!--  轮播图组件-->
 <Banner></Banner>
<!--  图标指示-->
  <div class="juicon">
          <div :body-style="{ padding: '0px' }">
            <img src='../assets/img/icon1.webp' class="image">
            <div class="font">
              <span>首页</span>
            </div>
          </div>
  <div :body-style="{ padding: '0px' }">
    <router-link to="/community">
    <img src='../assets/img/cloud.webp' class="image">
    <div class="font">
      <span>走进社区</span>
    </div>
    </router-link>
  </div>
    <div :body-style="{ padding: '0px' }">
      <router-link to="/abnlog">
      <img src='../assets/img/internet.webp' class="image">
      <div class="font">
        <span>办事大厅</span>
      </div>
      </router-link>
    </div>
    <div :body-style="{ padding: '0px' }">
      <router-link to="/serve">
      <img src='../assets/img/media.webp' class="image">
      <div class="font">
        <span>志愿服务</span>
      </div>
      </router-link>
    </div>
  </div>
<!--新闻展示-->
 <News></News>

</div>
</template>

<script>
import Banner from './layout/banner/carousel'
import News from './layout/banner/news'
export default {
  name: "HomeView",
data(){
    return {
      value:new Date()
    }
},
  components:{
    Banner,
    News,

  }
}
</script>

<style lang="less" scoped>
a{
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}

.el-calendar-table .el-calendar-day{
  width: 60px;
  height: 40px;
}
.juicon{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 50px;
  padding-left: 200px;
  padding-right: 200px;
  align-items: center;
}
.font{
  font-size: 16px;
  font-weight: bolder;
  text-align: center;
  padding-top: 10px;

}
.image{
  height: 150px;
  width: 150px;
}


</style>
