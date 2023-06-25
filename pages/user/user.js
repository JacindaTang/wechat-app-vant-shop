// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: '', //获取用户信息
    orderMenu: [
      {image:'/images/order.png',title: '全部',url:'/pages/user/order/order'},
      {image:'/images/wallet.png',title: '待付款'},
      {image:'/images/packaging.png',title: '待发货'},
      {image:'/images/waiting.png',title: '待收货'},
      {image:'/images/suggest.png',title: '待评价'},
    ], //订单页菜单列表
    serviceMenu: [
      {image:'/images/location.png',title: '我的地址',url:'/pages/user/address/address'},
      {image:'/images/history.png',title: '我的足迹'},
      {image:'/images/favorites.png',title: '我的收藏'},
      {image:'/images/coupons.png',title: '我的优惠券'},
      {image:'/images/reject1.png',title: '我的售后'},
      {image:'/images/message.png',title: '我的消息'},
    ], //服务列表
    aboutMenu: [
      {image:'/images/service.png',title: '联系方式',url:''},
      {image:'/images/about.png',title: '相关介绍'},
      {image:'/images/trust.png',title: '成为供应商'},
    ], //服务列表
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let user = wx.getStorageSync('user');
    console.log(user);
    this.setData({
      userInfo: user
    });
  },

  //授权登录
  bindGetUserInfo (e) {
    wx.getUserProfile({
      desc: '用于获取您的个人信息',
      success: res => {
        let user = res.userInfo
        wx.setStorageSync('user', user)
        this.setData({
          userInfo:user
        })
        console.log(this.data.userInfo,2222)
      }
    })
    
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