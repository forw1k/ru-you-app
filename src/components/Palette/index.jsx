import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChromePicker } from "react-color";
import "./styles.scss";
import { addColorAction, updateColorAction } from "../../actions";

const Palette = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [chosenColor, setChosenColor] = useState("#fff");
  const palette = useSelector((state) => state);
  const [id, setId] = useState("");
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
    setId(JSON.stringify(Date.now()));
    setDisplayColorPicker(!displayColorPicker);
    dispatch(addColorAction({ id, color: chosenColor }));
  };
  const handleClose = () => {
    setDisplayColorPicker(false);
    dispatch(updateColorAction(id, chosenColor));
  };

  return (
    <div className="palette">
      <ul className="palette-list">
        {palette.map((item) => (
          <li
            key={item.id}
            className="palette-list__item"
            style={{ backgroundColor: item.color }}
          ></li>
        ))}
      </ul>
      <div className="palette-controls">
        <button className="color-button" onClick={handleClick}>
          Добавить цвет
        </button>
        {displayColorPicker ? (
          <div style={popover}>
            <div style={cover} onClick={handleClose} />
            <ChromePicker
              color={chosenColor}
              onChange={(updateColor) => {
                setChosenColor(updateColor.hex);
                console.log(updateColor)
              }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Palette;
