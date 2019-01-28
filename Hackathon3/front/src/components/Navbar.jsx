import React from "react";
import { NavItem, NavLink } from "reactstrap";
import "./Navbar.css";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <nav className="nav">
        <NavItem className="nav-items">
          <NavLink href="/accueil">

            <img
              className="home"
              src="../images/home.png"
              alt="logoNavbar"
              height="40"
              width="40"
            />
          </NavLink>
        </NavItem>
        <NavItem className="nav-items">
          <NavLink href="/communaute">

            <img
              className="community"
              src="../images/community.png"
              alt="logoNavbar"
              height="40"
              width="40"
            />
          </NavLink>
        </NavItem>
        <NavItem className="nav-items">
          <NavLink href="/">
          
            <img
              className="logo"
              src="../images/logo.png"
              alt="logoNavbar"
              height="60"
              width="130"
            />
          </NavLink>
        </NavItem>
        <NavItem className="nav-items">
          <NavLink href="/mes-badges">
       
            <img
              className="trophees"
              src="../images/trophee.png"
              alt="logoNavbar"
              height="40"
              width="40"
            />
          </NavLink>
        </NavItem>
        <NavItem className="nav-items">
          <NavLink href="/mon-compte">
            
            <img
              className="moncompte"
              src="../images/profile.png"
              alt="logoNavbar"
              height="40"
              width="40"
            />
          </NavLink>
        </NavItem>

      </nav>
    );
  }
}
