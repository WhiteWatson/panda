import cls from "classnames";
import { useState } from "react";
import { View, CoverImage, Picker } from "@tarojs/components";

export default function Index({
  contractFilter,
  selectConditions,
  setContractFilter,
}) {
  const statusSelector =
    selectConditions?.conStatusCondition?.map((i) => i.text) || [];
  const contractSelector =
    selectConditions?.electContract?.map((i) => i.text) || [];

  const [statusSelectorChecked, setStatusSelectorChecked] = useState("");
  const [contractSelectorChecked, setContractSelectorChecked] = useState("");

  console.log(selectConditions, "selectConditions");
  const onChange = (e) => {
    setStatusSelectorChecked(statusSelector[e.detail.value]);
  };
  console.log("screen bar rerender");
  return (
    <View className="index flex justify-between py-[20px] px-[30px] bg-white border-t border-[#979797] border-opacity-10">
      <View>筛选:</View>
      <View className="relative inline-block">
        <Picker mode="selector" range={statusSelector} onChange={onChange}>
          <View className="flex items-center">
            <View>{statusSelectorChecked || "保险状态"}</View>
            <CoverImage
              className="ml-[4px] w-[20px]"
              src="https://jiazheng.bj.bcebos.com/sanjiao.png"
            />
          </View>
        </Picker>
      </View>
      <View className="relative inline-block">
        <Picker
          mode="selector"
          range={contractSelector}
          onChange={(e) => {
            setContractSelectorChecked(contractSelector[e.detail.value]);
          }}
        >
          <View className="flex items-center">
            <View>{contractSelectorChecked || "电子合同"}</View>
            <CoverImage
              className="ml-[4px] w-[20px]"
              src="https://jiazheng.bj.bcebos.com/sanjiao.png"
            />
          </View>
        </Picker>
      </View>
      <View className="flex gap-1">
        <View
          className={cls({
            "text-[#0028aa]": contractFilter === "start",
          })}
          onClick={() => {
            setContractFilter("start");
            console.log("start change");
          }}
        >
          刚签约
        </View>
        <View>/</View>
        <View
          className={cls({
            "text-[#0028aa]": contractFilter === "expiring",
          })}
          onClick={() => {
            setContractFilter("expiring");
            console.log("start expiring");
          }}
        >
          快到期
        </View>
      </View>
    </View>
  );
}
