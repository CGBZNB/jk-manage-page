<template>
        <div class="container">
          <el-tabs :stretch="true" v-model="active2Name">
            <el-tab-pane label="账号登录" name="accountlogin">
              <el-form :model="loginFormByAccount" :rules="rules" ref="loginAccount">
                <el-col :span="18" :offset="3">
                  <el-form-item label="" prop="account" class="elItem">
                    <el-input
                      type="text"
                      autocomplete="off"
                      v-model="loginFormByAccount.account"
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
                      :show-password="true"
                      v-model="loginFormByAccount.password"
                      prefix-icon="el-icon-lock"
                      placeholder="请输入密码"
                    ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="11" :offset="7">
                  <el-form-item class="btns">
                    <el-button type="primary" @click="goToLogin"
                      >登录</el-button
                    >
                    <el-button @click="resetLoginForm">重置</el-button>
                  </el-form-item>
                </el-col>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="手机号登录" name="phonelogin">
              <el-form :model="loginFormByPhone" :rules="rules" ref="loginPhone">
                <el-col :span="18" :offset="3">
                  <el-form-item label="" prop="phone" class="elItem">
                    <el-input
                      type="text"
                      autocomplete="off"
                      v-model="loginFormByPhone.account"
                      prefix-icon="el-icon-user-solid"
                      placeholder="请输入手机号或邮箱"
                    ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="18" :offset="3">
                 
                  <el-form-item label="" prop="identifyCode">
                     <el-col :span="14">
                        <el-input
                      type="text"
                      autocomplete="off"
                      v-model="loginFormByPhone.identifyCode"
                      prefix-icon="el-icon-lock"
                      placeholder="请输入验证码"
                    ></el-input>
                     </el-col>
                     <el-col :span="5" :offset="3">
                       <el-button size="small"  type="primary">发送验证码</el-button>
                     </el-col>
                   
                  </el-form-item>
                </el-col>

                <el-col :span="11" :offset="7">
                  <el-form-item class="btns">
                    <el-button type="primary" @click="goToLogin"
                      >登录</el-button
                    >
                    <el-button @click="resetLoginForm">重置</el-button>
                  </el-form-item>
                </el-col>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </div>
</template>



<script>
export default {
  name: "Login",
  data() {
    // var validateAccount = (rule, value, callback) => {
    //   if (value === "") {
    //     return callback(new Error("账号不能为空"));
    //   } else if (value === "admin") {
    //     callback();
    //   } else {
    //     callback(new Error("请输入正确的用户名"));
    //   }
    // };
    // var validatePassword = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error("请输入密码"));
    //   } else if (value === "123456") {
    //     callback();
    //   } else {
    //     callback(new Error("请输入正确的密码"));
    //   }
    // };

    return {
      loginFormByAccount: {
        account: "",
        password: "",
      },
      loginFormByPhone: {
        phone: "",
        identifyCode: "",
      },
      active1Name: "login", //默认显示登录页面
      active2Name: "accountlogin", //默认显示登录页面
      rules: {},
      // rules: {
      //   account: [
      //     {
      //       validator: validateAccount,
      //       trigger: "blur",
      //     },
      //   ],
      //   password: [
      //     {
      //       validator: validatePassword,
      //       trigger: "blur",
      //     },
      //   ],
      // },
    };
  },
  methods: {
   async goToLogin() {
     
      // this.$refs["loginAccount"].validate((valid) => {
      //   if (valid) {
      //     if (
      //       this.loginForm.account != "admin" ||
      //       this.loginForm.password != "123456"
      //     ) {
      //       this.$message.error("账号密码不正确");
      //       return false;
      //     } else {
      //       this.$message({ message: "登陆成功", type: "success" });
      //       this.$router.push("/home");
      //     }
      //   } else {
      //     this.$message.error("登陆失败");
      //     return false;
      //   }
      // });
      try {
        await this.$store.dispatch('login',this.loginFormByAccount);
        this.$router.push('/home/index')
      } catch (error) {
         this.$message.error("登陆失败");
      }
     
   
    },
    resetLoginForm() {
      this.$refs["loginAccount"].resetFields();
    },
    handleClick() {},
  },

};
</script>

<style scoped >
.container {
  width: 400px;

  margin: 50px auto;
  
}
</style>
