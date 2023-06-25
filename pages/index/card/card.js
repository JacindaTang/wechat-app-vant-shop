// pages/index/card/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cardList: {
      type: Array
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
    toDetail: function(e) {
      let that = this;
      //let listItems = that.properties.cardList;
      //console.log(listItems)
      console.log(e.currentTarget.dataset.id)
      let cardId = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '../goods/goodsDetail/detail?id=' + cardId
      })
    }
  }
})
