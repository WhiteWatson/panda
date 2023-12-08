import { Component } from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class Index extends Component {
  pageCtx = Taro.getCurrentInstance().page;

  componentDidShow() {
    const tabbar = Taro.getTabBar(this.pageCtx);
    tabbar?.setSelected(0);
  }

  render() {
    return (
      <View className="index min-h-[100vh] bg-[#f6f6f6]">
        <Text>我是首页！</Text>
      </View>
    );
  }
}
