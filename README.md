# wechat-app-vant-shop

## 项目说明

基于 Vant-UI & 微信原生开发的微信小程序商城。商城主题是 `关于农产品销售的一个商城平台` 。这项目是去年自己用于练习微信小程序原生开发用的，选用了 `Vant UI` 进行界面设计，仅做界面和数据展示。

开发期间也踩了很多坑，所以有需求的小伙伴可以参考一下。自己封装的组件以及页面路径创建及代码写法可能有点不规范（现在回看当时写的，确实有点点乱，希望有在看的小伙伴不要介意）

⚠️ 注：本项目没有接后端，之后会把接入node.js（后端）开源。

## 使用说明

由于使用了原生开发，所以直接打开 `微信开发者工具`，导入本项目即可。

## 项目框架

UI：Vant UI

前端框架： 微信小程序原生开发

## 目录结构：

```
├── images // 存放本地图片
├── miniprogram_npm // 存放构建打包后的 npm 包
├── node_modules
├── pages // 页面主体
│   ├── classify // 分类页
│   ├── component // 公共组件
│   │   └── backtop
│   ├── goods // 商品列表
│   │    ├── goods
│   │    └── goodsDetail // 商品详情
│   ├── index // 首页
│   │   ├── index
│   │   └── card // 商品卡片
│   ├── shopping_cart // 购物车
│   └── user // 用户中心
│       ├── user
│       ├── address // 地址
│       │   ├── address // 地址
│       │   └─── editAddress // 编辑地址
│       └─── order //订单
│            ├── order 
│            └─── comfirmOrder // 确认订单
├── utils // 工具类
│   ├── area.js // 区域编码 （vant 组件有用到，用于地址区域选择）
│   ├── numberToFixed.wxs // 小数点位数
│   └─── util.js // 日期格式化
├── app.js 
├── app.json // 页面路由注册、底部菜单栏配置等

...

```

## 功能描述

因为只是个人练习项目，所以没有连接后端，单纯做页面展示。本项目里所用到的数据，只是模拟数据。

涉及到的 Vant 组件如下：

- van-sidebar  // 分类页的侧边栏
- van-search // 搜索框
- van-grid // 首页图标组
- van-goods-action // 商品详情的底部菜单栏
- van-popup // 弹窗
- van-stepper // 计数器
- van-card
- van-tag // 标签
- van-checkbox // 购物车页 商品选择
- van-submit-bar
- van-tab // 订单页的顶部
- van-cell

主要实现的功能：

- 首页
    - 轮播图
    - 图标组 （具体每一项可以延伸为一个功能 这里只做展示 没开发）
    - 今日推荐 （假如连接后端，这里就是获取由后台指定的一组推荐商品）
        - 商品列表
    - 底部广告图 （这里后期可以连接后端，动态改变数据）
- 分类
    - 顶部搜索框
    - 左侧分类栏（第一个是一级分类，其他都是二级分类）
- 购物车 （逻辑处理最多）
    - 对商品做了多店分类
    - 点击全选，则所有商品都勾选上
    - 假如只对其中一个店铺的商品做勾选，并且选满，则该店铺前面的选择，也会勾选上。（模拟淘宝的逻辑）
    - 假如勾选店铺，而不是商品，则当前店铺的商品都会勾选上，点击删除，则该店铺下的商品都会删除。
    - 底部合计金额，也会根据勾选的进行自动计算 （包括添加商品数量，也会自动合计进去）
    - 点击结算，进入订单确认页
- 用户中心
    - 我的订单页
- 商品详情
    - 商品收藏
    - 单规格商品选择弹窗
- 地址列表
    - 添加、编辑地址

## 项目截图

- 首页

<img src="https://cdnjson.com/images/2023/06/26/1.jpg" alt="1.jpg" border="0" />

- 分类页

<img src="https://cdnjson.com/images/2023/06/26/3.jpg" alt="3.jpg" border="0" />

<img src="https://cdnjson.com/images/2023/06/26/4.jpg" alt="4.jpg" border="0" />

- 商品详情

<img src="https://cdnjson.com/images/2023/06/26/6.jpg" alt="6.jpg" border="0" />

<img src="https://cdnjson.com/images/2023/06/26/5.jpg" alt="5.jpg" border="0" />

- 购物车页

<img src="https://cdnjson.com/images/2023/06/26/8.jpg" alt="8" border="0">

- 订单页

<img src="https://cdnjson.com/images/2023/06/26/14.jpg" alt="14" border="0">

- 用户中心

<img src="https://cdnjson.com/images/2023/06/26/13.jpg" alt="13" border="0">

- 地址列表

<img src="https://cdnjson.com/images/2023/06/26/12.jpg" alt="12" border="0">