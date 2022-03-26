import React, { Component } from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import NavMenu from "../navbar/nav-menu.component";
import { connect } from "react-redux";
import { toggleNavigation } from "../../redux/navigation/navigation.actions.js";

class Header extends Component {
  render() {
    const { toggleNavigation } = this.props;
    return (
      <div className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            Szaf-Mar
          </Link>
          <button className="hamburger" onClick={toggleNavigation}>
            <i className="fa fa-bars"></i>
          </button>
        </div>
        <NavMenu />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleNavigation: () => dispatch(toggleNavigation()),
});

export default connect(null, mapDispatchToProps)(Header);
