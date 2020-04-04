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
  render() {
    return (
      <div style={style.container}>
        <div style={style.mobile_header_view}>
          <div style={style.mobile_text_image_view}>
            <FontAwesomeIcon color="white" size="2x" icon={faMobileAlt} />
            <p style={style.mobile_header_text}>Mobile</p>
          </div>

          <div style={style.mobile_header_icon_view}>
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size="2x"
              icon={faReact}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size="2x"
              icon={faAndroid}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size="2x"
              icon={faApple}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size="2x"
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
          <div style={style.web_text_image_view}>
            <FontAwesomeIcon color="white" size="2x" icon={faGlobe} />
            <p style={style.mobile_header_text}>Web </p>
          </div>

          <div style={style.web_header_icon_view}>
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size="2x"
              icon={faReact}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size="2x"
              icon={faAngular}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size="2x"
              icon={faHtml5}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size="2x"
              icon={faCss3}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size="2x"
              icon={faSass}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size="2x"
              icon={faBootstrap}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size="2x"
              icon={faNodeJs}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size="2x"
              icon={faAws}
            />
            <FontAwesomeIcon
              style={style.fontawesome_view}
              color="white"
              size="2x"
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
