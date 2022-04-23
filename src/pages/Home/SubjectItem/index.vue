<template>
  <div class="main-item">
    <div class="subopt-container-breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/home/practice">练习选项</a></el-breadcrumb-item>
         <el-breadcrumb-item><a href="/">在线练习</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-container :key="subject.id">
      <div class="question-content" v-if="subject.topicType!='MultipleChoice'">
        <div class="question-body">
          <div class="question-title">
            <span class="choose">单选题</span>
            <div class="mark">{{currentindex}}/{{account}}、</div>
            <span style="display: inline" class="exam-question"
              >{{subject.content}}</span
            >
          </div>
          <div class="question-option" @click.once="xuanzhe($event)"  v-if="subject.flag==0">
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
            <div class="question-option" v-if="subject.flag!=0" >
            <div id="256" class="op cursor" data-type="2" data-index="A" >
        
              <img src="@/assets/images/subject/true.png"  v-if="subject.answer=='A'"/>
               <img src="@/assets/images/subject/error.png"  v-else-if="subject.myAnswer=='A'&&subject.myAnswer!=subject.answer"/>
                <img src="@/assets/images/subject/circle.png"  v-else-if="subject.myAnswer!='A'"/>
              <div class="op-content">{{subject.choiceA}}</div>
            </div>
            <div id="256" class="op cursor" data-type="2" data-index="B"  >
              
                           <img src="@/assets/images/subject/true.png"  v-if="subject.answer=='B'"/>
               <img src="@/assets/images/subject/error.png"  v-else-if="subject.myAnswer=='B'&&subject.myAnswer!=subject.answer"/>
                <img src="@/assets/images/subject/circle.png"  v-else-if="subject.myAnswer!='B'"/>
              <div class="op-content">{{subject.choiceB}}</div>
            </div>
            <div id="256" class="op cursor" data-type="2" data-index="C" v-if="subject.topicType!='Judgement'">
                
              <img src="@/assets/images/subject/true.png"  v-if="subject.answer=='C'"/>
               <img src="@/assets/images/subject/error.png"  v-else-if="subject.myAnswer=='C'&&subject.myAnswer!=subject.answer"/>
                <img src="@/assets/images/subject/circle.png"  v-else-if="subject.myAnswer!='C'"/>
              <div class="op-content">
                {{subject.choiceC}}
              </div>
            </div>
            <div id="256" class="op cursor" data-type="2" data-index="D" v-if="subject.topicType!='Judgement'">
               
              <img src="@/assets/images/subject/true.png"  v-if="subject.answer=='D'"/>
               <img src="@/assets/images/subject/error.png"  v-else-if="subject.myAnswer=='D'&&subject.myAnswer!=subject.answer"/>
                <img src="@/assets/images/subject/circle.png"  v-else-if="subject.myAnswer!='D'"/>
              <div class="op-content">{{subject.choiceD}}</div>
            </div>
          </div>
        </div>
        <div class="question-img" >
          <img
            :src="subject.imgStr"
            alt=""
          />
         
        </div>
      <div class="question-btns">
			
				<div class="prev cursor" @click="presubject">上一题</div>
				<div class="next cursor"  @click="nextsubject">下一题</div>
        	<div class="cursor shoucang"  @click="shoucang"> 
            <i class="iconfont " :class="subject.liked?'icon-shoucang1':'icon-shoucang'"></i></div>
       
      </div>
      </div>

    </el-container>
    <el-collapse accordion>
      <el-collapse-item title="解析">
        <div>{{ subject.explain }}</div>
      </el-collapse-item>
      <el-collapse-item title="答题卡">
        <!-- // -->
          <div class="problem-list">
          <div v-for="index in account" :key="index" class="problem-mark cursor" :class="[subjects[index-1].flag==1?'right':'',currentindex === index ? 'active' : '',subjects[index-1].flag==2?'false':'']" @click="listto(index)">
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
import {reqSetSC} from '@/api/subject'
export default {
  name: "SubjiecItem",
  data() {
    return {
      subjects: [],
      subject: {},
      account:0,
      currentindex:1,
      cssstyle:{
        isright:true,
        isactive:true,
        km:this.$route.query.km,
        type:this.$route.query.type
      },
     
    };
  },
  mounted() {
 
   this.km=this.$route.query.km
   this.type=this.$route.query.type
   //this.$store.dispatch("getSubject",this.$route.params.index)
   let data={
     km:this.km,
     type:this.type
   }
   this.$store.dispatch("getItems",data)
    this.subject = this.$store.state.subject.subject;
    this.account=this.$store.state.subject.items.length;
     this.subjects=this.$store.state.subject.items
     this.currentindex==this.$store.state.subject.index

  },
  methods: {
    shoucang(){
        this.subject.liked=!this.subject.liked
                    let params={
              sid:this.subject.id,
              flag:1
            }
        reqSetSC(params)
    },
    presubject() {
      if(this.currentindex>1){
          this.currentindex--;
        this.getsubject(this.currentindex)
      }
       
      //this.$router.push("/home/subject/"+currentindex);
         //this.$router.push("/home/subject/");
    },
    nextsubject() {
      // this.subject = this.subjects[this.i];
      // this.i++;
      if(this.currentindex<this.account){
        this.currentindex++;
       this.getsubject(this.currentindex)
      }
    },
    getsubject(index){
         let data={
     km:this.km,
     type:this.type,
     index:index
   }
        this.$store.dispatch("getSubject",data)
    this.subject = this.$store.state.subject.subject;
    },
    listto(index){
      this.currentindex=index
        this.getsubject(this.currentindex)
    },
    xuanzhe(e) {

     var target=e.target;
   
      //  console.log(target.nodeName )
      if(target.className=="op-content"||target.className==""){
        target=target.parentNode;
      }
      if(target.className=="op cursor"){
        var image=target.firstElementChild;

        this.subject.myAnswer=target.getAttributeNode('data-index').value;
          this.subject.flag=1;
        
        let params={
          subject:this.subject,
          index:this.currentindex
        }

        if(this.subject.answer==this.subject.myAnswer){
          this.subject.flag=1;
          image.getAttributeNode('src').value="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAjVBMVEUAAAAAxVYAw1YA0WwAxFcAw1cAxFcAxFcAw1cAxFcAxVYAxVcAxFcAxVcAxV0AxFYAw1b////7/vzt+vMuznQnzHAhy2v3/fnz/Pfw+/Xk+e3f9+pH1IUTx2Lp+fCP5bVh2pZA0oA50Xw0z3gZyWeY57tn25pR1oza9ubY9eXV9eOf6L+I47CD4axZ15CYyPr+AAAAEHRSTlMAf/ML6NnTv6qlgnJSIxbyTWlgnQAAATdJREFUOMuN1WdzgzAMBmBhVsCYSCFpQhOa1aa7///n1RzDg+X3k809d7qzbAFmBE/ikLEwTriAyeRphFqiNB9lvsfQCvP8ocsCHEmQ2c7DiXhm2RVOZqWXN50tl+va1TNcSNY4P1iCga8KOxTP2Yyots3J5xKmM+7pSBesk0oYzToqm74DiGm3eyaiR7MWwGfd5tJuOCT994fpti+awwTi7ntB34YrpPvrtzGE7epMRG/K3Wv3rvYhsO7EvnR5K02HDNbd8vVTynPrDkT7E2pZy9K9/OjkVTlVOkYlj1L+IJ72RIcrGokhsTpBv4ZTx8NRl3UvNkTlDa1wEGhL6e5oR9iXYif7UQxdpK6ZksUWB0lHLm5VDR3LnZ+C++Nyf67uA2B5pLgPKfex5z5I3Uez+7B3/n38A3VoUWEG4R6kAAAAAElFTkSuQmCC"
        }else{
            image.getAttributeNode('src').value="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAbFBMVEUAAAD/TC3/TC7/TS3/VT7/TS3/TC7/TC7/TC3/TC3/TC//Ti//UDP/US7/TS3/TC3/////UzX/TzH/VTj/zMP/1Mz/1s//x77/2tP/t6r/r6L/19H/0cn/wrf/kX7/vbH/clr/lIH/gm3/gWuD7buVAAAAD3RSTlMAqH/zC+jZ07+CclIjFvLRL7PzAAABNklEQVQ4y52V65KCMAyFW26Wm6GAqIDo7r7/O24QtUmBacfzp5PpF06mTYPgKjKpkjBMlMwKsasyPQDRIS03sSgIwVIYRGsuj2FDcW5zAewo4LYSdiWpPeds0u1ru+fgUP4qMHaBcUSM3ealOefmpwGjR21OvkQw/YR6qC6G7KuT/gQpguZ+f6vKkD0Gk7l37BfjVd9wc1jIK01CFSIDQp5xu9MvrqMFZ0KCTWJp92Vh16NgTc4ljIwDJRLgZFs91XIOEhHCFtnWdg+Lox94tK01coak1opzI0K3cU0qIRl3QuS+LGdGSnbgTYfAdU7obDITBeEuM2dSKFnQpphws38nDRj80aYQKXXuyedZm/HG1Q9a8KRp4/o/Bf/H5f9c3QPAd6R8M6TcY889SL8dze5h7/37+AcfOUs9dnB0sgAAAABJRU5ErkJggg=="
            this.subject.flag=2;
            let params={
              sid:this.subject.id,
              flag:2
            }
        reqSetSC(params)
        }
 
              
       
      }
      
    },
  },



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
.question-content .question-btns .next, .question-content .question-btns .prev, .question-content .question-btns .submit {
    width: 120px;
    height: 36px;
    background: #00c356;
    border-radius: 3px;
    display: inline-block;
    text-align: center;
    line-height: 36px;
  margin-left: 10px;
    color: #fff;
}
.shoucang{


  margin-left: 30px;
    border-radius: 3px;
    display: inline-block;
    text-align: center;
    line-height: 36px;
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
.problem-list .problem-mark.active {
    background: #e6e6e6;
}
 .problem-list .problem-mark.false {
    background: #ff4c2d;
    color: #fff;
}
 .problem-list .problem-mark.right {
    background: #00c356;
    color: #fff;
}

.cursor {
    cursor: pointer;
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
.main-item {
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