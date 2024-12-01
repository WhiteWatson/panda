import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import moment from "moment";
import { BImage } from "@/components";

export default function Index(props) {
  const { contractData } = props;
  return (
    <View
      className="index p-[28px] mb-[22px] bg-white rounded-[16px]"
      onClick={() => {
        Taro.navigateTo({
          url: `/pages/contractdetail/index?conFid=${contractData.fid}`,
        });
      }}
    >
      <View className="flex justify-between align-baseline pb-[20px] border-b-[1px] border-[#979797] border-opacity-10">
        <View className="w-[150px] h-[150px] rounded-[8px] overflow-hidden">
          <BImage
            mode="aspectFill"
            src="https://jiazheng.bj.bcebos.com/yaya.png"
          ></BImage>
        </View>
        <View className="ml-[30px]">
          <View className="flex justify-between mb-[14px]">
            <View className="text-[30px]">
              客户：{contractData.houseHoldPersonName}
              {"(" + contractData.contractTypeShow + ")"}
            </View>
            <View className="border-[2px] border-[#F7B500] rounded-[4px] px-[10px] text-[#F7B500] text-[22px] ">
              {contractData.contractStateShow}
            </View>
          </View>
          <View className="text-[26px] text-black/50 mb-[8px]">
            {`工资：${contractData.monthlySalary}元，客户服务费：${contractData.servicePrice}元`}
          </View>
          <View className="text-[26px] text-black/50">
            {moment(contractData.conStartDate).format("YYYY-MM-DD") +
              "到" +
              moment(contractData.conEndDate).format("YYYY-MM-DD") +
              "（" +
              contractData.houseHoldPersonName +
              "）"}
          </View>
        </View>
      </View>
      <View className="flex justify-between mt-[24px]">
        <View className="text-[26px] text-black/50">电子合同：未签署</View>
        <View className="text-[26px] text-[#FF0000]">未购买保险</View>
      </View>
    </View>
  );
}
