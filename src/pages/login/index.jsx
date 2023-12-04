import { Component } from "react";
import { View } from "@tarojs/components";
import { AtButton, AtInput } from "taro-ui";
import "./index.scss";

export default class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      phone: "",
    };
  }

  handleChange(phone) {
    this.setState({
      phone,
    });
    // 在小程序中，如果想改变 phone 的值，需要 `return phone` 从而改变输入框的当前值
    return phone;
  }

  handleClick() {
    console.log('btn click');
  }

  render() {
    return (
      <View className="login-page">
        <View className="text-[48px] text-black pt-40 pb-20 px-60">
          手机验证码登录
        </View>
        <View className="text-[34px] text-black/40 mb-[100px] px-60">
          欢迎登录Giant Panda大熊猫
        </View>
        <AtInput
          className="phone-input"
          name="phone"
          border={true}
          type="phone"
          placeholder="输入手机号"
          value={this.state.phone}
          onClick={this.handleClick.bind(this)}
          onChange={this.handleChange.bind(this)}
        />
        <View className="m-40">
          <AtButton type="primary" onClick={this.handleClick.bind(this)}>
            获取验证码
          </AtButton>
        </View>
      </View>
    );
  }
}
