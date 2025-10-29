import React, { Component } from "react";
import "./PullRequests.css";
import { Fade } from "react-reveal";
import PullRequestCard from "../../components/pullRequestCard/PullRequestCard";
import pullRequestsData from "../../shared/opensource/pull_requests.json";

class PullRequests extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <div className="pull-requests-header-div">
          <Fade bottom duration={2000} distance="20px"></Fade>
        </div>
        <div className="pull-request-body-div"></div>
      </div>
    );
  }
}

export default PullRequests;
