import { useEffect, useMemo, useState } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";
import { useSelector } from "react-redux";
import TemplateCard from "./components/TemplateCard";
import { getTemplateList } from "@/api";

export default function Index() {
  const [templatetData, setTemplateData] = useState([]);
  const companyInfo = useSelector((state) => state.user.companyInfo);

  // 需要登录才能进入的页面需要加登录态验证逻辑
  const userInfo = useSelector((state) => state.user.userInfo);
  useEffect(() => {
    if (!userInfo) {
      Taro.redirectTo({
        url: "/pages/login/index",
      });
    }
    console.log(userInfo);
  }, [userInfo]);

  useEffect(() => {
    if (companyInfo && companyInfo.authStatus === 0) {
      return Taro.atMessage({
        message: "未进行企业认证",
        type: "warning",
      });
    }
  }, [companyInfo]);

  Taro.useDidShow(() => {
    const _callAPI = async () => {
      const { res } = await getTemplateList({
        openCorpId: companyInfo?.openCorpId,
      });

      console.log("getTemplateList", res);
      if (res.code == "0") {
        setTemplateData(res.data);
      }
    };
    if (userInfo && companyInfo) {
      _callAPI();
    }
  });

  return (
    <View className="index min-h-[100vh] bg-[#f6f6f6] pb-[150px]">
      <View className="p-[24px]">
        {templatetData.length > 0 &&
          templatetData.map((item, index) => {
            return (
              <TemplateCard key={index} templateData={item}></TemplateCard>
            );
          })}
      </View>
    </View>
  );
}