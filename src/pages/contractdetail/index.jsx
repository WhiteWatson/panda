import { useState } from "react";
import { View } from "@tarojs/components";
import { AtTabs, AtTabsPane } from "taro-ui";
import "./index.scss";

import ElectronicContract from "./components/ElectronicContract";


export default function Index() {
  const [tabCurrent, setTabCurrent] = useState(0);
  const tabList = [
    { title: "电子合同" },
    { title: "风险/信息" },
    { title: "换人/费用" },
  ];

  const handleTabClick = (value) => {
    setTabCurrent(value);
  };

  return (
    <View className="index min-h-[100vh] bg-[#f6f6f6]">
      <View className="bg-[#0028AA]">
        <View className="pt-[40px] pb-[20px] text-[24px] text-white px-[32px] flex justify-between">
          <View>录入信息:</View>
          <View>刚刚由丫丫录入</View>
        </View>
        <View className="base-detail bg-white rounded-t-[16px]">
          <View className="title-line py-[19px] px-[32px] flex justify-between text-[30px]">
            <View>保姆合同</View>
            <View>服务中</View>
          </View>
          <View className="px-[32px] py-[19px] text-[26px] text-black/50">
            (合同编号 2023080112300)
          </View>
          <View className="px-[32px] py-[19px] flex justify-between text-[30px]">
            <View>2023-08-01至2024-08-01</View>
            <View>编辑合同</View>
          </View>
          <View className="px-[32px] py-[19px] flex justify-between text-[30px]">
            <View>客户</View>
            <View>高高18812345678</View>
          </View>
          <View className="px-[32px] py-[19px] flex justify-between text-[30px]">
            <View>家政员</View>
            <View>丫丫18812345678</View>
          </View>
        </View>
      </View>
      <View>
        <AtTabs
          current={tabCurrent}
          tabList={tabList}
          onClick={(value) => handleTabClick(value)}
        >
          <AtTabsPane current={tabCurrent} index={0}>
            <ElectronicContract></ElectronicContract>
          </AtTabsPane>
          <AtTabsPane current={tabCurrent} index={1}>
            {/* <RiskAndInformation></RiskAndInformation> */}
          </AtTabsPane>
          <AtTabsPane current={tabCurrent} index={2}>
            {/* <Expense></Expense> */}
          </AtTabsPane>
        </AtTabs>
      </View>
    </View>
  );
}
