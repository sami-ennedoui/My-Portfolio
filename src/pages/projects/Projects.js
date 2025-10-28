import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./projects.css";

// CHANGED: import your new SVG component
import MobilityImg from "./mobilityIMG";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* CHANGED: use MobilityImg instead of ProjectsImg */}
                <MobilityImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader["title"]}
                </h1>
                <h3
                  className="projects-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader["subtitle"]}
                </h3>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
                {projectsHeader["avatar_link"] && (
                  <div className="projects-buttons-div">
                    <Button
                      text="More Projects"
                      className="project-button"
                      href={projectsHeader["avatar_link"]}
                      newTab={true}
                      theme={theme}
                    />
                  </div>
                )}
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Projects;
