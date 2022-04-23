<template>
<div class="baoming-main">
           <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="科目二" name="km2">
        <el-table
    :data="lcdata"
    style="width: 100%">

    <el-table-column
      label="开始时间"
      min-width="150"
       align="center">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.starttime }}</span>
      </template>
    </el-table-column>
      <el-table-column
      label="结束时间"
      min-width="150"
       align="center">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.endtime }}</span>
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
      label="车牌号"
      min-width="100"
       align="center">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.car.carNumber }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作"  align="center">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">预约</el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-tab-pane>
    <el-tab-pane label="科目三" name="km3">
        <el-table
    :data="lcdata"
    style="width: 100%">

    <el-table-column
      label="开始时间"
      min-width="150"
       align="center">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.starttime }}</span>
      </template>
    </el-table-column>
      <el-table-column
      label="结束时间"
      min-width="150"
       align="center">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.endtime }}</span>
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
      label="车牌号"
      min-width="100"
       align="center">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.car.carNumber }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作"  align="center">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">预约</el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-tab-pane>

  </el-tabs>
  </div>
</template>

<script>
import {getLCApList,updateLCAp}from '@/api/examlc'
export default {
    name:'YuYue',
      data() {
      return {
        activeName: 'km2',
      lcdata:[
          // {
          //   id:1,
          //   starttime:'2022-04-01',
          //   endtime:'2022-04-01',
          //   carnumber:'鲁J124567',
          //   number:5
          // }
        ],
        type:1,
      };
    },
    methods: {
     async getlist(param){
      
        let result=  await getLCApList(param)
        if(result.code==201){
          this.lcdata=result.data
            return 'ok'
        }else{
             this.lcdata=''
             return Promise.reject(new Error('faile'));
            
        }
    },
     async handleEdit(index, row) {
            let param={
                eid:row.id
            }
    let result=  await updateLCAp(param)
        if(result.code==201){
          
            return 'ok'
        }else{
             
             return Promise.reject(new Error('faile'));
            
        }

      },
      handleClick(tab, event) {
       if(tab.index==0){
            this.getlist({type:2})
       }else if(tab.index==1){
            this.getlist({type:3})
       }
      }
    },
    async created(){
      try {
          await   this.getlist({type:2})
      } catch (error) {
        
          this.$message("无数据")
      }
    },

    
}
</script>

<style>

</style>