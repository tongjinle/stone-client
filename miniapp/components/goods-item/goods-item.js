// components/goods-item/goods-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods:{
      type:Object,
      value:{}
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
    eventTarget:function(e){
      console.log(e);
      let goodsName = e.currentTarget.dataset.goodsName;
      this.triggerEvent('EventTarget', goodsName);     
    }
  }
})
