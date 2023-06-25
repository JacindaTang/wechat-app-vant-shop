// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '', // 获取搜索内容
    isShowAction: false, // 是否显示右侧搜索按钮
    tabIndex: 0, // 左侧菜单当前索引
    menuList:[
      {
        id: 0,
        tabName: '店长推荐', 
        detail: [
          { title: '', image: ''}
        ]
      },
      { 
        id: 1,
        tabName: '扶贫专区',
        detail: [
          { title: '', image: ''}
        ]
      },
      {
        id: 2,
        tabName: '助农专区',
        detail: [
          { title: '', image: ''}
        ]
      },
      {
        id: 3,
        tabName: '蔬菜专区',
        detail: [
          { id: 10, title: '青菜类', image: '/images/qingcai22.png'},
          { id: 11, title: '南瓜类', image: '/images/nangua1.png'},
          { id: 12, title: '番茄类', image: '/images/fanqie.png'},
          { id: 13, title: '花菜类', image: '/images/shucai.png'},
          { id: 14, title: '辣椒类', image: '/images/lajiao.png'},
          { id: 15, title: '豆类', image: '/images/dou.png'},
        ]
      },
      {
        id: 4,
        tabName: '优质米粮',
        detail: [
          { id: 16, title: '食用油', image: '/images/oil.png'},
          { id: 17, title: '米面杂粮', image: '/images/rice.png'},
        ]
      },
      {
        id: 5,
        tabName: '时令鲜果',
        detail: [
          { id: 18, title: '时令鲜果', image: '/images/sg.png'}
        ]
      },
      

    ], // 左侧菜单列
    cardList: [
      { id:0, image:'/images/youzi.jpg', title:'蜜柚', num:'100', desc:'', tags:[{title:'推荐'},{title:'自产'},{title:'鲜果'}], price:'59.00', originPrice:'79.00'},
      { id:1, image:'/images/shuchai.jpeg', title:'空心菜', num:'100', desc:'', tags:[{title:'自产'},{title:'蔬菜'}], price:'10.00', originPrice:'15.00'},
      { id:2, image:'/images/doujia.jpeg', title:'鲜毛豆荚', num:'100', desc:'', tags:[{title:'自产'}], price:'6.00', originPrice:'8.00'},
      { id:3, image:'/images/huangua.jpeg', title:'黄瓜', num:'100', desc:'', tags:[{title:'适合鲜食、煮或腌制'}], price:'10.00', originPrice:'15.00'},
      { id:4, image:'/images/qiukui.jpeg', title:'秋葵', num:'100', desc:'', tags:[], price:'8.00', originPrice:'10.00'},
    ], // 推荐栏的商品列
  },

  // 点击切换左侧tab
  onChange(event) {
    console.log(event.detail)
    this.setData({
      tabIndex: event.detail
    })
  },

  // 触发搜索框时，显示右侧搜索按钮
  onClickSearchInput() {
    this.setData({
      isShowAction: true
    });
  },

  // 搜索功能
  onSearch() {

  },

  // 跳转产品列表,并且进入下一级页面，更改顶部导航栏标题
  toGoodsList(e) {
    let id = e.currentTarget.dataset.id;
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url:'/pages/goods/goods?id=' + id,
      success: ()=>{
        wx.setNavigationBarTitle({
          title: '青菜类' //更改顶部导航栏标题 (思路: 可以带id跳转，通过id进行查询当前id的分类名称)
        })
      }
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