const INITIAL_STATE = { navigationIsOpen: false, path: "" };

const navigationReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TOGGLE_NAVIGATION": {
      return {
        ...state,
        navigationIsOpen: !state.navigationIsOpen,
      };
    }
    case "TURN_NAVIGATION_OFF": {
      return {
        ...state,
        navigationIsOpen: false,
      };
    }
    case "SELECT_PAGE": {
      return {
        ...state,
        path: payload,
      };
    }
    default:
      return state;
  }
};

export default navigationReducer;
