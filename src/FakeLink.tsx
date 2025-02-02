import React, { AnchorHTMLAttributes } from "react";
import "./App.css";
import "./tabroom.css";
import "./tabroom.overrides.css";
import "./fonts.css";

export function FakeLink<T>(props: Readonly<AnchorHTMLAttributes<T>>) {
  return (
    <a href={"#"} className={props.className}>
      {props.children}
    </a>
  );
}
