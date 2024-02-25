import { useState } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton, AtImagePicker } from "taro-ui";

export default function Index() {
  const [selector] = useState(["美国", "中国", "巴西", "日本"]);
  const [files, setFiles] = useState([]);
  const [selectorChecked, setSelectorChecked] = useState("");

  const onChange = (files) => {
    setFiles(files);
  };

  const onFail = (mes) => {
    console.log(mes);
  };

  const onImageClick = (index, file) => {
    console.log(index, file);
  };

  return (
    <View className="index">
      <View className="my-[22px] mx-[22px] bg-white rounded-[16px]">
        <View className="title pt-[42px] mx-[36px]">电子合同 (0)</View>
        <View className="contract-none text-center">
          <View className="text-[26px] opacity-50 mt-[78px]">
            还没有签约的合同
          </View>
          <View className="text-[26px] opacity-50 mb-[38px]">
            可点击下方签署远程电子按钮
          </View>
          <View className="mt-[38px] pb-[90px] px-[170px]">
            <AtButton type="primary" size="normal" formType="submit">
              <Text className="text-[30px]">+签署远程电子合同</Text>
            </AtButton>
          </View>
        </View>
      </View>
      <View className="my-[22px] mx-[22px] bg-white rounded-[16px]">
        <View className="title pt-[42px] mx-[36px]">上传纸质合同图片 (0)</View>
        <AtImagePicker
          className="mx-[20px] py-[36px]"
          multiple
          files={files}
          onChange={onChange}
          onFail={onFail}
          onImageClick={onImageClick}
        />
      </View>
    </View>
  );
}
