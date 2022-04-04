//API 统一管理
import requests from "./request";
import qs from 'qs'

//注册
//点击发送验证码，获取验证码
export const reqGetSubjects=(pararms)=>requests({
    url:'/subject/getsubjects',
    method:'get',
    params:pararms
    });
