import React from "react";
import CardColumns from "react-bootstrap/CardColumns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faAndroid,
  faApple,
  faUnity,
  faHtml5,
  faCss3,
  faSass,
  faBootstrap,
  faNodeJs,
  faAngular,
  faAws,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import Image from "../../img/mobile";
import CardView from "./component";
import style from "./style";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      innerWidt: 0,
      innerHeight: 0,
    };
  }

  updateDimensions() {
    const { innerWidth, innerHeight } = window;
    if (window.innerWidth < 900) {
      this.setState({ innerWidth, innerHeight });
    } else {
      this.setState({ innerWidth, innerHeight });
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    const { innerWidth } = this.state;
    return (
      <div style={style.container}>
        <div style={style.mobile_header_view}>
          <div
            style={Object.assign({}, style.mobile_text_image_view, {
              width: innerWidth < 900 ? innerWidth - innerWidth / 15 : "85%",
            })}
          >
            <FontAwesomeIcon color="white" size="2x" icon={faMobileAlt} />
            <p style={style.mobile_header_text}>Mobile</p>
          </div>

          <div
            style={Object.assign({}, style.mobile_header_icon_view, {
              width: innerWidth < 900 ? innerWidth + innerWidth / 15 : "15%",
            })}
          >
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? "lg" : "2x"}
              icon={faReact}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? "lg" : "2x"}
              icon={faAndroid}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? "lg" : "2x"}
              icon={faApple}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? "lg" : "2x"}
              icon={faUnity}
            />
          </div>
        </div>
        <CardColumns>
          <CardView
            img={Image.Fino}
            title="Fino"
            des=" This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer."
          />
          <CardView
            img={Image.Invezta}
            title="Invezta"
            des=" This card has supporting text below as a natural lead-in to
            additional content."
          />
          <CardView
            img={Image.Firstblood}
            title="Firstblood"
            des="  This is a wider card with supporting text below as a natural
            lead-in to additional content. This card has even longer content
            than the first to show that equal height action."
          />
          <CardView
            img={Image.Kanopi}
            title="Kanopi"
            des="  This is a wider card with supporting text below as a natural
            lead-in to additional content. This card has even longer content
            than the first to show that equal height action."
          />
          <CardView
            img={Image.Medempower}
            title="Medempower"
            des="   This is a wider card with supporting text below as a natural
            lead-in to additional content. This card has even longer content
            than the first to show that equal height action."
          />
          <CardView
            img={Image.Akuna}
            title="Akuna"
            des="This is a wider card with supporting text below as a natural
            lead-in to additional content. This card has even longer content
            than the first to show that equal height action."
          />
          <CardView
            img={Image.Cipla}
            title="Cipla"
            des="This is a wider card with supporting text below as a natural
            lead-in to additional content. This card has even longer content
            than the first to show that equal height action."
          />
        </CardColumns>
        <div style={style.mobile_header_view}>
          <div
            style={Object.assign({}, style.web_text_image_view, {
              width: innerWidth < 1250 ? innerWidth - innerWidth / 5 : "75%",
            })}
          >
            <FontAwesomeIcon color="white" size="2x" icon={faGlobe} />
            <p style={style.mobile_header_text}>Web </p>
          </div>

          <div
            style={Object.assign({}, style.web_header_icon_view, {
              width: innerWidth < 1250 ? innerWidth + innerWidth / 1.5 : "30%",
            })}
          >
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? "lg" : "2x"}
              icon={faReact}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? "lg" : "2x"}
              icon={faAngular}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? (innerWidth < 361 ? "1x" : "lg") : "2x"}
              icon={faHtml5}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? (innerWidth < 361 ? "1x" : "lg") : "2x"}
              icon={faCss3}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? (innerWidth < 361 ? "1x" : "lg") : "2x"}
              icon={faSass}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? (innerWidth < 361 ? "1x" : "lg") : "2x"}
              icon={faBootstrap}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? (innerWidth < 361 ? "1x" : "lg") : "2x"}
              icon={faNodeJs}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? (innerWidth < 361 ? "1x" : "lg") : "2x"}
              icon={faAws}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? (innerWidth < 361 ? "1x" : "lg") : "2x"}
              icon={faDocker}
            />
          </div>
        </div>
        <CardColumns>
          <CardView
            img={Image.Firstblood}
            title="Firstblood"
            des="  This is a wider card with supporting text below as a natural
            lead-in to additional content. This card has even longer content
            than the first to show that equal height action."
          />
          <CardView
            img={Image.Kanopi}
            title="Kanopi"
            des="  This is a wider card with supporting text below as a natural
            lead-in to additional content. This card has even longer content
            than the first to show that equal height action."
          />
          <CardView
            img={Image.Medempower}
            title="Medempower"
            des="   This is a wider card with supporting text below as a natural
            lead-in to additional content. This card has even longer content
            than the first to show that equal height action."
          />
          <CardView
            img={Image.Akuna}
            title="Akuna"
            des="This is a wider card with supporting text below as a natural
            lead-in to additional content. This card has even longer content
            than the first to show that equal height action."
          />
          <CardView
            img={Image.Cipla}
            title="Cipla"
            des="This is a wider card with supporting text below as a natural
            lead-in to additional content. This card has even longer content
            than the first to show that equal height action."
          />
        </CardColumns>
      </div>
    );
  }
}

export default Project;
