<template>
  <div class="subopt-container">
    <div class="subopt-container-breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="subopt-container-main">
      <div class="main-title">专项练习</div>
      <div class="main-content">
        <el-row>
          <el-col
            :span="5"
            :offset="1"
          >
            <el-card class="box-card" style=" background: #0cc211;">
              <div >
              单选题
              </div>
            </el-card>
          </el-col>
                    <el-col
            :span="5"
            :offset="1"
          >
            <el-card class="box-card" style=" background:#c77eb5;">
              <div >
              判断题
              </div>
            </el-card>
          </el-col>
                    <el-col
            :span="5"
            :offset="1"
          >
            <el-card class="box-card" style=" background:#9b95c9;">
              <div >
              图片题
              </div>
            </el-card>
          </el-col>
                    <el-col
            :span="5"
            :offset="1"
          >
            <el-card class="box-card" style=" background: #bed742;">
              <div >
              文字题
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
 height: 200px;
 line-height: 150px;
 text-align: center;
 font-size: 24px;
}

</style>
<style>
.subopt-container {
  width: 1200px;
  margin: 10px auto;

  height: 420px;
}
.subopt-container
  .subopt-container-main
  .subopt-container-breadcrumb
  .el-breadcrumb {
  font-size: 13px;
}
.subopt-container .subopt-container-main .main-title {
  font-family: 微软雅黑;
  font-size: 24px;
  padding-left: 12px;
  margin: 16px 0;

  line-height: 24px;
  border-left: 2px solid rgb(90, 178, 79);
}

.subopt-container .subopt-container-main .main-content {

  height: 300px;
  padding: 20px 0;
}
</style>