import React from "react";
import { ProgressBar } from "react-milestone";
import { find, map } from "lodash";

const mileStones = [
  { date: "2022-11-25", value: "80%" },
  { date: "2022-11-27", value: "93%" },
];

const ProgressBarWithMilestones = ({ value }) => {
  return (
    <ProgressBar
      percentage={value}
      milestoneCount={3}
      Milestone={(milestone) => <div>I am a milestone</div>}
      CurrentMilestone={(milestone) => <div>I am the current milestone</div>}
      CompletedMilestone={(milestone) => <div>I am a completed milestone</div>}
      onMilestoneClick={(milestoneIndex) => {}}
    />
  );
};

export default ProgressBarWithMilestones;
