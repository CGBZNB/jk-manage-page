//API 统一管理
import requests from "./request";
import qs from 'qs'

//获取题目

export const reqGetSubjects=(pararms)=>requests({
    url:'/subject/getsubjects',
    method:'get',
    params:pararms
    });
    
    export const reqGetExam=(pararms)=>requests({
        url:'/subject/getexam',
        method:'get',
        params:pararms
        });

export const reqSetSC=(pararms)=>requests({
            url:'/subject/setsc',
            method:'get',
            params:pararms
            });
export const reqGetSC=(pararms)=>requests({
                url:'/subject/getsc',
                method:'get',
                params:pararms
                });
    