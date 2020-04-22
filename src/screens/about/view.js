import React from "react";
import Image from "react-bootstrap/Image";
import userPic from "../../img/user.png";
import "./style.scss";
import style from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faSoild from "@fortawesome/free-solid-svg-icons";
import * as faBrand from "@fortawesome/free-brands-svg-icons";
import { link } from "../../public/screen/about";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={style.container}>
        <div style={style.des_view}>
          <p style={style.title_text}>
            “‎Someone's opinion of you does not have to become your reality.”
          </p>
          <p style={style.header_text}>
            Hi , I'm Kunal a Self taught <br></br> programmer{" "}
            <FontAwesomeIcon color="pink" size="sm" icon={faSoild.faCode} />
          </p>
          <p style={style.des_text}>
            First and foremost, I love writing code. Ever since writing my first
            program and manipulating it to get desired output, it was almost
            magic being able to get the computer to do whatever I wanted just by
            typing in these funny little symbols ,limited only by my own
            imagination and ingenuity. Being an electronic and telecommunication
            engineer and working as a software developer provide me a greater
            control over hardware and software.
          </p>
        </div>
        <div style={style.img_social_button_view}>
          <Image src={userPic} roundedCircle />
          <div style={style.line}></div>
          <div style={style.button_view}>
            <FontAwesomeIcon
              onClick={() => {
                window.open(link.facebook, "_blank");
              }}
              color="white"
              size="lg"
              icon={faBrand.faFacebookSquare}
            />
            <FontAwesomeIcon
              onClick={() => {
                window.open(link.github, "_blank");
              }}
              color="white"
              size="lg"
              icon={faBrand.faGithubSquare}
            />
            <FontAwesomeIcon
              onClick={() => {
                window.open(link.linkedin, "_blank");
              }}
              color="white"
              size="lg"
              icon={faBrand.faLinkedin}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
