<template>
  <div class="main">
    <el-container >
      <el-container>
        <el-main>
          <el-row>
            <el-col :span="24"
              ><div >
                <span class="subject"
                  >年满20周岁，可以初次申请下列哪种准驾车型？年满20周岁，可以初次申请下列哪种准驾车型？年满20周岁，可以初次申请下列哪种准驾车型？
                  年满20周岁，可以初次申请下列哪种准驾车型？</span
                >
              </div></el-col
            >
          </el-row>

          <el-row>
            <el-col :span="12">
              <div class="question-option">
                <div id="260" class="op cursor" data-type="2" data-index="1">
                  <img
                    src="@/assets/images/subject/circle.png"
                    alt=""
                  />
                  <div class="op-content">A：3次</div>
                </div>
                <div id="260" class="op cursor" data-type="2" data-index="2">
                  <img
                    src="@/assets/images/subject/circle.png"
                    alt=""
                  />
                  <div class="op-content">B：4次</div>
                </div>
                <div id="260" class="op cursor" data-type="2" data-index="3">
                  <img
                    src="@/assets/images/subject/circle.png"
                    alt=""
                  />
                  <div class="op-content">C：5次</div>
                </div>
                <div id="260" class="op cursor" data-type="2" data-index="4">
                  <img
                    src="@/assets/images/subject/circle.png"
                    alt=""
                  />
                  <div class="op-content">D：6次</div>
                </div>
              </div>
              </el-col
            >
             <el-col :span="12">
                 <!-- <div class="question-img ">
                     <img src="	https://wos.58cdn.com.cn/XyVuTsRqXyf/question/5eb4d75agw1e28yro539aj.jpg">
                 </div> -->
             </el-col>
          </el-row>


 
          <el-row class="bg_sc">
            <el-button-group>
              <el-button type="primary" icon="el-icon-arrow-left" size="medium"
                >上一题</el-button
              >
              <el-button type="primary" size="medium"
                >下一题<i class="el-icon-arrow-right el-icon--right"></i
              ></el-button>
            </el-button-group>

            <el-button
              type="warning"
              icon="el-icon-star-off"
              circle
            ></el-button>
          </el-row>
        </el-main>
      </el-container>

      <el-aside width="300px">2</el-aside>
    </el-container>
    <el-collapse accordion>
      <el-collapse-item title="解析">
        <div>
          控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
        </div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="答题卡">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>
          清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
        </div>
        <div>
          帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
        </div>
      </el-collapse-item>
      <el-collapse-item title="评论">
        <div>
          用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
        </div>
        <div>
          结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "SubjiecItem",
      data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    }
};
</script>

<style scoped>
.subject{
    font-size: 18px;
    font-weight: bold;
}
.bg_sc {
    margin-top: 10px;
    text-align: center !important;

}
 .question-option {
    display: inline-block;
    margin-left: 15px;
}
 .question-option .op {
    display: inline-block;
    width: 100%;
    margin-top: 10px;
    color: #4d4d4d;
    font-size: 16px;
}
.question-option img {
    height: 20px;
    width: 20px;
    float: left;
    margin-top: 10px;
}.question-option .op .op-content {
    float: left;
    margin-left: 16px;
}
 .question-img {

    position: absolute;
    right: 20px;
    top: 40px;
    height: 240px;
}
.question-img img {
    max-height: 200px;
    max-width: 400px;
    display: block;
    margin: 0 auto;
}



.el-button {
  margin-right: 50px;
}
.grid-content {
  border-radius: 4px;
  min-height: 40px;
}
</style>

<style scoped>
.el-row {
  text-align: left;
  margin-bottom: 0;
}
.main {
  width: 1200px;
  margin: 20px auto;
  text-align: left;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 12px;
}

.el-main {

  color: #333;
    padding: auto;
  line-height: 40px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container {
  margin: 0 auto;
}
</style>