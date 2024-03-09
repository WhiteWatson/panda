import { useState } from "react";
import { View, CoverImage, Picker } from "@tarojs/components";
import { Cell } from "@antmjs/vantui";

export default function Index() {
  const [selector] = useState(["美国", "中国", "巴西", "日本"]);
  const [selectorChecked, setSelectorChecked] = useState("");

  const onChange = (e) => {
    setSelectorChecked(selector[e.detail.value]);
  };

  return (
    <View className="">
      <Cell title="添加新家政员" isLink />
    </View>
  );
}
