import { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Radio } from "@tarojs/components";
import { AtButton, AtInput, AtMessage } from "taro-ui";
import { sendVerification, checkVerificationLogin } from "@/api";
import "./index.scss";

export default class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      phone: "",
      code: "",
      agreement: false,
      btnType: 1,
      isNote: false,
      time: null,
    };
  }

  handleChange(phone) {
    this.setState({
      phone,
    });
    // 在小程序中，如果想改变 phone 的值，需要 `return phone` 从而改变输入框的当前值
    return phone;
  }

  handleCodeChange(code) {
    this.setState({
      code,
    });
    return code;
  }

  handleBtnClick() {
    console.log("btn click", this.state.btnType);
    if (this.state.btnType === 1) {
      if (!this.state.phone)
        return Taro.atMessage({
          message: "请完善手机号",
          type: "warning",
        });
      this.sendCode(this.state.phone);
    }
    if (this.state.btnType === 0) {
      if (!this.state.phone)
        return Taro.atMessage({
          message: "请完善手机号",
          type: "warning",
        });
      if (!this.state.agreement)
        return Taro.atMessage({
          message: "请先阅读并勾选协议",
          type: "warning",
        });
      if (!this.state.code)
        return Taro.atMessage({
          message: "请填写验证码",
          type: "warning",
        });
      this.login(this.state.phone, this.state.code);
    }
  }

  async login(userName, verificationCode) {
    const { res, isNotValid } = await checkVerificationLogin({
      userName,
      verificationCode,
    });
    if (isNotValid) return;
    console.log(res);
  }

  async sendCode(phone) {
    const { res, isNotValid } = await sendVerification({
      userName: phone,
    });
    if (isNotValid)
      return Taro.showToast({
        title: res.message,
        icon: "none",
        duration: 2000,
      });

    this.setState({
      btnType: 0,
      time: 60,
      isNote: true,
    });
    const intervalId = setInterval(() => {
      const time = this.state.time - 1;
      if (time === 0) {
        clearInterval(intervalId);
        this.setState({
          isNote: false,
        });
      } else {
        this.setState({
          time,
        });
      }
    }, 1000);
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
          onChange={this.handleChange.bind(this)}
        />
        {this.state.btnType === 0 && (
          <AtInput
            className="phone-input"
            name="code"
            border={true}
            type="phone"
            placeholder="验证码"
            value={this.state.code}
            onChange={this.handleCodeChange.bind(this)}
          >
            {this.state.isNote ? (
              <View>{this.state.time}秒后可重新发送 </View>
            ) : (
              <View onClick={this.sendCode.bind(this)}>重新发送验证码</View>
            )}
          </AtInput>
        )}

        <View className="my-radio mx-40 flex">
          <Radio
            value={true}
            checked={this.state.agreement}
            color="#0028aa"
            onClick={() => {
              this.state.agreement
                ? this.setState({ agreement: false })
                : this.setState({ agreement: true });
            }}
          ></Radio>
          <View className="text-[26px] text-black/40">
            登录即同意{" "}
            <Text className="text-[#0028aa]">
              《Giant Panda大熊猫用户协议》《隐私协议》《支付协议》
            </Text>
          </View>
        </View>

        <View className="m-40">
          <AtButton type="primary" onClick={this.handleBtnClick.bind(this)}>
            {this.state.btnType ? "获取验证码" : "同意协议并登录"}
          </AtButton>
        </View>
        <AtMessage />
      </View>
    );
  }
}
