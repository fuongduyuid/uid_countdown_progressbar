import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import orders from "./Orders";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    orders,
  });
