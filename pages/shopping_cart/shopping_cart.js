// pages/shopping_cart/shopping_cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList: [
      {
        shopName: '太福',
        shopSelected: false,
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
        shopName: '农科所',
        shopSelected: false,
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
    ], //购物车列表
    checkedColor: '', //复选框选中颜色
    goodsNums: 1,
    totalPrice: 0,           // 总价，初始为0
    selectAllStatus: false,    // 全选状态，默认全选
    selectGoodsArr: [], //选中的商品需要push进的数组
    disabled: false, //全选框是否为禁用状态
  },

  //跳转去商品分类页
  toClassify: function(){
    wx.switchTab({
      url: '../classify/classify',
    })
  },

  //跳转去店铺
  toShop: function(){
    wx.navigateTo({
      url: '../goods/goods',
    })
  },

  //跳转去详情页
  toDetail(e) {
    let goodsId = e.currentTarget.dataset.goodsid
    wx.navigateTo({
      url: '../goods/goodsDetail/detail?id=' + goodsId,
    })
  },

  //删除商品
  deleteItemFunc(e) {
    let cartList = this.data.cartList;                // 获取购物车列表
    let shopIndex = e.currentTarget.dataset.shopIndex;    // 获取data- 传进来的店铺下标
    let goodsList = cartList[shopIndex].goodsList;         //当前店铺所含商品数组
    let selectAllStatus = this.data.selectAllStatus;

    // 如果为全选，则直接给购物车列表赋值为空
    if(selectAllStatus) {
      cartList = [];
      this.setData({
        selectAllStatus: false,
        totalPrice: 0,
        disabled: true
      })
    }

    //单个店铺的删除
    for(let i in cartList) {
      if(cartList[i].shopSelected === true) {
        cartList.splice(i,1)
      } 
    }

    //单个商品的删除
    for(let i in goodsList) {
      if(goodsList[i].isSelected === true) {
        goodsList.splice(i,1);
      } else {
        wx.showToast({
          title: '请选中商品',
          icon: 'error'
        })
        console.log(1)
      }
    }
    
    this.setData({
      cartList: cartList, //重新渲染购物车数据,
      totalPrice: 0
    })
    
  },

  // 监听选择购买数量
  scaleTotalFunc(event) {
    let index = event.currentTarget.dataset.index;    // 获取data- 传进来的商品下标
    let shopIndex = event.currentTarget.dataset.shopIndex;    // 获取data- 传进来的店铺下标
    let cartList = this.data.cartList;                // 获取购物车列表
    let goodsList = cartList[shopIndex].goodsList         //当前店铺所含商品数组
    let num = event.detail;                           // 获取计数器动态增减的数量
    goodsList[index].num = num; // 动态获取的数量再返回给属性值
    this.setData({  
      cartList: cartList  // 整个购物车列表赋值到data中，渲染到页面
    });
    this.getTotalPrice();
  },

  // 计算总价
  getTotalPrice() {
    let cartList = this.data.cartList;                  // 获取购物车列表
    let total = 0;
    for(let i = 0; i<cartList.length; i++) {         // 循环列表得到每个数据
      let goodsList = cartList[i].goodsList;
      for(let j = 0; j<goodsList.length; j++) {
        if(goodsList[j].isSelected) {                   // 判断选中才会计算价格
          total += goodsList[j].num * goodsList[j].price;     // 所有价格加起来
        }
      }
    }
    console.log(total)
    this.setData({                                // 最后赋值到data中渲染到页面
      cartList: cartList,
      totalPrice: total
    });
    
  },

  // 勾选单个店铺的所有商品
  shopCheckFunc(e) {
    let cartList = this.data.cartList;                    // 获取购物车列表
    let shopIndex = e.currentTarget.dataset.shopIndex;    // 获取data- 传进来的店铺下标
    let goodsList = cartList[shopIndex].goodsList         //当前店铺所含商品数组

    if (cartList[shopIndex].shopSelected) {
      cartList[shopIndex].shopSelected = false;
      for (let i in goodsList) {  //改变店铺下面的商品状态
        cartList[shopIndex].goodsList[i].isSelected = false;
      }
    } else {
      cartList[shopIndex].shopSelected = true;
      for (let i in goodsList) {
        cartList[shopIndex].goodsList[i].isSelected = true;
      }
    }
    this.setData({
      cartList: cartList, //店铺下得商品数量
    })
    this.getTotalPrice();                           // 重新获取总价
  },

  // 单选每一个商品卡片事件
  itemCheckFunc(e) {
    //console.log(e.currentTarget.dataset,33333)
    let that = this;
    const shopIndex = e.currentTarget.dataset.shopIndex;    // 获取data- 传进来的店铺下标
    const goodsIndex = e.currentTarget.dataset.goodIndex;    // 获取data- 传进来的商品下标
    let cartList = this.data.cartList;                    // 获取购物车列表
    let goodsList = cartList[shopIndex].goodsList         //当前店铺所含商品数组
    let current = goodsList[goodsIndex];                  //当前所选择的单个商品数据
    let goods_id = e.currentTarget.dataset.goodsid;       //选中的商品id
    that.data.selectGoodsArr.push(goods_id);   //选中的商品id  push到数组中
    //console.log(goodsList,"goodsList")
    //console.log(current,"current")
    //console.log("去重后的商品id数组：" + this.data.selectGoodsArr);

    if (current.isSelected) {
      cartList[shopIndex].goodsList[goodsIndex].isSelected = false; //改变当前商品状态
    } else {
      cartList[shopIndex].goodsList[goodsIndex].isSelected = true;

      let cartListLength = goodsList.length; //店铺中商品数组的长度
      let selectedLength = 0;  //当前店铺所选商品的长度
      for (let i in goodsList) {
        if (goodsList[i].isSelected) {
          selectedLength++; //每选择一个商品，长度加一
        }
      }
      if (cartListLength == selectedLength) { // 如果长度相等，也就是店铺中所有商品都选中，则改变店铺选中状态
        cartList[shopIndex].shopSelected = true;
      }
    }

    this.setData({
      cartList: cartList,                           // 重新渲染购物车数据
    })
    this.getTotalPrice();                           // 重新获取总价
  },

  // 全选事件
  selectAllFunc(e) {
    let selectAllStatus = this.data.selectAllStatus;    // 是否全选状态
    selectAllStatus = !selectAllStatus;
    let cartList = this.data.cartList;   // 获取购物车列表
    for (let i = 0; i < cartList.length; i++) {
      cartList[i].shopSelected = selectAllStatus;
      let goodsList = cartList[i].goodsList;    // 获取单个店铺下的商品列表
      for (let j = 0; j < goodsList.length; j++) {
        goodsList[j].isSelected = selectAllStatus;            // 改变所有商品状态
      }
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      cartList: cartList
    });
    this.getTotalPrice();
  },

  // 结算事件，跳转到订单详情
  toOrderFunc() {
    wx.navigateTo({
      url: '/pages/user/order/comfirmOrder/comfirm_order',
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
    let cartList = this.data.cartList;
    if(cartList.length === 0) {
      this.setData({
        disabled: true
      })
    }
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