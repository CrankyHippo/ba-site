import * as React from "react";

export default function Image(props) {
  return (
    <div className="fade">
      <img
        className="img"
        src={`./Assets/Images/${props.image}`}
        alt="Base Shooter"
        width=""
        height=""
      ></img>
    </div>
  );
}
