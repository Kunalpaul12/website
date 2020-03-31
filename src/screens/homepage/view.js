import React from "react";
import Image from "react-bootstrap/Image";
import userPic from "../../img/user.png";
import "./style.scss";
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
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          height: "100vh"
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 0.55,
            alignSelf: "center",
            alignItems: "center",
            width: "50%",
            //border: "2px solid red",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <p style={{ color: "white", fontSize: 20, alignSelf: "flex-start" }}>
            Hi , I'm Kunal Self taugh <br></br> programer
          </p>
          <p style={{ color: "white" }}>
            Hi , I am a self taught Software Engineer with over 3.7 year of
            experiences in IT Industry. I got graduated from Electronics and
            Telecommunication Engineering field from Mumbai University. I am
            current working for Valuefy Solution, being start up company i got
            opportunity to explore my knowledge in various dimension.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flex: 0.32,
            //border: "2px solid red",
            flexDirection: "column"
          }}
        >
          <Image src={userPic} roundedCircle />
          <div
            style={{
              display: "flex",
              width: "15%",
              borderBottom: "2px solid white"
            }}
          ></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "10%"
            }}
          >
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
