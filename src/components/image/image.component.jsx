import React from "react";

import "./image.styles.scss";

const Image = ({ img }) => {
  return (
    <div className="img">
      <a href={img}>
        <img src={img} />
      </a>
    </div>
  );
};

export default Image;
