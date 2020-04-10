import React from "react";
import Table from "./component/table";
import style from "./style";
import { data } from "../../public/screen/skills";
import * as Bootstrap from "react-bootstrap";
import "./style.css";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { web, mobile, testing, language, repository } = data;
    return (
      <div style={style.container}>
        <Bootstrap.Tabs defaultActiveKey="web">
          <Bootstrap.Tab tabClassName={"tabClass"} eventKey="web" title="Web">
            <Table iconName={"faGlobe"} name={web.name} data={web.data} />>
          </Bootstrap.Tab>
          <Bootstrap.Tab
            tabClassName={"tabClass"}
            eventKey="mobile"
            title="Mobile"
          >
            <Table
              iconName={"faMobileAlt"}
              name={mobile.name}
              data={mobile.data}
            />
            >
          </Bootstrap.Tab>
          <Bootstrap.Tab
            tabClassName={"tabClass"}
            eventKey="language"
            title="Language"
          >
            <Table
              iconName={"faCode"}
              name={language.name}
              data={language.data}
            />
            >
          </Bootstrap.Tab>
          <Bootstrap.Tab
            tabClassName={"tabClass"}
            eventKey="testing"
            title="Testing"
          >
            <Table
              iconName={"faCogs"}
              name={testing.name}
              data={testing.data}
            />
            >
          </Bootstrap.Tab>

          <Bootstrap.Tab
            tabClassName={"tabClass"}
            eventKey="repository"
            title="Repository"
          >
            <Table
              iconName={"faFolder"}
              name={repository.name}
              data={repository.data}
            />
            >
          </Bootstrap.Tab>
        </Bootstrap.Tabs>
      </div>
    );
  }
}

export default Skills;
