import React, { AnchorHTMLAttributes } from "react";
import "./App.css";
import "./fonts.css";
import "./tabroom.css";
import "./tabroom.overrides.css";

export function FakeLink<T>(props: Readonly<AnchorHTMLAttributes<T>>) {
  return (
    <a href={"#"} className={props.className}>
      {props.children}
    </a>
  );
}
