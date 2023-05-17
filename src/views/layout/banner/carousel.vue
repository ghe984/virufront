<template>
<div>
  <el-carousel :interval="5000" arrow="always" class="carousel">
    <el-carousel-item >
      <img src="../../../assets/img/comunity1.png" alt="">
    </el-carousel-item>
    <el-carousel-item >
      <img src="../../../assets/img/community2.jpg" alt="">
    </el-carousel-item>
    <el-carousel-item >
      <img src="../../../assets/img/community3.jpg" alt="">
    </el-carousel-item>
  </el-carousel>

</div>
</template>

<script>
export default {
  name: "carousel"
}
</script>

<style lang="less" scoped>
.carousel{
  width: 100%;
  max-height: 640px;
  /deep/ .el-carousel__container{
    height: 600px;
  }
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
