// pages/user/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex: 0, // 左侧菜单当前索引
    orderTabList: [
      { 
        id: 0, 
        title: '全部',
        cartList: [
          {
            status: 1,
            shopName: '太福',
            shopSelected: false,
            totalPrice: 70.00,
            goodsList: [
              {
                goods_id: 1,
                title: '苏坂蜜柚',
                scale: 1500,
                price: 59,
                image: '/images/youzi.jpg',
                num: 1,
                isSelected: false,
              },
              {
                goods_id: 2,
                title: '空心菜',
                scale: 450,
                price: 5,
                image: '/images/shuchai.jpeg',
                num: 1,
                isSelected: false,
              },
              {
                goods_id: 3,
                title: '黄瓜',
                scale: 450,
                price: 6,
                image: '/images/huangua.jpeg',
                num: 1,
                isSelected: false,
              },
            ],
          },
          {
            status: 2,
            shopName: '农科所',
            shopSelected: false,
            totalPrice: 5.00,
            goodsList: [
              {
                goods_id: 3,
                title: '鲜毛豆荚',
                scale: 450,
                price: 5,
                image: '/images/doujia.jpeg',
                num: 1,
                isSelected: false,
              },
            ],
          },
        ]
      },
      { 
        id: 1, 
        title: '待付款',
        cartList: [
          {
            status: 2,
            shopName: '农科所',
            shopSelected: false,
            totalPrice: 5.00,
            goodsList: [
              {
                goods_id: 3,
                title: '鲜毛豆荚',
                scale: 450,
                price: 5,
                image: '/images/doujia.jpeg',
                num: 1,
                isSelected: false,
              },
            ],
          },
        ]
      },
      { 
        id: 2, 
        title: '待发货',
        cartList: []
      },
      { 
        id: 3, 
        title: '待收货',
        cartList: []
      },
      { 
        id: 4, 
        title: '待评价' ,
        cartList: []
      }
    ], //tab菜单
  },

  // 点击切换tab
  onChange(event) {
    this.setData({
      tabIndex: event.detail
    })
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
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