import request from "./request";

export const getUser = (params) => {
  return request({
    url: "/your-endpoint",
    method: "get",
    params: params,
  });
};
