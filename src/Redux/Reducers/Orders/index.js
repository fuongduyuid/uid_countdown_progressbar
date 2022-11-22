import { createAction } from "redux-actions";
import actionTyper from "redux-actiontyper";
import typeToReducer from "type-to-reducer";
import { toast } from "react-toastify";

import { getReport } from "../../../Services/Orders";

const { GET_REPORT } = actionTyper("orders/");

const getReportAction = createAction(GET_REPORT, getReport);

export const actions = { getReportAction };

const initialState = {
  data: [],
  isLoading: false,
};

const pendingActionhandler = (state) => ({
  ...state,
  isLoading: true,
  data: [],
});
const rejectActionHandler = (state) => {
  toast.error("System error");
  return { ...state, isLoading: false };
};

const getReportActionHandler = (state, action) => {
  const { payload } = action;
  return { ...state, isLoading: false, data: payload };
};

export default typeToReducer(
  {
    [getReportAction]: {
      PENDING: pendingActionhandler,
      FULFILLED: getReportActionHandler,
      REJECTED: rejectActionHandler,
    },
  },
  initialState
);
