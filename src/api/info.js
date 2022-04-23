//API 统一管理
import requests from "@/api/request";
import qs from 'qs'


  export function getSchools() {
    return requests({
      url: '/school/list',
      method: 'get'
    })
  }

  export function getTeachers(pararms) {
    return requests({
      url: '/teacher/list',
      method: 'get',
      params:pararms
    })
  }

  export function studentrzsf(pararms) {
    return requests({
      url: '/student/rz',
      method: 'post',
      data:qs.stringify(pararms)
    })
  }

  export function teacherzsf(pararms) {
    return requests({
      url: '/teacher/rz',
      method: 'post',
      data:qs.stringify(pararms)
    })
  }

  export function schoolzsf(pararms) {
    return requests({
      url: '/school/rz',
      method: 'post',
      data:qs.stringify(pararms)
    })
  }

