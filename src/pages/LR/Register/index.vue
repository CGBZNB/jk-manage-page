<template>
  <div class="container">
    <el-form
      :model="registerAccount"
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <el-form-item label="" prop="name"
        ><el-input
          type="text"
          autocomplete="off"
          v-model="registerAccount.name"
          prefix-icon="el-icon-user-solid"
          placeholder="请输入用户名"
        ></el-input
      ></el-form-item>
      <el-form-item label="" prop="account"
        ><el-input
          type="text"
          autocomplete="off"
          v-model="registerAccount.account"
          prefix-icon="el-icon-user-solid"
          placeholder="请输入手机号或邮箱"
        ></el-input
      ></el-form-item>
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

      <el-form-item label="" prop="identifyCode">
        <el-col :span="14">
          <el-input
            type="text"
            autocomplete="off"
            v-model="registerAccount.identifyCode"
            prefix-icon="el-icon-lock"
            placeholder="请输入验证码"
          ></el-input>
        </el-col>
        <el-col :span="5" :offset="3">
          <el-button size="small" type="primary" @click="getcode"
            >发送验证码</el-button
          >
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col :span="6" :offset="6">
          <el-button type="primary" @click="register">注册</el-button></el-col
        >
        <el-col :span="6" :offset="2">
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Register",
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

    var validateName = async (rule, value, callback) => {
      //校验账号名
      try {
        let pararms = {
          date: this.registerAccount.name,
          type: "name",
        };
        await this.$store.dispatch("validate", pararms);
        callback();
      } catch {
        callback(new Error("该账户名已存在"));
      }
    };
    var validateAccount = async (rule, value, callback) => {
      //校验账号

      try {
        let pararms = {
          date: this.registerAccount.account,
          type: "account",
        };
        await this.$store.dispatch("validate", pararms);
        callback();
      } catch {
        callback(new Error("该账户名已存在"));
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
      activeName: "register",
      registerAccount: {
        name: "",
        account: "",
        pass: "",
        checkPass: "",
        identifyCode: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入您的名称", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
          { required: true, validator: validateName, trigger: "blur" },
        ],
        account: [
          { required: true, message: "请输入手机号或邮箱", trigger: "blur" },
          {
            pattern:
              /(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)|(^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$)/,
            message: "输入正确的手机号或邮箱",
            trigger: "blur",
          },
          { required: true, validator: validateAccount, trigger: "blur" },
        ],
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

  methods: {
    async getcode() {
      try {
        if (this.registerAccount.account === "") {
          this.$message("请先输入手机号或账号");
        } else {
          await this.$store.dispatch("getCode", this.registerAccount.account);
          this.registerAccount.identifyCode = this.$store.state.user.code;
        }
      } catch {
        this.$message("验证码错误");
      }
    },
    register() {
      var data = {
        name: this.registerAccount.name,
        account: this.registerAccount.account,
        password: this.registerAccount.pass,
      };
      console.log(this.registerAccount.identifyCode);
      this.$store.dispatch("register", {
        form: data,
        code: this.registerAccount.identifyCode,
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped lang="less">
.container {
  width: 400px;

  margin: 50px auto;
}
.btns {
  display: flex;
}
</style>