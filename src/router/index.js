//配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
//使用路由插件
Vue.use(VueRouter);

let orignPush=VueRouter.prototype.push;
let orignReplace=VueRouter.prototype.replace;
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve&&reject){
        orignPush.call(this,location,resolve,reject);
    }else{
        orignPush.call(this,location,()=>{},()=>{});
    }

}

VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve&&reject){
        orignReplace.call(this,location,resolve,reject);
    }else{
        orignReplace.call(this,location,()=>{},()=>{});
    }

}

import Home from '@/pages/Home'
import FirstPage from '@/pages/Home/FirstPage'
import Practice from '@/pages/Home/Practice'
import LR from '@/pages/LR'
import Login from '@/pages/LR/Login'
import Register from '@/pages/LR/Register'
import Test from '@/test'
import SubjectItem from '@/pages/Home/SubjectItem'
import SubjectOption from '@/pages/Home/SubjectOption'
import RenZheng from '@/pages/Home/RenZheng'
import JiaXiaoRZ from '@/pages/Home/RenZheng/jiaxiao'



const router =new VueRouter({
    //配置路由
    routes:[
        {
            path: "/home",
            component:Home,
            children:[
                {
                    path:"index",
                    component:FirstPage
                },
                {
                    path:"practice",
                    component:Practice
                },
                {
                   //path:"subject/:index",
                    path:"subject",
                    component:SubjectItem
                },                {
                    path:"subopt",
                    component:SubjectOption
                },
                {
                    path:"sfrz",
                    component:RenZheng
                }
            ]
        },
        {
            path:"/lr",
            component:LR,
            children:[
                {
                    path:"login",
                    component:Login
                },
                {
                    path:"register",
                    component:Register
                }
            ]
        },
        {
            path: "/",
            redirect:"Home/Index"
        },
        {
            path: "/test",
            component: JiaXiaoRZ
        },
    ]
})

router.beforeEach(async(to, from, next) => { // 路由跳转前监控(保证登录状态)
   
    let token=store.state.user.token
    let name=store.state.user.userinfo.loginname
   
  if(token){
      if(to.path=='/lr/login'){
        
          next('/')
      }else{
       
       if(name){
       
           next()
       }else{
           try {
            await store.dispatch("getuserinfo")
            next()
           } catch (error) {
               store.dispatch("logout")
               next('/lr/login')
           }
         
       }
      }
  }else{
    
    next()
  }

  })
  export default router