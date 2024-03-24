import { useCallback, useEffect, useMemo, useState } from "react";
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
  const [keeperList, setKeeperList] = useState([]);

  const page = useMemo(() => Taro.getCurrentInstance().page, []);
  const userInfo = useSelector((state) => state.user.userInfo);

  console.log(userInfo, "userInfo");
  useDidShow(() => {
    const tabbar = Taro.getTabBar(page);
    tabbar?.setSelected(2);
  });
  const _callAPI = useCallback(
    async (params = {}) => {
      const { res, isNotValid } = await getHouseKeeperList({
        shopFid: userInfo?.shopFids?.[0],
        ...params,
      });
      if (isNotValid) {
        Taro.atMessage({
          message: res.message,
          type: "warning",
        });
      }
      if (res.code == "0") {
        setKeeperList(res.data.rows);
      }
    },
    [userInfo]
  );
  useEffect(() => {
    _callAPI();
  }, [_callAPI]);

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
        onActionClick={() => {
          _callAPI({
            phone: searchWord,
          });
        }}
        onClear={() => {
          setSearchWord("");
          _callAPI();
        }}
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
