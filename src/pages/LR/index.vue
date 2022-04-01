<template>
  <div class="container-header">
      
    <el-tabs style="height: 500px" :stretch="true" v-model="active1Name">
      <el-tab-pane label="登录" name="login">
          <Login></Login>
      </el-tab-pane>
      <el-tab-pane label="注册" name="register">
        <Register></Register>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Login from "./Login"
import Register from "./Register"
export default {
  name: "LR",
  data() {

    return {
      active1Name: "login", //默认显示登录页面
      active2Name: "accountlogin", //默认显示登录页面

    };
  },

  components: {
    Register,
    Login
  },
};
</script>

<style scoped>
.container-header {
  width: 1000px;
  height: 420px;
  margin: 30px auto;
}

</style>