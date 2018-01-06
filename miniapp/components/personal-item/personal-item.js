// components/personal-item/personal-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    personal:{
      type:Object,
      value:null
    },
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
    eventTarget:function(){
      this.triggerEvent('EventTarget');
    }
  }
})
