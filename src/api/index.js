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

// 企业认证接口
export const getAuthUrlOCorp = (params) => {
  return request({
    url: "/hkapplet/getAuthUrlOCorp",
    method: "post",
    data: params,
  });
};

// 个人认证接口
export const getAuthUrlOfUser = (params) => {
  return request({
    url: "/hkapplet/getAuthUrlOfUser",
    method: "post",
    data: params,
  });
};

// 各种枚举接口
export const getContractSelectCondition = (params) => {
  return request({
    url: "/hkapplet/getContractSelectCondition",
    method: "post",
    params: params,
  });
};

//分页查询合同列表

export const getContractList = (params) => {
  return request({
    url: "/hkapplet/getContractList",
    method: "post",
    data: params,
  });
};

//分页查询合同模板列表
export const getTemplateList = (params) => {
  return request({
    url: "/hkapplet/getTemplateList",
    method: "post",
    params: params,
  });
};

//获取预览链接
export const getPreviewUrl = (params) => {
  return request({
    url: "/hkapplet/getTemplatePreviewUrl",
    method: "post",
    data: params,
  });
};

//人员列表
export const getHouseKeeperList = (params) => {
  return request({
    url: "/hkapplet/getHouseKeeperList",
    method: "post",
    data: params,
  });
};

export const saveContract = (params) => {
  return request({
    url: "/hkapplet/saveContract",
    method: "post",
    data: params,
  });
};

export const getContractDetail = (params) => {
  return request({
    url: "/hkapplet/getContractDetail",
    method: "post",
    data: params,
  });
};

// 签章
export const startSignTask = (params) => {
  return request({
    url: "hkapplet/startSignTask",
    method: "post",
    data: params,
  });
};

// 获取预览链接
export const getTemplatePreviewUrl = (params) => {
  return request({
    url: "hkapplet/getTemplatePreviewUrl",
    method: "post",
    params: params,
  });
};

// 获取参与方签署链接
export const getActorSignUrl = (params) => {
  return request({
    url: "hkapplet/getActorSignUrl",
    method: "post",
    params: params,
  });
};

