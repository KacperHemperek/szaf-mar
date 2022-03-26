const INITIAL_STATE = { id: 0, open: false };

const sliderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_PHOTO": {
      return {
        ...state,
        id: action.payload,
      };
    }
    case "TOGGLE_SLIDER": {
      return {
        ...state,
        open: !state.open,
      };
    }
    case "TURN_SLIDER_OFF": {
      return {
        ...state,
        open: false,
      };
    }
    default:
      return state;
  }
};

export default sliderReducer;
