// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardList: [
      { id:0, image:'/images/youzi.jpg', title:'苏坂蜜柚', num:'100', desc:'', tags:[{title:'推荐'},{title:'自产'},{title:'鲜果'}], price:'59.00', originPrice:'79.00'},
      { id:1, image:'/images/shuchai.jpeg', title:'空心菜', num:'100', desc:'', tags:[{title:'推荐'}], price:'10.00', originPrice:'15.00'},
      { id:2, image:'/images/doujia.jpeg', title:'鲜毛豆荚', num:'100', desc:'', tags:[{title:'推荐'}], price:'6.00', originPrice:'8.00'},
      { id:3, image:'/images/huangua.jpeg', title:'黄瓜', num:'100', desc:'', tags:[{title:'适合鲜食、煮或腌制'}], price:'10.00', originPrice:'15.00'},
      { id:4, image:'/images/qiukui.jpeg', title:'秋葵', num:'100', desc:'', tags:[], price:'8.00', originPrice:'10.00'},
      { id:1, image:'/images/shuchai.jpeg', title:'空心菜', num:'100', desc:'', tags:[{title:'推荐'}], price:'10.00', originPrice:'15.00'},
      { id:2, image:'/images/doujia.jpeg', title:'鲜毛豆荚', num:'100', desc:'', tags:[{title:'推荐'}], price:'6.00', originPrice:'8.00'},
      { id:3, image:'/images/huangua.jpeg', title:'黄瓜', num:'100', desc:'', tags:[{title:'适合鲜食、煮或腌制'}], price:'10.00', originPrice:'15.00'},
      { id:4, image:'/images/qiukui.jpeg', title:'秋葵', num:'100', desc:'', tags:[], price:'8.00', originPrice:'10.00'},
      { id:1, image:'/images/shuchai.jpeg', title:'空心菜', num:'100', desc:'', tags:[{title:'推荐'}], price:'10.00', originPrice:'15.00'},
      { id:2, image:'/images/doujia.jpeg', title:'鲜毛豆荚', num:'100', desc:'', tags:[{title:'推荐'}], price:'6.00', originPrice:'8.00'},
      { id:3, image:'/images/huangua.jpeg', title:'黄瓜', num:'100', desc:'', tags:[{title:'适合鲜食、煮或腌制'}], price:'10.00', originPrice:'15.00'},
      { id:4, image:'/images/qiukui.jpeg', title:'秋葵', num:'100', desc:'', tags:[], price:'8.00', originPrice:'10.00'},
    ], // 商品卡片
    scrollTop: false, //返回顶部按钮 默认隐藏
  },

  // 获取滚动条当前位置
  onPageScroll: function (e) {
    if (e.scrollTop > 200) {
      this.setData({
        scrollTop: true
      });
    } else {
      this.setData({
        scrollTop: false
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options,1111) //获取分类页传来的id，通过id去请求分类的名称以及该分类下的产品列表
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})