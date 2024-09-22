import { useEffect, useMemo, useState } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtSearchBar, AtButton, AtIcon } from "taro-ui";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import ScreenBar from "./components/ScreenBar";
import ContractCard from "./components/ContractCard";
import { getContractSelectCondition, getContractList } from "@/api";

import { updateConditions } from "@/store/action/userAction";
import { Button } from "@antmjs/vantui";
import { formAttributeKeyMapperReverse } from "../addcontract/constant";

export default function Index() {
  const [searchWord, setSearchWord] = useState("");
  const [contractData, setContractData] = useState([]);
  //filtered contract data
  const [filteredContractData, setFilteredContractData] = useState([]);
  const [selectConditions, setSelectConditions] = useState({});
  const [contractFilter, setContractFilter] = useState("");
  const page = useMemo(() => Taro.getCurrentInstance().page, []);

  // 需要登录才能进入的页面需要加登录态验证逻辑
  const userInfo = useSelector((state) => state.user.userInfo);
  const companyInfo = useSelector((state) => state.user.companyInfo);
  useEffect(() => {
    if (!userInfo) {
      Taro.redirectTo({
        url: "/pages/login/index",
      });
    }
  }, [userInfo]);

  useEffect(() => {
    if (companyInfo && companyInfo.authStatus === 0) {
      return Taro.atMessage({
        message: "未进行企业认证",
        type: "warning",
      });
    }
  }, [companyInfo]);

  const dispatch = useDispatch();
  useDidShow(() => {
    const tabbar = Taro.getTabBar(page);
    tabbar?.setSelected(3);
  });
  Taro.useDidShow(() => {
    const _callAPI = async () => {
      const { res } = await getContractList({
        shopFid: userInfo?.shopFids[0],
      });

      if (res.code == "0") {
        setContractData(res.data.rows);
        setFilteredContractData(res.data.rows);
      }
    };
    if (userInfo) {
      _callAPI();
    }
  });
  useEffect(async () => {
    const { res } = await getContractSelectCondition();
    if (res.code == "0") {
      dispatch(updateConditions(res.data));
      setSelectConditions(res.data);
    }
  }, []);

  const onChange = (value) => {
    setSearchWord(value);
  };

  const addContract = () => {
    Taro.navigateTo({
      url: `/pages/addcontract/index`,
    });
  };
  const filter = (chunk) => {
    let result = contractData;
    // if (searchWord) {
    //   result = result.filter((item) => {
    //     return item.contractNo.includes(searchWord);
    //   });
    // }
    result = result.filter((item) => {
      return chunk(item);
    });
    setFilteredContractData(result);
  };
  return (
    <View className="index min-h-[100vh] bg-[#f6f6f6] pb-[150px]">
      <AtSearchBar value={searchWord} onChange={onChange} />
      <ScreenBar
        contractFilter={contractFilter}
        selectConditions={selectConditions}
        setContractFilter={setContractFilter}
        filter={filter}
      ></ScreenBar>
      <View className="p-[24px]">
        {filteredContractData.length > 0 &&
          filteredContractData.map((item, index) => {
            return (
              <ContractCard key={index} contractData={item}></ContractCard>
            );
          })}
      </View>
      <View className="add-btn-box fixed bottom-[300px] right-[30px]">
        <AtButton
          className="add-btn rounded-full flex flex-col align-baseline"
          type="primary"
          size="small"
          onClick={() => {
            addContract();
          }}
        >
          <AtIcon value="add" size="30" color="#FFFFFF"></AtIcon>
        </AtButton>
      </View>
    </View>
  );
}
