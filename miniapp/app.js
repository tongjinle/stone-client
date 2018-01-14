//app.js
import { ajax, _init } from './utils/util.js';
import { api } from './utils/api.js';

App({
  onLaunch: function () {
    this.getSystemInfo();
    this.getSetting();
  },
  getSetting: function () {
    wx.getUserInfo({
      success: res => {
        console.log(res);
        this.globalData.userInfo = res.userInfo
        if (this.userInfoReadyCallback) {
          this.userInfoReadyCallback(res)
        }
      }
    })

  },
  getSystemInfo: function () {
    wx.getSystemInfo({
      success: res => {
        this.globalData.winWidth = res.windowWidth;
        this.globalData.winHeight = res.windowHeight;
      }
    })
  },
  ajax,
  _init,
  globalData: {
    api,
    userInfo: null,
    winWidth: null,
    winHeight: null,
  }
})