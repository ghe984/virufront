<template>
<div>
  <el-card class="box-card">
    <div>
      <el-form :model="ruleForm"  ref="ruleForm"  label-width="120px" class="demo-ruleForm">
        <el-form-item label="申请人员账号" prop="applicant" :rules="[
      { required: true, message: '账号不能为空'},]">
          <el-input style="width: 500px" placeholder="请输入账号" v-model="ruleForm.applicant"></el-input>
        </el-form-item>
        <el-form-item label="申请物资" prop="material" :rules="[
      { required: true, message: '申请物资不能为空'},]">
          <!--          <el-input style="width: 800px" placeholder="请输入症状" v-model="ruleForm.abcondition" ></el-input>-->
          <div>
            <mavon-editor v-model="ruleForm.material"/>
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
</template>

<script>
import { postMats} from "@/api/new";

export default {
  name: "addMate",
  data(){
    return{
      ruleForm:{},
    }
  },
  methods:{
    onSubmit(){
      this.$refs.ruleForm.validate((valid)=>{
        if(valid){
          postMats(this.ruleForm).then(res=>{
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
