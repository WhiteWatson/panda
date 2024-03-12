import { useState } from "react";
import { View, CoverImage, Picker } from "@tarojs/components";
import { Button } from "@antmjs/vantui";

export default function Index() {
  const [selector] = useState(["美国", "中国", "巴西", "日本"]);
  const [selectorChecked, setSelectorChecked] = useState("");

  const onChange = (e) => {
    setSelectorChecked(selector[e.detail.value]);
  };

  return (
    <>
      <View className="p-[32px] bg-white m-[32px] mb-[32px] rounded-[12px]">
        <View className="w-full">
          <View className="mb-[48px]">电子合同（0）</View>
          <View className="flex flex-col items-center justify-center">
            <View className="text-[24px] text-gray-400">还没有签约的合同</View>
            <View className="text-[24px] text-gray-400 mb-[16px]">
              可点击下方签署远程按钮
            </View>
            <Button className="m-0 mb-[32px]" color="#1d20a4">
              +签署远程电子合同
            </Button>
          </View>
        </View>
      </View>
      {/*<View className="p-[32px] bg-white m-[32px] mb-[32px] rounded-[12px]">
        <View className="w-full">
          <View className="mb-[32px] flex items-center justify-between">
            <View>电子合同（1）</View>
            <Button className="m-0" color="#1d20a4">
              +创建电子合同
            </Button>
          </View>
          <View className="flex flex-col border border-gray-300 border-solid rounded-[8px] p-[32px]">
            <View className="mb-[24px]">通用版</View>
            <View className="text-[24px] text-gray-400 mb-[8px]">
              门店：未签约
            </View>
            <View className="text-[24px] text-gray-400 mb-[8px]">
              客户：（未签约）
            </View>
            <View className="text-[24px] text-gray-400 mb-[16px]">
              家政员：（未签约）
            </View>
            <View className="flex justify-between">
              <View className="text-[24px] text-gray-400">YY 2023</View>
              <View className="text-[24px] text-gray-400">实名认证签署</View>
            </View>
          </View>
        </View>
  </View> */}
      <View className="p-[32px] bg-white m-[32px] mb-[32px] rounded-[12px]">
        <View className="w-full">
          <View className="mb-[48px]">上传纸质合同图片（0）</View>
          <View>
            <Button className="m-0" color="#1d20a4">
              添加照片
            </Button>
          </View>
        </View>
      </View>
    </>
  );
}
