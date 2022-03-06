import { combineReducers } from "redux";

import photosReducer from "./photos/photos.reducer";

export default combineReducers({
  photos: photosReducer,
});
