import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ChromePicker } from "react-color";
import "./styles.scss";

const Palette = () => {
  const palette = useSelector((state) => state.palette);
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
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const handleClick = () => setDisplayColorPicker(!displayColorPicker);
  const handleClose = () => setDisplayColorPicker(false);
  const [chosenColor, setChosenColor] = useState("#fff");

  return (
    <div className="palette">
      <ul className="palette-list">
        {palette.map((color, i) => (
          <li
            key={i}
            className="palette-list__item"
            style={{ backgroundColor: color }}
          ></li>
        ))}
      </ul>
      <div className="palette-controls">
        {!displayColorPicker && (
          <button className="color-button" onClick={handleClick}>
            Добавить цвет
          </button>
        )}
        {displayColorPicker ? (
          <div style={popover}>
            <div style={cover} onClick={handleClose} />
            <ChromePicker
              color={chosenColor}
              onChange={(updateColor) => setChosenColor(updateColor.hex)}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Palette;
