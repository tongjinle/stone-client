import { api } from '../api.js';
import { ajax } from '../util.js';

export function _bind ({id,openId}){
  let data ={
    dotaId:id,
    openId:openId
  }
  console.log(data);
  let method ='POST';
  let url = api.userInfo.bind();
  return ajax({url,data,method})
}
export function _cancheck(){
  let method ="GET";
  let url = api.userInfo.bind();
  return ajax({url,method});
}

export function _daycheck(){
  let method = 'POST';
  let url = api.userInfo.daycheck();
}
