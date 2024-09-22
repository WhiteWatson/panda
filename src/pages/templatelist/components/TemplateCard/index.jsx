import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import moment from "moment";
import { BImage } from "@/components";

export default function Index(props) {
  const { templateData } = props;
  console.log(templateData, "cccc");
  return (
    <View
      className="index p-[28px] mb-[22px] bg-white rounded-[16px]"
      onClick={() => {
        Taro.navigateTo({
          url: `/pages/contractdetail/index?conFid=${templateData.fid}`,
        });
      }}
    >
      <View className="flex justify-between align-baseline">
        <View className="flex-1 border-b-[1px] border-[#979797] border-opacity-10">
          <View className="flex justify-between mb-[14px]">
            <View className="text-[30px]">
              {`${templateData.signTemplateName}`}
            </View>
            <View className="border-[2px] border-[#F7B500] rounded-[4px] px-[10px] text-[#F7B500] text-[22px] ">
              {templateData.contractStateShow}
            </View>
          </View>
          <View className="text-[26px] text-black/50 mb-[8px]">
            {`目录：${templateData.catalogName} 类型：${templateData.businessTypeName}`}
          </View>
          <View className="text-[26px] text-black/50">
            {`创建时间： ${moment(Number(templateData.createTime)).format(
              "YYYY-MM-DD"
            )}`}
          </View>
        </View>
        <View className="flex items-center text-[#0028aa]">
          去签署
        </View>
      </View>
    </View>
  );
}
