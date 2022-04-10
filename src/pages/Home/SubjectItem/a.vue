<template>
  <div class="main">
    <div class="subopt-container-breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-container :key="subject.id">
      <div class="question-content" v-if="subject.topicType!='MultipleChoice'">
        <div class="question-body">
          <div class="question-title">
            <span class="choose">单选题</span>
            <div class="mark">{{subject.id}}/{{account}}、</div>
            <span style="display: inline" class="exam-question"
              >{{subject.content}}</span
            >
          </div>
          <div class="question-option" @click.once="xuanzhe($event)" >
            <div id="256" class="op cursor" data-type="2" data-index="A" >
              <img src="@/assets/images/subject/circle.png" alt="" />
              <div class="op-content">{{subject.choiceA}}</div>
            </div>
            <div id="256" class="op cursor" data-type="2" data-index="B"  >
              <img
                src="@/assets/images/subject/circle.png"
                alt=""
              />
              <div class="op-content">{{subject.choiceB}}</div>
            </div>
            <div id="256" class="op cursor" data-type="2" data-index="C" v-if="subject.topicType!='Judgement'">
              <img
                src="@/assets/images/subject/circle.png"
                alt=""
              />
              <div class="op-content">
                {{subject.choiceC}}
              </div>
            </div>
            <div id="256" class="op cursor" data-type="2" data-index="D" v-if="subject.topicType!='Judgement'">
              <img
                src="@/assets/images/subject/circle.png"
                alt=""
              />
              <div class="op-content">{{subject.choiceD}}</div>
            </div>
          </div>
        </div>
        <div class="question-img" v-if="subject.imaged==1">
          <img
            :src="subject.imgStr"
            alt=""
            data-src="https://wos.58cdn.com.cn/XyVuTsRqXyf/question/11121.png"
          />
          <div class="look cursor">查看大图</div>
        </div>
      <div class="question-btns">
			
				<div class="prev cursor" @click="presubject">上一题</div>
				<div class="next cursor"  @click="nextsubject">下一题</div>
			</div>
      </div>

    </el-container>
    <el-collapse accordion>
      <el-collapse-item title="解析">
        <div>{{ subject.explain }}</div>
      </el-collapse-item>
      <el-collapse-item title="答题卡">
        <div class="problem-list">
          <div v-for="index in 1000" :key="index" class="problem-mark">
            {{ index }}
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="评论">
        <nav aria-label="...">
          <ul class="pagination">
            <li v-for="index in 100" :key="index">
              <span>{{ index }}</span>
            </li>
          </ul>
        </nav>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>

export default {
  name: "SubjiecItem",
  data() {
    return {
      subjects: [],
      subject: {},
      account:0,
      i: 0,
      index:0,
      currentindex:1
    };
  },
  created() {
    this.getsubject(1)
   //this.$store.dispatch("getSubject",this.$route.params.index)
  //  this.$store.dispatch("getSubject",this.currentindex)
  //   this.subject = this.$store.state.subject.subject;
    this.account=this.$store.state.subject.subjects.length;
  },
  methods: {
    presubject() {
      //  this.currentindex--;
      //  this.getsubject(this.currentindex)
      // //this.$router.push("/home/subject/"+currentindex);
      //    this.$router.push("/home/subject/"+  this.currentindex);
      this.$router.back()
    },
    nextsubject() {
      // this.subject = this.subjects[this.i];
      // this.i++;
   this.currentindex++;
      this.getsubject(this.currentindex)
       this.$router.push("/home/subject/"+  this.currentindex);
      

    
       
    },
    getsubject(index){
        this.$store.dispatch("getSubject",index)
    this.subject = this.$store.state.subject.subject;
    },
    xuanzhe(e) {

     var target=e.target;
   
      //  console.log(target.nodeName )
      if(target.className=="op-content"||target.className==""){
        target=target.parentNode;
      }
      if(target.className=="op cursor"){
        var image=target.firstElementChild;

        let an=target.getAttributeNode('data-index').value;
        console.log(this.subject.answer)
        if(this.subject.answer==an){
          image.getAttributeNode('src').value="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAjVBMVEUAAAAAxVYAw1YA0WwAxFcAw1cAxFcAxFcAw1cAxFcAxVYAxVcAxFcAxVcAxV0AxFYAw1b////7/vzt+vMuznQnzHAhy2v3/fnz/Pfw+/Xk+e3f9+pH1IUTx2Lp+fCP5bVh2pZA0oA50Xw0z3gZyWeY57tn25pR1oza9ubY9eXV9eOf6L+I47CD4axZ15CYyPr+AAAAEHRSTlMAf/ML6NnTv6qlgnJSIxbyTWlgnQAAATdJREFUOMuN1WdzgzAMBmBhVsCYSCFpQhOa1aa7///n1RzDg+X3k809d7qzbAFmBE/ikLEwTriAyeRphFqiNB9lvsfQCvP8ocsCHEmQ2c7DiXhm2RVOZqWXN50tl+va1TNcSNY4P1iCga8KOxTP2Yyots3J5xKmM+7pSBesk0oYzToqm74DiGm3eyaiR7MWwGfd5tJuOCT994fpti+awwTi7ntB34YrpPvrtzGE7epMRG/K3Wv3rvYhsO7EvnR5K02HDNbd8vVTynPrDkT7E2pZy9K9/OjkVTlVOkYlj1L+IJ72RIcrGokhsTpBv4ZTx8NRl3UvNkTlDa1wEGhL6e5oR9iXYif7UQxdpK6ZksUWB0lHLm5VDR3LnZ+C++Nyf67uA2B5pLgPKfex5z5I3Uez+7B3/n38A3VoUWEG4R6kAAAAAElFTkSuQmCC"
        }else{
            image.getAttributeNode('src').value="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAbFBMVEUAAAD/TC3/TC7/TS3/VT7/TS3/TC7/TC7/TC3/TC3/TC//Ti//UDP/US7/TS3/TC3/////UzX/TzH/VTj/zMP/1Mz/1s//x77/2tP/t6r/r6L/19H/0cn/wrf/kX7/vbH/clr/lIH/gm3/gWuD7buVAAAAD3RSTlMAqH/zC+jZ07+CclIjFvLRL7PzAAABNklEQVQ4y52V65KCMAyFW26Wm6GAqIDo7r7/O24QtUmBacfzp5PpF06mTYPgKjKpkjBMlMwKsasyPQDRIS03sSgIwVIYRGsuj2FDcW5zAewo4LYSdiWpPeds0u1ru+fgUP4qMHaBcUSM3ealOefmpwGjR21OvkQw/YR6qC6G7KuT/gQpguZ+f6vKkD0Gk7l37BfjVd9wc1jIK01CFSIDQp5xu9MvrqMFZ0KCTWJp92Vh16NgTc4ljIwDJRLgZFs91XIOEhHCFtnWdg+Lox94tK01coak1opzI0K3cU0qIRl3QuS+LGdGSnbgTYfAdU7obDITBeEuM2dSKFnQpphws38nDRj80aYQKXXuyedZm/HG1Q9a8KRp4/o/Bf/H5f9c3QPAd6R8M6TcY889SL8dze5h7/37+AcfOUs9dnB0sgAAAABJRU5ErkJggg=="
        }

       
      }
      
    },
  },

beforeRouteUpdate (to, from, next) {
   
     console.log("1111111111111111111111")
      this.getsubject(to.params.index)
    next();
  },
  // watch: {
  //   '$route' (to, from) {
  //     console.log(to.params.index)
  //      this.getsubject(to.params.index)
  //     }
  //   }



};
</script>
<style scoped>
.question-content {
  width: 1160px;
  background: #fff;
  padding-bottom: 40px;
  position: relative;
  display: inline-block;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-top: 22px;
}
.question-content .question-title .choose {
  width: 53px;
  height: 20px;
  background: #00c356;
  display: inline-block;
  border-radius: 20px 20px 0 20px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 20px;
}

.question-content .question-title .exam-question,
.question-content .question-title .mark {
  color: #4a4a4a;
  font-size: 16px;
  display: inline-block;
  line-height: 30px;
}

.question-content .question-option {
  display: inline-block;
  margin-left: 58px;
}
.question-content .question-option .op {
  display: inline-block;
  width: 100%;
  margin-top: 20px;
  color: #4d4d4d;
  font-size: 16px;
}

.question-option .op .op-content {
  float: left;
  margin-left: 16px;
  padding-top: 13px;
}

.question-content .question-img {
  display: none;
  position: absolute;
  right: 20px;
  top: 60px;
  height: 240px;
}
.question-content .question-img img {
  max-height: 200px;
  max-width: 400px;
  display: block;
  margin: 0 auto;
}
.question-content .question-btns {
    margin: 60px 0 0 58px;
    display: inline-block;
    width: 100%;
    font-size: 14px;
}
</style>
<style>
.problem-list {
  display: inline-block;
  width: 1201px;
  max-height: 267px;
  overflow: auto;
  margin-bottom: 20px;
}

.problem-list .problem-mark {
  display: inline-block;
  width: 54px;
  height: 36px;
  background: #fff;
  border: 1px solid #eee;
  text-align: center;
  line-height: 36px;
  float: left;
  position: relative;
}
</style>
<style scoped>
.subject {
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
}
.question-option .op .op-content {
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