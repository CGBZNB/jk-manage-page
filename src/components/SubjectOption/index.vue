<template>
  <!--小车考试-->
  <div class="car_s_exam">
    <div class="car_s_exam_context">
      <div class="title">小车理论考试</div>
      <div class="exam_card">
        <div class="exam_card_header">科目一交规</div>
        <div class="exam_card_body">
          <div>
            <a @click="sequenpactice"><span>顺序练习</span></a
            >
            <a><span>随机练习</span></a
            >
          </div>
          <div>
            <a><span>专项练习</span></a
            >
            <a><span>易错题练习</span></a
            >
          </div>
        </div>
        <div class="exam_card_footer">
          <span>
            <a>
              模拟考试
            </a>
          </span>
        </div>
      </div>
      <div class="exam_card">
        <div class="exam_card_header">科目四安全文明驾驶</div>
        <div class="exam_card_body">
          <div>
            <a @click="sequenpactice"
            ><span>顺序练习</span></a
            >
            <a><span>随机练习</span></a
            >
          </div>
          <div>
            <a><span>专项练习</span></a
            >
            <a><span>易错题练习</span></a
            >
          </div>
        </div>
        <div class="exam_card_footer">
          <span>
            <a>
              模拟考试
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubjectOption",
  methods:{
    sequenpactice(){
      this.$router.push("/home/subject")
    }
  }
};
</script>

<style >
.car_s_exam {
  padding-bottom: 20px;
  width: 100%;
  background-color: #fff;
}
.car_s_exam .car_s_exam_context {
  width: 1200px;
  margin: 0 auto;
}
.car_s_exam .car_s_exam_context .title {
  text-align: center;
  font-weight: bold;
  margin: 0 auto;
  padding: 40px 0;
  font-size: 26px;
  color: #333333;
  line-height: 35px;

}
.car_s_exam .car_s_exam_context .exam_card {
  text-align: center;
  display: inline-block;
  margin: 10px;
  width: 570px;
  min-width: 490px;
  height: 340px;
  min-height: 340px;
  border-radius: 5px;
  border: 1px solid #eee;
}
.car_s_exam .car_s_exam_context .exam_card .exam_card_header {
  height: 26px;
  font-size: 20px;
  color: #666666;
  line-height: 26px;
  font-weight: bold;
}
.car_s_exam .car_s_exam_context .exam_card .exam_card_header,
.car_s_exam .car_s_exam_context .exam_card .exam_card_footer {
  margin: 30px;
}
.car_s_exam .car_s_exam_context .exam_card .exam_card_footer > span {
  width: 220px;
  height: 50px;
  background: #00c356;
  border-radius: 3px;
  display: inline-block;
  line-height: 50px;
  cursor: pointer;
}
.car_s_exam .car_s_exam_context .exam_card .exam_card_footer > span > a {
  color: white;
  font-size: 18px;
  text-decoration: none;
  display: inline-block;
  width: 100%;
}
.car_s_exam .car_s_exam_context .exam_card .exam_card_body span {
  margin: 10px;
  display: inline-block;
  width: 180px;
  height: 48px;
  line-height: 48px;
  background: #f2f2f2;
  border-radius: 3px;
  font-size: 18px;
  color: #4a4a4a;
}
.car_s_exam .car_s_exam_context .exam_card .exam_card_body span a {
  text-decoration: none;
}
.car_s_exam .car_s_exam_context .exam_card .exam_card_body span:hover a {
  color: #00c356;
}
.car_s_exam .car_s_exam_context .exam_card .exam_card_body div {
  margin: 20px;
}
.car_s_exam .car_s_exam_context .exam_card .exam_card_body span {
  display: inline-block;
  width: 180px;
  height: 48px;
  background: #f2f2f2;
  color: #4a4a4a;
  border-radius: 3px;
  cursor: pointer;
}
.car_s_exam .car_s_exam_context .exam_card .exam_card_body span:hover {
  color: #00c356;
}
</style>