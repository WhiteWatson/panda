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

export default function Index() {
  const [searchWord, setSearchWord] = useState("");
  const [contractData, setContractData] = useState([]);
  const [selectConditions, setSelectConditions] = useState({});
  const [contractFilter, setContractFilter] = useState("");
  const page = useMemo(() => Taro.getCurrentInstance().page, []);

  // 需要登录才能进入的页面需要加登录态验证逻辑
  const userInfo = useSelector((state) => state.user.userInfo);
  useEffect(() => {
    if (!userInfo) {
      Taro.redirectTo({
        url: '/pages/login/index',
      });
    }
  }, [userInfo]);
  
  const dispatch = useDispatch();
  console.log(userInfo, "userInfo");
  useDidShow(() => {
    const tabbar = Taro.getTabBar(page);
    tabbar?.setSelected(3);
  });
  Taro.useDidShow(() => {
    const _callAPI = async () => {
      const { res } = await getContractList({
        shopFid: userInfo?.shopFids[0],
      });
      console.log("getContractList", res);
      if (res.code == "0") {
        setContractData(res.data.rows);
      }
    };
    if (userInfo) {
      _callAPI();
    }
  });
  console.log(contractData);
  useEffect(async () => {
    // const { res } = await getContractSelectCondition();
    let res = {
      code: 0,
      message: "success",
      data: {
        conEndCondition: [
          { value: 1, text: "上周", isSelect: null },
          { value: 2, text: "本周", isSelect: null },
          { value: 3, text: "本月", isSelect: null },
          { value: 4, text: "下月", isSelect: null },
          { value: 5, text: "自定义", isSelect: null },
        ],
        conStatusCondition: [
          { value: "fwz", text: "服务中", isSelect: null },
          { value: "yqx", text: "已取消", isSelect: null },
          { value: "yqy", text: "已签约", isSelect: null },
          { value: "ytf", text: "已退费", isSelect: null },
          { value: "ywc", text: "已完成", isSelect: null },
          { value: "yzt", text: "已暂停", isSelect: null },
        ],
        conStartCondition: [
          { value: 1, text: "上周", isSelect: null },
          { value: 2, text: "本周", isSelect: null },
          { value: 3, text: "本月", isSelect: null },
          { value: 4, text: "下月", isSelect: null },
          { value: 5, text: "自定义", isSelect: null },
        ],
        electContract: [
          { value: 1, text: "不限", isSelect: null },
          { value: 2, text: "未签署", isSelect: null },
          { value: 3, text: "成功签署", isSelect: null },
        ],
        insure: [
          { value: 1, text: "不限", isSelect: null },
          { value: 2, text: "保险正常", isSelect: null },
          { value: 3, text: "未购买保险", isSelect: null },
          { value: 4, text: "保险期限少与合同期", isSelect: null },
        ],
        selectConStatus: [
          { value: 1, text: "快到期", isSelect: null },
          { value: 2, text: "刚签约", isSelect: null },
        ],
        businessFromChannel: [
          { value: 1, text: "客户转介绍", isSelect: null },
          { value: 2, text: "公司400电话", isSelect: null },
          { value: 3, text: "系统分配", isSelect: null },
          { value: 4, text: "公司指派", isSelect: null },
          { value: 5, text: "阿姨简历", isSelect: null },
          { value: 6, text: "地推", isSelect: null },
          { value: 7, text: "美团咨询", isSelect: null },
          { value: 8, text: "老客户", isSelect: null },
          { value: 9, text: "美团来电", isSelect: null },
          { value: 10, text: "地图", isSelect: null },
          { value: 11, text: "餐饮群", isSelect: null },
          { value: 12, text: "微网站", isSelect: null },
          { value: 13, text: "自主需求", isSelect: null },
          { value: 14, text: "阿姨转介绍", isSelect: null },
        ],
        conTypeCondition: [
          { value: 1, text: "保姆", isSelect: null },
          { value: 2, text: "厨师", isSelect: null },
          { value: 3, text: "家政员", isSelect: null },
          { value: 4, text: "产后修复师", isSelect: null },
          { value: 5, text: "小儿推拿师", isSelect: null },
          { value: 6, text: "催乳师", isSelect: null },
          { value: 7, text: "保安", isSelect: null },
          { value: 8, text: "家教", isSelect: null },
          { value: 9, text: "指导师", isSelect: null },
          { value: 10, text: "管家", isSelect: null },
          { value: 11, text: "早教", isSelect: null },
          { value: 12, text: "保洁", isSelect: null },
          { value: 13, text: "育儿嫂", isSelect: null },
          { value: 14, text: "老年护理", isSelect: null },
          { value: 15, text: "小时工", isSelect: null },
          { value: 16, text: "白班阿姨", isSelect: null },
          { value: 17, text: "别墅家务", isSelect: null },
          { value: 18, text: "病人护理", isSelect: null },
          { value: 19, text: "育婴师", isSelect: null },
          { value: 20, text: "其他", isSelect: null },
        ],
      },
      currentTimestamp: 1709473611941,
    };
    console.log(res);
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
      url: "/pages/addcontract/index",
    });
  };

  return (
    <View className="index min-h-[100vh] bg-[#f6f6f6] pb-[150px]">
      <AtSearchBar value={searchWord} onChange={onChange} />
      <ScreenBar
        contractFilter={contractFilter}
        selectConditions={selectConditions}
        setContractFilter={setContractFilter}
      ></ScreenBar>
      <View className="p-[24px]">
        {contractData.length &&
          contractData.map((item, index) => {
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
