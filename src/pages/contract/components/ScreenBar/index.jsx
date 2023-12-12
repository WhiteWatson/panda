import { useState } from "react";
import { View, CoverImage, Picker } from "@tarojs/components";

export default function Index() {
  const [selector] = useState(["美国", "中国", "巴西", "日本"]);
  const [selectorChecked, setSelectorChecked] = useState("");

  const onChange = (e) => {
    setSelectorChecked(selector[e.detail.value]);
  };

  return (
    <View className="index flex justify-between py-[20px] px-[30px] bg-white border-t border-[#979797] border-opacity-10">
      <View>筛选:</View>
      <View className="relative inline-block">
        <Picker mode="selector" range={selector} onChange={onChange}>
          <View className="flex items-center">
            <View>{selectorChecked || "保险状态"}</View>
            <CoverImage
              className="ml-[4px] w-[20px]"
              src="https://jiazheng.bj.bcebos.com/sanjiao.png"
            />
          </View>
        </Picker>
      </View>
      <View className="relative inline-block">
        <Picker mode="selector" range={selector} onChange={onChange}>
          <View className="flex items-center">
            <View>{selectorChecked || "电子合同"}</View>
            <CoverImage
              className="ml-[4px] w-[20px]"
              src="https://jiazheng.bj.bcebos.com/sanjiao.png"
            />
          </View>
        </Picker>
      </View>
      <View>快到期/刚签约</View>
    </View>
  );
}
