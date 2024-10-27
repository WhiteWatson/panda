import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useSelector } from "react-redux";
import { startSignTask, getTemplatePreviewUrl, getActorSignUrl } from "@/api";
import { useState } from "react";
import moment from "moment";

export default function Index(props) {
  const { templateData, contractCode } = props;
  const companyInfo = useSelector((state) => state.user.companyInfo);
  const userInfo = useSelector((state) => state.user.userInfo);
  const [signTaskId, setSignTaskId] = useState();

  const handleSign = async () => {
    const { res, isNotValid } = await startSignTask({
      signTemplateId: templateData.signTemplateId,
      openCorpId: companyInfo?.openCorpId,
      signTaskSubject: '家政保姆合同',
      contractCode: contractCode
    });

    if (isNotValid) return;

    if (res.data) {
      setSignTaskId(res.data?.signTaskId);
      Taro.navigateTo({
        url: `/pages/webviewpage/index?weburl=${res?.data?.signTaskPreviewUrl}`,
      });
    }
  };

  // const getSignUrl = async (_signTaskId) => {
  //   const { res, isNotValid } = await getActorSignUrl({
  //     signTaskId: _signTaskId,
  //     actorId: userInfo?.actorId,
  //   });

  //   if (isNotValid) return;

  //   if (res.data) {
  //     handlePreview();
  //     // Taro.navigateTo({
  //     //   url: `/pages/webviewpage/index?weburl=${res.data}`,
  //     // });
  //   }
  // };

  const handlePreview = async () => {
    const { res, isNotValid } = await getTemplatePreviewUrl({
      templateId: templateData.signTemplateId,
      openCorpId: companyInfo?.openCorpId,
    });

    if (isNotValid) return;

    if (res.data) {
      Taro.navigateTo({
        url: `/pages/webviewpage/index?weburl=${encodeURIComponent(res.data)}`,
      });
    }
  };

  return (
    <View className="index p-[28px] mb-[22px] bg-white rounded-[16px]">
      <View className="flex justify-between align-baseline">
        <View className="flex-1 border-b-[1px] border-[#979797] border-opacity-10">
          <View className="flex justify-between mb-[14px]">
            <View className="text-[30px]">
              {`${templateData.signTemplateName}`}
            </View>
            <View className="border-[2px] border-[#F7B500] rounded-[4px] px-[10px] text-[#F7B500] text-[22px] ">
              {templateData.contractStateShow}
            </View>
          </View>
          <View className="text-[26px] text-black/50 mb-[8px]">
            {`目录：${templateData.catalogName} 类型：${templateData.businessTypeName}`}
          </View>
          <View className="text-[26px] text-black/50">
            {`创建时间： ${moment(Number(templateData.createTime)).format(
              "YYYY-MM-DD"
            )}`}
          </View>
        </View>
        {/* <View
          className="flex pl-[8px] items-center text-[#0028aa]"
          onClick={() => {
            handlePreview();
          }}
        >
          预览
        </View> */}
        <View
          className="flex pl-[8px] items-center text-[#0028aa]"
          onClick={() => {
            handleSign();
          }}
        >
          去签署
        </View>
      </View>
    </View>
  );
}
