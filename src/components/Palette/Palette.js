import React from "react";
import { SketchPicker } from "react-color";

function Palette() {
  return (
    <div className="palette">
      <SketchPicker />
      <input type="submit" value="Добавить цвет" className="btn"></input>
    </div>
  );
}

export default Palette;
