export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/login/index',
    'pages/customer/index',
    'pages/housekeeper/index',
    'pages/contract/index',
    'pages/agreement/index',
    'pages/authentication/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '熊猫',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#000000',
    selectedColor: '#DC143C',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        selectedIconPath: 'images/tabbar_home_on.png',
        iconPath: 'images/tabbar_home.png',
        text: '首页'
      },
      {
        pagePath: 'pages/customer/index',
        selectedIconPath: 'images/tabbar_contract_on.png',
        iconPath: 'images/tabbar_contract.png',
        text: '家政客户'
      },
      {
        pagePath: 'pages/housekeeper/index',
        selectedIconPath: 'images/tabbar_cart_on.png',
        iconPath: 'images/tabbar_cart.png',
        text: '家政员'
      },
      {
        pagePath: 'pages/contract/index',
        selectedIconPath: 'images/tabbar_my_on.png',
        iconPath: 'images/tabbar_my.png',
        text: '合同'
      }
    ]
  }
})
