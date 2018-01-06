import CONFIG_CODE from './config.js';
let promise;
let ajax = function ({ url, data = {}, method = 'GET',myheader={}}){
  return promise.then(options=>{
    let currentData = Object.assign({}, data);
    let reg = /\auth\//g;
    let header = reg.test(url) ? Object.assign(postheader, options, myheader) : {};
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
  let options = {
        openId:"1234567890",
  }
  return promise = Promise.resolve(options);
    wx.login({
      success:res=>{
        if(res.code){
          let options  = {
            openId: res.code
          };
          //code换取openId
           promise = Promise.resolve(options);
        }
      }
  })
}

export function _init(arr){
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
  ajax
}
