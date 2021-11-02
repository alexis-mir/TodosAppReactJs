import React from "react";
import { MdDelete } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";
import "../../css/TodoIcon.css";

const iconClass = "Icon-svg Icon-svg--";
const iconTypes = {
  "check": (color) => (
    <MdCheckCircle className={iconClass + "check"} fill={color} />
  ),
  "uncheck": (color) => (
    <MdCheckCircleOutline className={iconClass + "uncheck"} fill={color} />
  ),
  "delete": (color) => <MdDelete className={iconClass + "delete"} fill={color} />
};
function TodoIcon({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
