// pages/exchange/exchange.js
import { _getList ,_buygoods} from '../../utils/js/exchange.js';
console.log(_getList);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList:[
      {
        id:1,
        imgSrc:"",
        name:"假腿",
        price:"¥500",
        btn:"兑换"
      }, {
        id: 2,
        imgSrc: "",
        name: "假腿",
        price: "¥500",
        btn: "兑换"
      }, {
        id: 3,
        imgSrc: "",
        name: "假腿",
        price: "¥500",
        btn: "兑换"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    this.getList();
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
  getList:function(){
    _getList().then(res=>{
      console.log(res);
    })
  },
  exchange:function(e){
    let goodsId = e.detail;
    _buygoods(goodsId).then(res=>{
      console.log(res);
    })
  }
})