//app.js
import { ajax, _init, currentUrl} from './utils/util.js';
import { api } from './utils/api.js';
import { CONFIG_CODE } from './utils/config.js';
App({
  onLaunch: function () {
    this.getSystemInfo();
    this.getUserInfo(); 
    wx.setEnableDebug({
      enableDebug: true
    })
  },
  getUserInfo: function () {
    let url = api.userInfo.query();
    wx.removeStorageSync('token');
    this.ajax({url}).then(res=>{
      if (res.code === CONFIG_CODE.NO_USER ){
        this.globalData.path = currentUrl();
        let tabUrl = '/pages/personal/persoanal'
        return wx.switchTab({
          url: tabUrl,
        })
      }else{
        this.globalData.accountInfo = res.data;
        if (res.data.currRoomId){
          let currRoomId = res.data.currRoomId;
          let tabUrl = `/pages/roomInfo/roomInfo`;
          return wx.navigateTo({
            url: `${tabUrl}?roomId=${currRoomId}`,
          })
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
    accountInfo:null,
    userInfo: null,
    winWidth: null,
    winHeight: null,
  }
})