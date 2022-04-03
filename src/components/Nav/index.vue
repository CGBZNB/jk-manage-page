<template>
  <div class="nav">

        <!-- 搜索 -->
        <div class=" comment-header-search">
            <div class="comment-header-search-logo">
                <a href="#">
                    <img src="@/assets/logo.png" alt="">
                    <!-- 新年logo -->
<!--                    <img src="https://pic4.58cdn.com.cn/nowater/jxedt/teacher/image/n_v2538a32734d0e4b1c8644f53caaf549e5.png" style="margin-top: -7px;height: auto;" alt="">-->
                </a>
            </div>

        </div>
        <!-- 导航 -->
        <div style="overflow:hidden;margin-left:120px">
            <div class="comment-header-menu">
                <ul class="comment-header-menu-ul">
                    <li class="start-menu">
                        <a @click="goIndex">首页</a>
                    </li>
                    <li class="header-menu-dropdown">
                        <a   @click="goPractice">在线练习</a>
                    </li>
                      <li class="header-menu-dropdown">
                        <a  >模拟考试</a>
                    </li>
                    <li class="header-menu-dropdown">
                        <a  >预约学车</a>
                    </li>
                    <li class="header-menu-dropdown">
                        <a  >考试报名</a>
                    </li>
                    <li class="header-menu-dropdown">
                        <a >信息认证</a>
                    </li>
                    <li class="header-menu-dropdown">
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

.nav-wrap {
    width: 100%;
    padding-bottom: 10px;
    height: 40px;
    background-color: #F9F9F9;
    margin-bottom: 170px
}
.nav{
        margin: 0 auto;
    width: 1230px
}
.commonhead_line {
    min-width: 1200px;
    width: 100%
}



.comment-header-nav .comment-header-search {
    margin-top: 10px
}


.comment-header-search {
    width: 100%;
    height: 92px;
    background: #fff;
    position: relative
}



.comment-header-search .comment-header-search-logo {
    position: absolute;
    top: 50%;
    margin-top: -25px
}

.comment-header-search .comment-header-search-logo img {
    width: 207px;
    height: 54px
}


.comment-header-menu {
    padding: 0;
    margin: 0;
    min-width: 1200px
}

.comment-header-menu .comment-header-menu-ul {
    width: 100%;
    padding: 25px 0 0;
    margin-left: 0
}

.comment-header-menu .comment-header-menu-ul .start-menu {
    padding: 0 50px 0 4px
}

.comment-header-menu .comment-header-menu-ul li:last-child {
    padding-right: 0
}

.comment-header-menu .comment-header-menu-ul li {
    list-style: none;
    float: left;
    padding: 0 48px
}

.comment-header-menu .comment-header-menu-ul li a {
    font-size: 16px;
    color: #4a4a4a;
    line-height: 18px;
    text-decoration: none
}

.comment-header-menu .comment-header-menu-ul li a:hover {
    font-size: 16px;
    color: #00c356;
    line-height: 18px
}

.comment-header-menu .comment-header-menu-ul .header-menu-dropdown {
    position: relative;
    padding-bottom: 20px
}




</style>