//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    gamelist: [{
      name: "Dota",
      id: "01",
    }],
    swiperList: [{
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514796918615&di=b03ced90b28450a71298298ee802b328&imgtype=0&src=http%3A%2F%2Fa3.topitme.com%2F9%2Fb6%2F97%2F11345118250f197b69l.jpg'
    }, {
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514796918615&di=b03ced90b28450a71298298ee802b328&imgtype=0&src=http%3A%2F%2Fa3.topitme.com%2F9%2Fb6%2F97%2F11345118250f197b69l.jpg'
    },{
        src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514797090385&di=b367a387c9948a1a9fce5df57fef7e9b&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1185587477%2C595835172%26fm%3D214%26gp%3D0.jpg"
    }],
    autoplay: true,
    interval: 3000,
    duration: 400,
    indicatorDots:true,
  },
  getClient:function(){
    wx.getSystemInfo({
      success:res=>{
        this.setData({
          clientWidth: res.windowWidth,
        })
      }
    })
  },
  getgameList:function(){
    let url = 'http://www.baidu.com/auth/'
    app.ajax({
      url,
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  chooseimg: function (e) {
    let id = e.currentTarget.dataset.id;
    //todo 跳转Id路径
  },
  chooseUrl: function (e) {
    let id = e.detail.id;
    //todo 跳转Id路径
  },
  onLoad: function () {
    this.getClient();
    this.getgameList();
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
