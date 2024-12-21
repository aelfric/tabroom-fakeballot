import React, { AnchorHTMLAttributes } from "react";
import "./App.css";
import "./tabroom.css";
import "./fonts.css";

export function FakeLink<T>(props: AnchorHTMLAttributes<T>) {
  return (
    <a href={"#"} className={props.className}>
      {props.children}
    </a>
  );
}
