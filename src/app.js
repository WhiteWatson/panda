import { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./store";
import "./app.scss";

class App extends Component {
  componentDidMount() {
    console.log("Initial state:", store.getState());
  }

  componentDidShow() {}

  componentDidHide() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<span>loading...</span>} persistor={persistor}>
          {this.props.children}
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
