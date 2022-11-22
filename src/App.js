import React from "react";
import { Provider } from "react-redux";

import "react-toastify/dist/ReactToastify.min.css";
import store from "./Redux";
import "./App.css";
import ProgressContainer from "./Containers/Progress.container";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h3 className="heading">UID - Trendy Project Countdown</h3>
        <ProgressContainer />
      </Provider>
    </div>
  );
}

export default App;
