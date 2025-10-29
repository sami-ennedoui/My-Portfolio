import React, { Component } from "react";
import "./Issues.css";
import { Fade } from "react-reveal";
import IssueCard from "../../components/issueCard/IssueCard";
import issuesData from "../../shared/opensource/issues.json";

class Issues extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <div className="issues-header-div">
          <Fade bottom duration={2000} distance="20px"></Fade>
        </div>
        <div className="issues-body-div"></div>
      </div>
    );
  }
}

export default Issues;
