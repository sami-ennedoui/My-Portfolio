import React, { Component } from "react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class ProjectLanguages extends Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons-languages">
            {this.props.logos.map((logo) => {
              return (
                <OverlayTrigger
                  key={logo.name}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{logo.name}</strong>
                    </Tooltip>
                  }
                >
                  <li
                    className="software-skill-inline-languages"
                    name={logo.skillName}
                  >
                    {logo.imageSrc ? (
                      <img
                        src={logo.imageSrc}
                        alt={logo.name}
                        className="icon-img"
                        style={{ width: "8px", height: "8px" }}
                      />
                    ) : (
                      <span
                        className="iconify"
                        data-icon={logo.iconifyClass}
                        data-inline="false"
                        style={
                          logo.iconifyClass === "simple-icons:amd"
                            ? { width: "48px", height: "48px" }
                            : { width: "32px", height: "32px" }
                        }
                      ></span>
                    )}
                  </li>
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectLanguages;
