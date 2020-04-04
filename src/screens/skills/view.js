import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faGlobe,
  faCode,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
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
  faJs,
  faJava,
  faSwift,
  faPython,
  faAws,
  faDocker,
  faGitlab,
  faGithub,
  faBitbucket,
} from "@fortawesome/free-brands-svg-icons";
import style from "./style";

class Skills extends React.Component {
  render() {
    return (
      <div style={style.container}>
        <p style={style.titile_text}>Skils That i learn</p>
        <div style={style.content_web_view}>
          <FontAwesomeIcon color="white" size="2x" icon={faGlobe} />
          <p style={{ color: "white", marginLeft: "1%" }}> Web</p>
          <FontAwesomeIcon
            style={style.icon_view}
            color="white"
            size="2x"
            icon={faReact}
          />
          <FontAwesomeIcon
            style={style.icon_view}
            color="white"
            size="2x"
            icon={faAngular}
          />
          <FontAwesomeIcon
            style={style.icon_view}
            color="white"
            size="2x"
            icon={faHtml5}
          />
          <FontAwesomeIcon
            style={style.icon_view}
            color="white"
            size="2x"
            icon={faCss3}
          />
          <FontAwesomeIcon
            style={style.icon_view}
            color="white"
            size="2x"
            icon={faSass}
          />
          <FontAwesomeIcon
            style={style.icon_view}
            color="white"
            size="2x"
            icon={faBootstrap}
          />
          <FontAwesomeIcon
            style={style.icon_view}
            color="white"
            size="2x"
            icon={faNodeJs}
          />
          <FontAwesomeIcon
            style={style.icon_view}
            color="white"
            size="2x"
            icon={faAws}
          />
          <FontAwesomeIcon
            style={style.icon_view}
            color="white"
            size="2x"
            icon={faDocker}
          />
        </div>
        <div style={style.content_other_view}>
          <FontAwesomeIcon color="white" size="2x" icon={faMobileAlt} />
          <p style={{ color: "white", marginLeft: "1%" }}> Mobile</p>
          <FontAwesomeIcon
            style={style.icon_view}
            color="white"
            size="2x"
            icon={faReact}
          />
          <FontAwesomeIcon
            style={style.icon_view}
            color="white"
            size="2x"
            icon={faAndroid}
          />
          <FontAwesomeIcon
            style={style.icon_view}
            color="white"
            size="2x"
            icon={faApple}
          />
          <FontAwesomeIcon
            style={style.icon_view}
            color="white"
            size="2x"
            icon={faUnity}
          />
        </div>
        <div style={style.content_other_view}>
          <FontAwesomeIcon color="white" size="2x" icon={faCode} />
          <p style={{ color: "white", marginLeft: "1%" }}> Language</p>
          <FontAwesomeIcon
            style={style.icon_view}
            color="white"
            size="2x"
            icon={faJs}
          />
          <FontAwesomeIcon
            style={style.icon_view}
            color="white"
            size="2x"
            icon={faJava}
          />
          <FontAwesomeIcon
            style={style.icon_view}
            color="white"
            size="2x"
            icon={faSwift}
          />
          <FontAwesomeIcon
            style={style.icon_view}
            color="white"
            size="2x"
            icon={faPython}
          />
        </div>
        <div style={style.content_other_view}>
          <FontAwesomeIcon color="white" size="2x" icon={faFolder} />
          <p style={{ color: "white", marginLeft: "1%" }}> Repository</p>
          <FontAwesomeIcon
            style={style.icon_view}
            color="white"
            size="2x"
            icon={faGitlab}
          />
          <FontAwesomeIcon
            style={style.icon_view}
            color="white"
            size="2x"
            icon={faGithub}
          />
          <FontAwesomeIcon
            style={style.icon_view}
            color="white"
            size="2x"
            icon={faBitbucket}
          />
        </div>
      </div>
    );
  }
}

export default Skills;
