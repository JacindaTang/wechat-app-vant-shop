// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    swiperImages: [
      '/images/swiper.jpeg',
      '/images/swiper.jpeg',
      '/images/swiper.jpeg'
    ], //轮播图图片数据
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1300,
    bg: '#8fb2c9', //轮播图圆点的颜色
    height:"", //动态设置swiper的高度属性
    funcList: [
      { icon: '/images/safe.png', title:'检测服务'},
      { icon: '/images/plan.png', title:'智慧农业'},
      { icon: '/images/1.png', title:'溯源查询'},
      { icon: '/images/shenqing.png', title:'入驻申请'},
      { icon: '/images/8.png', title:'合作申请'},
      { icon: '/images/7.png', title:'农业设施'},
      { icon: '/images/plan2.png', title:'乡村振兴'},
      { icon: '/images/shucai.png', title:'农副产品'},
      { icon: '/images/4.png', title:'团购'},
      { icon: '/images/class.png', title:'全部产品', url: '/pages/classify/classify'},
    ], //功能组图标和title
    cardList: [
      { id:0, image:'/images/youzi.jpg', title:'苏坂蜜柚', num:'100', desc:'', tags:[{title:'推荐'},{title:'自产'},{title:'鲜果'}], price:'59.00', originPrice:'79.00'},
      { id:1, image:'/images/shuchai.jpeg', title:'空心菜', num:'100', desc:'', tags:[{title:'自产'},{title:'蔬菜'}], price:'10.00', originPrice:'15.00'},
      { id:2, image:'/images/doujia.jpeg', title:'鲜毛豆荚', num:'100', desc:'', tags:[{title:'自产'}], price:'6.00', originPrice:'8.00'},
      { id:3, image:'/images/huangua.jpeg', title:'黄瓜', num:'100', desc:'', tags:[{title:'适合鲜食、煮或腌制'}], price:'10.00', originPrice:'15.00'},
      { id:4, image:'/images/qiukui.jpeg', title:'秋葵', num:'100', desc:'', tags:[], price:'8.00', originPrice:'10.00'},
    ], // 商品卡片
    scrollTop: false, //返回顶部按钮 默认隐藏

    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
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

  onLoad() {
    
  },
  
})
