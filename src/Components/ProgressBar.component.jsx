import React from "react";
import { map } from "lodash";

const mileStones = [
  { date: "Nov 20", percentage: "20%", text: "10k orders" },
  { date: "Nov 24", percentage: "74%", text: "30k orders" },
  { date: "Nov 26", percentage: "100%", text: "30k orders" },
];

const ProgressBar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "90%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: "auto",
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };
  const createMilestoneStyle = (percent) => ({
    position: "relative",
    left: percent,
  });

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
        <div></div>
      </div>
      {/* <div style={{ textAlign: "left", position: "relative" }}>
        {map(mileStones, ({ date, percentage, text }) => (
          <span class="milstone" style={createMilestoneStyle(percentage)}>
            {date}
          </span>
        ))}
      </div> */}
    </div>
  );
};

export default ProgressBar;
