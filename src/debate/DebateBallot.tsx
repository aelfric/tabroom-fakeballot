import React from "react";
import { FakeLink } from "../FakeLink";
import { Link } from "@tanstack/react-router";

export function DebateBallot({
  round = { name: "", room: "", time: "" },
}: {
  round: { name: string; room: string; time: string };
}) {
  return (
    <div
      className="bluebordertop odd marbottom  flexkids"
      id="7502338"
      title="Round at Franks Test Tournament in PF Debate for Riccobono"
    >
      <div className="full flexrow">
        <span className="quarter semibold padvert padleft">Round</span>
        <span className="threequarters">
          <span className="fourfifths true nospace padvertless">
            {round.name}
          </span>
          <span className="fifth rightalign padright padvertless">
            <FakeLink
              className="buttonwhite bluetext fa fa-table fa-sm"
              target="_blank"
              title="Public Round Schematic"
            ></FakeLink>
          </span>
        </span>
      </div>

      <div className="full ltbordertop flexrow">
        <span className="quarter semibold padvert padleft">Room</span>

        <span className="threequarters flexrow leftalign">{round.room}</span>
      </div>

      <div className="full ltbordertop flexrow">
        <span className="quarter semibold padleft">Start</span>

        <span className="threequarters flexrow">{round.time}</span>
      </div>
      <div className="full ltborderbottom ltbordertop flexrow">
        <span className="quarter semibold padleft">Entries</span>

        <span className="threequarters flexrow padvertless wrap">
          <span className="full flexrow wrap padvertless smallish">
            <span className="fifth semibold nospace">Aff</span>
            <span className="fourfifths nospace">Williams Prep GB</span>
          </span>
          <span className="full flexrow wrap padvertless smallish">
            <span className="fifth semibold nospace">Neg</span>
            <span className="fourfifths nospace">Academy NB</span>
          </span>
        </span>
      </div>

      <div className="full ltbordertop flexrow">
        <div className="full flexrow">
          <span className="half centeralign"></span>

          <span className="fourfifths rightalign">
            <Link to={"/debate"} className="greentext invert buttonwhite">
              ON MY WAY!
            </Link>

            <span className="quarterspacer"></span>
          </span>
        </div>
      </div>
    </div>
  );
}
