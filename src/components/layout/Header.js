import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
export const Header = () => (
  <nav className="navbar ">
    <span className="navbar-brand">
      <FaPizzaSlice />
    </span>
    <ul className="nav justify-content-end">
      <li className="nav-item">Active</li>
      <li className="nav-item">Link</li>
      <li className="nav-item">Link</li>
      <li className="nav-item">Disabled</li>
    </ul>
  </nav>
);
