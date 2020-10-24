export const ADD_COLOR = "ADD_COLOR";
export const UPDATE_COLOR = "UPDATE_COLOR";

export const addColorAction = (color) => ({
  type: ADD_COLOR,
  color,
});

export const updateColorAction = (id, color) => ({
  type: UPDATE_COLOR,
  color,
  id,
});
