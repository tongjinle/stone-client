import CONFIG_CODE from './config.js';
import { api } from './api.js';
const app = getApp();
let promise;
let ajax = function ({ url, data = {}, method = 'GET',myheader={}}){
  return promise.then(options=>{
    let currentData = Object.assign({}, data);
    let reg = /\auth\//g;
    let header = reg.test(url) ? Object.assign({}, options, myheader) : {};
    return new Promise((resolve, reject) => {
      wx.request({
        url:url,
        method,
        header,
        data:currentData,
        success: res => {
          console.log(res);
          if (_checkERR(res)){
            resolve(res)
          }
        },
        fail: err => {
          reject(err);
        }
      })
    })
  })
};

let login  = function (){
    wx.login({
      success:res=>{
        if(res.code){
          let wxCode  = {
            code: res.code
          };
          //code换取openId
          let url = api.userInfo.getToken();
          let method = 'GET'
          wx.request({
            url,
            method,
            data: wxCode,
            success:res=>{
                let options = {
                  token: res.data.token
                }
                return promise = Promise.resolve(options);
            },
            fail:err=>{
              return promise = Promise.reject(err);
            }
          })
        }
      }
  })
}

let _getUserInfo =function(){
    let url = api.userInfo.query();
    let method ='GET';
    return ajax({method,url})
}

let _init = function(arr){
  return Promise.all(arr);
}



let _checkERR =function({data}){
  if (data.code === CONFIG_CODE.ERR_OK){
    return true
  } else if (data.code === CONFIG_CODE.DATA_ERR){
    throw Error("数据格式错误");
    return false
  } else if (data.code === CONFIG_CODE.OPEN_EXISTED){
    throw Error("openId已存在");
    return false 
  }
}

module.exports = {
  login,
  ajax, _init,
  _getUserInfo 
}
