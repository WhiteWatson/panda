import { getContractDetail } from "@/api";
import { useEffect, useState } from "react";
import { View } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import { AtTabs, AtTabsPane, AtButton } from "taro-ui";
import moment from "moment";

import ElectronicContract from "./components/ElectronicContract";
import "./index.scss";
import { Button } from "@antmjs/vantui";

export default function Index() {
  const [tabCurrent, setTabCurrent] = useState(0);
  const [contractData, setContractData] = useState({});
  const router = useRouter();
  let conFid = router.params.conFid;

  console.log(conFid, "conFid");
  // getContractDetail
  useEffect(() => {
    async function _callAPI() {
      if (conFid) {
        const { res } = await getContractDetail({ conFid });
        if (res && res.code == "0") {
          setContractData(res.data);
        }
        console.log("getContractDetail", res);
      }
    }
    _callAPI();
  }, [conFid]);

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
          <View>
            {moment(contractData.createTime).format("YYYY-MM-DD")}由
            {contractData.customerName}录入
          </View>
        </View>
        <View className="base-detail bg-white rounded-t-[16px]">
          <View className="title-line py-[19px] px-[32px] flex justify-between text-[30px]">
            <View>{contractData.contractTypeShow}合同</View>
            <View>{contractData.contractStateShow}</View>
          </View>
          <View className="px-[32px] py-[19px] text-[26px] text-black/50">
            (合同编号 2023080112300)
          </View>
          <View className="px-[32px] py-[19px] flex justify-between text-[30px]">
            <View>
              {contractData.conStartDate + "-" + contractData.conEndDate}
            </View>
            <View>编辑合同</View>
          </View>
          <View className="px-[32px] py-[19px] flex justify-between text-[30px]">
            <View>客户</View>
            <View>
              {contractData.customerName + " " + contractData.userPhone || ""}
            </View>
          </View>
          <View className="px-[32px] py-[19px] flex justify-between text-[30px]">
            <View>家政员</View>
            <View>
              {contractData.houseHoldPersonName +
                " " +
                contractData.houseHoldPersonPhone}
            </View>
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
            <View className="p-[32px] flex flex-col gap-[32px] bg-white m-[32px]">
              <View className="flex justify-between items-center">
                <View>合同展示内容</View>
                <Button className="m-0" color="#1d20a4">
                  修改合同
                </Button>
              </View>
              <View className="text-[24px] text-gray-400">
                {moment(contractData.createTime).format("YYYY-MM-DD")}由
                {contractData.customerName}录入
              </View>
              <View className="text-[24px] text-gray-400">
                以下信息仅在系统中记录，如需提现在电子合同或纸质合同，需自行录入到合同中
              </View>
              <View className="flex justify-between">
                <View>合同期限</View>
                <View>
                  {contractData.conStartDate + "-" + contractData.conEndDate}
                </View>
              </View>
              <View className="flex justify-between">
                <View>客户服务费（元）</View>
                <View>{contractData.hkServicePrice}</View>
              </View>
              <View className="flex justify-between">
                <View>家政员工资（元/月）</View>
                <View>{contractData.monthlySalary}</View>
              </View>
              <View className="flex justify-between">
                <View>服务时长（天）</View>
                <View>{contractData.workdays}</View>
              </View>
              <View className="text-[24px] text-gray-400">
                如下内容仅自己查看
              </View>
              <View className="flex justify-between">
                <View>家政员服务费（元）</View>
                <View>{contractData.servicePrice}</View>
              </View>
            </View>
          </AtTabsPane>
          <AtTabsPane current={tabCurrent} index={2}>
            {/* <Expense></Expense> */}
          </AtTabsPane>
        </AtTabs>
      </View>
    </View>
  );
}
