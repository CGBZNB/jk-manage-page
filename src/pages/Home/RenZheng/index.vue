<template>
    <div class="maindiv">
         <div class="guide-main-list">
                <!-- 学员panel -->
                <div class="main-panel panel-xueyuan">
                    <div class="panel-img">
                        <img src="//img.58cdn.com.cn/dist/jxedt/pc/products/jxregister/images/xueyuan.png?v=20180725" alt="">
                    </div>
                    <div class="panel-title">
                        <p>学员认证</p>
                    </div>
                    <div class="panel-describe">
                        <p>全真模拟试题 智能驾校筛选</p>
                        <p>专家技巧点评 助力轻松通关</p>
                    </div>
                    <div class="panel-btn">
                        <a  @click="stuentrz">
                            <span class="btn xy-btn">认证</span>
                        </a>
                    </div>
                </div>
                <!-- 学员panel -->
                <!-- 教练panel -->
                <div class="main-panel panel-jiaolian">
                    <div class="panel-img">
                        <img src="//img.58cdn.com.cn/dist/jxedt/pc/products/jxregister/images/jiaolian.png?v=20180725" alt="">
                    </div>
                    <div class="panel-title">
                        <p>教练认证</p>
                    </div>
                    <div class="panel-describe">
                        <p>免费询价线索 学员口碑积累</p>
                        <p>新老客户维护 高效促单转化</p>
                    </div>
                    <div class="panel-btn">
                        <a @click="teacherrz">
                            <span class="btn  jl-btn">认证</span>
                        </a>
                    </div>
                </div>

                <!-- 陪练panel -->
                <!-- 驾校panel -->
                <div class="main-panel panel-jiaxiao">
                    <div class="panel-img">
                        <img src="//img.58cdn.com.cn/dist/jxedt/pc/products/jxregister/images/jiaxiao.png?v=20180725" alt="">
                    </div>
                    <div class="panel-title">
                        <p>驾校认证</p>
                    </div>
                    <div class="panel-describe">
                        <p>海量线索推送 助力招生无忧</p>
                        <p>驾校品牌曝光 提升行业影响</p>
                    </div>
                    <div class="panel-btn">
                        <a  @click="dialogFormVisible3 = true">
                            <span class="btn jx-btn">认证</span>
                        </a>
                    </div>
                </div>
                <!-- 驾校panel -->
            </div>
           

<!-- Form -->


<el-dialog title="学员认证" :visible.sync="dialogFormVisible1">
  <el-form :model="studentform">
    <el-form-item label="姓名" :label-width="formLabelWidth">
      <el-input v-model="studentform.name" autocomplete="off"></el-input>
    </el-form-item>
        <el-form-item label="身份证" :label-width="formLabelWidth">
      <el-input v-model="studentform.idCard" autocomplete="off"></el-input>
    </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
      <el-input v-model="studentform.phone" autocomplete="off"></el-input>
    </el-form-item>
     
        <el-form-item label="年龄" :label-width="formLabelWidth">
      <el-input v-model="studentform.age" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="性别" :label-width="formLabelWidth">
      <el-radio v-model="studentform.sex" label="1">男</el-radio>
      <el-radio v-model="studentform.sex" label="0">女</el-radio>
    </el-form-item>
    <el-form-item label="驾校" :label-width="formLabelWidth" >
      <el-select v-model="studentform.school" placeholder="驾校" @change="schoolchange">
       <el-option v-for="item in schools" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
        <el-form-item label="教练" :label-width="formLabelWidth" >
      <el-select v-model="studentform.teacher" placeholder="请选择教练">
         <el-option v-for="item in teachers" :key="item.id" :label="item.name" :value="item.id"></el-option>
      
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="rzstudent">确 定</el-button>
  </div>
</el-dialog>
<el-dialog title="教练认证" :visible.sync="dialogFormVisible2">
  <el-form :model="teacherform">
    <el-form-item label="姓名" :label-width="formLabelWidth">
      <el-input v-model="teacherform.name" autocomplete="off"></el-input>
    </el-form-item>
        <el-form-item label="身份证" :label-width="formLabelWidth">
      <el-input v-model="teacherform.idCard" autocomplete="off"></el-input>
    </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
      <el-input v-model="teacherform.phone" autocomplete="off"></el-input>
    </el-form-item>
     
        <el-form-item label="年龄" :label-width="formLabelWidth">
      <el-input v-model="teacherform.age" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="性别" :label-width="formLabelWidth">
      <el-radio v-model="teacherform.sex" label="1">男</el-radio>
      <el-radio v-model="teacherform.sex" label="0">女</el-radio>
    </el-form-item>
          <el-form-item label="介绍" :label-width="formLabelWidth">
       <el-input v-model="teacherform.introduce" autocomplete="off" type="textarea"></el-input>
    </el-form-item>
    <el-form-item label="驾校" :label-width="formLabelWidth" >
      <el-select v-model="teacherform.school" placeholder="驾校" >
       <el-option v-for="item in schools" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
    <el-button type="primary"  @click="rzteacher">确 定</el-button>
  </div>
</el-dialog>
<el-dialog title="驾校认证" :visible.sync="dialogFormVisible3">
  <el-form :model="schoolform">
    <el-form-item label="名称" :label-width="formLabelWidth">
      <el-input v-model="schoolform.name" autocomplete="off"></el-input>
    </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
      <el-input v-model="schoolform.phone" autocomplete="off"></el-input>
    </el-form-item>
        <el-form-item label="年限" :label-width="formLabelWidth">
      <el-input v-model="schoolform.age" autocomplete="off"></el-input>
    </el-form-item>
     
        <el-form-item label="价格" :label-width="formLabelWidth">
      <el-input v-model="schoolform.price" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="地址" :label-width="formLabelWidth">
 <el-input v-model="schoolform.address" autocomplete="off"></el-input>
    </el-form-item>

      <el-form-item label="介绍" :label-width="formLabelWidth">
       <el-input v-model="schoolform.introduce" autocomplete="off" type="textarea"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible3 = false">取 消</el-button>
    <el-button type="primary"  @click="rzschool">确 定</el-button>
  </div>
</el-dialog>
    </div>
    
</template>

<script>
import {getSchools,getTeachers,studentrzsf,schoolzsf,teacherzsf} from '@/api/info'
export default {
    name:'RenZheng',
     data() {
      return {

        schools:[],
        teachers:[],
        dialogFormVisible1: false,
           dialogFormVisible2: false,
              dialogFormVisible3: false,
        studentform:{
          name:'',
          idCard:'',
          phone:'',
          age:'',
          school:'',
          teacher:'',
        },
        teacherform:{
          name:'',
          idCard:'',
          phone:'',
          age:'',
          school:'',
          introduce:''
        },
        schoolform:{
          name:'',
          phone:'',
          age:'',
          price:'',
          address:'',         
          introduce:''
        },
        formLabelWidth: '120px'
      };
    },
    methods:{
     async stuentrz(){
        this.dialogFormVisible1=true;
        if(this.schools.length==0){
          console.log(this.schools)
          let result=await getSchools()
          if(result.code==201){
            this.schools=result.data
          }
        }
    
      },
    async  teacherrz(){
        this.dialogFormVisible2=true;
        if(this.schools.length==0){
          console.log(this.schools)
          let result=await getSchools()
          if(result.code==201){
            this.schools=result.data
          }
        }
    
      },
      async schoolchange(e,item){
        this.studentform.teacher=''
        let param={
          sid:this.studentform.school
        }
          let result=await getTeachers(param)
          if(result.code==201){
            this.teachers=result.data
          }
     
      },
    async  rzstudent(){
       
        let result= await studentrzsf(this.studentform)
        if(result.code==201){
          this.$alert('申请成功，等待管理员确认', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
        this.dialogFormVisible1=false
        }
        
      },
     async  rzteacher(){
             let result= await teacherzsf(this.teacherform)
        if(result.code==201){
         this.$alert('申请成功，等待管理员确认', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
        this.dialogFormVisible2=false
        }
      },
    async  rzschool(){
              let result= await schoolzsf(this.schoolform)
        if(result.code==201){
           this.$alert('申请成功，等待管理员确认', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
        this.dialogFormVisible3=false
        }
      }
    }
}
</script>

<style scoped>
.maindiv{
    padding-top: 30px;
    min-height: 500px;
    overflow: hidden;
}
.maindiv .guide-main-list {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding: 20px;
}
.maindiv .guide-main-list .main-panel {
    float: left;
    margin: 0 50px 26px 50px;
    width: 280px;
    height: 408px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #eee;
    text-align: center;
    transition: all .6s;
    cursor: pointer;
}
.maindiv .guide-main-list .main-panel .panel-img {
    margin: 41px 45px 20px;
}
.maindiv .guide-main-list .main-panel .panel-title {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 20px;
}
.maindiv .guide-main-list .main-panel .panel-describe {
    margin-bottom: 30px;
}
.maindiv .guide-main-list .main-panel .panel-btn span {
    width: 230px;
    height: 36px;
    display: inline-block;
    border-radius: 3px;
    font-size: 14px;
    color: #fff;
    line-height: 36px;
}
.maindiv .guide-main-list .panel-xueyuan .panel-btn span {
    background: #d9779b;
}
.maindiv .guide-main-list .panel-jiaolian .panel-btn span {
    background: #5585d6;
}
.maindiv .guide-main-list .panel-jiaxiao .panel-btn span {
    background: #4cbeca;
}
.main-panel:hover{
    background:#fff;
    box-shadow:3px 2px 11px rgba(4,48,84,.15);
    transform:scale(1.1);
    position:relative;
    z-index:2}
</style>