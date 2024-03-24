export const contractTypeOption = ["保姆", "月嫂"];
export const putUpOption = ["提供住宿", "不提供住宿", "均可"];
export const timedReminderOption = [
  "不提醒",
  "3",
  "5",
  "7",
  "10",
  "15",
  "20",
  "30",
];

/*
[
      local: {
        "phoneNumber",
      "customerName",
      "contractType",
      "contractPeriodStart",
      "contractPeriodEnd",
      "salary",
      "salaryDay",
      "customerServiceFee",
      "housekeepingServiceFee",
      houseHoldPersonFid: selectedKeeper.fid,
        houseHoldPersonName: selectedKeeper.name,
        houseHoldPersonPhone: selectedKeeper.phoneNum,
      }
    
    to 
 
    api:
    "contractType":3,
    "conSigDate":"2024-01-21",
    "conStartDate":"2024-01-21",
    "conEndDate":"2024-02-21",
    "shopFid":"8a9efe35835e674801835e675c7b0000",
    "customerUid":"123",
    "customerName":"张三",
    "houseHoldPersonFid":"8afecd4083b76e450183b76e58df0000",
    "houseHoldPersonName":"王亚杰",
    "houseHoldPersonPhone":"18518500021",
    "userPhone":"11111111111",
    "workdays":"28",
    "monthlySalary":"2000",
    "servicePrice":"1000",
    "hkServicePrice":"500"
}

*/
export const formAttributeKeyMapper = (local) => {
  return {
    // contractType: local.contractType,
    // customerName: local.customerName,
    // houseHoldPersonFid: local.houseHoldPersonFid,
    // houseHoldPersonName: local.houseHoldPersonName,
    // houseHoldPersonPhone: local.houseHoldPersonPhone,
    // shopFid: local.shopFid,
    // customerUid: local.customerUid,
    ...local,
    conSigDate: local.contractPeriodStart,
    conStartDate: local.contractPeriodStart,
    conEndDate: local.contractPeriodEnd,
    userPhone: local.phoneNumber,
    workdays: local.salaryDay,
    monthlySalary: local.salary,
    servicePrice: local.customerServiceFee,
    hkServicePrice: local.housekeepingServiceFee,
    contractPeriodStart: undefined,
    contractPeriodEnd: undefined,
    phoneNumber: undefined,
    salaryDay: undefined,
    salary: undefined,
    customerServiceFee: undefined,
    housekeepingServiceFee: undefined,
  };
};
export const formAttributeKeyMapperReverse = (api) => {
  let _res = {
    // contractType: api.contractType,
    // customerName: api.customerName,
    // houseHoldPersonFid: api.houseHoldPersonFid,
    // houseHoldPersonName: api.houseHoldPersonName,
    // houseHoldPersonPhone: api.houseHoldPersonPhone,
    // shopFid: api.shopFid,
    // customerUid: api.customerUid,
    ...api,
    contractPeriodStart: api.conStartDate,
    contractPeriodEnd: api.conEndDate,
    phoneNumber: api.userPhone,
    salaryDay: api.workdays,
    salary: api.monthlySalary,
    customerServiceFee: api.servicePrice,
    housekeepingServiceFee: api.hkServicePrice,
    conStartDate: undefined,
    conEndDate: undefined,
    userPhone: undefined,
    workdays: undefined,
    monthlySalary: undefined,
    servicePrice: undefined,
    hkServicePrice: undefined,
  };
  console.log(api, _res, "formKeyMapper");
  return _res;
};
