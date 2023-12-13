import { useState } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Input, Picker, Button } from "@tarojs/components";
import { AtButton, AtInput, AtForm, AtSelect, AtRange } from "taro-ui";
import "./index.scss";

export default function Index() {
  const [formData, setFormData] = useState({
    phoneNumber: "", // 客户手机
    customerName: "", // 客户姓名
    contractType: "", // 合同类型
    contractPeriodStart: "", // 合同期限开始
    contractPeriodEnd: "", // 合同期限结束
    servicePersonnel: "", // 服务人员
    salary: "", // 家政员工资
    salaryDay: "", // 月工作天数
    customerServiceFee: "", // 客户服务费
    housekeepingServiceFee: "", // 家政员服务费
  });

  const topFormRanderList = [
    {
      name: "phoneNumber",
      title: "客户手机",
      type: "phone",
      placeholder: "输入客户手机",
      required: true,
    },
    {
      name: "customerName",
      title: "客户姓名",
      type: "text",
      placeholder: "输入客户姓名",
      required: true,
    },
  ];

  const midFormRanderList = [
    {
      name: "contractType",
      title: "合同类型",
      type: "picker",
      placeholder: "选择合同类型",
      required: true,
    },
    {
      name: "contractPeriodStart",
      title: "合同期限",
      type: "timepicker",
      placeholder: "选择合同开始时间",
      required: true,
    },
    {
      name: "contractPeriodEnd",
      type: "timepicker",
      placeholder: "选择合同结束时间",
      required: true,
    },
    {
      name: "servicePersonnel",
      title: "服务人员",
      type: "link",
      placeholder: "选择服务人员",
      required: true,
    },
    {
      name: "salary",
      title: "家政员工资(元/月)",
      type: "digit",
      placeholder: "输入家政员工资",
      required: true,
    },
    {
      name: "salaryDay",
      type: "number",
      placeholder: "输入家政员每月工作天数",
      required: true,
    },
    {
      name: "customerServiceFee",
      title: "客户服务费(元)",
      type: "digit",
      placeholder: "输入客户服务费",
      required: true,
    },
    {
      name: "housekeepingServiceFee",
      title: "家政员服务费(元)",
      type: "digit",
      placeholder: "输入家政员服务费",
      required: true,
    },
  ];

  const [formRanderList, setFormRanderList] = useState([]);

  const [formError, setFormError] = useState({
    phoneNumber: false,
    customerName: false,
    contractType: false,
    contractPeriod: false,
    servicePersonnel: false,
    salary: false,
    customerServiceFee: false,
    housekeepingServiceFee: false,
  });

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSelectChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
    setFormError({
      ...formError,
      [key]: false,
    });
  };

  const handleSubmit = () => {
    // 校验必填项
    const requiredFields = [
      "phoneNumber",
      "customerName",
      "contractType",
      "contractPeriod",
      "salary",
      "customerServiceFee",
      "housekeepingServiceFee",
    ];
    const hasError = requiredFields.some((field) => {
      if (!formData[field]) {
        setFormError((prevError) => ({
          ...prevError,
          [field]: true,
        }));
        return true;
      }
      return false;
    });

    if (hasError) {
      Taro.showToast({
        title: "请填写必填项",
        icon: "none",
      });
      return;
    }

    // 处理提交逻辑，可以发送请求等
    console.log("提交的表单数据：", formData);
  };

  return (
    <View className="pt-20 px-20 min-h-[100vh] bg-[#f6f6f6]">
      <AtForm className="!bg-transparent" onSubmit={handleSubmit}>
        <View className="mb-20 rounded-[16px] bg-white border border-transparent">
          {topFormRanderList &&
            topFormRanderList.map((item) => (
              <AtInput
                key={item.name}
                name={item.name}
                title={item.title}
                type={item.type}
                required={item.required}
                placeholder={item.placeholder}
                value={formData[item.name]}
                error={formError[item.name]}
                onChange={(value) => handleInputChange(item.name, value)}
              />
            ))}
        </View>
        <View className="mb-20 rounded-[16px] bg-white border border-transparent">
          {midFormRanderList &&
            midFormRanderList.map((item) => {
              if (item.type === "buffer") {
                return <View key={item.type} style={{ height: "20px" }} />; // 举例：buffer 类型的特殊处理
              } else if (item.type === "picker") {
                return (
                  <Picker
                    key={item.name}
                    mode="selector"
                    range={["选项1", "选项2"]}
                    onChange={(e) =>
                      handleSelectChange(item.name, e.detail.value)
                    }
                  >
                    <View>
                      <AtInput
                        name={item.name}
                        title={item.title}
                        type={item.type}
                        required={item.required}
                        placeholder={item.placeholder}
                        value={formData[item.name]}
                        error={formError[item.name]}
                      />
                    </View>
                  </Picker>
                );
              } else if (item.type === "timepicker") {
                // 处理 timepicker 类型的特殊渲染
                return (
                  <Picker
                    key={item.name}
                    mode="date"
                    onChange={(e) =>
                      handleSelectChange(item.name, e.detail.value)
                    }
                  >
                    <View>
                      <AtInput
                        name={item.name}
                        title={item.title}
                        type={item.type}
                        required={item.required}
                        placeholder={item.placeholder}
                        value={formData[item.name]}
                        error={formError[item.name]}
                      />
                    </View>
                  </Picker>
                );
              } else if (item.type === "link") {
                // 处理 link 类型的特殊渲染
                // ...
              } else {
                return (
                  <AtInput
                    key={item.name}
                    name={item.name}
                    title={item.title}
                    type={item.type}
                    required={item.required}
                    placeholder={item.placeholder}
                    value={formData[item.name]}
                    error={formError[item.name]}
                    onChange={(value) => handleInputChange(item.name, value)}
                  />
                );
              }
            })}
        </View>
        {formRanderList.length > 0 && (
          <View className="mb-20 rounded-[16px] bg-white border border-transparent">
            {formRanderList.map((item) => {
              if (item.type === "buffer") {
                return <View key={item.type} style={{ height: "20px" }} />; // 举例：buffer 类型的特殊处理
              } else if (item.type === "picker") {
                return (
                  <Picker
                    key={item.name}
                    mode="selector"
                    range={["选项1", "选项2"]}
                    onChange={(e) =>
                      handleSelectChange(item.name, e.detail.value)
                    }
                  >
                    <View>
                      <AtInput
                        name={item.name}
                        title={item.title}
                        type={item.type}
                        required={item.required}
                        placeholder={item.placeholder}
                        value={formData[item.name]}
                        error={formError[item.name]}
                      />
                    </View>
                  </Picker>
                );
              } else if (item.type === "timepicker") {
                // 处理 timepicker 类型的特殊渲染
                return (
                  <Picker
                    key={item.name}
                    mode="date"
                    onChange={(e) =>
                      handleSelectChange(item.name, e.detail.value)
                    }
                  >
                    <View>
                      <AtInput
                        name={item.name}
                        title={item.title}
                        type={item.type}
                        required={item.required}
                        placeholder={item.placeholder}
                        value={formData[item.name]}
                        error={formError[item.name]}
                      />
                    </View>
                  </Picker>
                );
              } else if (item.type === "link") {
                // 处理 link 类型的特殊渲染
                // ...
              } else {
                return (
                  <AtInput
                    key={item.name}
                    name={item.name}
                    title={item.title}
                    type={item.type}
                    required={item.required}
                    placeholder={item.placeholder}
                    value={formData[item.name]}
                    error={formError[item.name]}
                    onChange={(value) => handleInputChange(item.name, value)}
                  />
                );
              }
            })}
          </View>
        )}

        <View className="mb-[28px]">
          <View className="text-black/50 text-[24px]">添加以下内容:</View>
          <View></View>
        </View>

        {/* 提交按钮 */}
        <AtButton type="primary" formType="submit">
          保存
        </AtButton>
      </AtForm>
    </View>
  );
}
