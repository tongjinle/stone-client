import { CONFIG_CODE } from './config.js';
import { api } from './api.js';
const app = getApp();

let ajax = function ({ url, data = {}, method = 'GET', myheader = {} }) {
  let token = wx.getStorageSync('token');
  let promise;
  if (!token) {
    promise = new Promise((resolve, reject) => {
      wx.login({
        success: res => {
          if (res.code) {
            console.log(res);
            let wxCode = {
              code: res.code
            };
            wx.getUserInfo({
              success: res => {
                let app = getApp();
                app.globalData.userInfo = res.userInfo
              }
            })
            //code换取openId
            let url = api.userInfo.getToken();
            let method = 'GET'
            wx.request({
              url,
              method,
              data: wxCode,
              success: res => {
                let options = {
                  token: res.data.token
                }
                wx.setStorageSync("token", res.data.token)
                let token = wx.getStorageSync("token");
                resolve(options);
              },
              fail: err => {
                reject(err);
              }
            })
          }
        }
      })
    })
  } else {
    let options = {
      token: token
    }
    promise = Promise.resolve(options);
  }
  return promise.then(options => {
    let currentData = Object.assign({}, data);
    let reg = /\auth\//g;
    let header = reg.test(url) ? Object.assign({}, options, myheader) : {};
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        method,
        header,
        data: currentData,
        success: res => {
          if (_checkERR(res)) {
            resolve(res)
          } else {
            reject(res)
          }
        },
        fail: err => {
          reject(err);
        }
      })
    })
  })
};

let login = function () {
  let value = wx.getStorageSync('token');
  if (value) {
    let options = {
      token: value,
    }
    return promise = Promise.resolve(options)
  }
  wx.login({
    success: res => {
      if (res.code) {
        let wxCode = {
          code: res.code
        };
        //code换取openId
        let url = api.userInfo.getToken();
        let method = 'GET'
        wx.request({
          url,
          method,
          data: wxCode,
          success: res => {
            let options = {
              token: res.data.token
            }
            wx.setStorageSync("token", res.data.token)
            let token = wx.getStorageSync("token");
            console.log(token);
            return promise = Promise.resolve(options);
          },
          fail: err => {
            return promise = Promise.reject(err);
          }
        })
      }
    }
  })
}

let _getUserInfo = function () {
  let url = api.userInfo.query();
  let method = 'GET';
  return ajax({ method, url })
}

let getAccountInfo = function(){
  let app = getApp();
  return app.globalData.accountInfo;
}

let _init = function (arr) {
  return Promise.all(arr);
}

let currentUrl = function(){
  let pages = getCurrentPages();
  var currentPage = pages[pages.length - 1]    //获取当前页面的对象
  return encodeURIComponent(currentPage.route); 
}


let _checkToken = function () {
  let value = wx.getStorageSync("token");
  if (value) {
    let options = {
      token: value
    }
    return Promise.resolve()
  }
}

let _checkERR = function ({ data }) {
  if (data.code === CONFIG_CODE.ERR_OK) {
    return true
  } else if (data.code === CONFIG_CODE.DATA_ERR) {
    throw Error("数据格式错误");
    return false
  } else if (data.code === CONFIG_CODE.OPEN_EXISTED) {
    throw Error("openId已存在");
    return false
  } else if (data.code === CONFIG_CODE.CODE_NOK) {
    wx.removeStorageSync('token');
    return false;
  }
}


module.exports = {
  login,
  ajax, _init,
  _getUserInfo,
  currentUrl,
  getAccountInfo
}
