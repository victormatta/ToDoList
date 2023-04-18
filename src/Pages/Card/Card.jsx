import "./Card.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import React, { useState } from "react";

export function Card(props) {
  const [color, setColor] = useState(props.colorCurrent); //rgb red, green , blue

  const handleColorChange = () => {
    const newColor =
      color === props.colorCurrent ? "#00FF00" : props.colorCurrent; // Adicione uma condição para verificar a cor atual
    setColor(newColor);
  };

  return (
    <div className="cardStyle" style={{ backgroundColor: color }}>
      <p>{props.name}</p>

      <div className="boxButton">
        <button className="button2">
          <AiOutlineCloseCircle
            size={24}
            onClick={props.onDelete}
            type="submit"
          />
        </button>

        <button className="button" onClick={handleColorChange}>
          <FaCheck size={20} type="submit" />
        </button>
      </div>
    </div>
  );
}
