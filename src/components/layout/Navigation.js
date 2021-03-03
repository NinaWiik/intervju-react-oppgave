import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import Logo from "../../logo.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import InfectionControl from "../admin/InfectionControl";
import Home from "../home/Home";

function Navigation() {
  return (
    <Router>
      <Navbar variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img src={Logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </Nav>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin" component={InfectionControl} />
        </Switch>
      </Container>
    </Router>
  );
}

export default Navigation;
