// pages/room/room.js
import { _create } from '../../utils/js/room.js'
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getWin();
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
  _getWin:function(){
    let winWidth = app.globalData.winWidth;
    let winHeight = app.globalData.winHeight;
    this.setData({
      winW:winWidth,
      winH:winHeight
    })
  },
  createRoom:function(){
    _create().then(res => {
        let roomId = res;
        console.log(roomId);
        // let roomId = res.data.id
        wx.navigateTo({
          url: `/pages/roomInfo/roomInfo?roomId=${roomId}`,
        })
    });
  }
})