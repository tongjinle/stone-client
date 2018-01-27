// pages/room/room.js
import { _create } from '../../utils/js/room.js'
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playerList:[2,3,4,5],
    coinList:[100,200,300,400],
    playerIndex:0,
    coinIndex:0
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
    let playerIndex = this.data.playerIndex;
    let coinIndex = this.data.coinIndex;
    let playerList = this.data.playerList;
    let coinList = this.data.coinList;
    let count = playerList[playerIndex];
    let coin = coinList[coinIndex]
    _create(count,coin).then(res => {
        let roomId = res.data.id
        wx.navigateTo({
          url: `/pages/roomInfo/roomInfo?roomId=${roomId}`,
        })
    });
  },
  choosePlayIndex:function(e){
    this.setData({
      playerIndex: e.detail.value
    })
  },
  chooseCoinIndex:function(e){
    this.setData({
      coinIndex: e.detail.value
    })
  }
})