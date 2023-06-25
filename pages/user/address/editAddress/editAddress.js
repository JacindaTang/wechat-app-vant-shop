// pages/user/address/editAddress/editAddress.js
const area = require('../../../../utils/area.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    params: {
      username: '',
      telphone: '',
      area: '',
      detailAddress: '',
      postCode: ''
    },
    areaList: Object.assign({}, area.default),  // 获取本地储存的地区列表
    showArea: false, //显示地区弹窗
  },

  //打开弹窗
  openArea() {
    this.setData({
      showArea: true
    })
  },

  // 获取选中的地区
  getArea: function(e) {
    //console.log('getArea-- ',e.detail.values)
    
    let that = this;
    let areaList = e.detail.values;  // 获取地区列表
    let selectArea = '';  // 定义一个选中地区的显示字段
  
    areaList.forEach((item) => {
      selectArea = selectArea + item.name + ' '  //循环获取选中的地区
    });

    
    that.data.params.area = selectArea  // 把获取到的地区赋值给传递的值
    let params = that.data.params;

    this.setData({
      showArea: false,
      params //重新渲染地址
    })
  },

  //关闭弹窗
  colseArea() {
    this.setData({
      showArea: false
    })
  },

  // 信息提交
  handleChange(e) {
    const field = e.currentTarget.dataset.field;
    let params = { ...this.data.params };
    params[field] = e.detail.value;
    //console.log(params[field])

    this.setData({
      params
    });
    // console.log(params,2222)
    wx.setStorageSync('address', params)
  },

  // 获取表单数据
  submitFunc(e) {
    console.log(this.data.params)
    wx.navigateBack({
      delta: 1
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