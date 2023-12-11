import { useMemo, useState } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtSearchBar } from "taro-ui";

import ScreenBar from "./components/ScreenBar";

export default function Index() {
  const [searchWord, setSearchWord] = useState("");

  const page = useMemo(() => Taro.getCurrentInstance().page, []);

  useDidShow(() => {
    const tabbar = Taro.getTabBar(page);
    tabbar?.setSelected(3);
  });

  const onChange = (value) => {
    setSearchWord(value);
  };

  return (
    <View className="index min-h-[100vh] bg-[#f6f6f6]">
      <AtSearchBar value={searchWord} onChange={onChange} />
      <View>{searchWord}</View>
      <ScreenBar></ScreenBar>
    </View>
  );
}
