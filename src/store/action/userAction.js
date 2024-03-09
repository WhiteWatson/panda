export const updateUserinfo = (userInfo) => {
  return {
    type: 'UPDATE_USER_INFO',
    payload: userInfo
  };
};

export const setUserLogout = () => ({
  type: 'SET_USER_LOGOUT',
});