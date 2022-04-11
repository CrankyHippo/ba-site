import * as React from "react";

export default function Title(props) {
  return (
    <div>
      <span className="title">
        <span className="typewriter">
          <h1>{props.title}</h1>
        </span>
      </span>
    </div>
  );
}
