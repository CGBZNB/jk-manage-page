<template>
    <!-- <div>
    <router-view></router-view>
    </div>
  -->
    <div>
     <Header></Header>
 
      <router-view></router-view>
     <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components:{
         Header,
      Footer,
  },
//   created(){
//       console.log("111111")
//       this.$store.dispatch('getuserinfo')
//   },updated(){
//        console.log("2222")
//       this.$store.dispatch('getuserinfo')
//   }
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
    font-family: 'Microsoft YaHei','Hiragino Sans GB',Helvetica,Arial,'Lucida Grande',sans-serif
}

body img {
    border: none
}

input::-webkit-input-placeholder {
    font-size: 13px;
    color: silver;
    line-height: 18px
}

input:-moz-placeholder {
    font-size: 13px;
    color: silver;
    line-height: 18px
}

input::-moz-placeholder {
    font-size: 13px;
    color: silver;
    line-height: 36px
}

input:-ms-input-placeholder {
    font-size: 13px;
    color: silver;
    line-height: 18px
}
</style>
