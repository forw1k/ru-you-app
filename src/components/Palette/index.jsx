import React, { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { ChromePicker } from "react-color";
import Icons from "../Icons";
import "./styles.scss";
import {
  addColorAction,
  updateColorAction,
  deleteItemAction,
} from "../../actions";

const Palette = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [chosenColor, setChosenColor] = useState("#fff");
  const state = useStore().getState();
  const [id, setId] = useState(JSON.stringify(Date.now()));
  const dispatch = useDispatch();
  const popover = {
    position: "absolute",
    zIndex: "2",
  };
  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  };

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
    dispatch(addColorAction({ id, color: chosenColor }));
  };
  const handleClose = () => {
    setId(JSON.stringify(Date.now()));
    setDisplayColorPicker(false);
    setChosenColor("#fff");
  };
  const editColor = (id) => {
    setDisplayColorPicker(!displayColorPicker);
    setId(id);
  };
  const deleteItem = (id) => {
    dispatch(deleteItemAction(id));
  }

  return (
    <div className="palette">
      <ul className="palette-list">
        {state.map((item) => (
          <li
            key={item.id}
            className="palette-list__item"
            style={{ backgroundColor: item.color }}
            onClick={() => editColor(item.id)}
          >
            <div className="btn-close"
            onClick={() => deleteItem(item.id)}>
              <Icons
                name="close"
                className="btn-close__pic"
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="palette-controls">
        <button className="btn" onClick={handleClick}>
          Добавить цвет
        </button>
        {displayColorPicker ? (
          <div style={popover}>
            <div style={cover} onClick={handleClose} />
            <ChromePicker
              color={chosenColor}
              onChange={(updateColor) => {
                setChosenColor(updateColor.hex);
                dispatch(updateColorAction(id, updateColor.hex));
              }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Palette;
