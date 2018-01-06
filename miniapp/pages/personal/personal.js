const app = getApp();
import {_bind,cancheck,_daycheck} from '../../utils/js/personal.js';
import { _init } from '../../utils/personal.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account:{
      key:"游戏账号",
      value:"",
      btn:"绑定账号",
    },
    wallet:{
      key:"游戏金币",
      value:"0",
      btn:"每日领取"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setUserInfo();
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
    // this.canCheck();
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
  onShareAppMessage: function () {

  },
  setUserInfo: function () {
    let userInfo = app.globalData.userInfo;
    this.setData({
      userInfo: userInfo
    })
  },
  bindAccount: function (e) {
    let data = {
      openId:'1234567890',
      id:123
    }
    _bind(data).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err)
    })
  },
  getMoney:function(e){
    let willget = this.data.wallet.btn ==='已领取'?1:0;
    if(willget){
      return false;
    }else{
      let url = app.globalData.api.userInfo.daycheck();
      let method = '';
      app.ajax({

      })
    }
  },
  showToast:function(){
    this.setData({
      isShow:true
    });
  },
  canCheck:function() {
    let url = app.globalData.api.userInfo.cancheck();
    let method = 'GET';
    app.ajax({
      url,
      method,
    }).then(res=>{
      console.log(res);
      if(res.data){
        let flag = res.data.flag;
        this.data.wallet.btn = flag? "已领取":"每日领取";
        this.setData({
          wallet:this.data.wallet
        })
      }
    }).catch(err=>{
      console.log(err);
    })
  },
  exchange:function(){
    let url  = `/pages/exchange/exchange`;
    wx.navigateTo({
      url: url,
    })
  }
})