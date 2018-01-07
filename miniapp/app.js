//app.js
import { ajax, login, _init} from './utils/util.js';
import { api } from './utils/api.js';

App({
  onLaunch: function () {
    login();
    this.getSystemInfo();
    this.getSetting();
  },
  getSetting:function(){
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  getSystemInfo:function(){
    wx.getSystemInfo({
      success: res=>{
        this.globalData.winWidth = res.windowWidth;
        this.globalData.winHeight=res.windowHeight;
       }
    })
  },
  ajax,
  _init,
  globalData: {
    api,
    userInfo: null,
    winWidth:null,
    winHeight:null,
  }
})