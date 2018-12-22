import React from "react";
import Headers from "./Menus";

export default function Layout(props) {
  return (
    <div id="overlay">
      <div id="wrapper">
        <Headers />
        {props.children}
      </div>
      <div id="footer">
        <span className="leftlinks twothirds">
          <a tabIndex="-1" href="https://www.speechanddebate.org/join">
            Join the National Speech &amp; Debate Association
          </a>

          <a tabIndex="-1" href="https://www.speechanddebate.org/mission">
            About
          </a>

          <a tabIndex="-1" href="https://support.tabroom.com">
            Help
          </a>

          <a tabIndex="-1" href="https://www.tabroom.com/index/about.mhtml">
            Contact
          </a>
        </span>
      </div>
    </div>
  );
}
