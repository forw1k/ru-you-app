import { ADD_ITEM, UPDATE_COLOR, DELETE_ITEM } from "../actions";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.color];
    case UPDATE_COLOR:
      return state.map((item) =>
        item.id === action.id ? { ...item, color: action.color } : item
      );
    case DELETE_ITEM: 
      return state.filter(item => item.id !== action.id)
      
    default:
      return state;
  }
}
