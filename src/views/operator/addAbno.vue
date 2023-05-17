<template>
<div>
<div>
  <el-card class="box-card">
    <div>
      <el-form :model="ruleForm"  ref="ruleForm"  label-width="120px" class="demo-ruleForm">
        <el-form-item label="账号" prop="abnormal" :rules="[
      { required: true, message: '账号不能为空'},]">
          <el-input style="width: 500px" placeholder="请输入账号" v-model="ruleForm.abnormal"></el-input>
        </el-form-item>
        <el-form-item label="症状" prop="abcondition" :rules="[
      { required: true, message: '症状不能为空'},]">
<!--          <el-input style="width: 800px" placeholder="请输入症状" v-model="ruleForm.abcondition" ></el-input>-->
          <div>
            <mavon-editor v-model="ruleForm.abcondition"/>
          </div>
        </el-form-item>
          <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button @click="cancel()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

  </el-card>
</div>
</div>
</template>

<script>
import {postAbno} from "@/api/new";

export default {
  name: "addAbno",
  data(){
    return{
      ruleForm:{},
    }
  },
  methods:{
    onSubmit(){
      this.$refs.ruleForm.validate((valid)=>{
        if(valid){
          postAbno(this.ruleForm).then(res=>{
            console.log(res)
            this.$message({
              type:'success',
              message:'登记成功!',
            })
          })
        }
      })

    },
    cancel(){
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.box-card{
  height: 500px;

}
</style>
