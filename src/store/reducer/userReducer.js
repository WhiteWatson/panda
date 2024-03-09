const INITIAL_STATE = {
  userInfo: {},
  conditions: {},
  selectedKeeper: {},
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "UPDATE_USER_INFO":
      return {
        ...state,
        userInfo: action.payload,
      };
    case "UPDATE_CONDITIONS":
      return {
        ...state,
        conditions: action.payload,
      };
    case "UPDATE_SELECTED_KEEPER":
      return {
        ...state,
        selectedKeeper: action.payload,
      };
    case 'SET_USER_LOGOUT':
      return { ...state, userInfo: null };
    default:
      return state;
  }
}
