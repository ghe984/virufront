<template>
<div>
  <el-container>
    <el-header style="height: 40px;padding-left: 0px;padding-right: 0px;"
    ><Header></Header></el-header>
    <el-main style="padding: 0"><router-view></router-view></el-main>
    <el-footer> <Footer></Footer></el-footer>
  </el-container>
</div>
</template>

<script>
import Header from "@/components/Header";

import Footer from "@/components/Footer";
export default {
  name: "layout",
  components: {Footer,Header}
}
</script>

<style scoped>

</style>
