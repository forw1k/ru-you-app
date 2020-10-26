import { ADD_COLOR, UPDATE_COLOR, DELETE_ITEM } from "../actions";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_COLOR:
      return [...state, action.color];
    case UPDATE_COLOR:
      return state.map((item) =>
        item.id === action.id ? { ...item, color: action.color } : item
      );
    case DELETE_ITEM: {
      const index = state.findIndex(item => item.id === action.id)
      return state.splice(0, index)
    }
    default:
      return state;
  }
}
