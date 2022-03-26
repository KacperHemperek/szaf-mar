import { combineReducers } from "redux";

import photosReducer from "./photos/photos.reducer";
import sliderReducer from "./slider/slider.reducer";
import navigationReducer from "./navigation/navigation.reducer";

export default combineReducers({
  photos: photosReducer,
  slider: sliderReducer,
  navigation: navigationReducer,
});
