import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as BootStrap from "react-bootstrap";
import * as faSoild from "@fortawesome/free-solid-svg-icons";
import * as faIcon from "@fortawesome/free-brands-svg-icons";
import style from "./style";
import "./style.css";

const Body = ({ data }) => {
  return data.map((e) => {
    return (
      <tr>
        <td style={style.row_first}>
          <FontAwesomeIcon color="white" size="2x" icon={faIcon[e.iconName]} />{" "}
          {e.name}
        </td>
        <td>{e.level}</td>
        <td>{e.star}</td>
        <td>{e.year}</td>
      </tr>
    );
  });
};

class Table extends React.Component {
  render() {
    return (
      <BootStrap.Table
        striped
        bordered
        hover
        variant="dark"
        responsive
        size="sm"
      >
        <thead>
          <tr>
            <th style={{ width: "250px" }}>
              <FontAwesomeIcon
                color="white"
                size="2x"
                icon={faSoild[this.props.iconName]}
              />{" "}
              {this.props.name}
            </th>
            <th>Level</th>
            <th>Star</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <Body data={this.props.data} />
        </tbody>
      </BootStrap.Table>
    );
  }
}

export default Table;
