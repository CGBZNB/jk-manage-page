<template>
  <div class="result-main">
      <div class="contain">
          <h2>{{message}}</h2>
          <div class="detail">
              考试详情：答对{{data.rightcount}}题，答错{{data.errcount}}题,未答{{data.weicount}}题
          </div>
          <div class="btn">
              <el-button @click="fanhui">返回</el-button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'ExamResult',
    data(){
        return{
        data:{},

        }
    },
    mounted(){
       this.data=this.$route.query

       
    },
      computed:{
        message(){
            if(this.data.score<90){
                return "考试未通过,分数为："+this.data.score+"分"
            }else{
                return "考试通过，分数为："+this.data.score+"分"
            }
        }
    },
    methods:{
        fanhui(){
            this.$router.push("/home/practice")
        }
    }
  
}
</script>

<style>
.result-main{
    height: 400px;
 
}
.result-main .contain{
    width: 1000px;
   margin: 20px auto;
   text-align: center;
   font-size: 25px;

}
.result-main .contain .detail{
    margin-top: 50px;
    text-align: left;
}
.result-main .contain .btn{
    margin-top: 50px;
    text-align: center;
}
</style>