// pages/goods/goodsDetail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImages: [                   
      '/images/youzi.jpg',
      '/images/youzi.jpg',
    ], //轮播图图片数据
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1300,
    bg: '#8fb2c9', //轮播图圆点的颜色
    height:"", //动态设置swiper的高度属性
    id:'', //获取首页跳转详情页传的商品id
    show: false, //默认选择页不显示
    goodsNums: 1, //商品规格默认1件
    popupBtnTitle: '确定',
    isCollection: false, //默认不收藏
  },

  //获取屏幕宽度，获取图片的宽高，然后等比设置当前屏幕宽度下swiper的高度。
  imgH:function(e){
    var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
    var imgh=e.detail.height;　//图片高度
    var imgw=e.detail.width;
    var swiperH=winWid*imgh/imgw + "px"　//等比设置swiper的高度。  即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度    ==> swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
    this.setData({
        height:swiperH　//设置高度
    })
  },

  //收藏商品
  collectionFunc() {
    let that = this;
    let isCollection = that.data.isCollection;

    if(isCollection) {
      wx.showModal({
        title: '提示',
        content: '确定取消收藏该商品吗？',
        success: (res) => { 
          // function (res)写法时 ，this是undefined未定义的。
          // (res) => { }写法时this是Object。 当前用的是此写法
          if (res.confirm) { //点击确定后
            this.setData({
              isCollection: false
            })
            wx.showToast({
              title: '已取消收藏',
              icon: 'error',
              mask: true
            })
          }
        }
      })
      
    } else {
      this.setData({
        isCollection: true,
        mask: true
      })
      wx.showToast({
        title: '成功收藏',
      })
    }
    
    
  },

  //带id跳转到该店铺的全部商品列表
  toAllGoods() {
    wx.navigateTo({
      url: '../goods',
    })
  },

  //跳转到首页
  toIndex() {
    wx.switchTab({
      url: '../../index/index'
    })
  },

  //跳转到购物车
  toCart() {
    wx.switchTab({
      url: '../../shopping_cart/shopping_cart'
    })
  },

  //打开购买页的动作面板
  showPopup(e) {
    this.setData({
      show: true
    });
    switch(e.target.id) {
      case 'addCar' :
        this.setData({
          popupBtnTitle: '加入购物车'
        })
        break;
      case 'purchase' :
        this.setData({
          popupBtnTitle: '确定'
        })
        break;
    }
  },

  //关闭购买页的动作面板
  closePopup() {
    this.setData({
      show: false
    })
  },

  // 监听选择购买数量
  scaleTotalFunc(event) {
    this.setData({
      goodsNums: event.detail
    })
  },

  //判断是加入购物车还是提交订单
  submitFunc(e) {
    console.log(e)
    switch(e.target.id) {
      case '加入购物车' :
        // wx.switchTab({
        //   url: '../../shopping_cart/shopping_cart',
        // });
        wx.showToast({
          title: '加入成功',
          icon:'success',
          mask:'true'
        });
        this.setData({
          show: false
        });
        break;
      case '确定' :
        wx.navigateTo({
          url: '../../user/order/comfirmOrder/comfirm_order',
        });
        break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options,1111)
    this.setData({
      id: options.id
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