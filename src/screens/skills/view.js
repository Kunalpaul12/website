import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faGlobe,
  faCode,
  faFolder,
  faCogs,
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
  faNode,
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
  faJenkins,
  faJira,
} from "@fortawesome/free-brands-svg-icons";
import style from "./style";

class Skills extends React.Component {
  render() {
    return (
      <div style={style.container}>
        <p style={style.titile_text}>Skils That i learn</p>
        <div style={style.content_web_view}>
          <div style={style.inner_tittle_view}>
            <FontAwesomeIcon color="white" size="2x" icon={faGlobe} />
            <p style={{ color: "white", marginLeft: "1%" }}> Web</p>
          </div>

          <div
            style={Object.assign({}, style.inner_icon_view, { width: "40%" })}
          >
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
              icon={faNode}
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
        </div>
        <div style={style.content_other_view}>
          <div style={style.inner_tittle_view}>
            <FontAwesomeIcon color="white" size="2x" icon={faMobileAlt} />
            <p style={{ color: "white", marginLeft: "1%" }}> Mobile</p>
          </div>
          <div
            style={Object.assign({}, style.inner_icon_view, { width: "15%" })}
          >
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
        </div>
        <div style={style.content_other_view}>
          <div style={style.inner_tittle_view}>
            <FontAwesomeIcon color="white" size="2x" icon={faCode} />
            <p style={{ color: "white", marginLeft: "1%" }}> Language</p>
          </div>
          <div
            style={Object.assign({}, style.inner_icon_view, { width: "15%" })}
          >
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
        </div>
        <div style={style.content_other_view}>
          <div style={style.inner_tittle_view}>
            <FontAwesomeIcon color="white" size="2x" icon={faFolder} />
            <p style={{ color: "white", marginLeft: "1%" }}> Repository</p>
          </div>
          <div
            style={Object.assign({}, style.inner_icon_view, { width: "12%" })}
          >
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
        <div style={style.content_other_view}>
          <div style={style.inner_tittle_view}>
            <FontAwesomeIcon color="white" size="2x" icon={faCogs} />
            <p style={{ color: "white", marginLeft: "1%" }}> Testing</p>
          </div>
          <div
            style={Object.assign({}, style.inner_icon_view, { width: "6%" })}
          >
            <FontAwesomeIcon
              style={style.icon_view}
              color="white"
              size="2x"
              icon={faJenkins}
            />
            <FontAwesomeIcon
              style={style.icon_view}
              color="white"
              size="2x"
              icon={faJira}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
