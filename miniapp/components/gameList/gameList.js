// components/gameList/gameList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    game:{
      type:Object,
      value:null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    choose:function(e){
      let id = e;
      wx.navigateTo({
        url: `/pages/severList/serverList?id=${id}`,
      })
    }
  }
})
