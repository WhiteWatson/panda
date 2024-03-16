import { useEffect, useMemo, useState } from "react";
import Taro, { useDidShow, useRouter } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtSearchBar, AtButton, AtIcon } from "taro-ui";
import { useSelector, useDispatch } from "react-redux";
import ScreenBar from "./components/ScreenBar";
import ContractCard from "./components/ContractCard";
import { getContractSelectCondition, getHouseKeeperList } from "@/api";

export default function Index() {
  const router = useRouter();
  const isSelect = router.params.isSelect;
  const [searchWord, setSearchWord] = useState("");
  const [keeperList, setKeeperList] = useState([
    { name: "丫丫" },
    { name: "笨笨" },
  ]);

  const page = useMemo(() => Taro.getCurrentInstance().page, []);
  const userInfo = useSelector((state) => state.user.userInfo);

  console.log(userInfo, "userInfo");
  useDidShow(() => {
    const tabbar = Taro.getTabBar(page);
    tabbar?.setSelected(2);
  });
  useEffect(() => {
    const _callAPI = async () => {
      // const data = await getHouseKeeperList({
      //   shopFid: userInfo?.shopFids[0],
      // });
      const data = {
        code: 0,
        message: "success",
        data: {
          total: 8,
          rows: [
            {
              fid: "2c9ee6b783eb85f80183ee47129d0001",
              name: "周敏",
              age: 18,
              sex: 1,
              phoneNum: "15834158563",
              experience: 3,
              hometown: "将府锦苑",
              houseHoldType: "c",
              houseHoldTypeShow: "家政员",
              insureData: null,
              curStatus: 1,
              curStatusShow: "待岗",
            },
            {
              fid: "2c9ee6b7848916cf01848971b1250002",
              name: "白迎红",
              age: 18,
              sex: 1,
              phoneNum: "13400479558",
              experience: 5,
              hometown: "南环路机床厂",
              houseHoldType: "p",
              houseHoldTypeShow: "白班阿姨",
              insureData: null,
              curStatus: 2,
              curStatusShow: "上户中",
            },
            {
              fid: "2c9ee6b7848916cf01848eb88c4b0003",
              name: "小红",
              age: 18,
              sex: 1,
              phoneNum: "18701482472",
              experience: 3,
              hometown: "富力又一城",
              houseHoldType: "a",
              houseHoldTypeShow: "保姆",
              insureData: null,
              curStatus: 1,
              curStatusShow: "待岗",
            },
            {
              fid: "2c9ee6b784b985760184b99f6ce70001",
              name: "小三",
              age: 18,
              sex: 2,
              phoneNum: "18701482472",
              experience: 2,
              hometown: "富力又一城",
              houseHoldType: "a",
              houseHoldTypeShow: "保姆",
              insureData: null,
              curStatus: 1,
              curStatusShow: "待岗",
            },
            {
              fid: "2c9ee6b784b985760184c380d2950008",
              name: "万富艳",
              age: 18,
              sex: 1,
              phoneNum: "13204551625",
              experience: 3,
              hometown: "三井镇前九村4组103号",
              houseHoldType: "a",
              houseHoldTypeShow: "保姆",
              insureData: null,
              curStatus: 2,
              curStatusShow: "上户中",
            },
            {
              fid: "2c9ee6b784b985760184c3b3d008000a",
              name: "曾立兰",
              age: 18,
              sex: 1,
              phoneNum: "19834766597",
              experience: 3,
              hometown: "中央大街59栋5号",
              houseHoldType: "a",
              houseHoldTypeShow: "保姆",
              insureData: null,
              curStatus: 2,
              curStatusShow: "上户中",
            },
            {
              fid: "2c9ee6b784b985760184c832863a000e",
              name: "张超",
              age: 18,
              sex: 1,
              phoneNum: "13171811696",
              experience: 1,
              hometown: "解放村建庆胡同·19号",
              houseHoldType: "s",
              houseHoldTypeShow: "育婴师",
              insureData: null,
              curStatus: 2,
              curStatusShow: "上户中",
            },
            {
              fid: "2c9ee6b784b985760184c84de4e6000f",
              name: "王翠",
              age: 18,
              sex: 1,
              phoneNum: "15135987535",
              experience: 1,
              hometown: "峪镇",
              houseHoldType: "c",
              houseHoldTypeShow: "家政员",
              insureData: null,
              curStatus: 2,
              curStatusShow: "上户中",
            },
          ],
        },
        currentTimestamp: 1709559952975,
      };
      console.log("getHouseKeeperList", data);
      if (data.code == "0") {
        setKeeperList(data.data.rows);
      }
    };
    // if (userInfo) {
    _callAPI();
    // }
  }, [userInfo]);

  const onChange = (value) => {
    setSearchWord(value);
  };

  const addContract = () => {
    Taro.navigateTo({
      url: "/pages/addcontract/index",
    });
  };

  return (
    <View className="index min-h-[100vh] bg-[#f6f6f6] pb-[150px]">
      <AtSearchBar
        value={searchWord}
        onChange={onChange}
        placeholder="请输入手机号或姓名"
      />
      {/* <ScreenBar></ScreenBar> */}
      <View className="p-[24px]">
        {keeperList.map((item, index) => {
          return (
            <ContractCard
              key={index}
              keeperList={item}
              isSelect={isSelect}
            ></ContractCard>
          );
        })}
      </View>
    </View>
  );
}
