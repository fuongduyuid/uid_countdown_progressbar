import React from "react";

const mileStones = [
  { date: "2022-11-25", value: "80%" },
  { date: "2022-11-27", value: "93%" },
];

const ProgressBar = ({ val }) => {
  const steps = mileStones.map(({ date, value }) => {
    return <div key={date} className="barmarker">{`${date}: ${value}`}</div>;
  });

  return (
    <section className="progress-container">
      <div className="barmarker-container">{steps}</div>
      <progress className="progress" max="100" value={val}></progress>
    </section>
  );
};
export default ProgressBar;
