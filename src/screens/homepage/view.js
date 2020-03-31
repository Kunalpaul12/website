import React from "react";
import Image from "react-bootstrap/Image";
import userPic from "../../img/user.png";
import "./style.scss";
import style from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGithubSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={style.container}>
        <div style={style.des_view}>
          <p style={style.header_text}>
            Hi , I'm Kunal Self taugh <br></br> programer
          </p>
          <p style={style.des_text}>
            Hi , I am a self taught Software Engineer with over 3.7 year of
            experiences in IT Industry. I got graduated from Electronics and
            Telecommunication Engineering field from Mumbai University. I am
            current working for Valuefy Solution, being start up company i got
            opportunity to explore my knowledge in various dimension.
          </p>
        </div>
        <div style={style.img_social_button_view}>
          <Image src={userPic} roundedCircle />
          <div style={style.line}></div>
          <div style={style.button_view}>
            <FontAwesomeIcon
              onClick={() => {
                window.open(
                  "https://www.facebook.com/kunal.pal.5621",
                  "_blank"
                );
              }}
              color="white"
              size="lg"
              icon={faFacebookSquare}
            />
            <FontAwesomeIcon
              onClick={() => {
                window.open("https://github.com/Kunalpaul12", "_blank");
              }}
              color="white"
              size="lg"
              icon={faGithubSquare}
            />
            <FontAwesomeIcon
              onClick={() => {
                window.open("https://www.linkedin.com/in/kunaldev", "_blank");
              }}
              color="white"
              size="lg"
              icon={faLinkedin}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
