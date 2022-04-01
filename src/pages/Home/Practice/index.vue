<template>
<div>

  <el-container>
  
    <el-container>
      <el-aside width="240px">
        <el-descriptions
          class="margin-top"
          title="在线练习"
          :column="1"
          border
        >
          <el-descriptions-item>
            <template slot="label">
              <div>学习进度</div>
            </template>
            <div>100/1980</div>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <div>错题</div>
            </template>
            <div>14/85</div>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <div>收藏</div>
            </template>
            <div>14/85</div>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <div>练习时长</div>
            </template>
            <div>85min</div>
          </el-descriptions-item>
        </el-descriptions>

        <el-descriptions
          class="margin-top"
          title="模拟考试"
          :column="1"
          border
        >
          <el-descriptions-item>
            <template slot="label">
              <div>模考次数</div>
            </template>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <div>合格次数</div>
            </template>
            <div>14</div>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <div>平均分</div>
            </template>
            <div>84</div>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <div>通过率</div>
            </template>
            <div>45%</div>
          </el-descriptions-item>
        </el-descriptions>
      </el-aside>
      <el-main>
        <el-row>
          <el-col :span="12" :class="{activeClass:isActive}" @click.native="km1">
            <div class="grid-content bg-purple tab">科目一（交规）</div></el-col
          >
          <el-col :span="12"  :class="{activeClass:!isActive}" @click.native="km2"
            ><div class="grid-content bg-purple tab">
              科目四（安全文明驾驶）
            </div></el-col
          >
        </el-row>
        <div class="topicCon">
          <div class="topic_lx">
            <div class="borderB height149">
              <a class="lx-link" @click="sequenpactice">
                <span class="topicIcon topic_zxlx"></span>
                <p>专项练习</p>
                <p class="topicDes">2022理论知识考试题库</p>
              </a>
              <a class="borderL borderR lx-link" href="/ckm1/sxlx">
                <span class="topicIcon topic_sxlx"></span>
                <p>顺序练习</p>
                <p class="topicDes">按顺序练习做题</p>
              </a>
              <a class="lx-link" href="/ckm1/sjlx">
                <span class="topicIcon topic_sjlx"></span>
                <p>随机练习</p>
                <p class="topicDes">所有法规一个不漏</p>
              </a>
            </div>
            <div>
              <a class="lx-link" href="/ckm1/zjlx">
                <span class="topicIcon topic_zjlx"></span>
                <p>章节练习</p>
                <p class="topicDes">按照法规章节逐步分类</p>
              </a>
              <a class="borderL borderR lx-link" href="/ckm1/yct">
                <span class="topicIcon topic_yct"></span>
                <p>易错题</p>
                <p class="topicDes">准确把握考试难点</p>
              </a>
              <a class="lx-link nozgz" href="/ckm1/zyt">
                <span class="topicIcon topic_zyt"></span>
                <p>收藏题</p>
                <p class="topicDes">收藏自己格外注意的题目</p>
              </a>
            </div>
          </div>
          <div class="topic_ks borderL">
            <a class="lx-link" href="/ckm1/mnks">
              <span class="topicIcon topic_mnks"></span>
              <p>模拟考试</p>
              <p class="topicDes">模拟在线真实考试</p>
            </a>
          </div>
        </div>
      </el-main>
    </el-container>
    <el-footer style="height: 100px">
       <div class="ksDesCon">
          <p class="desTil">考试要求</p>
          <p>
            考试形式为上机考试，<span class="num">100</span>道题，考试时间<span
              class="time"
              >45</span
            >分钟，满分100分，<span class="pass">90</span>分合格。
          </p>
        </div>
    </el-footer>
  </el-container>
</div>
</template>

<script>
export default {
  name: "Practice",
  data(){
    return{
      isActive:true,
    }
  },
  methods:{
    km1(){
      this.isActive=true;
    },
   km2(){
      this.isActive=false;
    },
        sequenpactice(){
      this.$router.push("/home/subject")
    }
  }
};
</script>

<style>
/**自定义样式*/
.tab {
  text-align: center;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  border-bottom: 1px solid #f2f2f2;
}
.activeClass {
  background: #f2f2f2;
  color: #24c27d;
}

.topicCon {
  height: 300px;
}

.topicCon a {
  text-decoration: none;
  color: #333;
}

.topic_lx {
  width: 704px;
  float: left;
}

.topic_lx .height149,
.topic_lx > div {
  height: 169px;
}

.borderB {
  border-bottom: 1px solid #f2f2f2;
}

.borderL {
  border-left: 1px solid #f2f2f2;
}

.borderR {
  border-right: 1px solid #f2f2f2;
}

.topic_lx > div a {
  float: left;
  width: 234px;
  text-align: center;
  height: 100%;
}

.topicCon a p {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.topicCon a .topicDes {
  margin-top: 5px;
  color: #666;
  font-size: 14px;
}

.topicIcon {
  display: block;
  width: 50px;
  height: 50px;
  background: url(//j2.58cdn.com.cn/dist/jxedt/h5/m_new/img/carType.png)
    no-repeat;
  background-position: 0 -285px;
  margin: 20px auto 10px;
}

.topic_sxlx {
  background-position: 0 -562px;
}

.topic_sjlx {
  background-position: 0 -395px;
}

.topic_zjlx {
  background-position: 0 -340px;
}

.topic_yct {
  background-position: 0 -507px;
}

.topic_zyt {
  background-position: 0 -230px;
}

.topic_mnks {
  background-position: 0 -451px;
}

.topic_ks {
  width: 235px;
  height: 338px;
  float: right;
}

.topic_ks a {
  float: left;
  text-align: center;
  width: 100%;
  height: 100%;
}
.topic_ks a span {
  margin-top: 110px;
}

.ksDesCon {
  background: #fff;

  font-size: 14px;
  line-height: 28px;
  color: #999;
  margin-top: 20px;
}

.ksDesCon p {
  margin: 0 20px;
}

.ksDesCon .desTil {
  color: #4a4a4a;
  line-height: 22px;
  margin-bottom: 10px;
}
</style>


<style lang="less">
/**栅格系统 样式*/
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 3px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>


<style >
/**Descriptions 描述列表 样式修改*/
.el-descriptions__header {
  height: 30px;
  justify-content: center;
  margin: 0 auto;
  background: #24c27d;
}
.el-descriptions--small.is-bordered .el-descriptions-item__cell {
  text-align: center;
  font-size: 16px;
}
</style>


<style scoped>
/**Container 布局容器 样式修改*/
.el-container {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
}
.el-foote {
  height: 100px;
}
.el-header,
.el-footer {

  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  height: 430px;
  margin-right: 5px;
}

.el-main {
  height: 420px;
  padding: 0px;
}
</style>