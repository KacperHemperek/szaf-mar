import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./image.styles.scss";
import "react-lazy-load-image-component/src/effects/opacity.css";
import {
  setSliderPhoto,
  toggleSlider,
} from "../../redux/slider/slider.actions";

const Image = ({
  img,
  idx,
  setSliderPhoto,
  toggleSlider,
  scrollPosition,
  history,
  match,
}) => {
  const handleClick = () => {
    setSliderPhoto(idx);
    toggleSlider();
  };

  return (
    <div className="img" onClick={handleClick}>
      <div>
        <LazyLoadImage
          effect="opacity"
          src={img}
          className="lazy-image"
          scrollPosition={scrollPosition}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSliderPhoto: (photo) => dispatch(setSliderPhoto(photo)),
  toggleSlider: () => dispatch(toggleSlider()),
});

export default connect(null, mapDispatchToProps)(withRouter(Image));
