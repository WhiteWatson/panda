export default defineAppConfig({
  pages: [
    "pages/login/index",
    "pages/contract/index",
    "pages/index/index",
    "pages/customer/index",
    "pages/housekeeper/index",
    "pages/housekeeper/select",
    "pages/agreement/index",
    "pages/authentication/index",
    "pages/addcontract/index",
    "pages/contractdetail/index",
    "pages/templatelist/index",
    "pages/webviewpage/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "熊猫",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    custom: true,
    color: "#000000",
    selectedColor: "#DC143C",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        pagePath: "pages/customer/index",
        text: "家政客户",
      },
      {
        pagePath: "pages/housekeeper/index",
        text: "家政员",
      },
      {
        pagePath: "pages/contract/index",
        text: "合同",
      },
    ],
  },
  useExtendedLib: {
    weui: true,
  },
  permission: {
    "scope.infos": {
      desc: "需要访问外部页面",
    },
    networkTimeout: {
      request: 10000,
      connectSocket: 10000,
      uploadFile: 10000,
      downloadFile: 10000,
    },
    //webview domain
    webview: {
      url: ["https://80001004.uat-e.fadada.com"],
    },
  },
});
