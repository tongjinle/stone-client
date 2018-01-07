import { api } from './api.js';
import { ajax } from './util.js'; 

export function _init(){
  return Promise.all([_canCheck(),_getUserInfo()])
}

let _canCheck = function(){
  let url = api.userInfo.cancheck();
  let method = 'GET';
  return ajax
    ({
      url,
      method,
    })
}

let _getUserInfo = function(){
  let data = {
    dotaId: '123'
  }
  let method = 'POST';
  let url = api.userInfo.bind();
  return ajax({
      url,
      method,
      data,
  })  
}
