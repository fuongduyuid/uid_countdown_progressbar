import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty, last } from "lodash";

import { actions } from "../Redux/Reducers/Orders";
import Timeline from "../Components/MediumProgressBar/Timeline.component";

const { getReportAction: getReport } = actions;

const testData = [
  { date: "Nov 20", percentage: 20 },
  { date: "Nov 21", percentage: 32.76 },
  { date: "Nov 22", percentage: 100 },
];

const ProgressContainer = () => {
  //   const dispatch = useDispatch();
  //   const { data, isLoading } = useSelector((state) => state.orders);
  //   useEffect(() => {
  //     dispatch(getReport());
  //   }, []);
  const data = testData;
  return (
    <div>
      {/* <ProgressBar
        bgcolor="orange"
        progress={last(data).percentage}
        height={30}
      /> */}
      <Timeline data={data} progress={last(data).percentage} />
    </div>
  );
};

export default ProgressContainer;
