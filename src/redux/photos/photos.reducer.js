const photosReducer = (state = null, action) => {
  switch (action.type) {
    case "GET_PHOTOS_TO_GALLERY": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default photosReducer;
