// pages/roomInfo/roomInfo.js
import { _getRoomInfo, RoomInfo, _joinRoom } from '../../utils/js/roomInfo.js';
import { _getUserInfo } from '../../utils/util.js';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    joinFlag: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.roomId) {
      this.setData({
        roomId: options.roomId,
      })
    }
    this.init();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    let roomId = this.data.roomId;
    if (res.from === 'button') {

    }
    return {
      title: '黑店',
      path: `/pages/roomInfo/roomInfo?roomId=${roomId}`,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  init: function () {
    if (!app.globalData.account) {
      _getUserInfo().then(res => {
        this.data.account = res.data.dotaId;
        this.getroomInfo();
      }).catch(err => {
        if (err.data.code == 0 || err.data.code == 100) {
          let path = encodeURIComponent(`/pages/roomInfo/roomInfo?roomId=${this.data.roomId}`);
          wx.showToast({
            title: '需绑定账号',
            icon: 'loading',
          })
          setTimeout(() => {
            app.globalData.path = path;
            return wx.switchTab({
              url: `/pages/personal/personal`,
            })
          }, 1500)
        }
      });
    } else {
      this.data.account = app.globalData.account.value;
      this.getroomInfo();
    }
  },
  getroomInfo: function () {
    let roomId = this.data.roomId;
    _getRoomInfo(roomId).then(res => {
      let roomInfo = new RoomInfo(res.data.info);
      console.log(roomInfo.checkJoin(this.data.account));
      if (this.data.account !== roomInfo.roomOwner && roomInfo.checkJoin(this.data.account)) {
        this.setData({
          joinFlag: true
        })
      }
      this.setData({
        info: roomInfo
      })
    }).catch(err => {
      if (err.data.code == 0||err.data.code == 100) {
        let path = encodeURIComponent(`/pages/roomInfo/roomInfo?roomId=${this.data.roomId}`);
        wx.showToast({
          title: '需绑定账号',
          icon: 'loading',
        })
        setTimeout(()=>{
          app.globalData.path = path;
          return wx.switchTab({
            url: `/pages/personal/personal`,
          })
        },1500)
      }
    });
  },
  joinRoom: function () {
    let id = this.data.roomId;
    _joinRoom(id).then(res => {
      if(true){
        this.setData({
          joinFlag: false
        })
      }
      this.getroomInfo();
    })
  },
  _checkUserInfo: function (manager, memberList) {
    let bindAccount = app.globalData.account;
    if (bindAccount) {
      if (bindAccount === manager) {
        return {
          status: "manager",
        }
      } else {
        if (this._findList() === -1) {
          return {
            status: "able",
          }
        } else {
          return {
            status: "disable",
          }
        }
      }
    } else {
      return this._redirectTo();
    }
  },
  _redirectTo: function () {
    let currentUrl = encodeURIComponent(`/pages/roomInfo/roomInfo?roomId=${this.data.roomId}`);
    wx.navigateTo({
      url: `/pages/personal/persoanl?from=${currentUrl}`,
    })
  },
  _findList: function (id, list) {
    return list.findIndex(item => item === id);
  }
})