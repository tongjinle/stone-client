//app.js
import { ajax,login } from './utils/util.js';
import { api } from './utils/api.js';

App({
  onLaunch: function () {
    login();
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
  ajax,
  globalData: {
    api,
    userInfo: null
  }
})