export const ADD_ITEM = "ADD_ITEM";
export const UPDATE_COLOR = "UPDATE_COLOR";
export const DELETE_ITEM = "DELETE_ITEM"

export const addItemAction = (color) => ({
  type: ADD_ITEM,
  color,
});

export const updateColorAction = (id, color) => ({
  type: UPDATE_COLOR,
  color,
  id,
});

export const deleteItemAction = (id) => ({
  type: DELETE_ITEM,
  id,
})