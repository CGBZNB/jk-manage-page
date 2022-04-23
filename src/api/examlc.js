import requests from "./request";
import qs from 'qs'

  export function getExamApList(params) {
    return requests({
      url: '/exam/getap',
      method: 'get',
      params:params
    })
  };

  export function getLCApList(params) {
    return requests({
      url: '/lc/qgetap',
      method: 'get',
      params:params
    })
  };
  
  export function updateExamAp(params) {
    return requests({
      url: '/exam/bm',
      method: 'get',
      params:params
    })
  };
  export function updateLCAp(params) {
    return requests({
      url: '/lc/bm',
      method: 'get',
      params:params
    })
  };