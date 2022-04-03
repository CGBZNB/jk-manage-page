<template>
  <div class="header">
    <nav class="comment-header-nav">
        <!-- 联系 -->
        <div class="comment-header-contact">
            <div class="comment-header-left">
                <span class="comment-header-phone-describe">网站联系人：
                    <span class="comment-header-phone">CGB-1506888024@qq.com</span>
                </span>

                            </div>
            <div  class="title" @click="goIndex"><h1>驾考管理</h1></div>
            <div class="comment-header-right">
        
                <div class="comment-header-app">
                    <span>手机APP</span>
                    <ul class="down-popup">
                        <li><a target="_blank" onclick="clickLog(&#39;from=JXEDT_HEADER_APP&#39;)" href="#">驾考管理</a></li>
                        <li><a target="_blank" onclick="clickLog(&#39;from=JLEDT_HEADER_APP&#39;)" href="#">驾考管理</a>
                        </li>
                    </ul>
                </div>
                <a class="right-text" href="#">驾校入驻</a>
                <a class="right-text" target="_blank" href="#">后台管理</a>
            </div>
        </div>
        <!-- 搜索 -->
     
    </nav>

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

.header {
    width: 100%;
    padding:10px 0;

    background-color: #F9F9F9;
 
}
.header .title{
    float:left; 
  
    margin-left:240px;
     color: #00C356;
}
.comment-header-contact {
    
    height: 40px;
    background: #F9F9F9;
    line-height: 40px;
    padding:0 50px
}
.comment-header-nav {
    margin: 0 auto;
    width: 1230px
}
.comment-header-contact .comment-header-right {
    float: right;
    padding-right: 40px
}

.comment-header-contact .comment-header-left{
    float: left;
      margin-left: 30px;
}

.comment-header-contact .comment-header-phone {
    color: #00C356
}

.comment-header-contact .btn {
    font-size: 14px;
    color: #00c356;
    line-height: 16px;
    border: 1px solid #00c356;
    background-color: #F9F9F9
}

.comment-header-contact .comment-header-phone-img {
    height: 14px;
    width: 8px;
    vertical-align: middle
}

.comment-header-contact .comment-header-app {
    font-size: 14px;
    color: #666;
    display: inline-block;
    width: 78px;
    text-align: center;
    position: relative
}

.comment-header-contact .comment-header-app .down-popup {
    border: 1px solid #E5E5E5;
    left: -1px;
    display: none;
    position: absolute;
    top: 40px;
    z-index: 9999;
    height: 76px;
    width: 80px;
    text-align: center;
    margin: 0;
    padding: 0;
    background-color: #fff;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top: none
}

.comment-header-contact .comment-header-app .down-popup li {
    margin: 10px 0;
    padding: 0;
    height: 20px;
    text-decoration: none;
    line-height: 20px;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent
}

.comment-header-contact .comment-header-app .down-popup li a {
    font-size: 12px;
    color: #999
}

.comment-header-contact .comment-header-app .down-popup li a:hover {
    color: #00c356
}

.comment-header-contact .comment-header-app:hover {
    color: #00c356;
    background-color: #fff;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,.1)
}

.comment-header-contact .comment-header-app:hover .down-popup {
    display: inline-block
}

.comment-header-contact .right-text {
    font-size: 14px;
    color: #00c356;
    text-decoration: none;
    margin: 10px
}

.comment-header-contact .comment-header-phone-img+span {
    font-size: 13px;
    color: #666;
    line-height: 18px;
    padding-right: 10px
}



.comment-header-contact .comment-header-phone-describe {
    font-size: 13px;
    color: #999;
    line-height: 18px
}

</style>