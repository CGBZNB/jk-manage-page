//API 统一管理
import requests from "./request";
import qs from 'qs'

//获取题目

export const reqGetSubjects=(pararms)=>requests({
    url:'/subject/getsubjects',
    method:'get',
    params:pararms
    });
