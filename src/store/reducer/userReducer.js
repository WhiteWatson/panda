const INITIAL_STATE = {
  userInfo: {}
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_USER_INFO':
      return {
        ...state,
        userInfo: action.payload
      };
    default:
      return state;
  }
}
