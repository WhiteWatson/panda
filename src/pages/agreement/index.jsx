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
      <View className="at-article">
        <View className="at-article__h1">这是一级标题这是一级标题</View>
        <View className="at-article__info">
          2017-05-07&nbsp;&nbsp;&nbsp;这是作者
        </View>
        <View className="at-article__content">
          <View className="at-article__section">
            <View className="at-article__h2">这是二级标题</View>
            <View className="at-article__h3">这是三级标题</View>
            <View className="at-article__p">
              这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </View>
            <View className="at-article__p">这是文本段落。这是文本段落。</View>
          </View>
        </View>
      </View>
    );
  }
}
