import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function DecreaseBrush({ brushSize, setBrushSize }) {
  return (
    <button
      onClick={() => brushSize > 5 && setBrushSize(brushSize - 5)}
      className="minus"
      label = "decreaseBrush"
    >
      <FontAwesomeIcon icon="minus-square" size="lg"/>
    </button>
  );
}

export default DecreaseBrush;
