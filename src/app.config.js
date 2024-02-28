export default defineAppConfig({
  pages: [
    "pages/login/index",
    "pages/contract/index",
    "pages/index/index",
    "pages/customer/index",
    "pages/housekeeper/index",
    "pages/agreement/index",
    "pages/authentication/index",
    "pages/addcontract/index",
    "pages/contractdetail/index",
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
});
