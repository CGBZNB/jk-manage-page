<template>
  <div class="container-header">
  <el-tabs style="height: 500px;" :stretch='true' v-model="active1Name">
   
    <el-tab-pane label="登录" name="login">
       <div class="container">
          <el-tabs  :stretch='true' v-model="active2Name">
        <el-tab-pane label="账号登录" name="accountlogin">
           <el-form
            :model="loginForm"
            :rules="rules"
            ref="loginForm"           
          >
           <el-col :span="18" :offset="3">

                    <el-form-item label="" prop="account" class="elItem">

              <el-input
                type="text"
                autocomplete="off"
                v-model="loginForm.account"
                prefix-icon="el-icon-user-solid"
                placeholder="请输入用户名"
              ></el-input>
            </el-form-item>
                </el-col>

                  <el-col :span="18" :offset="3">

 <el-form-item label="" prop="password">
              <el-input
                type="password"
                autocomplete="off"
                :show-password='true'
                v-model="loginForm.password"
                prefix-icon="el-icon-lock"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
                </el-col>
            
           <el-col :span="11" :offset="7">
 <el-form-item class="btns">
              <el-button type="primary" @click="goToLogin">登录</el-button>
              <el-button @click="resetLoginForm">重置</el-button>
            </el-form-item>
           </el-col>
           
           
          </el-form>
        </el-tab-pane>
          <el-tab-pane label="手机号登录" name="phonelogin">
         手机号登录
        </el-tab-pane>
      </el-tabs>
       </div>
    </el-tab-pane>
    <el-tab-pane label="注册" name="register">配置管理</el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
 
export default {
  name:'Test',
  data(){
       var validateAccount = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("账号不能为空"));
      } else if (value === "admin") {
        callback();
      } else {
        callback(new Error("请输入正确的用户名"));
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value === "123456") {
        callback();
      } else {
        callback(new Error("请输入正确的密码"));
      }
    };
    
       return {
      loginForm: {
        account: "",
        password: "",
      },
      active1Name:'login',//默认显示登录页面
      active2Name:'accountlogin',//默认显示登录页面
       ruleForm: {
                    username: '',
                    password: '',
                    sidentify: '',
                },
      rules: {
        account: [
          {
            validator: validateAccount,
            trigger: "blur",
          },
        ],
        password: [
          {
            validator: validatePassword,
            trigger: "blur",
          },
        ],
      },
    };
    },
    methods: {
  goToLogin() {
      this.$refs["loginForm"].validate((valid) => {
        if (valid) {
          if (
            this.loginForm.account != "admin" ||
            this.loginForm.password != "123456"
          ) {
            this.$message.error("账号密码不正确");
            return false;
          } else {
            this.$message({ message: "登陆成功", type: "success" });
            this.$router.push("/home");
          }
        } else {
          this.$message.error("登陆失败");
          return false;
        }
      });
    },
    resetLoginForm() {
      this.$refs["loginForm"].resetFields();
    },
    handleClick(){}
  },
        components: {
           
        },

}
</script>

<style>
.container-header{
  width: 1000px;
  height: 500px;
  margin: 100px auto;
}
.container{
  width: 400px;

  margin: 50px auto;

}
</style>