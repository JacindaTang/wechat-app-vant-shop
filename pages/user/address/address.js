// pages/user/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio: 0, //单选默认值
    addressList: [
      {
        detailAddress: "龙岩市新罗区xxxx",
        number: "15874564878",
        postCode: "364000",
        username: "jacinda"
      },
      {
        detailAddress: "龙岩市新罗区龙川西路1号",
        number: "15874564878",
        postCode: "364000",
        username: "kenna"
      },
      {
        detailAddress: "龙岩市新罗区",
        number: "15874564878",
        postCode: "364000",
        username: "jac"
      },
    ]
  },

  //跳转去地址表单
  toEdit: function(){
    wx.navigateTo({
      url: '../address/editAddress/editAddress',
    })
  },

  onChange(event) {
    console.log(event.detail)
    this.setData({
      radio: event.detail,
    });
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