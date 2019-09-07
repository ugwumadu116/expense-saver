import React from "react";
import { Navbar as NavbarBs } from "react-bootstrap";
import { Link } from "react-router-dom";

import NavbarLinks from "./NavbarLanks";

const Navbar = () => {
  return (
    <NavbarBs fluid>
      <NavbarBs.Header>
        <NavbarBs.Brand>
          <Link to="/">Home</Link>
        </NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls="responsive-navbar-nav" />
      </NavbarBs.Header>
      <NavbarBs.Collapse>
        <NavbarLinks />
      </NavbarBs.Collapse>
    </NavbarBs>
  );
};

export default Navbar;
