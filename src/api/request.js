import { axios } from "taro-axios";
import Taro from "@tarojs/taro";

// 创建axios实例
const service = axios.create({
  // API的基础路径，如果请求相同的根路径，可以在这里设置
  baseURL: process.env.TARO_APP_API,
  // 请求超时时间
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  async (config) => {
    // 在发送请求之前做一些处理
    console.log("request info", config);
    try {
      const userInfo = Taro.getStorageSync("userInfo");
      if (userInfo) {
        config.headers["Access-Token"] = userInfo.access_token;
      }
    } catch (e) {
      // Do something when catch error
    }
    return config;
  },
  (error) => {
    // 处理请求错误
    console.error("请求错误：", error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做一些处理
    // 你可以根据你的业务需求来定制
    const res = response.data;
    let isNotValid = false;
    if (response.status !== 200) {
      // 处理错误响应
      console.error("响应错误：", res.message);
      isNotValid = true;
      Taro.showToast({
        title: "网络异常",
        icon: "none",
        duration: 2000,
      });
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      if (res.code !== 0) {
        isNotValid = true;
        if (res.message === "需要登录") {
          Taro.redirectTo({
            url: "/pages/login/index",
          });
        } else {
          Taro.showToast({
            title: res.message,
            icon: "none",
            duration: 2000,
          });
        }
      }
      return { res, isNotValid };
    }
  },
  (error) => {
    console.error("响应异常：", error);
    Taro.showToast({
      title: "网络异常",
      icon: "none",
      duration: 2000,
    });
    return Promise.reject(error);
  }
);

export default service;
