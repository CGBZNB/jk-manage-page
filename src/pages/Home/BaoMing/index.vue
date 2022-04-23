<template>
  <div class="baoming-main">
           <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="科目一" name="km1">
        <el-table
    :data="examdata"
    style="width: 100%">

    <el-table-column
      label="时间"
      min-width="150"
       align="center">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.examtime }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="人数"
      min-width="100"
       align="center">
      <template slot-scope="scope">
       <span style="margin-left: 10px">{{ scope.row.maked}}/{{ scope.row.number }}</span>
      </template>
    </el-table-column>


    <el-table-column
      label="考试地点"
      min-width="180"
       align="center">
          <template slot-scope="scope">

        <span style="margin-left: 10px">{{ scope.row.address }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作"  align="center">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">报名</el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-tab-pane>
    <el-tab-pane label="科目二" name="km2">
        <el-table
    :data="examdata"
    style="width: 100%">

    <el-table-column
      label="时间"
      min-width="150"
       align="center">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.examtime }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="人数"
      min-width="100"
       align="center">
      <template slot-scope="scope">
      <span style="margin-left: 10px">{{ scope.row.maked}}/{{ scope.row.number }}</span>
      </template>
    </el-table-column>


    <el-table-column
      label="考试地点"
      min-width="180"
       align="center">
          <template slot-scope="scope">

        <span style="margin-left: 10px">{{ scope.row.address }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作"  align="center">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">报名</el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-tab-pane>
    <el-tab-pane label="科目三" name="km3">
        <el-table
    :data="examdata"
    style="width: 100%">

    <el-table-column
      label="时间"
      min-width="150"
       align="center">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.examtime }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="人数"
      min-width="100"
       align="center">
      <template slot-scope="scope">
       <span style="margin-left: 10px">{{ scope.row.maked}}/{{ scope.row.number }}</span>
      </template>
    </el-table-column>


    <el-table-column
      label="考试地点"
      min-width="180"
       align="center">
          <template slot-scope="scope">

        <span style="margin-left: 10px">{{ scope.row.address }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作"  align="center">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">报名</el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-tab-pane>
    <el-tab-pane label="科目四" name="km4">
        <el-table
    :data="examdata"
    style="width: 100%">

    <el-table-column
      label="时间"
      min-width="150"
       align="center">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.examtime }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="人数"
      min-width="100"
       align="center">
      <template slot-scope="scope">
       <span style="margin-left: 10px">{{ scope.row.maked}}/{{ scope.row.number }}</span>
      </template>
    </el-table-column>


    <el-table-column
      label="考试地点"
      min-width="180"
       align="center">
          <template slot-scope="scope">

        <span style="margin-left: 10px">{{ scope.row.address }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作"  align="center">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">报名</el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
import {getExamApList,updateExamAp}from'@/api/examlc'
export default {
    name:'BaoMing',
     data() {
      return {
        activeName: 'km1',
        examdata:[
          {
            id:1,
            examtime:'2022-04-01',
            address:'大胜靠德放假快乐啥地方就靠的就是咖啡机',
            number:200
          },
          
        ],
        type:1,
      };
    },
    methods: {
     async getlist(param){
      
        let result=  await getExamApList(param)
        if(result.code==201){
          this.examdata=result.data
            return 'ok'
        }else{
             
             return Promise.reject(new Error('faile'));
            
        }
    },
        async handleEdit(index, row) {
            let param={
                eid:row.id
            }
    let result=  await updateExamAp(param)
        if(result.code==201){
          
            return 'ok'
        }else{
             
             return Promise.reject(new Error('faile'));
            
        }
        console.log(index, row);
      },
      handleClick(tab, event) {
       if(tab.index==0){
            this.getlist({type:1})
       }else if(tab.index==1){
            this.getlist({type:2})
       }else if(tab.index==2){
        this.getlist({type:3})
       }else if(tab.index==3){
           this.getlist({type:4})
       }
      }
    },
    async created(){
      try {
          await this.getlist({type:1})
      } catch (error) {
          this.$message("无数据")
      }
    },
    baoming(index, row){
 console.log(index, row);
    },


    
}
</script>

<style>
.baoming-main{
    width: 1200px;
    margin: 0 auto;
    height: 500px;
}
</style>