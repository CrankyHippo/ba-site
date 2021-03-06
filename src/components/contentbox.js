import * as React from "react";
import Title from "./title";
import Image from "./image";

export default function ContentBox() {
  return (
    <div className="fade">
      <span className="content">
        <Title title="Title: So Here's The Story..." />
        <hr></hr>
        <span className="font">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod
          elementum nisi quis eleifend quam adipiscing. Mi proin sed libero enim
          sed faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit.
          Non arcu risus quis varius quam quisque id diam vel. Ut pharetra sit
          amet aliquam id diam maecenas ultricies. Enim ut sem viverra aliquet
          eget sit amet tellus cras. Suspendisse sed nisi lacus sed viverra
          tellus. Sed elementum tempus egestas sed sed risus pretium quam
          vulputate. Vel quam elementum pulvinar etiam non quam lacus
          suspendisse.
        </span>
        <Image image="content.png" />
      </span>
    </div>
  );
}
