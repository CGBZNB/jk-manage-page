<template>
<div style="height:400px">
  <el-carousel :interval="5000" arrow="always"   height="400px">
    <el-carousel-item v-for="(item) in images" :key="item.src" >
      <!-- <img src="@/assets/images/bg/bg1.jpg"/> -->
       <img :src="item.src"/>
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
export default {
    name:'Bananer',
    data(){
      return{
          images:[
            {
              src:require('@/assets/images/bg/bg1.jpg')
            },
                        {
              src:require('@/assets/images/bg/bg2.jpg')
            },
                        {
              src:require('@/assets/images/bg/bg3.jpg')
            },
                        {
              src:require('@/assets/images/bg/bg4.jpg')
            },
          ]
    }
    }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    text-align: center;
    margin: 0;
  }
    .el-carousel__item img {
      width: 100%;
      height: 400px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>