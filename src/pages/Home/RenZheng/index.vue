<template>
    <div class="main">
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
                        <a href="javascript:void(0);">
                            <span class="btn xy-btn">去登录</span>
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
                        <a href="javascript:void(0);">
                            <span class="btn  jl-btn">去登录</span>
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
                        <a href="javascript:void(0);">
                            <span class="btn jx-btn">去登录</span>
                        </a>
                    </div>
                </div>
                <!-- 驾校panel -->
            </div>
    </div>
</template>

<script>
export default {
    name:'RenZheng'
}
</script>

<style>
.main {
    padding-top: 30px;
    min-height: 500px;
    overflow: hidden;
}
.main .guide-main-list {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding: 20px;
}
.main .guide-main-list .main-panel {
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
.main .guide-main-list .main-panel .panel-img {
    margin: 41px 45px 20px;
}
.main .guide-main-list .main-panel .panel-title {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 20px;
}
.main .guide-main-list .main-panel .panel-describe {
    margin-bottom: 30px;
}
.main .guide-main-list .main-panel .panel-btn span {
    width: 230px;
    height: 36px;
    display: inline-block;
    border-radius: 3px;
    font-size: 14px;
    color: #fff;
    line-height: 36px;
}
.main .guide-main-list .panel-xueyuan .panel-btn span {
    background: #d9779b;
}
.main .guide-main-list .panel-jiaolian .panel-btn span {
    background: #5585d6;
}
.main .guide-main-list .panel-jiaxiao .panel-btn span {
    background: #4cbeca;
}
.main-panel:hover{
    background:#fff;
    box-shadow:3px 2px 11px rgba(4,48,84,.15);
    transform:scale(1.1);
    position:relative;
    z-index:2}
</style>