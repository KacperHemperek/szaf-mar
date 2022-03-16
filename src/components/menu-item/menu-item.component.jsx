import React from "react";

import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ url, title, history, match, img }) => {
  return (
    <div
      className="menu-item"
      onClick={() => {
        history.push(`${match.url}` + url);
      }}
    >
      <h1>{title}</h1>
      <div className="img-container">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
