<template>
   <div class="learn_flow">
        <h3>学车流程</h3>
        <ul>
            <li class="learn_jx">
                <a href="https://jiaxiao.jxedt.com/" target="_blank">
                <div  ></div>
                <p>找驾校</p>
                </a>
            </li>
            <li class="learn_1">
                <a href="https://mnks.jxedt.com/" target="_blank">
                <div></div>
                <p>科目一</p>
                </a>
            </li>
            <li class="learn_2">
                <a href="https://tv.jxedt.com/?kemuType=kemu2" target="_blank">
                <div></div>
                <p>科目二</p>
                </a>
            </li>
            <li class="learn_3">
                <a href="https://tv.jxedt.com/?kemuType=kemu3" target="_blank">
                <div></div>
                <p>科目三</p>
                </a>
            </li>
            <li class="learn_4">
                <a href="https://mnks.jxedt.com/" target="_blank">
                <div></div>
                <p>科目四</p>
                </a>
            </li>
            <li class="learn_card">
                <a href="https://zhinan.jxedt.com/" target="_blank">
                <div></div>
                <p>拿本</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"LearnFollow",
    data(){
        return{
       

        }
    }
}
</script>

<style>
.learn_flow {
  background-color: #FFFFFF;
}
.learn_flow h3 {
  font-size: 26px;
  color: #333333;
  margin-bottom: 40px;
  padding-top: 40px;
  text-align: center;
  font-weight: bold;
}
.learn_flow ul {
  width: 1200px;
  margin: 0 auto;
}
.learn_flow ul li {
  display: inline-block;
  margin: 0;
  margin-right: 115px;
  cursor: pointer;
}
.learn_flow ul li a {
  text-decoration: none;
}
.learn_flow ul li:last-child {
  margin: 0;
}
.learn_flow ul li p {
  margin: 30px 0 40px 0;
  width: 100px;
  text-align: center;
  font-size: 18px;
  color: #4a4a4a;
  font-weight: bold;
}
.learn_flow ul li div {
  width: 100px;
  height: 100px;
  display: inline-block;
}
.learn_flow ul .learn_jx div {
  background:url('@/assets/images/l.png') no-repeat;
  background-position: 0 0;
  background-size: 100%;
}
.learn_flow ul .learn_jx:hover div {
  background:url('@/assets/images/l.png') no-repeat;
  background-position: 0 -859px;
  background-size: 100%;
}
.learn_flow ul .learn_jx:hover p {
  color: #00C356;
}
.learn_flow ul .learn_1 div {
   background:url('@/assets/images/l.png') no-repeat;
  background-position: 0 -142px;
  background-size: 100%;
}
.learn_flow ul .learn_1:hover div {
   background:url('@/assets/images/l.png') no-repeat;
  background-position: 0 -995px;
  background-size: 100%;
}
.learn_flow ul .learn_1:hover p {
  color: #00C356;
}
.learn_flow ul .learn_2 div {
   background:url('@/assets/images/l.png') no-repeat;
  background-position: 0 -284px;
  background-size: 100%;
}
.learn_flow ul .learn_2:hover div {
   background:url('@/assets/images/l.png') no-repeat;
  background-position: 0 -1131px;
  background-size: 100%;
}
.learn_flow ul .learn_2:hover p {
  color: #00C356;
}
.learn_flow ul .learn_3 div {
   background:url('@/assets/images/l.png') no-repeat;
  background-position: 0 -427px;
  background-size: 100%;
}
.learn_flow ul .learn_3:hover div {
   background:url('@/assets/images/l.png') no-repeat;
  background-position: 0 -1267px;
  background-size: 100%;
}
.learn_flow ul .learn_3:hover p {
  color: #00C356;
}
.learn_flow ul .learn_4 div {
   background:url('@/assets/images/l.png') no-repeat;
  background-position: 0 -569px;
  background-size: 100%;
}
.learn_flow ul .learn_4:hover div {
   background:url('@/assets/images/l.png') no-repeat;
  background-position: 0 -1403px;
  background-size: 100%;
}
.learn_flow ul .learn_4:hover p {
  color: #00C356;
}
.learn_flow ul .learn_card div {
   background:url('@/assets/images/l.png') no-repeat;
  background-position: 0 -711px;
  background-size: 100%;
}
.learn_flow ul .learn_card:hover div {
   background:url('@/assets/images/l.png') no-repeat;
  background-position: 0 -1539px;
  background-size: 100%;
}
.learn_flow ul .learn_card:hover p {
  color: #00C356;
}
</style>