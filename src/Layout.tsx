import React, { ReactNode } from "react";
import Headers from "./Menus";
import { FakeLink } from "./App";

export default function Layout(props: { children: ReactNode }) {
  return (
    <div id="overlay">
      <div id="wrapper">
        <Headers />
        {props.children}
      </div>
      <div id="footer">
        <span className="leftlinks twothirds">
          <FakeLink tabIndex={-1} href="https://www.speechanddebate.org/join">
            Join the National Speech &amp; Debate Association
          </FakeLink>

          <FakeLink
            tabIndex={-1}
            href="https://www.speechanddebate.org/mission"
          >
            About
          </FakeLink>

          <FakeLink tabIndex={-1} href="https://support.tabroom.com">
            Help
          </FakeLink>

          <FakeLink
            tabIndex={-1}
            href="https://www.tabroom.com/index/about.mhtml"
          >
            Contact
          </FakeLink>
        </span>
      </div>
    </div>
  );
}
