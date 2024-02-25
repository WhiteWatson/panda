import request from "./request";

// 普通登录
export const login = (params) => {
  return request({
    url: "/login",
    method: "post",
    params: params,
  });
};

// 发送验证码
export const sendVerification = (params) => {
  return request({
    url: "/login/sendVerification",
    method: "post",
    params: params,
  });
};

// 验证码登录
export const checkVerificationLogin = (params) => {
  return request({
    url: "/login/checkVerification",
    method: "post",
    params: params,
  });
};

// 各种枚举接口
export const getContractSelectCondition = (params) => {
  return request({
    url: "/getContractSelectCondition",
    method: "get",
    params: params,
  });
};

// 分页查询合同列表
export const getContractList = (params) => {
  return request({
    url: "/getContractList",
    method: "post",
    params: params,
  });
};

// 合同详情接口
export const getContractDetail = (params) => {
  return request({
    url: "/getContractDetail",
    method: "post",
    params: params,
  });
};

// 家政员列表接口
export const getHouseKeeperList = (params) => {
  return request({
    url: "/getHouseKeeperList",
    method: "post",
    params: params,
  });
};