import React, { Component } from "react";
import PullRequestChart from "../../components/pullRequestChart/PullRequestChart.js";
import IssueChart from "../../components/issueChart/IssueChart.js";
import { Fade } from "react-reveal";
import "./OpensourceCharts.css";

class OpensourceCharts extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main-div">
        <div className="os-charts-header-div">
          <Fade bottom duration={2000} distance="20px"></Fade>
        </div>
        <div className="os-charts-body-div"></div>
      </div>
    );
  }
}

export default OpensourceCharts;
