import cls from "classnames";
import { useState } from "react";
import { View, CoverImage, Picker } from "@tarojs/components";

export default function Index({
  contractFilter,
  selectConditions,
  setContractFilter,
  filter,
}) {
  const statusSelector =
    selectConditions?.conStatusCondition?.map((i) => i.text) || [];
  const contractSelector =
    selectConditions?.electContract?.map((i) => i.text) || [];

  const [statusSelectorChecked, setStatusSelectorChecked] = useState("");
  const [contractSelectorChecked, setContractSelectorChecked] = useState("");

  const onChange = (e) => {
    let value = statusSelector[e.detail.value];
    setStatusSelectorChecked(value);
    filter((item) => item.contractStateShow === value);
  };
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
            if (contractFilter === "start") {
              filter(() => true);
              setContractFilter("");

              return;
            }
            setContractFilter("start");
            //conSignDate距当前时间小于一个月
            filter((item) => {
              let now = new Date();
              let signDate = item.conSignDate;
              let diff = now - signDate;
              return diff < 30 * 24 * 3600 * 1000;
            });
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
            if (contractFilter === "expiring") {
              filter(() => true);
              setContractFilter("");

              return;
            }
            setContractFilter("expiring");
            //conEndDate距当前时间小于一个月
            filter((item) => {
              let now = new Date();
              let endDate = item.conEndDate;
              let diff = endDate - now;
              return diff < 30 * 24 * 3600 * 1000;
            });

          }}
        >
          快到期
        </View>
      </View>
    </View>
  );
}
