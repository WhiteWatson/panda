import request from "./request";

// 登录
export const login = (params) => {
  return request({
    url: "/login",
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
