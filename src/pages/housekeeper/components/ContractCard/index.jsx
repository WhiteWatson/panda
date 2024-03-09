import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { Tag, Button } from "@antmjs/vantui";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedKeeper } from "@/store/action/userAction";
import { BImage } from "@/components";

export default function Index(props) {
  const dispatch = useDispatch();
  const { keeperList, isSelect } = props;

  return (
    <View
      className="index p-[28px] mb-[22px] bg-white rounded-[16px]"
      onClick={() => {
        !isSelect && Taro.navigateTo({ url: "/pages/contractdetail/index" });
      }}
    >
      <View className="flex align-baseline pb-[20px] border-b-[1px] border-[#979797] border-opacity-10">
        <View className="w-[150px] h-[150px] rounded-[8px] overflow-hidden">
          <BImage
            mode="aspectFill"
            src="https://jiazheng.bj.bcebos.com/yaya.png"
          ></BImage>
        </View>
        <View className="ml-[30px] flex-1">
          <View className="flex justify-between mb-[14px]">
            <View className="text-[30px]">{keeperList.name}</View>
            <View className="border-[2px] border-[#F7B500] rounded-[4px] px-[10px] text-[#F7B500] text-[22px] ">
              {keeperList.curStatusShow}
            </View>
          </View>
          <View className="text-[26px] text-black/50 mb-[8px] flex gap-8 items-center">
            <View>{keeperList.age}岁</View>
            <View>|</View>
            <View>{keeperList.experience}年经验</View>
            <View>|</View>
            <View>{keeperList.hometown}人</View>
          </View>
          <View className="text-[26px] text-black">
            <Tag plain type="success">
              {keeperList.houseHoldTypeShow}
            </Tag>
          </View>
        </View>
      </View>
      <View className="flex justify-between items-center mt-[24px]">
        <View className="text-[26px] text-red-500">
          {!keeperList.insureData ? "暂无保险" : "有保险"}
        </View>
        <View className="text-[26px] ">
          {isSelect ? (
            <Button
              type="primary"
              onClick={() => {
                console.log("确认");
                let info = {
                  fid: keeperList.fid,
                  name: keeperList.name,
                  phoneNum: keeperList.phoneNum,
                };
                // Taro.setStorageSync("selectedKeeperInfo", JSON.stringify(info));
                //redux set selectedKeeper
                dispatch(updateSelectedKeeper(info));

                Taro.navigateBack({ data: 1 });
              }}
            >
              确认
            </Button>
          ) : (
            <View className="flex gap-[16px]">
              <Button
                plain
                hairline
                type="primary"
                onTap={() => {
                  console.log("1111");
                }}
              >
                分享
              </Button>
              <Button type="primary">打电话</Button>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
