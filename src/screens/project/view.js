import React from "react";
import CardColumns from "react-bootstrap/CardColumns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faSolid from "@fortawesome/free-solid-svg-icons";
import * as faBrand from "@fortawesome/free-brands-svg-icons";
import Image from "../../img/mobile";
import CardView from "./component";
import style from "./style";
import Des from "../../public/screen/project";

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
            <FontAwesomeIcon
              color="white"
              size="2x"
              icon={faSolid.faMobileAlt}
            />
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
              icon={faBrand.faReact}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? "lg" : "2x"}
              icon={faBrand.faAndroid}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? "lg" : "2x"}
              icon={faBrand.faApple}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? "lg" : "2x"}
              icon={faBrand.faUnity}
            />
          </div>
        </div>
        <CardColumns>
          <CardView img={Image.Fino} title="Fino" des={Des.mobile.fino} />
          <CardView
            img={Image.Invezta}
            title="Invezta"
            des={Des.mobile.invezta}
          />
          <CardView
            img={Image.Firstblood}
            title="Firstblood"
            des={Des.mobile.firstblood}
          />
          <CardView img={Image.Kanopi} title="Kanopi" des={Des.mobile.kanopi} />
          <CardView
            img={Image.Medempower}
            title="Medempower"
            des={Des.mobile.medempower}
          />
          <CardView img={Image.Akuna} title="Akuna" des={Des.mobile.akuna} />
          <CardView img={Image.Cipla} title="Cipla" des={Des.mobile.cipla} />
        </CardColumns>
        <div style={style.mobile_header_view}>
          <div
            style={Object.assign({}, style.web_text_image_view, {
              width: innerWidth < 1250 ? innerWidth - innerWidth / 5 : "75%",
            })}
          >
            <FontAwesomeIcon color="white" size="2x" icon={faSolid.faGlobe} />
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
              icon={faBrand.faReact}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? "lg" : "2x"}
              icon={faBrand.faAngular}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? (innerWidth < 361 ? "1x" : "lg") : "2x"}
              icon={faBrand.faHtml5}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? (innerWidth < 361 ? "1x" : "lg") : "2x"}
              icon={faBrand.faCss3}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? (innerWidth < 361 ? "1x" : "lg") : "2x"}
              icon={faBrand.faSass}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? (innerWidth < 361 ? "1x" : "lg") : "2x"}
              icon={faBrand.faBootstrap}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? (innerWidth < 361 ? "1x" : "lg") : "2x"}
              icon={faBrand.faNodeJs}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? (innerWidth < 361 ? "1x" : "lg") : "2x"}
              icon={faBrand.faAws}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size={innerWidth < 650 ? (innerWidth < 361 ? "1x" : "lg") : "2x"}
              icon={faBrand.faDocker}
            />
          </div>
        </div>
        <CardColumns>
          <CardView
            img={Image.Firstblood}
            title="Firstblood"
            des={Des.web.firstblood}
          />
          <CardView img={Image.Kanopi} title="Kanopi" des={Des.web.kanopi} />
          <CardView
            img={Image.Medempower}
            title="Medempower"
            des={Des.web.medempower}
          />
          <CardView img={Image.Akuna} title="Akuna" des={Des.web.akuna} />
          <CardView img={Image.Cipla} title="Cipla" des={Des.web.cipla} />
        </CardColumns>
      </div>
    );
  }
}

export default Project;
