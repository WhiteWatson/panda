export const updateUserinfo = (userInfo) => {
  return {
    type: "UPDATE_USER_INFO",
    payload: userInfo,
  };
};
export const updateConditions = (conditions) => {
  return {
    type: "UPDATE_CONDITIONS",
    payload: conditions,
  };
};
export const updateSelectedKeeper = (keeper) => {
  return {
    type: "UPDATE_SELECTED_KEEPER",
    payload: keeper,
  };
};

export const setUserLogout = () => ({
  type: 'SET_USER_LOGOUT',
});