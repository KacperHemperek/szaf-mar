import React, { Component } from "react";

import NavLink from "../navlink/navlink.component";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";

import { toggleNavigation } from "../../redux/navigation/navigation.actions";

import "./nav-menu.styles.scss";

const NavMenu = ({ navigationIsOpen }) => {
  return (
    <nav className={`nav-main ${navigationIsOpen ? "show" : ""}`}>
      <ul id="nav-ul">
        <li>
          <NavLink to="/kuchnie">Kuchnie</NavLink>
        </li>
        <li>
          <NavLink to="/szafy">Szafy</NavLink>
        </li>
        <li>
          <NavLink to="/biura">Biura</NavLink>
        </li>
        <li>
          <NavLink to="/lazienki">Łazienki</NavLink>
        </li>
        <li>
          <a href="tel:+48604069052" className="nav-option">
            +48 604 069 052
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/Szaf-Mar-572231386210625"
            target="blank"
          >
            facebook
          </a>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  navigationIsOpen: state.navigation.navigationIsOpen,
});

export default connect(mapStateToProps)(NavMenu);
