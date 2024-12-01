import { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Radio } from "@tarojs/components";
import { AtForm, AtInput, AtButton, AtModal } from "taro-ui";
import "./index.scss";

export default class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      name: "",
      idcard: "",
      phone: "",
      code: "",
      modelOpen: false,
      agreement: false,
      isNote: false,
      time: null,
    };
  }
  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  sendCode() {
    this.setState({
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

  handleJump() {
    Taro.switchTab({
      url: "/pages/index/index",
    });
  }

  onSubmit(event) {}
  onReset(event) {
    this.setState({
      value: "",
    });
  }
  render() {
    return (
      <View className="pt-20 px-20 min-h-[100vh] bg-[#f6f6f6]">
        <AtForm className="!bg-transparent">
          <View className="rounded-[16px] bg-white border border-transparent">
            <AtInput
              name="name"
              className="rounded-md"
              title="真实姓名"
              border={false}
              type="text"
              value={this.state.name}
              onChange={(value) => this.handleChange("name", value)}
            />
            <AtInput
              name="idcard"
              title="身份证号"
              border={false}
              type="idcard"
              value={this.state.idcard}
              onChange={(value) => this.handleChange("idcard", value)}
            />
            <AtInput
              name="phone"
              title="手机号"
              border={false}
              type="phone"
              value={this.state.phone}
              onChange={(value) => this.handleChange("phone", value)}
            >
              {this.state.isNote ? (
                <View>{this.state.time}秒后可重新发送 </View>
              ) : (
                <View onClick={this.sendCode.bind(this)}>发送验证码</View>
              )}
            </AtInput>
            <AtInput
              title="验证码"
              name="code"
              border={false}
              type="text"
              value={this.state.code}
              onChange={(value) => this.handleChange("code", value)}
            ></AtInput>
          </View>
          <View className="my-radio mx-20 mt-40 mb-80 flex">
            <Radio
              value={true}
              className="w-[30px] h-[30px] mr-20 scale-75"
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
          <AtButton type="primary" formType="submit">
            提交
          </AtButton>
        </AtForm>
        <View className="pt-40">
          <AtButton
            type="default"
            circle={true}
            formType="submit"
            onClick={() => {
              this.setState({ modelOpen: true });
            }}
          >
            跳过
          </AtButton>
          <AtModal
            isOpened={this.state.modelOpen}
            cancelText="跳过"
            confirmText="完善信息"
            onClose={() => {
              this.setState({ modelOpen: false });
            }}
            onCancel={this.handleJump}
            onConfirm={() => {
              this.setState({ modelOpen: false });
            }}
            content="建议完成实名认证，以便为您提供更好的服务"
          />
        </View>
      </View>
    );
  }
}
