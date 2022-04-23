<template>
<div id="mnks">
    <div class="content-body">
        <div class="left fl">
            <div class="kt pos">
                <div class="tit">模拟考试</div>
                座号：01
            </div>
            <div class="user-info pos">
                <div class="tit" style="left: 38px;">考生信息</div>
                <img src="@/assets/images/touxiang.jpg" alt="">
                <p><label for="" class="mr">姓</label> <label for="">名：</label> <span>学员</span></p>
                <!--<p><label for="" class=mr>性</label> <label for="">别：</label> <span>男</span></p>-->
               
                                    <p><label for="">考试科目：</label> <span>科目一</span></p>
                
            </div>
            <div class="waste-time pos">
                <div class="tit" style="left: 38px;">剩余时间</div>
                <span class="countdown">44:38</span>
            </div>
        </div>
        <div class="center fl" :key="subject.id">
            <div class="kstm pos">
                <div class="tit">考试题目</div>
                <p class="name">{{currentindex}}、{{subject.content}}</p>
                <div class="option">
                    <p>{{subject.choiceA}}</p>
                    <p>{{subject.choiceB}}</p>
                    <p v-if="subject.topicType=='SingleChoice'">{{subject.choiceC}}</p>
                    <p  v-if="subject.topicType=='SingleChoice'">{{subject.choiceD}}</p>
                </div>
                <div class="tm-answer">
                    <div class="fl sec-aswer">您的选项是：</div>
                    <div class="fr aswer" @click.once="xuanzhe($event)" v-if="subject.flag==0">
                        <span class="fl">请选择：</span>
                        <li answer="A" class="danxuan" >A</li>
                        <li answer="B" class="danxuan">B</li>
                        <li answer="C" class="danxuan" v-if="subject.topicType=='SingleChoice'" >C</li>
                        <li answer="D" class="danxuan" v-if="subject.topicType=='SingleChoice'" >D</li>
                        </div>
                         <div class="fr aswer"  v-else>
                        <span class="fl">请选择：</span>
                        <li answer="A" class="danxuan" :class="{active:subject.myAnswer=='A'}">A</li>
                        <li answer="B" class="danxuan" :class="{active:subject.myAnswer=='B'}">B</li>
                        <li answer="C" class="danxuan" v-if="subject.topicType=='SingleChoice'"  :class="{active:subject.myAnswer=='C'}">C</li>
                        <li answer="D" class="danxuan" v-if="subject.topicType=='SingleChoice'" :class="{active:subject.myAnswer=='D'}" >D</li>
                        </div>
                </div>
                
            </div>
            <div class="tsxx pos fl">
                <div class="tit">提示信息</div>
                <span class="tsxxt">判断题，请判断对错！</span>
            </div>
            <div class="btn-wrap fl">
                <a @click="presubject" class="btn pre">上一题</a>
                <a  class="btn next" @click="nextsubject" >下一题</a>
                <!-- <a @click="submit" class="btn jj">交卷</a> -->
                <a  @click="dialogVisible = true" class="btn jj">交卷</a>
            </div>
        </div>
        <div class="right fl">
            <div class="Qn-wrap">
                <li v-for="index in account" :key="index" class="qn" :class="[subjects[index-1].flag==0?'noSel':'selected',currentindex === index ? 'active' : '']" @click="listto(index)">
                    <p>{{index}}</p>
                    <p class="rightA" v-if="subjects[index-1].flag==1">{{subjects[index-1].myAnswer}}</p>
                    <p class="wrong" v-if="subjects[index-1].flag==2">{{subjects[index-1].myAnswer}}</p>
                    </li>
              </div>
        </div>
        <div class="q-detail pos fl" v-if="subject.imaged==1">
            <div class="tit">图片信息</div>
            <img class="q-img" :src="subject.imgStr" alt="">
        </div>
    </div>
    <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>是否确认要交卷</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submit">确 定</el-button>
  </span>
</el-dialog>
</div>
</template>

<script>
export default {
    name:'Exam',
    data(){
        return{
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
      score:0,
      errcount:0,
      rightcount:0,
    weicount:0,
        dialogVisible: false
     
    }
        
    },
       async created() {

   let data={
     km:1
   }
 console.log(data)

  await this.$store.dispatch("getExam",data)
    this.account=this.$store.state.subject.exam.length;
    this.weicount=this.account
     this.subjects=this.$store.state.subject.exam
    this.subject = this.subjects[this.currentindex-1]

  },
  updated(){
    console.log(this.subject.imaged==1)
  },
  methods:{
      xuanzhe(e){
         
           var target=e.target;
      if(target.nodeName=='LI'){    
        let answer=target.getAttributeNode('answer').value
        this.subject.myAnswer=answer
        if(this.subject.answer==answer){
              this.subject.flag=1;
              this.score+=1;
              this.rightcount+=1
        }else{
              this.subject.flag=2;
              this.errcount+=1    }
      target.classList.toggle('active')

            this.currentindex++
           this.getsubject(this.currentindex)
           this.weicount-=1
      } 
            
      },
          presubject() {
      if(this.currentindex>1){
          this.currentindex--;
        this.getsubject(this.currentindex)
      }
       
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
        this.subject=this.subjects[index-1]
   },
    listto(index){
      this.currentindex=index
        this.getsubject(this.currentindex)
    },
    submit(){
        let data={
           errcount: this.errcount,
           rightcount:this.errcount,
          weicount: this.weicount,
          score:this.score
        }
        this.dialogVisible = false
        this.$router.push({path:'/home/result',query:data})
    },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  }
}
</script>

<style>
.content-body {
    width: 1200px;
    margin: 0 auto;
    background: #fff;
    box-sizing: border-box;
    padding-top: 54px;
    overflow: hidden;
}

.left {
    margin-right: 20px;
}
.fl {
    float: left;
}
.pos {
    position: relative;
}
.left .kt {
    height: 86px;
    text-align: center;
    line-height: 86px;
    color: #4a4a4a;
    font-size: 16px;
    margin-bottom: 20px;
}
.left .kt, .left .user-info {
    width: 162px;
    border: 1px solid #ddd;
    box-sizing: border-box;
}
.pos .tit {
    position: absolute;
    top: -17px;
    left: 32px;
    background: #fff;
    padding: 5px;
    font-size: 18px;
    color: #333;
    line-height: 25px;
}
.left .user-info {
    height: 290px;
    padding: 20px 16px;
    margin-bottom: 22px;
}
.left .user-info img {
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto 15px;
}
.left .user-info p {
    margin-bottom: 10px;
    font-size: 0;
    color: #4a4a4a;
}
.left .user-info p label {
    font-size: 16px;
}
.left .user-info p label.mr {
    margin-right: 32px;
}
.left .user-info p span {
    font-size: 16px;
}
.left .waste-time {
    width: 162px;
    height: 70px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    text-align: center;
    line-height: 70px;
    color: #24c27d;
    font-size: 18px;
}
.pos .tit {
    position: absolute;
    top: -17px;
    left: 32px;
    background: #fff;
    padding: 5px;
    font-size: 18px;
    color: #333;
    line-height: 25px;
}
.center {
    margin-right: 20px;
}
.center .kstm {
    width: 596px;
    height: 396px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    padding: 25px 20px;
    margin-bottom: 22px;
}

.center .kstm .name {
    line-height: 25px;
}
.center .kstm .name, .center .kstm .option p {
    color: #4a4a4a;
    font-size: 18px;
    margin-bottom: 15px;
}
.center .kstm .tm-answer {
    width: 100%;
    overflow: hidden;
    position: absolute;
    bottom: 20px;
    left: 0;
    padding: 0 20px;
    box-sizing: border-box;
}

.center .kstm .tm-answer .sec-aswer {
    font-size: 18px;
    line-height: 25px;
    color: #4a4a4a;
}
.center .kstm .tm-answer .aswer {
    overflow: hidden;
}
.center .kstm .tm-answer .aswer span {
    font-size: 18px;
    line-height: 25px;
    color: #4a4a4a;
}

.center .kstm .tm-answer .aswer li {
    float: left;
    width: 30px;
    height: 24px;
    line-height: 24px;
    font-size: 16px;
    border: 1px solid grey;
    margin: 0 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
}
.center .kstm .tm-answer .aswer li.active {
    background: #24c27d;
    border-color: #24c27d;
    color: #fff;
}
.center .tsxx {
    width: 318px;
    height: 70px;
    padding: 16px 10px 10px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    color: #4a4a4a;
    font-size: 16px;
    line-height: 22px;
}
.center .btn-wrap {
    padding: 17px 0;
    margin-left: 10px;
}
.center .btn-wrap .btn {
    display: block;
    width: 80px;
    height: 36px;
    float: left;
    border-radius: 3px;
    border: 1px solid grey;
    font-size: 18px;
    color: #4a4a4a;
    line-height: 36px;
    text-align: center;
    margin-right: 10px;
    box-sizing: border-box;
    cursor: pointer;
    text-decoration: none;
}
.right {
    width: 400px;
}
.right .Qn-wrap {
    overflow: hidden;
}
.right .Qn-wrap li {
    width: 40px;
    height: 40px;
    color: #4a4a4a;
    font-size: 13px;
    border: 1px solid #eee;
    text-align: center;
    float: left;
    box-sizing: border-box;
    cursor: pointer;
}
.right .Qn-wrap li.selected {
    line-height: 20px;
}
.right .Qn-wrap li.noSel {
    line-height: 40px;
}
.right .Qn-wrap li.active {
    background: #e6e6e6;
}
.right .Qn-wrap li p.wrong {
    color: #fb6e52;
}
.right .Qn-wrap li p.rightA {
    color: #24c27d;
}

.q-detail {
    width: 100%;
    height: 230px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    margin-top: 20px;
    padding: 25px 0;
}
.q-detail img {
    width: 360px;
    height: 180px;
    display: block;
    margin: 0 auto;
}
</style>