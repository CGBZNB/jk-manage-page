<template>
  <div class="nav">

        <!-- 搜索 -->
        <div class=" nav-header">
            <div class="nav-header-logo">
                <a href="#">
                    <img src="@/assets/logo.png" alt="">
                   </a>
            </div>

              <div class="nav-header-login">
                    <!--<span id="getdate"></span>-->
                    <span class="btn-span"><a href="#" @click="toLogin">登录</a></span>
                    <span class="btn-span"><a href="#" @click="toRegister">注册</a></span>
                </div>

        </div>
        <!-- 导航 -->
        <div style="overflow:hidden;margin-left:120px">
            <div class="nav-menu">
                <ul class="nav-menu-ul">
                    <li class="start-menu">
                        <a @click="goIndex">首页</a>
                    </li>
                    <li class="nav-menu-dropdown">
                        <a   @click="goPractice">在线练习</a>
                    </li>
                      <li class="nav-menu-dropdown">
                        <a  >模拟考试</a>
                    </li>
                    <li class="nav-menu-dropdown">
                        <a  >预约学车</a>
                    </li>
                    <li class="nav-menu-dropdown">
                        <a  >考试报名</a>
                    </li>
                    <li class="nav-menu-dropdown">
                        <a >信息认证</a>
                    </li>
                    <li class="nav-menu-dropdown">
                        <a >我的信息</a>
                    </li>

                </ul>
            </div>
        </div>

<div class="commonhead_line" style="border-top: 1px solid rgb(0, 195, 86);"></div>
  </div>
</template>

<script>
export default {
    name:'Header',
    methods:{
        goIndex(e){
        
            this.$router.push('/home/index');
            
        },
        goPractice(e){
        
            this.$router.push('/home/practice')
        },
        toLogin(){
            this.$router.push('/lr/login')
        },
        toRegister(){
             this.$router.push('/lr/register')
        }
    }
}
</script>

<style>
li a:hover{
   color: #00C356;
}
li a:active { 
   color: #00C356; } 


.nav{
        margin: 0 auto;
    width: 1230px
}
.commonhead_line {
    min-width: 1200px;
    width: 100%
}



.comment-header-nav .nav-header {
    margin-top: 10px
}


.nav-header {
    width: 100%;
    height: 92px;
    background: #fff;
    position: relative
}



.nav-header .nav-header-logo {
    /* position: absolute;
    top: 50%;
    margin-top: -25px;
    margin-left:60px; */
    float: left;
    margin-left: 5%;
    margin-top: 20px;
}

.nav-header .nav-header-logo img {
    width: 207px;
    height: 54px
}

.nav-header .nav-header-login{
    float: right;
    margin-right: 8%;
    margin-top: 20px;
    height: 50px;
    line-height: 50px;

}
 .nav-header .nav-header-login .btn-span {
    margin: 10px
}
.nav-header .nav-header-login a{    
    font-size: 16px;
    color: #00c356;
    text-decoration: none}
.nav-menu {
    padding: 0;
    margin: 0;
    min-width: 1200px
}

.nav-menu .nav-menu-ul {
    width: 100%;
    padding: 25px 0 0;
    margin-left: 0
}

.nav-menu .nav-menu-ul .start-menu {
    padding: 0 50px 0 4px
}

.nav-menu .nav-menu-ul li:last-child {
    padding-right: 0
}

.nav-menu .nav-menu-ul li {
    list-style: none;
    float: left;
    padding: 0 48px
}

.nav-menu .nav-menu-ul li a {
    font-size: 16px;
    color: #4a4a4a;
    line-height: 18px;
    text-decoration: none
}

.nav-menu .nav-menu-ul li a:hover {
    font-size: 16px;
    color: #00c356;
    line-height: 18px
}

.nav-menu .nav-menu-ul .nav-menu-dropdown {
    position: relative;
    padding-bottom: 20px
}




</style>