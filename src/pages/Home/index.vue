<template>
  <div>
     <!-- <Header></Header>
   
     <Footer></Footer> -->
      <Nav></Nav>
     
      <router-view></router-view>
  </div>
</template>

<script>

import Nav from '@/components/Nav'
export default {
    name:'Home',
    components:{
      Nav
    },
    mounted(){
      //this.$store.dispatch("getuserinfo")
    }

}
</script>

<style>

</style>