import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ChromePicker } from "react-color";
import "./styles.scss";

const Palette = () => {
  const palette = useSelector((state) => state.palette);
  const [chosenColor, setChosenColor] = useState("#fff");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

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
        <button
          onClick={() =>
            setShowColorPicker((showColorPicker) => !showColorPicker) &&
            setIsVisible((isVisible) => !isVisible)
          }
          className="color-button"
          style={setIsVisible ? {} : { display: "none" }}
        >
          {showColorPicker ? "" : "Добавить цвет"}
        </button>
        {showColorPicker && (
          <ChromePicker
            color={chosenColor}
            onChange={(updatedColor) => setChosenColor(updatedColor.hex)}
          />
        )}
      </div>
    </div>
  );
};

export default Palette;
