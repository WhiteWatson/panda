import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './reducer/userReducer';

const rootReducer = combineReducers({
  user: userReducer
});

export const store = createStore(rootReducer);
