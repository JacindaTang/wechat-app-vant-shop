// pages/user/order/comfirmOrder/comfirm_order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [
      {
        shopName: '太福',
        detail: [
          {
            title: '苏坂蜜柚',
            scale: 1500,
            price: 59,
            image: '/images/youzi.jpg',
            num: 1
          },
          {
            title: '空心菜',
            scale: 450,
            price: 10.5,
            image: '/images/shuchai.jpeg',
            num: 1
          },
          {
            title: '黄瓜',
            scale: 450,
            price: 10.5,
            image: '/images/huangua.jpeg',
            num: 1
          },
        ],
        subPrice: 80
      },
      {
        shopName: '农科所',
        detail: [
          {
            title: '鲜毛豆荚',
            scale: 450,
            price: 10.5,
            image: '/images/doujia.jpeg',
            num: 1
          },
        ],
        subPrice: 10.5
      },
    ], //订单列表
    totalPrice: 0,  //计算总价
    nums: 0, //计算商品总数
    address: {
      detailAddress: "龙岩市xxxxx",
      number: "15874564878",
      postCode: "364000",
      username: "jacinda"
    },
  },

  //跳转去我的地址列表
  toAddressList() {
    wx.navigateTo({
      url: '/pages/user/address/address',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 计算总价
    let orderList = this.data.orderList;                  // 获取购物车列表
    let total = 0;  
    let nums = 0;
    for(let i = 0; i<orderList.length; i++) {         // 循环列表得到每个数据
      let detail = orderList[i].detail;
      nums += detail.length;
      console.log(nums,"nums")
      for(let j = 0; j < detail.length; j++) {
        total += detail[j].num * detail[j].price;     // 所有价格加起来
        console.log(total,"total")
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      totalPrice: total,
      nums: nums
    });
    
    // 获取添加的地址信息
    // let that = this;
    // wx.getStorage({
    //   key: 'address',
    //   success: function(res) {
    //     that.setData({
    //       address: res.data
    //     })
    //   },
    //   fail: function(res) {
    //   }
    // })
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