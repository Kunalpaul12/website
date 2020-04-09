import React from "react";
import * as Bootstrap from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../../screens/about";
import Project from "../../screens/project";
import Skills from "../../screens/skills";
import Contact from "../../screens/contact";
import style from "./style";

class NavBar extends React.Component {
  render() {
    return (
      <Router>
        <Bootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Bootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Bootstrap.Navbar.Collapse id="responsive-navbar-nav">
            <Bootstrap.Nav className="mr-auto">
              <NavLink
                activeStyle={style.activeLink}
                style={style.linkStyle}
                exact={true}
                to="/"
              >
                About
              </NavLink>
              <NavLink
                activeStyle={style.activeLink}
                style={style.linkStyle}
                to="/project"
              >
                Project
              </NavLink>
              <NavLink
                activeStyle={style.activeLink}
                style={style.linkStyle}
                to="/skill"
              >
                Skills
              </NavLink>
              <NavLink
                activeStyle={style.activeLink}
                style={style.linkStyle}
                to="/contact"
              >
                Contact
              </NavLink>
            </Bootstrap.Nav>
          </Bootstrap.Navbar.Collapse>
        </Bootstrap.Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/skill">
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
