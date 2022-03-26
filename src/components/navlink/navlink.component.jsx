import React from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";

import "./navlink.styles.scss";

const NavLink = (props) => {
  const regex = new RegExp(props.to, "ig");
  console.log("to: " + props.to);
  console.log("path: " + props.path);

  return (
    <div className={`nav-link ${props.path.match(regex) ? "selected" : ""}`}>
      <Link to={props.to}>{props.children}</Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  path: state.navigation.path,
});

export default connect(mapStateToProps)(NavLink);
