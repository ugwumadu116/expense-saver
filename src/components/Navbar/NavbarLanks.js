import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class NavbarLinks extends Component {
  render() {
    // const notification = (
    //   <div>
    //     <i className="fa fa-globe" />
    //     <b className="caret" />
    //     <span className="notification">5</span>
    //     <p className="hidden-lg hidden-md">Notification</p>
    //   </div>
    // );
    return (
      <div>
        <Nav className="mr-auto">
          <NavItem href="#features">Features</NavItem>
          <NavItem href="#pricing">Pricing</NavItem>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <MenuItem href="#action/3.1">Action</MenuItem>
            <MenuItem href="#action/3.2">Another action</MenuItem>
            <MenuItem href="#action/3.3">Something</MenuItem>
            <MenuItem href="#action/3.4">Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </div>
    );
  }
}

export default NavbarLinks;
