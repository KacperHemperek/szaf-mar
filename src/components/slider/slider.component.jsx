import React from "react";

import { CgClose } from "react-icons/cg";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

import { connect } from "react-redux";
import {
  setSliderPhoto,
  toggleSlider,
} from "../../redux/slider/slider.actions";

import "./slider.styles.scss";

const Slider = ({ images, id, toggleSlider, setSliderPhoto }) => {
  const handleClose = () => {
    toggleSlider();
  };

  const handleNext = () => {
    const nextId = id === images.length - 1 ? 0 : ++id;
    setSliderPhoto(nextId);
  };

  const handlePrevious = () => {
    const nextId = id === 0 ? images.length - 1 : --id;
    setSliderPhoto(nextId);
  };

  return (
    <div className="slider-page">
      <button className="close button" onClick={handleClose}>
        <CgClose />
      </button>
      <button className="next button" onClick={handleNext}>
        <MdNavigateNext color="white" />
      </button>
      <button className="prev button" onClick={handlePrevious}>
        <MdNavigateBefore />
      </button>
      <div className="img-container">
        <img src={images[id]} alt="" />
      </div>
    </div>
  );
};

const mapStateToPtops = (state) => ({
  id: state.slider.id,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSlider: () => dispatch(toggleSlider()),
  setSliderPhoto: (photo) => dispatch(setSliderPhoto(photo)),
});

export default connect(mapStateToPtops, mapDispatchToProps)(Slider);
