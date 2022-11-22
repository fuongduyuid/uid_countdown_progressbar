import React from "react";
import { map } from "lodash";

const mileStones = [
  { date: "Nov 20", percentage: "20%", text: "10k orders" },
  { date: "Nov 24", percentage: "74%", text: "30k orders" },
  { date: "Nov 26", percentage: "100%", text: "30k orders" },
];

const ProgressBar = () => {
  return (
    <div className="vefs-milestone-wrapper">
      <div className="milestone-container">
        <div className="chart-container">
          <div className="line-container">
            <div className="line"></div>
            <div className="line left" style={{ width: "67%" }}></div>
          </div>

          <div className="dot-container">
            <div className="milestones milestone__10">
              <div className="dot completed colored"></div>
            </div>
            <div className="milestones milestone__25">
              <div className="dot completed colored"></div>
            </div>
            <div className="milestones milestone__50">
              <div className="dot completed colored"></div>
            </div>
            <div className="milestones milestone__80">
              <div className="dot"></div>
            </div>
            <div className="milestones milestone__100">
              <div className="dot"></div>
            </div>
          </div>
        </div>

        <div className="label-container">
          {map(mileStones, (item) => (
            <div key={item.date} className="milestones milestone__10">
              <div className="label colored">{item.percentage}</div>
            </div>
          ))}
          {/* <div class="milestones milestone__10">
            <div class="label colored">10%</div>
          </div>
          <div class="milestones milestone__25">
            <div class="label colored">25%</div>
          </div>
          <div class="milestones milestone__50">
            <div class="label colored">50%</div>
          </div>
          <div class="milestones milestone__80">
            <div class="label">80%</div>
          </div>
          <div class="milestones milestone__100">
            <div class="label">100%</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
