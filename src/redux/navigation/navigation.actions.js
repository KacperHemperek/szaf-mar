export const toggleNavigation = () => ({
  type: "TOGGLE_NAVIGATION",
});

export const turnNavigationOff = () => ({
  type: "TURN_NAVIGATION_OFF",
});

export const selectPage = (path) => ({
  type: "SELECT_PAGE",
  payload: path,
});
