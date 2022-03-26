export const setSliderPhoto = (photo) => ({
  type: "SET_PHOTO",
  payload: photo,
});

export const toggleSlider = () => ({
  type: "TOGGLE_SLIDER",
});

export const turnSliderOff = () => ({
  type: "TURN_SLIDER_OFF",
});
