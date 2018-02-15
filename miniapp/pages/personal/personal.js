const app = getApp();
import {_bind,_cancheck,_daycheck} from '../../utils/js/personal.js';
import { _init } from '../../utils/personal.js'
import { _getUserInfo } from '../../utils/util.js';
import { CONFIG_CODE } from '../../utils/config.js'
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
    this.getUserInfo();
    this.getCheckStatus();
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
    this.setUserInfo();
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
    if(this.data.btn === '已绑定'){
      return;
    }
    let dotaId = e.detail.value;
    let data = {
      id: dotaId
    };
    _bind(data).then(res => {
      if (app.globalData.path){
        let path = decodeURIComponent(app.globalData.path)
        return wx.redirectTo({
          url: `${path}`,
        })
      }
      this.getUserInfo();
    })    
  },
  getUserInfo:function(){
    _getUserInfo().then(res => {
      this.setAccount(res);
    }).catch(({ data }) => {
      if (data.code === 100) {
        _getUserInfo().then(res=>{
          this.setAccount(res);
        })
      }
    })
  },
  getCheckStatus:function(){
    _cancheck().then(res=>{
      this.setCheckStatus(res);
    }).catch(({data})=>{
      if(data.code ===100){
        _cancheck().then(res=>{
          this.setCheckStatus(res);
        })
      }
    })
  },
  setAccount:function(res){
    let dotaId = res.data.dotaId;
    let coin = res.data.coin;
    let account  ={
      value:dotaId,
      btn: dotaId?"已绑定":"绑定账号"
    }
    this.data.account=Object.assign(this.data.account,account);
    app.globalData.account = account;
    this.data.wallet.value = coin;
    this.setData({
      account:this.data.account,
      wallet:this.data.wallet
    })
  },
  setCheckStatus:function(res){
    if (res.data.code === CONFIG_CODE.CODE_NOK){
      return;
    }
    if (res.data) {
      let flag = res.data.flag;
      this.data.wallet.btn = flag ? "每日领取" : "已领取";
      this.setData({
        wallet: this.data.wallet
      })
    }
  },
  getMoney:function(e){
    let willget = this.data.wallet.btn ==='已领取'?0:1;
    if(willget){
      return false;
    }
    _daycheck().then(res=>{
      this.getUserInfo();
      this.getCheckStatus();
    }).catch(({ data }) => {
      if (data.code === 100) {
        _daycheck().then(res=>{
          this.getUserInfo();
          this.getCheckStatus();
        })
      }
    })
  },
  showToast:function(){
    this.setData({
      isShow:true
    });
  },
  hideToast:function(){
    this.setData({
      isShow:false
    })
  },
})