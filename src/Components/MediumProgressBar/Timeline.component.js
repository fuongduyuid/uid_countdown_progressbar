import React from "react";
import { map, find } from "lodash";
import { useSelector } from "react-redux";
import classNames from "classnames";

import "./Timeline.component.css";

const mileStones = [
  { date: "Nov 20", percentage: 19, text: "10k orders" },
  { date: "Nov 22", percentage: 80, text: "30k orders" },
  { date: "Nov 26", percentage: 94, text: "30k orders" },
];

const createMilestoneStyle = (percent) => ({
  position: "abosolute",
  left: `${percent}%`,
});
const MileStone = ({ date, percentage, text, data }) => {
  const isAchived = find(
    data,
    (i) => i.date <= date && i.percentage >= percentage
  );
  const isFailed = find(
    data,
    (i) => i.date >= date && i.percentage < percentage
  );

  const finalContentClassnames = classNames({
    "timeline-item": true,
    achived: isAchived,
    failed: isFailed,
  });
  const styleObj = createMilestoneStyle(percentage);
  return (
    <div className={finalContentClassnames} style={styleObj}>
      <div className="timeline-content">{`${date}: ${text}`}</div>
    </div>
  );
};
const Timeline = ({ data, progress }) => {
  return (
    <div className="timeline">
      <div
        className="timeline-progress"
        style={{ width: `${progress || 0}%` }}
      ></div>
      <div
        className="text-wrapper"
        style={{
          position: "relative",
          textAlign: "left",
          left: "100%",
        }}
      >
        {`${progress || 0}%`}
      </div>
      <div className="timeline-items">
        {map(mileStones, ({ date, percentage, text }) => (
          <MileStone
            date={date}
            percentage={percentage}
            text={text}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
