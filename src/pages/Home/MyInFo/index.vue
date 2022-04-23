<template>
  <div class="main">
        <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="基本信息" name="first">
        <div class="dashboard-text">登录用户名: {{ userinfo.loginname }}</div>
     <div class="dashboard-text">名称: {{ userinfo.name }}</div>
      <div class="dashboard-text">角色名: {{ userinfo.rolename }}</div>
    </el-tab-pane>
    <el-tab-pane label="修改密码" name="second">
         <el-form
      :model="registerAccount"
      ref="ruleForm"
      class="demo-ruleForm"
    >
     <el-form-item label="" prop="pass"
        ><el-input
          type="password"
          autocomplete="off"
          v-model="registerAccount.pass"
          prefix-icon="el-icon-lock"
          placeholder="请输入密码"
        ></el-input
      ></el-form-item>
       <el-form-item label="" prop="checkPass"
        ><el-input
          type="password"
          autocomplete="off"
          v-model="registerAccount.checkPass"
          prefix-icon="el-icon-lock"
          placeholder="请输入密码"
        ></el-input
      ></el-form-item>
      <el-form-item>
        <el-col :span="6" :offset="6">
          <el-button type="primary" @click="register">修改</el-button></el-col
        >
        <el-col :span="6" :offset="2">
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-col>
      </el-form-item>
     </el-form>
    </el-tab-pane>
    <el-tab-pane label="考试成绩" name="third">无数据</el-tab-pane>
  
  </el-tabs>
  </div>
</template>

<script>
import {reqUpdatePass} from '@/api/user'
export default {
    name:'MyInfo',
     data() {
           var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerAccount.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
        var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerAccount.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
      return {
         
        activeName: 'first',
         userinfo:{},
         registerAccount: {
        pass: "",
        checkPass: "",
      },
            rules: {
        pass: [
          { min: 6, max: 16, message: "长度在 6到 16 个字符", trigger: "blur" },
          { required: true, validator: validatePass, trigger: "blur" },
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
      },
      };
    },
      created(){
    this.userinfo=this.$store.state.user.userinfo
  },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      async register(){
          let data={
              pass:this.registerAccount.pass
          }
          let result=await reqUpdatePass(pass)
          if(result.code==201){
              this.$message("修改成功")
          }
      },
          resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    }
  
}
</script>

<style>
.main{
    width: 1000px;
    margin: 20px auto;
    height: 400px;
}
.dashboard-text{
    margin:10px auto;
    font-size: 20px;
}
</style>