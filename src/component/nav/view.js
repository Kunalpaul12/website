import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.scss";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../screens/homepage";
import Project from "../../screens/project";
import Skills from "../../screens/skills";
import Contact from "../../screens/contact";

class NavBar extends React.Component {
  style = {
    color: "#ffffff",
  };
  render() {
    return (
      <Router>
        <Navbar>
          <Nav>
            <Link style={this.style} to="/">
              About
            </Link>
            <Link style={this.style} to="/project">
              Projects
            </Link>
            <Link style={this.style} to="/skills">
              Skills
            </Link>
            <Link style={this.style} to="/contact">
              Contact
            </Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default NavBar;
