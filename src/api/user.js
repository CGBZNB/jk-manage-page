//API 统一管理
import requests from "./request";
import qs from 'qs'

//注册
//点击发送验证码，获取验证码
export const reqGetCode=(account)=>requests({
    url:`/user/register/sendcode/${account}`,
    method:'get'
    });

//点击注册按钮，注册用户
export const reqPostRegister=(form,code)=>requests({
    url:`/user/register/registeruser/${code}`,
    method:'post',
    data:qs.stringify(form)
    });

//校验
export const reqGetValidate=(date,type)=>requests({
    url:`/user/register/validate/${date}/${type}`,
    method:'get'
    });

    //登录
export const reqPostLogin=(data)=>requests({
    url:'/user/login',
    method:'post',
    data:qs.stringify(data)
    });

    export const reqGetUserInfo=()=>requests({
        url:'/user/userinfo',
        method:'get',
        });
