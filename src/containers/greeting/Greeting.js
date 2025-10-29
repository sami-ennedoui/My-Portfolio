import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import { greeting, contactPageData } from "../../portfolio.js";
const ContactData = contactPageData.contactSection;
export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="My CV in english "
                  newTab={true}
                  href={
                    "https://drive.google.com/file/d/1SkaZfELr1ZTXXJNYTbpUTa4aQqmr1P1K/view?usp=sharing"
                  }
                  className="cve-btn"
                  theme={theme}
                />
                <Button
                  text="My CV in french "
                  newTab={true}
                  href={
                    "https://drive.google.com/file/d/1qNYHHtTrl_sxr3dEzvkrtfkf3AdJWPXB/view?usp=sharing"
                  }
                  className="cvf-btn"
                  theme={theme}
                />
              </div>
              <div className="elevator-pitch-btn">
                <Button
                  text=" 🛗 My elevator pitch"
                  newTab={true}
                  href={
                    "https://drive.google.com/file/d/1BS6pu_0p7us9YINA7HFZIKzwBHkJs_Cn/view?usp=sharing"
                  }
                  className="elv-ptch"
                  theme={theme}
                />
              </div>
            </div>
          </div>
          <div className="contact-heading-img-div">
            <img
              src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
              alt=""
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
