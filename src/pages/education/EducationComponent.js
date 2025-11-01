import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import ProjectsData from "../../shared/opensource/projects.json";
import Button from "../../components/button/Button";
import { competitiveSites } from "../../portfolio";
import { certifications } from "../../portfolio";
import "./EducationComponent.css";
import "../projects/Projects.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assets/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Engineering Course
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  I am currently studying electrical engineering at Toulouse INP
                  - ENSEEIHT which is a leading engineering school in france.
                </h3>
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
          <div className="projects-heading-div">
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                Projects
              </h1>
              <p
                className="projects-header-detail-text"
                style={{ color: theme.secondaryText }}
              >
                {/* You can add a subheading or leave blank */}
              </p>
            </div>
          </div>
          <div className="repo-cards-div-main">
            {ProjectsData.data.map((repo) => (
              <GithubRepoCard repo={repo} key={repo.id} theme={theme} />
            ))}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={greeting.githubProfile}
            newTab={true}
            theme={theme}
          />
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
