import { useEffect, useState } from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { Button } from "@antmjs/vantui";
import { getConSignList } from "@/api";

export default function Index(props) {
  const { contractData } = props;
  const [conSignList, setConSignList] = useState([]);

  const reqConSignList = async () => {
    const { res } = await getConSignList({
      contractCode: contractData.contractCode,
    });
    if (res && res.code == "0") {
      setConSignList(res.data);
    }
  };

  useEffect(() => {
    reqConSignList();
  }, [contractData.contractCode]);

  /**
   * 签署任务状态;1-待签署，2-确认提交，3-待客户签署,阿姨已签署，4-待阿姨签署,客户已签署，5-已完成
   * 1，展示待签署按钮 2，展示待客户签署和待阿姨签署两个按钮 3，只展示待客户签署 4只展示待阿姨签署 5 已完成，不展示按钮
   */

  return (
    <>
      <View className="p-[32px] bg-white m-[32px] mb-[32px] rounded-[12px]">
        <View className="w-full">
          <View className="mb-[30px]">{`电子合同（${
            (conSignList && conSignList?.length) || "0"
          }）`}</View>
          {conSignList?.length > 0 ? (
            conSignList?.map((item, index) => (
              <View className="flex flex-row mb-[20px]">
                <View className="flex flex-col">
                  {`${item.signTemplateName}`}
                </View>
                <View className="flex flex-1">
                  {/* {`${item.signTemplateName}`} */}
                </View>
                <View className="flex flex-none">
                  {(function () {
                    switch (item.signStatus) {
                      case 1:
                        return <Text className="text-[#1d20a4]">去签署</Text>;

                      case 2:
                        return (
                          <>
                            <Text className="text-[#1d20a4] mr-[10px]">待客户签署</Text>
                            <Text className="text-[#1d20a4]">待阿姨签署</Text>
                          </>
                        );

                      case 3:
                        return (
                          <Text className="text-[#1d20a4]">待客户签署</Text>
                        );

                      case 4:
                        return (
                          <Text className="text-[#1d20a4]">待阿姨签署</Text>
                        );

                      case 5:
                        return <Text className="text-green-600">已完成</Text>;

                      default:
                        return null;
                    }
                  })()}
                </View>
              </View>
            ))
          ) : (
            <View className="flex flex-col items-center justify-center">
              <View className="text-[24px] text-gray-400">
                还没有签约的合同
              </View>
              <View className="text-[24px] text-gray-400 mb-[16px]">
                可点击下方签署远程按钮
              </View>
              <Button
                className="m-0 mb-[32px]"
                color="#1d20a4"
                onClick={() => {
                  Taro.navigateTo({
                    url: `/pages/templatelist/index?contractCode=${contractData?.contractCode}`,
                  });
                }}
              >
                +签署远程电子合同
              </Button>
            </View>
          )}
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
