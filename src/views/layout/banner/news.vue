<template>
<!--<div>-->
<!--  <div class="new">-->
<!--    <div class="inform" >-->
<!--      <span >社区通知</span>-->
<!--    </div>-->

<!--    <el-divider></el-divider>-->
<!--<div class="num">-->
<!--    <el-card  class="box-card" v-for="item in Newlist" :key="item.info_id" >-->
<!--      <div class="icon">-->
<!--        <img  src="../../../assets/logo.png" alt="">-->
<!--      </div>-->
<!--      <div class="detail">-->
<!--        <p class="title">{{item.inform_title}}</p>-->
<!--        <p class="digest">{{item.info_abstract}}</p>-->
<!--        <span>{{item.inform_time}}</span>-->
<!--      </div>-->

<!--    </el-card>-->
<!--</div>-->
<!--  </div>-->
<!--</div>-->



  <div>
    <div>
      <div class="new">
        <div class="inform" >
          <span >社区通知</span>
        </div>
        <el-divider></el-divider>
        <div class="num">
        <ul class="news-list-items" v-if="Newlist !== undefined">
      <div class="news-list-item" v-for="item in Newlist" :key="item.info_id">
        <el-card shadow="hover">
          <router-link :to="`/inform/`+item.info_id">
            <!--<div class = "item-mask"></div>-->
            <img src="../../../assets/img/news.jpg" alt="">
            <div class="item-content">
              <h2>{{ item.inform_title }}</h2>
              <p>{{ item.info_abstract }}</p>
              <span>{{ item.inform_time }}</span>
            </div>
          </router-link>
        </el-card>
      </div>
    </ul>
    <span class="is-null" v-else>暂无数据</span>
        </div>
  </div>
    </div>
  </div>
</template>

<script>
import {getArticleList} from "@/api/new";

export default {
  name: "news",
  data(){
    return{
      Newlist:[],
    }
  },
  methods:{
    getList(){
      getArticleList().then(res=>{
        console.log(res)
        this.Newlist=res
        console.log(this.NewList,'newlist')
      })
    }
  },
  created() {
    this.getList()
  }
}
</script>

<style  lang="less" scoped>
a{
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
.new{
  padding-top: 50px;
  width:1000px ;
  margin:auto;
}
.el-divider--horizontal{
  margin:5px 0;
}
//.box-card{
//  display: flex;
//  flex-wrap: wrap;
//  justify-content: space-between;
//}
//.num {
//  .icon {
//    width: 200px;
//    height: 200px;
//    font-size: 30px;
//    text-align: center;
//    line-height: 80px;
//    color: #ffffff;
//  }
//  .detail {
//    width: 500px;
//    margin-left: 15px;
//    display: flex;
//    flex-direction: column;
//    justify-content: center;
//  }
//}
.inform{
  margin:auto;
  width: 100px;
  height: 40px;
  background-color: antiquewhite;
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  color: slategray;
}



.news-list-item {
  padding: 0 15px 15px 8px;
  position: relative;
  border-radius: 8px;

  img {
    width: 198px;
    height: 125px;
    border-style: none;
  }

  a {
    color: rgba(0, 0, 0, 1);
    transition: color .3s;
    overflow: hidden;
    display: flex;
    cursor: pointer;
  }

  a:hover {
    color: var(--hover_color);
  }
}

.el-card {
  border: none;
  transition: .5s;
}

.is-null {
  display: flex;
  justify-content: center;
  margin-top: 45px;
  color: #777
}

.item-mask {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  transition: all .3s;
  border-radius: 8px;
}

.item-content {
  margin-left: 40px;
  width: calc(100% - 238px);

  h2 {
    font-size: 20px;
    font-weight: 500;
    overflow: hidden;
    //white-space: nowrap;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  p {
    margin: 10px 0;
    font-size: 15px;
    color: #777;
    letter-spacing: 0;
    line-height: 22px;
    overflow: hidden;
    //white-space: nowrap;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  span {
    color: #b8b8b8;
    line-height: 14px;
  }
}
</style>
