// pages/exchange/exchange.js
import { _getList, _buygoods, _goodsList,Goods} from '../../utils/js/exchange.js';
import { getAccountInfo } from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList:[],
    page:0,
    size:6,
    totalCount:0,
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
    this.scrollPage();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getList:function(){
    let page = this.data.page;
    let size  = this.data.size;
    _getList(page,size).then(res=>{
      if(res.data.list){
        let list = res.data.list;
        let totalCount = res.data.totalCount;
        let goodsList = _goodsList(list);
        goodsList.forEach(el=>{
          this.data.goodsList.push(el);
        })
        this.setData({
          goodsList:this.data.goodsList,
          totalCount
        })
      }
    })
  },
  scrollPage:function(){
    let page = this.data.page;
    let size = this.data.size;
    let total = this.data.totalCount;
    if (page<(total/size)-1){
      console.log(page);
      this.setData({
        page: page+1,
      });
      this.getList();
    }
  },
  exchange:function(e){
    if(!getAccountInfo){
      return 
    }
    let goodsname = e.detail;
    _buygoods(goodsname).then(res=>{
    })
  }
})